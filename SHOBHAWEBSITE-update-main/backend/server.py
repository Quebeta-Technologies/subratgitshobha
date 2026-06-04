from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

import os
import uuid
import asyncio
import logging
from datetime import datetime, timezone, timedelta
from typing import List, Optional, Literal

import bcrypt
import jwt as pyjwt
import resend
from fastapi import FastAPI, APIRouter, Depends, HTTPException, Request, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field, ConfigDict


# ---------- Config ----------
MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]
JWT_SECRET = os.environ["JWT_SECRET"]
JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_DAYS = 7

RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
CONTACT_RECIPIENT_EMAIL = os.environ.get("CONTACT_RECIPIENT_EMAIL", "admin@shobha-healthcare.com")

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

app = FastAPI(title="Shobha Healthcare API")
api = APIRouter(prefix="/api")
security = HTTPBearer(auto_error=False)

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("shobha")


# ---------- Helpers ----------
def now_utc() -> datetime:
    return datetime.now(timezone.utc)


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False


def create_access_token(user_id: str, email: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "exp": now_utc() + timedelta(days=ACCESS_TOKEN_EXPIRE_DAYS),
        "iat": now_utc(),
        "type": "access",
    }
    return pyjwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


async def get_current_admin(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security),
) -> dict:
    if credentials is None or not credentials.credentials:
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = credentials.credentials
    try:
        payload = pyjwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except pyjwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except pyjwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = await db.users.find_one({"id": payload.get("sub")}, {"_id": 0, "password_hash": 0})
    if not user or user.get("role") != "admin":
        raise HTTPException(status_code=401, detail="Not authorized")
    return user


# ---------- Models ----------
class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    token: str
    user: dict


class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    company: Optional[str] = Field(None, max_length=200)
    country: Optional[str] = Field(None, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=50)
    inquiry_type: Literal[
        "Partner With Us",
        "Business Enquiries",
        "Regulatory Support",
        "Distribution",
        "Other",
    ] = "Partner With Us"
    message: str = Field(..., min_length=10, max_length=4000)


class Inquiry(InquiryCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=now_utc)
    status: Literal["new", "read", "archived"] = "new"
    email_sent: bool = False


class ProductCreate(BaseModel):
    name: str
    category: Literal["Oncology", "Respiratory", "Critical Care", "Biologicals", "Nutraceuticals", "Anti-Infective"]
    description: str
    composition: Optional[str] = None
    image_url: Optional[str] = None
    is_featured: bool = False


class Product(ProductCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=now_utc)


class HeroSlide(BaseModel):
    id: str
    eyebrow: Optional[str] = None
    headline: str
    subheadline: str
    cta_label: str
    cta_link: str
    image_url: str


class HomepageContent(BaseModel):
    hero_slides: List[HeroSlide]
    trust_strip: List[dict]
    ghana_stats: List[dict]
    founder_quote: str
    founder_name: str
    founder_title: str


# ---------- Seed defaults ----------
DEFAULT_HOMEPAGE = {
    "key": "homepage",
    "hero_slides": [
        {
            "id": "corporate",
            "eyebrow": "UAE Healthcare Brand",
            "headline": "A UAE Healthcare Brand Trusted Across 20+ Countries",
            "subheadline": "From Dubai to Africa and Southeast Asia — quality medicines and wellness products that people can actually afford. EU-GMP certified. WHO compliant. Priced for the real world.",
            "cta_label": "Explore Our Products",
            "cta_link": "#products",
            "image_url": "/brand/hero-main.png",
        },
        {
            "id": "pharma",
            "eyebrow": "Pharmaceuticals",
            "headline": "Specialised Pharmaceutical Solutions Where It Matters Most",
            "subheadline": "Cancer medicines, respiratory inhalers, critical care drugs, and biological therapies — manufactured to EU-GMP and WHO-GMP standards at certified partner facilities.",
            "cta_label": "View Pharmaceutical Range",
            "cta_link": "#products",
            "image_url": "/brand/hero-pharma.png",
        },
        {
            "id": "nutra",
            "eyebrow": "Nutraceuticals",
            "headline": "Supplements You Can Actually Trust",
            "subheadline": "Our Essential range supports women's health, men's health, and general wellness — made to GMP manufacturing standards with pure, validated ingredients.",
            "cta_label": "Explore Nutraceuticals",
            "cta_link": "#nutraceuticals",
            "image_url": "/brand/hero-nutra.png",
        },
    ],
    "trust_strip": [
        {"value": "20+", "label": "Countries Served", "icon": "countries"},
        {"value": "50+", "label": "Products", "icon": "products"},
        {"value": "EU-GMP", "label": "Certified Manufacturing", "icon": "eugmp"},
        {"value": "WHO-GMP", "label": "Compliant Standards", "icon": "who"},
    ],
    "ghana_stats": [
        {"value": "1,850+", "label": "Pharmacies"},
        {"value": "450+", "label": "Hospitals"},
        {"value": "50+", "label": "Products"},
        {"value": "USD 5M", "label": "2026 Target"},
    ],
    "founder_quote": "I didn't want to build another pharmaceutical company. I wanted to build the kind that actually shows up — in the right markets, with the right products, at the right price.",
    "founder_name": "Mr. Jagdish Maheshwari",
    "founder_title": "Founder & CEO, Shobha Healthcare F.Z.E., Dubai, UAE",
}

DEFAULT_PRODUCTS = [
    {"name": "BD-ASMA", "category": "Respiratory", "description": "MDI inhaler formulation for asthma and bronchospasm management.", "composition": "Beclomethasone Dipropionate", "image_url": "", "is_featured": True},
    {"name": "BUDESON-200", "category": "Respiratory", "description": "Budesonide inhalation for control of bronchial asthma and COPD.", "composition": "Budesonide 200 mcg", "image_url": "", "is_featured": True},
    {"name": "SAL-MET-F", "category": "Respiratory", "description": "Combination inhaler for long-term COPD and asthma maintenance therapy.", "composition": "Salmeterol + Fluticasone", "image_url": "", "is_featured": False},
    {"name": "PRABOPLATIN", "category": "Oncology", "description": "Platinum-based chemotherapy for ovarian, lung, and other solid tumors.", "composition": "Carboplatin", "image_url": "", "is_featured": True},
    {"name": "METHOTRAX", "category": "Oncology", "description": "Antineoplastic and immunosuppressive therapy in oncology and rheumatology.", "composition": "Methotrexate", "image_url": "", "is_featured": True},
    {"name": "NOXA-PARIN", "category": "Critical Care", "description": "Low molecular weight heparin for prophylaxis and treatment of thromboembolism.", "composition": "Enoxaparin Sodium", "image_url": "", "is_featured": True},
    {"name": "ESSENTIALE A-Z Complete", "category": "Nutraceuticals", "description": "Comprehensive multivitamin and multimineral for daily wellness.", "composition": "Multivitamins + Minerals", "image_url": "", "is_featured": True},
    {"name": "ESSENTIALE Women Flora Probiotic", "category": "Nutraceuticals", "description": "Probiotic blend for women's intimate and digestive health.", "composition": "Lactobacillus probiotic strains", "image_url": "", "is_featured": False},
]


@app.on_event("startup")
async def startup():
    # Indexes
    await db.users.create_index("email", unique=True)
    await db.users.create_index("id", unique=True)
    await db.inquiries.create_index("created_at")
    await db.products.create_index("id", unique=True)

    # Seed admin (idempotent)
    admin_email = os.environ["ADMIN_EMAIL"].lower()
    admin_password = os.environ["ADMIN_PASSWORD"]
    existing = await db.users.find_one({"email": admin_email})
    if not existing:
        await db.users.insert_one({
            "id": str(uuid.uuid4()),
            "email": admin_email,
            "password_hash": hash_password(admin_password),
            "name": "Admin",
            "role": "admin",
            "created_at": now_utc().isoformat(),
        })
        logger.info(f"Seeded admin user: {admin_email}")
    else:
        if not verify_password(admin_password, existing["password_hash"]):
            await db.users.update_one(
                {"email": admin_email},
                {"$set": {"password_hash": hash_password(admin_password)}},
            )
            logger.info("Updated admin password from env.")

    # Seed homepage content (idempotent)
    existing_hp = await db.content.find_one({"key": "homepage"})
    if not existing_hp:
        await db.content.insert_one(DEFAULT_HOMEPAGE)
        logger.info("Seeded default homepage content.")

    # Seed products if none
    product_count = await db.products.count_documents({})
    if product_count == 0:
        for p in DEFAULT_PRODUCTS:
            doc = {**p, "id": str(uuid.uuid4()), "created_at": now_utc().isoformat()}
            await db.products.insert_one(doc)
        logger.info(f"Seeded {len(DEFAULT_PRODUCTS)} default products.")


@app.on_event("shutdown")
async def shutdown():
    client.close()


# ---------- Routes ----------
@api.get("/")
async def root():
    return {"service": "Shobha Healthcare API", "status": "ok"}


@api.get("/health")
async def health():
    return {"status": "ok", "time": now_utc().isoformat()}


# ----- Auth -----
@api.post("/auth/login", response_model=LoginResponse)
async def login(payload: LoginRequest):
    email = payload.email.lower().strip()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(payload.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token(user["id"], user["email"])
    return LoginResponse(
        token=token,
        user={"id": user["id"], "email": user["email"], "name": user.get("name"), "role": user.get("role", "admin")},
    )


@api.get("/auth/me")
async def me(current=Depends(get_current_admin)):
    return current


# ----- Public homepage content -----
@api.get("/content/homepage")
async def get_homepage():
    doc = await db.content.find_one({"key": "homepage"}, {"_id": 0})
    if not doc:
        return DEFAULT_HOMEPAGE
    return doc


@api.put("/content/homepage")
async def update_homepage(payload: dict, current=Depends(get_current_admin)):
    payload["key"] = "homepage"
    await db.content.update_one({"key": "homepage"}, {"$set": payload}, upsert=True)
    return {"status": "ok"}


# ----- Products -----
@api.get("/products", response_model=List[Product])
async def list_products(category: Optional[str] = None, featured: Optional[bool] = None):
    q = {}
    if category:
        q["category"] = category
    if featured is not None:
        q["is_featured"] = featured
    cursor = db.products.find(q, {"_id": 0}).sort("created_at", -1)
    items = await cursor.to_list(500)
    for it in items:
        if isinstance(it.get("created_at"), str):
            try:
                it["created_at"] = datetime.fromisoformat(it["created_at"])
            except Exception:
                pass
    return items


@api.post("/products", response_model=Product)
async def create_product(payload: ProductCreate, current=Depends(get_current_admin)):
    product = Product(**payload.model_dump())
    doc = product.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.products.insert_one(doc)
    return product


@api.put("/products/{product_id}", response_model=Product)
async def update_product(product_id: str, payload: ProductCreate, current=Depends(get_current_admin)):
    doc = await db.products.find_one({"id": product_id}, {"_id": 0})
    if not doc:
        raise HTTPException(404, "Product not found")
    update = payload.model_dump()
    await db.products.update_one({"id": product_id}, {"$set": update})
    merged = {**doc, **update}
    if isinstance(merged.get("created_at"), str):
        try:
            merged["created_at"] = datetime.fromisoformat(merged["created_at"])
        except Exception:
            merged["created_at"] = now_utc()
    return merged


@api.delete("/products/{product_id}")
async def delete_product(product_id: str, current=Depends(get_current_admin)):
    res = await db.products.delete_one({"id": product_id})
    if res.deleted_count == 0:
        raise HTTPException(404, "Product not found")
    return {"status": "deleted"}


# ----- Inquiries -----
def _build_inquiry_email_html(inq: Inquiry) -> str:
    return f"""
    <table style="font-family: Inter, Arial, sans-serif; max-width:640px; margin:0 auto; border:1px solid #E9EEF5; border-radius:12px; overflow:hidden;">
      <tr><td style="background:#0738A6; padding:24px; color:white;">
        <h2 style="margin:0; font-family:Poppins, Arial, sans-serif;">New Partner Inquiry — Shobha Healthcare</h2>
      </td></tr>
      <tr><td style="padding:24px; color:#12233D;">
        <p style="margin:0 0 16px;"><strong>Inquiry Type:</strong> {inq.inquiry_type}</p>
        <p style="margin:0 0 8px;"><strong>Name:</strong> {inq.name}</p>
        <p style="margin:0 0 8px;"><strong>Company:</strong> {inq.company or '—'}</p>
        <p style="margin:0 0 8px;"><strong>Country:</strong> {inq.country or '—'}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> {inq.email}</p>
        <p style="margin:0 0 16px;"><strong>Phone:</strong> {inq.phone or '—'}</p>
        <hr style="border:none; border-top:1px solid #E9EEF5; margin:16px 0;" />
        <p style="margin:0 0 8px;"><strong>Message:</strong></p>
        <p style="margin:0; color:#4B5563; line-height:1.6; white-space:pre-wrap;">{inq.message}</p>
      </td></tr>
      <tr><td style="background:#F7FAFD; padding:16px; color:#4B5563; font-size:12px; text-align:center;">
        Submitted at {inq.created_at.isoformat()}
      </td></tr>
    </table>
    """


async def _send_inquiry_email(inq: Inquiry) -> bool:
    if not RESEND_API_KEY:
        logger.warning("RESEND_API_KEY not configured — skipping email send.")
        return False
    params = {
        "from": SENDER_EMAIL,
        "to": [CONTACT_RECIPIENT_EMAIL],
        "subject": f"New Partner Inquiry — {inq.name} ({inq.inquiry_type})",
        "html": _build_inquiry_email_html(inq),
        "reply_to": inq.email,
    }
    try:
        await asyncio.to_thread(resend.Emails.send, params)
        return True
    except Exception as e:
        logger.error(f"Resend email failed: {e}")
        return False


@api.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate):
    inq = Inquiry(**payload.model_dump())
    email_ok = await _send_inquiry_email(inq)
    inq.email_sent = email_ok
    doc = inq.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.inquiries.insert_one(doc)
    return inq


@api.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries(current=Depends(get_current_admin)):
    cursor = db.inquiries.find({}, {"_id": 0}).sort("created_at", -1)
    items = await cursor.to_list(1000)
    for it in items:
        if isinstance(it.get("created_at"), str):
            try:
                it["created_at"] = datetime.fromisoformat(it["created_at"])
            except Exception:
                pass
    return items


@api.patch("/inquiries/{inquiry_id}")
async def update_inquiry_status(inquiry_id: str, status_value: str, current=Depends(get_current_admin)):
    if status_value not in ("new", "read", "archived"):
        raise HTTPException(400, "Invalid status")
    res = await db.inquiries.update_one({"id": inquiry_id}, {"$set": {"status": status_value}})
    if res.matched_count == 0:
        raise HTTPException(404, "Inquiry not found")
    return {"status": "updated"}


@api.delete("/inquiries/{inquiry_id}")
async def delete_inquiry(inquiry_id: str, current=Depends(get_current_admin)):
    res = await db.inquiries.delete_one({"id": inquiry_id})
    if res.deleted_count == 0:
        raise HTTPException(404, "Inquiry not found")
    return {"status": "deleted"}


# Mount and CORS
app.include_router(api)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

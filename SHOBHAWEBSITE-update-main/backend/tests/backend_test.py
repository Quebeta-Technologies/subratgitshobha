"""
Backend regression test suite for Shobha Healthcare API.
Covers: health, public content/products, inquiries, auth, admin CRUD.
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://shobha-pharma.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

ADMIN_EMAIL = "admin@shobhahealthcare.com"
ADMIN_PASSWORD = "Shobha@2026"


@pytest.fixture(scope="session")
def admin_token():
    r = requests.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=15)
    assert r.status_code == 200, f"Admin login failed: {r.status_code} {r.text}"
    return r.json()["token"]


@pytest.fixture(scope="session")
def auth_headers(admin_token):
    return {"Authorization": f"Bearer {admin_token}"}


# ---------- Health ----------
class TestHealth:
    def test_health_ok(self):
        r = requests.get(f"{API}/health", timeout=10)
        assert r.status_code == 200
        assert r.json().get("status") == "ok"


# ---------- Public homepage content ----------
class TestHomepageContent:
    def test_get_homepage_structure(self):
        r = requests.get(f"{API}/content/homepage", timeout=10)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data.get("hero_slides"), list) and len(data["hero_slides"]) == 3
        # validate each slide
        for slide in data["hero_slides"]:
            for k in ("id", "headline", "subheadline", "cta_label", "cta_link", "image_url"):
                assert k in slide and slide[k]
        assert len(data["trust_strip"]) == 4
        assert len(data["ghana_stats"]) == 4
        assert data["founder_name"] == "Mr. Jagdish Maheshwari"
        assert "Founder" in data["founder_title"]
        assert isinstance(data["founder_quote"], str) and len(data["founder_quote"]) > 30


# ---------- Products ----------
class TestProductsPublic:
    def test_list_products_min8(self):
        r = requests.get(f"{API}/products", timeout=10)
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 8
        cats = {p["category"] for p in items}
        assert {"Oncology", "Respiratory", "Critical Care", "Nutraceuticals"}.issubset(cats)


# ---------- Inquiries (Public POST) ----------
class TestInquiriesPublic:
    def test_create_inquiry_valid(self):
        payload = {
            "name": "TEST_John Doe",
            "email": "test_inquiry@example.com",
            "company": "TestCo",
            "country": "UAE",
            "phone": "+971500000000",
            "inquiry_type": "Partner With Us",
            "message": "Hello, this is a sufficiently long test inquiry message.",
        }
        r = requests.post(f"{API}/inquiries", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and data["email_sent"] is False  # RESEND_API_KEY empty
        assert data["name"] == payload["name"]
        assert data["status"] == "new"
        # store for later cleanup/verification
        pytest.created_inquiry_id = data["id"]

    def test_create_inquiry_short_message_422(self):
        r = requests.post(f"{API}/inquiries", json={
            "name": "TEST_Short",
            "email": "short@example.com",
            "message": "hi",
            "inquiry_type": "Partner With Us",
        }, timeout=10)
        assert r.status_code == 422

    def test_create_inquiry_invalid_email_422(self):
        r = requests.post(f"{API}/inquiries", json={
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "message": "This is a valid message length though.",
            "inquiry_type": "Partner With Us",
        }, timeout=10)
        assert r.status_code == 422


# ---------- Auth ----------
class TestAuth:
    def test_login_success(self):
        r = requests.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=10)
        assert r.status_code == 200
        data = r.json()
        assert "token" in data and isinstance(data["token"], str)
        assert data["user"]["role"] == "admin"
        assert data["user"]["email"] == ADMIN_EMAIL

    def test_login_wrong_password(self):
        r = requests.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": "wrongpass"}, timeout=10)
        assert r.status_code == 401

    def test_me_unauth(self):
        r = requests.get(f"{API}/auth/me", timeout=10)
        assert r.status_code == 401

    def test_me_with_token(self, auth_headers):
        r = requests.get(f"{API}/auth/me", headers=auth_headers, timeout=10)
        assert r.status_code == 200
        assert r.json()["role"] == "admin"


# ---------- Admin Inquiries ----------
class TestAdminInquiries:
    def test_list_inquiries_unauth(self):
        r = requests.get(f"{API}/inquiries", timeout=10)
        assert r.status_code == 401

    def test_list_inquiries_auth(self, auth_headers):
        r = requests.get(f"{API}/inquiries", headers=auth_headers, timeout=10)
        assert r.status_code == 200
        assert isinstance(r.json(), list)

    def test_patch_then_delete_inquiry(self, auth_headers):
        # Create one
        payload = {
            "name": "TEST_Lifecycle",
            "email": "lifecycle@example.com",
            "message": "Lifecycle test for patch and delete operations.",
            "inquiry_type": "Business Enquiries",
        }
        r = requests.post(f"{API}/inquiries", json=payload, timeout=10)
        inquiry_id = r.json()["id"]

        # PATCH to read
        r = requests.patch(f"{API}/inquiries/{inquiry_id}?status_value=read", headers=auth_headers, timeout=10)
        assert r.status_code == 200

        # Verify via list
        r = requests.get(f"{API}/inquiries", headers=auth_headers, timeout=10)
        match = next((x for x in r.json() if x["id"] == inquiry_id), None)
        assert match is not None and match["status"] == "read"

        # DELETE
        r = requests.delete(f"{API}/inquiries/{inquiry_id}", headers=auth_headers, timeout=10)
        assert r.status_code == 200

        # Verify deleted
        r = requests.get(f"{API}/inquiries", headers=auth_headers, timeout=10)
        assert not any(x["id"] == inquiry_id for x in r.json())


# ---------- Admin Products CRUD ----------
class TestAdminProducts:
    def test_create_unauth(self):
        r = requests.post(f"{API}/products", json={"name": "TEST_X", "category": "Oncology", "description": "x"}, timeout=10)
        assert r.status_code == 401

    def test_full_product_lifecycle(self, auth_headers):
        payload = {
            "name": f"TEST_Product_{uuid.uuid4().hex[:6]}",
            "category": "Oncology",
            "description": "Test product description",
            "composition": "TestActive",
            "image_url": "",
            "is_featured": False,
        }
        r = requests.post(f"{API}/products", json=payload, headers=auth_headers, timeout=10)
        assert r.status_code == 200, r.text
        product = r.json()
        pid = product["id"]
        assert product["name"] == payload["name"]

        # GET verify
        r = requests.get(f"{API}/products", timeout=10)
        assert any(p["id"] == pid for p in r.json())

        # PUT update
        update = {**payload, "name": payload["name"] + "_UPD", "is_featured": True}
        r = requests.put(f"{API}/products/{pid}", json=update, headers=auth_headers, timeout=10)
        assert r.status_code == 200
        assert r.json()["name"].endswith("_UPD")

        # Verify persisted
        r = requests.get(f"{API}/products", timeout=10)
        match = next((p for p in r.json() if p["id"] == pid), None)
        assert match and match["is_featured"] is True

        # DELETE
        r = requests.delete(f"{API}/products/{pid}", headers=auth_headers, timeout=10)
        assert r.status_code == 200

        # Verify gone
        r = requests.get(f"{API}/products", timeout=10)
        assert not any(p["id"] == pid for p in r.json())


# ---------- Admin Homepage Content ----------
class TestAdminContent:
    def test_update_homepage_persists(self, auth_headers):
        # Get current
        r = requests.get(f"{API}/content/homepage", timeout=10)
        current = r.json()
        original_headline = current["hero_slides"][0]["headline"]

        # Modify
        modified = {**current}
        modified["hero_slides"] = [dict(s) for s in current["hero_slides"]]
        new_headline = original_headline + " | TEST_EDIT"
        modified["hero_slides"][0]["headline"] = new_headline
        # remove key if present, server will set it
        modified.pop("key", None)

        r = requests.put(f"{API}/content/homepage", json=modified, headers=auth_headers, timeout=10)
        assert r.status_code == 200

        # Verify persisted
        r = requests.get(f"{API}/content/homepage", timeout=10)
        assert r.json()["hero_slides"][0]["headline"] == new_headline

        # Restore
        modified["hero_slides"][0]["headline"] = original_headline
        r = requests.put(f"{API}/content/homepage", json=modified, headers=auth_headers, timeout=10)
        assert r.status_code == 200

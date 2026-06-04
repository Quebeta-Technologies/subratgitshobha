# Shobha Healthcare — Product Requirements (PRD)

## Original Problem Statement
Design a premium, modern, high-credibility pharmaceutical and healthcare company website for SHOBHA Healthcare. Position the brand as a serious, credible, export-ready healthcare company with strong quality systems, broad product portfolio, and professional corporate identity. Sources: Brand Asset PDF, Home Page Content PDF, Brand Palette PDF, Logo SVG.

## User Personas
1. **Distributors & Importers** (Africa, Asia, MENA) — looking for trusted, regulatory-compliant pharma partners.
2. **Hospitals / Institutional buyers** — need credible specialty therapeutic supply.
3. **Healthcare partners (regulatory, marketing)** — evaluating collaboration opportunities.
4. **Pharmacists & Retail buyers** — checking product authenticity and range.
5. **Internal Admin** — manages site content, products, and partner inquiries via /admin.

## Architecture
- **Backend**: FastAPI + Motor (MongoDB), JWT auth, Resend for emails.
- **Frontend**: React 19 + react-router-dom v7 + Tailwind + shadcn primitives + framer-motion.
- **Storage**: MongoDB (`users`, `inquiries`, `products`, `content`).
- **Auth**: JWT Bearer token, 7-day expiry, admin seeded from env (idempotent).

## Brand System (from user PDFs)
- Colors: Primary Blue #0738A6, Dark Navy #12233D, Cyan #62C7F5, Green #9DCD4A, Gold #F2C14E, Coral #E84D6C, Body Gray #4B5563, Soft Gray #E9EEF5, Light BG #F7FAFD.
- Fonts: Poppins (display/headings/CTAs), Inter (body/UI).
- Buttons: pill, primary blue (#0738A6 → hover #052C82), secondary outline blue, wellness green for nutraceutical CTAs.

## What's Implemented (Feb 2026 — v1)
- Premium homepage with: utility bar, sticky header, 3-slide hero carousel, trust strip, "What We Do" 5-category bento, "Why Shobha" differentiators, dark Global Presence section with map, Ghana stats, founder message, partner marquee, testimonials, final CTA band, contact form, dark footer.
- Contact / Partner Inquiry form → stored in MongoDB and emailed via Resend (best-effort; logs warning if RESEND_API_KEY not configured).
- Admin Console (`/admin`) — protected by JWT login:
  - Dashboard (KPIs + recent inquiries/products)
  - Inquiries list + detail (mark read/archived, delete)
  - Products CRUD with category + featured toggle
  - Homepage CMS (hero slides, trust strip, ghana stats, founder message)
- Seed defaults on startup: admin user, homepage content, 8 sample products.

## Backlog / Next Tasks
- **P1** Provide Resend API key + verified sender domain (currently empty → emails skipped).
- **P1** Real founder portrait of Mr. Jagdish Maheshwari.
- **P1** Image upload widget (object storage integration) for admin instead of URL-only inputs.
- **P2** Multi-page expansion: dedicated About / Quality & Compliance / Products listing / Global Presence pages.
- **P2** WhatsApp floating button + sticky "Partner With Us" CTA.
- **P2** Blog/News module.
- **P2** Product detail pages (per SKU) with technical pack downloads.
- **P3** Localization (Arabic, French) for MENA & West Africa.
- **P3** Analytics integration (GA4 / PostHog).
- **P3** Cookie consent banner + privacy policy / terms pages.

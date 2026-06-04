# Auth Testing — Shobha Healthcare

## Admin Credentials
- Email: `admin@shobhahealthcare.com`
- Password: `Shobha@2026`

## Endpoints
- POST `/api/auth/login` — body `{email, password}` → `{token, user}`
- GET `/api/auth/me` — header `Authorization: Bearer <token>`

## Manual Test
```bash
API_URL=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d '=' -f2)
TOKEN=$(curl -s -X POST "$API_URL/api/auth/login" -H "Content-Type: application/json" -d '{"email":"admin@shobhahealthcare.com","password":"Shobha@2026"}' | python3 -c "import sys,json;print(json.load(sys.stdin)['token'])")
curl -s -X GET "$API_URL/api/auth/me" -H "Authorization: Bearer $TOKEN"
```

## DB
- Admin user lives in `users` collection with `password_hash` (bcrypt `$2b$...`), unique index on `email`.
- Seed is idempotent on startup: if email exists, only the password hash is updated when ADMIN_PASSWORD env changes.

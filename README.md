<<<<<<< HEAD
CollectFlow
=======
# CollectFlow authentication + MongoDB integration

This package is arranged to fit the three folders shown in your VS Code Explorer:

```text
COLLECTFLOW/
├── Dashboard/                 # Keep your existing dashboard code here
├── Database/
│   └── add_debtor_invitations.js
└── login_register/
    ├── src/                   # React + Tailwind login/register UI
    ├── backend/
    │   ├── app/main.py        # FastAPI auth API; connects to MongoDB
    │   ├── requirements.txt
    │   └── .env.example
    ├── package.json
    ├── vite.config.js
    └── ...
```

## How the connection works

React does not connect to MongoDB directly. The browser sends requests to `/api/auth/...`; Vite proxies those requests to FastAPI on port 8000; FastAPI connects to your existing `collectflow` MongoDB database.

The backend uses the existing collections:

- `users` for account credentials and profile data
- `organizations` for new creditor/agency organisations
- `workspaces` for each organisation's first workspace
- `memberships` for the owner-to-workspace relationship
- `debtors` for debtor portal identity links
- `debtor_invitations` for one-time debtor registration codes (new small collection)

Passwords are hashed with Argon2. The session is stored in an HttpOnly cookie; it is not put in localStorage. The selected account type is validated by the backend and does not itself grant permissions.

## 1. Keep your existing database setup

Do not drop your database or rerun a replacement setup script just to connect authentication. Your existing `collectflow` collections stay as they are.

The API creates the `debtor_invitations` collection and its indexes on startup. Alternatively, run the included migration once from the project root:

```powershell
mongosh "mongodb://127.0.0.1:27017/collectflow" --file ".\Database\add_debtor_invitations.js"
```

If MongoDB is running with authentication, add the correct username/password to the URI (do not share that URI or commit it to Git).

## 2. Configure the FastAPI backend

Open a terminal in VS Code:

```powershell
cd .\login_register\backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
```

Open `login_register/backend/.env`. Generate a secret in another terminal:

```powershell
python -c "import secrets; print(secrets.token_urlsafe(48))"
```

Paste the output as `JWT_SECRET_KEY` in `.env`. For a normal local MongoDB install, these values are suitable:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/
MONGODB_DATABASE=collectflow
COOKIE_SECURE=false
COOKIE_SAMESITE=lax
```

Save the file, then start the API from `login_register/backend`:

```powershell
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Check the API at `http://127.0.0.1:8000/api/health`. Interactive API docs are at `http://127.0.0.1:8000/docs`.

## 3. Start the React frontend

Open a second terminal:

```powershell
cd .\login_register
npm install
npm run dev
```

Open the local Vite URL, normally `http://127.0.0.1:5173`. The Vite config forwards `/api` requests to FastAPI.

## 4. Test registration and login

1. Choose **Business / Creditor** or **Collection Agency**.
2. Enter your name, email, organisation name and password.
3. Submit. The API creates a user, organisation, main workspace and owner membership.
4. The API sets a secure HttpOnly session cookie and returns the dashboard route.
5. Log out should later be connected to `POST /api/auth/logout`; the endpoint is already available.

Check MongoDB with:

```javascript
use collectflow
 db.users.find({}, { fullName: 1, email: 1, accountType: 1, role: 1 })
 db.organizations.find()
 db.workspaces.find()
 db.memberships.find()
```

## 5. Debtor invitation flow

Debtors must not be able to register by guessing an invoice number. A creditor first creates an invitation for the debtor's email address.

After signing in as a creditor, call `POST /api/auth/debtor-invitations` with the session cookie. Example request body:

```json
{
  "email": "accounts@example.com",
  "debtor_name": "Example Customer"
}
```

The response contains a one-time `invitation_code`. Share it only with the intended debtor through a trusted channel. The debtor selects **Debtor / Customer**, enters the same email and invitation code, and creates their password. The code is stored as a hash in MongoDB and expires after seven days.

This endpoint is available in Swagger at `/docs`. The creditor dashboard's **Invite debtor** action can be connected to it later.

## 6. Dashboard route mapping

By default the API redirects to:

- Creditor: `/dashboard/creditor`
- Agency: `/dashboard/agency`
- Debtor: `/dashboard/debtor`

These paths are environment variables in `backend/.env`. Change them to match the routes implemented in your existing `Dashboard` folder. The backend confirms an active organisation membership for creditor and agency users before returning the route.

## Important notes before production

- This is a local-development authentication integration. Email verification/OTP delivery is not wired yet. Your existing `auth_otps` collection is retained for that next step.
- Google and Microsoft buttons in the UI are still placeholders until OAuth clients and callback endpoints are configured.
- Use HTTPS and set `COOKIE_SECURE=true` in production. Store `.env` outside source control, use a strong unique JWT secret, and add rate limiting, CSRF protection appropriate to your deployment, email verification, password reset and audit logging before public launch.
- Restrict every dashboard API query by the authenticated organisation, workspace and membership. Hiding a page in React is not access control.
- The initial organisation/workspace creation includes best-effort cleanup if a step fails. For production, use a MongoDB replica set and a multi-document transaction for onboarding.
>>>>>>> 9f96a85 (Updated code)

# CollectFlow

This project contains the CollectFlow login app and a role-aware dashboard interface based on the supplied creditor `App.jsx` reference.

Dashboard views:

- `/dashboard/creditor` — the reference layout with receivables cards, recovery trend, priorities, activity, follow-ups and the interactive cat.
- `/dashboard/agency` — client portfolio scope, collector workload and manager follow-ups in the same visual language.
- `/dashboard/pulse` — daily tasks, due dates, priorities and local preview completion progress.

## Theme and companion

The dashboard uses the supplied purple CollectFlow logo lockup and keeps the light/dark palette and compact layout from your reference. It shares the login page's `collectflow-theme` preference, including system theme behavior. The cat tilts on hover and changes expression when tapped/clicked. Its hide preference persists.

## Stack and data status

Frontend: React 18, Vite, Tailwind CSS and Lucide. Existing authentication: FastAPI and MongoDB. The SRS v1.0 architecture recommends PostgreSQL, while its v1.1 scope clarification says the dashboard update does not replace the existing MongoDB collection plan; this project retains its current MongoDB setup.

Dashboard domain read APIs are not present in the archive. The displayed figures, case names and tasks are sample preview data, marked in the app; task actions change local preview state only.

## Run locally

1. Initialise the MongoDB collections if needed:

   ```powershell
   mongosh "mongodb://127.0.0.1:27017/collectflow" --file ".\Database\Collectflow_DB.js"
   ```

2. Start FastAPI:

   ```powershell
   cd .\login_register\backend
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   pip install -r requirements.txt
   Copy-Item .env.example .env
   ```

   Set a random `JWT_SECRET_KEY` in `.env`, then run:

   ```powershell
   uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
   ```

3. Start the login app on port 5173:

   ```powershell
   cd .\login_register
   npm install
   npm run dev
   ```

4. Start the dashboards on port 5174:

   ```powershell
   cd .\dashboard\creditor
   npm install
   npm run dev
   ```

   Sign in at `http://127.0.0.1:5173`. The API routes creditor and agency accounts to their dashboard. Copy `dashboard/creditor/.env.example` to `.env` in that folder and set `VITE_LOGIN_URL` if your login URL differs.

Live tenant-scoped metrics, workspace switching and record drill-down routes remain to be connected to dashboard APIs.

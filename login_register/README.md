# login_register

This folder contains the CollectFlow React + Tailwind authentication frontend and its FastAPI backend.

For the complete MongoDB setup, environment configuration and Windows PowerShell run commands, read the parent `README.md` after extracting the ZIP.

Quick start:

- Backend: open `backend/`, create a virtual environment, install `requirements.txt`, configure `.env`, then run `uvicorn app.main:app --reload --host 127.0.0.1 --port 8000`.
- Frontend: open this `login_register/` folder in another terminal, run `npm install`, then `npm run dev`. The login app opens the authenticated dashboard on port 5174 by default; set `VITE_DASHBOARD_BASE_URL` in `.env` if it runs elsewhere.

The Vite development server proxies `/api` to FastAPI. Do not put MongoDB credentials or JWT secrets in frontend environment variables.

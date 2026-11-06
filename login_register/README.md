# login_register

This folder contains the CollectFlow React + Tailwind authentication frontend and its FastAPI backend.

For the complete MongoDB setup, environment configuration, Windows PowerShell commands, test flow and dashboard route mapping, read the parent `collectflow-integration/README.md` after extracting the ZIP.

Quick start:

- Backend: open `backend/`, create a virtual environment, install `requirements.txt`, configure `.env`, then run `uvicorn app.main:app --reload --host 127.0.0.1 --port 8000`.
- Frontend: open this `login_register/` folder in another terminal, run `npm install`, then `npm run dev`.

The Vite development server proxies `/api` to FastAPI. Do not put MongoDB credentials or JWT secrets in frontend environment variables.

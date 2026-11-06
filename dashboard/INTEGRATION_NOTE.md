# Dashboard route integration

The authentication API currently sends users to these frontend paths by default:

- `/dashboard/creditor`
- `/dashboard/agency`
- `/dashboard/debtor`

Connect these paths to your existing Dashboard application, or change the three `*_DASHBOARD_PATH` values in `login_register/backend/.env` to match your routes.

Keep all data access protected by FastAPI membership and tenant checks. Frontend routing alone does not secure dashboard data.

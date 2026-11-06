# Dashboard routes

- `/dashboard/creditor` — creditor overview styled from the supplied `App.jsx`.
- `/dashboard/agency` — agency portfolios and collector workload.
- `/dashboard/pulse` — Daily Pulse for the signed-in creditor or agency.

The app checks the authenticated user through `/api/auth/me`. The existing API returns creditor and agency routes. Live invoice, case, payment and task data queries are not included; build those endpoints with tenant and mandate checks before replacing the marked sample preview data.

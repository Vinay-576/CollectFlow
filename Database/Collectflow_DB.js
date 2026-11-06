// ============================================
// COLLECTFLOW - MONGODB DATABASE INITIALIZATION
// ============================================

const DB_NAME = "collectflow";
const cf = db.getSiblingDB(DB_NAME);

print("==================================");
print("   COLLECTFLOW DATABASE SETUP");
print("==================================");

// Create collections safely
const collections = [
    "organizations",
    "users",
    "workspaces",
    "memberships",
    "client_engagements",
    "portfolios",
    "debtors",
    "invoices",
    "debt_cases",
    "evidence_documents",
    "disputes",
    "payments",
    "payment_allocations",
    "promises",
    "tasks",
    "communications",
    "ai_recommendations",
    "audit_events",
    "notifications",
    "integration_connections",
    "import_jobs",
    "auth_otps"
];

collections.forEach(name => {
    if (!cf.getCollectionNames().includes(name)) {
        cf.createCollection(name);
        print("Created: " + name);
    } else {
        print("Already exists: " + name);
    }
});

// ============================================
// INDEXES
// ============================================

// Organizations
cf.organizations.createIndex({ slug: 1 }, { unique: true });
cf.organizations.createIndex({ organizationType: 1 });

// Users
cf.users.createIndex({ email: 1 }, { unique: true });
cf.users.createIndex({ status: 1 });

// Workspaces
cf.workspaces.createIndex({ organizationId: 1 });
cf.workspaces.createIndex({ slug: 1 }, { unique: true });

// Memberships
cf.memberships.createIndex(
    { workspaceId: 1, userId: 1 },
    { unique: true }
);
cf.memberships.createIndex({ organizationId: 1 });

// Client engagements
cf.client_engagements.createIndex({ creditorOrgId: 1 });
cf.client_engagements.createIndex({ agencyOrgId: 1 });
cf.client_engagements.createIndex({ status: 1 });

// Portfolios
cf.portfolios.createIndex({ creditorOrgId: 1 });
cf.portfolios.createIndex({ agencyOrgId: 1 });
cf.portfolios.createIndex({ clientEngagementId: 1 });

// Debtors
cf.debtors.createIndex({ creditorOrgId: 1 });
cf.debtors.createIndex({ name: 1 });

// Invoices
cf.invoices.createIndex({ creditorOrgId: 1 });
cf.invoices.createIndex({ debtorId: 1 });
cf.invoices.createIndex(
    { creditorOrgId: 1, invoiceNumber: 1 },
    { unique: true }
);
cf.invoices.createIndex({ dueDate: 1 });

// Debt cases
cf.debt_cases.createIndex({ creditorOrgId: 1 });
cf.debt_cases.createIndex({ agencyOrgId: 1 });
cf.debt_cases.createIndex({ portfolioId: 1 });
cf.debt_cases.createIndex({ debtorId: 1 });
cf.debt_cases.createIndex({ status: 1 });
cf.debt_cases.createIndex({ assignedCollectorId: 1 });
cf.debt_cases.createIndex({ createdAt: -1 });

// Evidence documents
cf.evidence_documents.createIndex({ caseId: 1 });
cf.evidence_documents.createIndex({ creditorOrgId: 1 });

// Disputes
cf.disputes.createIndex({ caseId: 1 });
cf.disputes.createIndex({ status: 1 });

// Payments
cf.payments.createIndex({ caseId: 1 });
cf.payments.createIndex({ creditorOrgId: 1 });
cf.payments.createIndex({ transactionReference: 1 });

// Payment allocations
cf.payment_allocations.createIndex({ paymentId: 1 });
cf.payment_allocations.createIndex({ invoiceId: 1 });

// Promises
cf.promises.createIndex({ caseId: 1 });
cf.promises.createIndex({ dueDate: 1 });
cf.promises.createIndex({ status: 1 });

// Tasks
cf.tasks.createIndex({ assignedTo: 1 });
cf.tasks.createIndex({ caseId: 1 });
cf.tasks.createIndex({ dueDate: 1 });

// Communications
cf.communications.createIndex({ caseId: 1 });
cf.communications.createIndex({ createdAt: -1 });

// AI recommendations
cf.ai_recommendations.createIndex({ caseId: 1 });
cf.ai_recommendations.createIndex({ createdAt: -1 });

// Audit events
cf.audit_events.createIndex({ organizationId: 1 });
cf.audit_events.createIndex({ createdAt: -1 });
cf.audit_events.createIndex({ caseId: 1 });

// Notifications
cf.notifications.createIndex({ userId: 1, createdAt: -1 });
cf.notifications.createIndex({ read: 1 });

// Integrations
cf.integration_connections.createIndex({ organizationId: 1 });

// Import jobs
cf.import_jobs.createIndex({ organizationId: 1 });
cf.import_jobs.createIndex({ status: 1 });

// OTP expiration
cf.auth_otps.createIndex(
    { expiresAt: 1 },
    { expireAfterSeconds: 0 }
);

// ============================================
// DATABASE INFORMATION
// ============================================

print("\n==================================");
print("COLLECTFLOW DATABASE READY");
print("==================================");

print("Database: " + DB_NAME);
print("Collections: " + cf.getCollectionNames().length);

print("\nAvailable Collections:");

cf.getCollectionNames().sort().forEach(name => {
    print(" - " + name);
});

print("\nSetup completed successfully!");
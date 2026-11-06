export const creditorPreview = {
  metrics: [
    { label: 'Total receivables', value: '₹18.4L', note: '8% vs last month', glyph: '₹', tone: 'mint' },
    { label: 'Overdue amount', value: '₹6.1L', note: '12% vs last month', glyph: '◷', tone: 'peach' },
    { label: 'Recovered this month', value: '₹4.2L', note: '15% vs last month', glyph: '✓', tone: 'green' },
    { label: 'Pending disputes', value: '12', note: '2% vs last month', glyph: '⚖', tone: 'lilac' },
  ],
  recoveryTrend: [35, 48, 55, 63, 68],
  priorities: [
    { id: 'p1', title: 'Review 3 payment proofs', complete: true },
    { id: 'p2', title: 'Follow up on 5 promises', complete: false },
    { id: 'p3', title: 'Respond to 2 disputes', complete: false },
    { id: 'p4', title: 'Check agency updates', complete: false },
  ],
  activity: [
    { title: 'Payment received ₹75,000', detail: '2 hours ago · Case CF-1024', tone: 'mint' },
    { title: 'Promise to pay recorded', detail: '3 hours ago · Case CF-1019', tone: 'purple' },
    { title: 'New dispute raised', detail: '4 hours ago · Invoice INV-8842', tone: 'coral' },
  ],
  followUps: [
    { date: '05', month: 'Nov', title: 'Follow-up call with ABC Corp', due: '10:00 AM · High priority', tone: 'peach' },
    { date: '05', month: 'Nov', title: 'Due: Promise Payment', due: 'EOD · Case CF-1019', tone: 'yellow' },
    { date: '06', month: 'Nov', title: 'Review disputed invoice', due: '11:00 AM · Medium', tone: 'mint' },
  ],
};

export const agencyPreview = {
  metrics: [
    { label: 'Active client portfolios', value: '6', note: 'Within current mandates', glyph: '▣', tone: 'mint' },
    { label: 'Assigned cases', value: '284', note: 'Across 12 collectors', glyph: '↗', tone: 'peach' },
    { label: 'Recovered this month', value: '₹32.4L', note: 'Verified outcomes', glyph: '✓', tone: 'green' },
    { label: 'Open disputes', value: '19', note: 'Across active portfolios', glyph: '⚖', tone: 'lilac' },
  ],
  clients: [
    { name: 'Asteron Foods', cases: 72, overdue: '₹18.4L', progress: 68 },
    { name: 'Kaveri Machine Works', cases: 54, overdue: '₹12.8L', progress: 54 },
    { name: 'Varuna Components', cases: 41, overdue: '₹9.6L', progress: 76 },
  ],
  collectors: [
    { name: 'Maya R.', initials: 'MR', cases: 28, due: 5, tone: 'mint' },
    { name: 'Arjun K.', initials: 'AK', cases: 24, due: 3, tone: 'peach' },
    { name: 'Neha S.', initials: 'NS', cases: 21, due: 4, tone: 'lilac' },
  ],
  priorities: [
    { title: 'Promise follow-ups', detail: '5 commitments due today', tone: 'yellow' },
    { title: 'Manager review', detail: '3 cases waiting for approval', tone: 'peach' },
    { title: 'Client report', detail: 'Asteron Foods · due tomorrow', tone: 'mint' },
  ],
};

export const pulsePreview = [
  { id: 't1', title: 'Review payment proof', caseId: 'CF-2401', client: 'Asteron Foods', owner: 'Maya R.', due: 'Overdue · 9:30 AM', priority: 'High', status: 'open', kind: 'Payment review' },
  { id: 't2', title: 'Follow up on payment promise', caseId: 'CF-2381', client: 'Varuna Components', owner: 'Arjun K.', due: 'Today · 11:00 AM', priority: 'High', status: 'open', kind: 'Promise due' },
  { id: 't3', title: 'Respond to invoice dispute', caseId: 'CF-2408', client: 'Kaveri Machine Works', owner: 'You', due: 'Today · 2:00 PM', priority: 'Medium', status: 'open', kind: 'Dispute review' },
  { id: 't4', title: 'Request missing delivery note', caseId: 'CF-2367', client: 'Asteron Foods', owner: 'Neha S.', due: 'Tomorrow · 10:00 AM', priority: 'Low', status: 'open', kind: 'Evidence request' },
  { id: 't5', title: 'Check the latest agency update', caseId: 'CF-2320', client: 'Varuna Components', owner: 'You', due: 'Done · 9:15 AM', priority: 'Low', status: 'done', kind: 'Case follow-up' },
];

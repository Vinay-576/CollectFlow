import { useMemo, useState } from 'react';
import { ArrowRight, Briefcase, UsersRound } from 'lucide-react';
import { agencyPreview } from '../data/dashboardPreview.js';
import { CompanionWidget, EmptyState, greetingFor, MetricGrid, PageHeading, Panel, StatusPill } from '../components/DashboardPrimitives.jsx';

export default function AgencyDashboard({ user, preview, onPreviewChange, companionsHidden, onToggleCompanions }) {
  const [selectedClient, setSelectedClient] = useState('All client portfolios');
  const clients = useMemo(() => selectedClient === 'All client portfolios' ? agencyPreview.clients : agencyPreview.clients.filter((item) => item.name === selectedClient), [selectedClient]);

  return <>
    <PageHeading eyebrow="AGENCY WORKSPACE" title={greetingFor(user)} description="Keep client work moving across authorised portfolios and collector teams." companion={<CompanionWidget hidden={companionsHidden} onToggleHidden={onToggleCompanions} />} />
    <MetricGrid metrics={agencyPreview.metrics} preview={preview} />
    <div className="dashboard-grid agency-grid">
      <Panel title="Client portfolios" subtitle="Cases within active engagement scope" action={preview ? <label className="filter-select"><span className="sr-only">Filter sample portfolios</span><select value={selectedClient} onChange={(event) => setSelectedClient(event.target.value)}><option>All client portfolios</option>{agencyPreview.clients.map((client) => <option key={client.name}>{client.name}</option>)}</select></label> : <span className="range-label">Active mandates</span>}>
        {preview ? <div className="client-list">{clients.map((client) => <article className="client-row" key={client.name}><div className="client-identity"><span className="client-avatar">{client.name.slice(0, 1)}</span><div><strong>{client.name}</strong><small>{client.cases} assigned cases</small></div></div><div className="client-balance"><strong>{client.overdue}</strong><small>Overdue</small></div><div className="client-progress"><div className="progress-copy"><span>Task progress</span><strong>{client.progress}%</strong></div><div className="progress-track"><span style={{ width: `${client.progress}%` }} /></div></div></article>)}</div> : <EmptyState title="No authorised portfolios to show" description="Only portfolios covered by active client engagements will appear here." onPreviewChange={onPreviewChange} />}
      </Panel>

      <Panel title="Collector workload" subtitle="Assigned cases and tasks due today" action={<UsersRound size={16} className="panel-icon" />}>
        {preview ? <div className="collector-list">{agencyPreview.collectors.map((collector) => <div className="collector-row" key={collector.name}><span className={`collector-avatar avatar-${collector.tone}`}>{collector.initials}</span><div className="collector-name"><strong>{collector.name}</strong><small>{collector.cases} cases assigned</small></div><StatusPill tone={collector.due > 3 ? 'peach' : 'mint'}>{collector.due} due</StatusPill></div>)}</div> : <EmptyState title="Workload will appear here" description="Collector assignments and task due dates are not connected yet." />}
      </Panel>

      <Panel title="Next up" subtitle="Promise follow-ups, reviews and reports">
        {preview ? <div className="agency-priorities">{agencyPreview.priorities.map((item) => <div className="agency-priority" key={item.title}><span className={`mini-priority tone-${item.tone}`}>{item.tone === 'yellow' ? '◷' : item.tone === 'peach' ? '!' : '↗'}</span><div><strong>{item.title}</strong><small>{item.detail}</small></div><ArrowRight size={14} className="panel-icon" /></div>)}</div> : <EmptyState title="No work items yet" description="Promises due, debtor responses and manager reviews will be surfaced here." />}
      </Panel>

      <Panel title="Recovery outcomes" subtitle="Verified client portfolio progress" action={<Briefcase size={16} className="panel-icon" />}>
        {preview ? <div className="outcome-list">{agencyPreview.clients.map((client) => <div className="outcome-row" key={client.name}><span>{client.name}</span><div className="progress-track"><span style={{ width: `${client.progress}%` }} /></div><strong>{client.progress}%</strong></div>)}</div> : <EmptyState title="No outcomes to chart" description="Portfolio recovery data appears only within active mandates." />}
      </Panel>
      <aside className="dashboard-footnote"><span>✦</span><p>Collector access follows the active creditor mandate and case assignment.</p></aside>
    </div>
  </>;
}

import { useState } from 'react';
import { ArrowRight, Check, Clock3 } from 'lucide-react';
import { creditorPreview } from '../data/dashboardPreview.js';
import { CompanionWidget, EmptyState, greetingFor, MetricGrid, PageHeading, Panel } from '../components/DashboardPrimitives.jsx';

function RecoveryChart({ preview }) {
  if (!preview) return <EmptyState title="Recovery trend will show here" description="A verified payment history is needed before a recovery trend can be calculated." />;
  const points = creditorPreview.recoveryTrend.map((value, index) => `${20 + index * 65},${116 - value}`).join(' ');
  return <div className="recovery-chart"><div className="chart-scale"><span>100%</span><span>75%</span><span>50%</span><span>25%</span></div><svg viewBox="0 0 300 135" role="img" aria-label="Sample recovery trend rising across five weeks"><path className="chart-grid-line" d="M0 20H300M0 50H300M0 80H300M0 110H300" /><polyline className="trend-line" points={points} />{creditorPreview.recoveryTrend.map((value, index) => <circle key={value} className="trend-point" cx={20 + index * 65} cy={116 - value} r="3.5" />)}</svg><div className="chart-labels">{creditorPreview.recoveryTrend.map((_, index) => <span key={index}>Week {index + 1}</span>)}</div><p className="chart-caption"><span />Sample recoveries · Preview data</p></div>;
}

export default function CreditorDashboard({ user, preview, onPreviewChange, companionsHidden, onToggleCompanions, onNavigate }) {
  const [tasks, setTasks] = useState(() => creditorPreview.priorities.map((task) => ({ ...task })));
  const completed = tasks.filter((task) => task.complete).length;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  const metrics = creditorPreview.metrics.map((metric) => ({ ...metric }));

  const toggleTask = (id) => setTasks((current) => current.map((task) => task.id === id ? { ...task, complete: !task.complete } : task));

  return <>
    <PageHeading eyebrow="CREDITOR OVERVIEW" title={greetingFor(user)} description="Here's your collection overview for this week." companion={<CompanionWidget hidden={companionsHidden} onToggleHidden={onToggleCompanions} />} />
    <MetricGrid metrics={metrics} preview={preview} />
    <div className="dashboard-grid overview-grid">
      <Panel title="Recovery progress" subtitle="Recovery rate and weekly trend" action={<span className="range-label">This month</span>}>
        {preview ? <div className="recovery-panel"><div className="recovery-ring" style={{ '--progress': '68%' }} role="img" aria-label="Sample collection rate 68 percent"><div><strong>68%</strong><small>Collection rate</small></div></div><div className="recovery-chart-wrap"><RecoveryChart preview={preview} /></div><div className="recovery-change">↑ 6% <span>vs last month</span></div></div> : <EmptyState title="No recovery records yet" description="A collection rate will appear once verified payments are connected." onPreviewChange={onPreviewChange} />}
      </Panel>

      <Panel title="Today's priorities" subtitle="A little progress goes a long way" action={<button className="text-button" type="button" onClick={() => onNavigate('pulse')}>View all tasks <ArrowRight size={14} /></button>}>
        {preview ? <><div className="priority-checklist">{tasks.map((task) => <button className={`check-task ${task.complete ? 'is-complete' : ''}`} type="button" key={task.id} onClick={() => toggleTask(task.id)} aria-pressed={task.complete}><span className="check-circle">{task.complete && <Check size={12} />}</span><span>{task.title}</span></button>)}</div><div className="task-progress-copy"><span>{completed} of {tasks.length} sample tasks done</span><strong>{percent}%</strong></div><div className="task-progress-track"><span style={{ width: `${percent}%` }} /></div></> : <EmptyState title="Your priority list will appear here" description="Tasks will be pulled from promises, disputes, evidence requests and payment records." onPreviewChange={onPreviewChange} />}
      </Panel>

      <Panel title="Recent activity" subtitle="Latest case and payment updates" action={<button className="text-button" type="button" onClick={() => onNavigate('pulse')}>See all <ArrowRight size={14} /></button>}>
        {preview ? <div className="activity-list">{creditorPreview.activity.map((item) => <div className="activity-row" key={item.title}><span className={`activity-dot dot-${item.tone}`} /><div><strong>{item.title}</strong><small>{item.detail}</small></div></div>)}</div> : <EmptyState title="No recent activity" description="Verified payments and recorded case events will appear here." />}
      </Panel>

      <Panel title="Upcoming follow-ups" subtitle="Your next due items" action={<Clock3 size={15} className="panel-icon" />}>
        {preview ? <div className="followup-list">{creditorPreview.followUps.map((item) => <div className="followup-row" key={item.title}><div className="followup-date"><small>{item.month}</small><strong>{item.date}</strong></div><div className="followup-copy"><strong>{item.title}</strong><small>{item.due}</small></div><span className={`followup-status status-${item.tone}`} aria-label={item.tone} /> </div>)}</div> : <EmptyState title="No follow-ups to show" description="Due tasks and promise dates will appear here when available." />}
      </Panel>
      <aside className="dashboard-footnote"><span>✦</span><p>Figures and progress reflect verified workflow events. Sample preview is illustrative.</p></aside>
    </div>
  </>;
}

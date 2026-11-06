import { useMemo, useState } from 'react';
import { Check, Clock3, ListChecks, Sprout } from 'lucide-react';
import { pulsePreview } from '../data/dashboardPreview.js';
import { CompanionWidget, EmptyState, greetingFor, PageHeading, Panel, StatusPill } from '../components/DashboardPrimitives.jsx';

export default function DailyPulse({ user, preview, onPreviewChange, companionsHidden, onToggleCompanions }) {
  const [tasks, setTasks] = useState(() => pulsePreview.map((task) => ({ ...task })));
  const [filter, setFilter] = useState('All tasks');
  const [message, setMessage] = useState('');
  const completed = preview ? tasks.filter((task) => task.status === 'done').length : 0;
  const visibleTasks = useMemo(() => {
    if (!preview) return [];
    if (filter === 'Open') return tasks.filter((task) => task.status === 'open');
    if (filter === 'Completed') return tasks.filter((task) => task.status === 'done');
    return tasks;
  }, [filter, preview, tasks]);
  const percent = preview && tasks.length ? Math.round(completed / tasks.length * 100) : 0;

  const updateTask = (id, status) => {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, status, due: status === 'done' ? 'Completed in preview' : 'Deferred in preview' } : task));
    setMessage(status === 'done' ? 'Sample task marked complete.' : 'Sample task deferred.');
  };

  return <>
    <PageHeading eyebrow="DAILY PULSE" title="Your day, in one place" description={`${greetingFor(user)} — a calm list of follow-ups, commitments and reviews that need attention.`} companion={<CompanionWidget hidden={companionsHidden} onToggleHidden={onToggleCompanions} />} />
    <div className="pulse-summary">
      <Panel title="Today's progress" subtitle="Tasks completed out of tasks assigned for today" className="progress-panel">
        <div className="pulse-progress-copy"><strong>{preview ? `${completed} of ${tasks.length}` : '—'}</strong><span>{preview ? 'sample tasks completed' : 'tasks completed'}</span><StatusPill tone={preview && percent === 100 ? 'mint' : 'lilac'}>{preview ? `${percent}% complete` : 'Waiting for task records'}</StatusPill></div>
        <div className="task-progress-track"><span style={{ width: `${preview ? percent : 0}%` }} /></div>
        <p className="progress-caption">{preview ? 'Preview progress is calculated from the task states below.' : 'The period and denominator will come from assigned workflow records.'}</p>
      </Panel>
      <aside className="pulse-note"><span className="sprout-badge"><Sprout size={20} /></span><div><strong>Keep the next step clear.</strong><p>Each task shows its owner, due time, priority and related case.</p></div></aside>
    </div>

    <Panel title="Your task list" subtitle="Follow-ups, promises, disputes and evidence requests" className="task-panel" action={<label className="filter-select"><span className="sr-only">Filter tasks</span><select disabled={!preview} value={filter} onChange={(event) => setFilter(event.target.value)}><option>All tasks</option><option>Open</option><option>Completed</option></select></label>}>
      {preview ? visibleTasks.length ? <div className="task-list">{visibleTasks.map((task) => <article className={`task-row task-${task.status}`} key={task.id}><span className={`task-check ${task.status === 'done' ? 'is-done' : ''}`} aria-label={task.status === 'done' ? 'Completed' : 'Open'}>{task.status === 'done' && <Check size={13} />}</span><div className="task-main"><div className="task-title-line"><strong>{task.title}</strong><StatusPill tone={task.priority === 'High' ? 'peach' : task.priority === 'Medium' ? 'yellow' : 'mint'}>{task.priority} priority</StatusPill></div><p>{task.kind} <span>·</span> Case {task.caseId} <span>·</span> {task.client}</p></div><div className="task-meta"><strong>{task.owner}</strong><span><Clock3 size={12} />{task.due}</span></div><div className="task-actions">{task.status === 'open' ? <><button className="small-primary" type="button" onClick={() => updateTask(task.id, 'done')}>Complete</button><button className="small-quiet" type="button" onClick={() => updateTask(task.id, 'deferred')}>Defer</button></> : <span className="task-finished">{task.status === 'done' ? 'Completed' : 'Deferred'}</span>}</div></article>)}</div> : <EmptyState title="You're all caught up for now" description="There are no tasks in this preview filter." onPreviewChange={onPreviewChange} /> : <EmptyState title="Your task list is ready for workflow data" description="Follow-ups, promise dates, dispute reviews and evidence requests will appear when assigned records are connected." onPreviewChange={onPreviewChange} />}
      {preview && <p className="preview-action-note"><ListChecks size={14} /> Complete and defer change only this local sample preview.</p>}
      <p className="sr-only" role="status" aria-live="polite">{message}</p>
    </Panel>
  </>;
}

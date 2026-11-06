import { CircleHelp, Sun } from 'lucide-react';
import CompanionCat from './CompanionCat.jsx';

export function greetingFor(user) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  return `${greeting}, ${user?.full_name?.trim().split(/\s+/)[0] || 'there'}`;
}

export function PageHeading({ eyebrow, title, description, companion }) {
  return (
    <div className="page-heading">
      <div><p className="eyebrow">{eyebrow}</p><h1>{title}<Sun className="greeting-sun" size={22} /></h1><p className="page-description">{description}</p></div>
      {companion}
    </div>
  );
}

export function MetricGrid({ metrics, preview }) {
  return <div className="metric-grid">{metrics.map((metric) => <article className={`metric-card metric-${metric.tone}`} key={metric.label}><div className="metric-topline"><span>{metric.label}</span><span className="metric-glyph" aria-hidden="true">{metric.glyph}</span></div><strong className="metric-value">{preview ? metric.value : '—'}</strong><p>{preview ? metric.note : 'Waiting for authorised records'}</p></article>)}</div>;
}

export function Panel({ title, subtitle, action, className = '', children }) {
  return <section className={`panel ${className}`}><div className="panel-heading"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{action}</div>{children}</section>;
}

export function EmptyState({ title, description, onPreviewChange }) {
  return <div className="empty-state"><span className="empty-icon"><CircleHelp size={18} /></span><div><strong>{title}</strong><p>{description}</p></div>{onPreviewChange && <button className="text-button" type="button" onClick={() => onPreviewChange(true)}>Preview sample data</button>}</div>;
}

export function StatusPill({ children, tone = 'mint' }) {
  return <span className={`status-pill status-${tone}`}><span className="status-dot" />{children}</span>;
}

export function CompanionWidget({ hidden, onToggleHidden }) {
  return <CompanionCat hidden={hidden} onToggleHidden={onToggleHidden} />;
}

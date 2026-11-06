import { useMemo } from 'react';
import { CalendarDays, CircleHelp, LayoutDashboard, LogOut, Monitor, Moon, Sprout, Sun } from 'lucide-react';

function firstName(user) {
  return user.full_name?.trim().split(/\s+/)[0] || 'there';
}

function orgName(user) {
  return user.organization_name || (user.account_type === 'agency' ? 'Agency workspace' : 'Creditor workspace');
}

function ThemePicker({ preference, onChange }) {
  const options = [
    { id: 'system', label: 'System', Icon: Monitor },
    { id: 'light', label: 'Light', Icon: Sun },
    { id: 'dark', label: 'Dark', Icon: Moon },
  ];
  return <div className="theme-picker" role="group" aria-label="Choose appearance">{options.map(({ id, label, Icon }) => <button key={id} type="button" className={`theme-option ${preference === id ? 'is-selected' : ''}`} aria-pressed={preference === id} onClick={() => onChange(id)}><Icon size={14} /><span>{label}</span></button>)}</div>;
}

export default function DashboardShell({ user, view, preference, resolvedTheme, onPreferenceChange, onNavigate, onSignOut, preview, onPreviewChange, companionsHidden, onToggleCompanions, children }) {
  const agency = user.account_type === 'agency';
  const navigation = useMemo(() => [
    { id: agency ? 'agency' : 'creditor', label: agency ? 'Agency overview' : 'Overview', icon: LayoutDashboard },
    { id: 'pulse', label: 'Daily Pulse', icon: Sprout },
  ], [agency]);
  const date = new Intl.DateTimeFormat(undefined, { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date());

  return (
    <div className="dashboard-app" data-theme={resolvedTheme}>
      <header className="topbar">
        <a className="brand" href={agency ? '/dashboard/agency' : '/dashboard/creditor'} aria-label="CollectFlow home"><span className="brand-mark"><img src="/collectflow-logo.png" alt="" aria-hidden="true" draggable="false" /></span><span>Collect<span className="brand-accent">Flow</span></span></a>
        <div className="workspace-label"><span className="workspace-dot" /><div><strong>{orgName(user)}</strong><small>{user.workspace_name ? `${user.workspace_name} · ` : ''}{agency ? 'Collection agency' : 'Creditor workspace'}</small></div></div>
        <div className="topbar-right"><span className="date-label"><CalendarDays size={14} />{date}</span><ThemePicker preference={preference} onChange={onPreferenceChange} /><span className="user-avatar" aria-hidden="true">{firstName(user).slice(0, 1).toUpperCase()}</span><span className="user-name">{user.full_name || 'CollectFlow user'}</span><button className="icon-button" type="button" title="Sign out" aria-label="Sign out" onClick={onSignOut}><LogOut size={16} /></button></div>
      </header>

      <div className="app-layout">
        <aside className="sidebar">
          <div className="sidebar-label">WORKSPACE</div>
          <nav aria-label="Workspace navigation">{navigation.map(({ id, label, icon: Icon }) => <button key={id} type="button" className={`nav-link ${view === id ? 'is-active' : ''}`} aria-current={view === id ? 'page' : undefined} onClick={() => onNavigate(id)}><Icon size={17} /><span>{label}</span></button>)}</nav>
          <div className="sidebar-tip"><CircleHelp size={16} /><div><strong>Need a hand?</strong><span>Your work stays clear and in context.</span></div></div>
          <div className="sidebar-footer">CollectFlow · Receivables, resolved</div>
        </aside>

        <main className="main-content">
          <div className={`data-notice ${preview ? 'is-preview' : ''}`} role="status"><span className="notice-dot" /><p>{preview ? <><strong>Sample preview</strong> · Illustrative data only. Preview actions do not update your account.</> : <><strong>Live workspace</strong> · Dashboard data endpoints are not connected yet.</>}</p><button type="button" className="notice-action" onClick={() => onPreviewChange(!preview)}>{preview ? 'Exit preview' : 'View sample preview'}</button></div>
          {children}
          <footer className="page-footer"><span>CollectFlow</span><span>Every financial figure should trace to authorised records.</span></footer>
        </main>
      </div>
    </div>
  );
}

// shared.jsx — chips, badges, table primitives, helpers for GTM Ontology Review
(() => {
  const DS = window.SalesforceDesignSystem_585a3e;
  const { Icon, Badge, Tooltip } = DS;

  // ── Constants ─────────────────────────────────────────────────────────
  const CATEGORY_META = {
    'Buyer Persona':          { icon: 'user-round',    color: 'var(--sf-blue-500)' },
    'Pain Point':             { icon: 'flame',         color: 'var(--sf-error-500)' },
    'Value Proposition':      { icon: 'gem',           color: 'var(--sf-teal-500, #0B827C)' },
    'Signal Playbook':        { icon: 'zap',           color: 'var(--sf-warning-500)' },
    'Messaging Angle':        { icon: 'message-square',color: 'var(--sf-blue-700)' },
    'Case Study':             { icon: 'book-open',     color: 'var(--sf-violet-500)' },
    'Proof Point':            { icon: 'trending-up',   color: 'var(--sf-success-500)' },
    'Integration':            { icon: 'plug',          color: 'var(--sf-gray-600)' },
    'Compliance / Security':  { icon: 'shield-check',  color: 'var(--sf-success-700)' },
    'Messaging Guardrail':    { icon: 'ban',           color: 'var(--sf-violet-700)' },
    'Competitor / Alternative': { icon: 'scale',       color: 'var(--sf-gray-700)' },
  };

  const TAB_DEFS = [
    { key: 'overview', label: 'Overview' },
    { key: 'who',   label: 'Who buys',          cats: ['Buyer Persona'] },
    { key: 'why',   label: 'Why they buy',      cats: ['Pain Point', 'Value Proposition'] },
    { key: 'when',  label: 'When to reach out', cats: ['Signal Playbook'] },
    { key: 'say',   label: 'What to say',       cats: ['Messaging Angle'] },
    { key: 'proof', label: 'Proof & guardrails',cats: ['Case Study', 'Proof Point', 'Integration', 'Compliance / Security', 'Messaging Guardrail', 'Competitor / Alternative'] },
    { key: 'all',   label: 'All rows' },
  ];

  const STATUS_TONE = {
    'Suggested': 'neutral',
    'Needs Admin Review': 'warning',
    'Approved': 'success',
    'Edited': 'brand',
    'Rejected': 'error',
    'Locked': 'violet',
  };

  const SOURCE_META = {
    web:   { icon: 'globe',     label: 'Web page' },
    call:  { icon: 'phone',     label: 'Call recording' },
    email: { icon: 'mail',      label: 'Email' },
    note:  { icon: 'file-text', label: 'CRM note' },
  };

  const CONF_META = {
    High:   { color: 'var(--sf-success-500)', n: 3 },
    Medium: { color: 'var(--sf-warning-500)', n: 2 },
    Low:    { color: 'var(--sf-error-500)',   n: 1 },
  };

  // ── Helpers ───────────────────────────────────────────────────────────
  const rowsForMotion = (rows, motionId) => rows.filter((r) => r.motionIds.includes(motionId));
  const rowsForTab = (rows, tabKey) => {
    const def = TAB_DEFS.find((t) => t.key === tabKey);
    if (!def || !def.cats) return rows;
    return rows.filter((r) => def.cats.includes(r.category));
  };
  const isReviewed = (r) => ['Approved', 'Edited', 'Rejected', 'Locked'].includes(r.status);
  const motionStats = (rows, motionId) => {
    const mr = rowsForMotion(rows, motionId);
    const reviewed = mr.filter(isReviewed).length;
    return {
      total: mr.length,
      reviewed,
      progress: mr.length ? Math.round((reviewed / mr.length) * 100) : 0,
      needsReview: mr.filter((r) => r.status === 'Needs Admin Review').length,
      approved: mr.filter((r) => r.status === 'Approved' || r.status === 'Locked').length,
      conf: {
        High: mr.filter((r) => r.confidence === 'High').length,
        Medium: mr.filter((r) => r.confidence === 'Medium').length,
        Low: mr.filter((r) => r.confidence === 'Low').length,
      },
    };
  };

  // ── Small components ──────────────────────────────────────────────────
  function StatusBadge({ status }) {
    return (
      <Badge tone={STATUS_TONE[status] || 'neutral'}>
        {status === 'Locked' && <Icon name="lock" size={10} />}
        {status}
      </Badge>
    );
  }

  function ConfidenceChip({ level, display = 'Chips' }) {
    const m = CONF_META[level] || CONF_META.Medium;
    if (display === 'Bars') {
      return (
        <span title={level + ' confidence'} style={{ display: 'inline-flex', alignItems: 'flex-end', gap: 2, height: 12 }}>
          {[1, 2, 3].map((i) => (
            <span key={i} style={{ width: 4, height: 4 + i * 3, borderRadius: 1, background: i <= m.n ? m.color : 'var(--sf-gray-200)' }}></span>
          ))}
        </span>
      );
    }
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'var(--sf-gray-50)', border: '1px solid var(--sf-gray-200)', font: 'var(--weight-medium) var(--text-2xs)/1.4 var(--font-sans)', color: 'var(--sf-gray-700)', whiteSpace: 'nowrap' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: m.color, flexShrink: 0 }}></span>
        {level}
      </span>
    );
  }

  function ClaimChip({ type }) {
    const map = {
      Stated:      { icon: 'quote',         color: 'var(--sf-gray-700)', bg: 'var(--sf-gray-50)' },
      Inferred:    { icon: 'lightbulb',     color: 'var(--sf-blue-700)', bg: 'var(--sf-blue-50)' },
      Unsupported: { icon: 'circle-alert',  color: 'var(--sf-error-700)', bg: 'var(--sf-error-100)' },
    };
    const m = map[type] || map.Stated;
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 'var(--radius-full)', background: m.bg, font: 'var(--weight-medium) var(--text-2xs)/1.4 var(--font-sans)', color: m.color, whiteSpace: 'nowrap' }}>
        <Icon name={m.icon} size={10} />
        {type}
      </span>
    );
  }

  function SourceIcons({ sources = [] }) {
    if (!sources.length) {
      return <span style={{ font: 'var(--type-body-sm)', color: 'var(--sf-gray-400)' }}>—</span>;
    }
    const types = [...new Set(sources.map((s) => s.type))];
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <span style={{ display: 'inline-flex', gap: 3, color: 'var(--sf-gray-500)' }}>
          {types.map((t) => (
            <Icon key={t} name={(SOURCE_META[t] || SOURCE_META.web).icon} size={13} />
          ))}
        </span>
        <span style={{ font: 'var(--weight-medium) var(--text-2xs)/1 var(--font-sans)', color: 'var(--sf-gray-500)' }}>{sources.length}</span>
      </span>
    );
  }

  function CategoryIcon({ category, size = 26 }) {
    const m = CATEGORY_META[category] || { icon: 'circle', color: 'var(--sf-gray-500)' };
    return (
      <span style={{ width: size, height: size, borderRadius: 'var(--radius-sm)', background: m.color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name={m.icon} size={Math.round(size * 0.55)} />
      </span>
    );
  }

  function PillList({ items = [], max = 4 }) {
    const shown = items.slice(0, max);
    const extra = items.length - shown.length;
    return (
      <span style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 4 }}>
        {shown.map((p) => (
          <span key={p} style={{ padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'var(--sf-gray-100)', border: '1px solid var(--sf-gray-200)', font: 'var(--weight-medium) var(--text-2xs)/1.5 var(--font-sans)', color: 'var(--sf-gray-700)', whiteSpace: 'nowrap' }}>{p}</span>
        ))}
        {extra > 0 && <span style={{ padding: '2px 6px', font: 'var(--weight-medium) var(--text-2xs)/1.5 var(--font-sans)', color: 'var(--sf-gray-500)' }}>+{extra}</span>}
      </span>
    );
  }

  function DupeFlag({ onClick }) {
    return (
      <span
        onClick={(e) => { e.stopPropagation(); onClick && onClick(); }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'var(--sf-warning-100)', border: '1px solid var(--sf-warning-500)', font: 'var(--weight-semibold) var(--text-2xs)/1.4 var(--font-sans)', color: 'var(--sf-warning-700)', cursor: 'pointer', whiteSpace: 'nowrap' }}
      >
        <Icon name="copy" size={10} />
        Possible duplicate
      </span>
    );
  }

  // ── Data table ────────────────────────────────────────────────────────
  function DataTable({ columns, rows, onRowClick, density = 'Comfortable', selectedId, emptyLabel }) {
    const rowH = density === 'Compact' ? 34 : 44;
    const cellPad = density === 'Compact' ? '5px 12px' : '9px 12px';
    if (!rows.length) {
      return (
        <div style={{ padding: '48px 24px', textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', width: 40, height: 40, borderRadius: '50%', background: 'var(--sf-gray-100)', alignItems: 'center', justifyContent: 'center', color: 'var(--sf-gray-500)', marginBottom: 10 }}>
            <Icon name="search-x" size={18} />
          </span>
          <div style={{ font: 'var(--type-label-sm)', color: 'var(--sf-gray-700)' }}>{emptyLabel || 'No rows match the current filters'}</div>
          <div style={{ font: 'var(--type-body-sm)', color: 'var(--sf-gray-500)', marginTop: 4 }}>Try clearing search or filters.</div>
        </div>
      );
    }
    return (
      <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 320px)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key} style={{ position: 'sticky', top: 0, zIndex: 5, background: 'var(--sf-gray-50)', textAlign: 'left', padding: cellPad, font: 'var(--weight-semibold) var(--text-2xs)/1.4 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--sf-gray-500)', borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap', width: c.width }}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const sel = selectedId === r.id;
              const rejected = r.status === 'Rejected';
              return (
                <tr
                  key={r.id}
                  onClick={() => onRowClick && onRowClick(r)}
                  onMouseEnter={(e) => { if (!sel) e.currentTarget.style.background = 'var(--sf-gray-50)'; }}
                  onMouseLeave={(e) => { if (!sel) e.currentTarget.style.background = sel ? 'var(--sf-blue-50)' : 'transparent'; }}
                  style={{ height: rowH, cursor: 'pointer', background: sel ? 'var(--sf-blue-50)' : 'transparent', boxShadow: sel ? 'inset 2px 0 0 var(--sf-blue-500)' : 'none', opacity: rejected ? 0.55 : 1, transition: 'background var(--duration-fast)' }}
                >
                  {columns.map((c) => (
                    <td key={c.key} style={{ padding: cellPad, borderBottom: '1px solid var(--sf-gray-100)', font: 'var(--type-body-sm)', color: 'var(--sf-gray-700)', verticalAlign: 'middle', maxWidth: c.maxWidth || 280 }}>
                      {c.render(r)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  // truncated single-line cell text
  function Trunc({ children, strong, lines = 1 }) {
    const base = lines === 1
      ? { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
      : { display: '-webkit-box', WebkitLineClamp: lines, WebkitBoxOrient: 'vertical', overflow: 'hidden' };
    return (
      <div style={{ ...base, font: strong ? 'var(--type-label-sm)' : 'var(--type-body-sm)', color: strong ? 'var(--sf-gray-900)' : 'var(--sf-gray-600)' }}>
        {children}
      </div>
    );
  }

  Object.assign(window, {
    CATEGORY_META, TAB_DEFS, STATUS_TONE, SOURCE_META, CONF_META,
    rowsForMotion, rowsForTab, motionStats, isReviewed,
    StatusBadge, ConfidenceChip, ClaimChip, SourceIcons, CategoryIcon, PillList, DupeFlag, DataTable, Trunc,
  });
})();

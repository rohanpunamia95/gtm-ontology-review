// helpers.jsx — shared atoms, metadata maps, field definitions, top nav.
// Everything hangs off window.GTM.
(function () {
  const G = (window.GTM = window.GTM || {});
  const h = React.createElement;

  // ── Metadata maps ──────────────────────────────────────────────────────
  const CONF = {
    High:   { color: 'var(--sf-success-500)', bg: 'var(--sf-success-100)', label: 'High' },
    Medium: { color: 'var(--sf-warning-500)', bg: 'var(--sf-warning-100)', label: 'Medium' },
    Low:    { color: 'var(--sf-gray-500)',    bg: 'var(--sf-gray-100)',    label: 'Low' },
  };

  const CLAIM = {
    Stated:      { color: 'var(--sf-blue-700)' },
    Inferred:    { color: 'var(--sf-gray-700)' },
    Unsupported: { color: 'var(--sf-error-700)' },
  };

  const CATEGORY = {
    'Buyer Persona':         { icon: 'users',                color: 'var(--sf-blue-500)' },
    'Pain Point':            { icon: 'flame',                color: 'var(--sf-error-500)' },
    'Value Proposition':     { icon: 'target',               color: 'var(--sf-success-500)' },
    'Signal Playbook':       { icon: 'radar',                color: 'var(--sf-teal-500)' },
    'Messaging Angle':       { icon: 'message-square-quote', color: 'var(--sf-violet-500)' },
    'Case Study':            { icon: 'file-text',            color: 'var(--sf-blue-500)' },
    'Proof Point':           { icon: 'badge-check',          color: 'var(--sf-success-500)' },
    'Integration':           { icon: 'workflow',             color: 'var(--sf-teal-500)' },
    'Compliance / Security': { icon: 'shield-check',         color: 'var(--sf-success-500)' },
    'Messaging Guardrail':   { icon: 'shield-alert',         color: 'var(--sf-violet-500)' },
    'Competitor / Alternative': { icon: 'git-compare',       color: 'var(--sf-gray-600)' },
    'ICP Characteristic':    { icon: 'building-2',           color: 'var(--sf-blue-500)' },
  };

  const SOURCE = {
    'Website':        { icon: 'globe',       color: 'var(--sf-blue-500)' },
    'Call recording': { icon: 'phone',       color: 'var(--sf-violet-500)' },
    'Email':          { icon: 'mail',        color: 'var(--sf-teal-500)' },
    'CRM note':       { icon: 'sticky-note', color: 'var(--sf-warning-500)' },
    'Closed-won deal':{ icon: 'trophy',      color: 'var(--sf-success-500)' },
  };

  // Level-2 tabs (within a motion)
  const TABS = [
    { key: 'who',   label: 'Who buys',           cats: ['Buyer Persona'] },
    { key: 'icp',   label: 'Ideal company profile' },
    { key: 'why',   label: 'Why they buy',       cats: ['Pain Point', 'Value Proposition'] },
    { key: 'when',  label: 'When to reach out',  cats: ['Signal Playbook'] },
    { key: 'what',  label: 'What to say',        cats: ['Messaging Angle'] },
    { key: 'proof', label: 'Proof', cats: ['Case Study', 'Proof Point', 'Integration', 'Compliance / Security'] },
    { key: 'guard', label: 'Guardrails', cats: ['Messaging Guardrail', 'Competitor / Alternative'] },
    { key: 'all',   label: 'All rows' },
  ];

  // ── Editable field definitions per category ───────────────────────────
  // kind: 'text' | 'area' | 'list' (array, one item per line) | 'number'
  const FIELD_DEFS = {
    'Buyer Persona': [
      { key: 'value', label: 'Persona name', kind: 'text' },
      { key: 'description', label: 'Description', kind: 'area' },
      { key: 'titles', label: 'Example titles', kind: 'area' },
      { key: 'buyingRole', label: 'Buying role', kind: 'text' },
      { key: 'reportsTo', label: 'Reports to', kind: 'text' },
      { key: 'responsibilities', label: 'Owns', kind: 'area' },
      { key: 'caresAbout', label: 'Cares about', kind: 'list' },
      { key: 'kpis', label: 'KPIs they\u2019re measured on', kind: 'list' },
      { key: 'objections', label: 'Common objections', kind: 'list' },
      { key: 'quote', label: 'Representative quote', kind: 'area' },
      { key: 'quoteSource', label: 'Quote source', kind: 'text' },
      { key: 'fit', label: 'Great fit', kind: 'area' },
      { key: 'disqualifiers', label: 'Poor fit', kind: 'area' },
    ],
    'Pain Point': [
      { key: 'value', label: 'Pain point', kind: 'text' },
      { key: 'description', label: 'Description', kind: 'area' },
      { key: 'whyMatters', label: 'Why it matters', kind: 'area' },
      { key: 'capability', label: 'Product capability', kind: 'area' },
      { key: 'valueProp', label: 'Value proposition', kind: 'area' },
      { key: 'outcome', label: 'Business outcome', kind: 'area' },
      { key: 'relatedPersona', label: 'Related persona', kind: 'text' },
      { key: 'segment', label: 'Segment (blank = all segments)', kind: 'text' },
    ],
    'Value Proposition': [
      { key: 'value', label: 'Value proposition', kind: 'text' },
      { key: 'description', label: 'Description', kind: 'area' },
      { key: 'whyMatters', label: 'Why it matters', kind: 'area' },
      { key: 'capability', label: 'Product capability', kind: 'area' },
      { key: 'outcome', label: 'Business outcome', kind: 'area' },
      { key: 'relatedPersona', label: 'Related persona', kind: 'text' },
      { key: 'segment', label: 'Segment (blank = all segments)', kind: 'text' },
    ],
    'Signal Playbook': [
      { key: 'value', label: 'Signal / trigger', kind: 'text' },
      { key: 'description', label: 'Description', kind: 'area' },
      { key: 'signalCategory', label: 'Signal category', kind: 'text' },
      { key: 'personaSegment', label: 'Target persona', kind: 'text' },
      { key: 'painHyp', label: 'Pain hypothesis', kind: 'text' },
      { key: 'angle', label: 'Messaging angle', kind: 'text' },
      { key: 'ttlDays', label: 'TTL (days)', kind: 'number' },
      { key: 'segment', label: 'Segment (blank = all segments)', kind: 'text' },
    ],
    'Messaging Angle': [
      { key: 'value', label: 'Messaging angle', kind: 'text' },
      { key: 'description', label: 'Description', kind: 'area' },
      { key: 'useWhen', label: 'Use when', kind: 'area' },
      { key: 'personaSegment', label: 'Target persona', kind: 'text' },
      { key: 'hook', label: 'Example hook', kind: 'area' },
      { key: 'avoid', label: 'Avoid saying', kind: 'area' },
      { key: 'segment', label: 'Segment (blank = all segments)', kind: 'text' },
    ],
    _proof: [
      { key: 'value', label: 'Item', kind: 'text' },
      { key: 'description', label: 'Description', kind: 'area' },
      { key: 'proofType', label: 'Type', kind: 'text' },
      { key: 'useCase', label: 'Use case', kind: 'area' },
      { key: 'segment', label: 'Segment (blank = all segments)', kind: 'text' },
    ],
    'ICP Characteristic': [
      { key: 'characteristic', label: 'Characteristic', kind: 'text' },
      { key: 'charType', label: 'Type', kind: 'text' },
      { key: 'value', label: 'Value', kind: 'text' },
      { key: 'rationale', label: 'Rationale', kind: 'area' },
      { key: 'match', label: 'Recent closed-won match (e.g. "7 of 9")', kind: 'text' },
      { key: 'deals', label: 'Example deals', kind: 'list' },
    ],
  };
  ['Case Study', 'Proof Point', 'Integration', 'Compliance / Security', 'Messaging Guardrail', 'Competitor / Alternative']
    .forEach(c => { FIELD_DEFS[c] = FIELD_DEFS._proof; });

  // ── Atoms ──────────────────────────────────────────────────────────────
  function ConfidenceChip({ level }) {
    const m = CONF[level] || CONF.Low;
    return h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px 2px 7px',
      borderRadius: 'var(--radius-full)', background: m.bg,
      font: 'var(--weight-semibold) var(--text-2xs)/1.4 var(--font-sans)', color: m.color, whiteSpace: 'nowrap' } },
      h('span', { style: { width: 6, height: 6, borderRadius: '50%', background: m.color } }), m.label);
  }

  function ClaimChip({ type }) {
    const m = CLAIM[type] || CLAIM.Inferred;
    return h('span', { style: { font: 'var(--weight-medium) var(--text-2xs)/1.4 var(--font-sans)', color: m.color,
      textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)' } }, type);
  }

  function CategoryIcon({ category, size = 16, boxed }) {
    const { Icon } = window.SalesforceDesignSystem_585a3e;
    const m = CATEGORY[category] || { icon: 'circle', color: 'var(--sf-gray-500)' };
    if (!boxed) return h('span', { style: { color: m.color, display: 'inline-flex' } }, h(Icon, { name: m.icon, size }));
    const box = size + 14;
    return h('span', { style: { width: box, height: box, borderRadius: 'var(--radius-sm)', flexShrink: 0,
      background: 'color-mix(in srgb, ' + m.color + ' 11%, white)', color: m.color,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center' } }, h(Icon, { name: m.icon, size }));
  }

  function Pill({ children, icon }) {
    const { Icon } = window.SalesforceDesignSystem_585a3e;
    return h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 9px',
      borderRadius: 'var(--radius-full)', background: 'var(--sf-gray-100)', color: 'var(--sf-gray-700)',
      font: 'var(--weight-medium) var(--text-2xs)/1.4 var(--font-sans)', border: '1px solid var(--sf-gray-200)', whiteSpace: 'nowrap' } },
      icon && h(Icon, { name: icon, size: 11 }), children);
  }

  // Segment applicability chip — absent segment means the row applies to all segments
  function SegmentChip({ segment }) {
    if (!segment) return h('span', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-400)' } }, 'All');
    return h('span', { style: { display: 'inline-flex', alignItems: 'center', padding: '3px 9px',
      borderRadius: 'var(--radius-full)', background: 'var(--sf-blue-50)', color: 'var(--sf-blue-700)',
      font: 'var(--weight-medium) var(--text-2xs)/1.4 var(--font-sans)', border: '1px solid var(--sf-blue-200)', whiteSpace: 'nowrap' } }, segment);
  }

  function SourceLine({ s }) {
    const { Icon } = window.SalesforceDesignSystem_585a3e;
    const m = SOURCE[s.type] || SOURCE.Website;
    return h('div', { style: { display: 'flex', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--sf-gray-100)' } },
      h('span', { style: { width: 26, height: 26, borderRadius: 'var(--radius-sm)', flexShrink: 0, marginTop: 1,
        background: 'color-mix(in srgb, ' + m.color + ' 11%, white)', color: m.color,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center' } }, h(Icon, { name: m.icon, size: 14 })),
      h('div', { style: { minWidth: 0, flex: 1 } },
        h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' } },
          h('span', { style: { font: 'var(--type-label-sm)', color: 'var(--sf-gray-900)' } }, s.label),
          s.when && h('span', { style: { marginLeft: 'auto', font: 'var(--type-label-xs)', color: 'var(--sf-gray-500)' } }, s.when)),
        h('div', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-600)', marginTop: 3, fontStyle: 'italic' } }, '\u201C' + s.snippet + '\u201D'),
        s.ref && h('div', { style: { display: 'flex', alignItems: 'center', gap: 4, marginTop: 4,
          font: 'var(--type-label-xs)', color: 'var(--sf-blue-500)', cursor: 'pointer' } },
          h(Icon, { name: s.type === 'Website' ? 'external-link' : 'arrow-up-right', size: 11 }), s.ref)));
  }

  // ── Lightning top nav ─────────────────────────────────────────────────
  function TopNav() {
    const { Icon, Avatar } = window.SalesforceDesignSystem_585a3e;
    const items = ['Home', 'Accounts', 'Opportunities', 'Leads', 'Agent Studio', 'Reports'];
    return h('div', { style: { height: 'var(--nav-height)', background: 'var(--sf-blue-900)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 16, position: 'sticky', top: 0, zIndex: 50 } },
      h('img', { src: 'assets/salesforce-cloud-icon.svg', alt: 'Salesforce', style: { height: 26 } }),
      h('div', { style: { display: 'flex', gap: 2 } },
        items.map((it, i) => h('span', { key: it,
          style: { padding: '6px 12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', whiteSpace: 'nowrap',
            font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)',
            color: i === 4 ? '#fff' : 'rgba(255,255,255,0.65)',
            background: i === 4 ? 'rgba(255,255,255,0.12)' : 'transparent' } }, it))),
      h('div', { style: { flex: 1 } }),
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
        h('div', { style: { display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.10)', borderRadius: 'var(--radius-sm)', padding: '5px 10px', width: 200 } },
          h(Icon, { name: 'search', size: 14, color: 'rgba(255,255,255,0.6)' }),
          h('span', { style: { font: 'var(--type-body-sm)', color: 'rgba(255,255,255,0.5)' } }, 'Search Setup\u2026')),
        h('span', { style: { display: 'flex', color: 'rgba(255,255,255,0.7)', padding: 6, cursor: 'pointer' } }, h(Icon, { name: 'bell', size: 16 })),
        h('span', { style: { display: 'flex', color: 'rgba(255,255,255,0.7)', padding: 6, cursor: 'pointer' } }, h(Icon, { name: 'settings', size: 16 })),
        h(Avatar, { initials: 'AM', size: 28, presence: 'online' })));
  }

  // Bullet list (used in editor facts)
  function Bullets({ items }) {
    if (!items || !items.length) return h('span', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-400)' } }, '\u2014');
    return h('div', { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
      items.map((it, i) => h('div', { key: i, style: { display: 'flex', gap: 7, alignItems: 'flex-start' } },
        h('span', { style: { width: 4, height: 4, borderRadius: '50%', background: 'var(--sf-gray-400)', marginTop: 7, flexShrink: 0 } }),
        h('span', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-700)', lineHeight: 1.45 } }, it))));
  }

  Object.assign(G, { CONF, CLAIM, CATEGORY, SOURCE, TABS, FIELD_DEFS,
    ConfidenceChip, ClaimChip, CategoryIcon, Pill, SegmentChip, SourceLine, TopNav, Bullets });
})();

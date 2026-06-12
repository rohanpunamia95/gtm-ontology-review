// repository.jsx — page header, motion tabs (level 1), category tabs (level 2), data tables
(function () {
  const G = (window.GTM = window.GTM || {});
  const h = React.createElement;
  const F = React.Fragment;

  const truncate = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };
  const clamp2 = { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' };
  const txt = (s, style) => h('span', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-700)', ...(style || {}) } }, s || '\u2014');

  // ── Page header ────────────────────────────────────────────────────────
  function PageHeader({ data, onRerun }) {
    const { Icon, Button, Breadcrumb } = window.SalesforceDesignSystem_585a3e;
    const m = data.meta || {};
    const prov = [
      [m.callsAnalyzed, 'sales calls'], [m.emailsAnalyzed, 'emails'],
      [m.pagesAnalyzed, 'web pages'], [m.dealsAnalyzed, 'closed-won deals'],
    ];
    return h('div', { style: { marginBottom: 14 } },
      h('div', { style: { marginBottom: 10 } }, h(Breadcrumb, { items: ['Agent Studio', 'Agent Grounding'] })),
      h('div', { style: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' } },
        h('div', null,
          h('div', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
            h('h1', { style: { font: 'var(--type-h2)', color: 'var(--sf-gray-900)', margin: 0 } }, 'Agent Grounding'),
            h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 'var(--radius-full)',
              background: 'var(--sf-violet-100)', color: 'var(--sf-violet-700)', font: 'var(--weight-semibold) var(--text-2xs)/1.4 var(--font-sans)' } },
              h(Icon, { name: 'sparkles', size: 11 }), 'Auto-learned')),
          h('div', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-600)', marginTop: 6, maxWidth: 720, lineHeight: 1.5 } },
            'Everything here was learned by your agent from your calls, emails, CRM, and website — and keeps updating as new deals close. Review it and edit anything; this is a living repository.'),
          h('div', { style: { display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, flexWrap: 'wrap', font: 'var(--type-body-sm)', color: 'var(--sf-gray-600)' } },
            h('span', null, data.customer),
            h('span', { style: { color: 'var(--sf-gray-300)' } }, '\u00b7'),
            prov.map(([n, lbl], i) => h(F, { key: lbl },
              h('span', { style: { whiteSpace: 'nowrap' } }, h('strong', { style: { color: 'var(--sf-gray-800)' } }, n), ' ' + lbl),
              i < prov.length - 1 ? h('span', { style: { color: 'var(--sf-gray-300)' } }, '\u00b7') : null)),
            h('span', { style: { color: 'var(--sf-gray-300)' } }, '\u00b7'),
            h('span', { style: { whiteSpace: 'nowrap' } }, 'Last extracted ' + data.extractedAt))),
        h(Button, { variant: 'neutral', icon: 'refresh-cw', onClick: onRerun }, 'Re-run extraction')));
  }

  // ── Motion rail (level 1 — vertical product nav) ──────────────────────
  function MotionRail({ motions, plays, sel, onSelect, counts }) {
    function Item({ kind, id, label, sub, count }) {
      const on = sel.kind === kind && sel.id === id;
      return h('div', { onClick: () => onSelect(kind, id),
        style: { padding: (sub ? '9px' : '11px') + ' 16px ' + (sub ? '9px' : '11px') + ' 13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
          borderLeft: '3px solid ' + (on ? 'var(--sf-blue-500)' : 'transparent'),
          background: on ? 'var(--sf-blue-50)' : 'transparent', transition: 'background var(--duration-fast)' },
        onMouseEnter: e => { if (!on) e.currentTarget.style.background = 'var(--sf-gray-50)'; },
        onMouseLeave: e => { e.currentTarget.style.background = on ? 'var(--sf-blue-50)' : 'transparent'; } },
        h('div', { style: { minWidth: 0, flex: 1 } },
          h('div', { style: { font: 'var(--weight-' + (on ? 'bold' : 'semibold') + ') var(--text-sm)/1.3 var(--font-sans)', color: on ? 'var(--sf-blue-700)' : 'var(--sf-gray-800)' } }, label),
          sub ? h('div', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-500)', marginTop: 2 } }, sub) : null),
        h('span', { style: { font: 'var(--weight-semibold) var(--text-2xs)/1 var(--font-sans)', color: on ? 'var(--sf-blue-700)' : 'var(--sf-gray-500)',
          background: on ? 'var(--sf-blue-100)' : 'var(--sf-gray-100)', borderRadius: 'var(--radius-full)', padding: '3px 8px', fontVariantNumeric: 'tabular-nums', flexShrink: 0 } }, count || 0));
    }
    const head = (label) => h('div', { style: { padding: '12px 16px 6px', font: 'var(--type-overline)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--sf-gray-500)' } }, label);
    return h('div', { style: { background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-1)', overflow: 'hidden', alignSelf: 'flex-start', position: 'sticky', top: 'calc(var(--nav-height) + 16px)' } },
      head('Products'),
      h('div', { style: { paddingBottom: 6 } },
        motions.map(m => h(Item, { key: m.id, kind: 'product', id: m.id, label: m.name.split(' \u2014 ')[0], count: counts.products[m.id] }))),
      plays && plays.length ? h('div', { style: { borderTop: '1px solid var(--sf-gray-100)' } },
        head('GTM motions'),
        h('div', { style: { paddingBottom: 6 } },
          plays.map(p => h(Item, { key: p.id, kind: 'play', id: p.id, label: p.name, sub: p.products.join(' + '), count: counts.plays[p.id] })))) : null);
  }

  // ── Category tabs (level 2) ────────────────────────────────────────────
  function CategoryTabs({ active, setTab, mRows, icpCount, motionName }) {
    return h('div', { style: { background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-1)', overflow: 'hidden' } },
      h('div', { style: { padding: '12px 16px 0', font: 'var(--type-h5)', color: 'var(--sf-gray-900)' } }, motionName),
      h('div', { style: { display: 'flex', overflowX: 'auto', padding: '0 8px', borderBottom: 'none', marginTop: 4 } },
        G.TABS.map(t => {
          const on = active === t.key;
          let count = t.cats ? mRows.filter(r => t.cats.includes(r.category)).length : (t.key === 'icp' ? icpCount : mRows.length);
          return h('div', { key: t.key, onClick: () => setTab(t.key),
            style: { padding: '11px 14px', cursor: 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6,
              font: 'var(--weight-' + (on ? 'semibold' : 'medium') + ') var(--text-sm)/1 var(--font-sans)',
              color: on ? 'var(--sf-blue-500)' : 'var(--sf-gray-600)',
              boxShadow: on ? 'inset 0 -2px 0 var(--sf-blue-500)' : 'none' } },
            t.label,
            h('span', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-500)', fontVariantNumeric: 'tabular-nums' } }, count));
        })));
  }

  // ── Column configs ─────────────────────────────────────────────────────
  function valueCell(r) {
    return h('div', { style: { display: 'flex', alignItems: 'center', gap: 9, minWidth: 0 } },
      h(G.CategoryIcon, { category: r.category, size: 14, boxed: true }),
      h('span', { style: { font: 'var(--type-label-sm)', color: 'var(--sf-gray-900)', ...truncate } }, r.value));
  }

  function COLUMNS(tabKey, opts) {
    const { ConfidenceChip, ClaimChip } = G;
    const conf = { key: 'confidence', label: 'Confidence', w: 104, render: r => h(ConfidenceChip, { level: r.confidence }) };
    const sources = { key: 'sources', label: 'Sources', w: 92, render: r => {
      const { Icon } = window.SalesforceDesignSystem_585a3e;
      const types = [...new Set((r.sources || []).map(s => s.type))];
      return h('div', { style: { display: 'flex', alignItems: 'center', gap: 5 } },
        opts.showSourceIcons ? types.slice(0, 3).map(t => h('span', { key: t, title: t, style: { color: (G.SOURCE[t] || {}).color, display: 'inline-flex' } }, h(Icon, { name: (G.SOURCE[t] || {}).icon, size: 13 }))) : null,
        h('span', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-600)', fontVariantNumeric: 'tabular-nums' } }, (r.sources || []).length)); } };

    let cols;
    const matchBar = r => {
      if (!r.match) return h('span', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-400)' } }, '\u2014');
      const m = /^(\d+)\s+of\s+(\d+)/.exec(r.match);
      const pct = m ? Math.round((+m[1] / +m[2]) * 100) : 0;
      return h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
        h('div', { style: { width: 64, height: 6, borderRadius: 'var(--radius-full)', background: 'var(--sf-gray-200)', overflow: 'hidden', flexShrink: 0 } },
          h('div', { style: { width: pct + '%', height: '100%', borderRadius: 'var(--radius-full)', background: 'var(--sf-blue-500)' } })),
        h('span', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-700)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' } }, r.match));
    };
    const segCol = { key: 'segment', label: 'Segment', w: 100, render: r => h(G.SegmentChip, { segment: r.segment }) };
    if (tabKey === 'icp') cols = [
      { key: 'charType', label: 'Type', w: 140, render: r => h('span', { style: { font: 'var(--type-label-sm)', color: r.segmentId === 'poor_fit' ? 'var(--sf-error-700)' : 'var(--sf-gray-900)', ...truncate } }, r.segmentId === 'poor_fit' ? r.value : (r.charType || '\u2014')) },
      { key: 'value', label: 'Value', w: 260, render: r => h('span', { style: { font: 'var(--type-label-md)', color: 'var(--sf-gray-900)', ...clamp2 } }, r.segmentId === 'poor_fit' ? r.characteristic : r.value) },
      { key: 'rationale', label: 'Rationale', w: 260, grow: 1, render: r => txt(r.rationale, clamp2) },
      { key: 'match', label: 'Recent C/W deals', w: 150, render: matchBar },
      { key: 'deals', label: 'Example deals', w: 200, render: r => h('div', { style: { display: 'flex', gap: 5, flexWrap: 'wrap' } }, (r.deals || []).slice(0, 2).map(d => h(G.Pill, { key: d, icon: 'trophy' }, d))) },
    ];
    else if (tabKey === 'who') cols = [
      { key: 'value', label: 'Persona', w: 200, grow: 1, render: valueCell },
      { key: 'titles', label: 'Example titles', w: 200, render: r => txt(r.titles, clamp2) },
      { key: 'buyingRole', label: 'Buying role', w: 120, render: r => txt(r.buyingRole, truncate) },
      { key: 'responsibilities', label: 'Owns', w: 210, render: r => txt(r.responsibilities, clamp2) },
      { key: 'caresAbout', label: 'Cares about', w: 220, render: r => txt((r.caresAbout || []).join(' \u00b7 '), clamp2) },
      { key: 'callMentions', label: 'Calls', w: 70, render: r => txt(r.callMentions ? String(r.callMentions) : '\u2014', { fontVariantNumeric: 'tabular-nums' }) },
      segCol, conf, sources,
    ];
    else if (tabKey === 'why') cols = [
      { key: 'value', label: 'Item', w: 210, grow: 1, render: valueCell },
      { key: 'whyMatters', label: 'Why it matters', w: 250, render: r => txt(r.whyMatters, clamp2) },
      { key: 'capability', label: 'Product capability', w: 230, render: r => txt(r.capability, clamp2) },
      { key: 'relatedPersona', label: 'Persona', w: 150, render: r => txt(r.relatedPersona, truncate) },
      segCol, conf, sources,
    ];
    else if (tabKey === 'when') cols = [
      { key: 'value', label: 'Signal / trigger', w: 210, grow: 1, render: valueCell },
      { key: 'signalCategory', label: 'Category', w: 160, render: r => txt(r.signalCategory, truncate) },
      { key: 'personaSegment', label: 'Target persona', w: 180, render: r => txt(r.personaSegment, clamp2) },
      { key: 'angle', label: 'Messaging angle', w: 230, render: r => txt(r.angle, clamp2) },
      { key: 'ttl', label: 'TTL', w: 70, render: r => txt(r.ttlDays ? r.ttlDays + 'd' : '\u2014') },
      segCol, conf, sources,
    ];
    else if (tabKey === 'what') cols = [
      { key: 'value', label: 'Messaging angle', w: 230, grow: 1, render: valueCell },
      { key: 'useWhen', label: 'Use when', w: 230, render: r => txt(r.useWhen, clamp2) },
      { key: 'hook', label: 'Example hook', w: 270, render: r => txt(r.hook, clamp2) },
      { key: 'avoid', label: 'Avoid saying', w: 210, render: r => txt(r.avoid, clamp2) },
      segCol, conf, sources,
    ];
    else if (tabKey === 'proof') cols = [
      { key: 'proofType', label: 'Type', w: 175, render: r => h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } }, h(G.CategoryIcon, { category: r.category, size: 13, boxed: true }), h('span', { style: { font: 'var(--type-label-sm)', color: 'var(--sf-gray-800)', ...truncate } }, r.proofType || r.category)) },
      { key: 'value', label: 'Item', w: 250, grow: 1, render: r => txt(r.value, { color: 'var(--sf-gray-900)', font: 'var(--type-label-sm)', ...clamp2 }) },
      { key: 'description', label: 'Description', w: 280, render: r => txt(r.description, clamp2) },
      { key: 'useCase', label: 'Use case', w: 220, render: r => txt(r.useCase, clamp2) },
      segCol, conf, sources,
    ];
    else if (tabKey === 'guard') cols = [
      { key: 'proofType', label: 'Type', w: 165, render: r => h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } }, h(G.CategoryIcon, { category: r.category, size: 13, boxed: true }), h('span', { style: { font: 'var(--type-label-sm)', color: 'var(--sf-gray-800)', ...truncate } }, r.category === 'Messaging Guardrail' ? 'Guardrail' : 'Competitor')) },
      { key: 'value', label: 'Rule', w: 260, grow: 1, render: r => txt(r.value, { color: 'var(--sf-gray-900)', font: 'var(--type-label-sm)', ...clamp2 }) },
      { key: 'description', label: 'Description', w: 320, render: r => txt(r.description, clamp2) },
      { key: 'personaSegment', label: 'Applies to', w: 190, render: r => txt(r.personaSegment, clamp2) },
      segCol, conf, sources,
    ];
    else cols = [ // all
      { key: 'category', label: 'Category', w: 165, render: r => h('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } }, h(G.CategoryIcon, { category: r.category, size: 13, boxed: true }), h('span', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-700)', ...truncate } }, r.category)) },
      { key: 'value', label: 'Extracted value', w: 230, grow: 1, render: r => txt(r.value, { color: 'var(--sf-gray-900)', font: 'var(--type-label-sm)', ...clamp2 }) },
      { key: 'description', label: 'Description', w: 300, render: r => txt(r.description, clamp2) },
      { key: 'products', label: 'Product', w: 150, render: r => h('div', { style: { display: 'flex', gap: 4, flexWrap: 'wrap' } }, r.products.slice(0, 2).map(p => h(G.Pill, { key: p }, p))) },
      { key: 'claimType', label: 'Claim', w: 92, render: r => h(ClaimChip, { type: r.claimType }) },
      conf, sources,
    ];
    if (!opts.showConfidence) cols = cols.filter(c => c.key !== 'confidence');
    return cols;
  }

  // ── Table ──────────────────────────────────────────────────────────────
  function DataTable({ rows, tabKey, opts, onRowClick, onEditRow }) {
    const { IconButton } = window.SalesforceDesignSystem_585a3e;
    const cols = COLUMNS(tabKey, opts);
    const pad = opts.density === 'compact' ? '7px 14px' : '12px 14px';
    const gridCols = cols.map(c => c.grow ? 'minmax(' + c.w + 'px, ' + c.grow + 'fr)' : c.w + 'px').join(' ') + ' 48px';
    if (!rows.length) return h(EmptyState, null);
    return h('div', { style: { border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#fff', boxShadow: 'var(--shadow-1)' } },
      h('div', { style: { overflowX: 'auto' } },
        h('div', { style: { minWidth: 'fit-content' } },
          h('div', { style: { display: 'grid', gridTemplateColumns: gridCols, background: 'var(--sf-gray-50)', borderBottom: '1px solid var(--color-border)' } },
            cols.map(c => h('div', { key: c.key, style: { padding: '9px 14px', font: 'var(--type-overline)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--sf-gray-600)', ...truncate } }, c.label)),
            h('div', null)),
          rows.map(r => h('div', { key: r.id, onClick: () => onRowClick(r),
            style: { display: 'grid', gridTemplateColumns: gridCols, borderBottom: '1px solid var(--sf-gray-100)', cursor: 'pointer', background: '#fff', alignItems: 'center', transition: 'background var(--duration-fast)' },
            onMouseEnter: e => { e.currentTarget.style.background = 'var(--sf-gray-50)'; },
            onMouseLeave: e => { e.currentTarget.style.background = '#fff'; } },
            cols.map(c => h('div', { key: c.key, style: { padding: pad, minWidth: 0, display: 'flex', alignItems: 'center' } }, c.render(r))),
            h('div', { style: { display: 'flex', justifyContent: 'center' }, onClick: e => e.stopPropagation() },
              h(IconButton, { icon: 'pencil', size: 'sm', variant: 'ghost', title: 'Edit row', onClick: () => onEditRow(r) })))))));
  }

  function EmptyState({ title, sub }) {
    const { Icon } = window.SalesforceDesignSystem_585a3e;
    return h('div', { style: { border: '1px dashed var(--sf-gray-300)', borderRadius: 'var(--radius-md)', background: '#fff', padding: '48px 24px', textAlign: 'center' } },
      h('span', { style: { display: 'inline-flex', color: 'var(--sf-gray-400)', marginBottom: 10 } }, h(Icon, { name: 'search-x', size: 26 })),
      h('div', { style: { font: 'var(--type-h6)', color: 'var(--sf-gray-700)' } }, title || 'No rows match'),
      h('div', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-500)', marginTop: 4 } }, sub || 'Try clearing search or filters.'));
  }

  // ── Toolbar ────────────────────────────────────────────────────────────
  function Toolbar({ count, onAdd, addLabel, children }) {
    const { Button } = window.SalesforceDesignSystem_585a3e;
    return h('div', { style: { display: 'flex', gap: 12, alignItems: 'center', margin: '14px 0', flexWrap: 'wrap' } },
      h('span', { style: { font: 'var(--type-label-sm)', color: 'var(--sf-gray-600)', fontVariantNumeric: 'tabular-nums' } }, count + ' rows'),
      children || null,
      h('div', { style: { marginLeft: 'auto' } },
        h(Button, { variant: 'neutral', icon: 'plus', size: 'sm', onClick: onAdd }, addLabel || 'Add row')));
  }

  function applyFilters(rows, q, filters) {
    return rows.filter(r => {
      if (filters.confidence && !filters.confidence.startsWith('All') && r.confidence !== filters.confidence) return false;
      if (filters.claimType && !filters.claimType.startsWith('All') && r.claimType !== filters.claimType) return false;
      if (filters.category && !filters.category.startsWith('All') && r.category !== filters.category) return false;
      if (q) { const s = (r.value + ' ' + (r.description || '') + ' ' + (r.personaSegment || '') + ' ' + (r.attribute || '') + ' ' + (r.rationale || '')).toLowerCase(); if (!s.includes(q.toLowerCase())) return false; }
      return true;
    });
  }

  Object.assign(G, { PageHeader, MotionRail, CategoryTabs, DataTable, Toolbar, EmptyState, applyFilters });
})();

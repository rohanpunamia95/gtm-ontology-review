// icpview.jsx — segment-based Ideal Company Profile tab
(function () {
  const G = (window.GTM = window.GTM || {});
  const h = React.createElement;

  // ICPSegments — segment switcher + definition + sweet-spot table + shared poor fit
  function ICPSegments({ meta, rows, opts, onOpen, onEdit, onAdd }) {
    const { Icon, Button, IconButton } = window.SalesforceDesignSystem_585a3e;
    const segments = (meta && meta.segments) || [];
    const [segId, setSegId] = React.useState(segments[0] && segments[0].id);
    const seg = segments.find(s => s.id === segId) || segments[0];

    const defRow = rows.find(r => r.segmentId === segId && r.isDefinition);
    const attrRows = rows.filter(r => r.segmentId === segId && !r.isDefinition);
    const poorFit = rows.filter(r => r.segmentId === 'poor_fit');

    return h('div', null,
      // toolbar
      h('div', { style: { display: 'flex', gap: 12, alignItems: 'center', margin: '14px 0', flexWrap: 'wrap' } },
        h('span', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-600)' } },
          'Segments learned from CRM (' + ((meta && meta.learnedFrom) || 'account fields') + ') \u00b7 sweet spots inferred from closed-won deals'),
        h('div', { style: { marginLeft: 'auto' } },
          h(Button, { variant: 'neutral', icon: 'plus', size: 'sm', onClick: () => onAdd(segId) }, 'Add attribute'))),
      // segment switcher
      h('div', { style: { display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' } },
        segments.map(s => {
          const on = s.id === segId;
          return h('button', { key: s.id, onClick: () => setSegId(s.id),
            style: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', cursor: 'pointer',
              borderRadius: 'var(--radius-full)', border: '1px solid ' + (on ? 'var(--sf-blue-500)' : 'var(--sf-gray-300)'),
              background: on ? 'var(--sf-blue-50)' : '#fff',
              font: 'var(--weight-' + (on ? 'semibold' : 'medium') + ') var(--text-sm)/1 var(--font-sans)',
              color: on ? 'var(--sf-blue-700)' : 'var(--sf-gray-700)', transition: 'border-color var(--duration-fast)' } },
            s.name,
            h('span', { style: { font: 'var(--type-label-xs)', color: on ? 'var(--sf-blue-700)' : 'var(--sf-gray-500)', fontVariantNumeric: 'tabular-nums' } },
              s.deals + ' deal' + (s.deals === 1 ? '' : 's')));
        })),
      // drift insight
      meta && meta.insight ? h('div', { style: { display: 'flex', gap: 9, alignItems: 'flex-start', padding: '10px 14px', marginBottom: 14,
        background: 'var(--sf-blue-50)', border: '1px solid var(--sf-blue-200)', borderRadius: 'var(--radius-md)' } },
        h('span', { style: { color: 'var(--sf-blue-500)', display: 'flex', flexShrink: 0, marginTop: 1 } }, h(Icon, { name: 'lightbulb', size: 15 })),
        h('span', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-700)', lineHeight: 1.5 } }, meta.insight)) : null,
      // definition strip
      defRow ? h('div', { onClick: () => onOpen(defRow),
        style: { display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', marginBottom: 14, cursor: 'pointer',
          background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-1)' } },
        h('div', { style: { flex: 1, minWidth: 0 } },
          h('div', { style: { font: 'var(--type-overline)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--sf-gray-500)', marginBottom: 3 } }, 'Segment definition'),
          h('div', { style: { font: 'var(--type-label-md)', color: 'var(--sf-gray-900)' } }, defRow.value),
          h('div', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-500)', marginTop: 3 } }, defRow.rationale)),
        h('span', { onClick: e => e.stopPropagation() },
          h(IconButton, { icon: 'pencil', size: 'sm', variant: 'ghost', title: 'Edit definition', onClick: () => onEdit(defRow) }))) : null,
      // sweet-spot table or empty state
      attrRows.length
        ? h('div', null,
            h('div', { style: { font: 'var(--type-h6)', color: 'var(--sf-gray-900)', margin: '0 0 8px' } },
              'Sweet spot \u00b7 derived from ' + seg.deals + ' closed-won deals' + (seg.medianAcv !== '\u2014' ? ' \u00b7 median ACV ' + seg.medianAcv : '')),
            h(G.DataTable, { rows: attrRows, tabKey: 'icp', opts, onRowClick: onOpen, onEditRow: onEdit }))
        : h('div', { style: { border: '1px dashed var(--sf-gray-300)', borderRadius: 'var(--radius-md)', background: '#fff', padding: '40px 24px', textAlign: 'center' } },
            h('span', { style: { display: 'inline-flex', color: 'var(--sf-gray-400)', marginBottom: 10 } }, h(Icon, { name: 'chart-scatter', size: 26 })),
            h('div', { style: { font: 'var(--type-h6)', color: 'var(--sf-gray-700)' } }, 'Not enough closed-won deals to infer a sweet spot'),
            h('div', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-500)', marginTop: 4 } },
              seg.deals + ' win' + (seg.deals === 1 ? '' : 's') + ' in this segment \u2014 patterns unlock as more deals close. You can add attributes manually.')),
      // shared poor fit
      poorFit.length ? h('div', { style: { marginTop: 18 } },
        h('div', { style: { display: 'flex', alignItems: 'center', gap: 7, margin: '0 0 8px' } },
          h('span', { style: { color: 'var(--sf-error-500)', display: 'flex' } }, h(Icon, { name: 'ban', size: 14 })),
          h('span', { style: { font: 'var(--type-h6)', color: 'var(--sf-gray-900)' } }, 'Poor fit \u00b7 shared across segments')),
        h(G.DataTable, { rows: poorFit, tabKey: 'icp', opts, onRowClick: onOpen, onEditRow: onEdit })) : null);
  }

  Object.assign(G, { ICPSegments });
})();

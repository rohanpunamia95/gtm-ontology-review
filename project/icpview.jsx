// icpview.jsx — segment-based Ideal Company Profile tab
(function () {
  const G = (window.GTM = window.GTM || {});
  const h = React.createElement;

  // One segment = one section: header + definition strip + sweet-spot table (or empty state)
  function SegmentSection({ seg, rows, opts, onOpen, onEdit, onAdd }) {
    const { Icon, Button, IconButton } = window.SalesforceDesignSystem_585a3e;
    const defRow = rows.find(r => r.segmentId === seg.id && r.isDefinition);
    const attrRows = rows.filter(r => r.segmentId === seg.id && !r.isDefinition);

    return h('div', { style: { marginBottom: 26 }, 'data-screen-label': 'ICP segment: ' + seg.name },
      // segment header
      h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 10, margin: '0 0 8px' } },
        h('span', { style: { font: 'var(--type-h5)', color: 'var(--sf-gray-900)' } }, seg.name)),
      // definition strip
      defRow ? h('div', { onClick: () => onOpen(defRow),
        style: { display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', marginBottom: 10, cursor: 'pointer',
          background: '#fff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-1)' } },
        h('div', { style: { flex: 1, minWidth: 0 } },
          h('div', { style: { font: 'var(--type-overline)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--sf-gray-500)', marginBottom: 3 } }, 'Segment definition'),
          h('div', { style: { font: 'var(--type-label-md)', color: 'var(--sf-gray-900)' } }, defRow.value),
          h('div', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-500)', marginTop: 3 } }, defRow.rationale)),
        h('span', { onClick: e => e.stopPropagation() },
          h(IconButton, { icon: 'pencil', size: 'sm', variant: 'ghost', title: 'Edit definition', onClick: () => onEdit(defRow) }))) : null,
      // sweet-spot table or empty state
      attrRows.length
        ? h(G.DataTable, { rows: attrRows, tabKey: 'icp', opts, onRowClick: onOpen, onEditRow: onEdit })
        : h('div', { style: { border: '1px dashed var(--sf-gray-300)', borderRadius: 'var(--radius-md)', background: '#fff', padding: '32px 24px', textAlign: 'center' } },
            h('span', { style: { display: 'inline-flex', color: 'var(--sf-gray-400)', marginBottom: 8 } }, h(Icon, { name: 'chart-scatter', size: 24 })),
            h('div', { style: { font: 'var(--type-h6)', color: 'var(--sf-gray-700)' } }, 'Not enough closed-won deals to infer a sweet spot'),
            h('div', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-500)', marginTop: 4 } },
              seg.deals + ' win' + (seg.deals === 1 ? '' : 's') + ' in this segment \u2014 patterns unlock as more deals close. You can add characteristics manually.')),
      // add row, below the table
      h(G.AddRowButton, { onClick: () => onAdd(seg.id) }));
  }

  // ICPSegments — every segment stacked as its own table, shared poor fit at the bottom
  function ICPSegments({ meta, rows, opts, onOpen, onEdit, onAdd }) {
    const { Icon } = window.SalesforceDesignSystem_585a3e;
    const segments = (meta && meta.segments) || [];
    const poorFit = rows.filter(r => r.segmentId === 'poor_fit');

    return h('div', null,
      h('div', { style: { height: 14 } }),
      segments.map(seg => h(SegmentSection, { key: seg.id, seg, rows, opts, onOpen, onEdit, onAdd })),
      // shared poor fit
      poorFit.length ? h('div', { style: { marginTop: 4 } },
        h('div', { style: { display: 'flex', alignItems: 'center', gap: 7, margin: '0 0 8px' } },
          h('span', { style: { color: 'var(--sf-error-500)', display: 'flex' } }, h(Icon, { name: 'ban', size: 14 })),
          h('span', { style: { font: 'var(--type-h5)', color: 'var(--sf-gray-900)' } }, 'Poor fit \u00b7 shared across segments')),
        h(G.DataTable, { rows: poorFit, tabKey: 'icp', opts, onRowClick: onOpen, onEditRow: onEdit }),
        h(G.AddRowButton, { onClick: () => onAdd('poor_fit') })) : null);
  }

  Object.assign(G, { ICPSegments });
})();

// editor.jsx — minimal row drawer: facts, sources, edit / add / delete
(function () {
  const G = (window.GTM = window.GTM || {});
  const h = React.createElement;
  const F = React.Fragment;

  function fieldToText(v, kind) { return kind === 'list' ? (v || []).join('\n') : (v == null ? '' : String(v)); }
  function textToField(t, kind) {
    if (kind === 'list') return t.split('\n').map(s => s.trim()).filter(Boolean);
    if (kind === 'number') return t === '' ? null : Number(t);
    return t;
  }

  function Editor({ state, motions, onClose, onSave, onCreate, onDelete }) {
    const { Icon, Button, Input, Textarea, Select } = window.SalesforceDesignSystem_585a3e;
    const { mode, kind, row, cats } = state; // mode: view|edit|create
    const isICP = kind === 'icp';
    const category = mode === 'create' ? (state.category || (cats && cats[0]) || 'Pain Point') : (isICP ? 'ICP Attribute' : row.category);
    const defs = G.FIELD_DEFS[isICP ? 'ICP Attribute' : category] || G.FIELD_DEFS['Pain Point'];

    const [editing, setEditing] = React.useState(mode !== 'view');
    const [draftCat, setDraftCat] = React.useState(category);
    const [draft, setDraft] = React.useState(() => {
      const d = {};
      defs.forEach(f => { d[f.key] = fieldToText(row ? row[f.key] : '', f.kind); });
      return d;
    });
    React.useEffect(() => {
      const dd = G.FIELD_DEFS[mode === 'create' && !isICP ? draftCat : (isICP ? 'ICP Attribute' : category)] || [];
      const d = {};
      dd.forEach(f => { d[f.key] = fieldToText(row ? row[f.key] : '', f.kind); });
      setDraft(d); setEditing(mode !== 'view');
    }, [row && row.id, mode, draftCat]);

    const activeDefs = G.FIELD_DEFS[mode === 'create' && !isICP ? draftCat : (isICP ? 'ICP Attribute' : category)] || defs;
    const title = mode === 'create' ? (isICP ? 'New attribute' : 'New row') : (isICP ? row.attribute : row.value);

    function save() {
      const patch = {};
      activeDefs.forEach(f => { patch[f.key] = textToField(draft[f.key] || '', f.kind); });
      if (mode === 'create') onCreate(kind, isICP ? patch : { ...patch, category: draftCat });
      else onSave(kind, row.id, patch);
    }

    // ── Facts (view mode) ──
    const facts = activeDefs.filter(f => f.key !== (isICP ? 'attribute' : 'value'))
      .map(f => ({ f, v: row ? row[f.key] : null }))
      .filter(x => x.v != null && x.v !== '' && !(Array.isArray(x.v) && !x.v.length));

    return h('div', { style: { position: 'fixed', inset: 0, zIndex: 1500, display: 'flex', justifyContent: 'flex-end' } },
      h('div', { onClick: onClose, style: { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.28)', animation: 'gtm-fade 150ms ease' } }),
      h('div', { style: { position: 'relative', width: 460, maxWidth: '94vw', height: '100%', background: '#fff', boxShadow: 'var(--shadow-4)', display: 'flex', flexDirection: 'column', animation: 'gtm-slide 200ms var(--ease-standard)' } },
        // header
        h('div', { style: { padding: '16px 20px 14px', borderBottom: '1px solid var(--color-border)' } },
          h('div', { style: { display: 'flex', alignItems: 'flex-start', gap: 11 } },
            h(G.CategoryIcon, { category: isICP ? 'ICP Attribute' : (mode === 'create' ? draftCat : category), size: 17, boxed: true }),
            h('div', { style: { flex: 1, minWidth: 0 } },
              h('div', { style: { font: 'var(--type-overline)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--sf-gray-500)' } },
                isICP ? 'Ideal company profile' : (mode === 'create' ? draftCat : category)),
              h('h2', { style: { font: 'var(--type-h4)', color: 'var(--sf-gray-900)', margin: '2px 0 0', lineHeight: 1.25 } }, title)),
            h('span', { onClick: onClose, style: { cursor: 'pointer', color: 'var(--sf-gray-500)', display: 'flex', padding: 2 } }, h(Icon, { name: 'x', size: 18 }))),
          !isICP && row && mode !== 'create' ? h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 } },
            h(G.ConfidenceChip, { level: row.confidence }),
            h(G.ClaimChip, { type: row.claimType })) : null),
        // body
        h('div', { style: { flex: 1, overflowY: 'auto', padding: '6px 20px 20px' } },
          editing
            ? h('div', { style: { display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 12 } },
                mode === 'create' && !isICP && cats && cats.length > 1 ? h(Select, { label: 'Category', value: draftCat, onChange: e => setDraftCat(e.target.value), options: cats }) : null,
                activeDefs.map(f => {
                  const common = { key: f.key, label: f.label, value: draft[f.key] || '', onChange: e => setDraft(d => ({ ...d, [f.key]: e.target.value })) };
                  if (f.kind === 'area') return h(Textarea, { ...common, rows: 3 });
                  if (f.kind === 'list') return h(Textarea, { ...common, rows: 4, placeholder: 'One per line' });
                  return h(Input, common);
                }))
            : h(F, null,
                facts.map(({ f, v }) => h('div', { key: f.key, style: { padding: '12px 0', borderBottom: '1px solid var(--sf-gray-100)' } },
                  h('div', { style: { font: 'var(--type-label-xs)', color: 'var(--sf-gray-500)', marginBottom: 4 } }, f.label),
                  f.kind === 'list'
                    ? (f.key === 'deals'
                        ? h('div', { style: { display: 'flex', gap: 6, flexWrap: 'wrap' } }, v.map(d => h(G.Pill, { key: d, icon: 'trophy' }, d)))
                        : h(G.Bullets, { items: v }))
                    : h('div', { style: { font: 'var(--type-body-sm)', color: 'var(--sf-gray-800)', lineHeight: 1.5 } }, String(v)))),
                // sources
                !isICP && row && (row.sources || []).length ? h('div', { style: { paddingTop: 14 } },
                  h('div', { style: { font: 'var(--type-overline)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--sf-gray-500)', marginBottom: 2 } }, 'Sources (' + row.sources.length + ')'),
                  row.sources.map((s, i) => h(G.SourceLine, { key: i, s }))) : null)),
        // footer
        h('div', { style: { borderTop: '1px solid var(--color-border)', background: 'var(--sf-gray-50)', padding: '12px 16px', display: 'flex', gap: 8, alignItems: 'center' } },
          editing
            ? h(F, null,
                mode !== 'create' ? h(Button, { variant: 'ghost', icon: 'trash-2', onClick: () => onDelete(kind, row.id), style: { color: 'var(--sf-error-500)' } }, 'Delete') : null,
                h('div', { style: { flex: 1 } }),
                h(Button, { variant: 'neutral', onClick: mode === 'create' ? onClose : () => setEditing(false) }, 'Cancel'),
                h(Button, { variant: 'primary', onClick: save }, mode === 'create' ? 'Add row' : 'Save'))
            : h(F, null,
                h(Button, { variant: 'ghost', icon: 'trash-2', onClick: () => onDelete(kind, row.id), style: { color: 'var(--sf-error-500)' } }, 'Delete'),
                h('div', { style: { flex: 1 } }),
                h(Button, { variant: 'neutral', icon: 'pencil', onClick: () => setEditing(true) }, 'Edit')))),
      h('style', null, '@keyframes gtm-fade{from{opacity:0}to{opacity:1}}@keyframes gtm-slide{from{transform:translateX(20px);opacity:.5}to{transform:translateX(0);opacity:1}}'));
  }

  Object.assign(G, { Editor });
})();

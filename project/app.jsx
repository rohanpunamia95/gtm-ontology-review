// app.jsx — root: product/motion selection, tabs, CRUD state, tweaks
(function boot() {
  const DS = window.SalesforceDesignSystem_585a3e;
  const G = window.GTM;
  if (!DS || !window.lucide || !G || !G.PageHeader || !G.ICPSegments || !G.Editor || !window.useTweaks) { setTimeout(boot, 30); return; }
  const h = React.createElement;
  const { Toast } = DS;

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "density": "comfortable",
    "showConfidence": true,
    "showSourceIcons": true
  }/*EDITMODE-END*/;

  function App() {
    const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
    const [rows, setRows] = React.useState(() => JSON.parse(JSON.stringify(window.GTM_DATA.rows)));
    const [icp, setIcp] = React.useState(() => JSON.parse(JSON.stringify(window.GTM_DATA.icp)));
    const [sel, setSel] = React.useState({ kind: 'product', id: window.GTM_DATA.motions[0].id });
    const [tab, setTab] = React.useState('who');
    const [editor, setEditor] = React.useState(null); // {mode, kind, row?, cats?, category?, segmentId?}
    const [toast, setToast] = React.useState(null);

    const data = window.GTM_DATA;
    const motions = data.motions;
    const plays = data.plays || [];
    const opts = { density: t.density, showConfidence: t.showConfidence, showSourceIcons: t.showSourceIcons };

    const flash = (cfg) => { setToast(cfg); clearTimeout(window.__gtmToast); window.__gtmToast = setTimeout(() => setToast(null), 2800); };

    // ── Selection (product or GTM motion/play) ──
    const play = sel.kind === 'play' ? plays.find(p => p.id === sel.id) : null;
    const selMotionIds = play ? play.motionIds : [sel.id];
    const icpKey = play ? play.icpMotionId : sel.id;
    const selName = play ? play.name : motions.find(m => m.id === sel.id).name.split(' \u2014 ')[0];

    const mRows = rows.filter(r => r.motionIds.some(m => selMotionIds.includes(m)));
    const mIcp = icp.filter(r => r.motionId === icpKey);

    const counts = { products: {}, plays: {} };
    motions.forEach(m => { counts.products[m.id] = rows.filter(r => r.motionIds.includes(m.id)).length + icp.filter(r => r.motionId === m.id && !r.isDefinition).length; });
    plays.forEach(p => { counts.plays[p.id] = rows.filter(r => r.motionIds.some(m => p.motionIds.includes(m))).length + icp.filter(r => r.motionId === p.icpMotionId && !r.isDefinition).length; });

    const tabDef = G.TABS.find(x => x.key === tab);

    // ── CRUD ──
    function saveRow(kind, id, patch) {
      if (kind === 'icp') setIcp(list => list.map(r => r.id === id ? { ...r, ...patch } : r));
      else setRows(list => list.map(r => r.id === id ? { ...r, ...patch } : r));
      setEditor(null); flash({ tone: 'success', title: 'Changes saved' });
    }
    function createRow(kind, fields) {
      const id = 'new_' + Date.now();
      if (kind === 'icp') setIcp(list => [...list, { id, motionId: icpKey, segmentId: (editor && editor.segmentId) || 'poor_fit', deals: [], ...fields }]);
      else {
        const prods = play ? play.products.slice(0, 1) : motions.find(m => m.id === sel.id).products.slice(0, 1);
        setRows(list => [...list, { id, motionIds: selMotionIds, products: prods,
          confidence: 'High', claimType: 'Stated', sources: [{ type: 'CRM note', label: 'Added by admin', snippet: 'Manually added to the ontology.', when: 'Jun 11, 2026', ref: 'Manual entry' }], ...fields }]);
      }
      setEditor(null); flash({ tone: 'success', title: 'Row added' });
    }
    function deleteRow(kind, id) {
      if (kind === 'icp') setIcp(list => list.filter(r => r.id !== id));
      else setRows(list => list.filter(r => r.id !== id));
      setEditor(null); flash({ tone: 'info', title: 'Row deleted' });
    }

    // ── Editor openers ──
    const openView = (kind) => (r) => setEditor({ mode: 'view', kind, row: r });
    const openEdit = (kind) => (r) => setEditor({ mode: 'edit', kind, row: r });
    const openAdd = (kind, cats, category) => () => setEditor({ mode: 'create', kind, cats, category });

    // ── Tab body ──
    let body;
    if (tab === 'icp') {
      body = h(G.ICPSegments, { key: icpKey, meta: data.icpSegMeta[icpKey], rows: mIcp, opts,
        onOpen: openView('icp'), onEdit: openEdit('icp'),
        onAdd: (segmentId) => setEditor({ mode: 'create', kind: 'icp', segmentId }) });
    } else {
      const base = tab === 'all' ? mRows : mRows.filter(r => tabDef.cats.includes(r.category));
      const cats = tab === 'all' ? Object.keys(G.CATEGORY).filter(c => c !== 'ICP Attribute') : tabDef.cats;
      body = h('div', null,
        h(G.Toolbar, { count: base.length, onAdd: openAdd('row', cats), addLabel: tab === 'who' ? 'Add persona' : 'Add row' }),
        h(G.DataTable, { rows: base, tabKey: tab, opts, onRowClick: openView('row'), onEditRow: openEdit('row') }));
    }

    return h('div', { style: { minHeight: '100vh', background: 'var(--color-bg-page)' } },
      h(G.TopNav, null),
      h('div', { style: { maxWidth: 1360, margin: '0 auto', padding: '16px 24px 72px' } },
        h(G.PageHeader, { data, onRerun: () => flash({ tone: 'info', title: 'Re-running extraction', body: 'Re-crawling calls, emails, notes, and web pages. This can take a few minutes.' }) }),
        h('div', { style: { display: 'grid', gridTemplateColumns: '248px minmax(0, 1fr)', gap: 16, alignItems: 'start' } },
          h(G.MotionRail, { motions, plays, sel, onSelect: (kind, id) => setSel({ kind, id }), counts }),
          h('div', { style: { minWidth: 0 } },
            h(G.CategoryTabs, { active: tab, setTab, mRows, icpCount: mIcp.filter(r => !r.isDefinition).length, motionName: selName }),
            body))),
      editor ? h(G.Editor, { state: editor, motions, onClose: () => setEditor(null), onSave: saveRow, onCreate: createRow, onDelete: deleteRow }) : null,
      toast ? h('div', { style: { position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 3000, minWidth: 300, maxWidth: 440, animation: 'gtm-fade 200ms ease' } },
        h(Toast, { tone: toast.tone, title: toast.title, onDismiss: () => setToast(null) }, toast.body)) : null,
      h(window.TweaksPanel, { title: 'Tweaks' },
        h(window.TweakSection, { label: 'Tables' }),
        h(window.TweakRadio, { label: 'Density', value: t.density, options: ['comfortable', 'compact'], onChange: v => setTweak('density', v) }),
        h(window.TweakToggle, { label: 'Confidence chips', value: t.showConfidence, onChange: v => setTweak('showConfidence', v) }),
        h(window.TweakToggle, { label: 'Source-type icons', value: t.showSourceIcons, onChange: v => setTweak('showSourceIcons', v) })),
      h('style', null, '@keyframes gtm-fade{from{opacity:0}to{opacity:1}}'));
  }

  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();

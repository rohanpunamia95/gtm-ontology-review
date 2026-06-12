import { LightningElement, track } from 'lwc';
import { GTM_DATA } from 'data/grounding';

// ── Tab + field metadata (ported from the prototype's helpers.jsx) ──────────
const TABS = [
    { key: 'who', label: 'Who buys', cats: ['Buyer Persona'] },
    { key: 'icp', label: 'Ideal company profile' },
    { key: 'why', label: 'Why they buy', cats: ['Pain Point', 'Value Proposition'] },
    { key: 'when', label: 'When to reach out', cats: ['Signal Playbook'] },
    { key: 'what', label: 'What to say', cats: ['Messaging Angle'] },
    { key: 'proof', label: 'Proof', cats: ['Case Study', 'Proof Point', 'Integration', 'Compliance / Security'] },
    { key: 'guard', label: 'Guardrails', cats: ['Messaging Guardrail', 'Competitor / Alternative'] },
    { key: 'all', label: 'All rows' },
];

const SEG_FIELD = { key: 'segment', label: 'Segment (blank = all segments)', kind: 'text' };
const PROOF_FIELDS = [
    { key: 'value', label: 'Item', kind: 'text' },
    { key: 'description', label: 'Description', kind: 'area' },
    { key: 'proofType', label: 'Type', kind: 'text' },
    { key: 'useCase', label: 'Use case', kind: 'area' },
    SEG_FIELD,
];
const FIELD_DEFS = {
    'Buyer Persona': [
        { key: 'value', label: 'Persona name', kind: 'text' },
        { key: 'description', label: 'Description', kind: 'area' },
        { key: 'titles', label: 'Example titles', kind: 'area' },
        { key: 'buyingRole', label: 'Buying role', kind: 'text' },
        { key: 'reportsTo', label: 'Reports to', kind: 'text' },
        { key: 'responsibilities', label: 'Owns', kind: 'area' },
        { key: 'caresAbout', label: 'Cares about', kind: 'list' },
        { key: 'kpis', label: 'KPIs they’re measured on', kind: 'list' },
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
        SEG_FIELD,
    ],
    'Value Proposition': [
        { key: 'value', label: 'Value proposition', kind: 'text' },
        { key: 'description', label: 'Description', kind: 'area' },
        { key: 'whyMatters', label: 'Why it matters', kind: 'area' },
        { key: 'capability', label: 'Product capability', kind: 'area' },
        { key: 'outcome', label: 'Business outcome', kind: 'area' },
        { key: 'relatedPersona', label: 'Related persona', kind: 'text' },
        SEG_FIELD,
    ],
    'Signal Playbook': [
        { key: 'value', label: 'Signal / trigger', kind: 'text' },
        { key: 'description', label: 'Description', kind: 'area' },
        { key: 'signalCategory', label: 'Signal category', kind: 'text' },
        { key: 'personaSegment', label: 'Target persona', kind: 'text' },
        { key: 'painHyp', label: 'Pain hypothesis', kind: 'text' },
        { key: 'angle', label: 'Messaging angle', kind: 'text' },
        { key: 'ttlDays', label: 'TTL (days)', kind: 'number' },
        SEG_FIELD,
    ],
    'Messaging Angle': [
        { key: 'value', label: 'Messaging angle', kind: 'text' },
        { key: 'description', label: 'Description', kind: 'area' },
        { key: 'useWhen', label: 'Use when', kind: 'area' },
        { key: 'personaSegment', label: 'Target persona', kind: 'text' },
        { key: 'hook', label: 'Example hook', kind: 'area' },
        { key: 'avoid', label: 'Avoid saying', kind: 'area' },
        SEG_FIELD,
    ],
    'Case Study': PROOF_FIELDS,
    'Proof Point': PROOF_FIELDS,
    'Integration': PROOF_FIELDS,
    'Compliance / Security': PROOF_FIELDS,
    'Messaging Guardrail': PROOF_FIELDS,
    'Competitor / Alternative': PROOF_FIELDS,
    'ICP Characteristic': [
        { key: 'characteristic', label: 'Characteristic', kind: 'text' },
        { key: 'charType', label: 'Type', kind: 'text' },
        { key: 'value', label: 'Value', kind: 'text' },
        { key: 'rationale', label: 'Rationale', kind: 'area' },
        { key: 'match', label: 'Recent closed-won match (e.g. "7 of 9")', kind: 'text' },
        { key: 'deals', label: 'Example deals', kind: 'list' },
    ],
};

const CONF_BADGE = {
    High: 'chip chip-high',
    Medium: 'chip chip-med',
    Low: 'chip chip-low',
};

const DASH = '—';
const joinList = (v) => (Array.isArray(v) ? v.join(' · ') : v);
const text = (key, v) => ({ key, text: v == null || v === '' ? DASH : String(v) });
const strong = (key, v) => ({ key, text: v || DASH, isStrong: true });
const confCell = (v) => ({ key: 'conf', text: v || 'Low', isBadge: true, badgeClass: CONF_BADGE[v] || CONF_BADGE.Low });
const segCell = (v) => (v
    ? { key: 'seg', text: v, isBadge: true, badgeClass: 'chip chip-seg' }
    : { key: 'seg', text: 'All', isMuted: true });
const srcCell = (r) => ({ key: 'src', text: String((r.sources || []).length), isMuted: true });

function barCell(match) {
    if (!match) return { key: 'bar', text: DASH, isMuted: true };
    const m = String(match).match(/(\d+)\s+of\s+(\d+)/);
    const pct = m ? Math.round((+m[1] / +m[2]) * 100) : 0;
    return { key: 'bar', isBar: true, text: match, barStyle: 'width:' + pct + '%' };
}

const COLUMNS = {
    who: [
        { key: 'value', label: 'Persona', style: 'width:12.5rem' }, { key: 'titles', label: 'Example titles', style: 'width:12.5rem' },
        { key: 'buyingRole', label: 'Buying role', style: 'width:8.5rem' }, { key: 'owns', label: 'Owns', style: 'width:13rem' },
        { key: 'cares', label: 'Cares about', style: 'width:13.5rem' }, { key: 'calls', label: 'Calls', style: 'width:5rem' },
        { key: 'seg', label: 'Segment', style: 'width:7rem' }, { key: 'conf', label: 'Confidence', style: 'width:7.5rem' },
        { key: 'src', label: 'Sources', style: 'width:6rem' },
    ],
    why: [
        { key: 'value', label: 'Item', style: 'width:13rem' }, { key: 'why', label: 'Why it matters', style: 'width:15.5rem' },
        { key: 'cap', label: 'Product capability', style: 'width:14rem' }, { key: 'persona', label: 'Persona', style: 'width:10rem' },
        { key: 'seg', label: 'Segment', style: 'width:7rem' }, { key: 'conf', label: 'Confidence', style: 'width:7.5rem' },
        { key: 'src', label: 'Sources', style: 'width:6rem' },
    ],
    when: [
        { key: 'value', label: 'Signal / trigger', style: 'width:13rem' }, { key: 'cat', label: 'Category', style: 'width:10rem' },
        { key: 'persona', label: 'Target persona', style: 'width:11rem' }, { key: 'angle', label: 'Messaging angle', style: 'width:14rem' },
        { key: 'ttl', label: 'TTL', style: 'width:4.5rem' },
        { key: 'seg', label: 'Segment', style: 'width:7rem' }, { key: 'conf', label: 'Confidence', style: 'width:7.5rem' },
        { key: 'src', label: 'Sources', style: 'width:6rem' },
    ],
    what: [
        { key: 'value', label: 'Messaging angle', style: 'width:14rem' }, { key: 'useWhen', label: 'Use when', style: 'width:14rem' },
        { key: 'hook', label: 'Example hook', style: 'width:16.5rem' }, { key: 'avoid', label: 'Avoid saying', style: 'width:13rem' },
        { key: 'seg', label: 'Segment', style: 'width:7rem' }, { key: 'conf', label: 'Confidence', style: 'width:7.5rem' },
        { key: 'src', label: 'Sources', style: 'width:6rem' },
    ],
    proof: [
        { key: 'type', label: 'Type', style: 'width:9rem' }, { key: 'value', label: 'Item', style: 'width:15rem' },
        { key: 'desc', label: 'Description', style: 'width:17rem' }, { key: 'useCase', label: 'Use case', style: 'width:13.5rem' },
        { key: 'seg', label: 'Segment', style: 'width:7rem' }, { key: 'conf', label: 'Confidence', style: 'width:7.5rem' },
        { key: 'src', label: 'Sources', style: 'width:6rem' },
    ],
    guard: [
        { key: 'type', label: 'Type', style: 'width:8rem' }, { key: 'value', label: 'Rule', style: 'width:16rem' },
        { key: 'desc', label: 'Description', style: 'width:19.5rem' }, { key: 'applies', label: 'Applies to', style: 'width:12rem' },
        { key: 'seg', label: 'Segment', style: 'width:7rem' }, { key: 'conf', label: 'Confidence', style: 'width:7.5rem' },
        { key: 'src', label: 'Sources', style: 'width:6rem' },
    ],
    all: [
        { key: 'cat', label: 'Category', style: 'width:10rem' }, { key: 'value', label: 'Extracted value', style: 'width:14rem' },
        { key: 'desc', label: 'Description', style: 'width:18.5rem' }, { key: 'product', label: 'Product', style: 'width:9rem' },
        { key: 'claim', label: 'Claim', style: 'width:6.5rem' }, { key: 'conf', label: 'Confidence', style: 'width:7.5rem' },
        { key: 'src', label: 'Sources', style: 'width:6rem' },
    ],
    icp: [
        { key: 'charType', label: 'Type', style: 'width:9rem' }, { key: 'value', label: 'Value', style: 'width:14rem' },
        { key: 'rationale', label: 'Rationale', style: 'width:17rem' }, { key: 'bar', label: 'Recent C/W deals', style: 'width:11rem' },
        { key: 'deals', label: 'Example deals', style: 'width:13rem' },
    ],
};

function cellsFor(tab, r) {
    switch (tab) {
        case 'who': return [strong('value', r.value), text('titles', r.titles), text('buyingRole', r.buyingRole),
            text('owns', r.responsibilities), text('cares', joinList(r.caresAbout)),
            text('calls', r.callMentions ? String(r.callMentions) : null), segCell(r.segment), confCell(r.confidence), srcCell(r)];
        case 'why': return [strong('value', r.value), text('why', r.whyMatters), text('cap', r.capability),
            text('persona', r.relatedPersona), segCell(r.segment), confCell(r.confidence), srcCell(r)];
        case 'when': return [strong('value', r.value), text('cat', r.signalCategory), text('persona', r.personaSegment),
            text('angle', r.angle), text('ttl', r.ttlDays ? r.ttlDays + 'd' : null), segCell(r.segment), confCell(r.confidence), srcCell(r)];
        case 'what': return [strong('value', r.value), text('useWhen', r.useWhen), text('hook', r.hook),
            text('avoid', r.avoid), segCell(r.segment), confCell(r.confidence), srcCell(r)];
        case 'proof': return [text('type', r.proofType || r.category), strong('value', r.value), text('desc', r.description),
            text('useCase', r.useCase), segCell(r.segment), confCell(r.confidence), srcCell(r)];
        case 'guard': return [text('type', r.category === 'Messaging Guardrail' ? 'Guardrail' : 'Competitor'),
            strong('value', r.value), text('desc', r.description), text('applies', r.personaSegment),
            segCell(r.segment), confCell(r.confidence), srcCell(r)];
        case 'icp': return [text('charType', r.segmentId === 'poor_fit' ? (r.charType || 'Avoid / Defer') : r.charType),
            strong('value', r.value), text('rationale', r.rationale), barCell(r.match),
            { key: 'deals', isPills: true, pills: (r.deals || []).slice(0, 2) }];
        default: return [text('cat', r.category), strong('value', r.value), text('desc', r.description),
            text('product', (r.products || []).join(', ')),
            { key: 'claim', text: (r.claimType || '').toUpperCase(), isMuted: true }, confCell(r.confidence), srcCell(r)];
    }
}

const clone = (o) => JSON.parse(JSON.stringify(o));
const fieldToText = (v, kind) => (kind === 'list' ? (v || []).join('\n') : v == null ? '' : String(v));
const textToField = (t, kind) => (kind === 'list'
    ? t.split('\n').map((s) => s.trim()).filter(Boolean)
    : kind === 'number' ? (t === '' ? null : Number(t)) : t);

export default class Grounding extends LightningElement {
    @track rows = clone(GTM_DATA.rows);
    @track icp = clone(GTM_DATA.icp);
    @track selId = GTM_DATA.motions[0].id;
    @track tab = 'who';
    @track editor = null; // { mode, kind, rowId?, category?, cats?, segmentId?, draft? }
    @track toast = null;

    // ── Header ──
    get meta() { return GTM_DATA.meta || {}; }
    get customer() { return GTM_DATA.customer; }
    get extractedAt() { return GTM_DATA.extractedAt; }

    // ── Left rail ──
    get products() {
        return GTM_DATA.motions.map((m) => {
            const count = this.rows.filter((r) => r.motionIds.includes(m.id)).length +
                this.icp.filter((r) => r.motionId === m.id && !r.isDefinition).length;
            const active = m.id === this.selId;
            return {
                id: m.id, name: m.name.split(' — ')[0], count,
                itemClass: 'slds-nav-vertical__item' + (active ? ' slds-is-active' : ''),
            };
        });
    }
    get selName() {
        const m = GTM_DATA.motions.find((x) => x.id === this.selId);
        return m ? m.name.split(' — ')[0] : '';
    }

    // ── Rows in scope ──
    get mRows() { return this.rows.filter((r) => r.motionIds.includes(this.selId)); }
    get mIcp() { return this.icp.filter((r) => r.motionId === this.selId); }

    // ── Tabs ──
    get tabs() {
        return TABS.map((t) => {
            const count = t.key === 'icp'
                ? this.mIcp.filter((r) => !r.isDefinition).length
                : t.cats ? this.mRows.filter((r) => t.cats.includes(r.category)).length : this.mRows.length;
            const active = t.key === this.tab;
            return {
                ...t, count,
                itemClass: 'slds-tabs_default__item' + (active ? ' slds-is-active' : ''),
                tabIndex: active ? 0 : -1,
                ariaSelected: active ? 'true' : 'false',
            };
        });
    }
    get isIcpTab() { return this.tab === 'icp'; }

    // ── Standard table body ──
    get tableColumns() { return COLUMNS[this.tab] || COLUMNS.all; }
    get tableRows() {
        const def = TABS.find((t) => t.key === this.tab);
        const base = this.tab === 'all' ? this.mRows : this.mRows.filter((r) => def.cats.includes(r.category));
        return base.map((r) => ({ id: r.id, cells: cellsFor(this.tab, r) }));
    }
    get rowCountLabel() { return this.tableRows.length + ' rows'; }
    get addLabel() { return this.tab === 'who' ? 'Add persona' : 'Add row'; }

    // ── ICP tab ──
    get icpColumns() { return COLUMNS.icp; }
    get icpSections() {
        const meta = (GTM_DATA.icpSegMeta || {})[this.selId] || { segments: [] };
        return meta.segments.map((seg) => {
            const defRow = this.mIcp.find((r) => r.segmentId === seg.id && r.isDefinition);
            const attrs = this.mIcp.filter((r) => r.segmentId === seg.id && !r.isDefinition);
            return {
                id: seg.id, name: seg.name,
                defId: defRow && defRow.id, defText: defRow && defRow.value, defSub: defRow && defRow.rationale,
                rows: attrs.map((r) => ({ id: r.id, cells: cellsFor('icp', r) })),
                hasRows: attrs.length > 0,
                emptyText: seg.deals + ' win' + (seg.deals === 1 ? '' : 's') + ' in this segment — patterns unlock as more deals close. You can add characteristics manually.',
            };
        });
    }
    get poorFitRows() {
        return this.mIcp.filter((r) => r.segmentId === 'poor_fit')
            .map((r) => ({ id: r.id, cells: cellsFor('icp', r) }));
    }
    get hasPoorFit() { return this.poorFitRows.length > 0; }

    // Dock overlays below the global shell header. Measured on each drawer
    // open (first-render layout is not settled yet); synthetic shadow patches
    // querySelector, so walk the DOM to find the app body's top edge.
    measureShellTop() {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
        while (walker.nextNode()) {
            const n = walker.currentNode;
            if (String(n.className).split(' ').includes('app-body')) {
                this.template.host.style.setProperty('--grounding-shell-top', Math.max(0, n.getBoundingClientRect().top) + 'px');
                return;
            }
        }
        this.template.host.style.setProperty('--grounding-shell-top', '0px');
    }

    // ── Handlers: navigation ──
    noop(event) { event.preventDefault(); }
    handleProductSelect(event) {
        event.preventDefault();
        this.selId = event.currentTarget.dataset.id;
    }
    handleTabSelect(event) {
        event.preventDefault();
        this.tab = event.currentTarget.dataset.tab;
    }
    handleRerun() {
        this.showToast('info', 'Re-running extraction', 'Re-crawling calls, emails, notes, and web pages. This can take a few minutes.');
    }

    // ── Editor open/close ──
    findRow(kind, id) { return (kind === 'icp' ? this.icp : this.rows).find((r) => r.id === id); }

    openEditor(mode, kind, rowId, extra) {
        const row = rowId ? this.findRow(kind, rowId) : null;
        const category = mode === 'create'
            ? (kind === 'icp' ? 'ICP Characteristic' : (extra && extra.cats && extra.cats[0]) || 'Pain Point')
            : (kind === 'icp' ? 'ICP Characteristic' : row.category);
        const defs = FIELD_DEFS[category] || [];
        const draft = {};
        defs.forEach((f) => { draft[f.key] = fieldToText(row ? row[f.key] : '', f.kind); });
        this.measureShellTop();
        this.editor = { mode, kind, rowId, category, draft, ...(extra || {}) };
    }

    handleRowOpen(event) { this.openEditor('view', 'row', event.detail.id); }
    handleRowEdit(event) { this.openEditor('edit', 'row', event.detail.id); }
    handleIcpOpen(event) { this.openEditor('view', 'icp', event.detail.id); }
    handleIcpEdit(event) { this.openEditor('edit', 'icp', event.detail.id); }
    handleDefOpen(event) { this.openEditor('view', 'icp', event.currentTarget.dataset.id); }
    handleDefEdit(event) {
        event.stopPropagation();
        this.openEditor('edit', 'icp', event.currentTarget.dataset.id);
    }
    handleAddRow() {
        const def = TABS.find((t) => t.key === this.tab);
        const cats = this.tab === 'all'
            ? Object.keys(FIELD_DEFS).filter((c) => c !== 'ICP Characteristic')
            : def.cats;
        this.openEditor('create', 'row', null, { cats });
    }
    handleAddIcp(event) {
        this.openEditor('create', 'icp', null, { segmentId: event.currentTarget.dataset.seg });
    }
    closeEditor() { this.editor = null; }
    switchToEdit() { this.openEditor('edit', this.editor.kind, this.editor.rowId); }

    // ── Editor view models ──
    get isView() { return this.editor && this.editor.mode === 'view'; }
    get isEditing() { return this.editor && this.editor.mode !== 'view'; }
    get isCreate() { return this.editor && this.editor.mode === 'create'; }
    get drawerCategory() { return this.editor ? this.editor.category : ''; }
    get drawerTitle() {
        if (!this.editor) return '';
        if (this.editor.mode === 'create') return this.editor.kind === 'icp' ? 'New characteristic' : 'New row';
        const row = this.findRow(this.editor.kind, this.editor.rowId);
        return this.editor.kind === 'icp' ? (row.characteristic || row.value) : row.value;
    }
    get drawerChips() {
        if (!this.editor || this.editor.kind === 'icp' || this.editor.mode === 'create') return null;
        const row = this.findRow(this.editor.kind, this.editor.rowId);
        if (!row) return null;
        return {
            confText: row.confidence, confClass: CONF_BADGE[row.confidence] || CONF_BADGE.Low,
            claim: (row.claimType || '').toUpperCase(),
        };
    }
    get showCategoryPicker() {
        return this.isCreate && this.editor.kind !== 'icp' && this.editor.cats && this.editor.cats.length > 1;
    }
    get categoryOptions() {
        return (this.editor.cats || []).map((c) => ({ label: c, value: c }));
    }
    get editFields() {
        if (!this.editor) return [];
        const defs = FIELD_DEFS[this.editor.category] || [];
        return defs.map((f) => ({
            ...f,
            value: this.editor.draft[f.key] || '',
            isArea: f.kind === 'area' || f.kind === 'list',
            isNumber: f.kind === 'number',
            isText: f.kind === 'text',
            placeholder: f.kind === 'list' ? 'One per line' : '',
        }));
    }
    get viewFacts() {
        if (!this.editor || this.editor.mode !== 'view') return [];
        const row = this.findRow(this.editor.kind, this.editor.rowId);
        if (!row) return [];
        const titleKey = this.editor.kind === 'icp' ? 'characteristic' : 'value';
        const defs = FIELD_DEFS[this.editor.category] || [];
        return defs.filter((f) => f.key !== titleKey)
            .map((f) => {
                const v = row[f.key];
                if (v == null || v === '' || (Array.isArray(v) && !v.length)) return null;
                return {
                    key: f.key, label: f.label,
                    isList: f.kind === 'list',
                    items: Array.isArray(v) ? v : null,
                    text: Array.isArray(v) ? null : String(v),
                };
            })
            .filter(Boolean);
    }
    get viewSources() {
        if (!this.editor || this.editor.mode !== 'view' || this.editor.kind === 'icp') return [];
        const row = this.findRow(this.editor.kind, this.editor.rowId);
        return ((row && row.sources) || []).map((s, i) => ({
            id: 'src' + i, type: s.type, label: s.label, when: s.when, ref: s.ref,
            snippet: '“' + s.snippet + '”',
        }));
    }
    get hasSources() { return this.viewSources.length > 0; }
    get sourceCountLabel() { return 'Sources (' + this.viewSources.length + ')'; }

    handleFieldChange(event) {
        const key = event.target.dataset.key;
        this.editor.draft[key] = event.target.value;
    }
    handleCategoryChange(event) {
        const category = event.detail.value;
        const defs = FIELD_DEFS[category] || [];
        const draft = {};
        defs.forEach((f) => { draft[f.key] = ''; });
        this.editor = { ...this.editor, category, draft };
    }

    // ── CRUD ──
    handleSave() {
        const { mode, kind, rowId, category, draft } = this.editor;
        const defs = FIELD_DEFS[category] || [];
        const patch = {};
        defs.forEach((f) => { patch[f.key] = textToField(draft[f.key] || '', f.kind); });
        if (mode === 'create') {
            const id = 'new_' + Date.now();
            if (kind === 'icp') {
                this.icp = [...this.icp, { id, motionId: this.selId, segmentId: this.editor.segmentId || 'poor_fit', deals: [], ...patch }];
            } else {
                const prods = GTM_DATA.motions.find((m) => m.id === this.selId).products.slice(0, 1);
                this.rows = [...this.rows, {
                    id, motionIds: [this.selId], products: prods, category,
                    confidence: 'High', claimType: 'Stated',
                    sources: [{ type: 'CRM note', label: 'Added by admin', snippet: 'Manually added to the repository.', when: 'Jun 12, 2026', ref: 'Manual entry' }],
                    ...patch,
                }];
            }
            this.showToast('success', 'Row added');
        } else {
            const list = kind === 'icp' ? this.icp : this.rows;
            const next = list.map((r) => (r.id === rowId ? { ...r, ...patch } : r));
            if (kind === 'icp') this.icp = next; else this.rows = next;
            this.showToast('success', 'Changes saved');
        }
        this.editor = null;
    }

    handleDelete() {
        const { kind, rowId } = this.editor;
        if (kind === 'icp') this.icp = this.icp.filter((r) => r.id !== rowId);
        else this.rows = this.rows.filter((r) => r.id !== rowId);
        this.editor = null;
        this.showToast('info', 'Row deleted');
    }

    // ── Toast ──
    showToast(tone, title, body) {
        this.measureShellTop();
        this.toast = {
            title, body,
            cls: 'slds-notify slds-notify_toast slds-theme_' + (tone === 'success' ? 'success' : 'info'),
        };
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => { this.toast = null; }, 3000);
    }
    dismissToast() { this.toast = null; }
}

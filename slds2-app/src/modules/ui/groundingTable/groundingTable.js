import { LightningElement, api } from 'lwc';

/**
 * Generic SLDS data table for the Agent Grounding repository.
 * columns: [{ key, label, style? }]
 * rows:    [{ id, cells: [{ key, text, isStrong?, isBadge?, badgeClass?, isMuted?,
 *                           isBar?, barStyle?, isPills?, pills? }] }]
 * Fires:   rowopen { id } on row click, rowedit { id } on the pencil.
 */
export default class GroundingTable extends LightningElement {
    @api columns = [];
    @api rows = [];

    handleRowClick(event) {
        const id = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('rowopen', { detail: { id } }));
    }

    handleEdit(event) {
        event.stopPropagation();
        const id = event.currentTarget.dataset.id;
        this.dispatchEvent(new CustomEvent('rowedit', { detail: { id } }));
    }

    stopRowClick(event) {
        event.stopPropagation();
    }
}

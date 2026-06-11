// icp-segments.js — segment-based Ideal Company Profile model.
// Loads after data2.js; REPLACES the flat D.icp rows with the segment model:
//   Layer 1: canonical segments (SMB / MM / ENT) learned from CRM structure
//   Layer 2: sweet-spot attributes inferred from each segment's closed-won deals
(function () {
  const D = window.GTM_DATA;

  // Segment metadata per product (keyed by the product's icp key)
  D.icpSegMeta = {
    data_360_ai_readiness: {
      learnedFrom: 'Account segment field + territory model',
      insight: '3 of 5 mid-market wins resemble Enterprise deals (6+ stakeholders, 6-month cycles). Segment boundaries may be drifting \u2014 worth a review with RevOps.',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 9, medianAcv: '$520K' },
        { id: 'mm', name: 'Mid-market', deals: 5, medianAcv: '$260K' },
        { id: 'smb', name: 'SMB', deals: 1, medianAcv: '\u2014' },
      ] },
    sales_cloud_rep_productivity: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 5, medianAcv: '$450K' },
        { id: 'mm', name: 'Mid-market', deals: 7, medianAcv: '$190K' },
      ] },
    agentforce_sales_automation: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 5, medianAcv: '$220K' },
        { id: 'mm', name: 'Mid-market', deals: 3, medianAcv: '$110K' },
      ] },
    service_cloud_contact_center: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 8, medianAcv: '$390K' },
        { id: 'mm', name: 'Mid-market', deals: 3, medianAcv: '$210K' },
      ] },
    mulesoft_integration_modernization: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 7, medianAcv: '$560K' },
        { id: 'mm', name: 'Mid-market', deals: 2, medianAcv: '\u2014' },
      ] },
  };

  // Flat attribute rows. segmentId: 'ent' | 'mm' | 'smb' | 'poor_fit' (shared).
  // isDefinition rows carry the segment's learned definition.
  let n = 0;
  const A = (motionId, segmentId, attribute, value, rationale, deals, isDefinition) =>
    ({ id: 'icp_' + motionId.slice(0, 8) + '_' + (++n), motionId, segmentId, attribute, value, rationale, deals: deals || [], isDefinition: !!isDefinition });

  D.icp = [
    // ═══ Data 360 ═══
    A('data_360_ai_readiness', 'ent', 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', [], true),
    A('data_360_ai_readiness', 'ent', 'Industries', 'Retail, Financial services, Healthcare', '7 of 9 Enterprise wins', ['United Oil & Gas \u00b7 $740K']),
    A('data_360_ai_readiness', 'ent', 'Data stack', 'Snowflake or Databricks in place', '8 of 9 wins; zero-copy access cited as decisive in 6.', ['Pyramid Construction \u00b7 $520K']),
    A('data_360_ai_readiness', 'ent', 'AI initiative', 'Funded GenAI program in flight', '9 of 9 had a named, budgeted program at first call.', ['Grand Hotels & Resorts \u00b7 $610K']),
    A('data_360_ai_readiness', 'ent', 'Buying committee', 'CDO + CIO + security review', 'Median 7 stakeholders; security review adds 3\u20136 weeks.', []),
    A('data_360_ai_readiness', 'ent', 'Sales cycle', '5 \u2013 8 months', 'Median 6.0 months.', []),
    A('data_360_ai_readiness', 'ent', 'Deal size', '$350K \u2013 $750K ACV', 'Median $520K.', []),
    A('data_360_ai_readiness', 'mm', 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', [], true),
    A('data_360_ai_readiness', 'mm', 'Industries', 'Retail, Technology', '4 of 5 mid-market wins', ['Northern Trail Outfitters \u00b7 $310K']),
    A('data_360_ai_readiness', 'mm', 'Data stack', 'Cloud warehouse, lean data team', '3 of 5; implementation support was decisive.', ['Burlington Textiles \u00b7 $220K']),
    A('data_360_ai_readiness', 'mm', 'Trigger', 'First senior data hire', '4 of 5 wins followed a new data leader.', ['GenePoint \u00b7 $180K']),
    A('data_360_ai_readiness', 'mm', 'Buying committee', 'Data leader + RevOps', 'Median 4 stakeholders.', []),
    A('data_360_ai_readiness', 'mm', 'Sales cycle', '3 \u2013 4 months', 'Median 3.4 months.', []),
    A('data_360_ai_readiness', 'mm', 'Deal size', '$150K \u2013 $350K ACV', 'Median $260K.', []),
    A('data_360_ai_readiness', 'smb', 'Definition', 'SMB \u2014 under 200 employees, pooled territories, inside sales',
      'Learned from the Account segment picklist and territory model', [], true),
    A('data_360_ai_readiness', 'poor_fit', 'No data engineering function', 'Avoid', 'Implementations stall without a customer-side data owner.', []),
    A('data_360_ai_readiness', 'poor_fit', 'Warehouse migration mid-flight', 'Defer', 'Two stalled deals; revisit once the migration lands.', []),
    A('data_360_ai_readiness', 'poor_fit', 'Single-brand SMB without analytics', 'Avoid', 'Zero wins; recent losses cite price.', []),

    // ═══ Sales Cloud ═══
    A('sales_cloud_rep_productivity', 'ent', 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', [], true),
    A('sales_cloud_rep_productivity', 'ent', 'Sales org size', '1,000+ quota-carrying reps', '4 of 5 wins; median 1,400 reps.', []),
    A('sales_cloud_rep_productivity', 'ent', 'Industries', 'Manufacturing, Logistics', '4 of 5 Enterprise wins', ['Express Logistics \u00b7 $270K']),
    A('sales_cloud_rep_productivity', 'ent', 'Trigger', 'New CRO within first two quarters', '4 of 5 wins started within 6 months of a CRO change.', []),
    A('sales_cloud_rep_productivity', 'ent', 'Buying committee', 'CRO + IT + procurement', 'Median 6 stakeholders.', []),
    A('sales_cloud_rep_productivity', 'ent', 'Sales cycle', '5 \u2013 7 months', 'Median 5.8 months.', []),
    A('sales_cloud_rep_productivity', 'ent', 'Deal size', '$300K \u2013 $600K ACV', 'Median $450K.', []),
    A('sales_cloud_rep_productivity', 'mm', 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', [], true),
    A('sales_cloud_rep_productivity', 'mm', 'Sales org size', '50 \u2013 200 quota-carrying reps', 'Median 140 reps across 7 wins.', ['Dickenson plc \u00b7 $390K']),
    A('sales_cloud_rep_productivity', 'mm', 'Industries', 'SaaS, Business services', '6 of 7 mid-market wins', []),
    A('sales_cloud_rep_productivity', 'mm', 'Champion', 'RevOps-led evaluation', '6 of 7; RevOps is the working champion.', []),
    A('sales_cloud_rep_productivity', 'mm', 'Sales cycle', '~3 months', 'Median 3.1 months.', []),
    A('sales_cloud_rep_productivity', 'mm', 'Deal size', '$120K \u2013 $250K ACV', 'Median $190K.', []),
    A('sales_cloud_rep_productivity', 'poor_fit', 'Teams under 25 reps', 'Avoid', 'ROI math fails below 25 reps; 5 recent losses cite price.', []),
    A('sales_cloud_rep_productivity', 'poor_fit', 'Fully outsourced sales model', 'Avoid', 'No internal process to automate.', []),

    // ═══ Agentforce ═══
    A('agentforce_sales_automation', 'ent', 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', [], true),
    A('agentforce_sales_automation', 'ent', 'CRM maturity', 'Mature Sales Cloud org with clean data', 'Stated prerequisite in 5 of 5 wins.', ['Grand Hotels & Resorts \u00b7 $610K']),
    A('agentforce_sales_automation', 'ent', 'Budget', 'Funded AI budget line', '5 of 5; never displacement of headcount budget.', []),
    A('agentforce_sales_automation', 'ent', 'Sponsor', 'C-level exec sponsor', 'Director-led evaluations stalled.', []),
    A('agentforce_sales_automation', 'ent', 'Sales cycle', '3 \u2013 4 months', 'Land one use case, expand after first measurable win.', []),
    A('agentforce_sales_automation', 'ent', 'Deal size', '$150K \u2013 $300K initial ACV', 'Median $220K initial.', []),
    A('agentforce_sales_automation', 'mm', 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', [], true),
    A('agentforce_sales_automation', 'mm', 'Entry point', 'Single use case land', '3 of 3 wins landed on one workflow.', ['Cloud Kicks \u00b7 $480K']),
    A('agentforce_sales_automation', 'mm', 'Sponsor', 'Founder or CRO', 'Smaller orgs move only with top-down sponsorship.', []),
    A('agentforce_sales_automation', 'mm', 'Deal size', '$80K \u2013 $150K initial ACV', 'Median $110K initial.', []),
    A('agentforce_sales_automation', 'poor_fit', 'Messy CRM data', 'Defer', 'Route to the Sales Cloud hygiene motion first.', []),
    A('agentforce_sales_automation', 'poor_fit', 'No legal framework for AI outreach', 'Defer', 'Two deals stalled in legal for 90+ days.', []),

    // ═══ Service Cloud ═══
    A('service_cloud_contact_center', 'ent', 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', [], true),
    A('service_cloud_contact_center', 'ent', 'Contact center size', '300+ seats', 'Median 320 seats across 8 wins.', ['Grand Hotels & Resorts \u00b7 $610K']),
    A('service_cloud_contact_center', 'ent', 'Industries', 'Hospitality, Telecom, Utilities', '7 of 8 Enterprise wins are high-volume B2C.', []),
    A('service_cloud_contact_center', 'ent', 'Mandate', 'Cost-to-serve reduction program', '7 of 8 had a stated cost mandate.', []),
    A('service_cloud_contact_center', 'ent', 'Buying committee', 'VP Support + IT + procurement', 'Procurement involved from week one in 7 of 8.', []),
    A('service_cloud_contact_center', 'ent', 'Sales cycle', '5 \u2013 6 months', 'Median 5.2 months.', []),
    A('service_cloud_contact_center', 'ent', 'Deal size', '$300K \u2013 $600K ACV', 'Median $390K.', []),
    A('service_cloud_contact_center', 'mm', 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', [], true),
    A('service_cloud_contact_center', 'mm', 'Contact center size', '100 \u2013 300 seats', 'All 3 mid-market wins.', []),
    A('service_cloud_contact_center', 'mm', 'Current stack', 'Aging helpdesk displacement', '3 of 3 displaced an end-of-life system.', []),
    A('service_cloud_contact_center', 'mm', 'Sales cycle', '3 \u2013 4 months', 'Median 3.6 months.', []),
    A('service_cloud_contact_center', 'mm', 'Deal size', '$150K \u2013 $300K ACV', 'Median $210K.', []),
    A('service_cloud_contact_center', 'poor_fit', 'Under 25 support seats', 'Avoid', 'No recent wins below 25 seats.', []),
    A('service_cloud_contact_center', 'poor_fit', 'Pure email support', 'Avoid', 'Deflection ROI requires multi-channel volume.', []),

    // ═══ MuleSoft ═══
    A('mulesoft_integration_modernization', 'ent', 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', [], true),
    A('mulesoft_integration_modernization', 'ent', 'App portfolio', '100+ applications', 'Median 240 apps across 7 wins.', ['United Oil & Gas \u00b7 $740K']),
    A('mulesoft_integration_modernization', 'ent', 'M&A activity', 'Acquisition in past 24 months', '5 of 7 wins \u2014 the strongest single predictor.', ['Pyramid Construction \u00b7 $520K']),
    A('mulesoft_integration_modernization', 'ent', 'Middleware', 'Legacy ESB to retire', '6 of 7 displaced an aging ESB.', []),
    A('mulesoft_integration_modernization', 'ent', 'Buying committee', 'Architect-led; CIO signs', 'Enterprise architect runs the evaluation.', []),
    A('mulesoft_integration_modernization', 'ent', 'Sales cycle', '6 \u2013 8 months', 'Median 6.4 months.', []),
    A('mulesoft_integration_modernization', 'ent', 'Deal size', '$400K \u2013 $900K ACV', 'Median $560K.', []),
    A('mulesoft_integration_modernization', 'mm', 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', [], true),
    A('mulesoft_integration_modernization', 'poor_fit', 'Greenfield or single-vendor stacks', 'Avoid', 'No integration debt, no urgency.', []),
  ];
})();

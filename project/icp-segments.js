// icp-segments.js — segment-based Ideal Company Profile model.
// Loads after data2.js; REPLACES the flat D.icp rows with the segment model:
//   Layer 1: canonical segments (SMB / MM / ENT) learned from CRM structure
//   Layer 2: sweet-spot characteristics inferred from each segment's closed-won deals,
//            each backtested against that segment's recent closed-won deals (match = "n of N")
(function () {
  const D = window.GTM_DATA;

  // Segment metadata per product (keyed by the product's icp key)
  D.icpSegMeta = {
    data_360_ai_readiness: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 90, medianAcv: '$520K' },
        { id: 'mm', name: 'Mid-market', deals: 50, medianAcv: '$260K' },
        { id: 'smb', name: 'SMB', deals: 4, medianAcv: '\u2014' },
      ] },
    sales_cloud_rep_productivity: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 50, medianAcv: '$450K' },
        { id: 'mm', name: 'Mid-market', deals: 70, medianAcv: '$190K' },
      ] },
    agentforce_sales_automation: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 50, medianAcv: '$220K' },
        { id: 'mm', name: 'Mid-market', deals: 30, medianAcv: '$110K' },
      ] },
    service_cloud_contact_center: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 80, medianAcv: '$390K' },
        { id: 'mm', name: 'Mid-market', deals: 30, medianAcv: '$210K' },
      ] },
    mulesoft_integration_modernization: {
      learnedFrom: 'Account segment field + territory model',
      segments: [
        { id: 'ent', name: 'Enterprise', deals: 70, medianAcv: '$560K' },
        { id: 'mm', name: 'Mid-market', deals: 20, medianAcv: '\u2014' },
      ] },
  };

  // Flat characteristic rows. segmentId: 'ent' | 'mm' | 'smb' | 'poor_fit' (shared).
  // charType: Firmographic | Technographic | Signal | Buying behavior | Deal shape.
  // match: "n of N" — backtest against the segment's recent closed-won deals.
  // isDefinition rows carry the segment's learned definition.
  let n = 0;
  const A = (motionId, segmentId, charType, characteristic, value, rationale, match, deals, isDefinition) =>
    ({ id: 'icp_' + motionId.slice(0, 8) + '_' + (++n), motionId, segmentId, charType, characteristic, value, rationale, match: match || null, deals: deals || [], isDefinition: !!isDefinition });

  D.icp = [
    // ═══ Data 360 ═══
    A('data_360_ai_readiness', 'ent', null, 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('data_360_ai_readiness', 'ent', 'Firmographic', 'Industries', 'Retail, Financial services, Healthcare', 'Verticals with heavy first-party data estates dominate wins.', '71 of 90', ['United Oil & Gas \u00b7 $740K']),
    A('data_360_ai_readiness', 'ent', 'Technographic', 'Data stack', 'Snowflake or Databricks in place', 'Zero-copy access cited as decisive in 54 wins.', '78 of 90', ['Pyramid Construction \u00b7 $520K']),
    A('data_360_ai_readiness', 'ent', 'Signal', 'AI initiative', 'Funded GenAI program in flight', 'A named, budgeted program existed at first call in nearly every win.', '86 of 90', ['Grand Hotels & Resorts \u00b7 $610K']),
    A('data_360_ai_readiness', 'ent', 'Buying behavior', 'Buying committee', 'CDO + CIO + security review', 'Median 7 stakeholders; security review adds 3\u20136 weeks.', '75 of 90', []),
    A('data_360_ai_readiness', 'ent', 'Deal shape', 'Sales cycle', '5 \u2013 8 months', 'Median 6.0 months.', '68 of 90', []),
    A('data_360_ai_readiness', 'ent', 'Deal shape', 'Deal size', '$350K \u2013 $750K ACV', 'Median $520K.', '66 of 90', []),
    A('data_360_ai_readiness', 'mm', null, 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('data_360_ai_readiness', 'mm', 'Firmographic', 'Industries', 'Retail, Technology', 'Digital-native and omnichannel retailers over-index.', '39 of 50', ['Northern Trail Outfitters \u00b7 $310K']),
    A('data_360_ai_readiness', 'mm', 'Technographic', 'Data stack', 'Cloud warehouse, lean data team', 'Implementation support was decisive where the team was small.', '31 of 50', ['Burlington Textiles \u00b7 $220K']),
    A('data_360_ai_readiness', 'mm', 'Signal', 'Trigger', 'First senior data hire', 'Wins followed a new data leader within two quarters.', '38 of 50', ['GenePoint \u00b7 $180K']),
    A('data_360_ai_readiness', 'mm', 'Buying behavior', 'Buying committee', 'Data leader + RevOps', 'Median 4 stakeholders.', '36 of 50', []),
    A('data_360_ai_readiness', 'mm', 'Deal shape', 'Sales cycle', '3 \u2013 4 months', 'Median 3.4 months.', '40 of 50', []),
    A('data_360_ai_readiness', 'mm', 'Deal shape', 'Deal size', '$150K \u2013 $350K ACV', 'Median $260K.', '37 of 50', []),
    A('data_360_ai_readiness', 'smb', null, 'Definition', 'SMB \u2014 under 200 employees, pooled territories, inside sales',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('data_360_ai_readiness', 'poor_fit', null, 'No data engineering function', 'Avoid', 'Implementations stall without a customer-side data owner.', null, []),
    A('data_360_ai_readiness', 'poor_fit', null, 'Warehouse migration mid-flight', 'Defer', 'Stalled deals cluster here; revisit once the migration lands.', null, []),
    A('data_360_ai_readiness', 'poor_fit', null, 'Single-brand SMB without analytics', 'Avoid', 'Zero wins; recent losses cite price.', null, []),

    // ═══ Sales Cloud ═══
    A('sales_cloud_rep_productivity', 'ent', null, 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('sales_cloud_rep_productivity', 'ent', 'Firmographic', 'Sales org size', '1,000+ quota-carrying reps', 'Median 1,400 reps across wins.', '41 of 50', []),
    A('sales_cloud_rep_productivity', 'ent', 'Firmographic', 'Industries', 'Manufacturing, Logistics', 'Field-heavy sales orgs with long-tenured rep populations.', '38 of 50', ['Express Logistics \u00b7 $270K']),
    A('sales_cloud_rep_productivity', 'ent', 'Signal', 'Trigger', 'New CRO within first two quarters', 'Wins started within 6 months of a CRO change.', '36 of 50', []),
    A('sales_cloud_rep_productivity', 'ent', 'Buying behavior', 'Buying committee', 'CRO + IT + procurement', 'Median 6 stakeholders.', '39 of 50', []),
    A('sales_cloud_rep_productivity', 'ent', 'Deal shape', 'Sales cycle', '5 \u2013 7 months', 'Median 5.8 months.', '40 of 50', []),
    A('sales_cloud_rep_productivity', 'ent', 'Deal shape', 'Deal size', '$300K \u2013 $600K ACV', 'Median $450K.', '31 of 50', []),
    A('sales_cloud_rep_productivity', 'mm', null, 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('sales_cloud_rep_productivity', 'mm', 'Firmographic', 'Sales org size', '50 \u2013 200 quota-carrying reps', 'Median 140 reps.', '60 of 70', ['Dickenson plc \u00b7 $390K']),
    A('sales_cloud_rep_productivity', 'mm', 'Firmographic', 'Industries', 'SaaS, Business services', 'Recurring-revenue models with inside-sales motions.', '58 of 70', []),
    A('sales_cloud_rep_productivity', 'mm', 'Buying behavior', 'Champion', 'RevOps-led evaluation', 'RevOps is the working champion.', '61 of 70', []),
    A('sales_cloud_rep_productivity', 'mm', 'Deal shape', 'Sales cycle', '~3 months', 'Median 3.1 months.', '52 of 70', []),
    A('sales_cloud_rep_productivity', 'mm', 'Deal shape', 'Deal size', '$120K \u2013 $250K ACV', 'Median $190K.', '49 of 70', []),
    A('sales_cloud_rep_productivity', 'poor_fit', null, 'Teams under 25 reps', 'Avoid', 'ROI math fails below 25 reps; recent losses cite price.', null, []),
    A('sales_cloud_rep_productivity', 'poor_fit', null, 'Fully outsourced sales model', 'Avoid', 'No internal process to automate.', null, []),

    // ═══ Agentforce ═══
    A('agentforce_sales_automation', 'ent', null, 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('agentforce_sales_automation', 'ent', 'Technographic', 'CRM maturity', 'Mature Sales Cloud org with clean data', 'Stated prerequisite in nearly every win.', '47 of 50', ['Grand Hotels & Resorts \u00b7 $610K']),
    A('agentforce_sales_automation', 'ent', 'Signal', 'Budget', 'Funded AI budget line', 'Never displacement of headcount budget.', '46 of 50', []),
    A('agentforce_sales_automation', 'ent', 'Buying behavior', 'Sponsor', 'C-level exec sponsor', 'Director-led evaluations stalled.', '40 of 50', []),
    A('agentforce_sales_automation', 'ent', 'Deal shape', 'Sales cycle', '3 \u2013 4 months', 'Land one use case, expand after first measurable win.', '38 of 50', []),
    A('agentforce_sales_automation', 'ent', 'Deal shape', 'Deal size', '$150K \u2013 $300K initial ACV', 'Median $220K initial.', '39 of 50', []),
    A('agentforce_sales_automation', 'mm', null, 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('agentforce_sales_automation', 'mm', 'Deal shape', 'Entry point', 'Single use case land', 'Nearly every win landed on one workflow.', '28 of 30', ['Cloud Kicks \u00b7 $480K']),
    A('agentforce_sales_automation', 'mm', 'Buying behavior', 'Sponsor', 'Founder or CRO', 'Smaller orgs move only with top-down sponsorship.', '27 of 30', []),
    A('agentforce_sales_automation', 'mm', 'Deal shape', 'Deal size', '$80K \u2013 $150K initial ACV', 'Median $110K initial.', '21 of 30', []),
    A('agentforce_sales_automation', 'poor_fit', null, 'Messy CRM data', 'Defer', 'Route to the Sales Cloud hygiene motion first.', null, []),
    A('agentforce_sales_automation', 'poor_fit', null, 'No legal framework for AI outreach', 'Defer', 'Deals stall in legal for 90+ days.', null, []),

    // ═══ Service Cloud ═══
    A('service_cloud_contact_center', 'ent', null, 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('service_cloud_contact_center', 'ent', 'Firmographic', 'Contact center size', '300+ seats', 'Median 320 seats across wins.', '70 of 80', ['Grand Hotels & Resorts \u00b7 $610K']),
    A('service_cloud_contact_center', 'ent', 'Firmographic', 'Industries', 'Hospitality, Telecom, Utilities', 'High-volume B2C support operations.', '68 of 80', []),
    A('service_cloud_contact_center', 'ent', 'Signal', 'Mandate', 'Cost-to-serve reduction program', 'A stated cost mandate existed before first call.', '66 of 80', []),
    A('service_cloud_contact_center', 'ent', 'Buying behavior', 'Buying committee', 'VP Support + IT + procurement', 'Procurement involved from week one.', '69 of 80', []),
    A('service_cloud_contact_center', 'ent', 'Deal shape', 'Sales cycle', '5 \u2013 6 months', 'Median 5.2 months.', '61 of 80', []),
    A('service_cloud_contact_center', 'ent', 'Deal shape', 'Deal size', '$300K \u2013 $600K ACV', 'Median $390K.', '58 of 80', []),
    A('service_cloud_contact_center', 'mm', null, 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('service_cloud_contact_center', 'mm', 'Firmographic', 'Contact center size', '100 \u2013 300 seats', 'Nearly every mid-market win in range.', '27 of 30', []),
    A('service_cloud_contact_center', 'mm', 'Technographic', 'Current stack', 'Aging helpdesk displacement', 'Most wins displaced an end-of-life system.', '26 of 30', []),
    A('service_cloud_contact_center', 'mm', 'Deal shape', 'Sales cycle', '3 \u2013 4 months', 'Median 3.6 months.', '25 of 30', []),
    A('service_cloud_contact_center', 'mm', 'Deal shape', 'Deal size', '$150K \u2013 $300K ACV', 'Median $210K.', '20 of 30', []),
    A('service_cloud_contact_center', 'poor_fit', null, 'Under 25 support seats', 'Avoid', 'No recent wins below 25 seats.', null, []),
    A('service_cloud_contact_center', 'poor_fit', null, 'Pure email support', 'Avoid', 'Deflection ROI requires multi-channel volume.', null, []),

    // ═══ MuleSoft ═══
    A('mulesoft_integration_modernization', 'ent', null, 'Definition', 'Enterprise \u2014 2,000+ employees, named-account territories, field sales',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('mulesoft_integration_modernization', 'ent', 'Technographic', 'App portfolio', '100+ applications', 'Median 240 apps across wins.', '61 of 70', ['United Oil & Gas \u00b7 $740K']),
    A('mulesoft_integration_modernization', 'ent', 'Signal', 'M&A activity', 'Acquisition in past 24 months', 'The strongest single predictor in recent wins.', '49 of 70', ['Pyramid Construction \u00b7 $520K']),
    A('mulesoft_integration_modernization', 'ent', 'Technographic', 'Middleware', 'Legacy ESB to retire', 'Most wins displaced an aging ESB.', '59 of 70', []),
    A('mulesoft_integration_modernization', 'ent', 'Buying behavior', 'Buying committee', 'Architect-led; CIO signs', 'Enterprise architect runs the evaluation.', '60 of 70', []),
    A('mulesoft_integration_modernization', 'ent', 'Deal shape', 'Sales cycle', '6 \u2013 8 months', 'Median 6.4 months.', '50 of 70', []),
    A('mulesoft_integration_modernization', 'ent', 'Deal shape', 'Deal size', '$400K \u2013 $900K ACV', 'Median $560K.', '48 of 70', []),
    A('mulesoft_integration_modernization', 'mm', null, 'Definition', 'Mid-market \u2014 200\u20132,000 employees, geo territories, inside + field',
      'Learned from the Account segment picklist and territory model', null, [], true),
    A('mulesoft_integration_modernization', 'poor_fit', null, 'Greenfield or single-vendor stacks', 'Avoid', 'No integration debt, no urgency.', null, []),
  ];

  // ── Segment applicability tags for non-ICP rows ─────────────────────────
  // Absent = applies to all segments. Only rows where the evidence is
  // segment-specific get tagged.
  const SEG_TAGS = {
    sig_new_cdo: 'Enterprise',
    sig_public_ai: 'Enterprise',
    sig_hiring_data_eng: 'Enterprise',
    sig_sales_productivity_initiative: 'Enterprise',
    msg_no_data_no_ai: 'Enterprise',
    msg_agents_guardrails: 'Enterprise',
    pain_pipeline_capacity: 'Mid-market',
    proof_saks: 'Enterprise',
    cs_f1: 'Enterprise',
    cs_gucci: 'Enterprise',
    cs_air_india: 'Enterprise',
    cs_heathrow: 'Enterprise',
    cs_wiley: 'Mid-market',
    comp_point_ai: 'Mid-market',
  };
  D.rows.forEach(r => { if (SEG_TAGS[r.id]) r.segment = SEG_TAGS[r.id]; });
})();

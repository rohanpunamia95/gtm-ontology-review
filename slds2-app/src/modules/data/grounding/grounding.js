// Generated from project/data.js + data2.js + icp-segments.js — do not edit by hand.
// Regenerate with: node scripts (see repo root gen-grounding-data.js)
export const GTM_DATA = {
 "customer": "Salesforce.com",
 "extractedAt": "Mar 12, 2026, 9:42 AM",
 "motions": [
  {
   "id": "data_360_ai_readiness",
   "name": "Data 360 — AI Readiness",
   "short": "AI Readiness",
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "status": "Needs Review",
   "progress": 71
  },
  {
   "id": "sales_cloud_rep_productivity",
   "name": "Sales Cloud — Rep Productivity",
   "short": "Rep Productivity",
   "products": [
    "Sales Cloud",
    "Agentforce Sales"
   ],
   "status": "Needs Review",
   "progress": 62
  },
  {
   "id": "agentforce_sales_automation",
   "name": "Agentforce — Sales Agent Automation",
   "short": "Sales Agent Automation",
   "products": [
    "Agentforce",
    "Sales Cloud"
   ],
   "status": "Suggested",
   "progress": 49
  },
  {
   "id": "service_cloud_contact_center",
   "name": "Service Cloud — Contact Center Modernization",
   "short": "Contact Center Modernization",
   "products": [
    "Service Cloud",
    "Agentforce Service"
   ],
   "status": "Suggested",
   "progress": 54
  },
  {
   "id": "mulesoft_integration_modernization",
   "name": "MuleSoft — Integration Modernization",
   "short": "Integration Modernization",
   "products": [
    "MuleSoft",
    "Data 360"
   ],
   "status": "Needs Review",
   "progress": 58
  }
 ],
 "rows": [
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Data 360 product page",
     "snippet": "Unify customer data and activate trusted profiles across every interaction.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/data-360"
    },
    {
     "type": "Call recording",
     "label": "Discovery — Northern Trail (CDO)",
     "snippet": "\"My mandate this year is getting our data AI-ready — right now it’s scattered across nine systems.\"",
     "when": "Feb 28, 2026",
     "ref": "Gong · 42 min"
    },
    {
     "type": "CRM note",
     "label": "Acct: Cloud Kicks — exec briefing",
     "snippet": "New CDO prioritizing a single source of truth for customer data ahead of GenAI rollout.",
     "when": "Mar 04, 2026",
     "ref": "Account activity"
    }
   ],
   "id": "p_data_leader",
   "category": "Buyer Persona",
   "value": "Data Leader",
   "description": "Owns data platforms, governance, customer profiles, and AI readiness across the enterprise.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CDO · VP Data · Head of Data Platform",
   "titles": "Chief Data Officer · VP Data · Head of Data Platform · Director, Data Engineering",
   "responsibilities": "Data architecture, governance, customer 360 strategy, AI/ML enablement, data quality.",
   "fit": "Enterprise (5k+ employees), multiple data silos, active AI or personalization initiative.",
   "disqualifiers": "Single-system shops, no analytics function, sub-200 employees.",
   "relatedPersona": "CIO / IT Executive · AI Transformation Leader",
   "recommendedAgentUse": "Target data and IT leaders at enterprise accounts showing AI readiness or customer-data modernization signals.",
   "buyingRole": "Economic buyer",
   "reportsTo": "CIO or CEO",
   "callMentions": 214,
   "caresAbout": [
    "AI readiness of enterprise data",
    "Governance, lineage, and access control",
    "Consolidating duplicate data tooling",
    "Proving business value of the data platform"
   ],
   "kpis": [
    "Data quality score",
    "Time-to-data for new use cases",
    "Platform cost per workload",
    "% of AI projects unblocked by data"
   ],
   "objections": [
    "“We already have a lakehouse — why another platform?”",
    "“Zero-copy sounds like lock-in by another name.”",
    "Governance of activated data outside the warehouse"
   ],
   "quote": "“My mandate this year is getting our data AI-ready — right now it’s scattered across nine systems.”",
   "quoteSource": "Discovery call — Northern Trail Outfitters, Feb 2026"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "AI readiness solution page",
     "snippet": "Ground AI in trusted, governed enterprise data.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/solutions/ai-readiness"
    },
    {
     "type": "Email",
     "label": "Inbound — Acme CIO",
     "snippet": "\"We need to rationalize the stack before we scale AI. Who owns the data layer story?\"",
     "when": "Mar 06, 2026",
     "ref": "inbound@"
    }
   ],
   "id": "p_cio",
   "category": "Buyer Persona",
   "value": "CIO / IT Executive",
   "description": "Accountable for platform consolidation, security, and the technology roadmap that enables AI.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CIO · CTO · VP IT",
   "titles": "CIO · CTO · SVP Technology · VP Enterprise Architecture",
   "responsibilities": "Platform strategy, vendor consolidation, security & compliance, cost governance.",
   "fit": "Sprawling app portfolio, board-level AI pressure, active consolidation program.",
   "disqualifiers": "No central IT, fully outsourced technology.",
   "recommendedAgentUse": "Engage on consolidation ROI and trusted-AI foundations; pair with Data Leader persona.",
   "buyingRole": "Economic buyer",
   "reportsTo": "CEO",
   "callMentions": 167,
   "caresAbout": [
    "Vendor consolidation and run-rate cost",
    "Security and compliance posture",
    "Board-level AI pressure",
    "Platform simplification"
   ],
   "kpis": [
    "Run-rate IT cost",
    "Audit findings",
    "Time-to-deliver on business requests"
   ],
   "objections": [
    "“How does this reduce my vendor count rather than add to it?”",
    "Security review timelines",
    "Fit with existing identity and governance stack"
   ],
   "quote": "“We need to rationalize the stack before we scale AI.”",
   "quoteSource": "Inbound email — Acme Corp CIO, Mar 2026"
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Needs Admin Review",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Marketing personalization page",
     "snippet": "Activate trusted profiles for real-time personalization.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/solutions/personalization"
    }
   ],
   "id": "p_marketing_ops",
   "category": "Buyer Persona",
   "value": "Marketing Operations Leader",
   "description": "Activates unified customer profiles for segmentation, personalization, and journeys.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "VP Marketing Ops · Head of CRM · Lifecycle Lead",
   "titles": "VP Marketing Operations · Director Lifecycle · Head of Martech",
   "responsibilities": "Audience activation, journey orchestration, martech stack, attribution.",
   "fit": "B2C / B2B2C, large addressable base, personalization mandate.",
   "disqualifiers": "No marketing automation, low data volume.",
   "recommendedAgentUse": "Use when personalization or audience-activation signals appear; secondary to Data Leader.",
   "buyingRole": "Champion",
   "reportsTo": "CMO",
   "callMentions": 96,
   "caresAbout": [
    "Audience activation speed",
    "Identity resolution accuracy",
    "Attribution across channels"
   ],
   "kpis": [
    "Segment build time",
    "Identity match rate",
    "Campaign conversion lift"
   ],
   "objections": [
    "“Our CDP already does this.”",
    "Implementation lift on a thin team"
   ],
   "quote": "“It takes us three weeks to build a segment that should take an afternoon.”",
   "quoteSource": "Discovery call — retail prospect, Jan 2026"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Call recording",
     "label": "Roadmap review — Pyramid Construction",
     "snippet": "\"The board wants AI wins this year but legal won’t sign off until the data is governed.\"",
     "when": "Mar 09, 2026",
     "ref": "Gong · 38 min"
    },
    {
     "type": "Website",
     "label": "Einstein Trust Layer overview",
     "snippet": "Trusted AI grounded in your customer data with built-in guardrails.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/trust-layer"
    }
   ],
   "id": "p_ai_transformation",
   "category": "Buyer Persona",
   "value": "AI Transformation Leader",
   "description": "Drives enterprise AI strategy and is accountable for governed, trustworthy AI outcomes.",
   "motionIds": [
    "data_360_ai_readiness",
    "agentforce_sales_automation"
   ],
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "personaSegment": "Head of AI · VP Digital · Chief AI Officer",
   "titles": "Chief AI Officer · VP AI/ML · Head of Digital Transformation",
   "responsibilities": "AI roadmap, model governance, trust & safety, value realization.",
   "fit": "Funded AI program, board reporting on AI, existing data platform investment.",
   "disqualifiers": "AI in exploration only, no executive sponsor.",
   "recommendedAgentUse": "Lead with trusted-data-for-AI narrative; bridge to Agentforce motion.",
   "buyingRole": "Sponsor / influencer",
   "reportsTo": "CEO or CIO",
   "callMentions": 142,
   "caresAbout": [
    "Shipping AI wins the board can see",
    "Model governance and legal sign-off",
    "Grounding AI in trusted data"
   ],
   "kpis": [
    "AI pilots reaching production",
    "Time-to-approval for AI use cases"
   ],
   "objections": [
    "“Why can’t we just fine-tune on our warehouse data?”",
    "Hallucination and compliance risk"
   ],
   "quote": "“The board wants AI wins this year but legal won’t sign off until the data is governed.”",
   "quoteSource": "Roadmap review — Pyramid Construction, Mar 2026"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Customer data solution",
     "snippet": "Bring together fragmented customer data into a trusted profile for AI and personalization.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/solutions/customer-data"
    },
    {
     "type": "Call recording",
     "label": "Discovery — Cloud Kicks",
     "snippet": "\"Every team has its own version of the customer. Marketing and service don’t even match.\"",
     "when": "Feb 24, 2026",
     "ref": "Gong · 51 min"
    },
    {
     "type": "Email",
     "label": "Follow-up — Northern Trail",
     "snippet": "\"Confirmed: 9 source systems, no golden record. This is our #1 blocker for AI.\"",
     "when": "Mar 02, 2026",
     "ref": "thread"
    }
   ],
   "id": "pain_fragmented_data",
   "category": "Pain Point",
   "value": "Fragmented customer data",
   "description": "Customer data lives across disconnected apps, warehouses, and channels, blocking personalization and AI.",
   "motionIds": [
    "data_360_ai_readiness",
    "agentforce_sales_automation"
   ],
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "personaSegment": "CDO · CIO · Marketing Ops",
   "whyMatters": "Without a unified profile, AI is ungrounded and personalization breaks across channels.",
   "capability": "Zero-copy data unification and a real-time customer 360 profile.",
   "valueProp": "One trusted profile that powers every team, app, and AI agent.",
   "outcome": "Faster AI deployment, higher personalization lift, less duplicate tooling.",
   "relatedPersona": "Data Leader",
   "recommendedAgentUse": "Core wedge for Data 360 + Agentforce when an account shows AI or personalization signals."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Data activation page",
     "snippet": "Activate unified data in real time across journeys and agents.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/data-360/activation"
    }
   ],
   "id": "pain_poor_activation",
   "category": "Pain Point",
   "value": "Poor data activation",
   "description": "Data is collected but rarely activated in real time where customer interactions happen.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "Marketing Ops · Data Leader",
   "whyMatters": "Insights stuck in a warehouse never reach the moment of action.",
   "capability": "Real-time activation into Flow, journeys, and agent actions.",
   "valueProp": "Turn data into action at the point of interaction.",
   "outcome": "Higher conversion and faster response on high-intent signals.",
   "relatedPersona": "Marketing Operations Leader",
   "recommendedAgentUse": "Pair with personalization or campaign-performance pains."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Needs Admin Review",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Call recording",
     "label": "Security review — Pyramid",
     "snippet": "\"Legal blocked the last pilot — no lineage, no guardrails. We can’t ship that.\"",
     "when": "Mar 09, 2026",
     "ref": "Gong · 27 min"
    },
    {
     "type": "Website",
     "label": "Trusted AI page",
     "snippet": "Ground every AI interaction in trusted, permissioned customer data.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/trusted-ai"
    }
   ],
   "id": "pain_ungrounded_ai",
   "category": "Pain Point",
   "value": "Difficulty grounding AI in trusted data",
   "description": "AI initiatives stall because models lack governed, trustworthy customer context.",
   "motionIds": [
    "data_360_ai_readiness",
    "agentforce_sales_automation"
   ],
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "personaSegment": "AI Transformation Leader · CDO",
   "whyMatters": "Ungrounded AI produces hallucinations and fails compliance review.",
   "capability": "Trust Layer + grounding on the unified customer profile.",
   "valueProp": "Deploy AI your legal and security teams will actually approve.",
   "outcome": "Shorter path from AI pilot to production.",
   "relatedPersona": "AI Transformation Leader",
   "recommendedAgentUse": "Lead messaging when AI-governance or trust concerns surface."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Data 360 for AI",
     "snippet": "Ground AI in trusted customer data across Salesforce.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/data-360-ai"
    }
   ],
   "id": "value_trusted_profiles",
   "category": "Value Proposition",
   "value": "Trusted customer profiles for AI",
   "description": "Unify and govern customer data so AI agents and teams act on trusted context.",
   "motionIds": [
    "data_360_ai_readiness",
    "agentforce_sales_automation"
   ],
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "personaSegment": "CDO · CIO · AI Transformation Leader",
   "whyMatters": "A trusted profile is the prerequisite for safe, useful AI.",
   "capability": "Customer 360 + Trust Layer grounding.",
   "valueProp": "Ground AI in trusted customer data across Salesforce.",
   "outcome": "AI that is accurate, compliant, and adopted.",
   "relatedPersona": "Data Leader",
   "recommendedAgentUse": "Primary value prop for AI-readiness signals."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Zero-copy page",
     "snippet": "Connect to data where it lives with zero-copy access.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/zero-copy"
    }
   ],
   "id": "value_zero_copy",
   "category": "Value Proposition",
   "value": "Zero-copy data access",
   "description": "Access data where it lives — no costly duplication or brittle pipelines.",
   "motionIds": [
    "data_360_ai_readiness",
    "mulesoft_integration_modernization"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CIO · Enterprise Architect",
   "whyMatters": "Duplication drives cost, latency, and governance risk.",
   "capability": "Zero-copy integration with major warehouses and lakes.",
   "valueProp": "Unify without moving your data.",
   "outcome": "Lower storage cost, faster time-to-value.",
   "relatedPersona": "Enterprise Architect",
   "recommendedAgentUse": "Use when cost or data-movement objections arise."
  },
  {
   "ttlDays": 90,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Needs Admin Review",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Thought-leadership blog",
     "snippet": "Data leaders are under pressure to prepare enterprise data for AI adoption.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/blog/data-leaders-ai-readiness"
    },
    {
     "type": "CRM note",
     "label": "Signal — LinkedIn change",
     "snippet": "Detected new CDO appointment at target account; tagged for outreach.",
     "when": "Mar 10, 2026",
     "ref": "Signal log"
    }
   ],
   "id": "sig_new_cdo",
   "category": "Signal Playbook",
   "value": "New CDO hired",
   "description": "A new data leader usually has a mandate to modernize architecture and prove AI readiness.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CDO · VP Data",
   "signalCategory": "Leadership change",
   "painHyp": "Fragmented customer data",
   "angle": "AI readiness requires trusted data",
   "recommendedAgentUse": "Wake the agent when a target account hires a senior data leader; draft outreach around trusted data for AI.",
   "segment": "Enterprise"
  },
  {
   "ttlDays": 120,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Email",
     "label": "AE forward — press release",
     "snippet": "\"They announced a $40M AI program on the earnings call — perfect timing.\"",
     "when": "Mar 05, 2026",
     "ref": "thread"
    }
   ],
   "id": "sig_public_ai",
   "category": "Signal Playbook",
   "value": "Public AI initiative announced",
   "description": "Public commitment to AI creates urgency and budget for a trusted data foundation.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "personaSegment": "AI Transformation Leader · CIO",
   "signalCategory": "Strategic announcement",
   "painHyp": "Difficulty grounding AI in trusted data",
   "angle": "AI readiness requires trusted data",
   "recommendedAgentUse": "Reference the public initiative; offer a trusted-data readiness assessment.",
   "segment": "Enterprise"
  },
  {
   "ttlDays": 60,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Low",
   "status": "Needs Admin Review",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "CRM note",
     "label": "Signal — job postings",
     "snippet": "12 open data-engineering roles detected; weak signal, needs corroboration.",
     "when": "Mar 08, 2026",
     "ref": "Signal log"
    }
   ],
   "id": "sig_hiring_data_eng",
   "category": "Signal Playbook",
   "value": "Hiring data engineers at scale",
   "description": "A surge in data-engineering hiring signals platform investment and integration pain.",
   "motionIds": [
    "data_360_ai_readiness",
    "mulesoft_integration_modernization"
   ],
   "products": [
    "Data 360",
    "MuleSoft"
   ],
   "personaSegment": "VP Data · Enterprise Architect",
   "signalCategory": "Hiring trend",
   "painHyp": "Poor data activation",
   "angle": "Spend engineering effort on outcomes, not plumbing",
   "recommendedAgentUse": "Low-confidence — confirm with a second signal before outreach.",
   "segment": "Enterprise"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Call recording",
     "label": "Win review — Cloud Kicks",
     "snippet": "\"The trusted-data framing is what unlocked the exec conversation for us.\"",
     "when": "Feb 20, 2026",
     "ref": "Gong · 33 min"
    }
   ],
   "id": "msg_ai_trusted_data",
   "category": "Messaging Angle",
   "value": "AI readiness requires trusted data",
   "description": "Frame trusted, unified data as the prerequisite for any successful AI program.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "personaSegment": "CDO · CIO · AI Leader",
   "useWhen": "Account shows AI, personalization, or data-modernization signals.",
   "hook": "\"Most AI programs stall on data, not models. What does trusted data look like for your team?\"",
   "avoid": "Avoid implying AI replaces governance or that data work is one-and-done.",
   "recommendedAgentUse": "Approved opening angle for AI-readiness conversations."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "AI readiness guide",
     "snippet": "A trusted data foundation is the first step to enterprise AI.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/guides/ai-readiness"
    }
   ],
   "id": "msg_no_data_no_ai",
   "category": "Messaging Angle",
   "value": "No data strategy, no AI strategy",
   "description": "Position data unification as the foundation rather than a parallel workstream.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "AI Transformation Leader",
   "useWhen": "Prospect treats AI and data as separate initiatives.",
   "hook": "\"Your AI roadmap is only as good as the data underneath it.\"",
   "avoid": "Don’t disparage the customer’s existing investments.",
   "recommendedAgentUse": "Secondary angle when AI strategy is ahead of data strategy.",
   "segment": "Enterprise"
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Needs Admin Review",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Saks customer story",
     "snippet": "Saks uses unified customer data and AI to personalize luxury shopping experiences.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/saks"
    }
   ],
   "id": "proof_saks",
   "category": "Case Study",
   "value": "Saks personalization story",
   "description": "Retail case study showing personalization powered by unified customer data and AI.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "personaSegment": "Retail CMO · CIO · CX Leader",
   "proofType": "Case Study",
   "useCase": "Retail personalization, unified customer data",
   "recommendedAgentUse": "Use as proof for retail personalization and unified-data messaging.",
   "segment": "Enterprise"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Locked",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Trust Layer page",
     "snippet": "Built-in guardrails: data masking, zero retention, toxicity filtering, audit trail.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/trust-layer"
    }
   ],
   "id": "proof_trust_layer",
   "category": "Compliance / Security",
   "value": "Einstein Trust Layer",
   "description": "Trusted-AI guardrail providing grounding, masking, and zero-retention controls.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce",
    "Data 360"
   ],
   "personaSegment": "CISO · AI Transformation Leader",
   "proofType": "Compliance / Security",
   "useCase": "Address AI trust, privacy, and governance objections",
   "recommendedAgentUse": "Cite when security or governance concerns arise; do not overstate scope."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Sales Cloud page",
     "snippet": "Help sellers sell faster with AI, automation, and connected customer data.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/sales-cloud"
    },
    {
     "type": "Call recording",
     "label": "Discovery — Dickenson plc (VP Sales)",
     "snippet": "\"Reps spend Friday afternoons updating Salesforce instead of selling. It’s killing us.\"",
     "when": "Mar 01, 2026",
     "ref": "Gong · 44 min"
    }
   ],
   "id": "p_sales_leader",
   "category": "Buyer Persona",
   "value": "Sales Leader",
   "description": "Owns pipeline generation, seller productivity, forecasting, and revenue execution.",
   "motionIds": [
    "sales_cloud_rep_productivity",
    "agentforce_sales_automation"
   ],
   "products": [
    "Sales Cloud",
    "Agentforce Sales"
   ],
   "personaSegment": "CRO · VP Sales · Sales Operations",
   "titles": "CRO · VP Sales · RVP · Head of Revenue Operations",
   "responsibilities": "Pipeline coverage, forecast accuracy, rep ramp, productivity, quota attainment.",
   "fit": "Large quota-carrying team, CRM hygiene problems, ramp/attainment pressure.",
   "disqualifiers": "Tiny sales team, no CRM, transactional self-serve only.",
   "recommendedAgentUse": "Target sales executives and ops leaders for productivity messaging.",
   "buyingRole": "Economic buyer",
   "reportsTo": "CEO",
   "callMentions": 233,
   "caresAbout": [
    "Forecast accuracy",
    "Selling time per rep",
    "Pipeline coverage",
    "New-rep ramp"
   ],
   "kpis": [
    "Quota attainment",
    "Forecast variance",
    "Selling hours per rep per week"
   ],
   "objections": [
    "“My reps won’t adopt another tool.”",
    "“We tried automation once; data quality got worse.”"
   ],
   "quote": "“Reps spend Friday afternoons updating Salesforce instead of selling.”",
   "quoteSource": "Discovery call — Dickenson plc, Mar 2026"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Email",
     "label": "Inbound — Dickenson RevOps",
     "snippet": "\"We have 14 tools bolted onto Salesforce. I want to consolidate and automate the busywork.\"",
     "when": "Mar 03, 2026",
     "ref": "inbound@"
    }
   ],
   "id": "p_revops",
   "category": "Buyer Persona",
   "value": "RevOps Leader",
   "description": "Designs the selling system: process, tooling, data hygiene, and automation.",
   "motionIds": [
    "sales_cloud_rep_productivity"
   ],
   "products": [
    "Sales Cloud"
   ],
   "personaSegment": "VP RevOps · Sales Ops Director",
   "titles": "VP Revenue Operations · Director Sales Ops · Salesforce Admin Lead",
   "responsibilities": "CRM configuration, automation, data quality, enablement tooling, reporting.",
   "fit": "Dedicated ops function, complex sales process, multiple point tools.",
   "disqualifiers": "No ops owner, fully manual process.",
   "recommendedAgentUse": "Engage as the technical champion for automation and data hygiene.",
   "buyingRole": "Technical evaluator / champion",
   "reportsTo": "CRO",
   "callMentions": 118,
   "caresAbout": [
    "Tool consolidation",
    "CRM data hygiene",
    "Automating low-value process work"
   ],
   "kpis": [
    "CRM field completeness",
    "Tool spend",
    "Cycle time per stage"
   ],
   "objections": [
    "Migration effort from the current stack",
    "Admin team capacity"
   ],
   "quote": "“We have 14 tools bolted onto Salesforce. I want to consolidate and automate the busywork.”",
   "quoteSource": "Inbound email — Dickenson plc RevOps, Mar 2026"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Sales automation page",
     "snippet": "Automate seller workflows and keep reps focused on selling.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/sales-cloud/automation"
    },
    {
     "type": "Call recording",
     "label": "Discovery — Dickenson plc",
     "snippet": "\"My AEs say CRM updates eat 6+ hours a week. I believe them.\"",
     "when": "Mar 01, 2026",
     "ref": "Gong · 44 min"
    },
    {
     "type": "CRM note",
     "label": "QBR — Express Logistics",
     "snippet": "Forecast misses traced to stale opportunity data; reps not updating in time.",
     "when": "Feb 26, 2026",
     "ref": "Account activity"
    }
   ],
   "id": "pain_manual_admin",
   "category": "Pain Point",
   "value": "Manual sales administration",
   "description": "Reps spend too much time updating CRM, prepping follow-ups, and juggling systems.",
   "motionIds": [
    "sales_cloud_rep_productivity",
    "agentforce_sales_automation"
   ],
   "products": [
    "Sales Cloud",
    "Agentforce Sales"
   ],
   "personaSegment": "Sales Leader · RevOps · AE",
   "whyMatters": "Every hour on admin is an hour not selling; data quality also suffers.",
   "capability": "AI-drafted updates, auto-logged activity, next-best-action.",
   "valueProp": "Keep reps focused on selling, not data entry.",
   "outcome": "More selling time, cleaner pipeline, better forecasts.",
   "relatedPersona": "Sales Leader",
   "recommendedAgentUse": "Core wedge for rep-productivity conversations."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Sales enablement page",
     "snippet": "Guide reps with in-context coaching and AI-generated summaries.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/enablement"
    }
   ],
   "id": "pain_slow_ramp",
   "category": "Pain Point",
   "value": "Slow new-rep ramp",
   "description": "New reps take too long to reach quota because playbooks and context live in people’s heads.",
   "motionIds": [
    "sales_cloud_rep_productivity"
   ],
   "products": [
    "Sales Cloud",
    "Agentforce Sales"
   ],
   "personaSegment": "Sales Leader · Enablement",
   "whyMatters": "Long ramp delays revenue and raises cost-of-sale.",
   "capability": "Guided selling, in-context coaching, AI call summaries.",
   "valueProp": "Ramp reps in weeks, not quarters.",
   "outcome": "Faster time-to-first-deal, more consistent execution.",
   "relatedPersona": "Sales Leader",
   "recommendedAgentUse": "Use when account mentions hiring or ramp pressure."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Needs Admin Review",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Call recording",
     "label": "EBR — Express Logistics (CRO)",
     "snippet": "\"I can’t walk into the board with a forecast I don’t believe.\"",
     "when": "Feb 18, 2026",
     "ref": "Gong · 29 min"
    }
   ],
   "id": "pain_forecast_accuracy",
   "category": "Pain Point",
   "value": "Poor forecast accuracy",
   "description": "Leaders can’t trust the forecast because pipeline data is stale and inconsistent.",
   "motionIds": [
    "sales_cloud_rep_productivity"
   ],
   "products": [
    "Sales Cloud"
   ],
   "personaSegment": "CRO · RevOps",
   "whyMatters": "Bad forecasts erode board trust and lead to misallocated resources.",
   "capability": "AI forecasting grounded in real activity data.",
   "valueProp": "A forecast leadership can actually trust.",
   "outcome": "Tighter forecast variance, fewer surprises.",
   "relatedPersona": "Sales Leader",
   "recommendedAgentUse": "Pair with manual-admin pain; forecast pain is a symptom of bad data."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Agentforce Sales page",
     "snippet": "AI agents handle repetitive work and surface next best actions.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/agentforce-sales"
    }
   ],
   "id": "msg_less_admin",
   "category": "Messaging Angle",
   "value": "Less admin, more selling",
   "description": "Position AI/automation as removing operating work around the seller, not replacing the seller.",
   "motionIds": [
    "sales_cloud_rep_productivity",
    "agentforce_sales_automation"
   ],
   "products": [
    "Sales Cloud",
    "Agentforce Sales"
   ],
   "personaSegment": "CRO · VP Sales · RevOps",
   "useWhen": "Productivity, CRM-hygiene, or attainment concerns surface.",
   "hook": "\"What if your reps got 5 hours back a week — and the CRM stayed current automatically?\"",
   "avoid": "Avoid implying the agent replaces reps or owns the customer relationship.",
   "recommendedAgentUse": "Approved opening angle for productivity campaigns."
  },
  {
   "ttlDays": 90,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Email",
     "label": "AE note — earnings call",
     "snippet": "\"CFO called out a sales-efficiency push for the year. Good wedge.\"",
     "when": "Mar 04, 2026",
     "ref": "thread"
    }
   ],
   "id": "sig_sales_productivity_initiative",
   "category": "Signal Playbook",
   "value": "New sales-productivity initiative",
   "description": "A publicly stated productivity or efficiency program signals budget and urgency.",
   "motionIds": [
    "sales_cloud_rep_productivity"
   ],
   "products": [
    "Sales Cloud",
    "Agentforce Sales"
   ],
   "personaSegment": "CRO · RevOps",
   "signalCategory": "Strategic announcement",
   "painHyp": "Manual sales administration",
   "angle": "Less admin, more selling",
   "recommendedAgentUse": "Wake agent on efficiency/productivity initiatives; lead with time-back narrative.",
   "segment": "Enterprise"
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Customer story",
     "snippet": "Express Logistics gave reps hours back each week with automated CRM updates.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/express-logistics"
    }
   ],
   "id": "proof_ntl_sales",
   "category": "Case Study",
   "value": "Express Logistics productivity story",
   "description": "Sample B2B case study showing seller time-savings from automation.",
   "motionIds": [
    "sales_cloud_rep_productivity"
   ],
   "products": [
    "Sales Cloud",
    "Agentforce Sales"
   ],
   "personaSegment": "CRO · RevOps",
   "proofType": "Case Study",
   "useCase": "Seller time-savings, CRM hygiene",
   "recommendedAgentUse": "Proof for productivity and automation messaging."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Call recording",
     "label": "Exec briefing — Grand Hotels (CRO)",
     "snippet": "\"Can an agent actually book meetings and prep my reps, not just summarize calls?\"",
     "when": "Mar 07, 2026",
     "ref": "Gong · 36 min"
    }
   ],
   "id": "p_sales_leader_af",
   "category": "Buyer Persona",
   "value": "Sales Leader (AI-forward)",
   "description": "Revenue leader actively exploring AI agents to scale selling capacity.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce",
    "Sales Cloud"
   ],
   "personaSegment": "CRO · VP Sales · Chief Revenue Officer",
   "titles": "CRO · VP Sales · Head of Sales Innovation",
   "responsibilities": "Revenue capacity, AI adoption in sales, pipeline scale.",
   "fit": "Existing Salesforce footprint, AI mandate, capacity constraints.",
   "disqualifiers": "No CRM data foundation, AI-averse culture.",
   "recommendedAgentUse": "Engage AI-curious revenue leaders; require a data-foundation check first.",
   "buyingRole": "Economic buyer",
   "reportsTo": "CEO",
   "callMentions": 87,
   "caresAbout": [
    "Scaling capacity without headcount",
    "Guardrails and auditability",
    "Speed-to-lead on inbound"
   ],
   "kpis": [
    "Speed-to-lead",
    "Meetings booked per rep",
    "Cost per qualified opportunity"
   ],
   "objections": [
    "“Will it embarrass us in front of customers?”",
    "Brand and voice control",
    "Legal review of automated outreach"
   ],
   "quote": "“Can an agent actually book meetings and prep my reps, not just summarize calls?”",
   "quoteSource": "Exec briefing — Grand Hotels & Resorts, Mar 2026"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Agentforce SDR page",
     "snippet": "Agentforce SDR engages and qualifies inbound around the clock.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/agentforce-sdr"
    }
   ],
   "id": "pain_pipeline_capacity",
   "category": "Pain Point",
   "value": "Limited pipeline-generation capacity",
   "description": "Teams can’t scale top-of-funnel work without adding headcount.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce",
    "Sales Cloud"
   ],
   "personaSegment": "CRO · Sales Dev Leader",
   "whyMatters": "Pipeline coverage gaps directly threaten attainment.",
   "capability": "Autonomous prospecting and follow-up agents within guardrails.",
   "valueProp": "Scale pipeline work without scaling headcount.",
   "outcome": "More qualified pipeline per rep.",
   "relatedPersona": "Sales Leader (AI-forward)",
   "recommendedAgentUse": "Use when capacity or coverage gaps are stated.",
   "segment": "Mid-market"
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Agentforce overview",
     "snippet": "Deploy AI agents that work within your guardrails and approvals.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/agentforce"
    }
   ],
   "id": "value_agent_capacity",
   "category": "Value Proposition",
   "value": "Always-on selling capacity",
   "description": "AI agents extend the team’s capacity for follow-up, research, and qualification.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce"
   ],
   "personaSegment": "CRO · RevOps",
   "whyMatters": "Capacity is the constraint on growth for most teams.",
   "capability": "Configurable agents with human-in-the-loop approval.",
   "valueProp": "Add selling capacity without adding risk.",
   "outcome": "Faster follow-up, higher conversion on inbound.",
   "relatedPersona": "Sales Leader (AI-forward)",
   "recommendedAgentUse": "Lead value prop for capacity-constrained teams."
  },
  {
   "ttlDays": 75,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Needs Admin Review",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "CRM note",
     "label": "Signal — competitor pilot",
     "snippet": "Account piloting a point AI SDR tool; opening to reposition on trust + data.",
     "when": "Mar 09, 2026",
     "ref": "Signal log"
    }
   ],
   "id": "sig_ai_pilot",
   "category": "Signal Playbook",
   "value": "Stated AI agent pilot",
   "description": "Account publicly piloting AI agents is in-market for governed, CRM-grounded automation.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce"
   ],
   "personaSegment": "CRO · AI Leader",
   "signalCategory": "Strategic announcement",
   "painHyp": "Limited pipeline-generation capacity",
   "angle": "Agents that act inside your guardrails",
   "recommendedAgentUse": "Differentiate on trust + CRM grounding vs. point AI tools."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Agentforce trust page",
     "snippet": "Agents operate within customer-defined permissions and human approval workflows.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/trust/agentforce-guidelines"
    }
   ],
   "id": "msg_agents_guardrails",
   "category": "Messaging Angle",
   "value": "Agents that act inside your guardrails",
   "description": "Emphasize permissioned, auditable agent actions with human approval.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce"
   ],
   "personaSegment": "CRO · CISO · AI Leader",
   "useWhen": "Trust, control, or autonomy concerns surface.",
   "hook": "\"Your agent only does what you permit — with a full audit trail. Want to see the guardrails?\"",
   "avoid": "Never imply the agent acts autonomously without oversight.",
   "recommendedAgentUse": "Lead angle when trust is the objection.",
   "segment": "Enterprise"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Locked",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Website",
     "label": "Agentforce guidelines",
     "snippet": "AI agents operate within customer-defined permissions and human approval workflows.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/trust/agentforce-guidelines"
    },
    {
     "type": "Email",
     "label": "Legal — messaging review",
     "snippet": "\"Approved language must say ‘assists reps,’ never ‘replaces reps.’ Lock this.\"",
     "when": "Mar 06, 2026",
     "ref": "legal review"
    }
   ],
   "id": "guardrail_no_replace",
   "category": "Messaging Guardrail",
   "value": "Do not claim the agent fully replaces reps",
   "description": "Messaging should say the agent assists, drafts, recommends, and tees up actions — not that it negotiates, prices, or owns the relationship autonomously.",
   "motionIds": [
    "agentforce_sales_automation",
    "sales_cloud_rep_productivity"
   ],
   "products": [
    "Agentforce",
    "Sales Cloud"
   ],
   "personaSegment": "All customer-facing messaging",
   "proofType": "Messaging Guardrail",
   "useCase": "Prevent overpromising agent autonomy",
   "recommendedAgentUse": "Locked guardrail — agent must never imply full rep replacement."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Locked",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Website",
     "label": "Trust guidelines",
     "snippet": "High-stakes decisions require human review and approval.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/trust/agentforce-guidelines"
    }
   ],
   "id": "guardrail_no_pricing",
   "category": "Messaging Guardrail",
   "value": "Do not claim autonomous pricing or legal decisions",
   "description": "The agent must not be described as making pricing, contractual, or legal decisions on its own.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce"
   ],
   "personaSegment": "All customer-facing messaging",
   "proofType": "Messaging Guardrail",
   "useCase": "Avoid regulated-decision claims",
   "recommendedAgentUse": "Locked — never imply autonomous pricing or legal authority."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Needs Admin Review",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Call recording",
     "label": "Competitive — Grand Hotels",
     "snippet": "\"We tried a bolt-on AI SDR; it hallucinated and our data was a mess afterward.\"",
     "when": "Mar 07, 2026",
     "ref": "Gong · 36 min"
    }
   ],
   "id": "comp_point_ai",
   "category": "Competitor / Alternative",
   "value": "Point AI SDR tools",
   "description": "Standalone AI prospecting tools that lack CRM grounding and enterprise guardrails.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce"
   ],
   "personaSegment": "CRO · RevOps",
   "proofType": "Competitor / Alternative",
   "useCase": "Differentiate on trust + native CRM data",
   "recommendedAgentUse": "Internal positioning — differentiate, do not disparage by name.",
   "segment": "Mid-market"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Service Cloud page",
     "snippet": "Improve service productivity and resolve issues faster with AI-assisted workflows.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/service-cloud"
    },
    {
     "type": "Call recording",
     "label": "Discovery — Grand Hotels (VP CX)",
     "snippet": "\"Handle time is up, CSAT is down, and we can’t hire our way out of it.\"",
     "when": "Mar 02, 2026",
     "ref": "Gong · 41 min"
    }
   ],
   "id": "p_service_leader",
   "category": "Buyer Persona",
   "value": "Service Leader",
   "description": "Owns service operations, contact-center performance, case resolution, and CX.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud",
    "Agentforce Service"
   ],
   "personaSegment": "VP Support · VP CX · Contact Center Leader",
   "titles": "VP Customer Support · VP Customer Experience · Director Contact Center",
   "responsibilities": "CSAT, resolution time, deflection, agent productivity, cost-to-serve.",
   "fit": "High-volume contact center, cost pressure, CX mandate.",
   "disqualifiers": "No support org, fully self-serve product.",
   "recommendedAgentUse": "Target for support transformation and contact-center modernization.",
   "buyingRole": "Economic buyer",
   "reportsTo": "COO",
   "callMentions": 154,
   "caresAbout": [
    "Cost-to-serve",
    "CSAT and NPS",
    "Deflection without hurting CX",
    "Agent attrition"
   ],
   "kpis": [
    "Average handle time",
    "First-contact resolution",
    "Deflection rate",
    "CSAT"
   ],
   "objections": [
    "“Our customers hate bots.”",
    "“Our knowledge base is too messy for AI.”"
   ],
   "quote": "“Handle time is up, CSAT is down, and we can’t hire our way out of it.”",
   "quoteSource": "Discovery call — Grand Hotels & Resorts, Mar 2026"
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Email",
     "label": "Inbound — Grand Hotels ops",
     "snippet": "\"Our agents can’t find answers fast enough. Knowledge is scattered everywhere.\"",
     "when": "Mar 04, 2026",
     "ref": "inbound@"
    }
   ],
   "id": "p_cc_ops",
   "category": "Buyer Persona",
   "value": "Contact Center Ops Manager",
   "description": "Runs day-to-day staffing, queues, knowledge, and agent enablement.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud"
   ],
   "personaSegment": "Contact Center Ops · WFM Lead",
   "titles": "Contact Center Operations Manager · Workforce Management Lead",
   "responsibilities": "Staffing, queue routing, knowledge base, QA, agent tooling.",
   "fit": "Multi-channel center, knowledge gaps, high attrition.",
   "disqualifiers": "Tiny support team, no formal ops.",
   "recommendedAgentUse": "Technical champion for deflection and agent-assist features.",
   "buyingRole": "Technical evaluator",
   "reportsTo": "VP Support",
   "callMentions": 71,
   "caresAbout": [
    "Queue routing and staffing",
    "Knowledge quality",
    "QA coverage"
   ],
   "kpis": [
    "Occupancy",
    "Schedule adherence",
    "Knowledge article usage"
   ],
   "objections": [
    "Integration with telephony and WFM",
    "Agent training lift"
   ],
   "quote": "“Our agents can’t find answers fast enough. Knowledge is scattered everywhere.”",
   "quoteSource": "Inbound email — Grand Hotels ops, Mar 2026"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "AI service page",
     "snippet": "Give service teams AI-powered answers and connected customer context.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/service-cloud/ai-service"
    },
    {
     "type": "Call recording",
     "label": "Discovery — Grand Hotels",
     "snippet": "\"Average handle time is 14 minutes. Half of that is agents hunting for the answer.\"",
     "when": "Mar 02, 2026",
     "ref": "Gong · 41 min"
    }
   ],
   "id": "pain_slow_resolution",
   "category": "Pain Point",
   "value": "Slow case resolution",
   "description": "Support teams resolve issues slowly when agents lack context, knowledge, or automation.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud",
    "Agentforce Service"
   ],
   "personaSegment": "Service Leader · CC Ops",
   "whyMatters": "Slow resolution hurts CSAT and drives up cost-to-serve.",
   "capability": "AI answers, next-best-action, connected customer context.",
   "valueProp": "Resolve more, faster, with AI-assisted service.",
   "outcome": "Lower handle time, higher CSAT, better deflection.",
   "relatedPersona": "Service Leader",
   "recommendedAgentUse": "Core wedge for contact-center modernization signals."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Needs Admin Review",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "CRM note",
     "label": "Account — Grand Hotels",
     "snippet": "CFO mandated 15% reduction in cost-to-serve this fiscal year.",
     "when": "Feb 27, 2026",
     "ref": "Account activity"
    }
   ],
   "id": "pain_cost_to_serve",
   "category": "Pain Point",
   "value": "Rising cost-to-serve",
   "description": "Support costs grow faster than revenue as volume and complexity increase.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud",
    "Agentforce Service"
   ],
   "personaSegment": "VP Support · CFO",
   "whyMatters": "Cost-to-serve pressure puts service budgets under the microscope.",
   "capability": "Self-service deflection + agent-assist automation.",
   "valueProp": "Serve more customers at lower cost per case.",
   "outcome": "Higher deflection, reduced cost per contact.",
   "relatedPersona": "Service Leader",
   "recommendedAgentUse": "Use when cost-cutting or efficiency mandates are present."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Agentforce Service page",
     "snippet": "AI-assisted service resolves common cases and supports agents on complex ones.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/agentforce-service"
    }
   ],
   "id": "msg_resolve_more_ai",
   "category": "Messaging Angle",
   "value": "Resolve more with AI-assisted service",
   "description": "Position AI as augmenting agents to resolve faster, not replacing the human touch.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud",
    "Agentforce Service"
   ],
   "personaSegment": "VP Support · CC Ops",
   "useWhen": "Handle-time, CSAT, or deflection concerns surface.",
   "hook": "\"What if every agent had the best answer at their fingertips on every case?\"",
   "avoid": "Avoid implying full automation of complex or sensitive cases.",
   "recommendedAgentUse": "Opening angle for service modernization."
  },
  {
   "ttlDays": 90,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Email",
     "label": "AE note — earnings",
     "snippet": "\"They flagged contact-center efficiency as a cost lever for the year.\"",
     "when": "Mar 05, 2026",
     "ref": "thread"
    }
   ],
   "id": "sig_cost_cutting",
   "category": "Signal Playbook",
   "value": "Contact-center cost-cutting mandate",
   "description": "A stated cost-reduction or efficiency mandate signals urgency for deflection and automation.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud",
    "Agentforce Service"
   ],
   "personaSegment": "VP Support · CFO",
   "signalCategory": "Strategic announcement",
   "painHyp": "Rising cost-to-serve",
   "angle": "Resolve more with AI-assisted service",
   "recommendedAgentUse": "Wake agent on service cost mandates; lead with deflection ROI."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Needs Admin Review",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "NTO customer story",
     "snippet": "Northern Trail Outfitters cut handle time with AI-assisted service.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/nto"
    }
   ],
   "id": "proof_ntl_service",
   "category": "Case Study",
   "value": "Northern Trail Outfitters service automation",
   "description": "Sample case study showing deflection and faster resolution from AI-assisted service.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud",
    "Agentforce Service"
   ],
   "personaSegment": "VP Support · CX Leader",
   "proofType": "Case Study",
   "useCase": "Deflection, faster resolution",
   "recommendedAgentUse": "Proof for service modernization and deflection messaging."
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "MuleSoft page",
     "snippet": "Connect any system with reusable APIs and integration.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/mulesoft"
    },
    {
     "type": "Call recording",
     "label": "Discovery — Pyramid (Chief Architect)",
     "snippet": "\"We have 200+ point-to-point integrations. Every change breaks three things.\"",
     "when": "Mar 03, 2026",
     "ref": "Gong · 47 min"
    }
   ],
   "id": "p_enterprise_architect",
   "category": "Buyer Persona",
   "value": "Enterprise Architect",
   "description": "Designs integration strategy, API governance, and system-of-record architecture.",
   "motionIds": [
    "mulesoft_integration_modernization"
   ],
   "products": [
    "MuleSoft"
   ],
   "personaSegment": "Chief Architect · VP Integration · Platform Lead",
   "titles": "Chief Enterprise Architect · VP Integration · Head of Platform Engineering",
   "responsibilities": "Integration strategy, API lifecycle, reuse, governance, technical debt.",
   "fit": "Many systems, custom point-to-point integrations, M&A history.",
   "disqualifiers": "Simple stack, no integration backlog.",
   "recommendedAgentUse": "Target architects on reuse, governance, and consolidation.",
   "buyingRole": "Technical evaluator",
   "reportsTo": "CIO",
   "callMentions": 109,
   "caresAbout": [
    "Reuse and composability",
    "API governance",
    "Avoiding rip-and-replace"
   ],
   "kpis": [
    "API reuse rate",
    "Integration delivery time",
    "Incidents from brittle integrations"
   ],
   "objections": [
    "“We can build this with open source.”",
    "Platform team capacity"
   ],
   "quote": "“We have 200+ point-to-point integrations. Every change breaks three things.”",
   "quoteSource": "Discovery call — Pyramid Construction, Mar 2026"
  },
  {
   "ttlDays": null,
   "priority": "High",
   "claimType": "Stated",
   "confidence": "High",
   "status": "Approved",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Integration modernization",
     "snippet": "Connect data and systems across the enterprise to create integrated experiences.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/solutions/integration-modernization"
    },
    {
     "type": "CRM note",
     "label": "Account — Pyramid",
     "snippet": "Closed two acquisitions in 18 months; integration backlog is the top IT risk.",
     "when": "Feb 25, 2026",
     "ref": "Account activity"
    }
   ],
   "id": "pain_disconnected_systems",
   "category": "Pain Point",
   "value": "Disconnected systems after M&A",
   "description": "Acquisitions leave overlapping systems and broken data flows that slow the business.",
   "motionIds": [
    "mulesoft_integration_modernization",
    "data_360_ai_readiness"
   ],
   "products": [
    "MuleSoft",
    "Data 360"
   ],
   "personaSegment": "CIO · Enterprise Architect",
   "whyMatters": "Disconnected systems block synergy capture and create data chaos.",
   "capability": "Reusable APIs + integration to unify systems and data.",
   "valueProp": "Connect acquired systems fast — without rip-and-replace.",
   "outcome": "Faster integration, realized M&A synergies.",
   "relatedPersona": "Enterprise Architect",
   "recommendedAgentUse": "Core wedge on M&A and consolidation signals."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "API reuse page",
     "snippet": "Reuse APIs to accelerate every new project.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/mulesoft/api-reuse"
    }
   ],
   "id": "pain_integration_backlog",
   "category": "Pain Point",
   "value": "Integration backlog slows delivery",
   "description": "Every new initiative waits on custom integration work, delaying time-to-value.",
   "motionIds": [
    "mulesoft_integration_modernization"
   ],
   "products": [
    "MuleSoft"
   ],
   "personaSegment": "Enterprise Architect · CIO",
   "whyMatters": "Integration bottlenecks throttle every digital initiative, including AI.",
   "capability": "Reusable API building blocks and automation.",
   "valueProp": "Ship integrations in days by reusing what you’ve built.",
   "outcome": "Faster delivery, less custom code.",
   "relatedPersona": "Enterprise Architect",
   "recommendedAgentUse": "Use when delivery speed or backlog is the pain."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "MuleSoft value page",
     "snippet": "Composable, reusable APIs accelerate every initiative.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/mulesoft/value"
    }
   ],
   "id": "value_reusable_apis",
   "category": "Value Proposition",
   "value": "Reusable APIs accelerate everything",
   "description": "Composable, reusable APIs turn integration from a cost center into an accelerant.",
   "motionIds": [
    "mulesoft_integration_modernization"
   ],
   "products": [
    "MuleSoft"
   ],
   "personaSegment": "Enterprise Architect",
   "whyMatters": "Reuse compounds — each API makes the next project faster.",
   "capability": "API design, management, and reuse across the org.",
   "valueProp": "Build once, reuse everywhere.",
   "outcome": "Lower integration cost, faster delivery.",
   "relatedPersona": "Enterprise Architect",
   "recommendedAgentUse": "Lead value prop for architecture-led conversations."
  },
  {
   "ttlDays": 120,
   "priority": "High",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Email",
     "label": "AE forward — M&A news",
     "snippet": "\"They just closed an acquisition — integration pain incoming. Reach out now.\"",
     "when": "Mar 06, 2026",
     "ref": "thread"
    },
    {
     "type": "CRM note",
     "label": "Signal — news monitor",
     "snippet": "Acquisition announced; flagged for integration-modernization outreach.",
     "when": "Mar 06, 2026",
     "ref": "Signal log"
    }
   ],
   "id": "sig_ma_event",
   "category": "Signal Playbook",
   "value": "M&A event",
   "description": "Mergers and acquisitions create urgency around integration, data consolidation, and standardization.",
   "motionIds": [
    "mulesoft_integration_modernization",
    "data_360_ai_readiness"
   ],
   "products": [
    "MuleSoft",
    "Data 360"
   ],
   "personaSegment": "CIO · Enterprise Architect · VP Data",
   "signalCategory": "Corporate event",
   "painHyp": "Disconnected systems after M&A",
   "angle": "Connect acquired systems without rip-and-replace",
   "recommendedAgentUse": "Wake agent on M&A news; draft messaging around integration and data consolidation."
  },
  {
   "ttlDays": 90,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Low",
   "status": "Needs Admin Review",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "CRM note",
     "label": "Signal — IT strategy memo",
     "snippet": "Mentioned vendor consolidation; weak signal, needs a second source.",
     "when": "Mar 08, 2026",
     "ref": "Signal log"
    }
   ],
   "id": "sig_stack_consolidation",
   "category": "Signal Playbook",
   "value": "Tech-stack consolidation program",
   "description": "A stated consolidation or vendor-rationalization program signals integration and platform spend.",
   "motionIds": [
    "mulesoft_integration_modernization"
   ],
   "products": [
    "MuleSoft",
    "Data 360"
   ],
   "personaSegment": "CIO · Enterprise Architect",
   "signalCategory": "Strategic announcement",
   "painHyp": "Integration backlog slows delivery",
   "angle": "Reusable APIs accelerate everything",
   "recommendedAgentUse": "Low-confidence — confirm scope before outreach."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Stated",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Reference architecture",
     "snippet": "Connect with MuleSoft, unify with Data 360, act with Agentforce.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/architecture/connect-unify-act"
    }
   ],
   "id": "proof_integration_pattern",
   "category": "Integration",
   "value": "Salesforce + MuleSoft + Data 360 pattern",
   "description": "Reference architecture connecting systems via MuleSoft and unifying data in Data 360.",
   "motionIds": [
    "mulesoft_integration_modernization"
   ],
   "products": [
    "MuleSoft",
    "Data 360"
   ],
   "personaSegment": "Enterprise Architect · CIO",
   "proofType": "Integration",
   "useCase": "Architecture proof for connect-then-unify story",
   "recommendedAgentUse": "Share with technical buyers to validate the end-to-end pattern."
  },
  {
   "ttlDays": null,
   "priority": "Medium",
   "claimType": "Inferred",
   "confidence": "Medium",
   "status": "Suggested",
   "safeForOutreach": null,
   "sources": [
    {
     "type": "Website",
     "label": "Identity resolution page",
     "snippet": "Resolve identities into a single trusted customer profile.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/products/identity-resolution"
    }
   ],
   "id": "pain_disconnected_profiles",
   "category": "Pain Point",
   "value": "Disconnected customer profiles",
   "description": "Customer profiles are inconsistent across systems, so no team sees the same customer.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CDO · Marketing Ops",
   "whyMatters": "Inconsistent profiles undermine trust in data and AI.",
   "capability": "Identity resolution into a single golden profile.",
   "valueProp": "One consistent profile for every team.",
   "outcome": "Trusted, consistent customer view.",
   "relatedPersona": "Data Leader",
   "recommendedAgentUse": "Likely a duplicate of \"Fragmented customer data\" — review for merge.",
   "duplicateOf": "pain_fragmented_data"
  },
  {
   "id": "cs_f1",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Formula 1 — fan 360",
   "description": "Unified fan data across digital channels and race weekends powers personalized fan engagement at global scale.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CMO · CDO · Fan engagement leader",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Customer 360, personalization at scale",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "F1 customer story",
     "snippet": "Formula 1 unifies fan data to personalize engagement for millions of fans.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/formula-1"
    }
   ],
   "segment": "Enterprise"
  },
  {
   "id": "cs_caseys",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Casey’s — loyalty personalization",
   "description": "Unified loyalty, fuel, and in-store data powers personalized offers that lift basket size and visit frequency.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CMO · Loyalty leader",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Retail loyalty, offer personalization",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Casey’s customer story",
     "snippet": "Casey’s unifies loyalty and transaction data to personalize offers for millions of guests.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/caseys"
    }
   ]
  },
  {
   "id": "cs_wyndham",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Wyndham — guest 360 across brands",
   "description": "A single guest profile across 20+ hotel brands enables consistent recognition and cross-brand marketing.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CMO · CDO · Hospitality CX leader",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Cross-brand identity resolution",
   "safeForOutreach": true,
   "segment": "Enterprise",
   "sources": [
    {
     "type": "Website",
     "label": "Wyndham customer story",
     "snippet": "Wyndham resolves guest identity across brands to power recognition and relevant outreach.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/wyndham"
    }
   ]
  },
  {
   "id": "cs_turtle_bay",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Turtle Bay — guest intelligence",
   "description": "A boutique resort unifies guest preferences and stay history so every team personalizes service without added headcount.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "GM · CX leader",
   "confidence": "Medium",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Unified profiles for high-touch service",
   "safeForOutreach": true,
   "segment": "Mid-market",
   "sources": [
    {
     "type": "Website",
     "label": "Turtle Bay customer story",
     "snippet": "Turtle Bay Resort personalizes every guest touchpoint from one unified profile.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/turtle-bay"
    }
   ]
  },
  {
   "id": "cs_williams_sonoma",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Williams-Sonoma — unified commerce profiles",
   "description": "Online, catalog, and in-store signals merge into one profile that drives cross-channel personalization across house brands.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CMO · Digital leader",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Omnichannel retail personalization",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Williams-Sonoma customer story",
     "snippet": "Williams-Sonoma personalizes across channels and brands from unified customer profiles.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/williams-sonoma"
    }
   ]
  },
  {
   "id": "cs_penfed",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "PenFed — member data modernization",
   "description": "A credit union consolidates member data across products to ground AI service and next-best-action in a trusted profile.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CIO · FS data leader",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "High",
   "useCase": "FS data modernization, AI grounding",
   "safeForOutreach": true,
   "segment": "Enterprise",
   "sources": [
    {
     "type": "Website",
     "label": "PenFed customer story",
     "snippet": "PenFed unifies member data to power AI-assisted service across every product line.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/penfed"
    }
   ]
  },
  {
   "id": "cs_adt",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "ADT — customer 360 for retention",
   "description": "Unified install, billing, and service signals identify at-risk subscribers early and trigger proactive saves.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "COO · Retention leader",
   "confidence": "Medium",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Churn signals, proactive retention",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "ADT customer story",
     "snippet": "ADT spots at-risk subscribers from unified signals and acts before they churn.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/adt"
    }
   ]
  },
  {
   "id": "cs_crocs",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Crocs — DTC audience activation",
   "description": "First-party profiles activate in real time across paid and owned channels, cutting acquisition cost on key drops.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CMO · Growth leader",
   "confidence": "Medium",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Real-time audience activation",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Crocs customer story",
     "snippet": "Crocs activates first-party audiences in real time across every channel.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/crocs"
    }
   ]
  },
  {
   "id": "cs_sonos",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Sonos — zero-copy analytics",
   "description": "Zero-copy access to the warehouse brings product telemetry into customer profiles without new pipelines.",
   "motionIds": [
    "data_360_ai_readiness"
   ],
   "products": [
    "Data 360"
   ],
   "personaSegment": "CDO · Analytics leader",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Zero-copy warehouse integration",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Sonos customer story",
     "snippet": "Sonos enriches customer profiles with warehouse telemetry via zero-copy access — no duplication.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/sonos"
    }
   ]
  },
  {
   "id": "cs_gucci",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Gucci — AI-assisted client advisors",
   "description": "Client advisors blend service and selling with AI-assisted context, lifting conversion on service interactions.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud",
    "Agentforce Service"
   ],
   "personaSegment": "VP CX · Retail service leader",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "AI-assisted service, service-to-sales",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Gucci customer story",
     "snippet": "Gucci client advisors use AI-assisted workflows to turn service moments into relationships.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/gucci"
    }
   ],
   "segment": "Enterprise"
  },
  {
   "id": "cs_air_india",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Air India — service modernization",
   "description": "Consolidated service channels and AI-assisted case handling cut resolution times across a fast-growing airline.",
   "motionIds": [
    "service_cloud_contact_center"
   ],
   "products": [
    "Service Cloud"
   ],
   "personaSegment": "VP Support · Contact center leader",
   "confidence": "Medium",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "Channel consolidation, faster resolution",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Air India customer story",
     "snippet": "Air India modernized service operations to resolve customer issues faster across channels.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/air-india"
    }
   ],
   "segment": "Enterprise"
  },
  {
   "id": "cs_wiley",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Wiley — Agentforce for support scale",
   "description": "Agentforce resolves routine inquiries during seasonal peaks, raising self-service resolution without added headcount.",
   "motionIds": [
    "agentforce_sales_automation",
    "service_cloud_contact_center"
   ],
   "products": [
    "Agentforce"
   ],
   "personaSegment": "VP Support · AI leader",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "High",
   "useCase": "Agent deflection at seasonal peak",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Wiley customer story",
     "snippet": "Wiley uses Agentforce to handle seasonal support surges with higher self-service resolution.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/wiley"
    }
   ],
   "segment": "Mid-market"
  },
  {
   "id": "cs_opentable",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "OpenTable — Agentforce concierge",
   "description": "An Agentforce concierge handles diner and restaurant requests end-to-end, freeing teams for complex cases.",
   "motionIds": [
    "agentforce_sales_automation"
   ],
   "products": [
    "Agentforce"
   ],
   "personaSegment": "COO · Support leader",
   "confidence": "Medium",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "End-to-end agent task completion",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "OpenTable customer story",
     "snippet": "OpenTable’s Agentforce concierge resolves diner requests like reservation changes autonomously within guardrails.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/opentable"
    }
   ]
  },
  {
   "id": "cs_heathrow",
   "category": "Case Study",
   "proofType": "Case Study",
   "value": "Heathrow — integration backbone",
   "description": "Reusable APIs connect airport operations systems, speeding delivery of passenger-facing digital services.",
   "motionIds": [
    "mulesoft_integration_modernization"
   ],
   "products": [
    "MuleSoft"
   ],
   "personaSegment": "CIO · Enterprise architect",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "Medium",
   "useCase": "API reuse, operations integration",
   "safeForOutreach": true,
   "sources": [
    {
     "type": "Website",
     "label": "Heathrow customer story",
     "snippet": "Heathrow connects operational systems with reusable APIs to ship new passenger services faster.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/customers/heathrow"
    }
   ],
   "segment": "Enterprise"
  },
  {
   "id": "guard_no_roi",
   "category": "Messaging Guardrail",
   "proofType": "Messaging Guardrail",
   "value": "No ROI figures without a named customer story",
   "description": "Quantified claims (hours saved, % deflection, revenue lift) may only be used when tied to a published customer story.",
   "motionIds": [
    "sales_cloud_rep_productivity",
    "data_360_ai_readiness",
    "agentforce_sales_automation"
   ],
   "products": [
    "All products"
   ],
   "personaSegment": "All customer-facing messaging",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "High",
   "useCase": "Prevent unsubstantiated ROI claims",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Email",
     "label": "Legal — claims review",
     "snippet": "\"Any number in outbound must trace to a published, approved story. No exceptions.\"",
     "when": "Mar 06, 2026",
     "ref": "legal review"
    }
   ]
  },
  {
   "id": "guard_no_competitor_names",
   "category": "Messaging Guardrail",
   "proofType": "Messaging Guardrail",
   "value": "Do not name competitors in outbound",
   "description": "Differentiate on capability and trust posture; never name or disparage a competitor in customer-facing messaging.",
   "motionIds": [
    "sales_cloud_rep_productivity",
    "service_cloud_contact_center",
    "agentforce_sales_automation",
    "data_360_ai_readiness",
    "mulesoft_integration_modernization"
   ],
   "products": [
    "All products"
   ],
   "personaSegment": "All customer-facing messaging",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "High",
   "useCase": "Competitive positioning hygiene",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Website",
     "label": "Brand & messaging guidelines",
     "snippet": "Lead with customer outcomes; never reference competitors by name in outbound.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/brand/messaging-guidelines"
    }
   ]
  },
  {
   "id": "guard_certifications",
   "category": "Messaging Guardrail",
   "proofType": "Messaging Guardrail",
   "value": "Compliance claims must cite official certifications",
   "description": "Security and compliance statements may only reference published certifications and the official trust portal — never improvised.",
   "motionIds": [
    "data_360_ai_readiness",
    "service_cloud_contact_center"
   ],
   "products": [
    "Data 360",
    "Service Cloud"
   ],
   "personaSegment": "All customer-facing messaging",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "High",
   "useCase": "Security and compliance accuracy",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Website",
     "label": "Trust portal",
     "snippet": "Current certifications and compliance documentation are published on the trust portal.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/trust/compliance"
    },
    {
     "type": "CRM note",
     "label": "Deal retro — stalled security review",
     "snippet": "Rep improvised a compliance answer; deal lost 5 weeks re-validating with security.",
     "when": "Feb 21, 2026",
     "ref": "Win/loss notes"
    }
   ]
  },
  {
   "id": "guard_no_timelines",
   "category": "Messaging Guardrail",
   "proofType": "Messaging Guardrail",
   "value": "Do not promise implementation timelines",
   "description": "Timelines depend on customer scope and partners; the agent may share typical ranges only with an explicit \"varies by scope\" caveat.",
   "motionIds": [
    "mulesoft_integration_modernization",
    "sales_cloud_rep_productivity"
   ],
   "products": [
    "MuleSoft",
    "Sales Cloud"
   ],
   "personaSegment": "All customer-facing messaging",
   "confidence": "Medium",
   "claimType": "Inferred",
   "priority": "Medium",
   "useCase": "Expectation setting",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Call recording",
     "label": "Deal retro — Express Logistics",
     "snippet": "\"We anchored on 6 weeks in the first call and spent two quarters living it down.\"",
     "when": "Feb 14, 2026",
     "ref": "Gong · 31 min"
    }
   ]
  },
  {
   "id": "guard_assistive_language",
   "category": "Messaging Guardrail",
   "proofType": "Messaging Guardrail",
   "value": "Describe agents as assistive and permissioned, never autonomous",
   "description": "Approved language: \"assists, drafts, recommends, acts within your permissions.\" Avoid: \"autonomous, replaces, decides.\"",
   "motionIds": [
    "agentforce_sales_automation",
    "service_cloud_contact_center"
   ],
   "products": [
    "Agentforce"
   ],
   "personaSegment": "All customer-facing messaging",
   "confidence": "High",
   "claimType": "Stated",
   "priority": "High",
   "useCase": "Agent positioning language",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Website",
     "label": "Agentforce guidelines",
     "snippet": "Agents operate within customer-defined permissions and human approval workflows.",
     "when": "Mar 12, 2026",
     "ref": "salesforce.example/trust/agentforce-guidelines"
    }
   ]
  },
  {
   "id": "guard_regulated",
   "category": "Messaging Guardrail",
   "proofType": "Messaging Guardrail",
   "value": "Regulated-industry workflows require SE review",
   "description": "No claims about HIPAA, FINRA, or other regulated workflows in outbound without solution-engineering review of the account context.",
   "motionIds": [
    "data_360_ai_readiness",
    "service_cloud_contact_center"
   ],
   "products": [
    "Data 360",
    "Service Cloud"
   ],
   "personaSegment": "Healthcare · Financial services messaging",
   "confidence": "Medium",
   "claimType": "Inferred",
   "priority": "High",
   "useCase": "Regulated-industry hygiene",
   "safeForOutreach": false,
   "sources": [
    {
     "type": "Email",
     "label": "Legal — regulated industries",
     "snippet": "\"Regulated-workflow claims are SE-reviewed, account-specific, and never templated.\"",
     "when": "Mar 03, 2026",
     "ref": "legal review"
    }
   ]
  }
 ],
 "meta": {
  "callsAnalyzed": "1,038",
  "emailsAnalyzed": "4,210",
  "pagesAnalyzed": "312",
  "dealsAnalyzed": "470"
 },
 "icpMeta": {
  "data_360_ai_readiness": {
   "deals": 14,
   "medianAcv": "$430K",
   "window": "Last 4 quarters"
  },
  "sales_cloud_rep_productivity": {
   "deals": 12,
   "medianAcv": "$280K",
   "window": "Last 4 quarters"
  },
  "agentforce_sales_automation": {
   "deals": 8,
   "medianAcv": "$160K",
   "window": "Last 3 quarters"
  },
  "service_cloud_contact_center": {
   "deals": 11,
   "medianAcv": "$340K",
   "window": "Last 4 quarters"
  },
  "mulesoft_integration_modernization": {
   "deals": 9,
   "medianAcv": "$520K",
   "window": "Last 4 quarters"
  }
 },
 "icp": [
  {
   "id": "icp_data_360_1",
   "motionId": "data_360_ai_readiness",
   "segmentId": "ent",
   "charType": null,
   "characteristic": "Definition",
   "value": "Enterprise — 2,000+ employees, named-account territories, field sales",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_data_360_2",
   "motionId": "data_360_ai_readiness",
   "segmentId": "ent",
   "charType": "Firmographic",
   "characteristic": "Industries",
   "value": "Retail, Financial services, Healthcare",
   "rationale": "Verticals with heavy first-party data estates dominate wins.",
   "match": "71 of 90",
   "deals": [
    "United Oil & Gas · $740K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_3",
   "motionId": "data_360_ai_readiness",
   "segmentId": "ent",
   "charType": "Technographic",
   "characteristic": "Data stack",
   "value": "Snowflake or Databricks in place",
   "rationale": "Zero-copy access cited as decisive in 54 wins.",
   "match": "78 of 90",
   "deals": [
    "Pyramid Construction · $520K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_4",
   "motionId": "data_360_ai_readiness",
   "segmentId": "ent",
   "charType": "Signal",
   "characteristic": "AI initiative",
   "value": "Funded GenAI program in flight",
   "rationale": "A named, budgeted program existed at first call in nearly every win.",
   "match": "86 of 90",
   "deals": [
    "Grand Hotels & Resorts · $610K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_5",
   "motionId": "data_360_ai_readiness",
   "segmentId": "ent",
   "charType": "Buying behavior",
   "characteristic": "Buying committee",
   "value": "CDO + CIO + security review",
   "rationale": "Median 7 stakeholders; security review adds 3–6 weeks.",
   "match": "75 of 90",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_6",
   "motionId": "data_360_ai_readiness",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Sales cycle",
   "value": "5 – 8 months",
   "rationale": "Median 6.0 months.",
   "match": "68 of 90",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_7",
   "motionId": "data_360_ai_readiness",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$350K – $750K ACV",
   "rationale": "Median $520K.",
   "match": "66 of 90",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_8",
   "motionId": "data_360_ai_readiness",
   "segmentId": "mm",
   "charType": null,
   "characteristic": "Definition",
   "value": "Mid-market — 200–2,000 employees, geo territories, inside + field",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_data_360_9",
   "motionId": "data_360_ai_readiness",
   "segmentId": "mm",
   "charType": "Firmographic",
   "characteristic": "Industries",
   "value": "Retail, Technology",
   "rationale": "Digital-native and omnichannel retailers over-index.",
   "match": "39 of 50",
   "deals": [
    "Northern Trail Outfitters · $310K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_10",
   "motionId": "data_360_ai_readiness",
   "segmentId": "mm",
   "charType": "Technographic",
   "characteristic": "Data stack",
   "value": "Cloud warehouse, lean data team",
   "rationale": "Implementation support was decisive where the team was small.",
   "match": "31 of 50",
   "deals": [
    "Burlington Textiles · $220K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_11",
   "motionId": "data_360_ai_readiness",
   "segmentId": "mm",
   "charType": "Signal",
   "characteristic": "Trigger",
   "value": "First senior data hire",
   "rationale": "Wins followed a new data leader within two quarters.",
   "match": "38 of 50",
   "deals": [
    "GenePoint · $180K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_12",
   "motionId": "data_360_ai_readiness",
   "segmentId": "mm",
   "charType": "Buying behavior",
   "characteristic": "Buying committee",
   "value": "Data leader + RevOps",
   "rationale": "Median 4 stakeholders.",
   "match": "36 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_13",
   "motionId": "data_360_ai_readiness",
   "segmentId": "mm",
   "charType": "Deal shape",
   "characteristic": "Sales cycle",
   "value": "3 – 4 months",
   "rationale": "Median 3.4 months.",
   "match": "40 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_14",
   "motionId": "data_360_ai_readiness",
   "segmentId": "mm",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$150K – $350K ACV",
   "rationale": "Median $260K.",
   "match": "37 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_15",
   "motionId": "data_360_ai_readiness",
   "segmentId": "smb",
   "charType": null,
   "characteristic": "Definition",
   "value": "SMB — under 200 employees, pooled territories, inside sales",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_data_360_16",
   "motionId": "data_360_ai_readiness",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "No data engineering function",
   "value": "Avoid",
   "rationale": "Implementations stall without a customer-side data owner.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_17",
   "motionId": "data_360_ai_readiness",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "Warehouse migration mid-flight",
   "value": "Defer",
   "rationale": "Stalled deals cluster here; revisit once the migration lands.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_data_360_18",
   "motionId": "data_360_ai_readiness",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "Single-brand SMB without analytics",
   "value": "Avoid",
   "rationale": "Zero wins; recent losses cite price.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_19",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "ent",
   "charType": null,
   "characteristic": "Definition",
   "value": "Enterprise — 2,000+ employees, named-account territories, field sales",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_sales_cl_20",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "ent",
   "charType": "Firmographic",
   "characteristic": "Sales org size",
   "value": "1,000+ quota-carrying reps",
   "rationale": "Median 1,400 reps across wins.",
   "match": "41 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_21",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "ent",
   "charType": "Firmographic",
   "characteristic": "Industries",
   "value": "Manufacturing, Logistics",
   "rationale": "Field-heavy sales orgs with long-tenured rep populations.",
   "match": "38 of 50",
   "deals": [
    "Express Logistics · $270K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_22",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "ent",
   "charType": "Signal",
   "characteristic": "Trigger",
   "value": "New CRO within first two quarters",
   "rationale": "Wins started within 6 months of a CRO change.",
   "match": "36 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_23",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "ent",
   "charType": "Buying behavior",
   "characteristic": "Buying committee",
   "value": "CRO + IT + procurement",
   "rationale": "Median 6 stakeholders.",
   "match": "39 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_24",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Sales cycle",
   "value": "5 – 7 months",
   "rationale": "Median 5.8 months.",
   "match": "40 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_25",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$300K – $600K ACV",
   "rationale": "Median $450K.",
   "match": "31 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_26",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "mm",
   "charType": null,
   "characteristic": "Definition",
   "value": "Mid-market — 200–2,000 employees, geo territories, inside + field",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_sales_cl_27",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "mm",
   "charType": "Firmographic",
   "characteristic": "Sales org size",
   "value": "50 – 200 quota-carrying reps",
   "rationale": "Median 140 reps.",
   "match": "60 of 70",
   "deals": [
    "Dickenson plc · $390K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_28",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "mm",
   "charType": "Firmographic",
   "characteristic": "Industries",
   "value": "SaaS, Business services",
   "rationale": "Recurring-revenue models with inside-sales motions.",
   "match": "58 of 70",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_29",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "mm",
   "charType": "Buying behavior",
   "characteristic": "Champion",
   "value": "RevOps-led evaluation",
   "rationale": "RevOps is the working champion.",
   "match": "61 of 70",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_30",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "mm",
   "charType": "Deal shape",
   "characteristic": "Sales cycle",
   "value": "~3 months",
   "rationale": "Median 3.1 months.",
   "match": "52 of 70",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_31",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "mm",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$120K – $250K ACV",
   "rationale": "Median $190K.",
   "match": "49 of 70",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_32",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "Teams under 25 reps",
   "value": "Avoid",
   "rationale": "ROI math fails below 25 reps; recent losses cite price.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_sales_cl_33",
   "motionId": "sales_cloud_rep_productivity",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "Fully outsourced sales model",
   "value": "Avoid",
   "rationale": "No internal process to automate.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_34",
   "motionId": "agentforce_sales_automation",
   "segmentId": "ent",
   "charType": null,
   "characteristic": "Definition",
   "value": "Enterprise — 2,000+ employees, named-account territories, field sales",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_agentfor_35",
   "motionId": "agentforce_sales_automation",
   "segmentId": "ent",
   "charType": "Technographic",
   "characteristic": "CRM maturity",
   "value": "Mature Sales Cloud org with clean data",
   "rationale": "Stated prerequisite in nearly every win.",
   "match": "47 of 50",
   "deals": [
    "Grand Hotels & Resorts · $610K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_36",
   "motionId": "agentforce_sales_automation",
   "segmentId": "ent",
   "charType": "Signal",
   "characteristic": "Budget",
   "value": "Funded AI budget line",
   "rationale": "Never displacement of headcount budget.",
   "match": "46 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_37",
   "motionId": "agentforce_sales_automation",
   "segmentId": "ent",
   "charType": "Buying behavior",
   "characteristic": "Sponsor",
   "value": "C-level exec sponsor",
   "rationale": "Director-led evaluations stalled.",
   "match": "40 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_38",
   "motionId": "agentforce_sales_automation",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Sales cycle",
   "value": "3 – 4 months",
   "rationale": "Land one use case, expand after first measurable win.",
   "match": "38 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_39",
   "motionId": "agentforce_sales_automation",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$150K – $300K initial ACV",
   "rationale": "Median $220K initial.",
   "match": "39 of 50",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_40",
   "motionId": "agentforce_sales_automation",
   "segmentId": "mm",
   "charType": null,
   "characteristic": "Definition",
   "value": "Mid-market — 200–2,000 employees, geo territories, inside + field",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_agentfor_41",
   "motionId": "agentforce_sales_automation",
   "segmentId": "mm",
   "charType": "Deal shape",
   "characteristic": "Entry point",
   "value": "Single use case land",
   "rationale": "Nearly every win landed on one workflow.",
   "match": "28 of 30",
   "deals": [
    "Cloud Kicks · $480K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_42",
   "motionId": "agentforce_sales_automation",
   "segmentId": "mm",
   "charType": "Buying behavior",
   "characteristic": "Sponsor",
   "value": "Founder or CRO",
   "rationale": "Smaller orgs move only with top-down sponsorship.",
   "match": "27 of 30",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_43",
   "motionId": "agentforce_sales_automation",
   "segmentId": "mm",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$80K – $150K initial ACV",
   "rationale": "Median $110K initial.",
   "match": "21 of 30",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_44",
   "motionId": "agentforce_sales_automation",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "Messy CRM data",
   "value": "Defer",
   "rationale": "Route to the Sales Cloud hygiene motion first.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_agentfor_45",
   "motionId": "agentforce_sales_automation",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "No legal framework for AI outreach",
   "value": "Defer",
   "rationale": "Deals stall in legal for 90+ days.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__46",
   "motionId": "service_cloud_contact_center",
   "segmentId": "ent",
   "charType": null,
   "characteristic": "Definition",
   "value": "Enterprise — 2,000+ employees, named-account territories, field sales",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_service__47",
   "motionId": "service_cloud_contact_center",
   "segmentId": "ent",
   "charType": "Firmographic",
   "characteristic": "Contact center size",
   "value": "300+ seats",
   "rationale": "Median 320 seats across wins.",
   "match": "70 of 80",
   "deals": [
    "Grand Hotels & Resorts · $610K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_service__48",
   "motionId": "service_cloud_contact_center",
   "segmentId": "ent",
   "charType": "Firmographic",
   "characteristic": "Industries",
   "value": "Hospitality, Telecom, Utilities",
   "rationale": "High-volume B2C support operations.",
   "match": "68 of 80",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__49",
   "motionId": "service_cloud_contact_center",
   "segmentId": "ent",
   "charType": "Signal",
   "characteristic": "Mandate",
   "value": "Cost-to-serve reduction program",
   "rationale": "A stated cost mandate existed before first call.",
   "match": "66 of 80",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__50",
   "motionId": "service_cloud_contact_center",
   "segmentId": "ent",
   "charType": "Buying behavior",
   "characteristic": "Buying committee",
   "value": "VP Support + IT + procurement",
   "rationale": "Procurement involved from week one.",
   "match": "69 of 80",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__51",
   "motionId": "service_cloud_contact_center",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Sales cycle",
   "value": "5 – 6 months",
   "rationale": "Median 5.2 months.",
   "match": "61 of 80",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__52",
   "motionId": "service_cloud_contact_center",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$300K – $600K ACV",
   "rationale": "Median $390K.",
   "match": "58 of 80",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__53",
   "motionId": "service_cloud_contact_center",
   "segmentId": "mm",
   "charType": null,
   "characteristic": "Definition",
   "value": "Mid-market — 200–2,000 employees, geo territories, inside + field",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_service__54",
   "motionId": "service_cloud_contact_center",
   "segmentId": "mm",
   "charType": "Firmographic",
   "characteristic": "Contact center size",
   "value": "100 – 300 seats",
   "rationale": "Nearly every mid-market win in range.",
   "match": "27 of 30",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__55",
   "motionId": "service_cloud_contact_center",
   "segmentId": "mm",
   "charType": "Technographic",
   "characteristic": "Current stack",
   "value": "Aging helpdesk displacement",
   "rationale": "Most wins displaced an end-of-life system.",
   "match": "26 of 30",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__56",
   "motionId": "service_cloud_contact_center",
   "segmentId": "mm",
   "charType": "Deal shape",
   "characteristic": "Sales cycle",
   "value": "3 – 4 months",
   "rationale": "Median 3.6 months.",
   "match": "25 of 30",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__57",
   "motionId": "service_cloud_contact_center",
   "segmentId": "mm",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$150K – $300K ACV",
   "rationale": "Median $210K.",
   "match": "20 of 30",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__58",
   "motionId": "service_cloud_contact_center",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "Under 25 support seats",
   "value": "Avoid",
   "rationale": "No recent wins below 25 seats.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_service__59",
   "motionId": "service_cloud_contact_center",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "Pure email support",
   "value": "Avoid",
   "rationale": "Deflection ROI requires multi-channel volume.",
   "match": null,
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_mulesoft_60",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "ent",
   "charType": null,
   "characteristic": "Definition",
   "value": "Enterprise — 2,000+ employees, named-account territories, field sales",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_mulesoft_61",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "ent",
   "charType": "Technographic",
   "characteristic": "App portfolio",
   "value": "100+ applications",
   "rationale": "Median 240 apps across wins.",
   "match": "61 of 70",
   "deals": [
    "United Oil & Gas · $740K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_mulesoft_62",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "ent",
   "charType": "Signal",
   "characteristic": "M&A activity",
   "value": "Acquisition in past 24 months",
   "rationale": "The strongest single predictor in recent wins.",
   "match": "49 of 70",
   "deals": [
    "Pyramid Construction · $520K"
   ],
   "isDefinition": false
  },
  {
   "id": "icp_mulesoft_63",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "ent",
   "charType": "Technographic",
   "characteristic": "Middleware",
   "value": "Legacy ESB to retire",
   "rationale": "Most wins displaced an aging ESB.",
   "match": "59 of 70",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_mulesoft_64",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "ent",
   "charType": "Buying behavior",
   "characteristic": "Buying committee",
   "value": "Architect-led; CIO signs",
   "rationale": "Enterprise architect runs the evaluation.",
   "match": "60 of 70",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_mulesoft_65",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Sales cycle",
   "value": "6 – 8 months",
   "rationale": "Median 6.4 months.",
   "match": "50 of 70",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_mulesoft_66",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "ent",
   "charType": "Deal shape",
   "characteristic": "Deal size",
   "value": "$400K – $900K ACV",
   "rationale": "Median $560K.",
   "match": "48 of 70",
   "deals": [],
   "isDefinition": false
  },
  {
   "id": "icp_mulesoft_67",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "mm",
   "charType": null,
   "characteristic": "Definition",
   "value": "Mid-market — 200–2,000 employees, geo territories, inside + field",
   "rationale": "Learned from the Account segment picklist and territory model",
   "match": null,
   "deals": [],
   "isDefinition": true
  },
  {
   "id": "icp_mulesoft_68",
   "motionId": "mulesoft_integration_modernization",
   "segmentId": "poor_fit",
   "charType": null,
   "characteristic": "Greenfield or single-vendor stacks",
   "value": "Avoid",
   "rationale": "No integration debt, no urgency.",
   "match": null,
   "deals": [],
   "isDefinition": false
  }
 ],
 "plays": [
  {
   "id": "play_ai_transformation",
   "name": "AI Transformation",
   "products": [
    "Data 360",
    "Agentforce"
   ],
   "motionIds": [
    "data_360_ai_readiness",
    "agentforce_sales_automation"
   ],
   "icpMotionId": "data_360_ai_readiness"
  },
  {
   "id": "play_seller_productivity",
   "name": "Seller Productivity",
   "products": [
    "Sales Cloud",
    "Agentforce Sales"
   ],
   "motionIds": [
    "sales_cloud_rep_productivity",
    "agentforce_sales_automation"
   ],
   "icpMotionId": "sales_cloud_rep_productivity"
  },
  {
   "id": "play_post_ma",
   "name": "Post-M&A Integration",
   "products": [
    "MuleSoft",
    "Data 360"
   ],
   "motionIds": [
    "mulesoft_integration_modernization",
    "data_360_ai_readiness"
   ],
   "icpMotionId": "mulesoft_integration_modernization"
  }
 ],
 "icpSegMeta": {
  "data_360_ai_readiness": {
   "learnedFrom": "Account segment field + territory model",
   "segments": [
    {
     "id": "ent",
     "name": "Enterprise",
     "deals": 90,
     "medianAcv": "$520K"
    },
    {
     "id": "mm",
     "name": "Mid-market",
     "deals": 50,
     "medianAcv": "$260K"
    },
    {
     "id": "smb",
     "name": "SMB",
     "deals": 4,
     "medianAcv": "—"
    }
   ]
  },
  "sales_cloud_rep_productivity": {
   "learnedFrom": "Account segment field + territory model",
   "segments": [
    {
     "id": "ent",
     "name": "Enterprise",
     "deals": 50,
     "medianAcv": "$450K"
    },
    {
     "id": "mm",
     "name": "Mid-market",
     "deals": 70,
     "medianAcv": "$190K"
    }
   ]
  },
  "agentforce_sales_automation": {
   "learnedFrom": "Account segment field + territory model",
   "segments": [
    {
     "id": "ent",
     "name": "Enterprise",
     "deals": 50,
     "medianAcv": "$220K"
    },
    {
     "id": "mm",
     "name": "Mid-market",
     "deals": 30,
     "medianAcv": "$110K"
    }
   ]
  },
  "service_cloud_contact_center": {
   "learnedFrom": "Account segment field + territory model",
   "segments": [
    {
     "id": "ent",
     "name": "Enterprise",
     "deals": 80,
     "medianAcv": "$390K"
    },
    {
     "id": "mm",
     "name": "Mid-market",
     "deals": 30,
     "medianAcv": "$210K"
    }
   ]
  },
  "mulesoft_integration_modernization": {
   "learnedFrom": "Account segment field + territory model",
   "segments": [
    {
     "id": "ent",
     "name": "Enterprise",
     "deals": 70,
     "medianAcv": "$560K"
    },
    {
     "id": "mm",
     "name": "Mid-market",
     "deals": 20,
     "medianAcv": "—"
    }
   ]
  }
 }
};

# PRD: GTM Ontology Review UI

## Claude Design / Prototype Brief

Build a clickable prototype for a Salesforce-native **GTM Ontology Review** experience. The prototype should show how a manager reviews, edits, approves, and publishes automatically extracted go-to-market insights that seed a sales agent.

Use **Salesforce as the dummy customer example**. All data should be sample/dummy data. Do not build the crawler or extraction pipeline. Assume the data has already been extracted from Salesforce’s public website and now needs to be reviewed by a manager.

The prototype must focus on:
- The table output.
- Product / motion navigation.
- Making complex GTM data easy to parse.
- Review, edit, merge, reject, approve, and publish workflows.
- Showing source evidence and confidence.
- Demonstrating how the approved ontology becomes agent context.

---

## 1. Product Concept

The user should not review one giant flat table. That is too hard to parse. The UI should organize extracted GTM insights by **Product / GTM Motion**.

Use this mental model:

> One shared GTM ontology, surfaced as product-specific workspaces.

The underlying data can be shared across products, but the manager experiences it as a focused review flow per product/motion.

Example motions:
- Sales Cloud — Rep Productivity
- Service Cloud — Contact Center Modernization
- Data 360 — AI Readiness
- Agentforce — Sales Agent Automation
- MuleSoft — Integration Modernization

Each motion should have five review tabs:
1. **Who buys** — buyer personas / ICP
2. **Why they buy** — pain points, value props, outcomes
3. **When to reach out** — signals and trigger playbooks
4. **What to say** — messaging angles and hooks
5. **Proof & guardrails** — case studies, proof points, compliance, claims to avoid

Also include an **All Rows** tab for power users who want the global table view.

---

## 2. Target User

Primary user: Sales manager, RevOps manager, or GTM admin configuring a sales agent.

Their job:
- Review what the system learned from the company website.
- Fix wrong or low-confidence insights.
- Approve good rows into agent context.
- Lock claims that are approved for customer-facing messaging.
- Reject noisy or unsupported rows.
- Understand which products/motions are well understood vs. need more review.

Design goal:

> The manager should feel like an editor approving a pre-built GTM playbook, not a user building a taxonomy from scratch.

---

## 3. Prototype Requirements

Build a single-page React-style clickable app with in-memory state. Use dummy data only.

### Must be clickable
The prototype should support these interactions:
- Click a Product / Motion card to enter that workspace.
- Switch between tabs: Who buys, Why they buy, When to reach out, What to say, Proof & guardrails, All Rows.
- Click a table row to open a right-side detail drawer.
- Approve, reject, edit, merge, and lock rows.
- Use filters for confidence, status, claim type, and category.
- Use a search box.
- Open a publish modal that summarizes what will be committed to the sales agent.
- Change row state in the UI without backend persistence.

### Visual style
Use a Salesforce-like enterprise UI:
- Clean white/gray background.
- Blue primary CTA.
- Compact data-dense tables.
- Status badges.
- Confidence chips.
- Right rail for details.
- Section cards for summary metrics.

Do not make this look like a generic marketing site. It should feel like a serious admin/review surface inside Salesforce.

---

## 4. Information Architecture

### Top-level screen: GTM Ontology Review Dashboard

Header:
- Title: **GTM Ontology Review**
- Subtitle: “Review extracted GTM context before publishing to your sales agent.”
- Customer: Salesforce.com
- Extraction status: Complete
- Last extracted: Mar 12, 2026, 9:42 AM
- Primary CTA: **Publish Approved Context**
- Secondary CTA: **Re-run Extraction**

Summary cards:
- Products / Motions found: 5
- Suggested rows: 64
- Needs review: 14
- Approved: 31
- Rejected: 6
- Locked guardrails: 4

Motion cards:
Each card should show:
- Motion name
- Product(s)
- Review progress
- Needs review count
- Top personas
- Top pains
- Confidence distribution
- Button: **Review motion**

Example cards:
1. Sales Cloud — Rep Productivity
2. Service Cloud — Contact Center Modernization
3. Data 360 — AI Readiness
4. Agentforce — Sales Agent Automation
5. MuleSoft — Integration Modernization

---

## 5. Motion Workspace Layout

When the user clicks a motion, show a focused workspace.

### Header
Example:

**Data 360 — AI Readiness**

Subheader:
“Review who buys, why they buy, when to reach out, what to say, and what proof the agent can use.”

Header components:
- Back to dashboard
- Motion status badge: “Needs Review” / “Ready to Publish”
- Product pills: Data 360, Agentforce
- Review progress bar
- CTA: **Approve all high-confidence rows**
- CTA: **Publish approved rows**

### Tabs
- Overview
- Who buys
- Why they buy
- When to reach out
- What to say
- Proof & guardrails
- All Rows

### Overview tab
Show digest cards:
- Top buyer personas
- Top pain points
- Top value props
- Best signals
- Best proof points
- Items needing admin review

Also show a short “Agent context preview”:

> For this motion, the agent should target data and IT leaders at enterprise companies showing signs of AI, personalization, or data modernization initiatives. Primary wedges include fragmented customer data, poor data activation, and difficulty grounding AI in trusted customer profiles.

---

## 6. Tab Designs

### 6.1 Who buys tab
Purpose: Review buyer persona ICP.

Table columns:
- Persona
- Example titles
- Responsibilities
- Fit criteria
- Disqualifiers
- Priority
- Confidence
- Source count
- Status

Example rows:
- Data Leader
- CIO / IT Executive
- Marketing Operations Leader
- AI Transformation Leader
- Enterprise Architect

Clicking a row opens the right drawer with:
- Persona description
- Titles
- Responsibilities
- Good-fit criteria
- Bad-fit criteria
- Related products
- Related pain points
- Source evidence
- Edit button

Edit mode for persona should include fields:
- Persona name
- Example titles
- Responsibilities
- Great fit criteria
- Acceptable fit criteria
- Bad fit / disqualifiers
- Related products/motions
- Priority
- Approved for agent targeting toggle

### 6.2 Why they buy tab
Purpose: Review pain → capability → value → outcome mapping.

Table columns:
- Pain point
- Why it matters
- Product capability
- Value prop
- Business outcome
- Related persona
- Proof
- Confidence
- Status

Example rows:
- Fragmented customer data
- Manual seller admin work
- Slow service resolution
- Disconnected systems after M&A
- Difficulty deploying trusted AI

Edit mode should let user edit:
- Pain point
- Business problem description
- Product capability
- Value prop
- Business outcome
- Related personas
- Related proof points
- Use in messaging toggle

### 6.3 When to reach out tab
Purpose: Review signal playbooks.

Table columns:
- Signal / trigger
- Why it matters
- Target persona
- Pain hypothesis
- Messaging angle
- TTL
- Confidence
- Status

Example rows:
- New CDO hired
- Public AI initiative
- M&A event
- Hiring data engineers
- Contact center cost-cutting mandate
- New sales productivity initiative
- Tech stack consolidation

Edit mode should include:
- Signal name
- Signal category
- Trigger description
- Why it matters
- Related pain point
- Target persona
- Recommended message angle
- TTL in days
- Confidence
- Motion mapping
- Use to wake agent toggle

### 6.4 What to say tab
Purpose: Review messaging angles and hooks.

Table columns:
- Messaging angle
- Use when
- Target persona
- Example hook
- Avoid saying
- Related product
- Confidence
- Status

Example rows:
- “AI readiness requires trusted data”
- “Reps should spend more time selling, less time updating CRM”
- “Contact centers can resolve more with AI-assisted service”
- “Post-M&A integration creates system consolidation pain”

Edit mode should include:
- Messaging angle
- When to use
- Target persona
- Example hook
- Approved phrases
- Avoid phrases
- Related proof points
- Customer-facing approved toggle

### 6.5 Proof & guardrails tab
Purpose: Review evidence, case studies, metrics, certifications, and messaging claims.

Table columns:
- Type
- Item
- Related product
- Use case
- Source
- Safe for outreach?
- Confidence
- Status

Types:
- Case Study
- Proof Point
- Integration
- Compliance / Security
- Messaging Guardrail
- Competitor / Alternative

Example rows:
- Saks personalization case study
- Northern Trail Outfitters service automation case study
- Zero-copy data access
- Einstein Trust Layer / trusted AI guardrail
- Do not claim autonomous pricing or legal decisions

Edit mode should include:
- Type
- Claim/item
- Related product/motion
- Where agent may use it
- Customer-facing safe toggle
- Internal-only toggle
- Source URL
- Evidence snippet
- Lock row toggle

### 6.6 All Rows tab
Purpose: Power user global table.

Columns:
- Category
- Extracted value
- Description
- Product / Motion
- Persona / Segment
- Confidence
- Claim type
- Source URL
- Evidence snippet
- Recommended agent use
- Status

Filters:
- Category
- Motion
- Confidence
- Claim type
- Review status
- Customer-facing approved

---

## 7. Row Detail Drawer

Clicking any row opens a right-side drawer.

Drawer header:
- Category icon
- Extracted value
- Status badge
- Confidence chip
- Claim type chip

Drawer sections:
1. **Description**
2. **Related motion(s)**
3. **Related products**
4. **Related personas / segments**
5. **Recommended agent use**
6. **Source evidence**
7. **Review history**
8. **Actions**

Source evidence should show:
- Source URL
- Page type
- Evidence snippet
- Extraction timestamp
- “Open source” link

Action buttons:
- Approve
- Edit
- Reject
- Merge
- Lock
- Mark customer-facing safe
- Mark internal-only

---

## 8. Edit Modes

The prototype should include three edit modes.

### 8.1 Quick inline edit
For simple fields directly in table:
- Status
- Priority
- Confidence override
- Customer-facing safe toggle

### 8.2 Detail drawer edit
For row-level edits:
- Name/value
- Description
- Related products/motions
- Related personas
- Recommended agent use
- Source snippet
- Status

### 8.3 Full modal edit
For complex objects:
- Buyer persona editor
- Signal playbook editor
- Messaging guardrail editor

Modal should include:
- Form fields
- Save button
- Cancel button
- “Save as approved” option
- Warning if user edits a source-backed claim

When user edits a row, set status to **Edited** unless they select “Save as approved.”

---

## 9. Status Model

Rows can have these statuses:
- Suggested
- Needs Admin Review
- Approved
- Edited
- Rejected
- Locked

Display badges:
- Suggested: gray
- Needs Admin Review: orange
- Approved: green
- Edited: blue
- Rejected: red
- Locked: purple / lock icon

Claim types:
- Stated
- Inferred
- Unsupported

Confidence:
- High
- Medium
- Low

Rules:
- High + Stated rows can be bulk approved.
- Low confidence rows should default to Needs Admin Review.
- Unsupported rows should default to Do Not Use Without Approval.
- Locked rows cannot be edited without clicking “Unlock.”

---

## 10. Publish Flow

Clicking **Publish Approved Context** opens a modal.

Modal title:
**Publish GTM context to Sales Agent**

Summary:
- Approved personas: X
- Approved pain points: X
- Approved value props: X
- Approved signal playbooks: X
- Approved case studies/proof points: X
- Locked guardrails: X
- Rows excluded: X rejected / X needing review

Show a preview:

“The sales agent will use this context to understand Salesforce’s products, target personas, sales triggers, approved messaging, and proof points. Rows marked Needs Review, Rejected, or Internal Only will not be used in customer-facing messaging.”

Buttons:
- Cancel
- Publish approved context

After publish:
- Show success toast
- Update header status to “Published”
- Show timestamp

---

## 11. Sample Dummy Data

Use the following dummy data in the prototype. The exact phrasing can be polished, but keep the concepts and relationships.

### Motions

```json
[
  {
    "id": "sales_cloud_rep_productivity",
    "name": "Sales Cloud — Rep Productivity",
    "products": ["Sales Cloud", "Agentforce Sales"],
    "status": "Needs Review",
    "progress": 62
  },
  {
    "id": "service_cloud_contact_center",
    "name": "Service Cloud — Contact Center Modernization",
    "products": ["Service Cloud", "Agentforce Service"],
    "status": "Suggested",
    "progress": 54
  },
  {
    "id": "data_360_ai_readiness",
    "name": "Data 360 — AI Readiness",
    "products": ["Data 360", "Agentforce"],
    "status": "Needs Review",
    "progress": 71
  },
  {
    "id": "agentforce_sales_automation",
    "name": "Agentforce — Sales Agent Automation",
    "products": ["Agentforce", "Sales Cloud"],
    "status": "Suggested",
    "progress": 49
  },
  {
    "id": "mulesoft_integration_modernization",
    "name": "MuleSoft — Integration Modernization",
    "products": ["MuleSoft", "Data 360"],
    "status": "Needs Review",
    "progress": 58
  }
]
```

### Ontology rows

```json
[
  {
    "id": "persona_data_leader",
    "category": "Buyer Persona",
    "value": "Data Leader",
    "description": "Owns data platforms, governance, customer profiles, and AI readiness.",
    "motionIds": ["data_360_ai_readiness"],
    "products": ["Data 360"],
    "personaSegment": "CDO, VP Data, Head of Data Platform",
    "confidence": "High",
    "claimType": "Inferred",
    "sourceUrl": "https://salesforce.example/products/data-360",
    "pageType": "Product",
    "evidenceSnippet": "Unify customer data and activate trusted profiles across every interaction.",
    "recommendedAgentUse": "Use for targeting data and IT leaders in AI readiness or customer data initiatives.",
    "status": "Suggested",
    "priority": "High"
  },
  {
    "id": "pain_fragmented_customer_data",
    "category": "Pain Point",
    "value": "Fragmented customer data",
    "description": "Customer data lives across disconnected apps, warehouses, and channels, making personalization and AI difficult.",
    "motionIds": ["data_360_ai_readiness", "agentforce_sales_automation"],
    "products": ["Data 360", "Agentforce"],
    "personaSegment": "CDO, CIO, Marketing Ops, AI Transformation Leader",
    "confidence": "High",
    "claimType": "Stated",
    "sourceUrl": "https://salesforce.example/solutions/customer-data",
    "pageType": "Solution",
    "evidenceSnippet": "Bring together fragmented customer data into a trusted profile for AI and personalization.",
    "recommendedAgentUse": "Core wedge for Data 360 and Agentforce conversations when account shows AI or personalization signals.",
    "status": "Approved",
    "priority": "High"
  },
  {
    "id": "value_trusted_profiles_for_ai",
    "category": "Value Proposition",
    "value": "Trusted customer profiles for AI",
    "description": "Unify and govern customer data so AI agents and teams can act on trusted context.",
    "motionIds": ["data_360_ai_readiness", "agentforce_sales_automation"],
    "products": ["Data 360", "Agentforce"],
    "personaSegment": "CDO, CIO, AI Transformation Leader",
    "confidence": "High",
    "claimType": "Stated",
    "sourceUrl": "https://salesforce.example/products/data-360-ai",
    "pageType": "Product",
    "evidenceSnippet": "Ground AI in trusted customer data across Salesforce.",
    "recommendedAgentUse": "Use as the main value prop for AI readiness signals.",
    "status": "Suggested",
    "priority": "High"
  },
  {
    "id": "signal_new_cdo",
    "category": "Signal Playbook",
    "value": "New CDO hired",
    "description": "A new data leader often has a mandate to modernize data architecture and prove AI readiness.",
    "motionIds": ["data_360_ai_readiness"],
    "products": ["Data 360"],
    "personaSegment": "CDO, VP Data",
    "confidence": "Medium",
    "claimType": "Inferred",
    "sourceUrl": "https://salesforce.example/blog/data-leaders-ai-readiness",
    "pageType": "Blog / Thought Leadership",
    "evidenceSnippet": "Data leaders are under pressure to prepare enterprise data for AI adoption.",
    "recommendedAgentUse": "Wake the agent when a target account hires a senior data leader; draft messaging around trusted customer data for AI.",
    "status": "Needs Admin Review",
    "priority": "High",
    "ttlDays": 90
  },
  {
    "id": "persona_sales_leader",
    "category": "Buyer Persona",
    "value": "Sales Leader",
    "description": "Owns pipeline generation, seller productivity, forecasting, and revenue execution.",
    "motionIds": ["sales_cloud_rep_productivity", "agentforce_sales_automation"],
    "products": ["Sales Cloud", "Agentforce Sales"],
    "personaSegment": "CRO, VP Sales, Sales Operations",
    "confidence": "High",
    "claimType": "Inferred",
    "sourceUrl": "https://salesforce.example/products/sales-cloud",
    "pageType": "Product",
    "evidenceSnippet": "Help sellers sell faster with AI, automation, and connected customer data.",
    "recommendedAgentUse": "Use to target sales executives and sales ops leaders.",
    "status": "Approved",
    "priority": "High"
  },
  {
    "id": "pain_manual_sales_admin",
    "category": "Pain Point",
    "value": "Manual sales administration",
    "description": "Reps spend too much time updating CRM, preparing follow-ups, and managing tasks across systems.",
    "motionIds": ["sales_cloud_rep_productivity", "agentforce_sales_automation"],
    "products": ["Sales Cloud", "Agentforce Sales"],
    "personaSegment": "Sales Leader, RevOps, AE",
    "confidence": "High",
    "claimType": "Stated",
    "sourceUrl": "https://salesforce.example/products/sales-cloud/automation",
    "pageType": "Product",
    "evidenceSnippet": "Automate seller workflows and keep reps focused on selling.",
    "recommendedAgentUse": "Use in messaging around productivity, CRM hygiene, and sales execution.",
    "status": "Suggested",
    "priority": "High"
  },
  {
    "id": "message_less_admin_more_selling",
    "category": "Messaging Angle",
    "value": "Less admin, more selling",
    "description": "Position AI and automation as removing operating work around the seller, not replacing the seller.",
    "motionIds": ["sales_cloud_rep_productivity", "agentforce_sales_automation"],
    "products": ["Sales Cloud", "Agentforce Sales"],
    "personaSegment": "CRO, VP Sales, RevOps",
    "confidence": "High",
    "claimType": "Inferred",
    "sourceUrl": "https://salesforce.example/products/agentforce-sales",
    "pageType": "Product",
    "evidenceSnippet": "AI agents help sales teams handle repetitive work and surface next best actions.",
    "recommendedAgentUse": "Use as an approved opening angle for sales productivity campaigns.",
    "status": "Suggested",
    "priority": "High"
  },
  {
    "id": "guardrail_no_self_driving_claim",
    "category": "Messaging Guardrail",
    "value": "Do not claim the agent fully replaces reps",
    "description": "Messaging should say the agent assists, drafts, recommends, and tees up actions. It should not imply autonomous negotiation, pricing, or customer relationship ownership.",
    "motionIds": ["agentforce_sales_automation", "sales_cloud_rep_productivity"],
    "products": ["Agentforce", "Sales Cloud"],
    "personaSegment": "All customer-facing messaging",
    "confidence": "High",
    "claimType": "Stated",
    "sourceUrl": "https://salesforce.example/trust/agentforce-guidelines",
    "pageType": "Security / Compliance",
    "evidenceSnippet": "AI agents operate within customer-defined permissions and human approval workflows.",
    "recommendedAgentUse": "Lock this as a customer-facing messaging guardrail.",
    "status": "Locked",
    "priority": "High"
  },
  {
    "id": "persona_service_leader",
    "category": "Buyer Persona",
    "value": "Service Leader",
    "description": "Owns service operations, contact center performance, case resolution, and customer experience.",
    "motionIds": ["service_cloud_contact_center"],
    "products": ["Service Cloud", "Agentforce Service"],
    "personaSegment": "VP Support, VP Customer Experience, Contact Center Leader",
    "confidence": "High",
    "claimType": "Inferred",
    "sourceUrl": "https://salesforce.example/products/service-cloud",
    "pageType": "Product",
    "evidenceSnippet": "Improve service productivity and resolve customer issues faster with AI-assisted workflows.",
    "recommendedAgentUse": "Use for support transformation and contact center modernization targeting.",
    "status": "Suggested",
    "priority": "High"
  },
  {
    "id": "pain_slow_case_resolution",
    "category": "Pain Point",
    "value": "Slow case resolution",
    "description": "Support teams struggle to resolve issues quickly when agents lack context, knowledge, or automation.",
    "motionIds": ["service_cloud_contact_center"],
    "products": ["Service Cloud", "Agentforce Service"],
    "personaSegment": "Service Leader, Contact Center Ops",
    "confidence": "High",
    "claimType": "Stated",
    "sourceUrl": "https://salesforce.example/products/service-cloud/ai-service",
    "pageType": "Product",
    "evidenceSnippet": "Give service teams AI-powered answers, next best actions, and connected customer context.",
    "recommendedAgentUse": "Use when account has contact center modernization, support cost, or service quality signals.",
    "status": "Suggested",
    "priority": "High"
  },
  {
    "id": "case_study_saks",
    "category": "Case Study",
    "value": "Saks personalization story",
    "description": "Sample retail case study showing personalization powered by customer data and AI.",
    "motionIds": ["data_360_ai_readiness"],
    "products": ["Data 360", "Agentforce"],
    "personaSegment": "Retail CMO, CIO, Customer Experience Leader",
    "confidence": "Medium",
    "claimType": "Stated",
    "sourceUrl": "https://salesforce.example/customers/saks",
    "pageType": "Case Study",
    "evidenceSnippet": "Saks uses customer data and AI to personalize luxury shopping experiences.",
    "recommendedAgentUse": "Use as proof for retail personalization and unified customer data messaging.",
    "status": "Needs Admin Review",
    "priority": "Medium"
  },
  {
    "id": "signal_ma_integration",
    "category": "Signal Playbook",
    "value": "M&A event",
    "description": "Mergers and acquisitions create urgency around system integration, data consolidation, and process standardization.",
    "motionIds": ["mulesoft_integration_modernization", "data_360_ai_readiness"],
    "products": ["MuleSoft", "Data 360"],
    "personaSegment": "CIO, Enterprise Architect, VP Data",
    "confidence": "Medium",
    "claimType": "Inferred",
    "sourceUrl": "https://salesforce.example/solutions/integration-modernization",
    "pageType": "Solution",
    "evidenceSnippet": "Connect data and systems across the enterprise to create integrated experiences.",
    "recommendedAgentUse": "Wake agent on M&A news; draft messaging around data and system consolidation.",
    "status": "Suggested",
    "priority": "High",
    "ttlDays": 120
  }
]
```

---

## 12. Design Details That Matter

### Make complexity parseable
Do not show 12 columns by default in every tab. Use simplified tab-specific columns. Put the full metadata in the right drawer.

### Show relationships visually
In the row drawer, show related entities as pills:
- Products
- Personas
- Pain points
- Signals
- Proof points

### Emphasize review state
The user should always know:
- What is approved
- What needs review
- What is rejected
- What is locked
- What will be published

### Separate confidence from status
Confidence is the system’s belief.
Status is the human’s decision.

A row can be low-confidence but approved after human review.
A row can be high-confidence but rejected because it is strategically wrong.

### Make source evidence first-class
Every row detail should show source URL and evidence snippet. The manager should trust why the system suggested something.

---

## 13. Empty / Error / Edge States

Include at least light UI states for:
- No rows in a filtered view
- Low-confidence rows needing review
- Locked row edit warning
- Publish attempt when no rows approved
- Merge duplicate modal

Merge modal example:
- Show two similar pain points side by side:
  - “Fragmented customer data”
  - “Disconnected customer profiles”
- Let user select canonical name and description.
- Button: **Merge rows**

---

## 14. Acceptance Criteria

The prototype is successful if a user can:
- Land on the GTM Ontology Review dashboard.
- Understand that data is organized by GTM motion, not one giant table.
- Open Data 360 — AI Readiness.
- Navigate across the five review tabs.
- Open a row and inspect source evidence.
- Edit a buyer persona.
- Approve a pain point.
- Reject a bad signal.
- Lock a messaging guardrail.
- Merge duplicates.
- Publish approved context to the sales agent.
- See a clear success state after publishing.

---

## 15. Key Product Principle

Do not design this as a spreadsheet first.

Design it as a **manager review workspace for extracted GTM knowledge**.

Tables are the work surface, but the core UX is:

> Motion → Review category → Inspect row → Edit / approve / reject → Publish to agent.


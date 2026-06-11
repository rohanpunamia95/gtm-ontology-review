# Salesforce Design System

> AI-native redesign layer on top of Salesforce's Lightning Design System (SLDS): **70% familiar SLDS** (trust, density, enterprise ergonomics) + **30% Agentforce era** (dark cosmic surfaces, violet AI accents, conversational patterns).

## Company & product context

Salesforce is the enterprise CRM platform. Two product surfaces dominate this system:

1. **Lightning Experience (CRM)** — light, dense, record-centric. Sales reps live here all day: opportunity lists, record pages, dashboards. Optimize for scanability and trust.
2. **Agentforce** — the AI-agent layer. Dark navy (`--sf-blue-900`) surfaces with violet/teal accents, glowing agent identity marks, chat-first interactions. This is the "cutting edge" 30%.

## Voice & content fundamentals

- **Sentence case everywhere** — buttons, titles, labels ("New opportunity", never "New Opportunity").
- Verb-forward action labels: "Save", "New lead", "Ask Agentforce".
- Empathetic, actionable empty/error states — never raw error codes.
- Agent copy is conversational and acknowledges uncertainty ("I noticed…", "Want me to…?").
- **No emoji.** Iconography is Lucide (stroke icons) — see Iconography below.
- Numbers in data UIs use tabular figures and explicit units ($95,000 · 74%).

## Visual foundations

### Color
- `--sf-blue-500` `#0176D3` is THE brand anchor: primary buttons, links, selected states, focus.
- `--sf-blue-900` `#032D60` is the dark base for nav and all Agentforce surfaces.
- Neutrals carry the interface; gray-100 page background, white cards, gray-200 borders.
- AI/agent features always signal with violet `--sf-violet-500` (never blue) + teal `--sf-teal-500` for live data.
- Status: success green `#2E844A`, warning orange `#DD7A01`, error red `#BA0517` — each with a 100 tint for fills.
- On dark Agentforce surfaces use the `--color-*-agent*` role tokens (white at 5–18% alpha), never gray scale.

### Type
- One family: **Plus Jakarta Sans** (substitute for proprietary Salesforce Sans — swap when licensed). `JetBrains Mono` for code/data.
- Base size 14px (
dense enterprise UI). Semantic styles via `font:` shorthand tokens: `--type-h1`…`--type-h6`, `--type-body*`, `--type-label*`, `--type-overline`, `--type-code`.
- Overlines are uppercase + `--tracking-wider`, gray-500/600.

### Space, radius, elevation
- 4px grid (`--space-1`…`--space-24`). Nav rail 48px, Agentforce nav 52px.
- Radius: 4px inputs/buttons · 8px cards/modals · 12px Agentforce panels · full pills.
- Shadows `--shadow-1`…`--shadow-4` on light; on dark, glow with `--shadow-agent-glow` (violet) instead of black shadows.
- Motion: 100/200/350ms with `--ease-standard`; `--ease-spring` for agent appearances.

### Iconography
- **Lucide** stroke icons via UMD script (`https://unpkg.com/lucide@0.456.0/dist/umd/lucide.min.js`) wrapped by the `Icon` component (`name` in kebab-case, 2px stroke).
- 15–17px inside controls, 18–20px standalone. AI features use `sparkles`.
- Logos in `assets/logos/` are **stylized placeholder approximations** (hand-drawn SVG), not official marks — swap before production use.

## Components

All components live in `components/<group>/` and are reachable from `window.SalesforceDesignSystem_585a3e` (load `_ds_bundle.js`; React UMD + Lucide UMD first).

| Group | Components |
|---|---|
| core | Icon, Button, IconButton, Badge, Tag, Avatar, Card, Spinner |
| forms | Input, Textarea, Select, Checkbox, RadioGroup, Switch |
| navigation | Tabs, Breadcrumb, Path (SLDS chevron stage tracker) |
| feedback | Tooltip, Toast, Dialog, ProgressBar |
| agentforce | AgentAvatar, AgentBadge, AgentCard, ChatBubble |

Usage notes per component live in sibling `.prompt.md` files (Button, Input, Tabs, Toast, AgentBadge).

## Composition rules

- CRM screens: gray-100 page, white cards with `--shadow-1`, 16px card padding, 12px gaps.
- Record pages lead with a compact highlights panel (entity icon + name + key fields) and the `Path` component for stage.
- Agentforce screens: `--sf-blue-900` base with radial violet/teal glows (see `agentforce.card.html` body background), `surface-agent` panels, white-alpha borders.
- Never mix: violet = AI only; brand blue = standard actions.
- Density: 32px control height default; 48px top nav; tables row-height 40px.

## File map

- `styles.css` — entry point importing `tokens/*.css`
- `tokens/` — colors, typography, spacing, elevation, fonts, base
- `components/<group>/` — JSX + d.ts + group card
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand)
- `assets/logos/` — placeholder Salesforce + Agentforce marks

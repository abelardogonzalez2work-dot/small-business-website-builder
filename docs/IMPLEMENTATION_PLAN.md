# Implementation Plan

## Working Rule

Implement the smallest reliable slice that satisfies an approved Figma task. Do not combine phases to make the repository look more complete.

Every implementation task must include its compact and expanded behavior, relevant error and recovery states, accessibility acceptance, tests, documentation updates, and the full quality check.

## Phase 0 - Repository Foundation

Status: completed on July 21, 2026.

Scope:

- Repository rules and documentation
- Next.js App Router with strict TypeScript
- Tailwind CSS, ESLint, Prettier, and npm
- `src` directory and import alias
- Mobile-first foundation page
- Foundation smoke tests
- No services, secrets, databases, accounts, or deployment

Approval gate:

- The project installs and runs.
- Formatting, linting, type-checking, tests, and production build pass.
- The working tree contains no feature prototype or provider wiring.
- Product, design, data, analytics, and security contracts are documented.

Validation completed with `npm run check`: formatting, ESLint, strict TypeScript,
three foundation tests, and the optimized Next.js build all passed.

## Phase 1 - Design Foundations And Application Shell

Status: not started.

Proposed scope:

- Translate approved Figma color, typography, spacing, radius, elevation, focus, and motion rules into reusable tokens.
- Build only the responsive owner-application shell.
- Implement compact top-bar behavior, tablet rail behavior, expanded persistent navigation, and an empty contextual-inspector region.
- Add accessible skip navigation, focus behavior, and layout tests.

Explicit exclusions:

- Account access
- Onboarding
- Business data
- Editor forms
- Preview or publishing behavior
- Backend routes
- External providers

Approval gate:

- Compact, portrait tablet, landscape tablet, and expanded shell behavior matches Figma.
- Navigation information architecture is approved.
- No product feature has been inferred to fill empty shell regions.

## Phase 2 - Account Access And Onboarding Shell

Status: not started and not authorized.

Future scope follows Figma pages `19 Screens - Account Access` and `20 Screens - Onboarding & First Publish`. Backend authentication remains a separate security-gated task.

## Phase 3 - Owner Home And Page Editing

Status: not started and not authorized.

Future scope follows Figma pages `21 Screens - Owner Home` through `24 Screens - Media & Style`. Work must preserve the live page in view and reveal only task-relevant controls.

## Phase 4 - Preview, Saved/Live Versions, And Public Page

Status: not started and not authorized.

Future scope follows Figma pages `25 Screens - Preview & Publish` and `26 Screens - Public Page`. Saved and live data separation, authorization, page-name rules, and rollback must be approved before implementation.

## Phase 5 - Business Systems

Status: not started and not authorized.

Future work may include approved authentication, database, media, billing, email, analytics, monitoring, DNS, and support integrations. Each service requires explicit authorization, environment ownership, security review, test strategy, and rollback plan.

## Phase 6 - Hardening And Private Beta

Status: not started and not authorized.

Future work includes accessibility review, security review, rate limits, backup restoration, performance, browser/device QA, legal pages, assisted onboarding, and real-user observation.

## Exact Next Task

Give Codex this task after approving the foundation:

> Implement only the SB Page design foundations and responsive owner-application shell from Figma pages 01, 02, and 12. Create reusable design tokens and accessible compact, tablet, and expanded shell layouts. Do not add authentication, onboarding, business data, editor features, backend routes, vendor integrations, billing, or a public business page. Add focused tests, update the documentation, and run all checks.

## Source

This plan follows the Figma implementation sequence and approval gates reviewed on July 21, 2026, while keeping the current user-requested milestone narrower than the product roadmap.

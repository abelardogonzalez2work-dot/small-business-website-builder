# Decisions

This file records decisions that future work should preserve. A changed decision must include the reason, impact, and migration plan.

## Accepted

### D-001 - Guided business-page product

Status: accepted

SB Page is a guided business-page workspace for nontechnical small-business owners. It is not a general-purpose website builder or freeform canvas.

Reason: the product promise is a credible result with minimal owner decision-making.

### D-002 - Next.js foundation

Status: accepted

Use Next.js App Router, React, strict TypeScript, Tailwind CSS, ESLint, npm, and a `src` directory.

Reason: this is the user-requested stack and supports the documented responsive owner app and cacheable public pages.

### D-003 - Mobile-first, page-first interaction

Status: accepted

Establish task and content order at compact width. Keep the page result visible when practical. Move navigation and inspectors as space changes without changing the information architecture.

Reason: mobile is the primary customer context, and visible results increase editing confidence.

### D-004 - Structured editing over drag and drop

Status: accepted

Owners edit controlled business fields and sections. They do not position elements freely.

Reason: structured editing protects quality, accessibility, and responsive behavior.

### D-005 - Saved and live content remain separate

Status: accepted

Autosave updates private saved work. Only explicit confirmation creates or selects a live immutable version.

Reason: owners must trust that incomplete work will not silently change the public page.

### D-006 - External actions remain external in V1

Status: accepted

Booking, ordering, shopping, phone, text, email, maps, social, and reviews point to the owner's existing destinations.

Reason: SB Page should improve presentation without replacing specialized customer tools.

### D-007 - No external services in the foundation milestone

Status: accepted

Do not install or configure Supabase, Stripe, Resend, PostHog, Sentry, Better Stack, Cloudflare, Crisp, or alternatives.

Reason: architecture, ownership, privacy, security, and product behavior must be approved before accounts and provider code exist.

### D-008 - Minimal foundation testing

Status: accepted

Use Node's built-in test runner for repository-shape smoke tests during setup. Add a product-focused testing tool only when a real interaction requires it.

Reason: this gives the repository a working test command without adding a speculative dependency.

### D-009 - Prior prototype is reference history only

Status: accepted

The earlier Pagewell feature prototype is removed from the current working tree and preserved only on the local `codex/pre-sb-page-history` archive branch. It is not part of the SB Page `main` history.

Reason: the user requested an initial setup without the full application, and the prior prototype was created before the approved SB Page screen and delivery contracts were reviewed.

### D-010 - Canonical GitHub repository

Status: accepted

Use `https://github.com/abelardogonzalez2work-dot/small-business-website-builder` as the canonical GitHub repository. The local `main` branch tracks `origin/main` over HTTPS.

Reason: the repository owner confirmed this destination and authorized the local GitHub connection.

## Pending Explicit Approval

### P-002 - Route naming and application-shell navigation

Figma defines route families and navigation concepts, but the exact URL map should be approved during the shell task.

### P-003 - Brand typeface

Figma references SF Pro. The production web typeface and fallback strategy require licensing and performance approval.

### P-004 - Managed vendor adoption

Figma recommends a managed stack, but no provider account, SDK, database, or deployment is authorized by the foundation task.

### P-005 - Billing launch policy

Figma proposes one paid plan, annual-first presentation, and a trial. Pricing, trial timing, reminders, cancellation wording, taxes, and access grace periods must be reconfirmed before billing implementation.

## Decision Template

Future entries should include:

- Identifier and title
- Status
- Date
- Context
- Decision
- Reason
- Alternatives considered
- Consequences
- Migration or reversal trigger

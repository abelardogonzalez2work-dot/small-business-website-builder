# SB Page Repository Instructions

## Product Context

SB Page helps nontechnical small-business owners create a credible public page without learning web design. The product uses guided, structured editing rather than a blank canvas.

The Figma file is the product and design source of truth:

- https://www.figma.com/design/4Yw2CAgWYe2ZlqHP9glX4U/SB-Page

Read the relevant Figma page and the documents in `docs/` before changing product behavior.

## Current Milestone

The repository is in foundation setup. Do not build product features until the next task explicitly authorizes them.

Do not connect Supabase, Stripe, Resend, PostHog, Sentry, Better Stack, Cloudflare, Crisp, or any replacement service during this milestone. Do not create production resources, databases, accounts, API keys, or secrets.

## Engineering Rules

1. Use Next.js App Router, TypeScript, Tailwind CSS, npm, and the `src` directory.
2. Keep TypeScript strict and avoid `any`.
3. Build mobile-first. Preserve the same information architecture and capabilities at every width.
4. Keep the owner application quiet so the business page remains the expressive object.
5. Use business language in customer-facing copy. Avoid technical terms such as CMS, schema, breakpoint, and DNS.
6. Keep saved work separate from live content in every future design and data decision.
7. Prefer external customer destinations over native booking, ordering, messaging, or commerce in V1.
8. Do not invent features, dependencies, integrations, or product policy.
9. Do not add a large dependency without recording the reason in `docs/DECISIONS.md`.
10. Update relevant documentation and `docs/CHANGELOG.md` with meaningful changes.
11. Keep secrets server-only and never commit `.env` files other than `.env.example`.
12. Do not change unrelated files or replace working architecture without a documented reason.

## Required Checks

Before completing any implementation task, run:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

Use `npm run check` to run the full sequence.

## Documentation Map

- `docs/PRODUCT_SCOPE.md`: what SB Page does and does not do
- `docs/DESIGN_PRINCIPLES.md`: interaction, visual, responsive, and accessibility rules
- `docs/ARCHITECTURE.md`: current technical structure and future boundaries
- `docs/DATA_MODEL.md`: conceptual data contract, not a database schema
- `docs/USER_FLOWS.md`: owner and visitor journeys
- `docs/ANALYTICS_EVENTS.md`: planned event contract; no analytics SDK is installed
- `docs/SECURITY.md`: current safeguards and future security gates
- `docs/IMPLEMENTATION_PLAN.md`: sequenced work and approval gates
- `docs/DECISIONS.md`: accepted and pending decisions
- `docs/CHANGELOG.md`: meaningful repository changes

# SB Page

SB Page is a guided product for nontechnical small-business owners who need a credible public page without learning how websites work.

This repository currently contains only the technical foundation. It does not contain the full product, real accounts, a database, payments, email delivery, analytics, monitoring, customer support, or production infrastructure.

## What Exists Today

- A production-oriented Next.js App Router project
- TypeScript in strict mode
- Tailwind CSS
- ESLint and Prettier
- A mobile-first placeholder page
- A small setup test suite
- Product, design, architecture, data, flow, analytics, and security documentation

The product screens shown in Figma are documented but intentionally not implemented yet.

## Source Of Truth

Product and design decisions come from the [SB Page Figma file](https://www.figma.com/design/4Yw2CAgWYe2ZlqHP9glX4U/SB-Page) and the documents in [`docs/`](docs/).

When code, documentation, and Figma disagree, stop and resolve the difference before continuing.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

No environment variables are required for the foundation phase.

## Start The App

Open a terminal in this folder, then run:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

Stop the local app by pressing `Control + C` in the terminal.

## Quality Checks

Run every check with one command:

```bash
npm run check
```

The individual commands are:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

`npm run build` creates the same optimized application bundle used for a production release. It does not publish anything.

## Available Commands

| Command             | Plain-English purpose                            |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Starts the local development app                 |
| `npm run build`     | Creates an optimized production build            |
| `npm run start`     | Runs an existing production build locally        |
| `npm run lint`      | Finds suspicious or inconsistent code            |
| `npm run typecheck` | Checks that TypeScript values are used correctly |
| `npm run test`      | Runs automated setup tests                       |
| `npm run format`    | Formats supported files                          |
| `npm run check`     | Runs every required check in order               |

## Repository Structure

```text
.
|-- src/
|   `-- app/                  Next.js App Router entry point
|       |-- globals.css       Tailwind import and foundation styles
|       |-- layout.tsx        Shared document shell and metadata
|       `-- page.tsx          Temporary foundation page
|-- docs/                     Product and engineering decisions
|-- tests/                    Automated foundation checks
|-- public/                   Future local public assets
|-- AGENTS.md                 Rules for future Codex work
|-- .env.example              Environment-variable documentation
|-- eslint.config.mjs         Code-quality rules
|-- next.config.ts            Next.js settings
|-- postcss.config.mjs        Tailwind CSS processing
|-- tsconfig.json             Strict TypeScript settings
|-- package.json              Dependencies and npm commands
`-- package-lock.json         Exact dependency versions
```

Feature folders will be added only when an approved implementation task needs them. Empty architecture is not created in advance.

## Current Route

| Route | Purpose                                                          |
| ----- | ---------------------------------------------------------------- |
| `/`   | Temporary foundation screen proving the app runs and styles load |

No sign-in, onboarding, owner workspace, editor, billing, or public business routes exist yet.

## Design And Accessibility Baseline

- Mobile is the primary design context.
- Essential actions must work with touch, keyboard, and pointer input.
- Frequent touch targets should be at least 44 by 44 pixels.
- Focus must remain visible.
- Essential text and controls must meet WCAG AA contrast.
- Reduced-motion preferences must be respected.
- Responsive layouts should reflow before using horizontal scrolling.

See [`docs/DESIGN_PRINCIPLES.md`](docs/DESIGN_PRINCIPLES.md) for the full contract.

## Intentionally Not Connected

The following services appear in future planning but are not installed or configured:

- Supabase
- Stripe
- Resend
- PostHog
- Sentry
- Better Stack
- Cloudflare
- Crisp

There are no production accounts, databases, deployments, or secrets associated with this setup.

## Next Approved Task

The recommended next task is recorded in [`docs/IMPLEMENTATION_PLAN.md`](docs/IMPLEMENTATION_PLAN.md). It creates the reusable visual tokens and responsive application shell only; it does not add authentication, a database, billing, or the full product.

# Architecture

## Current State

The repository currently contains a minimal Next.js application and no backend or third-party integration.

```text
Browser
  -> Next.js App Router
      -> Root layout
      -> Foundation page
      -> Tailwind CSS and local styles
```

There are no API routes, authentication sessions, databases, file uploads, payments, analytics, monitoring, support widgets, or deployments.

## Current Technology Choices

- Next.js App Router
- React
- Strict TypeScript
- Tailwind CSS through PostCSS
- ESLint with Next.js core-web-vitals and TypeScript rules
- Prettier
- Node's built-in test runner for foundation checks
- npm and a committed lockfile
- `src` directory with the `@/` import alias

## Repository Boundaries

```text
src/app/        Current application routes and global styles
docs/           Product and engineering contracts
tests/          Automated checks
public/         Local public assets when approved
```

Feature folders will be created when a verified task requires them. The project should not accumulate speculative abstractions or empty layers.

## Intended Product Architecture

The Figma delivery contract proposes one multi-tenant application, not one deployment per customer.

The future owner application will edit private saved content. An explicit make-live action will validate that content and create an immutable live version. The public route will read only the live version.

```text
Owner workspace -> saved page version -> preview
                                      -> explicit make-live action
                                      -> immutable live version -> public page
```

This relationship is an architectural invariant even before a database is chosen.

## Planned Route Families

These are design contracts, not current routes:

- Marketing and pricing
- Account access and recovery
- Guided onboarding
- Owner Home
- Page editing
- Offers, links, and business details
- Media and style
- Preview and publishing
- Billing settings
- Public business page
- Permissioned operator tools

Route names and URL structure will be approved during the application-shell task. They should not be inferred from the earlier prototype.

## Future Service Boundaries

Figma currently recommends managed services for authentication, database, media, payments, email, analytics, errors, uptime, DNS, and support. This repository does not adopt or configure those vendors yet.

When implementation is approved, each external provider must sit behind a small server-only boundary. Browser code must not receive secret credentials. Business authorization must be enforced on the server, not trusted from a browser-provided business ID.

## Data Delivery Principles

- Editing and preview read saved content.
- Public pages read only an immutable live version.
- Making content live is explicit and validated.
- Page names are normalized, reserved atomically, and protected from unsafe words.
- Renamed live pages preserve controlled redirects.
- Public pages are cacheable and revalidate only after a new live version.
- Media is constrained, processed, and served in optimized sizes.
- Sensitive operator actions create an audit event.

## Dependency Policy

Add a package only when the platform or existing code cannot meet a demonstrated requirement cleanly. Record significant dependency decisions in `DECISIONS.md`, including the need, alternatives, and removal or migration trigger.

## Approval Gates

Feature-depth coding must not begin until these contracts are explicitly approved:

1. Saved and live version separation
2. Tenant ownership and authorization
3. Public page-name rules
4. Route and application-shell structure
5. Environment and secret ownership

Provider-specific code requires a separate task even after the architecture is accepted.

## Source

This document summarizes Figma pages `27 Implementation Plan` and `30 Data & Delivery Contract` as reviewed on July 21, 2026.

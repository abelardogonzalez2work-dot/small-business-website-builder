# Security

## Current Foundation Safeguards

- No backend or production infrastructure exists.
- No external service SDK is installed.
- No API key, token, password, or connection string is required.
- `.env` files are ignored, while `.env.example` contains documentation only.
- The application uses strict TypeScript and framework linting.
- The dependency lockfile records exact installed versions.
- The Next.js powered-by response header is disabled.
- Required quality checks run before a task is complete.

These safeguards reduce foundation risk; they are not a complete application security program.

## Future Non-Negotiables

### Tenant access

Private data must be authorized by membership and business ownership using server-side checks. Never trust a business ID supplied by the browser. Automated tests must prove one owner cannot read or change another owner's saved or live page.

### Saved and live isolation

Public routes read only validated live versions. Failed saves or make-live requests must never partially change the public page.

### Page names

Normalize and validate names server-side. Enforce uniqueness atomically, reserve unsafe words, preserve controlled redirects, and provide an operator process for impersonation, trademarks, scams, and harmful content.

### Uploads

Enforce file type, byte size, image dimensions, rate limits, and ownership. Do not trust extensions or filenames. Re-encode supported images, handle metadata intentionally, prevent executable content, and preserve the previous image when processing fails.

### Authentication and sessions

Use secure provider defaults, server-validated sessions, safe redirects, rate limits, and account-recovery protections. Do not reveal whether private account details exist beyond approved access copy.

### Billing

Future webhook handling must verify signatures and be idempotent. Retries cannot double-apply state. Failed payment or cancellation must not immediately destroy customer content.

### Privacy

Collect only required data. Document retention, deletion, export, subprocessors, support access, analytics, cookies, and customer rights before private beta.

### Operator access

Internal support tools are permissioned, limited, and audited. Operators do not receive full payment details or direct database access for routine support.

### Recovery

Future production systems require automatic backups, a documented rollback process, and scheduled restore tests. A backup is not trusted until restoration has been completed and timed.

## Required Security Gate Before Backend Work

Before creating API routes, database migrations, authentication, uploads, or billing:

1. Write a threat model.
2. Approve tenant and membership rules.
3. Approve server/client boundaries.
4. Approve environment ownership and secret rotation.
5. Define rate limits and abuse response.
6. Define data retention, export, and deletion.
7. Define audit events for sensitive actions.
8. Create negative authorization tests.

## Incident Principle

Errors shown to owners must state what was preserved and provide a recovery action. Internal diagnostics may contain technical detail, but they must not expose secrets or unnecessary customer content.

## Source

This document summarizes Figma pages `27 Implementation Plan`, `29 Experience Requirements`, and `30 Data & Delivery Contract` as reviewed on July 21, 2026.

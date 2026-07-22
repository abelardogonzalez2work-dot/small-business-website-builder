# Data Model

## Status

This is a conceptual contract from Figma. It is not a database schema, migration, or provider configuration. No database exists in this repository.

## Core Objects

### User

An authenticated person.

Planned fields: identifier, email, name, authentication provider, and creation time.

### Business

The customer account and future billing boundary.

Planned fields: identifier, owner user, name, status, and a future billing-customer reference.

### Membership

The permission relationship between a person and a business. V1 has one role: owner. Keeping this relationship separate allows additional approved roles later without changing ownership rules.

### Page

The editable page configuration for a business.

Planned relationships: business, page name, template, current saved version, and current live version.

### PageVersion

An immutable snapshot of content and theme data.

Planned states:

- Saved: current owner work
- Live: content available to public visitors
- Archive: a prior snapshot retained for recovery or audit

### MediaAsset

A constrained and processed image owned by a business.

Planned fields: storage key, dimensions, processing status, alt text, and sort order.

### Offer

A business item presented to customers. The owner chooses the public language that fits the business, such as service, menu item, product, or package.

Planned fields: type, name, description, optional price text, visibility, and sort order.

### Link

An external customer destination or direct action.

Planned fields: type, label, URL or value, visibility, and sort order.

### Subscription

A future local read model of the payment provider's subscription state. It is not implemented.

Planned fields: provider subscription reference, status, trial end, and billing period end.

### PageNameRedirect

A controlled redirect from a previous public page name to the current one.

Planned fields: old name, new name, page, and optional expiration.

### AuditEvent

A record of operator and security-sensitive account actions.

Planned fields: actor, business, action, limited metadata, and creation time.

## Relationships

```text
User -> Membership -> Business -> Page
                              |-> MediaAsset
                              |-> Subscription

Page -> saved PageVersion
     -> live PageVersion
     -> Offer
     -> Link
     -> PageNameRedirect
```

## Invariants

1. A public page never reads saved-only content.
2. Making content live creates a validated immutable version.
3. A business boundary controls access to all private content.
4. Browser-provided business identifiers are never sufficient authorization.
5. Page names are unique, normalized, and claimed atomically.
6. Optional empty sections do not render on the public page.
7. Template changes do not delete business content.
8. External actions retain their real destination rather than becoming native SB Page services.
9. Billing and ownership remain separate from page content.
10. Sensitive support actions are auditable.

## Decisions Deferred Until Database Work

- Exact identifiers and column types
- JSON versus relational storage for each content area
- Version-retention duration
- Redirect expiration policy
- Deletion and export implementation
- Database indexes and row-level access policies
- Provider-specific field names

These must be decided through a schema-specific task and recorded in `DECISIONS.md` before migrations are written.

## Source

This document summarizes Figma page `30 Data & Delivery Contract` as reviewed on July 21, 2026.

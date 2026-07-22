# User Flows

## Actors

### Business owner

Creates and maintains the page. The owner may arrive with a valid session, no session, an unfinished setup, a recovery request, or a saved destination.

### Customer or visitor

Opens a public URL to understand the business and choose an external next action.

## Core Owner Journey

```text
Access -> Onboard -> First publish -> Owner Home -> Edit -> Publish changes
```

### 1. Access

The owner signs in, creates an account, uses an approved social sign-in method, or recovers access. An intended destination should survive access and recovery.

### 2. Adaptive onboarding

The owner provides the minimum required information, sees the page result, and may skip optional sections.

Required first decisions:

- Business name
- Headline
- Available public page name

Adaptive choices:

- Business type changes recommendations, not capabilities.
- Primary action may open a link, call, text, email, visit, or be omitted.
- Only the selected primary action requests its required destination.
- Location, service area, online-only status, hours, phone, offers, Gallery, and social content remain independent and optional.

The owner can save and leave. Returning continues at the exact unfinished requirement.

### 3. First publish

The owner reviews the exact draft and any required fixes. A clear confirmation creates the first live version. Failure leaves the saved work intact and the public page unchanged.

### 4. Owner Home

The owner sees what is live, whether saved changes exist, and one clear next task. This is not a dense analytics dashboard.

### 5. Edit

The owner opens the page-first workspace, selects visible content, and edits only the current context. Complex collections may use a focused manager while preserving page context.

### 6. Publish changes

The owner previews the exact saved version and explicitly replaces the public version. Autosave never silently updates the live page.

## Entry Routing

| Condition                   | Destination                                             |
| --------------------------- | ------------------------------------------------------- |
| Owner with valid session    | Intended task, Home, onboarding, preview, or editor     |
| Owner without session       | Access or recovery while preserving destination         |
| Owner with incomplete setup | First unfinished onboarding requirement                 |
| Visitor                     | Published snapshot or clear unpublished/not-found state |

## Public Visitor Journey

```text
Open public URL
  -> identify the business
  -> understand its offer
  -> review trust and logistics
  -> choose an external customer action
```

Draft content is never exposed to a visitor.

## Responsive Flow Rules

- Compact screens use a focused top bar and bottom contextual inspector.
- Portrait tablets preserve the compact task order and bottom inspector.
- Landscape tablets and expanded screens may move the same inspector to the right.
- Navigation destinations and task order remain recognizable at every width.
- No field or core action disappears because the screen is smaller.

## Recovery Requirements

Every future flow must specify what the user sees, what was preserved, and what to do next for:

- Loading
- Empty optional content
- Skipped content
- Invalid input
- Offline editing
- Failed save
- Interrupted upload
- Failed make-live request
- Expired access recovery
- Page-name conflict
- Destructive actions

## Current Implementation

None of these product flows is implemented in the foundation milestone. The only current route is the temporary `/` page.

## Source

This document summarizes Figma pages `18 Product Flow - Entry` through `26 Screens - Public Page`, plus responsive and experience requirements, as reviewed on July 21, 2026.

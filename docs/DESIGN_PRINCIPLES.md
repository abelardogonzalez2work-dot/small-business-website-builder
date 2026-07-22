# Design Principles

## Product Character

The owner application should feel quiet, familiar, and direct. The business page should carry the visual expression through the owner's image, words, and primary action.

Clarity comes from hierarchy and whitespace, not from adding more containers.

## Interaction Principles

1. Never make owners think like web designers.
2. Keep one primary decision on each screen.
3. Make the next action obvious.
4. Label optional information and allow owners to skip it.
5. Show saved, saving, offline, and failed states honestly.
6. Make publishing an explicit commitment.
7. Show the page result while the owner makes relevant choices.
8. Make cancel, undo, restore, and rollback behavior predictable.
9. Reveal advanced options only when the task requires them.
10. Use plain business language throughout the customer experience.

## Visual Foundations

### Color roles

- Ink: primary text and high-authority actions
- White: primary surface
- Warm canvas: working background
- Subtle surface: supporting groups
- Focus blue: focus, selection, guidance, and links only
- Brand subtle: selected background
- Success: confirmed state
- Danger: destructive or invalid state

Blue is not decoration. State must never be communicated by color alone.

### Typography

- Public-page headlines may use a confident display scale.
- Interface titles use a restrained semibold style.
- Controls use a clear medium weight.
- Explanatory text uses a highly readable regular style.
- Form values must remain at least 16 pixels on mobile.
- Letter spacing remains zero.

The current foundation uses the system sans-serif stack. Brand typography should not be selected until its licensing, performance, and Figma mapping are approved.

### Spacing and shape

Use a four-pixel rhythm. Frequent spacing values are 8, 12, 16, 20, 24, 32, 48, 64, and 80 pixels.

Cards and framed tools should use deliberate padding and restrained radii. Avoid nested cards, heavy shadows, excessive pills, and floating dashboard decoration.

### Elevation and motion

- Elevation 1: selected cards, previews, and quiet separation
- Elevation 2: bottom sheets, inspectors, and transient chrome
- Elevation 3: consequential confirmations and success dialogs

Motion should explain hierarchy or a state change. Reduced-motion preferences remove nonessential animation.

## Responsive Contract

Design the essential content and action order at the narrowest width, then progressively add working space.

Reference contexts from Figma are:

| Context          | Reference | Behavior                                                          |
| ---------------- | --------: | ----------------------------------------------------------------- |
| Compact          |    390 px | 20 px gutter, one primary column, bottom inspector, touch first   |
| Portrait tablet  |    768 px | 32 px gutter, compact rail, page above controls, bottom inspector |
| Landscape tablet |   1024 px | compact rail, page canvas plus right inspector                    |
| Expanded         |   1440 px | persistent rail, large live canvas, right contextual inspector    |

These are review references, not mandatory CSS breakpoints. Implementation breakpoints occur where content or interaction stops working.

The same destinations, labels, fields, and capabilities remain available at every width. The navigation container and inspector placement may change; the information architecture does not.

## Input Rules

- Frequent touch targets are at least 44 by 44 pixels and preferably 48 pixels high.
- Hover may enhance an interaction but may never be the only discovery path.
- Keyboard focus order must match the visible task order.
- Visible focus cannot be removed.
- Reflow and stacking are preferred before horizontal scrolling.
- Names, dates, statuses, and labels wrap before being truncated.
- Software-keyboard overlap must be tested on compact layouts.

## Accessibility Acceptance

- Complete keyboard path with no traps
- Screen-reader names, states, errors, and live status announcements
- WCAG AA contrast for essential text and controls
- Support for 200 percent browser zoom
- No essential meaning that depends on motion or color alone
- Semantic headings and native controls before ARIA
- Error copy that explains what happened and how to recover

## Required Product States

Every future feature must design and test loading, empty, skipped, offline, error, destructive, saving, saved, and recovery states. Generic error messages without a next step are not acceptable.

## Source

This document summarizes Figma pages `01 Foundations`, `02 Responsive Foundations`, `28 Product Strategy & Scope`, and `29 Experience Requirements` as reviewed on July 21, 2026.

# Analytics Events

## Status

This file defines a future event contract. PostHog and all other analytics services are intentionally absent from the repository.

Events should measure meaningful product outcomes rather than every click. Event names and properties must remain stable, and customer-entered content must not be included.

## Planned Events

| Event                       | When it occurs                                      | Allowed properties                          |
| --------------------------- | --------------------------------------------------- | ------------------------------------------- |
| `account_created`           | A new account succeeds                              | `method`, `device_type`                     |
| `onboarding_started`        | The first onboarding screen is viewed               | `entry_source`                              |
| `onboarding_step_completed` | A step passes validation                            | `step_name`, `skipped_optional`             |
| `page_name_checked`         | An availability result returns                      | `result`, `suggestion_used`                 |
| `onboarding_completed`      | The review step completes                           | `duration_seconds`                          |
| `trial_started`             | A future subscription enters trial                  | `plan`, `trial_end_at`                      |
| `section_updated`           | Saved content changes                               | `section_type`, `device_type`               |
| `preview_opened`            | The owner opens full preview                        | `device_mode`                               |
| `make_live_clicked`         | The owner starts make-live confirmation             | `has_main_button`, `missing_optional_count` |
| `page_made_live`            | A live version succeeds                             | `first_publish`, `duration_seconds`         |
| `trial_reminder_delivered`  | A future reminder is accepted by the email provider | `hours_before_charge`                       |
| `subscription_converted`    | A future first paid invoice succeeds                | `plan`, `billing_interval`                  |
| `subscription_canceled`     | A future cancellation completes                     | `during_trial`, `reason`                    |
| `support_started`           | A future support conversation begins                | `product_area`                              |

## Property Rules

- Do not send business descriptions, headlines, offer names, customer names, URLs, email addresses, phone numbers, addresses, or image contents.
- Use controlled enums rather than arbitrary strings where practical.
- Do not send secrets, access tokens, payment details, or database identifiers intended to remain private.
- Do not create a second event name for the same outcome.
- Record the event at the point the outcome is confirmed, not merely attempted, unless the event name explicitly describes an attempt.
- Keep owner-product analytics separate from future public-page traffic analytics.

## Consent And Privacy Gate

Before an analytics SDK is installed, approve:

1. Privacy notice and consent requirements
2. Data-retention period
3. Session-replay policy and masking rules
4. User and business pseudonymous identifiers
5. Development and test-environment filtering
6. Access to dashboards and exports
7. Deletion handling

## Source

This document summarizes the analytics contract on Figma page `28 Product Strategy & Scope` as reviewed on July 21, 2026.

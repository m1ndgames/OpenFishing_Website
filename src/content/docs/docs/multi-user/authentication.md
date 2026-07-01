---
title: Multi-user & authentication
description: Enable login to host friends and family, with per-user isolation, quotas, an admin panel and SMTP password reset.
---

By default OpenFishing runs **single-tenant and fully open** — no login. Set the
**`ADMIN_PASSWORD`** environment variable to turn on **multi-user mode**.

## Enabling login

Set `ADMIN_PASSWORD` (see [Environment variables](/docs/configuration/environment-variables)):

```yaml
environment:
  - ADMIN_PASSWORD=change_me
```

Once set, a login screen appears. Users sign in with their **email/username + password**.

:::note
`AUTH_PASSWORD` is a **deprecated** fallback name for `ADMIN_PASSWORD`. Use `ADMIN_PASSWORD`.
:::

## The admin account

- The **`admin`** account always exists when auth is enabled.
- Its username is always `admin`; its password is whatever `ADMIN_PASSWORD` is set to.
- It is **re-synced from the environment variable on every boot**, so changing the variable and
  restarting updates the password.

## The admin panel

Admins get a panel at **`/settings/admin`** to manage the instance:

- **Users** — create, enable/disable and manage accounts.
- **Storage quotas** — cap how much each user can upload.
- **Chatbot toggle** — enable/disable [AI features](/docs/ai/ai-features) per user.
- **API tokens** — manage [REST API](/docs/api/rest-api) Bearer tokens.

## Per-user data isolation

Each user's lures, spots, catches and tackle are **isolated** — users only see their own data.

## Password reset (SMTP)

If you configure SMTP (at least `SMTP_HOST` and `SMTP_FROM`), users can reset forgotten
passwords by email. Without SMTP configured, the reset option is hidden. See the
[SMTP variables](/docs/configuration/environment-variables).

## Per-user storage quotas

Admins can set **storage quotas** per user from the admin panel, so no single user can fill
the disk with uploads.

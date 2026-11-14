---
title: Multi-user & authentication
description: Turn on login to host friends and family, add accounts, set storage quotas and handle forgotten passwords.
---

Out of the box OpenFishing has **one shared collection and no login**: anyone who can open its
address can use it. That's fine on a home network you trust. To host friends and family, or to
reach OpenFishing from the internet, turn on login.

## Turn on login

The compose file from [Install OpenFishing](/docs/getting-started/installation) already has the
line, switched off with a `#`:

```yaml title="docker-compose.yml"
    environment:
      # Login: remove #, add a password
      # - ADMIN_PASSWORD=
```

Remove the `# ` in front of `- ADMIN_PASSWORD=`, type your own password right after the `=`, and
run `docker compose up -d`. A login screen appears: sign in with the username **admin** and
that password.

## The admin account

- The username is always `admin`.
- The password is whatever `ADMIN_PASSWORD` says. OpenFishing reads it every time it starts, so
  to change it, edit the line and run `docker compose up -d` again.

## Add a family member

1. Sign in as `admin` and open **Settings → Admin**.
2. Under **Create user**, fill in **Email**, **Username** and **Password**.
3. Leave **Quota (MB)** empty for no upload limit, or enter a number.
4. Select **Create**.

Send them the address, their username and the password. They sign in with their email or
username and can choose a new password under **Settings → My Account → Change password**.

## Who sees what

Each account has its own lures, spots, catches and tackle. Nobody sees anyone else's.

## Manage accounts

**Settings → Admin** lists every account. For each one you can edit the username and email, change the
storage quota and set a new password in the **Reset password** field, then select **Save**. You can also turn
the [AI chatbot](/docs/ai/ai-features) on or off, **Regenerate token** for the [REST API](/docs/api/rest-api), **Disable** the
account or **Delete** it. Deleting removes the account and all its data for good.

## Forgotten passwords

- **A family member:** the admin types a new password into that account's **Reset password** field in **Settings → Admin** and selects **Save**. With email set
  up (at least `SMTP_HOST` and `SMTP_FROM`, see
  [Environment variables](/docs/configuration/environment-variables)), the login screen also
  offers a reset link by email.
- **The admin:** change `ADMIN_PASSWORD` and run `docker compose up -d`.

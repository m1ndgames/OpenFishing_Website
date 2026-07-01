---
title: Backup & restore
description: One-click ZIP backup and restore, per-user or full-instance, and what the archive contains.
---

OpenFishing has built-in **backup and restore** as downloadable/uploadable ZIP archives.

## Per-user backup & restore

From **`/settings`**, any user can back up and restore **their own data** — their lures,
spots, catches and tackle, plus the associated uploads.

## Admin full-instance backup & restore

From the admin panel at **`/settings/admin`**, an admin can back up and restore the
**entire instance** — all users and accounts included.

:::caution
A **restore-all** performs a full **wipe and rebuild** of the instance: existing data is
replaced by the contents of the archive. Take a fresh backup first.
:::

## Archive format

A backup is a ZIP containing:

- **`backup.json`** — the structured data (records).
- **`uploads/`** — the associated photo files.

Because it's a plain ZIP, you can store it anywhere and inspect it if needed.

## Related

- Remember that the live database and uploads must be on
  [persistent volumes](/docs/getting-started/installation) — backups complement, but don't
  replace, proper volumes.

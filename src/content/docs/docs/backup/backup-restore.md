---
title: "Backup & restore"
description: "Back up your collection as one ZIP and restore it, on the same machine or a new one."
---

OpenFishing backs up everything you've recorded, photos included, as **one ZIP file** you download.
Keep a copy somewhere other than the machine OpenFishing runs on.

## Make a backup

1. Open **Settings → Backup & Restore**.
2. Under **Export backup**, select **Export**.

The ZIP holds your lures, spots, catches and tackle with their photos. With login turned on, each
person backs up only their own account this way.

:::caution
A restore can't be undone. Export a fresh backup first.
:::

## Restore a backup

1. Open **Settings → Backup & Restore**.
2. Under **Import backup**, select **Choose file** and pick the ZIP.
3. Tick the box confirming that it replaces your current data.
4. Select **Import & Replace**.

Everything in your account is replaced with the backup's contents. OpenFishing checks the backup's
format first and changes nothing if it doesn't fit.

When it works, you see **Import successful** with the number of lures, spots and catches restored.

## Back up the whole instance (admin)

With login turned on, the admin backs up and restores every account at once in **Settings → Admin**:

- **Export all** downloads all accounts and their data as one ZIP.
- **Restore full backup** replaces all data and accounts with a full backup. Everyone is logged
  out, and the admin password comes from `ADMIN_PASSWORD` again.

To restore, tick the confirmation and select **Restore all & Replace**.

## Move to a new machine

1. On the old machine, [update OpenFishing](/docs/getting-started/installation#updating) to the latest version, then export a fresh backup.
   Write down the **Backup format** shown in **Settings**.
2. [Install OpenFishing](/docs/getting-started/installation) on the new machine. Its **Backup format** in **Settings** must match the old machine.
3. Open it and restore: in **Settings → Backup & Restore** if you have no login, or with a full
   backup in **Settings → Admin → Restore full backup** if several people use it.
4. Check your lures and photos before you switch off the old machine.

## What's in the ZIP

- `backup.json`: your records.
- `uploads/`: the photos.

It's a plain ZIP, so you can open it to check it.

## Backups and volumes

Backups don't replace the [volumes](/docs/getting-started/installation) that hold the live database and photos. Keep both, and
export a backup before big changes such as an update.

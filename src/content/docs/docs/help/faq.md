---
title: FAQ & troubleshooting
description: Fixes for common install problems (ARM machines, port conflicts, lost admin password) and answers about volumes, updates, uploads and login.
---

Problems are listed by the message you actually see, so searching for the exact error text usually
lands on the fix.

Where an answer says `docker compose up -d`, on a NAS you can redeploy the stack in its app instead.

## Installing

### Saving fails: "Cross-site POST form submissions are forbidden"

`BASE_URL` is missing or starts with `https://` while you open the app over plain `http://`. Set it to the exact address you open, for example `BASE_URL=http://192.168.1.50:3000`, and run `docker compose up -d` again. Behind a reverse proxy, set `BASE_URL` to the `https://` address people open; that alone is enough. See [Environment variables](/docs/configuration/environment-variables#address-and-time).

### The container won't start: "exec format error"

The machine has an ARM processor (common on small NAS models and single-board computers). The
OpenFishing image is built for **64-bit Intel or AMD (amd64)** only, so it can't run there.
Run `uname -m` to check: `x86_64` works, `aarch64` or `armv7l` doesn't. See
[Before you start](/docs/getting-started/installation#before-you-start).

### "Port is already allocated" or "address already in use"

Something else on the machine already uses port 3000. Change the **left** number in the
compose file, for example `"8080:3000"`, run `docker compose up -d` again and open the app on
port 8080 instead.

### "docker compose" is not a command

Older Docker installs, including some NAS packages, use the separate `docker-compose` tool. Run the same commands with a hyphen: `docker-compose up -d`, `docker-compose pull`.

### The page doesn't load

- Check the container is running: `docker ps` should list `openfishing`.
- Read its log for errors: `docker logs openfishing`.
- From another device, use the machine's network address (for example
  `http://192.168.1.50:3000`), not `localhost`.
- Works on the machine but not from your phone? Allow port 3000 in the machine's firewall (on a
  NAS, in its security or firewall settings).

### Do I need persistent volumes?

**Yes.** Without them, your data and photos are lost when the container is recreated. The compose
file in [Install OpenFishing](/docs/getting-started/installation) sets both up.

## Running it

### How do I update?

Back up first, then `docker compose pull` and `docker compose up -d`. See
[Updating](/docs/getting-started/installation#updating).

### Do I have to run database migrations?

**No.** Migrations **run automatically on startup**. Pull a newer image and restart: the
schema is brought up to date for you.

### I forgot the admin password

Set a new `ADMIN_PASSWORD` in the compose file and run `docker compose up -d`. The `admin`
account is re-synced from that variable on every start, so the new password works right away.
Other users can reset theirs by email if [SMTP is configured](/docs/configuration/environment-variables).

### Is there a login by default?

No. OpenFishing is **open** unless you set `ADMIN_PASSWORD`. See
[Multi-user & authentication](/docs/multi-user/authentication). Don't expose an open instance
to the public internet.

### Why is my upload being rejected?

Uploads are capped by **`BODY_SIZE_LIMIT`** (default ≈ 100 MB, i.e. `104857600` bytes). Raise
it if you need larger photos, and make sure any reverse proxy in front also allows the larger
body size (`client_max_body_size` in nginx).

### "Identify from photo" says "Something went wrong. Please try again."

AI isn't set up on your server. The button needs `LITELLM_URL` and a model; see
[AI features](/docs/ai/ai-features).

### "Upload quota exceeded"

The admin has set a storage limit for your account (**Quota (MB)** in **Settings → Admin**).
Delete photos you don't need, or ask the admin to raise it.

### How do I run OpenFishing behind a reverse proxy?

Terminate HTTPS at your proxy, forward to port `3000` with the standard proxy headers, and set
`BASE_URL` to the public address so [QR codes](/docs/features/qr-labels) and password-reset
links are right. [Install OpenFishing](/docs/getting-started/installation#reverse-proxy-and-https)
has Caddy and nginx examples.

### Does OpenFishing send my data anywhere?

Your records and photos stay on your server. Weather for the Bite Index, map tiles and the
optional AI features contact outside services; the
[Introduction](/docs/getting-started/introduction#what-talks-to-the-internet) lists exactly what. Map tiles can come from your own server via [`MAP_TILE_URL`](/docs/configuration/environment-variables#map).

### I can't find Create share link

Share links need login. Set `ADMIN_PASSWORD` (see [Multi-user & authentication](/docs/multi-user/authentication)) and run `docker compose up -d`;
the button then appears on every lure, spot and catch.

## Backups

### Restore fails: "Schema mismatch"

The backup comes from a different version of OpenFishing. [Update](/docs/getting-started/installation#updating) both installs to the latest
version, export a fresh backup on the old one and restore that.

### "This is a personal backup" or "This is a full backup"

Personal and full backups restore in different places. A personal backup, made in **Settings → Backup & Restore**, restores
there. A full backup, made by the admin in **Settings → Admin**, restores only there.

## Help

### Where can I get help or report a bug?

Open an issue on [GitHub](https://github.com/m1ndgames/OpenFishing/issues).

---
title: FAQ / Troubleshooting
description: Persistent volumes, automatic migrations, reverse-proxy notes and the upload size limit.
---

## Do I need persistent volumes?

**Yes.** Both the SQLite database (`/app/data`) and the uploads directory (`/app/uploads`)
must be on persistent volumes. Without them, your data and photos are lost when the container
is recreated. See [Installation](/docs/getting-started/installation).

## Do I have to run database migrations?

**No.** In production, database **migrations run automatically on startup**. Just pull a newer
image and restart — the schema is brought up to date for you.

## How do I run OpenFishing behind a reverse proxy?

- Terminate TLS at your proxy (nginx, Caddy, Traefik…) and forward to the container's port
  `3000`.
- Set **`BASE_URL`** to your public HTTPS URL so [QR codes](/docs/features/qr-labels) and
  password-reset links are correct.
- **Forward the standard proxy headers** (host and forwarded-for/proto) so the app sees the
  right external URL.

## Why is my upload being rejected?

Uploads are capped by **`BODY_SIZE_LIMIT`** (default ≈ 100 MB, i.e. `104857600` bytes). Raise
it if you need larger photos, and make sure any reverse proxy in front also allows the larger
body size.

## Is there a login by default?

No — OpenFishing is **open** unless you set `ADMIN_PASSWORD`. See
[Multi-user & authentication](/docs/multi-user/authentication). Don't expose an open instance
to the public internet.

## Where can I get help or report a bug?

Open an issue on [GitHub](https://github.com/m1ndgames/OpenFishing/issues).

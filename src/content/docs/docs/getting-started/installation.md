---
title: Installation (docker-compose)
description: A complete docker-compose setup for OpenFishing with persistent volumes and the core environment variables.
---

For anything beyond a quick test, run OpenFishing with **docker-compose**. This gives you
named volumes, environment variables in one place, and easy restarts.

## docker-compose.yml

```yaml
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing:latest
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Persistent SQLite database file (inside the /app/data volume)
      - DATABASE_URL=/app/data/openfishing.db
      # Uploads directory (inside the /app/uploads volume)
      - UPLOAD_PATH=/app/uploads
      # Public URL — used for QR-code and password-reset links
      - BASE_URL=https://fishing.yourdomain.com
      # Set to enable login; omit for a fully open single-tenant instance
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Bring it up:

```bash
docker compose up -d
```

Then browse to your `BASE_URL` (or `http://localhost:3000` locally).

## Persistent volumes are required

The two volumes are not optional:

- `/app/data` holds the **SQLite database** — your lures, spots, catches and tackle.
- `/app/uploads` holds every **photo** you add.

:::caution
If either path is not mounted to a persistent volume, that data is destroyed when the
container is recreated. Always back both up — see [Backup & restore](/docs/backup/backup-restore).
:::

## Core environment variables

The example above uses the essentials. The full list — SMTP, AI, demo mode, upload limits and
more — is documented in the [Environment variables reference](/docs/configuration/environment-variables).

## Reverse proxy

Put OpenFishing behind your reverse proxy (nginx, Caddy, Traefik…) and terminate TLS there.
Set **`BASE_URL`** to the public HTTPS URL so QR codes and password-reset links point to the
right place, and forward the standard proxy headers. See the
[FAQ](/docs/help/faq) for details.

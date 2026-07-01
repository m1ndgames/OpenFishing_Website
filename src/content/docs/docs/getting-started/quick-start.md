---
title: Quick Start
description: Run OpenFishing in a single command, log in for the first time, and learn where your data lives.
---

The fastest way to try OpenFishing on your own machine is a single `docker run`.

## One-liner

```bash
docker run -d -p 3000:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing:latest
```

Then open **http://localhost:3000**.

This starts OpenFishing in **single-tenant, fully open** mode — no login. Anyone who can reach
the port has full access, so only expose it on a trusted network until you enable
[authentication](/docs/multi-user/authentication).

## First login

- **Without `ADMIN_PASSWORD`** (as above): the app is open — there's no login screen and all
  features are available immediately.
- **With `ADMIN_PASSWORD` set**: a login screen appears. The admin username is always
  `admin`, and the password is whatever you set in `ADMIN_PASSWORD`. The account is
  re-synced from the environment variable on every boot.

See [Multi-user & authentication](/docs/multi-user/authentication) for the full picture.

## Where your data lives

OpenFishing keeps two things you must persist:

| Data | Container path | In the command above |
|---|---|---|
| SQLite database | `/app/data` | named volume `openfishing-db` |
| Uploaded photos | `/app/uploads` | named volume `openfishing-uploads` |

:::caution
Both the database and the uploads directory **must** be on persistent volumes. If you run the
container without volumes, everything is lost when the container is removed.
:::

For a production-ready setup with named volumes and environment variables in a file, use the
[docker-compose installation](/docs/getting-started/installation).

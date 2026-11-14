---
title: Environment variables
description: Every OpenFishing setting, with the defaults inside the Docker image, grouped by what it does.
prev: false
---

OpenFishing is configured entirely through environment variables, set in the `environment:`
section of your compose file (or with `-e` on `docker run`). Defaults below are the ones inside
the Docker image. Almost every install sets `BASE_URL` and `TZ`; everything else is optional.

## Address and time

- **`BASE_URL`** · default: not set\
  The address people open OpenFishing at, including `http://` or `https://`, for example
  `http://192.168.1.50:3000` or `https://fishing.example.com`. The server takes its scheme from
  it: **without it, the server assumes HTTPS and every save is rejected on a plain-HTTP
  install** ("Cross-site POST form submissions are forbidden"). It also builds QR-code and share links, which point at `http://localhost:5173` when it isn't set.
- **`PROTOCOL_HEADER`** · default: not set\
  Only for a reverse proxy that reports the scheme itself, for example
  `PROTOCOL_HEADER=x-forwarded-proto`. When set, it takes precedence over the scheme in
  `BASE_URL`.
- **`TZ`** · default: UTC\
  Your time zone, for example `Europe/Berlin` or `America/New_York`. Without it, catch times
  are shifted.

## Storage

- **`DATABASE_URL`** · default: `/app/data/openfishing.db`\
  The SQLite database file, inside the `/app/data` volume. Leave as is.
- **`UPLOAD_PATH`** · default: `/app/uploads`\
  Where photos are stored, inside the `/app/uploads` volume. Leave as is.
- **`BODY_SIZE_LIMIT`** · default: `104857600` (≈ 100 MB)\
  The largest upload in bytes. A reverse proxy in front needs a matching limit.

## Login

- **`ADMIN_PASSWORD`** · default: not set\
  Turns on login. It is the password of the `admin` account (the username is always `admin`),
  re-read on every start. Not set: the instance is open, with no login screen.
- **`AUTH_PASSWORD`** · deprecated\
  The old name for `ADMIN_PASSWORD`. Still works; use `ADMIN_PASSWORD`.

See [Multi-user & authentication](/docs/multi-user/authentication).

## Password-reset email

The "forgot password" option appears only when at least `SMTP_HOST` and `SMTP_FROM` are set.

- **`SMTP_HOST`** · default: not set\
  Your mail server.
- **`SMTP_PORT`** · default: `587`\
  Port `465` implies TLS; other ports use STARTTLS.
- **`SMTP_SECURE`** · default: not set\
  Set to `true` for implicit TLS (usually with port 465).
- **`SMTP_USER`** / **`SMTP_PASS`** · default: not set\
  Mail server login. Leave out for relays that need none.
- **`SMTP_FROM`** · default: not set\
  The sender, for example `OpenFishing <noreply@example.com>`.

For example, with a mail account on port 587:

```yaml title="docker-compose.yml"
    environment:
      - SMTP_HOST=smtp.example.com
      - SMTP_PORT=587
      - SMTP_USER=you@example.com
      # Your mail account's password
      - SMTP_PASS=
      - SMTP_FROM=you@example.com
```

## Map

- **`MAP_TILE_URL`** · default: OpenStreetMap\
  A map tile URL template to use your
  own or another tile server instead of OpenStreetMap.\
  For example: `https://tiles.example.com/{z}/{x}/{y}.png`
- **`MAP_TILE_ATTRIBUTION`** · default: not set\
  The attribution shown on the map for `MAP_TILE_URL`. Most tile providers require one.

## AI features

- **`CHATBOT`** · default: not set\
  Set to `true` to turn on the Fishing Buddy chatbot. Needs the LiteLLM settings below. See [AI features](/docs/ai/ai-features).
- **`LITELLM_URL`** · default: not set\
  Your LiteLLM proxy, for example `http://litellm:4000`.
- **`LITELLM_MODEL`** · default: not set\
  The chatbot model, matching a `model_name` in your `litellm.config.yaml`.
- **`LITELLM_VISION_MODEL`** · default: not set\
  Optional model for fish and lure identification from photos. Falls back to `LITELLM_MODEL`.

See [AI features](/docs/ai/ai-features).

## Demo

- **`DEMO_MODE`** · default: not set\
  **Any** value turns on read-only demo mode, even `false` or `0`. To turn it off, remove the
  line. See [Demo mode](/docs/demo/demo-mode).

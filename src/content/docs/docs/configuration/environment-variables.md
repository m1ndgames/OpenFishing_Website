---
title: Environment variables
description: Full reference of every OpenFishing environment variable, with defaults and descriptions.
---

OpenFishing is configured entirely through environment variables. Every variable is optional
except where noted; unset variables fall back to the defaults below.

## Reference table

| Variable | Default | Description |
|---|---|---|
| `DATABASE_URL` | `local.db` | Path to the SQLite database file. In Docker, point this at your data volume, e.g. `/app/data/openfishing.db`. |
| `UPLOAD_PATH` | `./uploads` | Directory for lure/spot/catch photos. **Mount a volume** here (e.g. `/app/uploads`). |
| `BASE_URL` | `http://localhost:5173` | Public base URL, used to build QR-code and password-reset links. Set this to your real HTTPS URL behind a reverse proxy. |
| `ADMIN_PASSWORD` | _(unset)_ | Set to **enable multi-user login**. It is the password for the `admin` account (username is always `admin`, re-synced each boot). Unset = fully open single-tenant instance. |
| `AUTH_PASSWORD` | _(unset)_ | **Deprecated** fallback name for `ADMIN_PASSWORD`. Prefer `ADMIN_PASSWORD`. |
| `SMTP_HOST` | _(unset)_ | SMTP server hostname for "forgot password" emails. |
| `SMTP_PORT` | _(unset)_ | SMTP server port. |
| `SMTP_SECURE` | _(unset)_ | Use TLS for the SMTP connection. |
| `SMTP_USER` | _(unset)_ | SMTP username. |
| `SMTP_PASS` | _(unset)_ | SMTP password. |
| `SMTP_FROM` | _(unset)_ | The `From:` address for outgoing mail. |
| `DEMO_MODE` | _(unset)_ | Any value = **read-only demo mode** (all writes blocked). |
| `CHATBOT` | _(unset)_ | Any truthy value enables the **AI chatbot** (requires the LiteLLM variables). |
| `LITELLM_URL` | _(unset)_ | Base URL of your LiteLLM proxy, e.g. `http://litellm:4000`. |
| `LITELLM_MODEL` | _(unset)_ | Model name matching a `litellm.config.yaml` entry. |
| `LITELLM_VISION_MODEL` | _(unset)_ | Optional vision-capable model for fish/lure identification. Falls back to `LITELLM_MODEL`. |
| `BODY_SIZE_LIMIT` | `104857600` | Maximum upload size in bytes (default ≈ 100 MB). |

:::note
The **SMTP** "forgot password" feature only appears when at least `SMTP_HOST` **and**
`SMTP_FROM` are set. Without them, the reset option is hidden.
:::

## Notes on defaults

The defaults above are the app's built-in code defaults. In a container you'll typically
override the paths to point at mounted volumes:

```bash
DATABASE_URL=/app/data/openfishing.db
UPLOAD_PATH=/app/uploads
```

## Grouped by purpose

- **Storage:** `DATABASE_URL`, `UPLOAD_PATH`, `BODY_SIZE_LIMIT`
- **Networking / links:** `BASE_URL`
- **Authentication:** `ADMIN_PASSWORD` (`AUTH_PASSWORD` deprecated)
- **Email / password reset:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- **AI features:** `CHATBOT`, `LITELLM_URL`, `LITELLM_MODEL`, `LITELLM_VISION_MODEL`
- **Demo:** `DEMO_MODE`

See [Multi-user & authentication](/docs/multi-user/authentication), [AI features](/docs/ai/ai-features)
and [Demo mode](/docs/demo/demo-mode) for how these groups fit together.

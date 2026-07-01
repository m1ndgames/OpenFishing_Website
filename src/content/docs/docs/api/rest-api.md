---
title: REST API
description: OpenFishing's read-only JSON API with per-user Bearer token auth and a built-in Swagger UI.
---

OpenFishing exposes a **read-only JSON API** under **`/api/v1/*`**, so you can pull your data
into other tools.

## Authentication

- Auth is **per-user** via a Bearer token:

  ```http
  Authorization: Bearer <apiToken>
  ```

- When [authentication](/docs/multi-user/authentication) is **disabled** (single-tenant open
  mode), the API is open too — no token required.
- In multi-user mode, generate and manage API tokens from the admin panel.

## Resource endpoints

Each resource supports a **list** and a **by-id** endpoint:

| Resource | List | By ID |
|---|---|---|
| Lures | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Spots | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Catches | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Rods | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Reels | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Lines | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Combos | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

The API is **read-only** — there are no write endpoints.

## Swagger UI & OpenAPI spec

- Explore and try the API interactively with the built-in **Swagger UI at `/api-docs`**.
- The raw **OpenAPI spec** is served at **`/api/openapi`**.

## Example

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

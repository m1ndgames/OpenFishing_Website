---
title: REST API
description: "OpenFishing's read-only JSON API: one token per account, the endpoints and the built-in Swagger UI."
---

OpenFishing has a **read-only JSON API**, so you can pull your lures, spots, catches and tackle
into other tools: a spreadsheet, a home dashboard, a script. Nothing can be changed through it.

## Get your token

- **Login turned on:** every account has its own token. Copy it from **Settings → My Account →
  API token**. **Regenerate token** issues a new one; the old one stops working.
- **No login** (one shared collection, see [Multi-user & authentication](/docs/multi-user/authentication)): the API is
  open too and needs no token.

Send the token in the `Authorization` header:

```http
Authorization: Bearer <your token>
```

## Endpoints

Every resource has a list and a single item:

- `GET /api/v1/<resource>` lists them.
- `GET /api/v1/<resource>/{id}` returns one.

The resources are `lures`, `spots`, `catches`, `rods`, `reels`, `lines` and `combos`. With login
turned on, you only get your own account's data.

## Try it in the browser

- **`/api-docs`** on your instance opens a Swagger UI where you can try every endpoint.
- **`/api/openapi`** serves the raw OpenAPI spec, for tools that generate clients.

## Example

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  http://192.168.1.50:3000/api/v1/lures
```

It returns JSON. Each lure has all its fields; this one is shortened:

```json
[
  {
    "id": "6f1c2b7e-3d4a-4b8e-9f21-0a5c7d9e1b34",
    "lureNumber": 1,
    "name": "Perch shad",
    "brand": "Example",
    "color": "Perch",
    "favourite": true,
    "lost": false,
    "tags": ["perch", "river"]
  }
]
```

---
title: REST-API
description: De alleen-lezen JSON-API van OpenFishing met Bearer-token-authenticatie per gebruiker en een ingebouwde Swagger-UI.
---

OpenFishing biedt een **alleen-lezen JSON-API** onder **`/api/v1/*`**, zodat je je gegevens naar andere tools
kunt halen.

## Authenticatie

- Authenticatie gebeurt **per gebruiker** via een Bearer-token:

  ```http
  Authorization: Bearer <apiToken>
  ```

- Wanneer [authenticatie](/nl/docs/multi-user/authentication) is **uitgeschakeld** (open single-tenant-modus),
  is de API ook open — geen token vereist.
- In multi-user-modus genereer en beheer je API-tokens vanuit het beheerpaneel.

## Resource-eindpunten

Elke resource ondersteunt een **lijst**- en een **op-id**-eindpunt:

| Resource | Lijst | Op ID |
|---|---|---|
| Kunstaas | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Stekken | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Vangsten | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Hengels | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Molens | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Lijnen | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Combo's | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

De API is **alleen-lezen** — er zijn geen schrijf-eindpunten.

## Swagger-UI & OpenAPI-spec

- Verken en probeer de API interactief met de ingebouwde **Swagger-UI op `/api-docs`**.
- De ruwe **OpenAPI-spec** wordt geserveerd op **`/api/openapi`**.

## Voorbeeld

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

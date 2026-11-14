---
title: REST-API
description: "De alleen-lezen JSON-API van OpenFishing: één token per account, de endpoints en de ingebouwde Swagger-interface."
---

OpenFishing heeft een **alleen-lezen JSON-API**, zodat je je aas, spots, vangsten en
uitrusting in andere tools haalt: een spreadsheet, een thuisdashboard, een script. Via de API
kan niets worden gewijzigd.

## Je token

- **Inloggen aan:** elk account heeft een eigen token. Kopieer het via **Instellingen → Mijn account
  → API-token**. **Token opnieuw genereren** maakt een nieuw token; het oude werkt dan niet meer.
- **Geen inlogscherm** (één gedeelde verzameling, zie [Multi-user & authenticatie](/nl/docs/multi-user/authentication)): de
  API is dan ook open en heeft geen token nodig.

Stuur het token mee in de header `Authorization`:

```http
Authorization: Bearer <je token>
```

## Endpoints

Elke resource heeft een lijst en een los item:

- `GET /api/v1/<resource>` geeft de lijst.
- `GET /api/v1/<resource>/{id}` geeft er één.

De resources zijn `lures`, `spots`, `catches`, `rods`, `reels`, `lines` en `combos`. Met inloggen
aan krijg je alleen de gegevens van je eigen account.

## Uitproberen in de browser

- **`/api-docs`** op je installatie opent een Swagger-interface waarin je elk endpoint kunt proberen.
- **`/api/openapi`** levert de OpenAPI-specificatie, voor tools die clients genereren.

## Voorbeeld

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  http://192.168.1.50:3000/api/v1/lures
```

Het antwoord is JSON. Elk aas bevat al zijn velden; hier ingekort:

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

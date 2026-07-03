---
title: REST-API
description: Die schreibgeschützte JSON-API von OpenFishing mit benutzerbezogener Bearer-Token-Authentifizierung und integrierter Swagger-UI.
---

OpenFishing stellt eine **schreibgeschützte JSON-API** unter **`/api/v1/*`** bereit, sodass du deine Daten in
andere Tools ziehen kannst.

## Authentifizierung

- Die Authentifizierung erfolgt **pro Benutzer** über ein Bearer-Token:

  ```http
  Authorization: Bearer <apiToken>
  ```

- Wenn die [Authentifizierung](/de/docs/multi-user/authentication) **deaktiviert** ist (offener
  Single-Tenant-Modus), ist auch die API offen — kein Token erforderlich.
- Im Mehrbenutzer-Modus erstellst und verwaltest du API-Tokens über das Admin-Panel.

## Ressourcen-Endpunkte

Jede Ressource unterstützt einen **Listen**- und einen **Nach-ID**-Endpunkt:

| Ressource | Liste | Nach ID |
|---|---|---|
| Köder | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Stellen | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Fänge | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Ruten | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Rollen | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Schnüre | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Combos | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

Die API ist **schreibgeschützt** — es gibt keine Schreib-Endpunkte.

## Swagger-UI & OpenAPI-Spezifikation

- Erkunde und teste die API interaktiv mit der integrierten **Swagger-UI unter `/api-docs`**.
- Die rohe **OpenAPI-Spezifikation** wird unter **`/api/openapi`** bereitgestellt.

## Beispiel

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

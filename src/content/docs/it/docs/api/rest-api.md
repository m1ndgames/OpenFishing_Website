---
title: API REST
description: L'API JSON di sola lettura di OpenFishing con autenticazione tramite token Bearer per utente e un'interfaccia Swagger integrata.
---

OpenFishing espone un'**API JSON di sola lettura** sotto **`/api/v1/*`**, così puoi estrarre i tuoi dati verso
altri strumenti.

## Autenticazione

- L'autenticazione è **per utente** tramite un token Bearer:

  ```http
  Authorization: Bearer <apiToken>
  ```

- Quando l'[autenticazione](/it/docs/multi-user/authentication) è **disabilitata** (modalità single-tenant
  aperta), anche l'API è aperta — nessun token richiesto.
- In modalità multiutente, genera e gestisci i token API dal pannello di amministrazione.

## Endpoint delle risorse

Ogni risorsa supporta un endpoint **elenco** e uno **per id**:

| Risorsa | Elenco | Per ID |
|---|---|---|
| Esche | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Spot | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Catture | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Canne | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Mulinelli | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Fili | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Combo | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

L'API è **di sola lettura** — non ci sono endpoint di scrittura.

## Interfaccia Swagger e specifica OpenAPI

- Esplora e prova l'API in modo interattivo con l'**interfaccia Swagger integrata su `/api-docs`**.
- La **specifica OpenAPI** grezza è servita su **`/api/openapi`**.

## Esempio

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

---
title: API REST
description: "L'API JSON in sola lettura di OpenFishing: un token per account, gli endpoint e l'interfaccia Swagger integrata."
---

OpenFishing ha un'**API JSON in sola lettura** per portare esche, spot, catture e attrezzatura in
altri strumenti: un foglio di calcolo, una dashboard di casa, uno script. Attraverso di essa non
si può modificare nulla.

## Il tuo token

- **Con l'accesso attivo:** ogni account ha il proprio token. Copialo da **Impostazioni → Il mio
  account → Token API**. **Rigenera token** ne crea uno nuovo; il vecchio smette di funzionare.
- **Senza accesso** (una sola collezione condivisa, vedi [Multiutente e autenticazione](/it/docs/multi-user/authentication)):
  anche l'API è aperta e non richiede token.

Invia il token nell'intestazione `Authorization`:

```http
Authorization: Bearer <il tuo token>
```

## Endpoint

Ogni risorsa ha un elenco e un singolo elemento:

- `GET /api/v1/<resource>` li elenca.
- `GET /api/v1/<resource>/{id}` ne restituisce uno.

Le risorse sono `lures`, `spots`, `catches`, `rods`, `reels`, `lines` e `combos`. Con l'accesso
attivo ottieni solo i dati del tuo account.

## Provala nel browser

- **`/api-docs`** sulla tua istanza apre un'interfaccia Swagger dove provare ogni endpoint.
- **`/api/openapi`** fornisce la specifica OpenAPI, per gli strumenti che generano client.

## Esempio

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  http://192.168.1.50:3000/api/v1/lures
```

Restituisce JSON. Ogni esca ha tutti i suoi campi; qui in forma ridotta:

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

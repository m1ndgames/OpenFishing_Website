---
title: API REST
description: Interfejs API JSON tylko do odczytu OpenFishing z uwierzytelnianiem tokenem Bearer na użytkownika i wbudowanym interfejsem Swagger.
---

OpenFishing udostępnia **API JSON tylko do odczytu** pod **`/api/v1/*`**, dzięki czemu możesz pobierać swoje
dane do innych narzędzi.

## Uwierzytelnianie

- Uwierzytelnianie odbywa się **na użytkownika** za pomocą tokenu Bearer:

  ```http
  Authorization: Bearer <apiToken>
  ```

- Gdy [uwierzytelnianie](/pl/docs/multi-user/authentication) jest **wyłączone** (otwarty tryb jednodostępowy),
  API również jest otwarte — token nie jest wymagany.
- W trybie wielu użytkowników generuj tokeny API i zarządzaj nimi z panelu administracyjnego.

## Punkty końcowe zasobów

Każdy zasób obsługuje punkt końcowy **listy** i **wg id**:

| Zasób | Lista | Wg ID |
|---|---|---|
| Przynęty | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Łowiska | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Połowy | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Wędki | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Kołowrotki | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Żyłki | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Zestawy | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

API jest **tylko do odczytu** — nie ma punktów końcowych zapisu.

## Interfejs Swagger i specyfikacja OpenAPI

- Eksploruj i testuj API interaktywnie za pomocą wbudowanego **interfejsu Swagger pod `/api-docs`**.
- Surowa **specyfikacja OpenAPI** jest udostępniana pod **`/api/openapi`**.

## Przykład

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

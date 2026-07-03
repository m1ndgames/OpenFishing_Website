---
title: API REST
description: La API JSON de solo lectura de OpenFishing con autenticación por token Bearer por usuario y una interfaz Swagger integrada.
---

OpenFishing expone una **API JSON de solo lectura** en **`/api/v1/*`**, para que puedas extraer tus datos a
otras herramientas.

## Autenticación

- La autenticación es **por usuario** mediante un token Bearer:

  ```http
  Authorization: Bearer <apiToken>
  ```

- Cuando la [autenticación](/es/docs/multi-user/authentication) está **deshabilitada** (modo de un solo
  inquilino abierto), la API también está abierta — no se requiere token.
- En modo multiusuario, genera y gestiona los tokens de API desde el panel de administración.

## Endpoints de recursos

Cada recurso admite un endpoint de **lista** y uno **por id**:

| Recurso | Lista | Por ID |
|---|---|---|
| Señuelos | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Puntos | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Capturas | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Cañas | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Carretes | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Líneas | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Equipos | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

La API es **de solo lectura** — no hay endpoints de escritura.

## Interfaz Swagger y especificación OpenAPI

- Explora y prueba la API de forma interactiva con la **interfaz Swagger integrada en `/api-docs`**.
- La **especificación OpenAPI** en bruto se sirve en **`/api/openapi`**.

## Ejemplo

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

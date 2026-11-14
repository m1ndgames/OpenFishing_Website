---
title: API REST
description: "La API JSON de solo lectura de OpenFishing: un token por cuenta, los endpoints y la interfaz Swagger integrada."
---

OpenFishing tiene una **API JSON de solo lectura** para llevar tus señuelos, puntos, capturas y
aparejos a otras herramientas: una hoja de cálculo, un panel doméstico, un script. A través de
ella no se puede cambiar nada.

## Consigue tu token

- **Con inicio de sesión:** cada cuenta tiene su propio token. Cópialo en **Ajustes → Mi cuenta →
  Token API**. **Regenerar token** crea uno nuevo; el anterior deja de funcionar.
- **Sin inicio de sesión** (una sola colección compartida, ver [Multiusuario y autenticación](/es/docs/multi-user/authentication)):
  la API también está abierta y no necesita token.

Envía el token en la cabecera `Authorization`:

```http
Authorization: Bearer <tu token>
```

## Endpoints

Cada recurso tiene una lista y un elemento individual:

- `GET /api/v1/<resource>` los lista.
- `GET /api/v1/<resource>/{id}` devuelve uno.

Los recursos son `lures`, `spots`, `catches`, `rods`, `reels`, `lines` y `combos`. Con inicio de
sesión, solo obtienes los datos de tu propia cuenta.

## Pruébala en el navegador

- **`/api-docs`** en tu instancia abre una interfaz Swagger donde puedes probar cada endpoint.
- **`/api/openapi`** sirve la especificación OpenAPI, para herramientas que generan clientes.

## Ejemplo

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  http://192.168.1.50:3000/api/v1/lures
```

Devuelve JSON. Cada señuelo trae todos sus campos; aquí, abreviado:

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

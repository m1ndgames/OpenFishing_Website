---
title: API REST
description: A API JSON só de leitura do OpenFishing com autenticação por token Bearer por utilizador e uma interface Swagger integrada.
---

O OpenFishing expõe uma **API JSON só de leitura** em **`/api/v1/*`**, para que possas extrair os teus dados
para outras ferramentas.

## Autenticação

- A autenticação é **por utilizador** através de um token Bearer:

  ```http
  Authorization: Bearer <apiToken>
  ```

- Quando a [autenticação](/pt/docs/multi-user/authentication) está **desativada** (modo de inquilino único
  aberto), a API também está aberta — não é necessário token.
- No modo multiutilizador, gera e gere os tokens da API a partir do painel de administração.

## Endpoints de recursos

Cada recurso suporta um endpoint de **lista** e um **por id**:

| Recurso | Lista | Por ID |
|---|---|---|
| Iscas | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Pontos | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Capturas | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Canas | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Carretos | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Linhas | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Conjuntos | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

A API é **só de leitura** — não há endpoints de escrita.

## Interface Swagger e especificação OpenAPI

- Explora e experimenta a API de forma interativa com a **interface Swagger integrada em `/api-docs`**.
- A **especificação OpenAPI** em bruto é servida em **`/api/openapi`**.

## Exemplo

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

---
title: API REST
description: "A API JSON só de leitura do OpenFishing: um token por conta, os endpoints e a interface Swagger incluída."
---

O OpenFishing tem uma **API JSON só de leitura** para levares as tuas iscas, locais, capturas e
equipamento para outras ferramentas: uma folha de cálculo, um painel doméstico, um script. Nada
pode ser alterado através dela.

## Obter o teu token

- **Com início de sessão:** cada conta tem o seu token. Copia-o em **Definições → A minha conta →
  Token de API**. **Regenerar token** cria um novo; o antigo deixa de funcionar.
- **Sem início de sessão** (uma única coleção partilhada, ver [Multiutilizador e autenticação](/pt/docs/multi-user/authentication)):
  a API também está aberta e não precisa de token.

Envia o token no cabeçalho `Authorization`:

```http
Authorization: Bearer <o teu token>
```

## Endpoints

Cada recurso tem uma lista e um item individual:

- `GET /api/v1/<resource>` lista-os.
- `GET /api/v1/<resource>/{id}` devolve um.

Os recursos são `lures`, `spots`, `catches`, `rods`, `reels`, `lines` e `combos`. Com início de
sessão, só recebes os dados da tua própria conta.

## Experimentar no navegador

- **`/api-docs`** na tua instância abre uma interface Swagger onde podes experimentar cada endpoint.
- **`/api/openapi`** serve a especificação OpenAPI, para ferramentas que geram clientes.

## Exemplo

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  http://192.168.1.50:3000/api/v1/lures
```

A resposta é JSON. Cada isca traz todos os seus campos; aqui, abreviada:

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

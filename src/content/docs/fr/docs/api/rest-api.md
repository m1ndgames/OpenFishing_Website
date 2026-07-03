---
title: API REST
description: L'API JSON en lecture seule d'OpenFishing avec authentification par jeton Bearer par utilisateur et une interface Swagger intégrée.
---

OpenFishing expose une **API JSON en lecture seule** sous **`/api/v1/*`**, pour que vous puissiez récupérer vos
données dans d'autres outils.

## Authentification

- L'authentification se fait **par utilisateur** via un jeton Bearer :

  ```http
  Authorization: Bearer <apiToken>
  ```

- Lorsque l'[authentification](/fr/docs/multi-user/authentication) est **désactivée** (mode mono-locataire
  ouvert), l'API est ouverte aussi — aucun jeton requis.
- En mode multi-utilisateur, générez et gérez les jetons d'API depuis le panneau d'administration.

## Points de terminaison des ressources

Chaque ressource prend en charge un point de terminaison **liste** et un point **par identifiant** :

| Ressource | Liste | Par ID |
|---|---|---|
| Leurres | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Spots | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Prises | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Cannes | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Moulinets | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Lignes | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Ensembles | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

L'API est **en lecture seule** — il n'y a pas de points de terminaison d'écriture.

## Interface Swagger & spécification OpenAPI

- Explorez et testez l'API de manière interactive avec l'**interface Swagger intégrée à `/api-docs`**.
- La **spécification OpenAPI** brute est servie à **`/api/openapi`**.

## Exemple

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

---
title: API REST
description: "L'API JSON en lecture seule d'OpenFishing : un jeton par compte, les points d'accès et l'interface Swagger intégrée."
---

OpenFishing propose une **API JSON en lecture seule** pour récupérer vos leurres, spots, prises et
matériel dans d'autres outils : un tableur, un tableau de bord maison, un script. Rien ne peut
être modifié par son biais.

## Obtenir votre jeton

- **Connexion activée :** chaque compte a son propre jeton. Copiez-le dans **Paramètres → Mon
  compte → Jeton API**. **Régénérer le jeton** en crée un nouveau ; l'ancien cesse de fonctionner.
- **Sans connexion** (une seule collection partagée, voir [Multi-utilisateur & authentification](/fr/docs/multi-user/authentication)) :
  l'API est ouverte elle aussi et ne demande pas de jeton.

Envoyez le jeton dans l'en-tête `Authorization` :

```http
Authorization: Bearer <votre jeton>
```

## Points d'accès

Chaque ressource a une liste et un élément unique :

- `GET /api/v1/<resource>` les liste.
- `GET /api/v1/<resource>/{id}` renvoie l'élément.

Les ressources sont `lures`, `spots`, `catches`, `rods`, `reels`, `lines` et `combos`. Avec la
connexion activée, vous n'obtenez que les données de votre compte.

## Essayer dans le navigateur

- **`/api-docs`** sur votre instance ouvre une interface Swagger pour essayer chaque point d'accès.
- **`/api/openapi`** fournit la spécification OpenAPI brute, pour les outils qui génèrent des clients.

## Exemple

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  http://192.168.1.50:3000/api/v1/lures
```

La réponse est en JSON. Chaque leurre contient tous ses champs ; ici en version courte :

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

---
title: Démarrage rapide
description: Exécutez OpenFishing en une seule commande, connectez-vous pour la première fois et découvrez où vivent vos données.
---

Le moyen le plus rapide d'essayer OpenFishing sur votre propre machine est un seul `docker run`.

## En une ligne

```bash
docker run -d -p 3000:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing:latest
```

Ouvrez ensuite **http://localhost:3000**.

Cela démarre OpenFishing en mode **mono-locataire, entièrement ouvert** — sans connexion. Quiconque peut atteindre
le port dispose d'un accès complet ; ne l'exposez donc que sur un réseau de confiance jusqu'à ce que vous activiez
l'[authentification](/fr/docs/multi-user/authentication).

## Première connexion

- **Sans `ADMIN_PASSWORD`** (comme ci-dessus) : l'application est ouverte — il n'y a pas d'écran de connexion et toutes
  les fonctionnalités sont immédiatement disponibles.
- **Avec `ADMIN_PASSWORD` défini** : un écran de connexion apparaît. Le nom d'utilisateur admin est toujours
  `admin`, et le mot de passe est celui que vous définissez dans `ADMIN_PASSWORD`. Le compte est
  resynchronisé depuis la variable d'environnement à chaque démarrage.

Consultez [Multi-utilisateur & authentification](/fr/docs/multi-user/authentication) pour une vue complète.

## Où vivent vos données

OpenFishing conserve deux choses que vous devez rendre persistantes :

| Données | Chemin du conteneur | Dans la commande ci-dessus |
|---|---|---|
| Base de données SQLite | `/app/data` | volume nommé `openfishing-db` |
| Photos téléversées | `/app/uploads` | volume nommé `openfishing-uploads` |

:::caution
La base de données et le répertoire des téléversements **doivent** tous deux se trouver sur des volumes persistants. Si vous exécutez le
conteneur sans volumes, tout est perdu lorsque le conteneur est supprimé.
:::

Pour une configuration prête pour la production avec des volumes nommés et des variables d'environnement dans un fichier, utilisez l'[installation docker-compose](/fr/docs/getting-started/installation).

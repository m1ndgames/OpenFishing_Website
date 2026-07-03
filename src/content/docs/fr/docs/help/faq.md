---
title: FAQ / Dépannage
description: Volumes persistants, migrations automatiques, notes sur le reverse proxy et la limite de taille de téléversement.
---

## Ai-je besoin de volumes persistants ?

**Oui.** La base de données SQLite (`/app/data`) et le répertoire des téléversements (`/app/uploads`) doivent
tous deux être sur des volumes persistants. Sans eux, vos données et photos sont perdues lorsque le conteneur
est recréé. Voir [Installation](/fr/docs/getting-started/installation).

## Dois-je exécuter les migrations de base de données ?

**Non.** En production, les **migrations de base de données s'exécutent automatiquement au démarrage**.
Récupérez simplement une image plus récente et redémarrez — le schéma est mis à jour pour vous.

## Comment exécuter OpenFishing derrière un reverse proxy ?

- Terminez TLS au niveau de votre proxy (nginx, Caddy, Traefik…) et transférez vers le port `3000` du conteneur.
- Définissez **`BASE_URL`** sur votre URL HTTPS publique pour que les [QR-codes](/fr/docs/features/qr-labels) et
  les liens de réinitialisation de mot de passe soient corrects.
- **Transférez les en-têtes de proxy standard** (host et forwarded-for/proto) pour que l'application voie la
  bonne URL externe.

## Pourquoi mon téléversement est-il rejeté ?

Les téléversements sont limités par **`BODY_SIZE_LIMIT`** (par défaut ≈ 100 Mo, soit `104857600` octets).
Augmentez-le si vous avez besoin de photos plus grandes, et assurez-vous que tout reverse proxy en amont
autorise aussi la taille de corps plus élevée.

## Y a-t-il une connexion par défaut ?

Non — OpenFishing est **ouvert** sauf si vous définissez `ADMIN_PASSWORD`. Voir
[Multi-utilisateur & authentification](/fr/docs/multi-user/authentication). N'exposez pas une instance ouverte
à l'Internet public.

## Où puis-je obtenir de l'aide ou signaler un bug ?

Ouvrez une issue sur [GitHub](https://github.com/m1ndgames/OpenFishing/issues).

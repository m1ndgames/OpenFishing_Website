---
title: Installation (docker-compose)
description: Une configuration docker-compose complète pour OpenFishing avec des volumes persistants et les variables d'environnement essentielles.
---

Pour tout ce qui va au-delà d'un test rapide, exécutez OpenFishing avec **docker-compose**. Cela vous donne
des volumes nommés, des variables d'environnement au même endroit et des redémarrages faciles.

## docker-compose.yml

```yaml
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing:latest
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Fichier de base de données SQLite persistant (dans le volume /app/data)
      - DATABASE_URL=/app/data/openfishing.db
      # Répertoire des téléversements (dans le volume /app/uploads)
      - UPLOAD_PATH=/app/uploads
      # URL publique — utilisée pour les liens de QR-code et de réinitialisation de mot de passe
      - BASE_URL=https://fishing.yourdomain.com
      # À définir pour activer la connexion ; à omettre pour une instance mono-locataire entièrement ouverte
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Démarrez-le :

```bash
docker compose up -d
```

Puis accédez à votre `BASE_URL` (ou `http://localhost:3000` en local).

## Les volumes persistants sont requis

Les deux volumes ne sont pas optionnels :

- `/app/data` contient la **base de données SQLite** — vos leurres, spots, prises et matériel.
- `/app/uploads` contient chaque **photo** que vous ajoutez.

:::caution
Si l'un des chemins n'est pas monté sur un volume persistant, ces données sont détruites lorsque le
conteneur est recréé. Sauvegardez toujours les deux — voir [Sauvegarde & restauration](/fr/docs/backup/backup-restore).
:::

## Variables d'environnement essentielles

L'exemple ci-dessus utilise l'essentiel. La liste complète — SMTP, IA, mode démo, limites de téléversement et
plus — est documentée dans la [référence des variables d'environnement](/fr/docs/configuration/environment-variables).

## Reverse proxy

Placez OpenFishing derrière votre reverse proxy (nginx, Caddy, Traefik…) et terminez TLS à cet endroit.
Définissez **`BASE_URL`** sur l'URL HTTPS publique afin que les QR-codes et les liens de réinitialisation de mot de passe pointent vers le
bon endroit, et transférez les en-têtes de proxy standard. Consultez la
[FAQ](/fr/docs/help/faq) pour plus de détails.

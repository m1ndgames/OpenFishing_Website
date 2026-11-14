---
title: Variables d'environnement
description: Tous les réglages d'OpenFishing, avec les valeurs par défaut de l'image Docker, regroupés par usage.
prev: false
---

OpenFishing se configure entièrement par des variables d'environnement, dans la section
`environment:` de votre fichier compose (ou avec `-e` sur `docker run`). Les valeurs par défaut
ci-dessous sont celles de l'image Docker. Presque toutes les installations définissent `BASE_URL` et `TZ` ; le reste est facultatif.

## Adresse et heure

- **`BASE_URL`** · par défaut : non définie\
  L'adresse à laquelle on ouvre OpenFishing, avec `http://` ou `https://`, par exemple
  `http://192.168.1.50:3000` ou `https://fishing.example.com`. Le serveur en tire le schéma :
  **sans elle, il suppose HTTPS et chaque enregistrement est refusé sur une installation en
  HTTP simple** (« Cross-site POST form submissions are forbidden »). Elle construit aussi les liens des QR codes et de partage, qui pointent vers `http://localhost:5173` sans elle.
- **`PROTOCOL_HEADER`** · par défaut : non définie\
  Seulement pour un reverse proxy qui indique lui-même le schéma, par exemple
  `PROTOCOL_HEADER=x-forwarded-proto`. Définie, elle l'emporte sur le schéma de `BASE_URL`.
- **`TZ`** · par défaut : UTC\
  Votre fuseau horaire, par exemple `Europe/Paris` ou `America/New_York`. Sans lui, les heures
  de prise sont décalées.

## Stockage

- **`DATABASE_URL`** · par défaut : `/app/data/openfishing.db`\
  Le fichier de base SQLite, dans le volume `/app/data`. Ne pas modifier.
- **`UPLOAD_PATH`** · par défaut : `/app/uploads`\
  L'emplacement des photos, dans le volume `/app/uploads`. Ne pas modifier.
- **`BODY_SIZE_LIMIT`** · par défaut : `104857600` (≈ 100 Mo)\
  La taille maximale d'un envoi en octets. Un reverse proxy en amont doit avoir une limite équivalente.

## Connexion

- **`ADMIN_PASSWORD`** · par défaut : non définie\
  Active la connexion. C'est le mot de passe du compte `admin` (le nom d'utilisateur est toujours
  `admin`), relu à chaque démarrage. Non définie : l'instance est ouverte, sans écran de connexion.
- **`AUTH_PASSWORD`** · obsolète\
  L'ancien nom de `ADMIN_PASSWORD`. Fonctionne encore ; utilisez `ADMIN_PASSWORD`.

Voir [Multi-utilisateur & authentification](/fr/docs/multi-user/authentication).

## E-mail de réinitialisation

L'option « mot de passe oublié » n'apparaît que si au moins `SMTP_HOST` et `SMTP_FROM` sont définies.

- **`SMTP_HOST`** · par défaut : non définie\
  Votre serveur de messagerie.
- **`SMTP_PORT`** · par défaut : `587`\
  Le port `465` implique TLS ; les autres ports utilisent STARTTLS.
- **`SMTP_SECURE`** · par défaut : non définie\
  Mettez `true` pour du TLS implicite (souvent avec le port 465).
- **`SMTP_USER`** / **`SMTP_PASS`** · par défaut : non définies\
  Identifiants du serveur de messagerie. À omettre pour les relais sans authentification.
- **`SMTP_FROM`** · par défaut : non définie\
  L'expéditeur, par exemple `OpenFishing <noreply@example.com>`.

Par exemple, avec un compte de messagerie sur le port 587 :

```yaml title="docker-compose.yml"
    environment:
      - SMTP_HOST=smtp.example.com
      - SMTP_PORT=587
      - SMTP_USER=you@example.com
      # Mot de passe du compte mail
      - SMTP_PASS=
      - SMTP_FROM=you@example.com
```

## Carte

- **`MAP_TILE_URL`** · par défaut : OpenStreetMap\
  Un modèle d'URL de tuiles pour
  utiliser votre propre serveur de tuiles ou un autre à la place d'OpenStreetMap.\
  Par exemple : `https://tiles.example.com/{z}/{x}/{y}.png`
- **`MAP_TILE_ATTRIBUTION`** · par défaut : non définie\
  L'attribution affichée sur la carte pour `MAP_TILE_URL`. La plupart des fournisseurs l'exigent.

## Fonctions d'IA

- **`CHATBOT`** · par défaut : non définie\
  Mettez `true` pour activer le chatbot IA. Nécessite les réglages LiteLLM ci-dessous. Voir [Fonctions d'IA](/fr/docs/ai/ai-features).
- **`LITELLM_URL`** · par défaut : non définie\
  Votre proxy LiteLLM, par exemple `http://litellm:4000`.
- **`LITELLM_MODEL`** · par défaut : non définie\
  Le modèle du chatbot, correspondant à un `model_name` de votre `litellm.config.yaml`.
- **`LITELLM_VISION_MODEL`** · par défaut : non définie\
  Modèle optionnel pour identifier poissons et leurres sur photo. Se rabat sur `LITELLM_MODEL`.

Voir [Fonctions d'IA](/fr/docs/ai/ai-features).

## Démo

- **`DEMO_MODE`** · par défaut : non définie\
  **N'importe quelle** valeur active le mode démo en lecture seule, même `false` ou `0`. Pour le
  désactiver, supprimez la ligne. Voir [Mode démo](/fr/docs/demo/demo-mode).

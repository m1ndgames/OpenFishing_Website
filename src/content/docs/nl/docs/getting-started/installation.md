---
title: Installatie (docker-compose)
description: Een complete docker-compose-opzet voor OpenFishing met persistente volumes en de belangrijkste omgevingsvariabelen.
---

Voor alles wat verder gaat dan een snelle test, draai je OpenFishing met **docker-compose**. Dit geeft je
benoemde volumes, omgevingsvariabelen op één plek en eenvoudige herstarts.

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
      # Persistent SQLite-databasebestand (in het /app/data-volume)
      - DATABASE_URL=/app/data/openfishing.db
      # Uploadmap (in het /app/uploads-volume)
      - UPLOAD_PATH=/app/uploads
      # Publieke URL — gebruikt voor QR-code- en wachtwoordherstellinks
      - BASE_URL=https://fishing.yourdomain.com
      # Instellen om login in te schakelen; weglaten voor een volledig open single-tenant-instantie
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Start het:

```bash
docker compose up -d
```

Blader daarna naar je `BASE_URL` (of lokaal `http://localhost:3000`).

## Persistente volumes zijn verplicht

De twee volumes zijn niet optioneel:

- `/app/data` bevat de **SQLite-database** — je kunstaas, stekken, vangsten en uitrusting.
- `/app/uploads` bevat elke **foto** die je toevoegt.

:::caution
Als een van beide paden niet is gekoppeld aan een persistent volume, wordt die data vernietigd wanneer de
container opnieuw wordt aangemaakt. Maak altijd van beide een back-up — zie [Back-up & herstel](/nl/docs/backup/backup-restore).
:::

## Belangrijkste omgevingsvariabelen

Het voorbeeld hierboven gebruikt de essentie. De volledige lijst — SMTP, AI, demomodus, uploadlimieten en
meer — staat gedocumenteerd in de [referentie van omgevingsvariabelen](/nl/docs/configuration/environment-variables).

## Reverse proxy

Zet OpenFishing achter je reverse proxy (nginx, Caddy, Traefik…) en beëindig TLS daar.
Stel **`BASE_URL`** in op de publieke HTTPS-URL zodat QR-codes en wachtwoordherstellinks naar de
juiste plek wijzen, en stuur de standaard proxy-headers door. Zie de
[FAQ](/nl/docs/help/faq) voor details.

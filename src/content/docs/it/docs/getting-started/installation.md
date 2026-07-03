---
title: Installazione (docker-compose)
description: Una configurazione docker-compose completa per OpenFishing con volumi persistenti e le variabili d'ambiente essenziali.
---

Per qualsiasi cosa oltre a un test rapido, esegui OpenFishing con **docker-compose**. Questo ti offre
volumi denominati, variabili d'ambiente in un unico posto e riavvii facili.

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
      # File del database SQLite persistente (nel volume /app/data)
      - DATABASE_URL=/app/data/openfishing.db
      # Directory degli upload (nel volume /app/uploads)
      - UPLOAD_PATH=/app/uploads
      # URL pubblico — usato per i link ai QR-code e al reset della password
      - BASE_URL=https://fishing.yourdomain.com
      # Imposta per abilitare il login; ometti per un'istanza single-tenant completamente aperta
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Avvialo:

```bash
docker compose up -d
```

Poi vai al tuo `BASE_URL` (o `http://localhost:3000` in locale).

## I volumi persistenti sono obbligatori

I due volumi non sono opzionali:

- `/app/data` contiene il **database SQLite** — le tue esche, spot, catture e attrezzatura.
- `/app/uploads` contiene ogni **foto** che aggiungi.

:::caution
Se uno dei percorsi non è montato su un volume persistente, quei dati vengono distrutti quando il
container viene ricreato. Fai sempre il backup di entrambi — vedi [Backup e ripristino](/it/docs/backup/backup-restore).
:::

## Variabili d'ambiente essenziali

L'esempio sopra usa l'essenziale. L'elenco completo — SMTP, IA, modalità demo, limiti di upload e
altro — è documentato nel [riferimento alle variabili d'ambiente](/it/docs/configuration/environment-variables).

## Reverse proxy

Metti OpenFishing dietro il tuo reverse proxy (nginx, Caddy, Traefik…) e termina lì il TLS.
Imposta **`BASE_URL`** sull'URL HTTPS pubblico in modo che i QR-code e i link di reset della password puntino al
posto giusto, e inoltra gli header di proxy standard. Consulta le
[FAQ](/it/docs/help/faq) per i dettagli.

---
title: Installation (docker-compose)
description: Ein vollständiges docker-compose-Setup für OpenFishing mit persistenten Volumes und den zentralen Umgebungsvariablen.
---

Für alles, was über einen schnellen Test hinausgeht, führe OpenFishing mit **docker-compose** aus. Das gibt dir
benannte Volumes, Umgebungsvariablen an einem Ort und einfache Neustarts.

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
      # Persistente SQLite-Datenbankdatei (im /app/data-Volume)
      - DATABASE_URL=/app/data/openfishing.db
      # Uploads-Verzeichnis (im /app/uploads-Volume)
      - UPLOAD_PATH=/app/uploads
      # Öffentliche URL — für QR-Code- und Passwort-Reset-Links verwendet
      - BASE_URL=https://fishing.yourdomain.com
      # Setzen, um Login zu aktivieren; weglassen für eine vollständig offene Single-Tenant-Instanz
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Starte es:

```bash
docker compose up -d
```

Rufe dann deine `BASE_URL` auf (oder lokal `http://localhost:3000`).

## Persistente Volumes sind erforderlich

Die beiden Volumes sind nicht optional:

- `/app/data` enthält die **SQLite-Datenbank** — deine Köder, Stellen, Fänge und Ausrüstung.
- `/app/uploads` enthält jedes **Foto**, das du hinzufügst.

:::caution
Wenn einer der Pfade nicht in ein persistentes Volume eingebunden ist, werden diese Daten zerstört, wenn der
Container neu erstellt wird. Sichere immer beide — siehe [Sicherung & Wiederherstellung](/de/docs/backup/backup-restore).
:::

## Zentrale Umgebungsvariablen

Das obige Beispiel verwendet die wichtigsten. Die vollständige Liste — SMTP, KI, Demo-Modus, Upload-Limits und
mehr — ist in der [Referenz zu Umgebungsvariablen](/de/docs/configuration/environment-variables) dokumentiert.

## Reverse Proxy

Stelle OpenFishing hinter deinen Reverse Proxy (nginx, Caddy, Traefik …) und terminiere dort TLS.
Setze **`BASE_URL`** auf die öffentliche HTTPS-URL, damit QR-Codes und Passwort-Reset-Links auf die
richtige Stelle zeigen, und leite die üblichen Proxy-Header weiter. Siehe die
[FAQ](/de/docs/help/faq) für Details.

---
title: Instalacja (docker-compose)
description: Kompletna konfiguracja docker-compose dla OpenFishing z trwałymi wolumenami i podstawowymi zmiennymi środowiskowymi.
---

Do wszystkiego poza szybkim testem uruchamiaj OpenFishing za pomocą **docker-compose**. Daje to
nazwane wolumeny, zmienne środowiskowe w jednym miejscu i łatwe restarty.

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
      # Trwały plik bazy danych SQLite (w wolumenie /app/data)
      - DATABASE_URL=/app/data/openfishing.db
      # Katalog przesłanych plików (w wolumenie /app/uploads)
      - UPLOAD_PATH=/app/uploads
      # Publiczny adres URL — używany do linków kodów QR i resetu hasła
      - BASE_URL=https://fishing.yourdomain.com
      # Ustaw, aby włączyć logowanie; pomiń dla w pełni otwartej instancji jednodostępowej
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Uruchom:

```bash
docker compose up -d
```

Następnie przejdź do swojego `BASE_URL` (lub lokalnie `http://localhost:3000`).

## Trwałe wolumeny są wymagane

Oba wolumeny nie są opcjonalne:

- `/app/data` przechowuje **bazę danych SQLite** — Twoje przynęty, łowiska, połowy i sprzęt.
- `/app/uploads` przechowuje każde **zdjęcie**, które dodasz.

:::caution
Jeśli którakolwiek ścieżka nie jest zamontowana do trwałego wolumenu, te dane zostaną zniszczone, gdy
kontener zostanie odtworzony. Zawsze twórz kopię zapasową obu — zobacz [Kopia zapasowa i przywracanie](/pl/docs/backup/backup-restore).
:::

## Podstawowe zmienne środowiskowe

Powyższy przykład używa najważniejszych. Pełna lista — SMTP, AI, tryb demonstracyjny, limity przesyłania i
więcej — jest udokumentowana w [dokumentacji zmiennych środowiskowych](/pl/docs/configuration/environment-variables).

## Reverse proxy

Umieść OpenFishing za swoim reverse proxy (nginx, Caddy, Traefik…) i tam zakończ TLS.
Ustaw **`BASE_URL`** na publiczny adres HTTPS, aby kody QR i linki resetu hasła wskazywały
właściwe miejsce, i przekaż standardowe nagłówki proxy. Zobacz
[FAQ](/pl/docs/help/faq), aby uzyskać szczegóły.

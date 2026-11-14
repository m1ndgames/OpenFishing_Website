---
title: Umgebungsvariablen
description: Alle Einstellungen von OpenFishing mit den Standardwerten im Docker-Image, gruppiert nach Zweck.
prev: false
---

OpenFishing wird komplett über Umgebungsvariablen eingestellt, im Abschnitt `environment:`
deiner Compose-Datei (oder mit `-e` bei `docker run`). Die Standardwerte unten sind die im
Docker-Image. Fast jede Installation setzt `BASE_URL` und `TZ`; alles andere ist optional.

## Adresse und Zeit

- **`BASE_URL`** · Standard: nicht gesetzt\
  Die Adresse, unter der OpenFishing geöffnet wird, mit `http://` oder `https://`, zum Beispiel
  `http://192.168.1.50:3000` oder `https://fishing.example.com`. Der Server übernimmt daraus das
  Schema: **Ohne sie geht er von HTTPS aus, und auf einer reinen HTTP-Installation scheitert
  jedes Speichern** („Cross-site POST form submissions are forbidden“). Sie baut außerdem QR-Code- und Freigabelinks, die ohne sie auf `http://localhost:5173` zeigen.
- **`PROTOCOL_HEADER`** · Standard: nicht gesetzt\
  Nur für einen Reverse Proxy, der das Schema selbst meldet, zum Beispiel
  `PROTOCOL_HEADER=x-forwarded-proto`. Gesetzt hat er Vorrang vor dem Schema aus `BASE_URL`.
- **`TZ`** · Standard: UTC\
  Deine Zeitzone, zum Beispiel `Europe/Berlin` oder `America/New_York`. Ohne sie sind
  Fangzeiten verschoben.

## Speicher

- **`DATABASE_URL`** · Standard: `/app/data/openfishing.db`\
  Die SQLite-Datenbankdatei im Volume `/app/data`. So lassen.
- **`UPLOAD_PATH`** · Standard: `/app/uploads`\
  Wo Fotos liegen, im Volume `/app/uploads`. So lassen.
- **`BODY_SIZE_LIMIT`** · Standard: `104857600` (≈ 100 MB)\
  Der größte Upload in Bytes. Ein vorgeschalteter Reverse Proxy braucht ein passendes Limit.

## Login

- **`ADMIN_PASSWORD`** · Standard: nicht gesetzt\
  Schaltet den Login ein. Es ist das Passwort des Kontos `admin` (der Benutzername ist immer
  `admin`) und wird bei jedem Start neu gelesen. Nicht gesetzt: Die Instanz ist offen, ohne Login.
- **`AUTH_PASSWORD`** · veraltet\
  Der alte Name für `ADMIN_PASSWORD`. Funktioniert noch; nutze `ADMIN_PASSWORD`.

Siehe [Mehrbenutzer & Authentifizierung](/de/docs/multi-user/authentication).

## E-Mail für Passwort-Reset

Die Option „Passwort vergessen“ erscheint nur, wenn mindestens `SMTP_HOST` und `SMTP_FROM`
gesetzt sind.

- **`SMTP_HOST`** · Standard: nicht gesetzt\
  Dein Mailserver.
- **`SMTP_PORT`** · Standard: `587`\
  Port `465` bedeutet TLS; andere Ports nutzen STARTTLS.
- **`SMTP_SECURE`** · Standard: nicht gesetzt\
  Auf `true` setzen für implizites TLS (meist mit Port 465).
- **`SMTP_USER`** / **`SMTP_PASS`** · Standard: nicht gesetzt\
  Anmeldung am Mailserver. Weglassen bei Relays ohne Anmeldung.
- **`SMTP_FROM`** · Standard: nicht gesetzt\
  Der Absender, zum Beispiel `OpenFishing <noreply@example.com>`.

Zum Beispiel mit einem Mailkonto auf Port 587:

```yaml title="docker-compose.yml"
    environment:
      - SMTP_HOST=smtp.example.com
      - SMTP_PORT=587
      - SMTP_USER=you@example.com
      # Passwort deines Mailkontos
      - SMTP_PASS=
      - SMTP_FROM=you@example.com
```

## Karte

- **`MAP_TILE_URL`** · Standard: OpenStreetMap\
  Eine Vorlage für Kartenkachel-URLs, um einen eigenen oder anderen Kachelserver statt OpenStreetMap zu nutzen.\
  Zum Beispiel: `https://tiles.example.com/{z}/{x}/{y}.png`
- **`MAP_TILE_ATTRIBUTION`** · Standard: nicht gesetzt\
  Die Quellenangabe auf der Karte für `MAP_TILE_URL`. Die meisten Kachelanbieter verlangen eine.

## KI-Funktionen

- **`CHATBOT`** · Standard: nicht gesetzt\
  Auf `true` setzen, um den KI-Chatbot einzuschalten. Braucht die LiteLLM-Einstellungen unten. Siehe [KI-Funktionen](/de/docs/ai/ai-features).
- **`LITELLM_URL`** · Standard: nicht gesetzt\
  Dein LiteLLM-Proxy, zum Beispiel `http://litellm:4000`.
- **`LITELLM_MODEL`** · Standard: nicht gesetzt\
  Das Chatbot-Modell, passend zu einem `model_name` in deiner `litellm.config.yaml`.
- **`LITELLM_VISION_MODEL`** · Standard: nicht gesetzt\
  Optionales Modell für Fisch- und Ködererkennung aus Fotos. Fällt auf `LITELLM_MODEL` zurück.

Siehe [KI-Funktionen](/de/docs/ai/ai-features).

## Demo

- **`DEMO_MODE`** · Standard: nicht gesetzt\
  **Jeder** Wert schaltet den schreibgeschützten Demo-Modus ein, auch `false` oder `0`. Zum
  Ausschalten die Zeile entfernen. Siehe [Demo-Modus](/de/docs/demo/demo-mode).

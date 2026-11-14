---
title: Omgevingsvariabelen
description: Alle instellingen van OpenFishing, met de standaardwaarden in het Docker-image, gegroepeerd naar doel.
prev: false
---

OpenFishing stel je volledig in met omgevingsvariabelen, in het onderdeel `environment:` van je
compose-bestand (of met `-e` bij `docker run`). De standaardwaarden hieronder zijn die in het
Docker-image. Bijna elke installatie stelt `BASE_URL` en `TZ` in; de rest is optioneel.

## Adres en tijd

- **`BASE_URL`** · standaard: niet ingesteld\
  Het adres waarop OpenFishing wordt geopend, met `http://` of `https://`, bijvoorbeeld
  `http://192.168.1.50:3000` of `https://fishing.example.com`. De server haalt er het schema
  uit: **zonder gaat hij uit van HTTPS en wordt op een gewone HTTP-installatie elke keer opslaan
  geweigerd** ("Cross-site POST form submissions are forbidden"). Ook bouwt ze de links van QR-codes en deellinks, die zonder haar naar `http://localhost:5173` wijzen.
- **`PROTOCOL_HEADER`** · standaard: niet ingesteld\
  Alleen voor een reverse proxy die het schema zelf doorgeeft, bijvoorbeeld
  `PROTOCOL_HEADER=x-forwarded-proto`. Ingesteld gaat het voor het schema uit `BASE_URL`.
- **`TZ`** · standaard: UTC\
  Je tijdzone, bijvoorbeeld `Europe/Amsterdam` of `America/New_York`. Zonder zijn vangsttijden
  verschoven.

## Opslag

- **`DATABASE_URL`** · standaard: `/app/data/openfishing.db`\
  Het SQLite-databasebestand, in het volume `/app/data`. Zo laten.
- **`UPLOAD_PATH`** · standaard: `/app/uploads`\
  Waar foto's staan, in het volume `/app/uploads`. Zo laten.
- **`BODY_SIZE_LIMIT`** · standaard: `104857600` (≈ 100 MB)\
  De grootste upload in bytes. Een reverse proxy ervoor heeft een gelijke limiet nodig.

## Inloggen

- **`ADMIN_PASSWORD`** · standaard: niet ingesteld\
  Zet inloggen aan. Het is het wachtwoord van het account `admin` (de gebruikersnaam is altijd
  `admin`) en wordt bij elke start opnieuw gelezen. Niet ingesteld: de installatie is open, zonder inlogscherm.
- **`AUTH_PASSWORD`** · verouderd\
  De oude naam van `ADMIN_PASSWORD`. Werkt nog; gebruik `ADMIN_PASSWORD`.

Zie [Multi-user & authenticatie](/nl/docs/multi-user/authentication).

## E-mail voor wachtwoordherstel

De optie "wachtwoord vergeten" verschijnt alleen als minstens `SMTP_HOST` en `SMTP_FROM` zijn ingesteld.

- **`SMTP_HOST`** · standaard: niet ingesteld\
  Je mailserver.
- **`SMTP_PORT`** · standaard: `587`\
  Poort `465` betekent TLS; andere poorten gebruiken STARTTLS.
- **`SMTP_SECURE`** · standaard: niet ingesteld\
  Zet op `true` voor impliciete TLS (meestal met poort 465).
- **`SMTP_USER`** / **`SMTP_PASS`** · standaard: niet ingesteld\
  Inloggegevens van de mailserver. Weglaten bij relays zonder login.
- **`SMTP_FROM`** · standaard: niet ingesteld\
  De afzender, bijvoorbeeld `OpenFishing <noreply@example.com>`.

Bijvoorbeeld met een mailaccount op poort 587:

```yaml title="docker-compose.yml"
    environment:
      - SMTP_HOST=smtp.example.com
      - SMTP_PORT=587
      - SMTP_USER=you@example.com
      # Wachtwoord van je mailaccount
      - SMTP_PASS=
      - SMTP_FROM=you@example.com
```

## Kaart

- **`MAP_TILE_URL`** · standaard: OpenStreetMap\
  Een sjabloon voor tegel-URL's om je
  eigen of een andere tegelserver te gebruiken in plaats van OpenStreetMap.\
  Bijvoorbeeld: `https://tiles.example.com/{z}/{x}/{y}.png`
- **`MAP_TILE_ATTRIBUTION`** · standaard: niet ingesteld\
  De bronvermelding op de kaart voor `MAP_TILE_URL`. De meeste tegelaanbieders vereisen er een.

## AI-functies

- **`CHATBOT`** · standaard: niet ingesteld\
  Zet op `true` om de AI-chatbot aan te zetten. Vereist de LiteLLM-instellingen hieronder. Zie [AI-functies](/nl/docs/ai/ai-features).
- **`LITELLM_URL`** · standaard: niet ingesteld\
  Je LiteLLM-proxy, bijvoorbeeld `http://litellm:4000`.
- **`LITELLM_MODEL`** · standaard: niet ingesteld\
  Het chatbotmodel, overeenkomend met een `model_name` in je `litellm.config.yaml`.
- **`LITELLM_VISION_MODEL`** · standaard: niet ingesteld\
  Optioneel model om vissen en aas op foto's te herkennen. Valt terug op `LITELLM_MODEL`.

Zie [AI-functies](/nl/docs/ai/ai-features).

## Demo

- **`DEMO_MODE`** · standaard: niet ingesteld\
  **Elke** waarde zet de alleen-lezen demomodus aan, ook `false` of `0`. Om hem uit te zetten,
  verwijder je de regel. Zie [Demomodus](/nl/docs/demo/demo-mode).

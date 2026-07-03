---
title: FAQ / Probleemoplossing
description: Persistente volumes, automatische migraties, reverse-proxy-notities en de uploadgroottelimiet.
---

## Heb ik persistente volumes nodig?

**Ja.** Zowel de SQLite-database (`/app/data`) als de uploadmap (`/app/uploads`) moeten op persistente volumes
staan. Zonder deze gaan je gegevens en foto's verloren wanneer de container opnieuw wordt aangemaakt. Zie
[Installatie](/nl/docs/getting-started/installation).

## Moet ik databasemigraties uitvoeren?

**Nee.** In productie **draaien databasemigraties automatisch bij het opstarten**. Haal gewoon een nieuwere
image op en herstart — het schema wordt voor je bijgewerkt.

## Hoe draai ik OpenFishing achter een reverse proxy?

- Beëindig TLS bij je proxy (nginx, Caddy, Traefik…) en stuur door naar poort `3000` van de container.
- Stel **`BASE_URL`** in op je publieke HTTPS-URL zodat [QR-codes](/nl/docs/features/qr-labels) en
  wachtwoordherstellinks correct zijn.
- **Stuur de standaard proxy-headers door** (host en forwarded-for/proto) zodat de app de juiste externe URL ziet.

## Waarom wordt mijn upload geweigerd?

Uploads worden begrensd door **`BODY_SIZE_LIMIT`** (standaard ≈ 100 MB, oftewel `104857600` bytes). Verhoog het
als je grotere foto's nodig hebt, en zorg dat een eventuele reverse proxy ervoor ook de grotere bodygrootte
toestaat.

## Is er standaard een login?

Nee — OpenFishing is **open** tenzij je `ADMIN_PASSWORD` instelt. Zie
[Multi-user & authenticatie](/nl/docs/multi-user/authentication). Stel een open instantie niet bloot aan het
publieke internet.

## Waar kan ik hulp krijgen of een bug melden?

Open een issue op [GitHub](https://github.com/m1ndgames/OpenFishing/issues).

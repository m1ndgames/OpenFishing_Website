---
title: Snelstart
description: Voer OpenFishing uit met één commando, log voor het eerst in en ontdek waar je gegevens staan.
---

De snelste manier om OpenFishing op je eigen machine te proberen is één enkele `docker run`.

## Eenregelig commando

```bash
docker run -d -p 3000:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing:latest
```

Open daarna **http://localhost:3000**.

Dit start OpenFishing in **single-tenant, volledig open** modus — zonder login. Iedereen die
de poort kan bereiken heeft volledige toegang, dus stel deze alleen bloot op een vertrouwd netwerk totdat je
[authenticatie](/nl/docs/multi-user/authentication) inschakelt.

## Eerste keer inloggen

- **Zonder `ADMIN_PASSWORD`** (zoals hierboven): de app is open — er is geen inlogscherm en alle
  functies zijn meteen beschikbaar.
- **Met `ADMIN_PASSWORD` ingesteld**: er verschijnt een inlogscherm. De admin-gebruikersnaam is altijd
  `admin`, en het wachtwoord is wat je instelt in `ADMIN_PASSWORD`. Het account wordt
  bij elke start opnieuw gesynchroniseerd vanuit de omgevingsvariabele.

Zie [Multi-user & authenticatie](/nl/docs/multi-user/authentication) voor het volledige beeld.

## Waar je gegevens staan

OpenFishing bewaart twee dingen die je persistent moet maken:

| Gegevens | Containerpad | In het commando hierboven |
|---|---|---|
| SQLite-database | `/app/data` | benoemd volume `openfishing-db` |
| Geüploade foto's | `/app/uploads` | benoemd volume `openfishing-uploads` |

:::caution
Zowel de database als de uploadmap **moeten** op persistente volumes staan. Als je de
container zonder volumes draait, gaat alles verloren wanneer de container wordt verwijderd.
:::

Voor een productieklare opzet met benoemde volumes en omgevingsvariabelen in een bestand, gebruik de
[docker-compose-installatie](/nl/docs/getting-started/installation).

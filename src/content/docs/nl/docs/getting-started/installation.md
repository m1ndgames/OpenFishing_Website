---
title: OpenFishing installeren
description: Wat je nodig hebt, het docker-compose-bestand, waar je het uitvoert, wat je zou moeten zien en hoe je bijwerkt.
---

OpenFishing draait als één Docker-container op een computer die van jou is. Deze pagina brengt
je van een lege machine naar je eigen draaiende installatie. Eerst rondkijken? De
[live demo](https://demo.openfishing.org) heeft geen installatie en geen aanmelding nodig.

## Voordat je begint

Je hebt nodig:

- **Een computer die altijd aan staat**, zoals een NAS, een mini-pc of een thuisserver.
- **Docker met Docker Compose** daarop. Op veel NAS-systemen is Docker een app in het
  pakketcentrum; volg op Linux de [installatiehandleiding van Docker](https://docs.docker.com/engine/install/). Op Synology heet die Container Manager, op QNAP Container Station.
- **Een 64-bit processor van Intel of AMD (amd64).** Het image bestaat alleen voor amd64, dus
  machines met een ARM-processor kunnen het niet draaien. Controleer het met `uname -m` op de
  machine: `x86_64` betekent dat het goed zit; `aarch64` of `armv7l` betekent een ARM-machine.
  Geen terminal? Zoek de processor van je NAS-model op in de specificaties van de fabrikant.

## Alleen even proberen?

Voor een snelle blik zonder compose-bestand is één commando genoeg:

```bash
docker run -d -p 3000:3000 \
  -e BASE_URL=http://192.168.1.50:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing
```

Vervang `192.168.1.50` door het adres van je machine, zodat links en QR-labels ook op je andere apparaten werken.

Zo start OpenFishing zonder inloggen. Besluit je het te houden, stap dan over op het
compose-bestand: dat houdt je instellingen op één plek.

## 1. Het compose-bestand maken

Maak een map `openfishing` en sla dit bestand erin op:

```yaml title="docker-compose.yml"
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Adres waarop je het opent
      - BASE_URL=http://192.168.1.50:3000
      # Je tijdzone
      - TZ=Europe/Berlin
      # Inloggen: # weg, wachtwoord erin
      # - ADMIN_PASSWORD=

volumes:
  openfishing-db:
  openfishing-uploads:
```

**Pas deze regels aan voordat je start:**

- `BASE_URL`: het adres dat je in de browser typt, met `http://` en de poort, bijvoorbeeld het
  adres van je NAS. **Het is verplicht:** zonder gaat OpenFishing uit van HTTPS en mislukt elke
  keer opslaan met "Cross-site POST form submissions are forbidden". Het komt ook in QR-codes,
  dus gebruik het adres waarop andere apparaten de machine bereiken.
  Geef de machine een vast adres in je router (een *DHCP-reservering*), anders kan het
  veranderen en wijzen je QR-codes nergens meer heen.
- `TZ`: je [tijdzone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), zodat vangsttijden niet verschoven zijn.
- `ADMIN_PASSWORD`: zonder is er geen inlogscherm en heeft iedereen op je netwerk volledige
  toegang. Haal de `#` weg en vul je eigen wachtwoord in voordat anderen of het internet de app
  kunnen bereiken. De gebruikersnaam is altijd `admin`.

## 2. Starten

**Met een NAS-Docker-app of Portainer?** Maak een nieuwe *stack* (of *project*), plak het
bestand hierboven en zet het uit.

**Met een terminal?** Verbind met de machine (bijvoorbeeld via SSH), ga naar de map en voer uit:

```bash
docker compose up -d
```

De eerste start duurt een paar minuten terwijl Docker het image downloadt.

## 3. Openen

Open het adres dat je bij `BASE_URL` hebt ingevuld, bijvoorbeeld **`http://192.168.1.50:3000`**
(of `http://localhost:3000` op de machine zelf). Je zou je lege aasverzameling moeten zien,
klaar voor het eerste aas. Heb je `ADMIN_PASSWORD` ingesteld, log dan eerst in als **`admin`**.

Laadt de pagina nog niet, dan loopt de eerste start misschien nog: `docker compose logs openfishing`
toont `Listening on` zodra hij klaar is.

Je bent binnen. Volgende stap: [je eerste aas toevoegen](/nl/docs/features/lures).

## Waar je gegevens staan

- **SQLite-database (aas, spots, vangsten, uitrusting)**: pad in de container `/app/data`, volume `openfishing-db`
- **Je foto's**: pad in de container `/app/uploads`, volume `openfishing-uploads`

:::caution
Houd beide volumes. Een container zonder volumes verliest alles zodra hij wordt verwijderd. Voor
kopieën elders gebruik je [Back-up & herstel](/nl/docs/backup/backup-restore).
:::

## Bijwerken

Maak eerst een back-up (in de **Instellingen**, zie [Back-up & herstel](/nl/docs/backup/backup-restore)),
haal dan het nieuwe image op en herstart:

```bash
docker compose pull
docker compose up -d
```

Databasemigraties draaien automatisch bij het opstarten, en je gegevens blijven in de volumes.
In een NAS-Docker-app of Portainer gebruik je de actie *pull en opnieuw uitrollen* (of
*bijwerken*) van de stack.

Begonnen met het losse commando? Voer `docker pull ghcr.io/m1ndgames/openfishing` uit,
verwijder de oude container (`docker rm -f <naam>`) en voer hetzelfde `docker run`-commando
opnieuw uit: de benoemde volumes bewaren je gegevens.

Wil je zelf bepalen wanneer je bijwerkt? Vervang de image door een versietag van de
[releasepagina](https://github.com/m1ndgames/OpenFishing/releases), zoals `ghcr.io/m1ndgames/openfishing:<version>`, en pas die aan als je er klaar
voor bent. Houd beide machines op dezelfde versie als je een back-up verhuist.

## Reverse proxy en HTTPS

Om OpenFishing van buitenaf te bereiken, zet je het achter een reverse proxy die HTTPS regelt,
en stel je `BASE_URL` in op het publieke adres. Met Caddy is dit de hele configuratie:

```text title="Caddyfile"
fishing.example.com {
  reverse_proxy localhost:3000
}
```

Met nginx stuur je de standaard proxy-headers door en sta je uploads op fotoformaat toe:

```nginx title="nginx"
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  client_max_body_size 100m;
}
```

Stel eerst `ADMIN_PASSWORD` in: een installatie zonder inloggen hoort nooit op het open internet.

## Volgende stappen

- Voeg je eerste aas toe: [Aasbox](/nl/docs/features/lures) laat zien wat je kunt vastleggen.
- Alle instellingen (e-mail, AI, uploadlimieten, demomodus) staan in de
  [referentie van omgevingsvariabelen](/nl/docs/configuration/environment-variables).
- Vrienden en familie laten meedoen: [Multi-user & authenticatie](/nl/docs/multi-user/authentication).
- Werkt er iets niet? Zie [FAQ & probleemoplossing](/nl/docs/help/faq).

---
title: FAQ & probleemoplossing
description: Oplossingen voor veelvoorkomende installatieproblemen (ARM-machines, poortconflicten, vergeten beheerderswachtwoord) en antwoorden over volumes, updates, uploads en inloggen.
---

Problemen staan hier onder de melding die je echt ziet, dus zoeken op de exacte fouttekst brengt
je meestal direct bij de oplossing.

Waar een antwoord `docker compose up -d` noemt, kun je op een NAS ook de stack opnieuw uitrollen in
de app.

## Installeren

### Opslaan mislukt: "Cross-site POST form submissions are forbidden"

`BASE_URL` ontbreekt of begint met `https://` terwijl je de app via gewoon `http://` opent. Stel het in op precies het adres dat je opent, bijvoorbeeld `BASE_URL=http://192.168.1.50:3000`, en voer `docker compose up -d` opnieuw uit. Achter een reverse proxy zet je `BASE_URL` op het `https://`-adres dat men opent; dat is genoeg. Zie [Omgevingsvariabelen](/nl/docs/configuration/environment-variables#adres-en-tijd).

### De container start niet: "exec format error"

De machine heeft een ARM-processor (gebruikelijk bij kleine NAS-modellen en single-board
computers). Het OpenFishing-image bestaat alleen voor **64-bit Intel of AMD (amd64)**, dus het
kan daar niet draaien. Controleer het met `uname -m`: `x86_64` werkt, `aarch64` of `armv7l` niet.
Zie [Voordat je begint](/nl/docs/getting-started/installation#voordat-je-begint).

### "Port is already allocated" of "address already in use"

Iets anders op de machine gebruikt poort 3000 al. Wijzig het **linker** getal in het
compose-bestand, bijvoorbeeld `"8080:3000"`, voer `docker compose up -d` opnieuw uit en open de
app op poort 8080.

### "docker compose" is geen commando

Oudere Docker-installaties, waaronder sommige NAS-pakketten, gebruiken het losse hulpmiddel `docker-compose`. Voer dezelfde commando's uit met een streepje: `docker-compose up -d`, `docker-compose pull`.

### De pagina laadt niet

- Controleer of de container draait: `docker ps` zou `openfishing` moeten tonen.
- Lees het logboek op fouten: `docker logs openfishing`.
- Gebruik vanaf een ander apparaat het netwerkadres van de machine (bijvoorbeeld
  `http://192.168.1.50:3000`), niet `localhost`.
- Werkt het op de machine maar niet vanaf je telefoon? Sta poort 3000 toe in de firewall van de
  machine (op een NAS in de beveiligings- of firewall-instellingen).

### Heb ik persistente volumes nodig?

**Ja.** Zonder volumes ben je je gegevens en foto's kwijt zodra de container opnieuw wordt gemaakt.
Het compose-bestand in [OpenFishing installeren](/nl/docs/getting-started/installation) maakt ze allebei aan.

## Dagelijks gebruik

### Hoe werk ik bij?

Eerst een back-up, dan `docker compose pull` en `docker compose up -d`. Zie
[Bijwerken](/nl/docs/getting-started/installation#bijwerken).

### Moet ik databasemigraties uitvoeren?

**Nee.** Migraties **draaien automatisch bij het opstarten**. Haal een nieuwer image op en
herstart: het schema wordt voor je bijgewerkt.

### Ik ben het beheerderswachtwoord vergeten

Zet een nieuw `ADMIN_PASSWORD` in het compose-bestand en voer `docker compose up -d` uit. Het
account `admin` wordt bij elke start uit die variabele overgenomen, dus het nieuwe wachtwoord
werkt meteen. Andere gebruikers kunnen het hunne per e-mail herstellen als
[SMTP is ingesteld](/nl/docs/configuration/environment-variables).

### Is er standaard een login?

Nee. OpenFishing is **open** zolang je geen `ADMIN_PASSWORD` instelt. Zie
[Multi-user & authenticatie](/nl/docs/multi-user/authentication). Zet een open installatie niet
op het openbare internet.

### Waarom wordt mijn upload geweigerd?

Uploads zijn begrensd door **`BODY_SIZE_LIMIT`** (standaard ≈ 100 MB, oftewel `104857600`
bytes). Verhoog die voor grotere foto's, en zorg dat een eventuele reverse proxy de grotere
omvang ook toestaat (`client_max_body_size` in nginx).

### "Identificeer uit foto" zegt "Er ging iets mis. Probeer het opnieuw."

AI is niet ingesteld op je server. De knop heeft `LITELLM_URL` en een model nodig; zie
[AI-functies](/nl/docs/ai/ai-features).

### "Uploadquotum overschreden"

De admin heeft een opslaglimiet voor je account ingesteld (**Quotum (MB)** onder **Instellingen →
Beheer**). Verwijder foto's die je niet nodig hebt, of vraag de admin het te verhogen.

### Hoe draai ik OpenFishing achter een reverse proxy?

Beëindig HTTPS op je proxy, stuur door naar poort `3000` met de standaard proxy-headers en stel
`BASE_URL` in op het publieke adres, zodat [QR-codes](/nl/docs/features/qr-labels) en
herstellinks kloppen.
[OpenFishing installeren](/nl/docs/getting-started/installation#reverse-proxy-en-https) heeft
voorbeelden voor Caddy en nginx.

### Stuurt OpenFishing mijn gegevens ergens heen?

Je gegevens en foto's blijven op je server. Het weer voor de bijt-index, kaarttegels en de
optionele AI-functies benaderen externe diensten; de
[Introductie](/nl/docs/getting-started/introduction#wat-met-het-internet-praat) somt precies op welke. Kaarttegels kunnen via [`MAP_TILE_URL`](/nl/docs/configuration/environment-variables#kaart) van je eigen server komen.

### Ik kan 'Deellink aanmaken' niet vinden

Deellinks hebben inloggen nodig. Stel `ADMIN_PASSWORD` in (zie [Multi-user & authenticatie](/nl/docs/multi-user/authentication)) en voer
`docker compose up -d` uit; daarna staat de knop bij elk aas, elke spot en elke vangst.

## Back-ups

### Terugzetten mislukt: "Schemaconflict"

De back-up komt uit een andere versie van OpenFishing. [Werk](/nl/docs/getting-started/installation#bijwerken) beide installaties bij naar de
nieuwste versie, exporteer op de oude een verse back-up en zet die terug.

### "Dit is een persoonlijke back-up" of "Dit is een volledige back-up"

Persoonlijke en volledige back-ups zet je op verschillende plekken terug. Een persoonlijke back-up
uit **Instellingen → Back-up & Herstellen** zet je daar terug. Een volledige back-up, die de admin maakt in **Instellingen → Beheer**, alleen daar.

## Hulp

### Waar krijg ik hulp of meld ik een bug?

Open een issue op [GitHub](https://github.com/m1ndgames/OpenFishing/issues).

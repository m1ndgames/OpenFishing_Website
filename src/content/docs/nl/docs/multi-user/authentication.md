---
title: Multi-user & authenticatie
description: Zet inloggen aan om vrienden en familie te hosten, maak accounts aan, stel opslagquota in en help bij vergeten wachtwoorden.
---

Standaard heeft OpenFishing **één gedeelde verzameling en geen inlogscherm**: iedereen die het
adres kan openen, kan het gebruiken. Op een thuisnetwerk dat je vertrouwt is dat prima. Wil je
vrienden en familie hosten of OpenFishing vanaf internet bereiken, zet dan inloggen aan.

## Inloggen aanzetten

Het compose-bestand uit [OpenFishing installeren](/nl/docs/getting-started/installation) bevat de
regel al, uitgezet met een `#`:

```yaml title="docker-compose.yml"
    environment:
      # Inloggen: # weg, wachtwoord erin
      # - ADMIN_PASSWORD=
```

Haal de `# ` voor `- ADMIN_PASSWORD=` weg, typ je eigen wachtwoord direct na de `=` en voer
`docker compose up -d` uit. Er verschijnt een inlogscherm: log in met de gebruikersnaam
**admin** en dat wachtwoord.

## Het admin-account

- De gebruikersnaam is altijd `admin`.
- Het wachtwoord is wat er in `ADMIN_PASSWORD` staat. OpenFishing leest het bij elke start: pas
  de regel aan en voer `docker compose up -d` opnieuw uit om het te wijzigen.

## Een familielid toevoegen

1. Log in als `admin` en open **Instellingen → Beheer**.
2. Vul onder **Gebruiker aanmaken** **E-mail**, **Gebruikersnaam** en **Wachtwoord** in.
3. Laat **Quotum (MB)** leeg voor onbeperkt uploaden, of vul een getal in.
4. Kies **Aanmaken**.

Stuur diegene het adres, de gebruikersnaam en het wachtwoord. Inloggen kan met e-mail of
gebruikersnaam, en onder **Instellingen → Mijn account → Wachtwoord wijzigen** kiest diegene een
nieuw wachtwoord.

## Wie ziet wat

Elk account heeft eigen aas, spots, vangsten en uitrusting. Niemand ziet die van een ander.

## Accounts beheren

**Instellingen → Beheer** toont alle accounts. Per account kun je gebruikersnaam en e-mail wijzigen, het
opslagquotum aanpassen en in het veld **Wachtwoord opnieuw instellen** een nieuw wachtwoord typen, en dan kies je
**Opslaan**. Je kunt ook de [AI-chatbot](/nl/docs/ai/ai-features) aan- of uitzetten, voor de [REST-API](/nl/docs/api/rest-api) een
**nieuw token genereren**, het account **Uitschakelen** of **Verwijderen**. Verwijderen wist het
account en al zijn gegevens definitief.

## Vergeten wachtwoorden

- **Een familielid:** de beheerder typt een nieuw wachtwoord in het veld **Wachtwoord opnieuw instellen** van dat account onder **Instellingen → Beheer** en kiest **Opslaan**. Met e-mail ingesteld (minstens `SMTP_HOST` en `SMTP_FROM`, zie
  [Omgevingsvariabelen](/nl/docs/configuration/environment-variables)) biedt het inlogscherm ook
  een herstellink per e-mail.
- **De beheerder:** wijzig `ADMIN_PASSWORD` en voer `docker compose up -d` uit.

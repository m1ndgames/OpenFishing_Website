---
title: Multi-user & authenticatie
description: Schakel login in om vrienden en familie te hosten, met isolatie per gebruiker, quota, een beheerpaneel en SMTP-wachtwoordherstel.
---

Standaard draait OpenFishing **single-tenant en volledig open** — zonder login. Stel de omgevingsvariabele
**`ADMIN_PASSWORD`** in om de **multi-usermodus** in te schakelen.

## Login inschakelen

Stel `ADMIN_PASSWORD` in (zie [Omgevingsvariabelen](/nl/docs/configuration/environment-variables)):

```yaml
environment:
  - ADMIN_PASSWORD=change_me
```

Eenmaal ingesteld verschijnt er een inlogscherm. Gebruikers melden zich aan met hun **e-mail/gebruikersnaam +
wachtwoord**.

:::note
`AUTH_PASSWORD` is een **verouderde** alternatieve naam voor `ADMIN_PASSWORD`. Gebruik `ADMIN_PASSWORD`.
:::

## Het admin-account

- Het **`admin`**-account bestaat altijd wanneer auth is ingeschakeld.
- De gebruikersnaam is altijd `admin`; het wachtwoord is waar `ADMIN_PASSWORD` op is ingesteld.
- Het wordt **bij elke start opnieuw gesynchroniseerd vanuit de omgevingsvariabele**, dus de variabele wijzigen
  en herstarten werkt het wachtwoord bij.

## Het beheerpaneel

Beheerders krijgen een paneel op **`/settings/admin`** om de instantie te beheren:

- **Gebruikers** — accounts aanmaken, in-/uitschakelen en beheren.
- **Opslagquota** — begrens hoeveel elke gebruiker kan uploaden.
- **Chatbot-schakelaar** — [AI-functies](/nl/docs/ai/ai-features) per gebruiker in-/uitschakelen.
- **API-tokens** — [REST-API](/nl/docs/api/rest-api)-Bearer-tokens beheren.

## Gegevensisolatie per gebruiker

Het kunstaas, de stekken, vangsten en uitrusting van elke gebruiker zijn **geïsoleerd** — gebruikers zien
alleen hun eigen gegevens.

## Wachtwoordherstel (SMTP)

Als je SMTP configureert (ten minste `SMTP_HOST` en `SMTP_FROM`), kunnen gebruikers vergeten wachtwoorden per
e-mail herstellen. Zonder geconfigureerde SMTP is de herstel-optie verborgen. Zie de
[SMTP-variabelen](/nl/docs/configuration/environment-variables).

## Opslagquota per gebruiker

Beheerders kunnen **opslagquota** per gebruiker instellen vanuit het beheerpaneel, zodat geen enkele gebruiker
de schijf met uploads kan vullen.

---
title: Omgevingsvariabelen
description: Volledige referentie van elke OpenFishing-omgevingsvariabele, met standaardwaarden en beschrijvingen.
---

OpenFishing wordt volledig geconfigureerd via omgevingsvariabelen. Elke variabele is optioneel tenzij anders
vermeld; niet-ingestelde variabelen vallen terug op de standaardwaarden hieronder.

## Referentietabel

| Variabele | Standaard | Beschrijving |
|---|---|---|
| `DATABASE_URL` | `local.db` | Pad naar het SQLite-databasebestand. Wijs dit in Docker naar je datavolume, bijv. `/app/data/openfishing.db`. |
| `UPLOAD_PATH` | `./uploads` | Map voor foto's van kunstaas/stekken/vangsten. **Koppel hier een volume** (bijv. `/app/uploads`). |
| `BASE_URL` | `http://localhost:5173` | Publieke basis-URL, gebruikt om QR-code- en wachtwoordherstellinks op te bouwen. Stel deze in op je echte HTTPS-URL achter een reverse proxy. |
| `ADMIN_PASSWORD` | _(niet ingesteld)_ | Instellen om **multi-user login in te schakelen**. Het is het wachtwoord voor het `admin`-account (gebruikersnaam is altijd `admin`, bij elke start opnieuw gesynchroniseerd). Niet ingesteld = volledig open single-tenant-instantie. |
| `AUTH_PASSWORD` | _(niet ingesteld)_ | **Verouderde** alternatieve naam voor `ADMIN_PASSWORD`. Gebruik bij voorkeur `ADMIN_PASSWORD`. |
| `SMTP_HOST` | _(niet ingesteld)_ | SMTP-serverhostnaam voor "wachtwoord vergeten"-e-mails. |
| `SMTP_PORT` | _(niet ingesteld)_ | SMTP-serverpoort. |
| `SMTP_SECURE` | _(niet ingesteld)_ | TLS gebruiken voor de SMTP-verbinding. |
| `SMTP_USER` | _(niet ingesteld)_ | SMTP-gebruikersnaam. |
| `SMTP_PASS` | _(niet ingesteld)_ | SMTP-wachtwoord. |
| `SMTP_FROM` | _(niet ingesteld)_ | Het `From:`-adres voor uitgaande mail. |
| `DEMO_MODE` | _(niet ingesteld)_ | Elke waarde = **alleen-lezen demomodus** (alle schrijfacties geblokkeerd). |
| `CHATBOT` | _(niet ingesteld)_ | Elke truthy waarde schakelt de **AI-chatbot** in (vereist de LiteLLM-variabelen). |
| `LITELLM_URL` | _(niet ingesteld)_ | Basis-URL van je LiteLLM-proxy, bijv. `http://litellm:4000`. |
| `LITELLM_MODEL` | _(niet ingesteld)_ | Modelnaam die overeenkomt met een `litellm.config.yaml`-vermelding. |
| `LITELLM_VISION_MODEL` | _(niet ingesteld)_ | Optioneel vision-model voor vis-/aasherkenning. Valt terug op `LITELLM_MODEL`. |
| `BODY_SIZE_LIMIT` | `104857600` | Maximale uploadgrootte in bytes (standaard ≈ 100 MB). |

:::note
De SMTP "wachtwoord vergeten"-functie verschijnt alleen wanneer ten minste `SMTP_HOST` **en** `SMTP_FROM` zijn
ingesteld. Zonder deze is de herstel-optie verborgen.
:::

## Opmerkingen over standaardwaarden

De standaardwaarden hierboven zijn de ingebouwde codestandaarden van de app. In een container overschrijf je
doorgaans de paden om naar gekoppelde volumes te wijzen:

```bash
DATABASE_URL=/app/data/openfishing.db
UPLOAD_PATH=/app/uploads
```

## Gegroepeerd op doel

- **Opslag:** `DATABASE_URL`, `UPLOAD_PATH`, `BODY_SIZE_LIMIT`
- **Netwerk / links:** `BASE_URL`
- **Authenticatie:** `ADMIN_PASSWORD` (`AUTH_PASSWORD` verouderd)
- **E-mail / wachtwoordherstel:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- **AI-functies:** `CHATBOT`, `LITELLM_URL`, `LITELLM_MODEL`, `LITELLM_VISION_MODEL`
- **Demo:** `DEMO_MODE`

Zie [Multi-user & authenticatie](/nl/docs/multi-user/authentication), [AI-functies](/nl/docs/ai/ai-features) en
[Demomodus](/nl/docs/demo/demo-mode) voor hoe deze groepen samenkomen.

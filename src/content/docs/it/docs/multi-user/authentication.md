---
title: Multiutente e autenticazione
description: Abilita il login per ospitare amici e familiari, con isolamento per utente, quote, un pannello di amministrazione e reset password via SMTP.
---

Per impostazione predefinita OpenFishing funziona in modalità **single-tenant e completamente aperta** — senza
login. Imposta la variabile d'ambiente **`ADMIN_PASSWORD`** per attivare la **modalità multiutente**.

## Abilitare il login

Imposta `ADMIN_PASSWORD` (vedi [Variabili d'ambiente](/it/docs/configuration/environment-variables)):

```yaml
environment:
  - ADMIN_PASSWORD=change_me
```

Una volta impostata, appare una schermata di login. Gli utenti accedono con la loro **email/nome utente +
password**.

:::note
`AUTH_PASSWORD` è un nome di ripiego **deprecato** per `ADMIN_PASSWORD`. Usa `ADMIN_PASSWORD`.
:::

## L'account admin

- L'account **`admin`** esiste sempre quando l'autenticazione è abilitata.
- Il suo nome utente è sempre `admin`; la sua password è quella impostata in `ADMIN_PASSWORD`.
- Viene **risincronizzato dalla variabile d'ambiente a ogni avvio**, quindi modificare la variabile e riavviare
  aggiorna la password.

## Il pannello di amministrazione

Gli admin hanno un pannello a **`/settings/admin`** per gestire l'istanza:

- **Utenti** — creare, abilitare/disabilitare e gestire gli account.
- **Quote di archiviazione** — limitare quanto ogni utente può caricare.
- **Interruttore chatbot** — abilitare/disabilitare le [funzioni di IA](/it/docs/ai/ai-features) per utente.
- **Token API** — gestire i token Bearer dell'[API REST](/it/docs/api/rest-api).

## Isolamento dei dati per utente

Le esche, gli spot, le catture e l'attrezzatura di ogni utente sono **isolati** — gli utenti vedono solo i propri dati.

## Reset password (SMTP)

Se configuri SMTP (almeno `SMTP_HOST` e `SMTP_FROM`), gli utenti possono reimpostare le password dimenticate
via email. Senza SMTP configurato, l'opzione di reset è nascosta. Vedi le
[variabili SMTP](/it/docs/configuration/environment-variables).

## Quote di archiviazione per utente

Gli admin possono impostare **quote di archiviazione** per utente dal pannello di amministrazione, così nessun
singolo utente può riempire il disco con gli upload.

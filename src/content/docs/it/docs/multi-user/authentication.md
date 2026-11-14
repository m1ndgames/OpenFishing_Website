---
title: Multiutente e autenticazione
description: Attiva l'accesso per ospitare amici e famiglia, crea account, imposta quote di spazio e gestisci le password dimenticate.
---

Di base OpenFishing ha **una sola collezione condivisa e nessun accesso**: chiunque possa aprire
il suo indirizzo può usarlo. Su una rete di casa di cui ti fidi va bene. Per ospitare amici e
famiglia, o per raggiungere OpenFishing da internet, attiva l'accesso.

## Attivare l'accesso

Il file compose di [Installare OpenFishing](/it/docs/getting-started/installation) contiene già la
riga, disattivata con un `#`:

```yaml title="docker-compose.yml"
    environment:
      # Accesso: togli #, metti password
      # - ADMIN_PASSWORD=
```

Togli il `# ` davanti a `- ADMIN_PASSWORD=`, scrivi la tua password subito dopo l'`=` ed esegui
`docker compose up -d`. Compare una schermata di accesso: entra con il nome utente **admin** e
quella password.

## L'account admin

- Il nome utente è sempre `admin`.
- La password è quella scritta in `ADMIN_PASSWORD`. OpenFishing la rilegge a ogni avvio: per
  cambiarla, modifica la riga ed esegui di nuovo `docker compose up -d`.

## Aggiungere un familiare

1. Entra come `admin` e apri **Impostazioni → Admin**.
2. In **Crea utente**, compila **E-mail**, **Nome utente** e **Password**.
3. Lascia **Quota (MB)** vuota per caricamenti illimitati, o inserisci un numero.
4. Scegli **Crea**.

Mandagli l'indirizzo, il suo nome utente e la password. Entra con e-mail o nome utente e può
scegliere una nuova password in **Impostazioni → Il mio account → Cambia password**.

## Chi vede cosa

Ogni account ha le proprie esche, spot, catture e attrezzatura. Nessuno vede quelle degli altri.

## Gestire gli account

**Impostazioni → Admin** elenca tutti gli account. Per ognuno puoi modificare nome utente ed email,
cambiare la quota di spazio e inserire una nuova password nel campo **Reimposta password**, poi selezionare
**Salva**. Puoi anche attivare o disattivare il [chatbot IA](/it/docs/ai/ai-features), **Rigenera token** per l'[API
REST](/it/docs/api/rest-api), **Disattivare** l'account o **Eliminarlo**. L'eliminazione cancella per sempre l'account
e tutti i suoi dati.

## Password dimenticate

- **Un familiare:** l'admin inserisce una nuova password nel campo **Reimposta password** di quell'account in **Impostazioni → Admin** e seleziona **Salva**. Con l'e-mail
  configurata (almeno `SMTP_HOST` e `SMTP_FROM`, vedi
  [Variabili d'ambiente](/it/docs/configuration/environment-variables)), la schermata di accesso
  offre anche un link via e-mail.
- **L'admin:** cambia `ADMIN_PASSWORD` ed esegui `docker compose up -d`.

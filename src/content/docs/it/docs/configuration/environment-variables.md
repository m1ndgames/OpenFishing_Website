---
title: Variabili d'ambiente
description: Riferimento completo di ogni variabile d'ambiente di OpenFishing, con valori predefiniti e descrizioni.
---

OpenFishing si configura interamente tramite variabili d'ambiente. Ogni variabile è opzionale tranne dove
indicato; le variabili non impostate ricadono sui valori predefiniti qui sotto.

## Tabella di riferimento

| Variabile | Predefinito | Descrizione |
|---|---|---|
| `DATABASE_URL` | `local.db` | Percorso del file di database SQLite. In Docker, puntalo al tuo volume dati, es. `/app/data/openfishing.db`. |
| `UPLOAD_PATH` | `./uploads` | Directory per le foto di esche/spot/catture. **Monta un volume** qui (es. `/app/uploads`). |
| `BASE_URL` | `http://localhost:5173` | URL di base pubblico, usato per costruire i link ai QR-code e al reset della password. Impostalo sul tuo vero URL HTTPS dietro un reverse proxy. |
| `ADMIN_PASSWORD` | _(non impostato)_ | Impostare per **abilitare il login multiutente**. È la password dell'account `admin` (il nome utente è sempre `admin`, risincronizzato a ogni avvio). Non impostato = istanza single-tenant completamente aperta. |
| `AUTH_PASSWORD` | _(non impostato)_ | Nome di ripiego **deprecato** per `ADMIN_PASSWORD`. Preferisci `ADMIN_PASSWORD`. |
| `SMTP_HOST` | _(non impostato)_ | Hostname del server SMTP per le email di "password dimenticata". |
| `SMTP_PORT` | _(non impostato)_ | Porta del server SMTP. |
| `SMTP_SECURE` | _(non impostato)_ | Usare TLS per la connessione SMTP. |
| `SMTP_USER` | _(non impostato)_ | Nome utente SMTP. |
| `SMTP_PASS` | _(non impostato)_ | Password SMTP. |
| `SMTP_FROM` | _(non impostato)_ | L'indirizzo `From:` per la posta in uscita. |
| `DEMO_MODE` | _(non impostato)_ | Qualsiasi valore = **modalità demo di sola lettura** (tutte le scritture bloccate). |
| `CHATBOT` | _(non impostato)_ | Qualsiasi valore truthy abilita il **chatbot IA** (richiede le variabili LiteLLM). |
| `LITELLM_URL` | _(non impostato)_ | URL di base del tuo proxy LiteLLM, es. `http://litellm:4000`. |
| `LITELLM_MODEL` | _(non impostato)_ | Nome di modello corrispondente a una voce di `litellm.config.yaml`. |
| `LITELLM_VISION_MODEL` | _(non impostato)_ | Modello con capacità visive opzionale per l'identificazione pesce/esca. Ricade su `LITELLM_MODEL`. |
| `BODY_SIZE_LIMIT` | `104857600` | Dimensione massima di upload in byte (predefinito ≈ 100 MB). |

:::note
La funzione SMTP "password dimenticata" appare solo quando almeno `SMTP_HOST` **e** `SMTP_FROM` sono impostati.
Senza di essi, l'opzione di reset è nascosta.
:::

## Note sui valori predefiniti

I valori predefiniti sopra sono i default integrati nel codice dell'app. In un container di solito
sovrascriverai i percorsi per puntare a volumi montati:

```bash
DATABASE_URL=/app/data/openfishing.db
UPLOAD_PATH=/app/uploads
```

## Raggruppate per scopo

- **Archiviazione:** `DATABASE_URL`, `UPLOAD_PATH`, `BODY_SIZE_LIMIT`
- **Rete / link:** `BASE_URL`
- **Autenticazione:** `ADMIN_PASSWORD` (`AUTH_PASSWORD` deprecato)
- **Email / reset password:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- **Funzioni di IA:** `CHATBOT`, `LITELLM_URL`, `LITELLM_MODEL`, `LITELLM_VISION_MODEL`
- **Demo:** `DEMO_MODE`

Vedi [Multiutente e autenticazione](/it/docs/multi-user/authentication),
[Funzioni di IA](/it/docs/ai/ai-features) e [Modalità demo](/it/docs/demo/demo-mode) per come questi gruppi si
combinano.

---
title: Variabili d'ambiente
description: Tutte le impostazioni di OpenFishing, con i valori predefiniti dell'immagine Docker, raggruppate per funzione.
prev: false
---

OpenFishing si configura interamente con variabili d'ambiente, nella sezione `environment:` del
tuo file compose (o con `-e` su `docker run`). I valori predefiniti qui sotto sono quelli
dell'immagine Docker. Quasi tutte le installazioni impostano `BASE_URL` e `TZ`; il resto è facoltativo.

## Indirizzo e ora

- **`BASE_URL`** · predefinito: non impostata\
  L'indirizzo con cui si apre OpenFishing, con `http://` o `https://`, ad esempio
  `http://192.168.1.50:3000` o `https://fishing.example.com`. Il server ne ricava lo schema:
  **senza, presume HTTPS e su un'installazione in semplice HTTP ogni salvataggio viene
  rifiutato** («Cross-site POST form submissions are forbidden»). Costruisce anche i link dei codici QR e di condivisione, che senza di essa puntano a `http://localhost:5173`.
- **`PROTOCOL_HEADER`** · predefinito: non impostata\
  Solo per un reverse proxy che comunica da sé lo schema, ad esempio
  `PROTOCOL_HEADER=x-forwarded-proto`. Se impostata, ha la precedenza sullo schema di `BASE_URL`.
- **`TZ`** · predefinito: UTC\
  Il tuo fuso orario, ad esempio `Europe/Rome` o `America/New_York`. Senza, gli orari delle
  catture sono sfalsati.

## Archiviazione

- **`DATABASE_URL`** · predefinito: `/app/data/openfishing.db`\
  Il file del database SQLite, nel volume `/app/data`. Non modificare.
- **`UPLOAD_PATH`** · predefinito: `/app/uploads`\
  Dove sono salvate le foto, nel volume `/app/uploads`. Non modificare.
- **`BODY_SIZE_LIMIT`** · predefinito: `104857600` (≈ 100 MB)\
  Il caricamento più grande in byte. Un reverse proxy davanti richiede un limite equivalente.

## Accesso

- **`ADMIN_PASSWORD`** · predefinito: non impostata\
  Attiva l'accesso. È la password dell'account `admin` (il nome utente è sempre `admin`),
  riletta a ogni avvio. Non impostata: l'istanza è aperta, senza schermata di accesso.
- **`AUTH_PASSWORD`** · deprecata\
  Il vecchio nome di `ADMIN_PASSWORD`. Funziona ancora; usa `ADMIN_PASSWORD`.

Vedi [Multiutente e autenticazione](/it/docs/multi-user/authentication).

## Email per reimpostare la password

L'opzione «password dimenticata» compare solo se sono impostate almeno `SMTP_HOST` e `SMTP_FROM`.

- **`SMTP_HOST`** · predefinito: non impostata\
  Il tuo server di posta.
- **`SMTP_PORT`** · predefinito: `587`\
  La porta `465` implica TLS; le altre usano STARTTLS.
- **`SMTP_SECURE`** · predefinito: non impostata\
  Impostala a `true` per TLS implicito (di solito con la porta 465).
- **`SMTP_USER`** / **`SMTP_PASS`** · predefinito: non impostate\
  Credenziali del server di posta. Omettile per i relay che non le richiedono.
- **`SMTP_FROM`** · predefinito: non impostata\
  Il mittente, ad esempio `OpenFishing <noreply@example.com>`.

Ad esempio, con un account di posta sulla porta 587:

```yaml title="docker-compose.yml"
    environment:
      - SMTP_HOST=smtp.example.com
      - SMTP_PORT=587
      - SMTP_USER=you@example.com
      # Password dell'account di posta
      - SMTP_PASS=
      - SMTP_FROM=you@example.com
```

## Mappa

- **`MAP_TILE_URL`** · predefinito: OpenStreetMap\
  Un modello di URL delle tessere per
  usare un tuo server di tessere o un altro al posto di OpenStreetMap.\
  Ad esempio: `https://tiles.example.com/{z}/{x}/{y}.png`
- **`MAP_TILE_ATTRIBUTION`** · predefinito: non impostata\
  L'attribuzione mostrata sulla mappa per `MAP_TILE_URL`. La maggior parte dei fornitori la richiede.

## Funzioni di IA

- **`CHATBOT`** · predefinito: non impostata\
  Impostala a `true` per attivare il chatbot IA. Richiede le impostazioni LiteLLM qui sotto. Vedi [Funzioni di IA](/it/docs/ai/ai-features).
- **`LITELLM_URL`** · predefinito: non impostata\
  Il tuo proxy LiteLLM, ad esempio `http://litellm:4000`.
- **`LITELLM_MODEL`** · predefinito: non impostata\
  Il modello del chatbot, corrispondente a un `model_name` del tuo `litellm.config.yaml`.
- **`LITELLM_VISION_MODEL`** · predefinito: non impostata\
  Modello opzionale per riconoscere pesci ed esche dalle foto. Ripiega su `LITELLM_MODEL`.

Vedi [Funzioni di IA](/it/docs/ai/ai-features).

## Demo

- **`DEMO_MODE`** · predefinito: non impostata\
  **Qualsiasi** valore attiva la modalità demo in sola lettura, anche `false` o `0`. Per
  disattivarla, rimuovi la riga. Vedi [Modalità demo](/it/docs/demo/demo-mode).

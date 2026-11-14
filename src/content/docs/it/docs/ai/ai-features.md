---
title: Funzioni di IA
description: "Attiva il chatbot opzionale Amico Pescatore e l'identificazione da foto con un proxy LiteLLM accanto a OpenFishing."
---

OpenFishing ha due funzioni di IA **facoltative**: il chatbot **Amico Pescatore** e **Identifica dalla foto**. Entrambe passano
da [LiteLLM](https://litellm.ai/), un piccolo proxy che esegui accanto a OpenFishing e che inoltra le
richieste al fornitore di IA che scegli. La tua chiave API resta sul tuo server.

## Configurazione

1. Nella cartella del tuo `docker-compose.yml`, crea `litellm.config.yaml`:

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Metti la chiave API del tuo fornitore in un file chiamato `.env` nella stessa cartella:

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Sostituisci il tuo `docker-compose.yml` con questa versione. È il file di installazione più le righe
   di IA e il servizio `litellm`; mantieni le tue righe di indirizzo, fuso orario e password.

   ```yaml title="docker-compose.yml" wrap=false
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
         # Indirizzo con cui lo apri
         - BASE_URL=http://192.168.1.50:3000
         # Il tuo fuso orario
         - TZ=Europe/Berlin
         # Accesso: togli #, metti password
         # - ADMIN_PASSWORD=
         - CHATBOT=true
         - LITELLM_URL=http://litellm:4000
         - LITELLM_MODEL=claude-sonnet
       depends_on:
         - litellm

     litellm:
       image: ghcr.io/berriai/litellm:main-latest
       command: ["--config", "/config.yaml"]
       volumes:
         - ./litellm.config.yaml:/config.yaml
       env_file:
         - .env

   volumes:
     openfishing-db:
     openfishing-uploads:
   ```

4. Esegui di nuovo `docker compose up -d`, o ridistribuisci lo stack nell'app del NAS.

Preferisci OpenAI? In `litellm.config.yaml`, usa `model: openai/gpt-4o` con
`api_key: os.environ/OPENAI_API_KEY` e metti `OPENAI_API_KEY` in `.env` al suo posto. `LITELLM_MODEL` deve
corrispondere a un `model_name` del file.

## Amico Pescatore

Con `CHATBOT=true`, un pulsante di chat apre **Amico Pescatore**. Risponde a domande sulle tue esche, spot,
catture e attrezzatura, e conosce il meteo attuale quando chiedi di un luogo. Con l'accesso attivo,
l'admin può disattivarlo per persona in **Impostazioni → Admin** (**Chatbot: attivo**).

## Identifica dalla foto

Quando aggiungi una nuova cattura o esca, il pulsante **Identifica dalla foto** compare appena c'è una foto. Suggerisce
la specie, o i dettagli dell'esca. Richiede `LITELLM_URL` e usa `LITELLM_VISION_MODEL` se lo imposti
(un modello che sa leggere le immagini), altrimenti `LITELLM_MODEL`. Non serve `CHATBOT`. Senza IA
configurata il pulsante compare comunque, ma risponde «Qualcosa è andato storto. Riprova.»

:::note
Senza queste impostazioni non c'è il chatbot e **Identifica dalla foto** non può rispondere; tutto il resto
funziona allo stesso modo. Tutte le impostazioni sono in [Variabili d'ambiente](/it/docs/configuration/environment-variables).
:::

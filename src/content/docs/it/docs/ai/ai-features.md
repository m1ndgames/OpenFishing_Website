---
title: Funzioni di IA
description: Abilita il chatbot self-hosted opzionale e l'identificazione di pesci ed esche da foto tramite un sidecar LiteLLM.
---

OpenFishing ha funzioni di IA **opzionali** alimentate da un proxy **[LiteLLM](https://litellm.ai/)** che esegui
tu stesso. Le tue chiavi API restano lato server — non vengono mai esposte al browser.

## Abilitare il chatbot

Imposta queste variabili d'ambiente (vedi
[Variabili d'ambiente](/it/docs/configuration/environment-variables)):

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — qualsiasi valore truthy attiva il widget di chat fluttuante.
- **`LITELLM_URL`** — l'URL base del tuo proxy LiteLLM.
- **`LITELLM_MODEL`** — un nome di modello corrispondente a una voce del tuo `litellm.config.yaml`.

Il chatbot può rispondere a domande sui **tuoi dati** (le tue esche, spot, catture e attrezzatura).

## Eseguire LiteLLM come sidecar

Esegui LiteLLM insieme a OpenFishing nello stesso progetto compose:

```yaml
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing:latest
    ports:
      - "3000:3000"
    environment:
      - CHATBOT=true
      - LITELLM_URL=http://litellm:4000
      - LITELLM_MODEL=your-model-name
      - LITELLM_VISION_MODEL=your-vision-model   # opzionale
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads

  litellm:
    image: ghcr.io/berriai/litellm:main-latest
    command: ["--config", "/app/config.yaml"]
    volumes:
      - ./litellm.config.yaml:/app/config.yaml
    # Fornisci qui le chiavi API del tuo provider, es. tramite un env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

Il tuo `litellm.config.yaml` definisce i modelli (`LITELLM_MODEL` / `LITELLM_VISION_MODEL` devono corrispondere
ai nomi che dichiara). Le chiavi API del provider sono configurate sul lato **LiteLLM** e non raggiungono mai il
frontend di OpenFishing.

## Identificazione da foto

Se imposti **`LITELLM_VISION_MODEL`** (un modello con capacità visive), OpenFishing aggiunge:

- **Identificazione dei pesci** — suggerisci una specie da una foto nel **modulo di cattura**.
- **Identificazione delle esche** — riconosci un'esca da una foto nel **modulo di aggiunta esca**.

Se `LITELLM_VISION_MODEL` non è impostato, l'identificazione ricade su `LITELLM_MODEL`.

:::note
Le funzioni di IA sono del tutto opzionali. Senza nessuna di queste variabili impostata, OpenFishing funziona
esattamente come prima — nessun chatbot, nessuna identificazione.
:::

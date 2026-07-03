---
title: Funkcje AI
description: Włącz opcjonalny samodzielnie hostowany chatbot oraz rozpoznawanie ryb i przynęt ze zdjęć za pomocą sidecara LiteLLM.
---

OpenFishing ma **opcjonalne** funkcje AI napędzane przez proxy **[LiteLLM](https://litellm.ai/)**, które
uruchamiasz samodzielnie. Twoje klucze API pozostają po stronie serwera — nigdy nie są ujawniane przeglądarce.

## Włączanie chatbota

Ustaw te zmienne środowiskowe (zobacz [Zmienne środowiskowe](/pl/docs/configuration/environment-variables)):

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — dowolna wartość prawdziwa włącza pływający widget czatu.
- **`LITELLM_URL`** — bazowy adres URL Twojego proxy LiteLLM.
- **`LITELLM_MODEL`** — nazwa modelu pasująca do wpisu w Twoim `litellm.config.yaml`.

Chatbot może odpowiadać na pytania o **Twoje własne dane** (Twoje przynęty, łowiska, połowy i sprzęt).

## Uruchamianie LiteLLM jako sidecara

Uruchom LiteLLM obok OpenFishing w tym samym projekcie compose:

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
      - LITELLM_VISION_MODEL=your-vision-model   # opcjonalnie
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads

  litellm:
    image: ghcr.io/berriai/litellm:main-latest
    command: ["--config", "/app/config.yaml"]
    volumes:
      - ./litellm.config.yaml:/app/config.yaml
    # Podaj tutaj klucze API swojego dostawcy, np. przez env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

Twój `litellm.config.yaml` definiuje modele (`LITELLM_MODEL` / `LITELLM_VISION_MODEL` muszą pasować do nazw,
które deklaruje). Klucze API dostawcy są konfigurowane po stronie **LiteLLM** i nigdy nie docierają do frontendu
OpenFishing.

## Identyfikacja ze zdjęć

Jeśli ustawisz **`LITELLM_VISION_MODEL`** (model obsługujący wizję), OpenFishing dodaje:

- **Identyfikacja ryb** — zasugeruj gatunek ze zdjęcia w **formularzu połowu**.
- **Identyfikacja przynęt** — rozpoznaj przynętę ze zdjęcia w **formularzu dodawania przynęty**.

Jeśli `LITELLM_VISION_MODEL` nie jest ustawiony, identyfikacja wraca do `LITELLM_MODEL`.

:::note
Funkcje AI są całkowicie opcjonalne. Bez żadnej z tych zmiennych OpenFishing działa dokładnie tak jak wcześniej
— bez chatbota, bez identyfikacji.
:::

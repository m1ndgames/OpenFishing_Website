---
title: AI-functies
description: Schakel de optionele zelf-gehoste chatbot en fotogebaseerde vis- en aasherkenning in via een LiteLLM-sidecar.
---

OpenFishing heeft **optionele** AI-functies aangedreven door een **[LiteLLM](https://litellm.ai/)**-proxy die je
zelf draait. Je API-sleutels blijven serverzijdig — ze worden nooit aan de browser blootgesteld.

## De chatbot inschakelen

Stel deze omgevingsvariabelen in (zie [Omgevingsvariabelen](/nl/docs/configuration/environment-variables)):

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — elke truthy waarde schakelt de zwevende chatwidget in.
- **`LITELLM_URL`** — de basis-URL van je LiteLLM-proxy.
- **`LITELLM_MODEL`** — een modelnaam die overeenkomt met een vermelding in je `litellm.config.yaml`.

De chatbot kan vragen beantwoorden over **je eigen gegevens** (je kunstaas, stekken, vangsten en uitrusting).

## LiteLLM als sidecar draaien

Draai LiteLLM naast OpenFishing in hetzelfde compose-project:

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
      - LITELLM_VISION_MODEL=your-vision-model   # optioneel
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads

  litellm:
    image: ghcr.io/berriai/litellm:main-latest
    command: ["--config", "/app/config.yaml"]
    volumes:
      - ./litellm.config.yaml:/app/config.yaml
    # Geef hier je provider-API-sleutels op, bijv. via een env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

Je `litellm.config.yaml` definieert de modellen (`LITELLM_MODEL` / `LITELLM_VISION_MODEL` moeten overeenkomen
met de namen die het declareert). Provider-API-sleutels worden aan de **LiteLLM**-kant geconfigureerd en
bereiken nooit de frontend van OpenFishing.

## Foto-identificatie

Als je **`LITELLM_VISION_MODEL`** instelt (een model met vision-mogelijkheden), voegt OpenFishing toe:

- **Visherkenning** — stel een soort voor op basis van een foto in het **vangstformulier**.
- **Aasherkenning** — herken een kunstaas op basis van een foto in het **kunstaas-toevoegen-formulier**.

Als `LITELLM_VISION_MODEL` niet is ingesteld, valt de identificatie terug op `LITELLM_MODEL`.

:::note
AI-functies zijn volledig optioneel. Zonder een van deze variabelen ingesteld draait OpenFishing precies zoals
voorheen — geen chatbot, geen identificatie.
:::

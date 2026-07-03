---
title: Funciones de IA
description: Activa el chatbot autoalojado opcional y la identificación de peces y señuelos por foto mediante un sidecar de LiteLLM.
---

OpenFishing tiene funciones de IA **opcionales** impulsadas por un proxy **[LiteLLM](https://litellm.ai/)** que
ejecutas tú mismo. Tus claves de API permanecen en el servidor — nunca se exponen al navegador.

## Activar el chatbot

Define estas variables de entorno (consulta
[Variables de entorno](/es/docs/configuration/environment-variables)):

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — cualquier valor verdadero activa el widget de chat flotante.
- **`LITELLM_URL`** — la URL base de tu proxy LiteLLM.
- **`LITELLM_MODEL`** — un nombre de modelo que coincida con una entrada de tu `litellm.config.yaml`.

El chatbot puede responder preguntas sobre **tus propios datos** (tus señuelos, puntos, capturas y aparejos).

## Ejecutar LiteLLM como sidecar

Ejecuta LiteLLM junto a OpenFishing en el mismo proyecto de compose:

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
      - LITELLM_VISION_MODEL=your-vision-model   # opcional
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads

  litellm:
    image: ghcr.io/berriai/litellm:main-latest
    command: ["--config", "/app/config.yaml"]
    volumes:
      - ./litellm.config.yaml:/app/config.yaml
    # Indica aquí las claves de API de tu proveedor, p. ej. mediante un env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

Tu `litellm.config.yaml` define los modelos (`LITELLM_MODEL` / `LITELLM_VISION_MODEL` deben coincidir con los
nombres que declara). Las claves de API del proveedor se configuran en el lado de **LiteLLM** y nunca llegan al
frontend de OpenFishing.

## Identificación por foto

Si defines **`LITELLM_VISION_MODEL`** (un modelo con capacidad de visión), OpenFishing añade:

- **Identificación de peces** — sugerir una especie a partir de una foto en el **formulario de captura**.
- **Identificación de señuelos** — reconocer un señuelo a partir de una foto en el **formulario de añadir señuelo**.

Si `LITELLM_VISION_MODEL` no está definido, la identificación recurre a `LITELLM_MODEL`.

:::note
Las funciones de IA son totalmente opcionales. Sin ninguna de estas variables definida, OpenFishing funciona
exactamente como antes — sin chatbot, sin identificación.
:::

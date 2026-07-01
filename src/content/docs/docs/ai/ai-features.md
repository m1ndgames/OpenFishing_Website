---
title: AI features
description: Enable the optional self-hosted chatbot and photo-based fish and lure identification via a LiteLLM sidecar.
---

OpenFishing has **optional** AI features powered by a **[LiteLLM](https://litellm.ai/)** proxy
that you run yourself. Your API keys stay server-side — they're never exposed to the browser.

## Enabling the chatbot

Set these environment variables (see
[Environment variables](/docs/configuration/environment-variables)):

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — any truthy value turns on the floating chat widget.
- **`LITELLM_URL`** — the base URL of your LiteLLM proxy.
- **`LITELLM_MODEL`** — a model name matching an entry in your `litellm.config.yaml`.

The chatbot can answer questions about **your own data** (your lures, spots, catches and
tackle).

## Running LiteLLM as a sidecar

Run LiteLLM alongside OpenFishing in the same compose project:

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
      - LITELLM_VISION_MODEL=your-vision-model   # optional
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads

  litellm:
    image: ghcr.io/berriai/litellm:main-latest
    command: ["--config", "/app/config.yaml"]
    volumes:
      - ./litellm.config.yaml:/app/config.yaml
    # Provide your provider API keys here, e.g. via an env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

Your `litellm.config.yaml` defines the models (`LITELLM_MODEL` /
`LITELLM_VISION_MODEL` must match names it declares). Provider API keys are configured on the
**LiteLLM** side and never reach OpenFishing's frontend.

## Photo identification

If you set **`LITELLM_VISION_MODEL`** (a vision-capable model), OpenFishing adds:

- **Fish identification** — suggest a species from a photo on the **catch form**.
- **Lure identification** — recognise a lure from a photo on the **add-lure form**.

If `LITELLM_VISION_MODEL` is unset, identification falls back to `LITELLM_MODEL`.

:::note
AI features are entirely optional. With none of these variables set, OpenFishing runs exactly
as before — no chatbot, no identification.
:::

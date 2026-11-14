---
title: AI features
description: "Turn on the optional Fishing Buddy chatbot and photo identification with a LiteLLM proxy you run next to OpenFishing."
---

OpenFishing has two **optional** AI features: the **Fishing Buddy** chatbot and **Identify from photo**. Both go through
[LiteLLM](https://litellm.ai/), a small proxy you run next to OpenFishing that forwards requests to
the AI provider you choose. Your API key stays on your server.

## Set it up

1. In the folder with your `docker-compose.yml`, create `litellm.config.yaml`:

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Put your provider's API key in a file named `.env` in the same folder:

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Replace your `docker-compose.yml` with this version. It is the install file plus the AI lines
   and the `litellm` service; keep your own address, time zone and password lines.

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
         # Address you open it at
         - BASE_URL=http://192.168.1.50:3000
         # Your time zone
         - TZ=Europe/Berlin
         # Login: remove #, add a password
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

4. Run `docker compose up -d` again, or redeploy the stack in your NAS app.

Using OpenAI instead? In `litellm.config.yaml`, use `model: openai/gpt-4o` with
`api_key: os.environ/OPENAI_API_KEY`, and put `OPENAI_API_KEY` in `.env` instead. `LITELLM_MODEL` must match a
`model_name` in the file.

## Fishing Buddy

With `CHATBOT=true`, a chat button opens **Fishing Buddy**. It answers questions about your own lures,
spots, catches and tackle, and knows the current weather when you ask about a place. With login
turned on, the admin can switch it off per person in **Settings → Admin** (**Chatbot: on**).

## Identify from photo

When you add a new catch or lure, an **Identify from photo** button appears once there is a photo. It suggests
the species, or the lure's details. It needs `LITELLM_URL` and uses `LITELLM_VISION_MODEL` if you set
one (a model that can read images), otherwise `LITELLM_MODEL`. It doesn't need `CHATBOT`. Without
AI set up the button still shows, but answers "Something went wrong. Please try again."

:::note
Without these settings there is no chatbot and **Identify from photo** can't answer; everything else works the
same. All settings are listed under [Environment variables](/docs/configuration/environment-variables).
:::

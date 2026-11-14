---
title: AI-functies
description: "Zet de optionele chatbot Visbuddy en fotoherkenning aan met een LiteLLM-proxy naast OpenFishing."
---

OpenFishing heeft twee **optionele** AI-functies: de chatbot **Visbuddy** en **Identificeer uit foto**. Beide lopen via
[LiteLLM](https://litellm.ai/), een kleine proxy naast OpenFishing die verzoeken doorstuurt naar de
AI-aanbieder die je kiest. Je API-sleutel blijft op je server.

## Instellen

1. Maak in de map met je `docker-compose.yml` het bestand `litellm.config.yaml`:

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Zet de API-sleutel van je aanbieder in een bestand `.env` in dezelfde map:

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Vervang je `docker-compose.yml` door deze versie. Het is het installatiebestand plus de AI-regels en
   de dienst `litellm`; houd je eigen regels voor adres, tijdzone en wachtwoord.

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
         # Adres waarop je het opent
         - BASE_URL=http://192.168.1.50:3000
         # Je tijdzone
         - TZ=Europe/Berlin
         # Inloggen: # weg, wachtwoord erin
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

4. Voer `docker compose up -d` opnieuw uit, of zet de stack opnieuw uit in je NAS-app.

Liever OpenAI? Gebruik in `litellm.config.yaml` `model: openai/gpt-4o` met
`api_key: os.environ/OPENAI_API_KEY` en zet `OPENAI_API_KEY` in `.env`. `LITELLM_MODEL` moet overeenkomen
met een `model_name` in het bestand.

## Visbuddy

Met `CHATBOT=true` opent een chatknop **Visbuddy**. Die beantwoordt vragen over je eigen aas,
spots, vangsten en uitrusting, en kent het huidige weer als je naar een plek vraagt. Met inloggen
aan kan de admin hem per persoon uitzetten in **Instellingen → Beheer** (**Chatbot: aan**).

## Identificeer uit foto

Als je een nieuwe vangst of nieuw aas toevoegt, verschijnt de knop **Identificeer uit foto** zodra er een foto
is. Die stelt de soort voor, of de gegevens van het aas. Hij heeft `LITELLM_URL` nodig en gebruikt
`LITELLM_VISION_MODEL` als je die instelt (een model dat afbeeldingen kan lezen), anders
`LITELLM_MODEL`. `CHATBOT` is niet nodig. Zonder AI-instelling verschijnt de knop toch, maar antwoordt
hij "Er ging iets mis. Probeer het opnieuw."

:::note
Zonder deze instellingen is er geen chatbot en kan **Identificeer uit foto** niet antwoorden; de rest werkt hetzelfde.
Alle instellingen staan bij [Omgevingsvariabelen](/nl/docs/configuration/environment-variables).
:::

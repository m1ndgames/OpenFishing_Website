---
title: KI-Funktionen
description: "Schalte den optionalen Chatbot Angelkumpel und die Fotoerkennung mit einem LiteLLM-Proxy neben OpenFishing ein."
---

OpenFishing hat zwei **optionale** KI-Funktionen: den Chatbot **Angelkumpel** und **Aus Foto erkennen**. Beide laufen
über [LiteLLM](https://litellm.ai/), einen kleinen Proxy neben OpenFishing, der Anfragen an den
KI-Anbieter deiner Wahl weiterleitet. Dein API-Schlüssel bleibt auf deinem Server.

## Einrichten

1. Lege im Ordner mit deiner `docker-compose.yml` die Datei `litellm.config.yaml` an:

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Trag den API-Schlüssel deines Anbieters in eine Datei namens `.env` im selben Ordner ein:

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Ersetze deine `docker-compose.yml` durch diese Fassung. Sie ist die Installationsdatei plus die
   KI-Zeilen und der Dienst `litellm`; behalte deine eigenen Zeilen für Adresse, Zeitzone und Passwort.

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
         # Adresse, unter der du es öffnest
         - BASE_URL=http://192.168.1.50:3000
         # Deine Zeitzone
         - TZ=Europe/Berlin
         # Login: # weg, Passwort eintragen
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

4. Führe `docker compose up -d` erneut aus oder stelle den Stack in deiner NAS-App neu bereit.

Lieber OpenAI? Nutze in `litellm.config.yaml` `model: openai/gpt-4o` mit
`api_key: os.environ/OPENAI_API_KEY` und trag stattdessen `OPENAI_API_KEY` in `.env` ein. `LITELLM_MODEL`
muss zu einem `model_name` in der Datei passen.

## Angelkumpel

Mit `CHATBOT=true` öffnet ein Chat-Button den **Angelkumpel**. Er beantwortet Fragen zu deinen eigenen
Ködern, Angelstellen, Fängen und deiner Ausrüstung und kennt das aktuelle Wetter, wenn du nach einem
Ort fragst. Mit Login kann der Admin ihn pro Person in **Einstellungen → Admin** abschalten (**Chatbot: an**).

## Aus Foto erkennen

Wenn du einen neuen Fang oder Köder anlegst, erscheint **Aus Foto erkennen**, sobald ein Foto da ist. Es schlägt
die Art oder die Angaben zum Köder vor. Es braucht `LITELLM_URL` und nutzt `LITELLM_VISION_MODEL`,
falls gesetzt (ein Modell, das Bilder lesen kann), sonst `LITELLM_MODEL`. `CHATBOT` braucht es nicht.
Ohne KI-Einrichtung erscheint die Schaltfläche trotzdem, antwortet aber „Etwas ist schiefgelaufen. Bitte versuche es erneut.“

:::note
Ohne diese Einstellungen gibt es keinen Chatbot, und **Aus Foto erkennen** kann nicht antworten; alles andere
funktioniert gleich. Alle Einstellungen stehen unter [Umgebungsvariablen](/de/docs/configuration/environment-variables).
:::

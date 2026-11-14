---
title: Funciones de IA
description: "Activa el chatbot opcional Compañero Pescador y la identificación por foto con un proxy LiteLLM junto a OpenFishing."
---

OpenFishing tiene dos funciones de IA **opcionales**: el chatbot **Compañero Pescador** e **Identificar desde foto**. Ambas pasan por
[LiteLLM](https://litellm.ai/), un pequeño proxy que ejecutas junto a OpenFishing y que reenvía las
peticiones al proveedor de IA que elijas. Tu clave de API se queda en tu servidor.

## Configurarlo

1. En la carpeta de tu `docker-compose.yml`, crea `litellm.config.yaml`:

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Pon la clave de API de tu proveedor en un archivo llamado `.env` en la misma carpeta:

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Sustituye tu `docker-compose.yml` por esta versión. Es el archivo de instalación más las líneas de
   IA y el servicio `litellm`; conserva tus propias líneas de dirección, zona horaria y contraseña.

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
         # Dirección con la que lo abres
         - BASE_URL=http://192.168.1.50:3000
         # Tu zona horaria
         - TZ=Europe/Berlin
         # Login: quita # y pon contraseña
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

4. Vuelve a ejecutar `docker compose up -d`, o redespliega el stack en la app de tu NAS.

¿Prefieres OpenAI? En `litellm.config.yaml`, usa `model: openai/gpt-4o` con
`api_key: os.environ/OPENAI_API_KEY` y pon `OPENAI_API_KEY` en `.env` en su lugar. `LITELLM_MODEL` debe
coincidir con un `model_name` del archivo.

## Compañero Pescador

Con `CHATBOT=true`, un botón de chat abre **Compañero Pescador**. Responde preguntas sobre tus propios señuelos,
puntos, capturas y equipo, y conoce el tiempo actual cuando preguntas por un lugar. Con inicio de
sesión, el admin puede desactivarlo por persona en **Ajustes → Admin** (**Chatbot: activado**).

## Identificar desde foto

Al añadir una captura o un señuelo nuevo, aparece el botón **Identificar desde foto** en cuanto hay una foto. Sugiere
la especie, o los datos del señuelo. Necesita `LITELLM_URL` y usa `LITELLM_VISION_MODEL` si lo defines
(un modelo que puede leer imágenes), si no `LITELLM_MODEL`. No necesita `CHATBOT`. Sin IA configurada
el botón aparece igual, pero responde «Algo salió mal. Inténtalo de nuevo.»

:::note
Sin estos ajustes no hay chatbot y **Identificar desde foto** no puede responder; todo lo demás funciona igual.
Todos los ajustes están en [Variables de entorno](/es/docs/configuration/environment-variables).
:::

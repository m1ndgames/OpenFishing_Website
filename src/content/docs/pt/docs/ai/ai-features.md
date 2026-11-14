---
title: Funcionalidades de IA
description: "Ativa o chatbot opcional Amigo Pescador e a identificação por foto com um proxy LiteLLM ao lado do OpenFishing."
---

O OpenFishing tem duas funcionalidades de IA **opcionais**: o chatbot **Amigo Pescador** e **Identificar pela foto**. Ambas
passam pelo [LiteLLM](https://litellm.ai/), um pequeno proxy que corres ao lado do OpenFishing e que
reencaminha os pedidos para o fornecedor de IA que escolheres. A tua chave de API fica no servidor.

## Configurar

1. Na pasta do teu `docker-compose.yml`, cria `litellm.config.yaml`:

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Põe a chave de API do teu fornecedor num ficheiro chamado `.env` na mesma pasta:

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Substitui o teu `docker-compose.yml` por esta versão. É o ficheiro de instalação mais as linhas de
   IA e o serviço `litellm`; mantém as tuas linhas de endereço, fuso horário e palavra-passe.

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
         # Endereço onde o abres
         - BASE_URL=http://192.168.1.50:3000
         # O teu fuso horário
         - TZ=Europe/Berlin
         # Login: tira #, põe palavra-passe
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

4. Volta a correr `docker compose up -d`, ou reimplementa a stack na app do teu NAS.

Preferes a OpenAI? Em `litellm.config.yaml`, usa `model: openai/gpt-4o` com
`api_key: os.environ/OPENAI_API_KEY` e põe `OPENAI_API_KEY` no `.env` em vez disso. `LITELLM_MODEL` tem de
corresponder a um `model_name` do ficheiro.

## Amigo Pescador

Com `CHATBOT=true`, um botão de chat abre o **Amigo Pescador**. Responde a perguntas sobre as tuas iscas,
locais, capturas e equipamento, e sabe o tempo atual quando perguntas por um local. Com início de
sessão, o admin pode desligá-lo por pessoa em **Definições → Admin** (**Chatbot: ligado**).

## Identificar pela foto

Quando adicionas uma captura ou isca nova, o botão **Identificar pela foto** aparece assim que há uma foto. Sugere a
espécie, ou os dados da isca. Precisa de `LITELLM_URL` e usa `LITELLM_VISION_MODEL` se o definires
(um modelo que lê imagens), senão `LITELLM_MODEL`. Não precisa de `CHATBOT`. Sem IA configurada, o
botão aparece na mesma, mas responde «Algo deu errado. Tente novamente.»

:::note
Sem estas definições não há chatbot e **Identificar pela foto** não consegue responder; o resto funciona igual.
Todas as definições estão em [Variáveis de ambiente](/pt/docs/configuration/environment-variables).
:::

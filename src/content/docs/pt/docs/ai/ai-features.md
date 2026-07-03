---
title: Funcionalidades de IA
description: Ativa o chatbot auto-hospedado opcional e a identificação de peixes e iscas por foto através de um sidecar LiteLLM.
---

O OpenFishing tem funcionalidades de IA **opcionais** alimentadas por um proxy **[LiteLLM](https://litellm.ai/)**
que executas tu mesmo. As tuas chaves de API permanecem no servidor — nunca são expostas ao navegador.

## Ativar o chatbot

Define estas variáveis de ambiente (consulta
[Variáveis de ambiente](/pt/docs/configuration/environment-variables)):

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — qualquer valor verdadeiro ativa o widget de chat flutuante.
- **`LITELLM_URL`** — o URL base do teu proxy LiteLLM.
- **`LITELLM_MODEL`** — um nome de modelo correspondente a uma entrada do teu `litellm.config.yaml`.

O chatbot pode responder a perguntas sobre os **teus próprios dados** (as tuas iscas, pontos, capturas e equipamento).

## Executar o LiteLLM como sidecar

Executa o LiteLLM ao lado do OpenFishing no mesmo projeto compose:

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
    # Fornece aqui as chaves de API do teu fornecedor, p. ex. através de um env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

O teu `litellm.config.yaml` define os modelos (`LITELLM_MODEL` / `LITELLM_VISION_MODEL` têm de corresponder aos
nomes que declara). As chaves de API do fornecedor são configuradas do lado do **LiteLLM** e nunca chegam ao
frontend do OpenFishing.

## Identificação por foto

Se definires **`LITELLM_VISION_MODEL`** (um modelo com capacidade de visão), o OpenFishing adiciona:

- **Identificação de peixes** — sugerir uma espécie a partir de uma foto no **formulário de captura**.
- **Identificação de iscas** — reconhecer uma isca a partir de uma foto no **formulário de adicionar isca**.

Se `LITELLM_VISION_MODEL` não estiver definido, a identificação recorre a `LITELLM_MODEL`.

:::note
As funcionalidades de IA são totalmente opcionais. Sem nenhuma destas variáveis definida, o OpenFishing funciona
exatamente como antes — sem chatbot, sem identificação.
:::

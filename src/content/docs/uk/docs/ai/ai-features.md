---
title: Функції ШІ
description: Увімкніть опційний самостійно розміщуваний чат-бот і розпізнавання риби та приманок за фото через сайдкар LiteLLM.
---

OpenFishing має **опційні** функції ШІ на базі проксі **[LiteLLM](https://litellm.ai/)**, який ви запускаєте
самостійно. Ваші ключі API залишаються на боці сервера — вони ніколи не розкриваються браузеру.

## Увімкнення чат-бота

Установіть ці змінні середовища (див. [Змінні середовища](/uk/docs/configuration/environment-variables)):

```yaml
environment:
  - CHATBOT=true
  - LITELLM_URL=http://litellm:4000
  - LITELLM_MODEL=your-model-name
```

- **`CHATBOT`** — будь-яке істинне значення вмикає плаваючий віджет чату.
- **`LITELLM_URL`** — базова URL-адреса вашого проксі LiteLLM.
- **`LITELLM_MODEL`** — назва моделі, що відповідає запису у вашому `litellm.config.yaml`.

Чат-бот може відповідати на запитання про **ваші власні дані** (ваші приманки, місця, улови та спорядження).

## Запуск LiteLLM як сайдкара

Запустіть LiteLLM поруч з OpenFishing у тому самому проєкті compose:

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
      - LITELLM_VISION_MODEL=your-vision-model   # опційно
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads

  litellm:
    image: ghcr.io/berriai/litellm:main-latest
    command: ["--config", "/app/config.yaml"]
    volumes:
      - ./litellm.config.yaml:/app/config.yaml
    # Укажіть тут ключі API вашого провайдера, напр. через env_file

volumes:
  openfishing-db:
  openfishing-uploads:
```

Ваш `litellm.config.yaml` визначає моделі (`LITELLM_MODEL` / `LITELLM_VISION_MODEL` мають відповідати назвам,
які він оголошує). Ключі API провайдера налаштовуються на боці **LiteLLM** і ніколи не досягають фронтенду
OpenFishing.

## Розпізнавання за фото

Якщо ви встановите **`LITELLM_VISION_MODEL`** (модель із підтримкою зору), OpenFishing додає:

- **Розпізнавання риби** — запропонувати вид за фотографією у **формі улову**.
- **Розпізнавання приманок** — розпізнати приманку за фотографією у **формі додавання приманки**.

Якщо `LITELLM_VISION_MODEL` не встановлено, розпізнавання повертається до `LITELLM_MODEL`.

:::note
Функції ШІ повністю опційні. Якщо жодну з цих змінних не встановлено, OpenFishing працює точно як раніше — без
чат-бота, без розпізнавання.
:::

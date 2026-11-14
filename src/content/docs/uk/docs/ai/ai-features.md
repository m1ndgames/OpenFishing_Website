---
title: Функції ШІ
description: "Увімкніть опційний чат-бот Рибальський Помічник і розпізнавання за фото через проксі LiteLLM поруч з OpenFishing."
---

OpenFishing має дві **опційні** функції ШІ: чат-бот **Рибальський Помічник** і **Визначити за фото**. Обидві працюють через
[LiteLLM](https://litellm.ai/), невеликий проксі поруч з OpenFishing, що пересилає запити вибраному
постачальнику ШІ. Ваш API-ключ залишається на вашому сервері.

## Налаштування

1. У теці з вашим `docker-compose.yml` створіть `litellm.config.yaml`:

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Запишіть API-ключ свого постачальника у файл `.env` у тій самій теці:

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Замініть ваш `docker-compose.yml` цією версією. Це файл встановлення плюс рядки ШІ та сервіс
   `litellm`; залиште власні рядки з адресою, часовим поясом і паролем.

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
         # Адреса, за якою його відкривають
         - BASE_URL=http://192.168.1.50:3000
         # Ваш часовий пояс
         - TZ=Europe/Berlin
         # Вхід: приберіть #, додайте пароль
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

4. Знову виконайте `docker compose up -d` або повторно розгорніть стек у застосунку NAS.

Хочете OpenAI? У `litellm.config.yaml` вкажіть `model: openai/gpt-4o` з
`api_key: os.environ/OPENAI_API_KEY` і запишіть `OPENAI_API_KEY` у `.env`. `LITELLM_MODEL` має збігатися з
`model_name` у файлі.

## Рибальський Помічник

З `CHATBOT=true` кнопка чату відкриває **Рибальський Помічник**. Він відповідає на запитання про ваші приманки,
місця, улови й спорядження та знає поточну погоду, коли ви питаєте про місце. Із входом адмін може
вимкнути його для кожної людини в **Налаштування → Адмін** (**Чат-бот: увімк.**).

## Визначити за фото

Коли ви додаєте новий улов чи приманку, кнопка **Визначити за фото** з'являється, щойно є фото. Вона підказує
вид або дані приманки. Потрібен `LITELLM_URL`; використовується `LITELLM_VISION_MODEL`, якщо задано
(модель, що читає зображення), інакше `LITELLM_MODEL`. `CHATBOT` не потрібен. Без налаштованого ШІ
кнопка все одно з'являється, але відповідає «Щось пішло не так. Спробуйте ще раз.»

:::note
Без цих налаштувань немає чат-бота, а **Визначити за фото** не може відповісти; решта працює так само. Усі
налаштування є в [Змінних середовища](/uk/docs/configuration/environment-variables).
:::

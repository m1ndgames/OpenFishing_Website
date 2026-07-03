---
title: Встановлення (docker-compose)
description: Повна конфігурація docker-compose для OpenFishing з постійними томами та основними змінними середовища.
---

Для будь-чого, окрім швидкого тесту, запускайте OpenFishing за допомогою **docker-compose**. Це дає вам
іменовані томи, змінні середовища в одному місці та легкі перезапуски.

## docker-compose.yml

```yaml
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing:latest
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Постійний файл бази даних SQLite (у томі /app/data)
      - DATABASE_URL=/app/data/openfishing.db
      # Каталог завантажень (у томі /app/uploads)
      - UPLOAD_PATH=/app/uploads
      # Публічна URL-адреса — використовується для посилань QR-кодів і скидання пароля
      - BASE_URL=https://fishing.yourdomain.com
      # Установіть, щоб увімкнути вхід; пропустіть для повністю відкритої інстанції єдиного орендаря
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Запустіть:

```bash
docker compose up -d
```

Потім перейдіть до вашого `BASE_URL` (або `http://localhost:3000` локально).

## Постійні томи є обов'язковими

Обидва томи не є опційними:

- `/app/data` містить **базу даних SQLite** — ваші приманки, місця, улови та спорядження.
- `/app/uploads` містить кожне **фото**, яке ви додаєте.

:::caution
Якщо будь-який шлях не змонтовано на постійний том, ці дані знищуються під час повторного створення
контейнера. Завжди створюйте резервні копії обох — див. [Резервне копіювання та відновлення](/uk/docs/backup/backup-restore).
:::

## Основні змінні середовища

У прикладі вище використано найнеобхідніше. Повний перелік — SMTP, ШІ, демо-режим, обмеження завантажень і
більше — задокументовано в [довіднику змінних середовища](/uk/docs/configuration/environment-variables).

## Зворотний проксі

Розмістіть OpenFishing за вашим зворотним проксі (nginx, Caddy, Traefik…) і завершуйте TLS там.
Установіть **`BASE_URL`** на публічну HTTPS-адресу, щоб QR-коди та посилання скидання пароля вказували на
правильне місце, і передавайте стандартні заголовки проксі. Докладніше див.
[FAQ](/uk/docs/help/faq).

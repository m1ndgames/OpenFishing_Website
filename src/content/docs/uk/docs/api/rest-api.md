---
title: REST API
description: JSON API лише для читання від OpenFishing з автентифікацією токеном Bearer для кожного користувача та вбудованим інтерфейсом Swagger.
---

OpenFishing надає **JSON API лише для читання** за адресою **`/api/v1/*`**, тож ви можете витягувати свої дані
в інші інструменти.

## Автентифікація

- Автентифікація здійснюється **для кожного користувача** через токен Bearer:

  ```http
  Authorization: Bearer <apiToken>
  ```

- Коли [автентифікацію](/uk/docs/multi-user/authentication) **вимкнено** (відкритий режим єдиного орендаря),
  API також відкритий — токен не потрібен.
- У багатокористувацькому режимі створюйте API-токени та керуйте ними з панелі адміністратора.

## Кінцеві точки ресурсів

Кожен ресурс підтримує кінцеву точку **списку** та **за id**:

| Ресурс | Список | За ID |
|---|---|---|
| Приманки | `GET /api/v1/lures` | `GET /api/v1/lures/{id}` |
| Місця | `GET /api/v1/spots` | `GET /api/v1/spots/{id}` |
| Улови | `GET /api/v1/catches` | `GET /api/v1/catches/{id}` |
| Вудлища | `GET /api/v1/rods` | `GET /api/v1/rods/{id}` |
| Котушки | `GET /api/v1/reels` | `GET /api/v1/reels/{id}` |
| Волосіні | `GET /api/v1/lines` | `GET /api/v1/lines/{id}` |
| Комплекти | `GET /api/v1/combos` | `GET /api/v1/combos/{id}` |

API працює **лише для читання** — кінцевих точок запису немає.

## Swagger UI та специфікація OpenAPI

- Досліджуйте та випробовуйте API інтерактивно за допомогою вбудованого **Swagger UI за адресою `/api-docs`**.
- Необроблена **специфікація OpenAPI** обслуговується за адресою **`/api/openapi`**.

## Приклад

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  https://fishing.yourdomain.com/api/v1/lures
```

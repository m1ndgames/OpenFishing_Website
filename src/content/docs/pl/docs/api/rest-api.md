---
title: API REST
description: "API JSON OpenFishing tylko do odczytu: jeden token na konto, endpointy i wbudowany interfejs Swagger."
---

OpenFishing ma **API JSON tylko do odczytu**, dzięki któremu przeniesiesz przynęty, łowiska,
połowy i sprzęt do innych narzędzi: arkusza, domowego panelu, skryptu. Nie da się przez nie
niczego zmienić.

## Twój token

- **Z logowaniem:** każde konto ma własny token. Skopiuj go z **Ustawienia → Moje konto → Token
  API**. **Wygeneruj token ponownie** tworzy nowy; stary przestaje działać.
- **Bez logowania** (jedna wspólna kolekcja, zobacz [Wielu użytkowników i uwierzytelnianie](/pl/docs/multi-user/authentication)):
  API też jest otwarte i nie wymaga tokenu.

Wysyłaj token w nagłówku `Authorization`:

```http
Authorization: Bearer <twój token>
```

## Endpointy

Każdy zasób ma listę i pojedynczy element:

- `GET /api/v1/<resource>` zwraca listę.
- `GET /api/v1/<resource>/{id}` zwraca jeden element.

Zasoby to `lures`, `spots`, `catches`, `rods`, `reels`, `lines` i `combos`. Z logowaniem
dostajesz tylko dane własnego konta.

## Wypróbuj w przeglądarce

- **`/api-docs`** na Twojej instancji otwiera interfejs Swagger, w którym wypróbujesz każdy endpoint.
- **`/api/openapi`** udostępnia specyfikację OpenAPI dla narzędzi generujących klientów.

## Przykład

```bash
curl -H "Authorization: Bearer $OPENFISHING_TOKEN" \
  http://192.168.1.50:3000/api/v1/lures
```

Odpowiedź to JSON. Każda przynęta ma wszystkie swoje pola; tu skrócona:

```json
[
  {
    "id": "6f1c2b7e-3d4a-4b8e-9f21-0a5c7d9e1b34",
    "lureNumber": 1,
    "name": "Perch shad",
    "brand": "Example",
    "color": "Perch",
    "favourite": true,
    "lost": false,
    "tags": ["perch", "river"]
  }
]
```

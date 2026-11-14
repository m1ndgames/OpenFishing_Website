---
title: Zmienne środowiskowe
description: Wszystkie ustawienia OpenFishing z wartościami domyślnymi w obrazie Docker, pogrupowane według przeznaczenia.
prev: false
---

OpenFishing konfiguruje się wyłącznie zmiennymi środowiskowymi, w sekcji `environment:` pliku
compose (lub przez `-e` w `docker run`). Poniższe wartości domyślne to te z obrazu Docker. Prawie każda instalacja ustawia `BASE_URL` i `TZ`; reszta jest opcjonalna.

## Adres i czas

- **`BASE_URL`** · domyślnie: nieustawiona\
  Adres, pod którym otwiera się OpenFishing, z `http://` lub `https://`, np.
  `http://192.168.1.50:3000` lub `https://fishing.example.com`. Serwer bierze z niego schemat:
  **bez niego zakłada HTTPS i na instalacji z czystym HTTP każdy zapis jest odrzucany**
  („Cross-site POST form submissions are forbidden"). Buduje też linki w kodach QR i linki udostępniania, które bez niej wskazują na `http://localhost:5173`.
- **`PROTOCOL_HEADER`** · domyślnie: nieustawiona\
  Tylko dla reverse proxy, które samo podaje schemat, np. `PROTOCOL_HEADER=x-forwarded-proto`.
  Ustawiona ma pierwszeństwo przed schematem z `BASE_URL`.
- **`TZ`** · domyślnie: UTC\
  Twoja strefa czasowa, np. `Europe/Warsaw` lub `America/New_York`. Bez niej godziny połowów są
  przesunięte.

## Przechowywanie

- **`DATABASE_URL`** · domyślnie: `/app/data/openfishing.db`\
  Plik bazy SQLite w wolumenie `/app/data`. Nie zmieniaj.
- **`UPLOAD_PATH`** · domyślnie: `/app/uploads`\
  Miejsce zdjęć w wolumenie `/app/uploads`. Nie zmieniaj.
- **`BODY_SIZE_LIMIT`** · domyślnie: `104857600` (≈ 100 MB)\
  Największy przesyłany plik w bajtach. Reverse proxy przed aplikacją potrzebuje takiego samego limitu.

## Logowanie

- **`ADMIN_PASSWORD`** · domyślnie: nieustawiona\
  Włącza logowanie. To hasło konta `admin` (nazwa użytkownika to zawsze `admin`), odczytywane
  przy każdym starcie. Nieustawiona: instancja jest otwarta, bez ekranu logowania.
- **`AUTH_PASSWORD`** · przestarzała\
  Stara nazwa `ADMIN_PASSWORD`. Nadal działa; używaj `ADMIN_PASSWORD`.

Zobacz [Wielu użytkowników i uwierzytelnianie](/pl/docs/multi-user/authentication).

## E-mail do resetu hasła

Opcja „nie pamiętam hasła" pojawia się tylko, gdy ustawione są co najmniej `SMTP_HOST` i `SMTP_FROM`.

- **`SMTP_HOST`** · domyślnie: nieustawiona\
  Twój serwer pocztowy.
- **`SMTP_PORT`** · domyślnie: `587`\
  Port `465` oznacza TLS; inne porty używają STARTTLS.
- **`SMTP_SECURE`** · domyślnie: nieustawiona\
  Ustaw na `true` dla niejawnego TLS (zwykle z portem 465).
- **`SMTP_USER`** / **`SMTP_PASS`** · domyślnie: nieustawione\
  Dane logowania do serwera pocztowego. Pomiń dla przekaźników bez logowania.
- **`SMTP_FROM`** · domyślnie: nieustawiona\
  Nadawca, np. `OpenFishing <noreply@example.com>`.

Na przykład z kontem pocztowym na porcie 587:

```yaml title="docker-compose.yml"
    environment:
      - SMTP_HOST=smtp.example.com
      - SMTP_PORT=587
      - SMTP_USER=you@example.com
      # Hasło do konta pocztowego
      - SMTP_PASS=
      - SMTP_FROM=you@example.com
```

## Mapa

- **`MAP_TILE_URL`** · domyślnie: OpenStreetMap\
  Szablon adresu kafelków, aby używać własnego
  lub innego serwera kafelków zamiast OpenStreetMap.\
  Na przykład: `https://tiles.example.com/{z}/{x}/{y}.png`
- **`MAP_TILE_ATTRIBUTION`** · domyślnie: nieustawiona\
  Atrybucja wyświetlana na mapie dla `MAP_TILE_URL`. Większość dostawców jej wymaga.

## Funkcje AI

- **`CHATBOT`** · domyślnie: nieustawiona\
  Ustaw na `true`, aby włączyć chatbota AI. Wymaga poniższych ustawień LiteLLM. Zobacz [Funkcje AI](/pl/docs/ai/ai-features).
- **`LITELLM_URL`** · domyślnie: nieustawiona\
  Twój proxy LiteLLM, np. `http://litellm:4000`.
- **`LITELLM_MODEL`** · domyślnie: nieustawiona\
  Model chatbota, zgodny z `model_name` w Twoim `litellm.config.yaml`.
- **`LITELLM_VISION_MODEL`** · domyślnie: nieustawiona\
  Opcjonalny model do rozpoznawania ryb i przynęt ze zdjęć. W razie braku używa `LITELLM_MODEL`.

Zobacz [Funkcje AI](/pl/docs/ai/ai-features).

## Demo

- **`DEMO_MODE`** · domyślnie: nieustawiona\
  **Dowolna** wartość włącza tryb demo tylko do odczytu, nawet `false` czy `0`. Aby go wyłączyć,
  usuń linię. Zobacz [Tryb demonstracyjny](/pl/docs/demo/demo-mode).

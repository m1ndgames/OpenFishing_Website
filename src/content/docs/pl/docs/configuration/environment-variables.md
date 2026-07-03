---
title: Zmienne środowiskowe
description: Pełna dokumentacja każdej zmiennej środowiskowej OpenFishing, z wartościami domyślnymi i opisami.
---

OpenFishing jest konfigurowany w całości za pomocą zmiennych środowiskowych. Każda zmienna jest opcjonalna,
chyba że zaznaczono inaczej; nieustawione zmienne przyjmują wartości domyślne poniżej.

## Tabela referencyjna

| Zmienna | Domyślnie | Opis |
|---|---|---|
| `DATABASE_URL` | `local.db` | Ścieżka do pliku bazy danych SQLite. W Dockerze wskaż nią swój wolumen danych, np. `/app/data/openfishing.db`. |
| `UPLOAD_PATH` | `./uploads` | Katalog na zdjęcia przynęt/łowisk/połowów. **Zamontuj tutaj wolumen** (np. `/app/uploads`). |
| `BASE_URL` | `http://localhost:5173` | Publiczny bazowy adres URL, używany do budowania linków kodów QR i resetu hasła. Ustaw go na swój prawdziwy adres HTTPS za reverse proxy. |
| `ADMIN_PASSWORD` | _(nieustawione)_ | Ustaw, aby **włączyć logowanie wielu użytkowników**. To hasło konta `admin` (nazwa użytkownika to zawsze `admin`, resynchronizowane przy każdym uruchomieniu). Nieustawione = w pełni otwarta instancja jednodostępowa. |
| `AUTH_PASSWORD` | _(nieustawione)_ | **Przestarzała** zapasowa nazwa dla `ADMIN_PASSWORD`. Preferuj `ADMIN_PASSWORD`. |
| `SMTP_HOST` | _(nieustawione)_ | Nazwa hosta serwera SMTP dla e-maili „zapomniane hasło”. |
| `SMTP_PORT` | _(nieustawione)_ | Port serwera SMTP. |
| `SMTP_SECURE` | _(nieustawione)_ | Używaj TLS dla połączenia SMTP. |
| `SMTP_USER` | _(nieustawione)_ | Nazwa użytkownika SMTP. |
| `SMTP_PASS` | _(nieustawione)_ | Hasło SMTP. |
| `SMTP_FROM` | _(nieustawione)_ | Adres `From:` dla poczty wychodzącej. |
| `DEMO_MODE` | _(nieustawione)_ | Dowolna wartość = **tryb demonstracyjny tylko do odczytu** (wszystkie zapisy zablokowane). |
| `CHATBOT` | _(nieustawione)_ | Dowolna wartość prawdziwa włącza **chatbota AI** (wymaga zmiennych LiteLLM). |
| `LITELLM_URL` | _(nieustawione)_ | Bazowy adres URL Twojego proxy LiteLLM, np. `http://litellm:4000`. |
| `LITELLM_MODEL` | _(nieustawione)_ | Nazwa modelu pasująca do wpisu w `litellm.config.yaml`. |
| `LITELLM_VISION_MODEL` | _(nieustawione)_ | Opcjonalny model obsługujący wizję do identyfikacji ryb/przynęt. Wraca do `LITELLM_MODEL`. |
| `BODY_SIZE_LIMIT` | `104857600` | Maksymalny rozmiar przesyłania w bajtach (domyślnie ≈ 100 MB). |

:::note
Funkcja SMTP „zapomniane hasło” pojawia się tylko wtedy, gdy ustawione są co najmniej `SMTP_HOST` **i**
`SMTP_FROM`. Bez nich opcja resetu jest ukryta.
:::

## Uwagi o wartościach domyślnych

Powyższe wartości domyślne to wbudowane w kod domyślne wartości aplikacji. W kontenerze zwykle nadpiszesz
ścieżki, aby wskazywały na zamontowane wolumeny:

```bash
DATABASE_URL=/app/data/openfishing.db
UPLOAD_PATH=/app/uploads
```

## Pogrupowane według przeznaczenia

- **Przechowywanie:** `DATABASE_URL`, `UPLOAD_PATH`, `BODY_SIZE_LIMIT`
- **Sieć / linki:** `BASE_URL`
- **Uwierzytelnianie:** `ADMIN_PASSWORD` (`AUTH_PASSWORD` przestarzałe)
- **E-mail / reset hasła:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- **Funkcje AI:** `CHATBOT`, `LITELLM_URL`, `LITELLM_MODEL`, `LITELLM_VISION_MODEL`
- **Demo:** `DEMO_MODE`

Zobacz [Wielu użytkowników i uwierzytelnianie](/pl/docs/multi-user/authentication),
[Funkcje AI](/pl/docs/ai/ai-features) i [Tryb demonstracyjny](/pl/docs/demo/demo-mode), aby zobaczyć, jak te
grupy do siebie pasują.

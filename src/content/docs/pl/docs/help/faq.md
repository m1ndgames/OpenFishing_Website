---
title: FAQ / Rozwiązywanie problemów
description: Trwałe wolumeny, automatyczne migracje, uwagi o reverse proxy i limit rozmiaru przesyłania.
---

## Czy potrzebuję trwałych wolumenów?

**Tak.** Zarówno baza danych SQLite (`/app/data`), jak i katalog przesłanych plików (`/app/uploads`) muszą
znajdować się na trwałych wolumenach. Bez nich Twoje dane i zdjęcia zostaną utracone po odtworzeniu kontenera.
Zobacz [Instalację](/pl/docs/getting-started/installation).

## Czy muszę uruchamiać migracje bazy danych?

**Nie.** W środowisku produkcyjnym **migracje bazy danych uruchamiają się automatycznie przy starcie**.
Wystarczy pobrać nowszy obraz i uruchomić ponownie — schemat zostanie zaktualizowany za Ciebie.

## Jak uruchomić OpenFishing za reverse proxy?

- Zakończ TLS na swoim proxy (nginx, Caddy, Traefik…) i przekieruj na port `3000` kontenera.
- Ustaw **`BASE_URL`** na swój publiczny adres HTTPS, aby [kody QR](/pl/docs/features/qr-labels) i linki resetu
  hasła były poprawne.
- **Przekaż standardowe nagłówki proxy** (host i forwarded-for/proto), aby aplikacja widziała właściwy
  zewnętrzny adres URL.

## Dlaczego moje przesyłanie jest odrzucane?

Przesyłanie jest ograniczone przez **`BODY_SIZE_LIMIT`** (domyślnie ≈ 100 MB, czyli `104857600` bajtów).
Zwiększ go, jeśli potrzebujesz większych zdjęć, i upewnij się, że reverse proxy z przodu również zezwala na
większy rozmiar treści.

## Czy jest domyślne logowanie?

Nie — OpenFishing jest **otwarty**, chyba że ustawisz `ADMIN_PASSWORD`. Zobacz
[Wielu użytkowników i uwierzytelnianie](/pl/docs/multi-user/authentication). Nie udostępniaj otwartej instancji
publicznemu internetowi.

## Gdzie mogę uzyskać pomoc lub zgłosić błąd?

Otwórz zgłoszenie na [GitHubie](https://github.com/m1ndgames/OpenFishing/issues).

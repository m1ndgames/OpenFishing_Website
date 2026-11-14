---
title: FAQ i rozwiązywanie problemów
description: Rozwiązania częstych problemów z instalacją (maszyny ARM, konflikty portów, zapomniane hasło administratora) oraz odpowiedzi o wolumenach, aktualizacjach, przesyłaniu i logowaniu.
---

Problemy są opisane pod komunikatem, który faktycznie widzisz, więc wyszukanie dokładnej treści
błędu zwykle prowadzi prosto do rozwiązania.

Gdy odpowiedź mówi `docker compose up -d`, na NAS możesz zamiast tego ponownie wdrożyć stos w jego
aplikacji.

## Instalacja

### Zapis się nie udaje: „Cross-site POST form submissions are forbidden"

Brakuje `BASE_URL` albo zaczyna się od `https://`, a otwierasz aplikację przez zwykłe `http://`. Ustaw dokładnie adres, który otwierasz, np. `BASE_URL=http://192.168.1.50:3000`, i ponownie uruchom `docker compose up -d`. Za reverse proxy ustaw `BASE_URL` na adres `https://`, który ludzie otwierają; to wystarczy. Zobacz [Zmienne środowiskowe](/pl/docs/configuration/environment-variables#adres-i-czas).

### Kontener się nie uruchamia: „exec format error"

Maszyna ma procesor ARM (częsty w małych NAS-ach i komputerach jednopłytkowych). Obraz
OpenFishing istnieje tylko dla **64-bitowych procesorów Intel lub AMD (amd64)**, więc nie
zadziała tam. Sprawdź to poleceniem `uname -m`: `x86_64` działa, `aarch64` lub `armv7l` nie.
Zobacz [Zanim zaczniesz](/pl/docs/getting-started/installation#zanim-zaczniesz).

### „Port is already allocated" lub „address already in use"

Coś innego na maszynie używa już portu 3000. Zmień **lewą** liczbę w pliku compose, np. na
`"8080:3000"`, uruchom ponownie `docker compose up -d` i otwórz aplikację na porcie 8080.

### „docker compose" nie jest poleceniem

Starsze instalacje Dockera, w tym niektóre pakiety na NAS, używają osobnego narzędzia `docker-compose`. Uruchom te same polecenia z myślnikiem: `docker-compose up -d`, `docker-compose pull`.

### Strona się nie ładuje

- Sprawdź, czy kontener działa: `docker ps` powinno pokazać `openfishing`.
- Przejrzyj jego log pod kątem błędów: `docker logs openfishing`.
- Z innego urządzenia użyj adresu sieciowego maszyny (np. `http://192.168.1.50:3000`), a nie
  `localhost`.
- Działa na maszynie, ale nie z telefonu? Zezwól na port 3000 w zaporze maszyny (na NAS w jego
  ustawieniach bezpieczeństwa lub zapory).

### Czy potrzebuję trwałych wolumenów?

**Tak.** Bez nich dane i zdjęcia przepadają przy ponownym utworzeniu kontenera. Plik compose z
[Instalacji OpenFishing](/pl/docs/getting-started/installation) tworzy oba.

## Codzienne użytkowanie

### Jak zaktualizować?

Najpierw kopia zapasowa, potem `docker compose pull` i `docker compose up -d`. Zobacz
[Aktualizacja](/pl/docs/getting-started/installation#aktualizacja).

### Czy muszę uruchamiać migracje bazy?

**Nie.** Migracje **uruchamiają się automatycznie przy starcie**. Pobierz nowszy obraz i
uruchom ponownie: schemat zostanie zaktualizowany za Ciebie.

### Zapomniałem hasła administratora

Wpisz nowe `ADMIN_PASSWORD` w pliku compose i uruchom `docker compose up -d`. Konto `admin` jest
przy każdym starcie synchronizowane z tą zmienną, więc nowe hasło działa od razu. Pozostali
użytkownicy mogą zresetować swoje przez e-mail, jeśli
[SMTP jest skonfigurowany](/pl/docs/configuration/environment-variables).

### Czy domyślnie jest logowanie?

Nie. OpenFishing jest **otwarty**, dopóki nie ustawisz `ADMIN_PASSWORD`. Zobacz
[Wielu użytkowników i uwierzytelnianie](/pl/docs/multi-user/authentication). Nie wystawiaj
otwartej instancji do internetu.

### Dlaczego przesyłanie jest odrzucane?

Przesyłanie ogranicza **`BODY_SIZE_LIMIT`** (domyślnie ≈ 100 MB, czyli `104857600` bajtów).
Zwiększ go dla większych zdjęć i upewnij się, że ewentualny reverse proxy również pozwala na
większy rozmiar (`client_max_body_size` w nginx).

### „Rozpoznaj ze zdjęcia” pokazuje „Coś poszło nie tak. Spróbuj ponownie.”

Na Twoim serwerze nie skonfigurowano AI. Przycisk wymaga `LITELLM_URL` i modelu; zobacz
[Funkcje AI](/pl/docs/ai/ai-features).

### „Przekroczono limit przesyłania”

Admin ustawił limit miejsca dla Twojego konta (**Limit (MB)** w **Ustawienia → Administracja**).
Usuń niepotrzebne zdjęcia albo poproś admina o zwiększenie limitu.

### Jak uruchomić OpenFishing za reverse proxy?

Zakończ HTTPS na proxy, przekazuj ruch na port `3000` ze standardowymi nagłówkami proxy i ustaw
`BASE_URL` na adres publiczny, aby [kody QR](/pl/docs/features/qr-labels) i linki do resetu
hasła były poprawne.
[Instalacja OpenFishing](/pl/docs/getting-started/installation#reverse-proxy-i-https) zawiera
przykłady dla Caddy i nginx.

### Czy OpenFishing wysyła gdzieś moje dane?

Twoje wpisy i zdjęcia zostają na Twoim serwerze. Pogoda dla indeksu brania, kafelki mapy i
opcjonalne funkcje AI łączą się z usługami zewnętrznymi;
[Wprowadzenie](/pl/docs/getting-started/introduction#co-łączy-się-z-internetem) wymienia dokładnie, które. Kafelki mapy mogą pochodzić z Twojego serwera przez [`MAP_TILE_URL`](/pl/docs/configuration/environment-variables#mapa).

### Nie widzę „Utwórz link udostępniania”

Linki udostępniania wymagają logowania. Ustaw `ADMIN_PASSWORD` (zobacz [Wielu użytkowników i uwierzytelnianie](/pl/docs/multi-user/authentication)) i uruchom
`docker compose up -d`; przycisk pojawi się przy każdej przynęcie, łowisku i połowie.

## Kopie zapasowe

### Przywracanie się nie udaje: „Niezgodność schematu”

Kopia pochodzi z innej wersji OpenFishing. [Zaktualizuj](/pl/docs/getting-started/installation#aktualizacja) obie instalacje do najnowszej
wersji, wyeksportuj świeżą kopię na starej i przywróć ją.

### „To jest kopia osobista” lub „To jest pełna kopia”

Kopie osobiste i pełne przywraca się w różnych miejscach. Kopię osobistą, zrobioną w **Ustawienia → Kopia zapasowa i przywracanie**,
przywrócisz tam. Pełną kopię, zrobioną przez admina w **Ustawienia → Administracja**, tylko tam.

## Pomoc

### Gdzie uzyskać pomoc lub zgłosić błąd?

Zgłoś issue na [GitHubie](https://github.com/m1ndgames/OpenFishing/issues).

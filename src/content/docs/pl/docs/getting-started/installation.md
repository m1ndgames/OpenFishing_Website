---
title: Instalacja OpenFishing
description: Czego potrzebujesz, plik docker-compose, gdzie go uruchomić, co powinieneś zobaczyć i jak aktualizować.
---

OpenFishing działa jako jeden kontener Docker na komputerze, który należy do Ciebie. Ta strona
prowadzi od pustej maszyny do Twojej własnej działającej instancji. Chcesz najpierw się
rozejrzeć? [Demo na żywo](https://demo.openfishing.org) nie wymaga instalacji ani rejestracji.

## Zanim zaczniesz

Potrzebujesz:

- **Komputera, który jest stale włączony**, np. NAS-a, mini PC lub serwera domowego.
- **Dockera z Docker Compose** zainstalowanego na nim. Na wielu NAS-ach Docker jest aplikacją w
  centrum pakietów; na Linuksie skorzystaj z [instrukcji instalacji Dockera](https://docs.docker.com/engine/install/). Na Synology nazywa się Container Manager, na QNAP Container Station.
- **64-bitowego procesora Intel lub AMD (amd64).** Obraz istnieje tylko dla amd64, więc maszyny
  z procesorem ARM nie mogą go uruchomić. Aby to sprawdzić, uruchom `uname -m` na maszynie:
  `x86_64` oznacza, że wszystko gra; `aarch64` lub `armv7l` oznacza maszynę ARM.
  Bez terminala? Sprawdź procesor swojego modelu NAS w jego specyfikacji.

## Tylko chcesz wypróbować?

Na szybki rzut oka bez pliku compose wystarczy jedno polecenie:

```bash
docker run -d -p 3000:3000 \
  -e BASE_URL=http://192.168.1.50:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing
```

Zamień `192.168.1.50` na adres swojej maszyny, aby linki i etykiety QR działały też na innych urządzeniach.

Tak uruchomiony OpenFishing działa bez logowania. Gdy zdecydujesz się go zatrzymać, przejdź na
plik compose: trzyma Twoje ustawienia w jednym miejscu.

## 1. Utwórz plik compose

Utwórz folder `openfishing` i zapisz w nim ten plik:

```yaml title="docker-compose.yml"
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
      # Adres, pod którym go otwierasz
      - BASE_URL=http://192.168.1.50:3000
      # Twoja strefa czasowa
      - TZ=Europe/Berlin
      # Logowanie: usuń # i dodaj hasło
      # - ADMIN_PASSWORD=

volumes:
  openfishing-db:
  openfishing-uploads:
```

**Zmień te linie przed uruchomieniem:**

- `BASE_URL`: adres, który wpiszesz w przeglądarce, z `http://` i portem, np. adres Twojego
  NAS-a. **Jest wymagany:** bez niego OpenFishing zakłada HTTPS i każdy zapis kończy się błędem
  „Cross-site POST form submissions are forbidden". Trafia też do kodów QR, więc użyj adresu,
  pod którym inne urządzenia widzą maszynę.
  Nadaj maszynie stały adres w routerze (*rezerwacja DHCP*), inaczej może się zmienić, a kody
  QR przestaną na nią wskazywać.
- `TZ`: Twoja [strefa czasowa](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), żeby godziny połowów nie były przesunięte.
- `ADMIN_PASSWORD`: bez niego nie ma ekranu logowania i każdy w Twojej sieci ma pełny dostęp.
  Usuń `#` i dodaj własne hasło, zanim inni lub internet dotrą do aplikacji. Nazwa użytkownika
  to zawsze `admin`.

## 2. Uruchom

**Używasz aplikacji Docker na NAS-ie lub Portainera?** Utwórz nowy *stack* (lub *projekt*),
wklej powyższy plik i wdróż go.

**Używasz terminala?** Połącz się z maszyną (np. przez SSH), przejdź do folderu i uruchom:

```bash
docker compose up -d
```

Pierwsze uruchomienie trwa minutę lub dwie, bo Docker pobiera obraz.

## 3. Otwórz

Otwórz adres wpisany w `BASE_URL`, np. **`http://192.168.1.50:3000`**
(lub `http://localhost:3000` na samej maszynie). Powinieneś zobaczyć pustą kolekcję przynęt,
gotową na pierwszą przynętę. Jeśli ustawiłeś `ADMIN_PASSWORD`, najpierw zaloguj się jako **`admin`**.

Jeśli strona jeszcze się nie ładuje, pierwsze uruchomienie może trwać: `docker compose logs openfishing`
pokazuje `Listening on`, gdy wszystko jest gotowe.

Gotowe. Teraz [dodaj pierwszą przynętę](/pl/docs/features/lures).

## Gdzie są Twoje dane

- **Baza SQLite (przynęty, łowiska, połowy, sprzęt)**: ścieżka w kontenerze `/app/data`, wolumen `openfishing-db`
- **Twoje zdjęcia**: ścieżka w kontenerze `/app/uploads`, wolumen `openfishing-uploads`

:::caution
Zachowaj oba wolumeny. Kontener uruchomiony bez nich traci wszystko po usunięciu. Kopie w innym
miejscu zrobisz przez [Kopię zapasową i przywracanie](/pl/docs/backup/backup-restore).
:::

## Aktualizacja

Najpierw zrób kopię zapasową (w **Ustawieniach**, zob.
[Kopia zapasowa i przywracanie](/pl/docs/backup/backup-restore)), potem pobierz nowy obraz i
uruchom ponownie:

```bash
docker compose pull
docker compose up -d
```

Migracje bazy uruchamiają się automatycznie przy starcie, a Twoje dane zostają w wolumenach. W
aplikacji Docker na NAS-ie lub w Portainerze użyj akcji *pobierz i wdróż ponownie* (lub
*aktualizuj*) dla stacka.

Uruchomiłeś pojedynczym poleceniem? Wykonaj `docker pull ghcr.io/m1ndgames/openfishing`,
usuń stary kontener (`docker rm -f <nazwa>`) i ponownie uruchom to samo polecenie `docker run`:
nazwane wolumeny zachowują Twoje dane.

Chcesz sam decydować, kiedy aktualizować? Zamień obraz na tag wersji ze
[strony wydań](https://github.com/m1ndgames/OpenFishing/releases), np. `ghcr.io/m1ndgames/openfishing:<version>`, i zmieniaj go, gdy będziesz
gotowy. Przy przenoszeniu kopii trzymaj obie maszyny na tej samej wersji.

## Reverse proxy i HTTPS

Aby korzystać z OpenFishing spoza domu, postaw go za reverse proxy obsługującym HTTPS i ustaw
`BASE_URL` na adres publiczny. W Caddy to cała konfiguracja:

```text title="Caddyfile"
fishing.example.com {
  reverse_proxy localhost:3000
}
```

W nginx przekaż standardowe nagłówki proxy i pozwól na przesyłanie plików wielkości zdjęć:

```nginx title="nginx"
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  client_max_body_size 100m;
}
```

Najpierw ustaw `ADMIN_PASSWORD`: instancja bez logowania nigdy nie powinna być wystawiona do internetu.

## Następne kroki

- Dodaj pierwszą przynętę: [Przynęty](/pl/docs/features/lures) pokazują, co możesz zapisać.
- Wszystkie ustawienia (e-mail, AI, limity przesyłania, tryb demo) znajdziesz w
  [opisie zmiennych środowiskowych](/pl/docs/configuration/environment-variables).
- Dla przyjaciół i rodziny: [Wielu użytkowników i uwierzytelnianie](/pl/docs/multi-user/authentication).
- Coś nie działa? Zobacz [FAQ i rozwiązywanie problemów](/pl/docs/help/faq).

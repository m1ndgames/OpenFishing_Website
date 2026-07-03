---
title: Szybki start
description: Uruchom OpenFishing jedną komendą, zaloguj się po raz pierwszy i dowiedz się, gdzie znajdują się Twoje dane.
---

Najszybszym sposobem na wypróbowanie OpenFishing na własnej maszynie jest pojedyncze `docker run`.

## Jedna komenda

```bash
docker run -d -p 3000:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing:latest
```

Następnie otwórz **http://localhost:3000**.

To uruchamia OpenFishing w trybie **jednodostępowym, w pełni otwartym** — bez logowania. Każdy, kto ma dostęp do
portu, ma pełny dostęp, więc udostępniaj go tylko w zaufanej sieci, dopóki nie włączysz
[uwierzytelniania](/pl/docs/multi-user/authentication).

## Pierwsze logowanie

- **Bez `ADMIN_PASSWORD`** (jak powyżej): aplikacja jest otwarta — nie ma ekranu logowania, a wszystkie
  funkcje są dostępne od razu.
- **Z ustawionym `ADMIN_PASSWORD`**: pojawia się ekran logowania. Nazwa użytkownika administratora to zawsze
  `admin`, a hasło to to, które ustawisz w `ADMIN_PASSWORD`. Konto jest
  ponownie synchronizowane ze zmiennej środowiskowej przy każdym uruchomieniu.

Zobacz [Wielu użytkowników i uwierzytelnianie](/pl/docs/multi-user/authentication), aby uzyskać pełny obraz.

## Gdzie znajdują się Twoje dane

OpenFishing przechowuje dwie rzeczy, które musisz utrwalić:

| Dane | Ścieżka w kontenerze | W powyższej komendzie |
|---|---|---|
| Baza danych SQLite | `/app/data` | nazwany wolumen `openfishing-db` |
| Przesłane zdjęcia | `/app/uploads` | nazwany wolumen `openfishing-uploads` |

:::caution
Zarówno baza danych, jak i katalog przesłanych plików **muszą** znajdować się na trwałych wolumenach. Jeśli uruchomisz
kontener bez wolumenów, wszystko zostanie utracone po usunięciu kontenera.
:::

Aby uzyskać konfigurację gotową do produkcji z nazwanymi wolumenami i zmiennymi środowiskowymi w pliku, użyj
[instalacji docker-compose](/pl/docs/getting-started/installation).

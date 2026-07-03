---
title: Wprowadzenie
description: Czym jest OpenFishing, jego samodzielnie hostowana, dbająca o prywatność filozofia oraz przegląd funkcji.
---

**OpenFishing** to samodzielnie hostowana aplikacja webowa dla wędkarzy do organizowania **kolekcji przynęt**,
oznaczania **łowisk** na mapie, zapisywania **połowów** i śledzenia **sprzętu** — wszystko z
jednej, dbającej o prywatność aplikacji działającej na Twoim własnym serwerze.

To aplikacja [SvelteKit](https://kit.svelte.dev/) oparta na pojedynczej bazie danych **SQLite**,
dostarczana jako jeden obraz **Docker**. Nie ma usługi w chmurze, konta u podmiotów trzecich ani
telemetrii: Twoje zdjęcia i dane znajdują się na Twojej infrastrukturze i nigdzie indziej.

## Filozofia

- **Samodzielnie hostowane i dbające o prywatność** — Ty to uruchamiasz, Ty jesteś właścicielem danych. Nic nie opuszcza Twojego serwera.
- **Bez chmury** — do działania rdzenia aplikacji nie są wymagane żadne zewnętrzne zależności.
- **Otwarte źródło** — wydane na licencji AGPL-3.0 na
  [GitHubie](https://github.com/m1ndgames/OpenFishing).
- **Proste w uruchomieniu** — jeden kontener, jeden plik SQLite, dwa wolumeny na bazę danych i pliki.

## Przegląd funkcji

| Obszar | Co robi |
|---|---|
| [Przynęty](/pl/docs/features/lures) | Biblioteka zdjęć z tagami, gatunkami, ulubionymi, śledzeniem utraconych przynęt, etykietami QR i szybkim wyszukiwaniem. |
| [Łowiska](/pl/docs/features/spots) | Interaktywna mapa Leaflet Twoich łowisk z GPS i zdjęciami. |
| [Połowy](/pl/docs/features/catches) | Zapisuj gatunek, wagę, długość, GPS, złów i wypuść oraz prezentację, z Indeksem brań opartym na pogodzie. |
| [Indeks brań](/pl/docs/features/bite-index) | Automatyczna ocena 0–10 oceniająca warunki wędkarskie na podstawie danych pogodowych. |
| [Sprzęt](/pl/docs/features/tackle) | Wędki, kołowrotki, żyłki i zestawy, z historią szpul. |
| [Statystyki](/pl/docs/features/stats) | Trendy w Twoich połowach i sprzęcie. |
| [Funkcje AI](/pl/docs/ai/ai-features) | Opcjonalny chatbot oraz rozpoznawanie ryb i przynęt ze zdjęć. |
| [Wielu użytkowników](/pl/docs/multi-user/authentication) | Opcjonalne logowanie do hostowania znajomych i rodziny, z limitami i panelem administracyjnym. |
| [Linki udostępniania](/pl/docs/features/share-links) | Publiczne strony tylko do odczytu dla przynęty, łowiska lub połowu. |
| [API REST](/pl/docs/api/rest-api) | API JSON tylko do odczytu z tokenami Bearer i interfejsem Swagger. |
| [Kopia zapasowa i przywracanie](/pl/docs/backup/backup-restore) | Eksport/import ZIP jednym kliknięciem. |
| [Języki](/pl/docs/features/languages) | 9 języków z przełącznikiem flag. |

## Kolejne kroki

- Postępuj zgodnie z [Szybkim startem](/pl/docs/getting-started/quick-start), aby uruchomić jedną komendą.
- Wdróż poprawnie z [Instalacją (docker-compose)](/pl/docs/getting-started/installation).
- Dostosuj zachowanie za pomocą [Zmiennych środowiskowych](/pl/docs/configuration/environment-variables).

:::note
Ta dokumentacja to zwięzły przewodnik. Aby uzyskać szczegóły na poziomie kodu źródłowego, zobacz
[repozytorium OpenFishing](https://github.com/m1ndgames/OpenFishing) na GitHubie.
:::

---
title: Wprowadzenie
description: Czym jest OpenFishing, jak trzyma Twoje dane na Twoim serwerze, co łączy się z internetem i przegląd funkcji.
---

**OpenFishing** to samodzielnie hostowana aplikacja webowa, w której wędkarze porządkują swoją
**kolekcję przynęt**, zaznaczają **łowiska** na mapie, zapisują **połowy** i prowadzą ewidencję
**sprzętu**, wszystko w jednej, dbającej o prywatność aplikacji działającej na Twoim serwerze.

Dostarczana jest jako jeden obraz **Docker** z jedną bazą danych **SQLite**. Bez usługi w
chmurze, bez konta u kogoś trzeciego i bez telemetrii: Twoje zdjęcia i wpisy są na Twoim
serwerze i nigdzie indziej. Chcesz zobaczyć ją przed instalacją? Otwórz
[demo na żywo](https://demo.openfishing.org): bez rejestracji, tylko do odczytu.

<figure class="doc-shot">
<div class="doc-shot-frame"><img class="shot-dark" src="/screenshots/hero.jpg" alt="Połów w OpenFishing: okoń na macie do mierzenia z długością, przynętą, na którą go złowiono, Indeksem brania i miejscem na mapie" width="1400" height="847" loading="lazy" decoding="async"><img class="shot-light" src="/screenshots/hero-light.jpg" alt="Połów w OpenFishing: okoń na macie do mierzenia z długością, przynętą, na którą go złowiono, Indeksem brania i miejscem na mapie" width="1400" height="847" loading="lazy" decoding="async"></div>
<figcaption><a href="https://demo.openfishing.org/" target="_blank" rel="noopener">Zobacz w demo <svg class="doc-shot-cue" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="sr-only"> (otwiera się w nowej karcie)</span></a></figcaption>
</figure>

## Przegląd funkcji

| Obszar | Co robi |
|---|---|
| [Przynęty](/pl/docs/features/lures) | Biblioteka zdjęć z tagami, gatunkami, ulubionymi, śledzeniem zgubionych przynęt, etykietami QR i szybkim wyszukiwaniem. |
| [Łowiska](/pl/docs/features/spots) | Interaktywna mapa Twoich łowisk z GPS i zdjęciami. |
| [Połowy](/pl/docs/features/catches) | Zapisuj gatunek, wagę, długość, GPS, złów i wypuść oraz styl prowadzenia, z indeksem brania opartym na pogodzie. |
| [Sprzęt](/pl/docs/features/tackle) | Wędki, kołowrotki, żyłki i zestawy, z historią szpul. |

Poza tym:

- **Analizy**: [Indeks brania](/pl/docs/features/bite-index), [Statystyki](/pl/docs/features/stats)
- **Udostępnianie**: [Linki udostępniania](/pl/docs/features/share-links)
- **Opcje**: [Motywy i wygląd](/pl/docs/features/themes), [Języki](/pl/docs/features/languages)
- **Prowadzenie serwera**: [Wielu użytkowników](/pl/docs/multi-user/authentication), [Funkcje AI](/pl/docs/ai/ai-features), [Kopia zapasowa i przywracanie](/pl/docs/backup/backup-restore), [REST API](/pl/docs/api/rest-api)

## Filozofia

- **Samodzielny hosting i prywatność**: Ty ją uruchamiasz, dane należą do Ciebie. Twoje wpisy i
  zdjęcia zostają na Twoim serwerze.
- **Bez chmury**: do działania aplikacji nie jest potrzebne żadne konto ani usługa w chmurze.
- **Open source**: wydana na licencji AGPL-3.0 na
  [GitHubie](https://github.com/m1ndgames/OpenFishing).
- **Łatwa w utrzymaniu**: jeden kontener, jeden plik SQLite, dwa wolumeny na bazę i przesłane pliki.

## Co łączy się z internetem

Twoje wpisy i zdjęcia nigdy nie opuszczają Twojego serwera. Te funkcje pobierają dane z
zewnątrz, i żadne inne:

- **[Pogoda](/pl/docs/features/bite-index)**: gdy zapisujesz połów, otwierasz łowisko lub pytasz chatbota o miejsce, serwer pyta
  [Open-Meteo](https://open-meteo.com/) o bieżącą pogodę w tym miejscu. Wysyłane są tylko współrzędne.
- **Mapa [łowisk](/pl/docs/features/spots)**: gdy wyświetla się mapa, przeglądarka pobiera kafelki z OpenStreetMap, które widzi oglądany obszar.
  `MAP_TILE_URL` przełącza na własny serwer kafelków.
- **[Funkcje AI](/pl/docs/ai/ai-features)**: tylko jeśli je skonfigurujesz; wybrany dostawca AI otrzymuje Twoje pytanie lub zdjęcie.
- **[Reset hasła](/pl/docs/multi-user/authentication)**: tylko przy skonfigurowanym SMTP; Twój własny serwer poczty wysyła wiadomość.

## Następne kroki

- [Zainstaluj OpenFishing](/pl/docs/getting-started/installation) na swoim NAS-ie lub serwerze domowym.
- Najpierw rozejrzyj się w [demo na żywo](https://demo.openfishing.org).
- Dostosuj działanie za pomocą [zmiennych środowiskowych](/pl/docs/configuration/environment-variables).

:::note
Czegoś brakuje albo coś jest niejasne? [Zgłoś issue na GitHubie](https://github.com/m1ndgames/OpenFishing/issues),
a uzupełnimy to.
:::

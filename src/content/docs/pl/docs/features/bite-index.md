---
title: Indeks brań
description: Jak obliczana i oceniana jest automatyczna pogodowa ocena 0–10 Indeksu brań w OpenFishing.
---

**Indeks brań** to automatyczna ocena od **0 do 10**, która ocenia, jak korzystne były warunki wędkarskie dla
danego połowu, na podstawie danych pogodowych.

## Jak jest obliczany

Indeks to ważona mieszanka trzech czynników pochodzących z pogody:

| Czynnik | Waga | Idea |
|---|---|---|
| **Trend ciśnienia** | ×0.5 | Zmieniające się ciśnienie atmosferyczne silnie wpływa na aktywność żerowania. |
| **Światło** | ×0.3 | Poziomy światła wpływają na to, kiedy ryby są aktywne. |
| **Stabilność temperatury** | ×0.2 | Stabilne temperatury zazwyczaj oznaczają bardziej przewidywalne zachowanie. |

Dane pogodowe pochodzą z bezpłatnego [API Open-Meteo](https://open-meteo.com/). Wynikowa ocena jest
przechowywana jako **migawka przy każdym połowie**, więc odzwierciedla warunki z tamtej chwili i nigdy nie
zmienia się z mocą wsteczną.

## Etykiety oceny

Ocena liczbowa jest mapowana na przyjazną etykietę:

| Ocena | Ocena słowna |
|---|---|
| Niska | **Słaba** |
| … | **Przeciętna** |
| … | **Dobra** |
| Wysoka | **Doskonała** |

## Powiązane

- Indeks brań jest przechwytywany automatycznie przy każdym [połowie](/pl/docs/features/catches).

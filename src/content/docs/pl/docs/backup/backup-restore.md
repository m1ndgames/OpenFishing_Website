---
title: Kopia zapasowa i przywracanie
description: Kopia zapasowa i przywracanie ZIP jednym kliknięciem, na użytkownika lub całej instancji, oraz co zawiera archiwum.
---

OpenFishing ma wbudowaną **kopię zapasową i przywracanie** w postaci archiwów ZIP do pobrania/przesłania.

## Kopia zapasowa i przywracanie na użytkownika

Z poziomu **`/settings`** każdy użytkownik może utworzyć kopię zapasową i przywrócić **swoje własne dane** —
swoje przynęty, łowiska, połowy i sprzęt, wraz z powiązanymi przesłanymi plikami.

## Kopia zapasowa i przywracanie całej instancji (admin)

Z panelu administracyjnego pod **`/settings/admin`** administrator może utworzyć kopię zapasową i przywrócić
**całą instancję** — wraz ze wszystkimi użytkownikami i kontami.

:::caution
**Przywrócenie wszystkiego** wykonuje pełne **wymazanie i odbudowę** instancji: istniejące dane są zastępowane
zawartością archiwum. Najpierw utwórz świeżą kopię zapasową.
:::

## Format archiwum

Kopia zapasowa to plik ZIP zawierający:

- **`backup.json`** — dane strukturalne (rekordy).
- **`uploads/`** — powiązane pliki zdjęć.

Ponieważ to zwykły plik ZIP, możesz go przechowywać w dowolnym miejscu i w razie potrzeby przejrzeć.

## Powiązane

- Pamiętaj, że aktywna baza danych i przesłane pliki muszą znajdować się na
  [trwałych wolumenach](/pl/docs/getting-started/installation) — kopie zapasowe uzupełniają, ale nie
  zastępują, właściwych wolumenów.

---
title: "Indeks brania"
description: "Jak OpenFishing wylicza indeks brania od 0 do 10 z pogody i co oznaczają jego oceny."
---

**Indeks brania** to ocena od **0 do 10** tego, jak dobra jest pogoda na ryby. OpenFishing wylicza go
z pogody w miejscu połowu **w chwili, gdy go zapisujesz**, i zapisuje razem z połowem.

:::note
Ocena korzysta z pogody w chwili zapisu, a nie z godziny, którą podajesz dla połowu. Zapisuj połowy
nad wodą, aby ocena była trafna; połów dodany kilka godzin później dostaje pogodę z tamtej chwili.
:::

## Jak jest liczony

Trzy składniki, każdy oceniany od 0 do 10, są ważone i sumowane:

- **Tendencja ciśnienia** (50 %): 10, gdy ciśnienie spadło o ponad 1,5 hPa w ciągu ostatnich 3 godzin, jak przed frontem; 7, gdy jest stałe; 2, gdy rośnie.
- **Warunki oświetlenia** (30 %): 10 o świcie (godzina przed wschodem słońca) i o zmierzchu (godzina po zachodzie); 8 w godzinie przed zachodem; 6 w nocy i przez dwie godziny po wschodzie; 2 w ciągu dnia.
- **Stabilność temperatury** (20 %): 10, gdy temperatura zmieniła się o mniej niż 3 °C w ciągu ostatnich 3 godzin; 2 przy większej zmianie.

Twój serwer pobiera pogodę z bezpłatnej usługi [Open-Meteo](https://open-meteo.com/).

## Oceny

| Wynik | Ocena |
|---|---|
| 8,5 i więcej | **Doskonały** |
| 6,5 do 8,4 | **Dobry** |
| 4 do 6,4 | **Przeciętny** |
| Poniżej 4 | **Słaby** |

## Gdzie go zobaczysz

- Przy każdym [połowie](/pl/docs/features/catches), zapisany w chwili dodania.
- Przy każdym [łowisku](/pl/docs/features/spots), jako bieżąca ocena dla tego miejsca, pobierana przy otwarciu.

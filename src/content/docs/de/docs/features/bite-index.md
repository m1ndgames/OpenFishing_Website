---
title: "Beissindex"
description: "Wie OpenFishing den Beissindex von 0 bis 10 aus dem Wetter berechnet und was die Bewertungen bedeuten."
---

Der **Beissindex** ist eine Wertung von **0 bis 10** dafür, wie gut das Angelwetter ist. OpenFishing
berechnet ihn aus dem Wetter am Ort des Fangs **in dem Moment, in dem du ihn einträgst**, und
speichert ihn mit dem Fang.

:::note
Die Wertung nutzt das Wetter beim Speichern, nicht die Uhrzeit, die du für den Fang angibst. Trag
Fänge am Wasser ein, dann stimmt die Wertung; ein Fang, den du Stunden später einträgst, bekommt das
Wetter dieses späteren Moments.
:::

## So wird er berechnet

Drei Teile, jeder mit 0 bis 10 bewertet, werden gewichtet und addiert:

- **Drucktendenz** (50 %): 10, wenn der Luftdruck in den letzten 3 Stunden um mehr als 1,5 hPa gefallen ist, wie vor einer Front; 7 bei gleichbleibendem Druck; 2 bei steigendem.
- **Lichtverhältnisse** (30 %): 10 in der Morgendämmerung (die Stunde vor Sonnenaufgang) und Abenddämmerung (die Stunde nach Sonnenuntergang); 8 in der Stunde vor Sonnenuntergang; 6 nachts und in den ersten zwei Stunden nach Sonnenaufgang; 2 tagsüber.
- **Temperaturstabilität** (20 %): 10, wenn sich die Temperatur in den letzten 3 Stunden um weniger als 3 °C geändert hat; 2 bei einem größeren Sprung.

Dein Server holt das Wetter vom kostenlosen Dienst [Open-Meteo](https://open-meteo.com/).

## Bewertungen

| Wertung | Bewertung |
|---|---|
| 8,5 und mehr | **Sehr gut** |
| 6,5 bis 8,4 | **Gut** |
| 4 bis 6,4 | **Mäßig** |
| Unter 4 | **Schlecht** |

## Wo du ihn siehst

- Bei jedem [Fang](/de/docs/features/catches), gespeichert beim Eintragen.
- Bei jeder [Angelstelle](/de/docs/features/spots) als aktuelle Wertung für diesen Ort, abgerufen beim Öffnen.

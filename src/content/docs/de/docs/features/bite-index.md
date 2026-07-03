---
title: Bissindex
description: Wie der automatische Bissindex-Wetterwert von 0–10 in OpenFishing berechnet und bewertet wird.
---

Der **Bissindex** ist ein automatischer Wert von **0 bis 10**, der bewertet, wie günstig die Angelbedingungen
für einen bestimmten Fang waren, basierend auf Wetterdaten.

## Wie er berechnet wird

Der Index ist eine gewichtete Mischung aus drei aus dem Wetter abgeleiteten Faktoren:

| Faktor | Gewichtung | Idee |
|---|---|---|
| **Luftdrucktrend** | ×0.5 | Ein sich ändernder Luftdruck beeinflusst die Fressaktivität stark. |
| **Licht** | ×0.3 | Lichtverhältnisse beeinflussen, wann Fische aktiv sind. |
| **Temperaturstabilität** | ×0.2 | Stabile Temperaturen bedeuten tendenziell vorhersehbareres Verhalten. |

Die Wetterdaten stammen von der kostenlosen [Open-Meteo-API](https://open-meteo.com/). Der resultierende
Wert wird als **Momentaufnahme an jedem Fang** gespeichert, sodass er die Bedingungen in diesem Moment
widerspiegelt und sich niemals rückwirkend ändert.

## Bewertungslabels

Der numerische Wert wird einem verständlichen Label zugeordnet:

| Wert | Bewertung |
|---|---|
| Niedrig | **Schlecht** |
| … | **Mäßig** |
| … | **Gut** |
| Hoch | **Ausgezeichnet** |

## Verwandt

- Der Bissindex wird bei jedem [Fang](/de/docs/features/catches) automatisch erfasst.

---
title: Beetindex
description: Hoe de automatische weerscore van 0–10 van de Beetindex in OpenFishing wordt berekend en beoordeeld.
---

De **Beetindex** is een automatische score van **0 tot 10** die beoordeelt hoe gunstig de visomstandigheden
waren voor een bepaalde vangst, op basis van weergegevens.

## Hoe hij wordt berekend

De index is een gewogen mix van drie uit het weer afgeleide factoren:

| Factor | Weging | Idee |
|---|---|---|
| **Druktrend** | ×0.5 | Een veranderende luchtdruk beïnvloedt de voedingsactiviteit sterk. |
| **Licht** | ×0.3 | Lichtniveaus bepalen wanneer vissen actief zijn. |
| **Temperatuurstabiliteit** | ×0.2 | Stabiele temperaturen betekenen doorgaans voorspelbaarder gedrag. |

De weergegevens komen van de gratis [Open-Meteo-API](https://open-meteo.com/). De resulterende score wordt
opgeslagen als een **momentopname op elke vangst**, zodat hij de omstandigheden van dat moment weergeeft en
nooit met terugwerkende kracht verandert.

## Beoordelingslabels

De numerieke score komt overeen met een begrijpelijk label:

| Score | Beoordeling |
|---|---|
| Laag | **Slecht** |
| … | **Matig** |
| … | **Goed** |
| Hoog | **Uitstekend** |

## Gerelateerd

- De Beetindex wordt automatisch vastgelegd bij elke [vangst](/nl/docs/features/catches).

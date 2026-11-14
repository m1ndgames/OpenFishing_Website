---
title: "Bijt-index"
description: "Hoe OpenFishing de bijt-index van 0 tot 10 uit het weer berekent en wat de beoordelingen betekenen."
---

De **bijt-index** is een score van **0 tot 10** voor hoe goed het visweer is. OpenFishing berekent
hem uit het weer op de plek van de vangst **op het moment dat je hem vastlegt** en slaat hem op bij
de vangst.

:::note
De score gebruikt het weer bij het opslaan, niet de tijd die je voor de vangst invult. Leg vangsten
aan het water vast voor een kloppende score; een vangst die je uren later toevoegt, krijgt het weer
van dat latere moment.
:::

## Zo wordt hij berekend

Drie onderdelen, elk met een score van 0 tot 10, worden gewogen en opgeteld:

- **Druktendentie** (50 %): 10 als de luchtdruk in de laatste 3 uur meer dan 1,5 hPa daalde, zoals voor een front; 7 bij gelijke druk; 2 bij stijgende druk.
- **Lichtomstandigheden** (30 %): 10 bij dageraad (het uur voor zonsopkomst) en schemering (het uur na zonsondergang); 8 in het uur voor zonsondergang; 6 's nachts en in de eerste twee uur na zonsopkomst; 2 overdag.
- **Temperatuurstabiliteit** (20 %): 10 als de temperatuur in de laatste 3 uur minder dan 3 °C veranderde; 2 bij een grotere sprong.

Je server haalt het weer op bij de gratis dienst [Open-Meteo](https://open-meteo.com/).

## Beoordelingen

| Score | Beoordeling |
|---|---|
| 8,5 en hoger | **Uitstekend** |
| 6,5 tot 8,4 | **Goed** |
| 4 tot 6,4 | **Matig** |
| Onder 4 | **Slecht** |

## Waar je hem ziet

- Bij elke [vangst](/nl/docs/features/catches), opgeslagen bij het vastleggen.
- Bij elke [spot](/nl/docs/features/spots), als actuele score voor die plek, opgehaald bij het openen.

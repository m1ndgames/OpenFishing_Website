---
title: Indice di abboccata
description: Come viene calcolato e valutato il punteggio meteo automatico da 0 a 10 dell'Indice di abboccata di OpenFishing.
---

L'**Indice di abboccata** è un punteggio automatico da **0 a 10** che valuta quanto fossero favorevoli le
condizioni di pesca per una data cattura, in base ai dati meteo.

## Come viene calcolato

L'indice è una miscela ponderata di tre fattori derivati dal meteo:

| Fattore | Peso | Idea |
|---|---|---|
| **Tendenza della pressione** | ×0.5 | Il cambiamento della pressione barometrica influenza fortemente l'attività alimentare. |
| **Luce** | ×0.3 | I livelli di luce influenzano quando i pesci sono attivi. |
| **Stabilità della temperatura** | ×0.2 | Temperature stabili tendono a significare un comportamento più prevedibile. |

I dati meteo provengono dall'[API gratuita Open-Meteo](https://open-meteo.com/). Il punteggio risultante viene
memorizzato come **istantanea su ogni cattura**, quindi riflette le condizioni di quel momento e non cambia
mai retroattivamente.

## Etichette di valutazione

Il punteggio numerico corrisponde a un'etichetta comprensibile:

| Punteggio | Valutazione |
|---|---|
| Basso | **Scarso** |
| … | **Discreto** |
| … | **Buono** |
| Alto | **Eccellente** |

## Correlati

- L'Indice di abboccata viene catturato automaticamente su ogni [cattura](/it/docs/features/catches).

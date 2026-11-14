---
title: "Indice di abboccata"
description: "Come OpenFishing calcola l'indice di abboccata da 0 a 10 dal meteo e cosa significano le valutazioni."
---

L'**indice di abboccata** è un punteggio da **0 a 10** su quanto è buono il meteo per pescare.
OpenFishing lo calcola dal meteo nel luogo della cattura **nel momento in cui la registri** e lo salva
con la cattura.

:::note
Il punteggio usa il meteo al momento del salvataggio, non l'ora che indichi per la cattura. Registra
le catture in acqua per un punteggio preciso; una aggiunta ore dopo riceve il meteo di quel momento.
:::

## Come viene calcolato

Tre componenti, ognuna con punteggio da 0 a 10, vengono pesate e sommate:

- **Tendenza della pressione** (50 %): 10 se la pressione è scesa di oltre 1,5 hPa nelle ultime 3 ore, come prima di un fronte; 7 se stabile; 2 se in salita.
- **Condizioni di luce** (30 %): 10 all'alba (l'ora prima del sorgere del sole) e al crepuscolo (l'ora dopo il tramonto); 8 nell'ora prima del tramonto; 6 di notte e nelle prime due ore dopo l'alba; 2 di giorno.
- **Stabilità della temperatura** (20 %): 10 se la temperatura è cambiata di meno di 3 °C nelle ultime 3 ore; 2 per uno sbalzo maggiore.

Il tuo server ottiene il meteo dal servizio gratuito [Open-Meteo](https://open-meteo.com/).

## Valutazioni

| Punteggio | Valutazione |
|---|---|
| 8,5 e oltre | **Eccellente** |
| da 6,5 a 8,4 | **Buono** |
| da 4 a 6,4 | **Discreto** |
| Sotto 4 | **Scarso** |

## Dove lo vedi

- Su ogni [cattura](/it/docs/features/catches), salvato quando la registri.
- Su ogni [spot](/it/docs/features/spots), come punteggio attuale di quel luogo, ottenuto all'apertura.

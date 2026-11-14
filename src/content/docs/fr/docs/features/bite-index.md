---
title: "Indice de morsure"
description: "Comment OpenFishing calcule l'indice de morsure de 0 à 10 à partir de la météo, et ce que signifient ses niveaux."
---

L'**indice de morsure** est une note de **0 à 10** qui indique si la météo est bonne pour la pêche.
OpenFishing la calcule à partir de la météo au lieu de la prise **au moment où vous l'enregistrez**,
puis la garde avec la prise.

:::note
La note utilise la météo au moment de l'enregistrement, pas l'heure que vous saisissez pour la
prise. Enregistrez vos prises au bord de l'eau pour une note juste ; une prise ajoutée des heures plus
tard reçoit la météo de ce moment-là.
:::

## Comment il est calculé

Trois composantes, notées chacune de 0 à 10, sont pondérées puis additionnées :

- **Tendance de pression** (50 %): 10 si la pression a baissé de plus de 1,5 hPa en 3 heures, comme avant un front ; 7 si elle est stable ; 2 si elle monte.
- **Conditions lumineuses** (30 %): 10 à l'aube (l'heure avant le lever du soleil) et au crépuscule (l'heure après le coucher) ; 8 dans l'heure avant le coucher ; 6 la nuit et pendant les deux heures après le lever ; 2 en journée.
- **Stabilité de la température** (20 %): 10 si la température a varié de moins de 3 °C en 3 heures ; 2 pour un écart plus grand.

Votre serveur obtient la météo auprès du service gratuit [Open-Meteo](https://open-meteo.com/).

## Niveaux

| Note | Niveau |
|---|---|
| 8,5 et plus | **Excellent** |
| 6,5 à 8,4 | **Bon** |
| 4 à 6,4 | **Passable** |
| Moins de 4 | **Mauvais** |

## Où le voir

- Sur chaque [prise](/fr/docs/features/catches), enregistré au moment de la saisie.
- Sur chaque [spot](/fr/docs/features/spots), comme note actuelle de ce lieu, obtenue à l'ouverture.

---
title: Indice de touche
description: Comment le score météo automatique de 0 à 10 de l'indice de touche d'OpenFishing est calculé et évalué.
---

L'**indice de touche** est un score automatique de **0 à 10** qui évalue à quel point les conditions de pêche
étaient favorables pour une prise donnée, à partir des données météo.

## Comment il est calculé

L'indice est un mélange pondéré de trois facteurs dérivés de la météo :

| Facteur | Poids | Idée |
|---|---|---|
| **Tendance de pression** | ×0.5 | La variation de la pression barométrique influence fortement l'activité alimentaire. |
| **Lumière** | ×0.3 | Les niveaux de lumière influencent le moment où les poissons sont actifs. |
| **Stabilité de la température** | ×0.2 | Des températures stables tendent à signifier un comportement plus prévisible. |

Les données météo proviennent de l'[API Open-Meteo](https://open-meteo.com/) gratuite. Le score obtenu est
stocké comme un **instantané sur chaque prise**, il reflète donc les conditions de ce moment et ne change
jamais rétroactivement.

## Étiquettes d'évaluation

Le score numérique correspond à une étiquette conviviale :

| Score | Évaluation |
|---|---|
| Faible | **Mauvais** |
| … | **Moyen** |
| … | **Bon** |
| Élevé | **Excellent** |

## Associé

- L'indice de touche est capturé automatiquement sur chaque [prise](/fr/docs/features/catches).

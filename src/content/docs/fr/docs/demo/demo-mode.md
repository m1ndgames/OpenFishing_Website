---
title: Mode démo
description: Ce que fait DEMO_MODE — une instance en lecture seule avec écritures bloquées — et comment la démo publique l'utilise.
---

Le **mode démo** rend une instance OpenFishing **en lecture seule**. Définissez la variable d'environnement
**`DEMO_MODE`** sur n'importe quelle valeur pour l'activer (voir
[Variables d'environnement](/fr/docs/configuration/environment-variables)).

## Ce qu'il fait

- **Toutes les écritures sont bloquées** — les visiteurs peuvent tout parcourir mais ne peuvent pas créer,
  modifier ou supprimer.
- Une **bannière** indique que l'instance est une démo, et toute tentative d'écriture affiche un **toast**
  expliquant que les écritures sont désactivées.
- **Le changement de langue fonctionne toujours**, pour que les visiteurs puissent voir la démo dans l'une des
  [9 langues](/fr/docs/features/languages).

## La démo publique

La démo officielle sur **[demo.openfishing.org](https://demo.openfishing.org)** fonctionne dans ce mode. C'est
une instance entièrement remplie que vous pouvez explorer librement sans affecter aucune donnée.

```yaml
environment:
  - DEMO_MODE=1
```

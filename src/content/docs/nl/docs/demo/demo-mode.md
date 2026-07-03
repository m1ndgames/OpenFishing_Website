---
title: Demomodus
description: Wat DEMO_MODE doet — een alleen-lezen instantie met geblokkeerde schrijfacties — en hoe de openbare demo het gebruikt.
---

De **demomodus** maakt een OpenFishing-instantie **alleen-lezen**. Stel de omgevingsvariabele **`DEMO_MODE`** op
een willekeurige waarde in om hem in te schakelen (zie
[Omgevingsvariabelen](/nl/docs/configuration/environment-variables)).

## Wat het doet

- **Alle schrijfacties zijn geblokkeerd** — bezoekers kunnen alles doorbladeren maar niets aanmaken, bewerken
  of verwijderen.
- Een **banner** geeft aan dat de instantie een demo is, en een poging tot schrijven toont een **toast** die
  uitlegt dat schrijven is uitgeschakeld.
- **Taalwisseling werkt nog steeds**, zodat bezoekers de demo in een van de
  [9 talen](/nl/docs/features/languages) kunnen bekijken.

## De openbare demo

De officiële demo op **[demo.openfishing.org](https://demo.openfishing.org)** draait in deze modus. Het is een
volledig gevulde instantie die je vrij kunt verkennen zonder gegevens te beïnvloeden.

```yaml
environment:
  - DEMO_MODE=1
```

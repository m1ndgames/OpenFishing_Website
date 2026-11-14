---
title: "Demomodus"
description: "Wat DEMO_MODE doet (een alleen-lezen installatie zonder opslaan) en hoe de publieke demo het gebruikt."
---

De **demomodus** maakt een OpenFishing-installatie **alleen-lezen**: je kunt rondkijken maar niets
veranderen. De publieke demo draait zo.

## Aanzetten

```yaml title="docker-compose.yml"
    environment:
      - DEMO_MODE=1
```

**Elke waarde zet hem aan, ook `false` of `0`.** Om hem uit te zetten verwijder je de regel en
voer je `docker compose up -d` uit. Zie [Omgevingsvariabelen](/nl/docs/configuration/environment-variables).

## Wat hij doet

- **Niets kan worden opgeslagen**: bezoekers zien alles, maar kunnen niets aanmaken, bewerken of verwijderen.
- Een **banner** laat zien dat het een demo is, en een poging tot opslaan toont een korte melding waarom het niet lukte.
- **Van taal wisselen werkt nog**, dus bezoekers zien de demo in alle [9 talen](/nl/docs/features/languages).
- De **AI-chatbot** antwoordt niet, maar meldt "De AI-chatbot is uitgeschakeld in deze demo."

## De publieke demo

De officiële demo op **[demo.openfishing.org](https://demo.openfishing.org)** draait in deze modus.
Hij is gevuld met voorbeeldgegevens en je kunt hem vrij verkennen zonder iets te veranderen.

---
title: "Modalità demo"
description: "Cosa fa DEMO_MODE (un'istanza in sola lettura, senza salvataggi) e come la usa la demo pubblica."
---

La **modalità demo** rende un'istanza di OpenFishing **in sola lettura**: si può guardare tutto,
ma non cambiare nulla. La demo pubblica funziona così.

## Attivarla

```yaml title="docker-compose.yml"
    environment:
      - DEMO_MODE=1
```

**Qualsiasi valore la attiva, anche `false` o `0`.** Per disattivarla, cancella la riga ed esegui
`docker compose up -d`. Vedi [Variabili d'ambiente](/it/docs/configuration/environment-variables).

## Cosa fa

- **Non si può salvare nulla**: i visitatori vedono tutto ma non possono creare, modificare o eliminare.
- Un **banner** («Modalità demo») indica che si tratta di una demo, e un tentativo di salvataggio mostra un breve messaggio che spiega perché non è riuscito.
- **Il cambio di lingua funziona ancora**, quindi la demo si vede in tutte le [9 lingue](/it/docs/features/languages).
- Il **chatbot IA** non risponde; mostra «Il chatbot IA è disabilitato in questa demo.»

## La demo pubblica

La demo ufficiale su **[demo.openfishing.org](https://demo.openfishing.org)** gira in questa
modalità. È piena di dati di esempio e puoi esplorarla liberamente senza cambiare nulla.

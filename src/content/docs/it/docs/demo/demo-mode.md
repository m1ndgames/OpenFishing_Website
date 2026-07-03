---
title: Modalità demo
description: Cosa fa DEMO_MODE — un'istanza di sola lettura con le scritture bloccate — e come la usa la demo pubblica.
---

La **modalità demo** rende un'istanza di OpenFishing **di sola lettura**. Imposta la variabile d'ambiente
**`DEMO_MODE`** su qualsiasi valore per abilitarla (vedi
[Variabili d'ambiente](/it/docs/configuration/environment-variables)).

## Cosa fa

- **Tutte le scritture sono bloccate** — i visitatori possono sfogliare tutto ma non possono creare, modificare
  o eliminare.
- Un **banner** indica che l'istanza è una demo, e il tentativo di scrivere mostra un **toast** che spiega che
  le scritture sono disabilitate.
- **Il cambio di lingua funziona ancora**, così i visitatori possono vedere la demo in una qualsiasi delle
  [9 lingue](/it/docs/features/languages).

## La demo pubblica

La demo ufficiale su **[demo.openfishing.org](https://demo.openfishing.org)** gira in questa modalità. È
un'istanza completamente popolata che puoi esplorare liberamente senza influire su alcun dato.

```yaml
environment:
  - DEMO_MODE=1
```

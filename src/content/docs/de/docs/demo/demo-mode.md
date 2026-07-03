---
title: Demo-Modus
description: Was DEMO_MODE macht — eine schreibgeschützte Instanz mit blockierten Schreibvorgängen — und wie die öffentliche Demo ihn nutzt.
---

Der **Demo-Modus** schaltet eine OpenFishing-Instanz **schreibgeschützt**. Setze die Umgebungsvariable
**`DEMO_MODE`** auf einen beliebigen Wert, um ihn zu aktivieren (siehe
[Umgebungsvariablen](/de/docs/configuration/environment-variables)).

## Was er macht

- **Alle Schreibvorgänge sind blockiert** — Besucher können alles durchstöbern, aber nichts erstellen,
  bearbeiten oder löschen.
- Ein **Banner** zeigt an, dass die Instanz eine Demo ist, und der Versuch zu schreiben zeigt einen **Toast**,
  der erklärt, dass Schreibvorgänge deaktiviert sind.
- **Der Sprachwechsel funktioniert weiterhin**, sodass Besucher die Demo in jeder der
  [9 Sprachen](/de/docs/features/languages) ansehen können.

## Die öffentliche Demo

Die offizielle Demo unter **[demo.openfishing.org](https://demo.openfishing.org)** läuft in diesem Modus. Es
ist eine vollständig befüllte Instanz, die du frei erkunden kannst, ohne Daten zu beeinflussen.

```yaml
environment:
  - DEMO_MODE=1
```

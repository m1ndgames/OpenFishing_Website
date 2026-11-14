---
title: "Demo-Modus"
description: "Was DEMO_MODE macht (eine schreibgeschützte Instanz ohne Speichern) und wie die öffentliche Demo ihn nutzt."
---

Der **Demo-Modus** macht eine OpenFishing-Instanz **schreibgeschützt**: Man kann sich umsehen,
aber nichts ändern. Die öffentliche Demo läuft so.

## Einschalten

```yaml title="docker-compose.yml"
    environment:
      - DEMO_MODE=1
```

**Jeder Wert schaltet ihn ein, auch `false` oder `0`.** Zum Ausschalten löschst du die Zeile und
führst `docker compose up -d` aus. Siehe [Umgebungsvariablen](/de/docs/configuration/environment-variables).

## Was er macht

- **Nichts lässt sich speichern**: Besucher sehen alles, können aber nichts anlegen, bearbeiten oder löschen.
- Ein **Banner** („Demo-Modus“) zeigt, dass es eine Demo ist, und ein Speicherversuch zeigt eine kurze Meldung, warum es nicht geklappt hat.
- **Die Sprache lässt sich weiter wechseln**, Besucher sehen die Demo also in allen [9 Sprachen](/de/docs/features/languages).
- Der **KI-Chatbot** antwortet nicht, sondern meldet „Der KI-Chatbot ist in dieser Demo deaktiviert.“

## Die öffentliche Demo

Die offizielle Demo unter **[demo.openfishing.org](https://demo.openfishing.org)** läuft in diesem
Modus. Sie ist mit Beispieldaten gefüllt, und du kannst sie frei erkunden, ohne etwas zu ändern.

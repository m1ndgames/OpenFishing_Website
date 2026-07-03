---
title: Tryb demonstracyjny
description: Co robi DEMO_MODE — instancja tylko do odczytu z zablokowanymi zapisami — i jak wykorzystuje go publiczne demo.
---

**Tryb demonstracyjny** przełącza instancję OpenFishing w tryb **tylko do odczytu**. Ustaw zmienną środowiskową
**`DEMO_MODE`** na dowolną wartość, aby go włączyć (zobacz
[Zmienne środowiskowe](/pl/docs/configuration/environment-variables)).

## Co robi

- **Wszystkie zapisy są zablokowane** — odwiedzający mogą przeglądać wszystko, ale nie mogą tworzyć, edytować
  ani usuwać.
- **Baner** informuje, że instancja jest demem, a próba zapisu wyświetla **powiadomienie toast** wyjaśniające,
  że zapisy są wyłączone.
- **Zmiana języka nadal działa**, więc odwiedzający mogą oglądać demo w dowolnym z
  [9 języków](/pl/docs/features/languages).

## Publiczne demo

Oficjalne demo pod adresem **[demo.openfishing.org](https://demo.openfishing.org)** działa w tym trybie. To w
pełni wypełniona instancja, którą możesz swobodnie eksplorować bez wpływu na jakiekolwiek dane.

```yaml
environment:
  - DEMO_MODE=1
```

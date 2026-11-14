---
title: "Tryb demonstracyjny"
description: "Co robi DEMO_MODE (instancja tylko do odczytu, bez zapisywania) i jak korzysta z niego publiczne demo."
---

**Tryb demonstracyjny** ustawia instancję OpenFishing **tylko do odczytu**: można wszystko
obejrzeć, ale niczego nie zmienić. Tak działa publiczne demo.

## Włączanie

```yaml title="docker-compose.yml"
    environment:
      - DEMO_MODE=1
```

**Każda wartość go włącza, nawet `false` czy `0`.** Aby go wyłączyć, usuń linię i uruchom
`docker compose up -d`. Zobacz [Zmienne środowiskowe](/pl/docs/configuration/environment-variables).

## Co robi

- **Nic nie da się zapisać**: odwiedzający widzą wszystko, ale nie mogą niczego tworzyć, edytować ani usuwać.
- **Baner** („Tryb demo”) informuje, że to demo, a próba zapisu pokazuje krótki komunikat, dlaczego się nie udała.
- **Zmiana języka nadal działa**, więc demo można oglądać we wszystkich [9 językach](/pl/docs/features/languages).
- **Chatbot AI** nie odpowiada, tylko pokazuje „Chatbot AI jest wyłączony w tej wersji demonstracyjnej.”

## Publiczne demo

Oficjalne demo pod adresem **[demo.openfishing.org](https://demo.openfishing.org)** działa w tym
trybie. Jest wypełnione przykładowymi danymi i możesz je swobodnie przeglądać, niczego nie zmieniając.

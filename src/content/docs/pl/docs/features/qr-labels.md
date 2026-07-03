---
title: Etykiety QR
description: Drukuj małe etykiety z kodem QR dla przynęt, aby powiązać fizyczną przynętę z jej wpisem.
---

OpenFishing może generować **etykiety z kodem QR**, dzięki czemu fizyczna przynęta prowadzi bezpośrednio do jej
wpisu w Twojej bibliotece.

## Drukowanie etykiet

- Etykiety mają rozmiar dopasowany do materiału **12,5 mm** — wystarczająco małe, aby zmieścić się na przynęcie
  lub jej pudełku.
- Możesz drukować etykiety dla **nieoznaczonych przynęt** w partii.
- Każda etykieta koduje link zbudowany z Twojego **`BASE_URL`**, więc zeskanowanie otwiera właściwą przynętę.
  Upewnij się, że `BASE_URL` jest ustawiony na Twój prawdziwy publiczny adres URL — zobacz
  [Zmienne środowiskowe](/pl/docs/configuration/environment-variables).

## Powiązane

- Etykiety odwołują się do numerów sekwencyjnych `#0001` opisanych w [Przynętach](/pl/docs/features/lures).

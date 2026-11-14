---
title: Etykiety QR
description: Drukuj małe etykiety z kodem QR dla przynęt, aby powiązać fizyczną przynętę z jej wpisem.
---

OpenFishing może generować **etykiety z kodem QR**, dzięki czemu fizyczna przynęta prowadzi bezpośrednio do jej
wpisu w Twojej bibliotece.

## Drukowanie etykiet

1. Otwórz **Ustawienia → Kody QR**. Strona **Brakujące etykiety QR** pokazuje przynęty, które nie mają jeszcze etykiety.
2. Wybierz **Drukuj kody QR** i drukuj na etykietach **12,5 mm**, dość małych na przynętę lub jej pudełko. Każda etykieta ma około 41 mm długości.
3. Naklej każdą etykietę, a potem wybierz **Umieść etykietę** przy tej przynęcie, aby zniknęła z listy.

Każda etykieta zawiera link zbudowany z Twojego **`BASE_URL`**, więc zeskanowanie otwiera tę przynętę.
Ustaw `BASE_URL` na adres, pod którym otwierasz OpenFishing; zobacz [Zmienne środowiskowe](/pl/docs/configuration/environment-variables). Przy włączonym logowaniu przynęta otwiera się tylko na zalogowanym telefonie.

## Powiązane

- Etykiety odwołują się do numerów sekwencyjnych `#0001` opisanych w [Przynętach](/pl/docs/features/lures).

---
title: Etichette QR
description: Stampa piccole etichette QR-code per le tue esche per collegare un'esca fisica alla sua voce.
---

OpenFishing può generare **etichette QR-code** così un'esca fisica rimanda direttamente alla sua voce nella tua
libreria.

## Stampare le etichette

1. Apri **Impostazioni → Codici QR**. La pagina **Etichette QR mancanti** elenca le esche che non hanno ancora un'etichetta.
2. Seleziona **Stampa codici QR** e stampa su etichette da **12,5 mm**, abbastanza piccole per un'esca o la sua scatola. Ogni etichetta è lunga circa 41 mm.
3. Attacca ogni etichetta, poi seleziona **Applica etichetta** su quell'esca così esce dalla lista.

Ogni etichetta contiene un link costruito dal tuo **`BASE_URL`**, quindi scansionandola si apre
quell'esca. Imposta `BASE_URL` sull'indirizzo con cui apri OpenFishing; vedi
[Variabili d'ambiente](/it/docs/configuration/environment-variables). Con il login attivo, l'esca si apre solo su un telefono con accesso effettuato.

## Correlati

- Le etichette fanno riferimento ai numeri sequenziali `#0001` descritti in [Esche](/it/docs/features/lures).

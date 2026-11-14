---
title: "Back-up & herstel"
description: "Maak een back-up van je verzameling als één ZIP en zet die terug, op dezelfde machine of een nieuwe."
---

OpenFishing zet alles wat je hebt vastgelegd, foto's inbegrepen, in **één ZIP-bestand** dat je
downloadt. Bewaar een kopie op een andere plek dan de machine waarop OpenFishing draait.

## Een back-up maken

1. Open **Instellingen → Back-up & Herstellen**.
2. Kies onder **Back-up exporteren** de knop **Exporteren**.

De ZIP bevat je aas, spots, vangsten en uitrusting met hun foto's. Met inloggen aan maakt
iedereen zo alleen een back-up van het eigen account.

:::caution
Terugzetten kan niet ongedaan worden gemaakt. Exporteer eerst een verse back-up.
:::

## Een back-up terugzetten

1. Open **Instellingen → Back-up & Herstellen**.
2. Kies onder **Back-up importeren** **Bestand kiezen** en selecteer de ZIP.
3. Vink het vakje aan dat bevestigt dat je huidige gegevens worden vervangen.
4. Kies **Importeren & vervangen**.

Alles in je account wordt vervangen door de inhoud van de back-up. OpenFishing controleert eerst
het formaat van de back-up en verandert niets als het niet past.

Als het lukt, zie je **Import geslaagd** met het aantal teruggezette aas, spots en vangsten.

## Back-up van de hele installatie (beheerder)

Met inloggen aan maakt en herstelt de beheerder alle accounts tegelijk onder **Instellingen → Beheer**:

- **Alles exporteren** downloadt alle accounts en hun gegevens als één ZIP.
- **Volledige back-up herstellen** vervangt alle gegevens en accounts door een volledige back-up.
  Iedereen wordt uitgelogd en het beheerderswachtwoord komt weer uit `ADMIN_PASSWORD`.

Om terug te zetten vink je de bevestiging aan en kies je **Alles herstellen & vervangen**.

## Naar een nieuwe machine

1. [Werk OpenFishing](/nl/docs/getting-started/installation#bijwerken) op de oude machine bij naar de nieuwste versie en exporteer daarna een verse
   back-up. Noteer het **Back-upformaat** onder **Instellingen**.
2. [Installeer OpenFishing](/nl/docs/getting-started/installation) op de nieuwe machine. Het **Back-upformaat** onder **Instellingen** moet overeenkomen met de oude machine.
3. Open het en zet terug: onder **Instellingen → Back-up & Herstellen** als je geen inlogscherm
   hebt, of met een volledige back-up onder **Instellingen → Beheer → Volledige back-up herstellen**
   als meerdere mensen het gebruiken.
4. Controleer je aas en foto's voordat je de oude machine uitzet.

## Wat er in de ZIP zit

- `backup.json`: je gegevens.
- `uploads/`: de foto's.

Het is een gewone ZIP, dus je kunt hem openen om te controleren.

## Back-ups en volumes

Back-ups vervangen de [volumes](/nl/docs/getting-started/installation) met de actieve database en foto's niet. Houd allebei, en
exporteer een back-up voor grote veranderingen zoals een update.

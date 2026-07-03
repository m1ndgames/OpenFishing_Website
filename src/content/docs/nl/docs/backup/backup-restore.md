---
title: Back-up & herstel
description: Back-up en herstel via ZIP met één klik, per gebruiker of voor de hele instantie, en wat het archief bevat.
---

OpenFishing heeft ingebouwde **back-up en herstel** als downloadbare/uploadbare ZIP-archieven.

## Back-up & herstel per gebruiker

Vanuit **`/settings`** kan elke gebruiker **zijn eigen gegevens** back-uppen en herstellen — zijn kunstaas,
stekken, vangsten en uitrusting, plus de bijbehorende uploads.

## Back-up & herstel van de hele instantie (admin)

Vanuit het beheerpaneel op **`/settings/admin`** kan een beheerder de **hele instantie** back-uppen en
herstellen — inclusief alle gebruikers en accounts.

:::caution
Een **volledig herstel** voert een volledige **wis-en-herbouw** van de instantie uit: bestaande gegevens worden
vervangen door de inhoud van het archief. Maak eerst een nieuwe back-up.
:::

## Archiefformaat

Een back-up is een ZIP met:

- **`backup.json`** — de gestructureerde gegevens (records).
- **`uploads/`** — de bijbehorende fotobestanden.

Omdat het een gewone ZIP is, kun je hem overal opslaan en zo nodig inspecteren.

## Gerelateerd

- Onthoud dat de live database en de uploads op
  [persistente volumes](/nl/docs/getting-started/installation) moeten staan — back-ups vullen goede volumes
  aan, maar vervangen ze niet.

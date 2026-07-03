---
title: Introductie
description: Wat OpenFishing is, de zelf-gehoste, privacyvriendelijke filosofie en een overzicht van de functies.
---

**OpenFishing** is een zelf-gehoste webapp waarmee vissers hun **kunstaascollectie** kunnen organiseren,
**visstekken** op een kaart kunnen markeren, hun **vangsten** kunnen vastleggen en hun **uitrusting** kunnen bijhouden — allemaal vanuit
één privacyvriendelijke applicatie die op je eigen server draait.

Het is een [SvelteKit](https://kit.svelte.dev/)-app met één enkele **SQLite**-database,
geleverd als één **Docker**-image. Er is geen clouddienst, geen account bij een derde partij en
geen telemetrie: je foto's en gegevens staan op jouw infrastructuur en nergens anders.

## Filosofie

- **Zelf-gehost & privacyvriendelijk** — jij draait het, jij bezit de gegevens. Niets verlaat je server.
- **Cloudvrij** — geen externe afhankelijkheden nodig om de kern van de app te laten werken.
- **Open source** — uitgebracht onder de AGPL-3.0-licentie op
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Eenvoudig te draaien** — één container, één SQLite-bestand, twee volumes voor de database en uploads.

## Functieoverzicht

| Gebied | Wat het doet |
|---|---|
| [Kunstaas](/nl/docs/features/lures) | Fotobibliotheek met tags, soorten, favorieten, tracking van verloren aas, QR-labels en snel zoeken. |
| [Stekken](/nl/docs/features/spots) | Interactieve Leaflet-kaart van je visstekken met GPS en foto's. |
| [Vangsten](/nl/docs/features/catches) | Leg soort, gewicht, lengte, GPS, catch-and-release en presentatie vast, met een weergebaseerde Beetindex. |
| [Beetindex](/nl/docs/features/bite-index) | Een automatische score van 0–10 die de visomstandigheden beoordeelt op basis van weergegevens. |
| [Uitrusting](/nl/docs/features/tackle) | Hengels, molens, lijnen en combo's, met spoelgeschiedenis. |
| [Statistieken](/nl/docs/features/stats) | Trends in je vangsten en uitrusting. |
| [AI-functies](/nl/docs/ai/ai-features) | Optionele chatbot plus vis- en aasherkenning uit foto's. |
| [Multi-user](/nl/docs/multi-user/authentication) | Optionele login om vrienden en familie te hosten, met quota en een beheerpaneel. |
| [Deellinks](/nl/docs/features/share-links) | Openbare alleen-lezen pagina's voor een kunstaas, stek of vangst. |
| [REST-API](/nl/docs/api/rest-api) | Alleen-lezen JSON-API met Bearer-tokens en een Swagger-UI. |
| [Back-up & herstel](/nl/docs/backup/backup-restore) | ZIP-export/-import met één klik. |
| [Talen](/nl/docs/features/languages) | 9 talen met een vlaggenwisselaar. |

## Volgende stappen

- Volg de [Snelstart](/nl/docs/getting-started/quick-start) om met één commando aan de slag te gaan.
- Zet het goed op met [Installatie (docker-compose)](/nl/docs/getting-started/installation).
- Stem het gedrag af met [Omgevingsvariabelen](/nl/docs/configuration/environment-variables).

:::note
Deze documentatie is een beknopte referentie. Voor details op broncodeniveau, zie de
[OpenFishing-repository](https://github.com/m1ndgames/OpenFishing) op GitHub.
:::

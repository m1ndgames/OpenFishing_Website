---
title: Introductie
description: Wat OpenFishing is, hoe het je gegevens op je eigen server houdt, wat met het internet praat, en een overzicht van de functies.
---

**OpenFishing** is een zelf-gehoste webapp waarmee vissers hun **aasverzameling**
organiseren, **spots** op een kaart markeren, hun **vangsten** vastleggen en hun
**uitrusting** bijhouden, allemaal vanuit één privacyvriendelijke applicatie die op je eigen
server draait.

Ze wordt geleverd als één **Docker**-image met één **SQLite**-database. Geen clouddienst, geen
account bij een derde partij en geen telemetrie: je foto's en gegevens staan op je server en
nergens anders. Eerst zien, dan installeren? Open de [live demo](https://demo.openfishing.org):
zonder aanmelding, alleen lezen.

<figure class="doc-shot">
<div class="doc-shot-frame"><img class="shot-dark" src="/screenshots/hero.jpg" alt="Een vangst in OpenFishing: een baars op de meetmat met de lengte, het aas waarmee hij gevangen is, de Bijt-index en de plek op de kaart" width="1400" height="847" loading="lazy" decoding="async"><img class="shot-light" src="/screenshots/hero-light.jpg" alt="Een vangst in OpenFishing: een baars op de meetmat met de lengte, het aas waarmee hij gevangen is, de Bijt-index en de plek op de kaart" width="1400" height="847" loading="lazy" decoding="async"></div>
<figcaption><a href="https://demo.openfishing.org/" target="_blank" rel="noopener">Bekijk het in de demo <svg class="doc-shot-cue" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="sr-only"> (opent in een nieuw tabblad)</span></a></figcaption>
</figure>

## Overzicht van functies

| Onderdeel | Wat het doet |
|---|---|
| [Aasbox](/nl/docs/features/lures) | Fotobibliotheek met tags, soorten, favorieten, bijhouden van verloren aas, QR-labels en snel zoeken. |
| [Spots](/nl/docs/features/spots) | Interactieve kaart van je spots met GPS en foto's. |
| [Vangsten](/nl/docs/features/catches) | Leg soort, gewicht, lengte, GPS, Catch & Release en techniek vast, met een bijt-index op basis van het weer. |
| [Uitrusting](/nl/docs/features/tackle) | Hengels, molens, lijnen en combo's, met spoelgeschiedenis. |

Verder:

- **Inzichten**: [Bijt-index](/nl/docs/features/bite-index), [Statistieken](/nl/docs/features/stats)
- **Delen**: [Deellinks](/nl/docs/features/share-links)
- **Opties**: [Thema's & uiterlijk](/nl/docs/features/themes), [Talen](/nl/docs/features/languages)
- **Je server beheren**: [Multi-user](/nl/docs/multi-user/authentication), [AI-functies](/nl/docs/ai/ai-features), [Back-up & herstel](/nl/docs/backup/backup-restore), [REST-API](/nl/docs/api/rest-api)

## Filosofie

- **Zelf-gehost & privacyvriendelijk**: jij draait het, de gegevens zijn van jou. Je gegevens en
  foto's blijven op je server.
- **Zonder cloud**: geen account en geen clouddienst nodig om de app te laten werken.
- **Open source**: uitgebracht onder de AGPL-3.0-licentie op
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Eenvoudig te draaien**: één container, één SQLite-bestand, twee volumes voor database en uploads.

## Wat met het internet praat

Je gegevens en foto's verlaten nooit je server. Deze functies halen gegevens van buiten op, en
geen andere:

- **[Weer](/nl/docs/features/bite-index)**: als je een vangst vastlegt, een spot opent of de chatbot naar een plek vraagt, vraagt de server bij
  [Open-Meteo](https://open-meteo.com/) het huidige weer daar op. Alleen de coördinaten worden verstuurd.
- **Kaart van [spots](/nl/docs/features/spots)**: zodra er een kaart wordt getoond, laadt je browser kaarttegels van OpenStreetMap, dat het gebied
  ziet dat je bekijkt. Met `MAP_TILE_URL` gebruik je je eigen tegelserver.
- **[AI-functies](/nl/docs/ai/ai-features)**: alleen als je ze instelt; de AI-aanbieder die je kiest krijgt je vraag of foto.
- **[Wachtwoord herstellen](/nl/docs/multi-user/authentication)**: alleen als SMTP is ingesteld; je eigen mailserver verstuurt de e-mail.

## Volgende stappen

- [Installeer OpenFishing](/nl/docs/getting-started/installation) op je NAS of thuisserver.
- Kijk eerst rond in de [live demo](https://demo.openfishing.org).
- Stem het gedrag af met [omgevingsvariabelen](/nl/docs/configuration/environment-variables).

:::note
Mist er iets of is iets onduidelijk? [Open een issue op GitHub](https://github.com/m1ndgames/OpenFishing/issues)
en we vullen het aan.
:::

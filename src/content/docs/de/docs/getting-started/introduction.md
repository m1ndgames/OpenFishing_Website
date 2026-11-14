---
title: Einführung
description: Was OpenFishing ist, wie es deine Daten auf deinem eigenen Server hält, was mit dem Internet spricht, und ein Überblick über die Funktionen.
---

**OpenFishing** ist eine selbst gehostete Web-App für Angler, um ihre **Ködersammlung** zu
organisieren, **Angelstellen** auf einer Karte zu markieren, ihre **Fänge** zu erfassen und ihre
**Ausrüstung** zu verwalten, alles in einer einzigen, datenschutzfreundlichen Anwendung, die auf
deinem eigenen Server läuft.

Sie kommt als ein **Docker**-Image mit einer einzigen **SQLite**-Datenbank. Es gibt keinen
Cloud-Dienst, kein Konto bei einem Dritten und keine Telemetrie: Deine Fotos und Einträge liegen
auf deinem Server und nirgendwo sonst. Erst anschauen, dann installieren? Öffne die
[Live-Demo](https://demo.openfishing.org): ohne Anmeldung, nur lesend.

<figure class="doc-shot">
<div class="doc-shot-frame"><img class="shot-dark" src="/screenshots/hero.jpg" alt="Ein Fang in OpenFishing: ein Barsch auf der Messmatte mit Länge, dem fängigen Köder, dem Beissindex und der Stelle auf der Karte" width="1400" height="847" loading="lazy" decoding="async"><img class="shot-light" src="/screenshots/hero-light.jpg" alt="Ein Fang in OpenFishing: ein Barsch auf der Messmatte mit Länge, dem fängigen Köder, dem Beissindex und der Stelle auf der Karte" width="1400" height="847" loading="lazy" decoding="async"></div>
<figcaption><a href="https://demo.openfishing.org/" target="_blank" rel="noopener">In der Demo ansehen <svg class="doc-shot-cue" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="sr-only"> (öffnet in neuem Tab)</span></a></figcaption>
</figure>

## Funktionsüberblick

| Bereich | Was er tut |
|---|---|
| [Köderbox](/de/docs/features/lures) | Fotobibliothek mit Tags, Arten, Favoriten, Verlust-Tracking, QR-Etiketten und schneller Suche. |
| [Angelkarte](/de/docs/features/spots) | Interaktive Karte deiner Angelstellen mit GPS und Fotos. |
| [Fangbuch](/de/docs/features/catches) | Erfasse Fischart, Gewicht, Länge, GPS, Catch & Release und Köderführung, mit wetterbasiertem Beissindex. |
| [Ausrüstung](/de/docs/features/tackle) | Ruten, Rollen, Schnüre und Kombos, mit Schnurspulen-Historie. |

Außerdem dabei:

- **Auswertung**: [Beissindex](/de/docs/features/bite-index), [Statistik](/de/docs/features/stats)
- **Teilen**: [Freigabelinks](/de/docs/features/share-links)
- **Optionen**: [Themes & Darstellung](/de/docs/features/themes), [Sprachen](/de/docs/features/languages)
- **Deinen Server betreiben**: [Mehrbenutzer](/de/docs/multi-user/authentication), [KI-Funktionen](/de/docs/ai/ai-features), [Sicherung & Wiederherstellung](/de/docs/backup/backup-restore), [REST-API](/de/docs/api/rest-api)

## Philosophie

- **Selbst gehostet & datenschutzfreundlich**: Du betreibst es, dir gehören die Daten. Deine
  Einträge und Fotos bleiben auf deinem Server.
- **Ohne Cloud**: Kein Konto und kein Cloud-Dienst nötig, damit die App funktioniert.
- **Open Source**: veröffentlicht unter der AGPL-3.0-Lizenz auf
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Einfach zu betreiben**: ein Container, eine SQLite-Datei, zwei Volumes für Datenbank und Uploads.

## Was mit dem Internet spricht

Deine Einträge und Fotos verlassen nie deinen Server. Diese Funktionen holen Daten von außen,
und sonst keine:

- **[Wetter](/de/docs/features/bite-index)**: Wenn du einen Fang einträgst, eine Angelstelle öffnest oder den Chatbot nach einem Ort fragst,
  fragt der Server bei [Open-Meteo](https://open-meteo.com/) das aktuelle Wetter dort ab. Gesendet werden nur die Koordinaten.
- **Karte der [Angelstellen](/de/docs/features/spots)**: Sobald eine Karte angezeigt wird, lädt dein Browser Kartenkacheln von OpenStreetMap, das den
  angezeigten Ausschnitt sieht. Mit `MAP_TILE_URL` nutzt du einen eigenen Kachelserver.
- **[KI-Funktionen](/de/docs/ai/ai-features)**: Nur wenn du sie einrichtest; der KI-Anbieter deiner Wahl erhält deine Frage oder dein Foto.
- **[Passwort-Reset](/de/docs/multi-user/authentication)**: Nur mit eingerichtetem SMTP; dein eigener Mailserver verschickt die E-Mail.

## Nächste Schritte

- [OpenFishing installieren](/de/docs/getting-started/installation) auf deinem NAS oder Homeserver.
- Schau dich zuerst in der [Live-Demo](https://demo.openfishing.org) um.
- Passe das Verhalten mit [Umgebungsvariablen](/de/docs/configuration/environment-variables) an.

:::note
Fehlt etwas oder ist unklar? [Eröffne ein Issue auf GitHub](https://github.com/m1ndgames/OpenFishing/issues),
dann ergänzen wir es.
:::

---
title: Einführung
description: Was OpenFishing ist, seine selbst gehostete, datenschutzorientierte Philosophie und ein Überblick über die Funktionen.
---

**OpenFishing** ist eine selbst gehostete Web-App für Angler, um ihre **Ködersammlung** zu organisieren,
**Angelstellen** auf einer Karte zu markieren, ihre **Fänge** zu protokollieren und ihre **Ausrüstung** zu verwalten — alles aus
einer einzigen, datenschutzorientierten Anwendung, die auf deinem eigenen Server läuft.

Es ist eine [SvelteKit](https://kit.svelte.dev/)-App mit einer einzigen **SQLite**-Datenbank,
ausgeliefert als ein einziges **Docker**-Image. Es gibt keinen Cloud-Dienst, kein Konto bei Dritten und
keine Telemetrie: Deine Fotos und Daten liegen auf deiner Infrastruktur und nirgendwo sonst.

## Philosophie

- **Selbst gehostet & datenschutzorientiert** — du betreibst es, dir gehören die Daten. Nichts verlässt deinen Server.
- **Cloud-frei** — keine externen Abhängigkeiten für die Kernfunktionen der App erforderlich.
- **Open Source** — veröffentlicht unter der AGPL-3.0-Lizenz auf
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Einfach zu betreiben** — ein Container, eine SQLite-Datei, zwei Volumes für Datenbank und Uploads.

## Funktionsübersicht

| Bereich | Was es macht |
|---|---|
| [Köder](/de/docs/features/lures) | Fotobibliothek mit Tags, Arten, Favoriten, Verlust-Tracking, QR-Etiketten und schneller Suche. |
| [Angelstellen](/de/docs/features/spots) | Interaktive Leaflet-Karte deiner Angelstellen mit GPS und Fotos. |
| [Fänge](/de/docs/features/catches) | Protokolliere Art, Gewicht, Länge, GPS, Catch & Release und Präsentation, mit einem wetterbasierten Bissindex. |
| [Bissindex](/de/docs/features/bite-index) | Eine automatische Bewertung von 0–10, die die Angelbedingungen anhand von Wetterdaten einstuft. |
| [Ausrüstung](/de/docs/features/tackle) | Ruten, Rollen, Schnüre und Combos, mit Spulen-Historie. |
| [Statistiken](/de/docs/features/stats) | Trends bei deinen Fängen und deiner Ausrüstung. |
| [KI-Funktionen](/de/docs/ai/ai-features) | Optionaler Chatbot sowie Fisch- & Ködererkennung aus Fotos. |
| [Mehrbenutzer](/de/docs/multi-user/authentication) | Optionaler Login zum Hosten von Freunden & Familie, mit Kontingenten und einem Admin-Panel. |
| [Freigabelinks](/de/docs/features/share-links) | Öffentliche, schreibgeschützte Seiten für einen Köder, eine Stelle oder einen Fang. |
| [REST-API](/de/docs/api/rest-api) | Schreibgeschützte JSON-API mit Bearer-Tokens und einer Swagger-UI. |
| [Sicherung & Wiederherstellung](/de/docs/backup/backup-restore) | ZIP-Export/-Import mit einem Klick. |
| [Sprachen](/de/docs/features/languages) | 9 Sprachen mit einem Flaggen-Umschalter. |

## Nächste Schritte

- Folge dem [Schnellstart](/de/docs/getting-started/quick-start), um mit einem Befehl loszulegen.
- Richte es sauber ein mit [Installation (docker-compose)](/de/docs/getting-started/installation).
- Passe das Verhalten mit [Umgebungsvariablen](/de/docs/configuration/environment-variables) an.

:::note
Diese Dokumentation ist eine knappe Referenz. Für Details auf Quellcode-Ebene siehe das
[OpenFishing-Repository](https://github.com/m1ndgames/OpenFishing) auf GitHub.
:::

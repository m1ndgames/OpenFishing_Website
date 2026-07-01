---
title: Introduction
description: What OpenFishing is, its self-hosted, privacy-first philosophy, and an overview of its features.
---

**OpenFishing** is a self-hosted web app for anglers to organize their **lure collection**,
mark **fishing spots** on a map, log their **catches**, and track their **tackle** — all from
a single, privacy-first application that runs on your own server.

It's a [SvelteKit](https://kit.svelte.dev/) app backed by a single **SQLite** database,
shipped as one **Docker** image. There's no cloud service, no account with a third party, and
no telemetry: your photos and data live on your infrastructure and nowhere else.

## Philosophy

- **Self-hosted & privacy-first** — you run it, you own the data. Nothing leaves your server.
- **Cloud-free** — no external dependencies required for the core app to work.
- **Open source** — released under the AGPL-3.0 license on
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Simple to run** — one container, one SQLite file, two volumes for the database and uploads.

## Feature overview

| Area | What it does |
|---|---|
| [Lures](/docs/features/lures) | Photo library with tags, species, favourites, lost-lure tracking, QR labels and fast search. |
| [Spots](/docs/features/spots) | Interactive Leaflet map of your fishing spots with GPS and photos. |
| [Catches](/docs/features/catches) | Log species, weight, length, GPS, catch-&-release and presentation, with a weather-based Bite Index. |
| [Bite Index](/docs/features/bite-index) | An automatic 0–10 score rating fishing conditions from weather data. |
| [Tackle](/docs/features/tackle) | Rods, reels, lines and combos, with line-spool history. |
| [Stats](/docs/features/stats) | Trends across your catches and gear. |
| [AI features](/docs/ai/ai-features) | Optional chatbot plus fish & lure identification from photos. |
| [Multi-user](/docs/multi-user/authentication) | Optional login for hosting friends & family, with quotas and an admin panel. |
| [Share links](/docs/features/share-links) | Public read-only pages for a lure, spot or catch. |
| [REST API](/docs/api/rest-api) | Read-only JSON API with Bearer tokens and a Swagger UI. |
| [Backup & restore](/docs/backup/backup-restore) | One-click ZIP export/import. |
| [Languages](/docs/features/languages) | 9 languages with a flag switcher. |

## Next steps

- Follow the [Quick Start](/docs/getting-started/quick-start) to get running in one command.
- Deploy properly with [Installation (docker-compose)](/docs/getting-started/installation).
- Tune behaviour with [Environment variables](/docs/configuration/environment-variables).

:::note
This documentation is a concise reference. For source-level detail, see the
[OpenFishing repository](https://github.com/m1ndgames/OpenFishing) on GitHub.
:::

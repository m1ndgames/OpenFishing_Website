---
title: Introduction
description: What OpenFishing is, how it keeps your data on your own server, what talks to the internet, and an overview of its features.
---

**OpenFishing** is a self-hosted web app for anglers to organize their **lure collection**,
mark **fishing spots** on a map, log their **catches**, and track their **tackle**, all from
a single, privacy-first application that runs on your own server.

It ships as one **Docker** image backed by a single **SQLite** database. There's no cloud
service, no account with a third party, and no telemetry: your photos and records live on your
server and nowhere else. Want to see it before you install? Open the
[live demo](https://demo.openfishing.org): no signup, read-only.

<figure class="doc-shot">
<div class="doc-shot-frame"><img class="shot-dark" src="/screenshots/hero.jpg" alt="A catch in OpenFishing: a perch on the measuring mat with its length, the lure that caught it, the Bite Index and the spot on the map" width="1400" height="847" loading="lazy" decoding="async"><img class="shot-light" src="/screenshots/hero-light.jpg" alt="A catch in OpenFishing: a perch on the measuring mat with its length, the lure that caught it, the Bite Index and the spot on the map" width="1400" height="847" loading="lazy" decoding="async"></div>
<figcaption><a href="https://demo.openfishing.org/" target="_blank" rel="noopener">See it in the demo <svg class="doc-shot-cue" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="sr-only"> (opens in a new tab)</span></a></figcaption>
</figure>

## Feature overview

| Area | What it does |
|---|---|
| [Lures](/docs/features/lures) | Photo library with tags, species, favourites, lost-lure tracking, QR labels and fast search. |
| [Spots](/docs/features/spots) | Interactive map of your fishing spots with GPS and photos. |
| [Catches](/docs/features/catches) | Log species, weight, length, GPS, Catch & Release and retrieve style, with a weather-based Bite Index. |
| [Tackle](/docs/features/tackle) | Rods, reels, lines and combos, with line-spool history. |

Also included:

- **Insights**: [Bite Index](/docs/features/bite-index), [Stats](/docs/features/stats)
- **Sharing**: [Share links](/docs/features/share-links)
- **Options**: [Themes & appearance](/docs/features/themes), [Languages](/docs/features/languages)
- **Running your server**: [Multi-user](/docs/multi-user/authentication), [AI features](/docs/ai/ai-features), [Backup & restore](/docs/backup/backup-restore), [REST API](/docs/api/rest-api)

## Philosophy

- **Self-hosted & privacy-first**: you run it, you own the data. Your records and photos stay
  on your server.
- **Cloud-free**: no account and no cloud service needed for the app to work.
- **Open source**: released under the AGPL-3.0 license on
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Simple to run**: one container, one SQLite file, two volumes for the database and uploads.

## What talks to the internet

Your records and photos never leave your server. These features fetch data from outside, and
nothing else does:

- **[Weather](/docs/features/bite-index)**: when you log a catch, open a spot or ask the chatbot about a place, the server asks
  [Open-Meteo](https://open-meteo.com/) for the current weather there. Only the coordinates are sent.
- **[Spots](/docs/features/spots) map**: whenever a map is shown, your browser loads map tiles from OpenStreetMap, which sees the area you
  look at. `MAP_TILE_URL` switches to your own tile server.
- **[AI features](/docs/ai/ai-features)**: only if you set them up; the AI provider you choose gets your question or photo.
- **[Password reset](/docs/multi-user/authentication)**: only if SMTP is configured; your own mail server sends the email.

## Next steps

- [Install OpenFishing](/docs/getting-started/installation) on your NAS or home server.
- Look around the [live demo](https://demo.openfishing.org) first.
- Tune behaviour with [Environment variables](/docs/configuration/environment-variables).

:::note
Something missing or unclear? [Open an issue on GitHub](https://github.com/m1ndgames/OpenFishing/issues)
and we'll add it.
:::

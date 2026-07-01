---
title: Spots
description: Mark fishing spots on an interactive map with GPS coordinates and photos, and see nearby catches automatically.
---

**Spots** let you remember exactly where you fish. Each spot lives on an interactive
[Leaflet](https://leafletjs.com/) map.

## What you can track

- **Map location** — place a marker on the map or enter GPS coordinates directly.
- **Photos** — attach images of the spot.
- **Notes** — describe access, structure, or conditions.

## Catch proximity

OpenFishing links spots and catches by distance. Using the **Haversine** great-circle formula,
any [catch](/docs/features/catches) recorded **within 100 m** of a spot automatically shows up
on that spot — so you build a picture of which locations actually produce fish, without
manually associating each catch.

## Related

- Log a [catch](/docs/features/catches) with its own GPS location.
- Share a spot publicly with a [share link](/docs/features/share-links).

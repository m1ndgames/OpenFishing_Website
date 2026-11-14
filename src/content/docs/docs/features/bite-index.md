---
title: "Bite Index"
description: "How OpenFishing's 0–10 Bite Index is worked out from the weather, and what its ratings mean."
---

The **Bite Index** is a score from **0 to 10** for how good the fishing weather is. OpenFishing
works it out from the weather at the catch's place **at the moment you log it**, and saves it with
the catch.

:::note
The score uses the weather when you save the catch, not the time you enter for it. Log a catch at
the water for an accurate score; one you add hours later gets the weather of that later moment.
:::

## How it is calculated

Three parts, each scored from 0 to 10, are weighted and added up:

- **Pressure Trend** (50 %): 10 if pressure fell more than 1.5 hPa in the last 3 hours, as before a front; 7 if steady; 2 if rising.
- **Light Conditions** (30 %): 10 at dawn (the hour before sunrise) and dusk (the hour after sunset); 8 in the hour before sunset; 6 at night and in the first two hours after sunrise; 2 during the day.
- **Temperature Stability** (20 %): 10 if the temperature changed less than 3 °C in the last 3 hours; 2 for a bigger swing.

Your server gets the weather from the free [Open-Meteo](https://open-meteo.com/) service.

## Ratings

| Score | Rating |
|---|---|
| 8.5 and above | **Excellent** |
| 6.5 to 8.4 | **Good** |
| 4 to 6.4 | **Fair** |
| Below 4 | **Poor** |

## Where you see it

- On every [catch](/docs/features/catches), saved when you log it.
- On every [spot](/docs/features/spots), as the current score for that place, fetched when you open it.

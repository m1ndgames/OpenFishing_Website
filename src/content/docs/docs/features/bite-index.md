---
title: Bite Index
description: How OpenFishing's automatic 0–10 Bite Index weather score is calculated and rated.
---

The **Bite Index** is an automatic score from **0 to 10** that rates how favourable fishing
conditions were for a given catch, based on weather data.

## How it's calculated

The index is a weighted blend of three weather-derived factors:

| Factor | Weight | Idea |
|---|---|---|
| **Pressure trend** | ×0.5 | Changing barometric pressure strongly influences feeding activity. |
| **Light** | ×0.3 | Light levels affect when fish are active. |
| **Temperature stability** | ×0.2 | Stable temperatures tend to mean more predictable behaviour. |

Weather data comes from the free [Open-Meteo API](https://open-meteo.com/). The resulting
score is stored as a **snapshot on each catch**, so it reflects the conditions at that moment
and never changes retroactively.

## Rating labels

The numeric score maps to a friendly label:

| Score | Rating |
|---|---|
| Low | **Poor** |
| … | **Fair** |
| … | **Good** |
| High | **Excellent** |

## Related

- The Bite Index is captured automatically on every [catch](/docs/features/catches).

---
title: "Demo mode"
description: "What DEMO_MODE does (a read-only instance with writes blocked) and how the public demo uses it."
---

**Demo mode** makes an OpenFishing instance **read-only**: people can look around but can't
change anything. The public demo runs this way.

## Turn it on

```yaml title="docker-compose.yml"
    environment:
      - DEMO_MODE=1
```

**Any value turns it on, even `false` or `0`.** To turn it off, delete the line and run
`docker compose up -d`. See [Environment variables](/docs/configuration/environment-variables).

## What it does

- **Nothing can be saved**: visitors can browse everything but can't create, edit or delete.
- A **banner** ("Demo Mode") says the instance is a demo, and trying to save shows a short message explaining why it didn't work.
- **Switching language still works**, so visitors can see the demo in any of the [9 languages](/docs/features/languages).
- The **AI chatbot** doesn't answer; it replies "The AI chatbot is disabled in this demo."

## The public demo

The official demo at **[demo.openfishing.org](https://demo.openfishing.org)** runs in this mode. It's
fully filled with example data and you can explore it freely without changing anything.

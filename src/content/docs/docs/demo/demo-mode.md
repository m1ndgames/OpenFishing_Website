---
title: Demo mode
description: What DEMO_MODE does — a read-only instance with writes blocked — and how the public demo uses it.
---

**Demo mode** turns an OpenFishing instance **read-only**. Set the **`DEMO_MODE`** environment
variable to any value to enable it (see
[Environment variables](/docs/configuration/environment-variables)).

## What it does

- **All writes are blocked** — visitors can browse everything but can't create, edit or delete.
- A **banner** indicates the instance is a demo, and attempting to write shows a **toast**
  explaining that writes are disabled.
- **Language switching still works**, so visitors can view the demo in any of the
  [9 languages](/docs/features/languages).

## The public demo

The official demo at **[demo.openfishing.org](https://demo.openfishing.org)** runs in this
mode. It's a fully populated instance you can explore freely without affecting any data.

```yaml
environment:
  - DEMO_MODE=1
```

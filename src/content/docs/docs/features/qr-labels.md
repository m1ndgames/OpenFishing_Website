---
title: QR labels
description: Print small QR-code labels for your lures to link a physical lure back to its entry.
---

OpenFishing can generate **QR-code labels** so a physical lure links straight back to its
entry in your library.

## Print labels

1. Open **Settings → QR Codes**. The **Missing QR Labels** page lists the lures that have no label yet.
2. Select **Print QR Codes** and print on **12.5 mm** label stock, small enough for a lure or its box. Each label is about 41 mm long.
3. Stick each label on, then select **Place Label** for that lure so it leaves the list.

Each label holds a link built from your **`BASE_URL`**, so scanning it opens that lure. Set `BASE_URL`
to the address you open OpenFishing at; see [Environment variables](/docs/configuration/environment-variables). With login on, the lure opens only on a phone that is signed in.

## Related

- Labels reference the sequential `#0001` numbers described in [Lures](/docs/features/lures).

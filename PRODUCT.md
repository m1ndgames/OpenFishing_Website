# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: anglers of any technical level.** People who fish and want one place for their
lure collection, spots, catches and tackle. Fishing comes first; self-hosting may be new or
intimidating to them. The site has to make "run it on your own server" feel approachable
rather than assume homelab fluency.

Secondary (inferred from the docs, not separately confirmed): self-hosters who already run
Docker and arrive judging setup effort, privacy and data ownership.

## Product Purpose

openfishing.org markets and documents **OpenFishing**, a self-hosted, privacy-first fishing
log. The landing page at `/` sells the app; Starlight docs at `/docs` are the full reference,
so the app's README can eventually just point here.

**Success = the visitor opens the live demo** (https://demo.openfishing.org, read-only).
GitHub (https://github.com/m1ndgames/OpenFishing) and deploying via Quick Start are secondary
outcomes.

## Positioning

Your fishing data lives on your own server, not someone else's cloud. OpenFishing is open
source (AGPL-3.0), cloud-free, has no telemetry and no third-party account, and ships as one
Docker image backed by one SQLite file. A cloud fishing app can't claim this.

## Operating Context

- The app is a SvelteKit + SQLite web app, deployed as `ghcr.io/m1ndgames/openfishing:latest`
  with two volumes (database, uploads).
- Visitors evaluate it through the read-only live demo, screenshots captured from that demo,
  and a one-command Quick Start.
- The app ships in 9 languages; the site and docs are localized into the same 9 (en root,
  de, fr, es, it, nl, pl, pt, uk).

## Capabilities and Constraints

App features the site may describe (source: `src/content/docs/docs/**`; do not invent beyond these):
lures (photo library, tags, species, favourites, lost-lure tracking, QR labels, search),
spots (Leaflet map, GPS, photos), catches (species, weight, length, GPS, catch-&-release,
presentation), Bite Index (automatic 0–10 score from weather data), tackle (rods, reels, lines,
combos, line-spool history), stats, optional AI (chatbot, fish & lure identification from
photos), optional multi-user login with quotas and admin panel, public read-only share links,
read-only REST API with Bearer tokens and Swagger UI, one-click ZIP backup/restore, themes,
9 languages.

Site constraints: fully static Astro build served by nginx in Docker; minimal client JS
(islands only for the theme toggle and screenshot lightbox); SEO-ready (meta, OG image,
sitemap); Lighthouse ≥ 90 on Performance, SEO and Accessibility.

## Brand Commitments

- Name: **OpenFishing**. Tagline: **"Your tackle box, organized."** (`src/consts.ts`).
- Logo wordmark and mark in `src/assets/` and `public/` are copied from the app.
- The site must look like it belongs to the app. The app's current `DESIGN.md`
  (https://github.com/m1ndgames/OpenFishing/blob/main/DESIGN.md) is the upstream design
  authority; the site uses its "Ocean" theme, defaults to dark mode, and has a working light
  toggle. SPEC.md's design tokens describe the *old* app design and are superseded.

## Evidence on Hand

- Real demo screenshots in `public/screenshots/` (hero, lure grid, spot map, catch detail,
  stats), refreshed with `npm run screenshots`.
- The live read-only demo itself.
- **No social proof exists yet.** No user counts, star counts, testimonials, press or
  case studies. Never fabricate any of these.

## Product Principles

1. **The demo is the pitch.** Every surface should get a curious angler into the live demo
   with as little friction as possible.
2. **Fishing first, infrastructure second.** Lead with what anglers get. Present self-hosting
   as a benefit (ownership, privacy) with a reassuringly short path, never as a prerequisite
   lecture.
3. **Honest by default.** Describe only features that exist and proof that's real. An early
   project earns trust through specifics, not inflated claims.
4. **Belongs to the app.** The site is a continuation of the product, not a separate brand.

## Accessibility & Inclusion

WCAG 2 AA in **both** dark and light themes, enforced in CI by `scripts/a11y.mjs` (axe-core,
landing page plus a docs page, both modes). Content must work in all 9 locales, including
longer German/Polish strings and Cyrillic (uk).

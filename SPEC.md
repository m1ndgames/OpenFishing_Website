# OpenFishing Website — Build Specification

> **You are a Claude Code instance building the OpenFishing marketing + documentation
> website** in the repo `OpenFishing_Website` (https://github.com/m1ndgames/OpenFishing_Website).
> This spec is self-contained: it carries every design token, feature description, and
> structural decision you need. Where it says "source of truth," the user will provide the
> OpenFishing app's `README.md` and `CLAUDE.md` alongside this file — verify feature/config
> prose against those, but do **not** invent features beyond what's listed here.

---

## 1. Project overview & goals

**OpenFishing** is a self-hosted SvelteKit + SQLite web app for anglers to organize their
lure collection, mark fishing spots on a map, log catches, and track their tackle. It is
privacy-first (your data lives on your own server), open source, cloud-free, and deployed
as a single Docker image.

**This website's job:**
1. **Market** the app with a polished, feature-rich **landing page** at `/` that drives
   visitors to the live demo and the GitHub repo.
2. **Document** the app fully under `/docs` (Starlight) so the project README can later be
   trimmed down to point here.

**Key links to use throughout the site:**
- Website domain: **https://openfishing.org**
- Live demo (read-only): **https://demo.openfishing.org**
- GitHub: **https://github.com/m1ndgames/OpenFishing**
- Container image: **`ghcr.io/m1ndgames/openfishing:latest`**

**Success criteria:** fast static site, mobile-first, visually consistent with the app's
"ocean / cyan" aesthetic, accessible (WCAG AA), SEO-ready (meta tags, OG image, sitemap),
Lighthouse ≥ 90 on Performance / SEO / Accessibility.

---

## 2. Tech stack & project setup

- **Astro** (latest) as the framework.
- **Tailwind CSS** via `@astrojs/tailwind`.
- **Starlight** (`@astrojs/starlight`) for the `/docs` section.
- **`@astrojs/sitemap`** for the sitemap.
- **Static output**: `output: 'static'`. No SSR — the site is fully prerendered and served
  by nginx in a container.
- Astro config: `site: 'https://openfishing.org'`.
- Starlight mounted at **`/docs`**; the marketing landing page is a **custom** page at `/`
  (do not let Starlight take over the root).
- Minimal client JS — use Astro islands only where interactivity is required (the
  dark/light theme toggle, optional screenshot lightbox).

### Suggested directory layout
```
OpenFishing_Website/
├─ astro.config.mjs          # integrations: tailwind, starlight, sitemap; site + static
├─ tailwind.config.mjs       # map --of-* tokens to Tailwind theme colors
├─ package.json
├─ Dockerfile                # multi-stage: node build → nginx serve
├─ docker-compose.yml
├─ nginx.conf
├─ public/
│  ├─ openfishing-logo.svg   # wordmark (copied from app)
│  ├─ openfishing-mark.svg   # square icon (copied from app)
│  ├─ favicon.svg            # copied from app
│  ├─ og-image.png           # 1200×630 social card (you create this)
│  └─ screenshots/           # captured from the demo (TODO placeholders)
├─ src/
│  ├─ pages/index.astro      # landing page
│  ├─ components/            # Nav, Hero, FeatureCard, DemoCallout, Footer, ThemeToggle, ...
│  ├─ layouts/Landing.astro  # <head> meta, fonts, base layout for the landing page
│  ├─ styles/theme.css       # all --of-* design tokens (dark + light)
│  └─ content/docs/          # Starlight markdown/MDX pages (see §6)
└─ ...
```

### Commands
`npm run dev` · `npm run build` · `npm run preview`

---

## 3. Design system

The site must look like it belongs to the app. All values below are taken **verbatim** from
the OpenFishing app (`src/routes/layout.css`, `src/lib/themes.ts`). The app ships multiple
themes; **use the default "Ocean" theme only** for the website. Default to **dark mode**
with a working light-mode toggle.

Define these as CSS custom properties in `src/styles/theme.css`, applied to `:root`
(dark) and to a `[data-theme="light"]` (or `.light`) selector for light mode, then map the
important ones into `tailwind.config.mjs` (e.g. `colors: { accent: 'var(--of-accent)', ... }`).

### 3.1 Ocean — DARK mode (default)
| Token | Value | Use |
|---|---|---|
| `--of-bg-base` | `#060d17` | page background (near-black navy) |
| `--of-bg-surface` | `#0b1a2c` | cards / panels |
| `--of-bg-elevated` | `#0f2238` | inputs / raised surfaces |
| `--of-bg-overlay` | `#0d1f35` | overlays |
| `--of-bg-hover` | `#132841` | hover background |
| `--of-border-subtle` | `#172f4a` | subtle borders |
| `--of-border` | `#243f5e` | default borders |
| `--of-border-strong` | `#2d5270` | strong borders |
| `--of-text-bright` | `#e0eaf8` | brightest text / headings |
| `--of-text` | `#c2dce8` | body text |
| `--of-text-2` | `#8ab8cc` | secondary text |
| `--of-text-3` | `#5d8fa8` | tertiary text |
| `--of-text-4` | `#3d6a84` | muted text |
| `--of-accent` | `#22d3ee` | cyan accent (primary highlight) |
| `--of-accent-solid` | `#06b6d4` | solid accent (button fills) |
| `--of-accent-hover` | `#67e8f9` | accent hover |
| `--of-accent-dark` | `#0891b2` | darker accent |
| `--of-accent-bg` | `rgba(6,182,212,0.08)` | faint accent background |
| `--of-accent-bg-hover` | `rgba(6,182,212,0.14)` | accent background hover / focus ring |
| `--of-accent-glow` | `rgba(6,182,212,0.10)` | glow shadow color |
| `--of-accent-border` | `rgba(6,182,212,0.25)` | accent border |
| `--of-ink` | `#030a12` | text drawn on top of accent fills |
| `--of-danger` | `#f87171` | error/red |
| `--of-success` | `#4ade80` | success/green |
| `--of-warning` | `#fbbf24` | warning/amber (solid `#f59e0b`) |

### 3.2 Ocean — LIGHT mode
| Token | Value |
|---|---|
| `--of-bg-base` | `#eaf3f8` |
| `--of-bg-surface` | `#ffffff` |
| `--of-bg-elevated` | `#f2f8fb` |
| `--of-bg-overlay` | `#e8f2f8` |
| `--of-bg-hover` | `#dceef7` |
| `--of-border-subtle` | `#cde0ec` |
| `--of-border` | `#aacad9` |
| `--of-border-strong` | `#7aaec4` |
| `--of-text-bright` | `#0a1e2e` |
| `--of-text` | `#1a3448` |
| `--of-text-2` | `#2d5268` |
| `--of-text-3` | `#4d7a94` |
| `--of-text-4` | `#6894a8` |
| `--of-accent` | `#0891b2` |
| `--of-accent-solid` | `#0891b2` |
| `--of-accent-hover` | `#06b6d4` |
| `--of-accent-dark` | `#0e7490` |
| `--of-ink` | `#ffffff` |
| `--of-danger` | `#dc2626` |
| `--of-success` | `#16a34a` |
| `--of-warning` | `#b45309` (solid `#d97706`) |

### 3.3 Typography
- **Headings / display**: `Carter One` — a rounded, playful display face. Use for the
  logotype, hero headline, and section headings.
- **Body / UI**: `DM Sans` (weights 300–600).
- **Mono**: `JetBrains Mono` (code blocks, env-var names, numbers).

Load all three from Google Fonts. **Explicitly include `Carter+One`** in the request (the
app's main layout omits it and relies on browser cache — do not repeat that mistake):
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Carter+One&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```
CSS families: `--font-heading: 'Carter One', sans-serif;` · `--font-sans: 'DM Sans', sans-serif;` · `--font-mono: 'JetBrains Mono', monospace;`. Apply `--font-heading` to `h1–h6`.

**Font-size scale** (guidance): hero `h1` large (`clamp(2.4rem, 6vw, 4rem)`), section
headings ~`1.4rem`, body `0.875rem`, secondary `0.82rem`, small labels/chips `0.72rem`,
tiny badges `0.68rem`.

### 3.4 Border-radius conventions
- Buttons / inputs / selects: **`9px`** (some small controls `6–7px`).
- Cards / panels: **`14px`**; hero / feature cards may go **`16–20px`**.
- Pills / chips / badges: **`20px`** (fully rounded).

### 3.5 Component recipes
Translate these app patterns into Tailwind utilities / component CSS:
- **Primary button**: `background: var(--of-accent-solid)`, `color: var(--of-ink)`,
  `font-weight: 700`, `border-radius: 9px`, no border, `transition: background .15s`;
  hover → `var(--of-accent-hover)`.
- **Ghost / secondary button**: `background: var(--of-bg-elevated)`, `color: var(--of-text-2)`,
  `1px solid var(--of-border)`, `border-radius: 9px`.
- **Text / link button**: `color: var(--of-accent)`, `font-weight: 600`, transparent.
- **Card**: `background: var(--of-bg-surface)`, `1px solid var(--of-border-subtle)`,
  `border-radius: 14px`, `overflow: hidden`; **hover** → `border-color: var(--of-accent-border)`
  plus `box-shadow: 0 8px 32px var(--of-accent-glow)` (a subtle cyan lift).
- **Chip / pill**: `border-radius: 20px`, `font-size: 0.72rem`, `padding: 3px 10px`,
  `1px` border; active state uses `var(--of-accent-bg-hover)` bg + `var(--of-accent-border)`
  + `var(--of-accent)` text.
- **Badge (count)**: `border-radius: 20px`, `font-size: 0.68rem`, `font-weight: 700`,
  `background: var(--of-accent-bg-hover)`, `border: 1px solid var(--of-accent-border)`,
  `color: var(--of-accent)`.
- **Focus ring**: `box-shadow: 0 0 0 3px var(--of-accent-bg-hover)` on focused controls.

### 3.6 Aesthetic direction
Near-black deep-navy ocean background, soft blue-grey text, **bright cyan
(`#22d3ee` / `#06b6d4`) as the single accent** used sparingly for actions and active
states, always with faint glows. Generously rounded corners (9px controls, 14px cards,
20px pills). Playful **Carter One** headings over clean **DM Sans** body. Optional subtle
wave / water-ripple motifs in section dividers or the hero — keep them restrained and never
let them hurt contrast or readability.

---

## 4. Brand assets

Copy these three SVGs from the OpenFishing app repo into `public/` (the user will provide
them; paths in the app repo are under `src/lib/assets/`). All three depict the same
stylized fish/hook silhouette.

- **`openfishing-logo.svg`** — the **wordmark** (fish-mark + "OpenFishing" as drawn
  vector letterforms), `viewBox="0 0 2970.466 1202.19"` (≈2.47:1). Fill is `currentColor`.
  Use in the nav and footer. Set the parent element's `color: var(--of-accent)` so it picks
  up the theme accent.
- **`openfishing-mark.svg`** — the **square icon** only, `viewBox="0 0 447.562 448.563"`.
  Fill is `currentColor`. Use as a compact icon / avatar.
- **`favicon.svg`** — same square mark but with a **hardcoded fill `#175b68`** (a dark
  teal; `currentColor` doesn't work when a browser loads an SVG as an external favicon).
  Link it: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`.

Inline the logo/mark SVGs (so `currentColor` works) rather than using `<img>` where you
want them to follow the theme accent.

**Create an Open Graph / social image** `public/og-image.png` at **1200×630**: the mark +
wordmark centered on the ocean gradient (`#060d17` → `#0b1a2c`) with the cyan accent, plus
a short tagline. Reference it from `<head>` (see §8).

> If the SVG files can't be supplied, recreate equivalents from the description (a clean,
> modern fish-with-hook silhouette) — but the primary path is to copy the real assets.

---

## 5. Landing page (`/`) — section by section

Build these sections in order. Copy is guidance — refine wording, keep it concise and
angler-friendly. Every CTA target is listed.

1. **Nav bar** (sticky, translucent `var(--of-bg-surface)` with blur):
   - Left: inline wordmark logo (accent-colored) linking to `/`.
   - Center/right links: **Features** (`#features`), **Docs** (`/docs`), **Demo**
     (`https://demo.openfishing.org`), **GitHub** (repo).
   - A GitHub button (optionally a star count badge) and a **dark/light theme toggle**.
   - Collapses to a mobile menu below ~768px.

2. **Hero**:
   - Bold **Carter One** headline, e.g. *"Your tackle box, organized."* / *"Log every
     catch. Own every byte."*
   - Subhead: one sentence — self-hosted fishing log for lures, spots, catches & tackle.
   - CTAs: **primary** "Try the live demo" → `https://demo.openfishing.org`; **secondary**
     "Get started" → `/docs`; **tertiary** "View on GitHub" → repo.
   - Trust line: **"Self-hosted · Open source · No cloud · Runs in Docker."**
   - Visual: an app screenshot / device mockup (lure grid) — use a placeholder from
     `public/screenshots/` for now, captured from the demo later.

3. **Feature showcase** (`id="features"`) — responsive card grid
   (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `gap-4`), each card = icon + title +
   one-liner, using the card recipe from §3.5. Cover the **full** feature set:
   - **Lure library** — photo cards, tags & species, favourites, lost-lure tracking,
     printable QR labels, sequential `#0001` numbers, fast client-side filtering & search.
   - **Fishing spots** — mark spots on an interactive Leaflet map with GPS and photos.
   - **Catch log** — species, weight & length, GPS location, catch-&-release, presentation,
     and an automatic **Bite Index** weather score.
   - **Tackle box** — rods, reels, lines, and combos, with line-spool history.
   - **Stats & insights** — trends across your catches and gear.
   - **AI assistant (optional, self-hosted)** — chatbot that answers questions about your
     data, plus **fish identification** and **lure identification** from a photo (via a
     LiteLLM sidecar — your keys, your infra).
   - **Multi-user mode (optional)** — turn on login to host friends/family: per-user data
     isolation, storage quotas, an admin panel, and SMTP password reset.
   - **Share links** — publish a read-only page for any lure, spot, or catch.
   - **REST API** — read-only JSON API with Bearer tokens and a built-in Swagger UI.
   - **Backup & restore** — one-click ZIP export/import (per-user or full-instance).
   - **9 languages** — EN, DE, FR, ES, IT, NL, PL, PT, UK, with a flag switcher.
   - **Themes & light/dark** — ocean theme with a light/dark appearance toggle.

4. **Live demo callout** — a full-width banner (accent-bordered card) inviting visitors to
   explore **https://demo.openfishing.org**; clearly note it's **read-only** (writes are
   disabled).

5. **Self-hosting quickstart teaser** — a short code block plus a "Full docs →" link to
   `/docs/getting-started`. Include the one-liner:
   ```bash
   docker run -d -p 3000:3000 \
     -v openfishing-db:/app/data \
     -v openfishing-uploads:/app/uploads \
     ghcr.io/m1ndgames/openfishing:latest
   ```
   > Verify the exact run command / ports / volume paths against the app's README before
   > finalizing; adjust to match the real image.

6. **Screenshots gallery** — 4–6 placeholder slots (`public/screenshots/`) to be filled
   from the demo: lure grid, catch detail (map + bite index), spot map, stats, chatbot.
   Mark these as TODO in a comment; optionally add a lightbox island.

7. **Tech / trust strip** — small badges: **SvelteKit · SQLite · Docker · Leaflet**, with a
   line like *"Open source and self-hosted — your data never leaves your server."*

8. **Footer** — columns of links (Docs, GitHub, Live Demo, Docker image
   `ghcr.io/m1ndgames/openfishing:latest`), the mark logo, copyright, and a short project
   blurb.

---

## 6. Documentation (`/docs`, Starlight) — full page tree

Configure Starlight with the ocean palette (override its CSS custom properties to the §3
tokens; set the accent to cyan, sidebar/background to the ocean surfaces). Provide the
wordmark as the site title logo. Sidebar structure and per-page content:

**Getting Started**
- *Introduction* — what OpenFishing is, philosophy (self-hosted, privacy-first), feature
  overview with links into the feature pages.
- *Quick Start* — the `docker run` one-liner, first-login notes, where data lives.
- *Installation (docker-compose)* — a complete `docker-compose.yml` example with named
  volumes for the SQLite DB and the uploads directory, port mapping, and the core env vars.
  Explain that uploads/DB **must** be on persistent volumes.

**Configuration**
- *Environment variables* — full reference table. Include every variable with default and
  description:
  | Variable | Default | Description |
  |---|---|---|
  | `DATABASE_URL` | `local.db` | Path to the SQLite file |
  | `UPLOAD_PATH` | `./uploads` | Directory for lure/spot/catch photos (mount a volume) |
  | `BASE_URL` | `http://localhost:5173` | Public base URL, used for QR-code + reset links |
  | `ADMIN_PASSWORD` | _(unset)_ | Set to enable multi-user login; it's the admin account's password (admin username is always `admin`, re-synced each boot). Unset = fully open single-tenant. |
  | `AUTH_PASSWORD` | _(unset)_ | **Deprecated** fallback name for `ADMIN_PASSWORD` |
  | `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | _(unset)_ | SMTP config for "forgot password" emails; needs at least `SMTP_HOST` + `SMTP_FROM` or the feature is hidden |
  | `DEMO_MODE` | _(unset)_ | Any value = read-only demo mode (all writes blocked) |
  | `CHATBOT` | _(unset)_ | Any truthy value enables the AI chatbot (needs LiteLLM vars) |
  | `LITELLM_URL` | _(unset)_ | Base URL of the LiteLLM proxy (e.g. `http://litellm:4000`) |
  | `LITELLM_MODEL` | _(unset)_ | Model name matching a `litellm.config.yaml` entry |
  | `LITELLM_VISION_MODEL` | _(unset)_ | Optional vision-capable model for fish/lure ID (falls back to `LITELLM_MODEL`) |
  | `BODY_SIZE_LIMIT` | `104857600` | Max upload size in bytes |

**Features** (one page each, kept as concise reference — link to GitHub for source detail)
- *Lures* — photos, tags, species, favourites, lost tracking, amount, auto-suggest, filtering & pagination.
- *Spots* — map, GPS, photos; the Haversine spot↔catch proximity (catches within 100 m of a spot show up on it).
- *Catches* — fields, GPS, catch-&-release, presentation, and the linked lure/spot.
- *Bite Index (explained)* — the weighted 0–10 score: pressure trend ×0.5, light ×0.3,
  temp stability ×0.2; data from the Open-Meteo API; snapshot stored on each catch;
  rating labels Poor/Fair/Good/Excellent.
- *Tackle* — rods, reels, lines, combos, line-spool logs.
- *Stats* — what's aggregated.
- *QR labels* — printing 12.5 mm labels for unlabeled lures.
- *Share links* — creating/revoking read-only public pages for a lure/spot/catch.
- *Themes & appearance* — ocean theme, dark/light/system, per-user vs global.
- *Languages (i18n)* — 9 supported languages and the switcher.

**Multi-user & authentication**
- Enabling `ADMIN_PASSWORD`; login with email/username + password; the always-present env-controlled
  `admin` account; the admin panel (`/settings/admin`) for users, quotas, enable/disable, chatbot
  toggle, API tokens; per-user data isolation; password reset via SMTP; per-user storage quotas.

**AI features**
- Enabling the chatbot (`CHATBOT` + `LITELLM_URL` + `LITELLM_MODEL`); running LiteLLM as a
  Docker sidecar (reference `docker-compose.yml` + `litellm.config.yaml`); the optional
  `LITELLM_VISION_MODEL` for **fish identification** (catch form) and **lure identification**
  (add-lure form). Note API keys stay server-side.

**REST API**
- Overview: read-only JSON at `/api/v1/*`; **per-user** `Authorization: Bearer <apiToken>`
  auth (open when auth is disabled). List the resource endpoints (lures, spots, catches,
  rods, reels, lines, combos — list + by-id). Link to the built-in **Swagger UI at
  `/api-docs`** and the OpenAPI spec at `/api/openapi`.

**Backup & restore**
- Per-user backup/restore (own data only) at `/settings`, and admin **full-instance**
  backup/restore (all users + accounts) at `/settings/admin`. Explain the ZIP format
  (`backup.json` + `uploads/`) and that restore-all does a full wipe + rebuild.

**Demo mode**
- What `DEMO_MODE` does (read-only, banner + toast on write attempts; language switching
  still works). Mention https://demo.openfishing.org runs in this mode.

**FAQ / Troubleshooting**
- Persistent volumes for DB + uploads; migrations run automatically on startup in
  production; reverse-proxy notes (set `BASE_URL`, forward headers); upload size limit.

> **Docs style**: keep pages as a clear summary/reference and link back to the GitHub repo
> for source-level detail. Pull authoritative wording from the app's `README.md` and
> `CLAUDE.md` (provided by the user) — do not contradict them.

---

## 7. Content sourcing

Authoritative feature and configuration details come from the OpenFishing app repo's
`README.md` and `CLAUDE.md`, which the user will supply with this spec. This spec
front-loads the **design system** and **site structure**; verify exact prose (command
flags, ports, endpoint names, env defaults) against those sources before publishing. If
something here conflicts with the current README, the README wins — flag the discrepancy.

---

## 8. SEO, accessibility & performance

- **Per-page** `<title>` and meta description. Open Graph + Twitter card tags with
  `og:image` → `/og-image.png`, `og:url`, canonical link.
- **Sitemap** via `@astrojs/sitemap`; add a `public/robots.txt` allowing all and pointing
  to the sitemap.
- **Accessibility**: semantic HTML landmarks, full keyboard navigation, visible focus
  rings (§3.5), color contrast AA in **both** modes, respect `prefers-reduced-motion` for
  any wave/scroll animations, alt text on all images.
- **Performance**: lazy-load below-the-fold images, ship minimal JS (islands only for the
  theme toggle / lightbox), `font-display: swap`, preconnect to Google Fonts.

---

## 9. Deployment (Docker + docker-compose)

Static build served by nginx.

- **`Dockerfile`** — multi-stage:
  1. `node:lts-alpine` builder: `npm ci` then `npm run build` → produces `dist/`.
  2. `nginx:alpine` runtime: copy `dist/` to `/usr/share/nginx/html`, copy `nginx.conf`.
- **`nginx.conf`** — serve static files, `try_files $uri $uri/ =404`, gzip on, sensible
  cache headers (long cache for hashed assets, no-cache for HTML), and correct
  `Content-Type` for `.svg`.
- **`docker-compose.yml`** — single `web` service building the Dockerfile, a port mapping
  (e.g. `8080:80`), and `restart: unless-stopped`. Add a comment explaining how the user
  wires **openfishing.org** to this container via their reverse proxy, and that
  **demo.openfishing.org** points at the *separate* OpenFishing app instance (not this
  site).

---

## 10. Acceptance checklist

- [ ] Landing page renders all sections in §5 (nav, hero, features, demo callout,
      quickstart, screenshots, tech strip, footer).
- [ ] Dark mode is default and the light/dark toggle works and persists.
- [ ] Design tokens match §3 exactly (Ocean dark + light).
- [ ] Carter One / DM Sans / JetBrains Mono all load (Carter One explicitly requested).
- [ ] Brand SVGs copied into `public/`; favicon linked; OG image created (1200×630).
- [ ] Starlight `/docs` has the full sidebar tree from §6.
- [ ] Env-var reference table is complete (every variable in §6).
- [ ] Demo, GitHub, and Docker image links are correct everywhere.
- [ ] `npm run build` succeeds; sitemap + robots.txt generated.
- [ ] Docker image builds and nginx serves the site locally.
- [ ] Lighthouse ≥ 90 for Performance, SEO, and Accessibility.

# OpenFishing Website

[**OpenFishing**](https://github.com/m1ndgames/OpenFishing) — the self-hosted, privacy-first
fishing log for anglers (lures, spots, catches & tackle).

- 🌐 **Site:** https://openfishing.org
- 🎣 **Live demo:** https://demo.openfishing.org (read-only)

The site is a fast, fully static build: a custom marketing page at `/` and a
[Starlight](https://starlight.astro.build/) documentation section at `/docs`, styled to match
the app's dark "Ocean" theme (cyan accent) with a working light/dark toggle.

## Tech stack

- [**Astro 7**](https://astro.build/) — static output (`output: 'static'`), no SSR.
- [**Tailwind CSS v4**](https://tailwindcss.com/) via `@tailwindcss/vite`; design tokens live
  in `src/styles/theme.css` and are exposed to Tailwind with `@theme inline`.
- [**Starlight**](https://starlight.astro.build/) for `/docs`.
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) for the
  sitemap; `public/robots.txt` points at it.
- Minimal client JS — Astro islands only for the theme toggle and the screenshot lightbox.

## Getting started

```bash
npm install
npm run dev        # local dev server
```

Open http://localhost:4321.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Astro dev server. |
| `npm run build` | Production build to `dist/` (runs `prebuild` → OG image first). |
| `npm run preview` | Serve the built `dist/` locally. |
| `npm run check` | `astro check` — type/diagnostics check. |
| `npm run og` | Rasterize the 1200×630 Open Graph image (`scripts/build-og.mjs`, sharp). |
| `npm run screenshots` | Capture app screenshots from the live demo (`scripts/screenshots.mjs`, Playwright). |

> `npm run build` regenerates `public/og-image.png` automatically via the `prebuild` hook, so
> it is git-ignored. The demo **screenshots** in `public/screenshots/` are committed; re-run
> `npm run screenshots` to refresh them (falls back to placeholder tiles if the demo is down).

## Project structure

```
├─ astro.config.mjs          # integrations: tailwind (vite), starlight, sitemap
├─ src/
│  ├─ pages/index.astro       # marketing landing page (/)
│  ├─ layouts/Landing.astro    # <head> meta, OG/Twitter tags, fonts, theme bootstrap
│  ├─ components/             # Nav, Hero, Features, DemoCallout, Quickstart, … , ThemeToggle
│  ├─ styles/
│  │  ├─ theme.css             # all --of-* Ocean tokens (dark + light)
│  │  ├─ global.css            # Tailwind import + @theme mapping + component recipes
│  │  └─ starlight.css         # Ocean palette override for /docs
│  ├─ content/docs/docs/**     # Starlight pages → served at /docs/**
│  └─ assets/                 # inline brand SVGs (logo/mark, colored logo variants)
├─ public/                    # favicon, brand SVGs, robots.txt, screenshots/
├─ scripts/                   # build-og.mjs, screenshots.mjs, a11y.mjs
├─ Dockerfile / nginx.conf / docker-compose.yml
└─ .github/workflows/         # ci, docker, codeql, auto-merge
```

Starlight normally serves from the site root; to keep `/` free for the landing page, all docs
live under `src/content/docs/docs/**` so their routes resolve to `/docs/**`.

## Accessibility

Both themes target **WCAG 2 AA**. `scripts/a11y.mjs` builds the site and runs
[axe-core](https://github.com/dequelabs/axe-core) against the landing page and a docs page in
**both** dark and light modes, failing on any violation. It runs in CI:

```bash
npm run build && node scripts/a11y.mjs
```

## Deployment (Docker + nginx)

The site is served as static files by nginx.

```bash
docker compose up --build   # serves on http://localhost:8080
```

- **`Dockerfile`** — multi-stage: `node:lts-alpine` builds `dist/`, then `nginx:alpine`
  serves it.
- **`nginx.conf`** — gzip, long-cache for hashed `/_astro/` assets, no-cache HTML, `/docs`
  deep-link support, `404.html` fallback.
- **`docker-compose.yml`** — single `web` service on `8080:80`.

Wire `openfishing.org` to this container in your reverse proxy. Note that
`demo.openfishing.org` points at a **separate** OpenFishing *app* instance — not this site.

## CI

GitHub Actions in `.github/workflows/`:

- **`ci.yml`** — type check, build, `npm audit`, and the axe accessibility gate.
- **`docker.yml`** — builds & smoke-tests the container on PRs; pushes to
  `ghcr.io/m1ndgames/openfishing-website` and runs a Trivy scan on `main`.
- **`codeql.yml`** — CodeQL analysis (`actions` + `javascript-typescript`).
- **`auto-merge.yml`** — auto-merges Dependabot patch/minor updates.

## License

Released under the AGPL-3.0 license — see [`LICENSE.md`](./LICENSE.md).

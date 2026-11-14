---
name: OpenFishing Website
description: Marketing and docs site for OpenFishing, built on the app's design system ("The Tackle Box at Dusk").
colors:
  # Ocean theme, dark mode (default). Source of truth: the app's DESIGN.md / src/routes/layout.css
  wake-cyan: "#22d3ee"
  wake-cyan-solid: "#06b6d4"
  wake-cyan-glint: "#67e8f9"
  wake-cyan-deep: "#0891b2"
  abyss: "#060d17"
  night-water: "#0b1a2c"
  raised-water: "#0f2238"
  water-overlay: "#0d1f35"
  water-hover: "#132841"
  rope-line-faint: "#172f4a"
  rope-line: "#243f5e"
  rope-line-strong: "#2d5270"
  foam-bright: "#e0eaf8"
  foam: "#c2dce8"
  mist: "#98c0d2"
  haze: "#84aabd"
  fog: "#6b9ebb"
  ink: "#030a12"
  hook-red: "#f87171"
  reed-green: "#4ade80"
  hook-amber: "#fbbf24"
  hook-amber-solid: "#f59e0b"
  # Ocean theme, light mode
  harbor-teal: "#0c627a"
  shallows: "#eaf3f8"
  paper: "#ffffff"
  paper-raised: "#f2f8fb"
  shore-line: "#aacad9"
  deep-ink: "#0a1e2e"
  slate-text: "#1a3448"
  slate-2: "#244153"
  slate-muted: "#325061"
  # Fixed ink for badges that sit on screenshots/photos
  photo-scrim-badge: "rgba(0,0,0,0.7)"
typography:
  # Website-only marketing roles (the app has no hero type)
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  section-headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
  invitation-headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  # Shared with the app
  figure:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "tnum"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
  section:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.35
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.35
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
  caption:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
  numeral:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "tnum"
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  xs: "4px"
  sm: "6px"
  control-sm: "8px"
  control: "9px"
  md: "10px"
  subpanel: "12px"
  lg: "14px"
  xl: "16px"
  pill: "20px"
  full: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  container: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.wake-cyan-solid}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.wake-cyan}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.raised-water}"
    textColor: "{colors.mist}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.water-hover}"
    textColor: "{colors.foam}"
  chip:
    textColor: "{colors.fog}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  chip-active:
    textColor: "{colors.wake-cyan}"
  panel:
    backgroundColor: "{colors.night-water}"
    rounded: "{rounded.lg}"
    padding: "14px 16px"
  feature-card:
    backgroundColor: "{colors.night-water}"
    rounded: "{rounded.lg}"
    padding: "20px"
  nav-link-active:
    backgroundColor: "{colors.raised-water}"
    textColor: "{colors.foam-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  lure-number-plate:
    backgroundColor: "{colors.photo-scrim-badge}"
    textColor: "{colors.wake-cyan-glint}"
    typography: "{typography.numeral}"
    rounded: "{rounded.xs}"
    padding: "2px 6px"
  floating-action:
    backgroundColor: "{colors.raised-water}"
    textColor: "{colors.mist}"
    rounded: "{rounded.control}"
    size: "44px"
---

# Design System: OpenFishing Website

## Overview

**Creative North Star: "The Tackle Box at Dusk"** (shared with the app)

The website uses the app's design system rather than a brand of its own. OpenFishing is a
tackle box: dark, ordered compartments where every lure has its numbered slot and its record.
The world is the water at dusk. Deep, cool surfaces step up in small tonal increments, and a
single cyan accent glints against them like a lure catching the last light. Real photos of
lures and catches (here, real demo screenshots) carry the color, and the interface around
them stays quiet and in order.

The app's direction is **catalogued, built for outdoors**: precise, inventory-like detail
(numbered plates, mono spec values) plus legibility that survives glare. The website carries
that over to a **Persuade** surface. Its job is to get an angler into the live demo, so it is
allowed things the app is not: larger marketing type, one hero, generous section spacing.
Every token, font, radius and rule below otherwise comes from the app. The app's `DESIGN.md`
(github.com/m1ndgames/OpenFishing/blob/main/DESIGN.md) is the upstream authority. When the two
disagree, the app wins and this file is updated.

The site's one addition with no counterpart in the app is the **lure-and-fish background
animation** on the landing page, kept as the website's single moment of play.

**Migration from the old app design** (done 2026-11-14 on `feature/app-design-sync`): Carter
One removed; text ramps and the light-mode teal updated to the app's values; DM Sans and
JetBrains Mono self-hosted from the app (`public/fonts`, `src/styles/fonts.css`); app easing
and focus ring adopted; `/docs` retinted. Screenshots were refreshed from the live demo the
same day (`npm run screenshots`, `ONLY=name` re-captures one) as tight dark/light crop
pairs. The compartments carry a quiet mono section index (01–04), deliberately unlike the
app's `#0001` lure plate, which the screenshots already show. **Still open:** the demo's sample data is German, so screenshots show German
tags on every locale.

**Key Characteristics:**
- Dark-first, tonal layering; light mode is a fully designed counterpart, not an inversion.
- One accent (Ocean cyan), used for actions, active state and the lure number, never as decoration.
- DM Sans for everything readable; JetBrains Mono only for catalogued numbers and shell commands.
- Flat surfaces with 1px borders; shadows only on floating layers and as a hover response.
- Gently curved, consistent corners (9px controls, 14px cards).
- Real product imagery (demo screenshots) does the persuading; the chrome stays quiet.

## Colors

Cool, desaturated water tones carry the surfaces, and one saturated accent does all the
signalling. The website uses the **Ocean** theme only; the app's Forrest, Sunset and Dusk
themes are out of scope here.

### Primary
- **Wake Cyan** (`wake-cyan`, solid `wake-cyan-solid`): the accent. The solid tone fills the primary button ("Try the live demo") with Ink text. The lighter tone is used for links, text buttons, active states, the logo, and the primary button's hover fill. The translucent family (`--of-accent-bg` 8%, `-bg-hover` 14%, `-border` 25%, `-glow` 10%) tints icon tiles, the demo band and the card hover glow.
- **Wake Glint** (`wake-cyan-glint`): lure-number plate text on photos and screenshots, the brightest accent step.
- **Harbor Teal** (`harbor-teal`): the accent in light mode, darkened to hold AA on white; also the solid button fill there.

### Neutral
- **Abyss** (`abyss`): page background.
- **Night Water** (`night-water`): cards, panels, the footer, code panels.
- **Raised Water** (`raised-water`): secondary buttons, floating action buttons, window chrome bars, popovers, the active nav pill.
- **Water Hover** (`water-hover`): hover fill on rows and secondary buttons.
- **Rope Line** faint / default / strong: section dividers and card borders / control borders / emphasized borders and window dots.
- **Foam Bright → Fog** (`foam-bright`, `foam`, `mist`, `haze`, `fog`): the five-step text ramp, covering headings, body, secondary, labels and hints/inactive.
- **Ink** (`ink`): text on solid accent fills; white in light mode.
- **Light mode** (`shallows`, `paper`, `paper-raised`, `shore-line`, `deep-ink`, `slate-text`, `slate-2`, `slate-muted`): the same roles on a pale blue-white ground (`slate-2` is secondary text, `slate-muted` labels).

### Semantic
- **Hook Red / Reed Green / Hook Amber**: inherited from the app. On the website they appear only inside screenshots or when depicting app UI faithfully (e.g. a LOST pill, the Demo Mode banner).

### Named Rules
**The Single Glint Rule.** There is exactly one accent hue. It marks what you can act on and
what is selected, and nothing else. Semantic colors are not accents and are never decorative.

**The Token-Only Rule.** Components take every color from `--of-*` tokens, never literals.
The one exception is the fixed photo scrim behind badges that sit on screenshots.

**The Upstream Rule.** Token values are changed in the app first. The website mirrors them; it never forks them.

**The Glare Rule.** Anything a visitor needs to read uses `--of-text-2` (`mist`) or brighter.
`fog` is for hints and inactive states only.

## Typography

**Display / Body Font:** DM Sans (with sans-serif)
**Label/Mono Font:** JetBrains Mono (with monospace)

**Character:** A friendly, slightly rounded grotesque for everything readable, paired with a
mechanical mono that appears only where a number is catalogued, like the stencil on the
tackle box. The website adds larger DM Sans marketing roles on top of the app's scale. It has
no separate display face.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 5vw, 3.5rem)`, 1.1, -0.01em): website only, the hero headline. One per page.
- **Section Headline** (600, `clamp(1.5rem, 3vw, 2rem)`, 1.2): website only, landing-page section titles.
- **Invitation Headline** (600, `clamp(1.875rem, 4.5vw, 2.75rem)`, 1.15, -0.01em): website only, the demo band's headline. Between Display and Section Headline, one per page: the band is the turn of the story.
- **Kicker** (DM Sans 600, 0.875rem, accent): website only, a one-line label above a section headline that opens a new act ("Ready to host it?"). At most one per page.
- **Lead** (400, 1.0625rem, 1.6): website only, hero and section intro copy, max ~34rem.
- **Figure** (JetBrains Mono 600, 2rem, tabular): a single catalogued number shown large (a lure plate, a bite index), if the page depicts one.
- **Headline** (500, 1.5rem, 1.2): docs page titles and in-content h1.
- **Section** (600, 1rem, 1.35): small panel headings, feature-card titles.
- **Title** (500, 0.95rem, 1.35): tile and card names.
- **Body** (400, 0.875rem, 1.5): card descriptions, buttons, menu items.
- **Label** (500, 0.8125rem, 1.4): nav links, footer links, form-like labels.
- **Caption** (500, 0.75rem, 1.5): chips, screenshot captions, footer column heads. This is the floor; nothing is smaller.
- **Numeral** (JetBrains Mono 600, 0.75rem–1rem, tabular): lure plates, counts.
- **Code** (JetBrains Mono 400, 0.82rem, 1.7): the `docker run` command and inline code.

### Named Rules
**The Stencil Rule.** Mono is reserved for catalogued numbers and literal commands. Never use it for prose, labels, headings or tech-stack chips.

**The Long-Word Rule.** Every label must survive German and Polish string lengths. Allow wrapping in buttons and chips, and never put a fixed width on text-bearing controls.

**The One Family Rule.** DM Sans carries every heading, from the hero down. There is no second display face.

## Layout

A centered 1152px column (`max-w-6xl`, matching the app) with 16px side gutters below 640px
and 20px above. Spacing follows the app's 4px grid (`--of-space-1` to `--of-space-8`);
landing-page sections stack as full-width bands separated by a 1px `rope-line-faint` rule,
with vertical padding of about `clamp(3rem, 6vw, 5rem)`. Section headlines are left-aligned.

**Landing order** (two acts): Hero → Features ("What's in the box") → Demo band →
Quickstart (`#install`, the second act under the "Ready to host it?" kicker) → Footer. Act
one is for the angler and ends on the invitation to try it; act two is for whoever hosts it
and holds the command, the prerequisites, the operator features and the source link. There
is no thumbnail gallery; every screenshot on the page is a crop legible at its display size.
The demo stays reachable all the way down: hero button, each compartment (↗, opens its demo
page), the band right after the grid, and the footer. A "Skip to content" link is the first
tab stop.

- **Hero:** two columns (copy | product window) that collapse to one at 900px, product second on phones. Copy order: headline, benefit sub, demo button with the "no signup · read-only" note under it, a lighter text-link "How to install ↓" anchor, then a three-item fact list stacked one per line under a rule (free & open source · your NAS or home server · no cloud, no account, no telemetry). Each fact is stated once on the page.
- **Compartments:** the four core features (lures, spots, catches, tackle) as image cards, 1 → 2 (640px) columns and never more, so the wells show their demo crops at about 1:1; 20px gap, all the same height.
- **Grouped extras** (`FeatureList`, 1 → 3 columns): "For your fishing" (stats, AI, share links) closes the Features section, followed by one line for languages and themes. "For your server" (multi-user, backup, API) sits at the bottom of the Quickstart section, where self-hosters are already reading. Never promote these back into a wall of equal cards, and never mix angler and operator value in one group.
- **Quickstart:** kicker, headline, prerequisites as a "You need:" checklist of three (a machine that stays on · Docker · 64-bit Intel/AMD, same check mark as the hero facts), where the data lives (that machine; one SQLite database plus photos in the command's two volumes, which are the whole backup), a "New to Docker?" line right above the guide link (max 38rem wide), the installation-guide link and a quieter, underlined "Source code on GitHub (AGPL-3.0)" link | code window, collapsing at 820px.
- **Demo band:** headline and copy with the demo button beside them at a fixed gap (not pushed to the far edge); full-width button at 480px and below.
- **Secondary links** (source link, the language list) are underlined at rest with a `rope-line-strong` underline; only accent-coloured text links and buttons go without.
- **Site controls:** a floating stack at top right (language, GitHub, theme) instead of a top bar; fixed on desktop, absolute (scrolls away) at 768px and below so it never covers content. It comes before `<main>` in the DOM, so keyboard users reach it right after the skip link. The language picker is a disclosure (button with `aria-expanded` + a plain list of links), not an ARIA menu; Escape closes it and returns focus to the button.
- **Docs:** Starlight's layout, retinted with the same tokens and fonts. The sidebar has four groups and never mixes angler and operator topics: Getting Started (Introduction, Installation) · Using OpenFishing, split into four small subgroups (Your collection: lures, spots, catches, tackle · Insights: bite index, stats · Sharing: QR labels, share links · Options: themes, languages) · Running your server (environment variables, multi-user, AI features, backup, REST API, demo mode) · Help (FAQ & troubleshooting). There is one install page: prerequisites first (always-on machine, Docker, amd64 only), a compose file (image without a tag, comments of at most 35 characters, so it fits a 390px phone) that sets `BASE_URL` (required: without it the app assumes HTTPS and rejects every save on a plain-HTTP install) and `TZ`, with `ADMIN_PASSWORD` commented out (never a working placeholder password), a "Change these lines" list right under it, where to run it (NAS stack UI or terminal), what success looks like (`docker compose logs openfishing` shows "Listening on"), then "You're in" with a link to adding the first lure. The "Just trying it?" one-liner sits before step 1, so nobody runs it after building the compose file, and uses the same `192.168.1.50` example address (never `localhost`) so links and QR labels from a trial work on other devices. "Where your data lives" is a two-item list. Updating pulls the untagged image and explains pinning to a release tag (`:<version>`, linking to the releases), and a reverse-proxy section with Caddy and nginx examples. One example address everywhere (`http://192.168.1.50:3000`), and step 3 says "open the address you put in BASE_URL". Feature and operator pages start with a short numbered task in the app's own words, taken from the app's i18n strings (Add your first lure, Log a catch, Add a spot, Add your gear, Print labels, Create a share link, Add a family member, Make/Restore a backup, Move to a new machine, Set up AI); the reference lists follow. The app is the source of truth: every UI label and feature name in the docs and on the landing page is the app's current string in that language (Bite Index is Beissindex, Indice de morsure, Bijt-index, Indeks brania, Índice de mordida) (button, tab and field names), and every factual claim is checked against the app's code: the Bite Index page describes the real calculation (weather when the catch is saved, not the catch time; pressure 50 %, light 30 %, temperature 20 %; bands 8.5/6.5/4), the Stats page lists the real sections. Moving to a new machine starts with updating the old one, because a backup only restores into the same version; the FAQ has a Backups section keyed by the exact restore errors. The AI page mirrors the app's own compose (a `litellm` service with `litellm.config.yaml` and the key in `.env`) and shows the full merged `docker-compose.yml` to replace the install file, never a fragment to splice in. Its setup is one numbered list with the code blocks indented inside the steps. Identify from photo is described as the app does it: new catch and new lure forms, and without `LITELLM_URL` it answers with the app's generic error. No page shows a working placeholder password: login is always the commented-out `# - ADMIN_PASSWORD=` line. The Introduction opens with the catch screenshot (the hero capture) and demo link, then the four core areas (lures, spots, catches, tackle), with the rest as a list grouped by the sidebar groups (Insights, Sharing, Options, Running your server). It lists exactly what talks to the internet as a short list of full sentences, not a table (Open-Meteo weather when you log a catch, open a spot or ask the chatbot about a place; OpenStreetMap tiles or your own via `MAP_TILE_URL`; optional AI; optional SMTP). Prose that would fill a third table column becomes a list: three-column tables only hold short values. The environment-variables page is grouped lists (`VAR` · default, then the description), never a wide table, with the Docker image's defaults. Sidebar labels, the page titles of feature pages and the Introduction's area table use the app's own menu names (Köderbox, Angelkarte, Fangbuch, Statistik; Aasbox, Spots; Locais; Equipo). Inside sentences, links use ordinary nouns ("mit einem [Köder]", "für [Köder], [Angelstellen] und [Fänge]"), because a menu name in running text breaks the grammar. The prose uses the app's nouns (Dutch "spot", Portuguese "local"). Forms are described as the app builds them: a spot's location comes from a map tap, **Use my location** or **Use photo location** (there is no coordinate field) and is required; a catch has no stored spot (the nearest saved spot within 100 m shows it), its location is required, and Combo, Retrieve Style, Notes and Catch & Release sit under **More details**. The Lures page lists the lure list's real search fields (name, brand, type, colour, tags) and filters (type, running depth, light conditions, species, favourites, has catch, size, weight; a second tap excludes), says which inputs suggest values (not tags), and that gaps in lure numbers stay but deleting the newest lure frees its number. The environment-variables page has a ready SMTP block with `SMTP_PASS=` left empty under a comment. Features that need login say so where they are described: share links carry a note and a FAQ entry, because the default install has login off. What happens to data sent to an AI model is the operator's choice (a local model works), so the docs don't describe it. Previous/next links never cross from the angler pages into the operator pages: Languages has no next link and Environment variables no previous one. On the backup page the restore warning stands right before "Restore a backup". Moving to a new machine has you write down the **Backup format** from Settings in step 1 and compare it on the new machine in step 2, before anything is restored. The FAQ starts with the error people actually hit ("Cross-site POST form submissions are forbidden" → set `BASE_URL`). French copy uses a narrow no-break space (U+202F) before `: ; ? !` and no-break spaces inside « », so a closing » never wraps alone. A long example value (a URL template) goes on its own line after the sentence, never mid-sentence. Docs copy uses no em dashes (colon or parentheses instead; Ukrainian keeps its grammatical dash) and names screens ("Settings"), never URL paths. `/docs`, `/<lang>/docs`, every section root and the retired Quick Start URL redirect to a real page (`redirects` in `astro.config.mjs`). The lures, spots, catches and tackle pages open with the matching `box-*` screenshot (16:10, 14px frame, dark/light by theme) and a "See it in the demo ↗" link.
- Rows of chips and links wrap; nothing scrolls sideways except code blocks. Table cells hyphenate long compound words and code values inside them wrap anywhere; below 30rem cell padding tightens to 0.5rem.

## Elevation & Depth

Flat by default. Depth comes from three tonal steps (Abyss → Night Water → Raised Water) and
1px Rope Line borders. A shadow means "this floats" or "you are pointing at this".

### Shadow Vocabulary
- **Floating menu** (`box-shadow: 0 8px 24px rgba(0,0,0,0.4)`): the language popover.
- **Product window** (`box-shadow: 0 24px 60px rgba(0,0,0,0.35)`): website only, the hero screenshot frame, which floats as the product preview.
- **Accent glow** (`box-shadow: 0 8px 32px var(--of-accent-glow)`): card hover only, paired with the border turning `--of-accent-border`.
- **Scrim** (`--of-scrim`, deepest surface at 80%): behind modals (app token; the landing page currently has none).

### Named Rules
**The Flat-At-Rest Rule.** Cards and panels never carry a shadow at rest.

## Shapes

Gently curved, never pill-shaped except small chips. Corners scale with the object: 4–6px
for badges, lure plates and copy buttons; 9px for buttons, FABs and focus; 10px for the
active nav pill and popovers; 12px for nested sub-panels; 14px for cards, panels and product
windows; 16px for modals; 20px for pills. Borders are always 1px solid.
Screenshots are clipped by their frame's radius and use `object-fit: cover`, anchored top-center.

## Components

### Buttons
Confident and compact; one solid primary per view.
- **Shape:** 9px.
- **Primary:** solid accent, Ink text, 600, `10px 24px`. On the website this is reserved for "Try the live demo". Website CTAs set label text at 0.9375rem (one step above the app's body) so marketing buttons hold their weight next to Display type.
- **Hover / Focus:** fill shifts to `--of-accent` over 150ms on `--of-ease`, with no glow. Keyboard focus is a 2px `--of-accent-solid` outline with a 2px offset.
- **Secondary:** Raised Water fill, 1px Rope Line border, `mist` text; hover goes to Water Hover and `foam`. Used for "Get started" / docs.
- **Text link:** accent text, 600, optional trailing arrow; hover goes to Wake Glint. Used for GitHub.

### Chips
- **Neutral:** pill, caption size, `3px 10px`, transparent with a faint border, `fog` text.
- **Active / highlighted:** accent tint and border, accent text.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** Night Water; screenshot wells use `water-overlay`.
- **Shadow Strategy:** none at rest; accent glow and accent border on hover.
- **Border:** 1px `rope-line-faint`.
- **Feature card:** a 40px accent-tinted icon tile (10px radius) with a Section-size DM Sans title and a Body description in `mist`. The whole card links to its docs page.

### Navigation
- **Floating action stack:** 44px Raised Water squares (9px) with translucent blur, `mist` icons that turn accent on hover. The language popover's active item uses accent text.
- **Footer:** Night Water band; Caption-size column heads in `haze`; Label-size links in `mist` that turn accent on hover.
- **Docs header/sidebar:** Starlight, tinted so its active item matches the app's nav pill (Raised Water, `foam-bright`, 10px). The phone menu button is a floating action (44px Raised Water square, 9px, Rope Line border), accent when open. The header theme and language selects get the accent focus ring (2px, 2px offset). Header tap targets are 44px: the site title, the phone search button and the GitHub icon (its negative margin keeps the icon where it was, so only the hit area grows). The "See it in the demo" link has a 44px row, and on touch screens the heading anchors' invisible hit area is 44px. On phones a code block inside a numbered step moves out to the full column (the list's 2.5rem indent, 0.625rem code padding), so a compose line is never cut off. The 44px sizing (with its `display`) lives in a phone-only media query: Starlight hides the button from 50rem with a utility class, and a `display` value outside that query puts it over the language picker on desktop.
- **Docs code panels:** Expressive Code restyled to Night Water with a 1px Rope Line border, 14px radius, Raised Water title bars, Code type (JetBrains Mono 0.82rem / 1.7); every file block carries its filename as a tab title. Long lines wrap at spaces only (indent preserved, never inside a word or address); below 30rem code steps down to 0.75rem with 0.875rem side padding. The copy button is a labelled pill, always visible: copy icon plus the app's own "Copy" word in each language (Kopieren, Copier, Копіювати...), 0.75rem DM Sans 500 in `gray-2` on Night Water with a 1px Rope Line border and 6px radius, brightening to `white` on hover or focus. On every block with a title bar (filename tab or terminal dots) it sits at the right end of that bar, centred in it, never in the code area. Its tooltip and "Copied!" text are translated in every language: `getBlockLocale` in `astro.config.mjs` takes the locale from the content path (Starlight's own detection returns English here), and `src/content/i18n/` fills the strings Starlight lacks for it, nl, pt and uk, plus the nl/uk heading-anchor label. Bare blocks without a bar put it top right of the code (centred on the block when there is one line) and keep the first code line clear of it. The pill is 24px tall but its tap area is 44px (an invisible overlay reaching past it). A block whose single long line would break misleadingly (an image tag at a hyphen) uses `wrap=false` and scrolls instead. Inline code is a hairline chip (1px Rope Line, 4px radius). In prose it is an inline block, so it never breaks at a hyphen (`up -` / `d`); only code longer than a line wraps inside its chip. The phone "On this page" links are 44px rows, and the header theme picker is 7.5em wide so longer names ("Sombre") don't truncate.
- **Docs asides:** a Night Water panel with a 1px border faintly tinted by its kind (accent for notes, warning for cautions); the title and icon carry the semantic colour (notes in the accent cyan). Semantic colour never fills the block, and there is no thick side stripe.
- **Docs type:** page titles at Headline (500, 1.5rem); h2 1.25rem, h3 1.0625rem; prose capped at 38rem with `text-wrap: pretty`, headings balanced; previous/next cards flat (no shadow) with labels at 1.0625rem.

### Lure Number Plate (signature, from the app)
The `#0042` plate is the tackle box's stencil: JetBrains Mono 600 at caption size, Wake Glint
on a dark photo scrim, 4px radius, sitting top-left on a photo. On the website it belongs
where real lures appear, such as screenshot tiles or a depicted lure card. It is never a
decorative stripe of numbers.

### Product Window (website)
The hero holds one static demo screenshot of a catch, the product's whole story in one
frame: the fish on its measuring mat, length, combo and lure, the Bite Index, and the top of
the spot map down to its pin (992×600, captured at a 1000px viewport: the narrowest width
where the app keeps two columns, so its text is as large as possible relative to the crop),
in a 14px card with the product-window shadow and the translated OpenStreetMap credit as a
caption in its bottom-right corner; the hero grid gives it the wider column (1fr 1.4fr). On
phones (640px and below) the frame zooms into the photo and the top facts (left 720px, top
405px of the capture), which crops the map and hides the credit. The screenshot is a link
to that exact catch in the demo (new tab): `scripts/screenshots.mjs` writes its path to
`src/lib/hero-catch.json` with each hero capture, so link and image never disagree. The frame
takes the accent border and glow on hover and keyboard focus. No carousel,
no auto-advance. Screenshots follow the site theme: `ThemedShot` renders the app's dark and
light captures and shows the one matching `data-theme` (a hidden lazy one is never fetched;
the eager hero loads both so light mode never waits on a lazy LCP image).
The Quickstart window holds the `docker run` command (with `-e BASE_URL=http://localhost:3000`, so saving works on plain HTTP) in Code type with a 32px copy button
under a translated "Terminal" label (40px tall); the button is hidden until JavaScript runs, success is
announced to screen readers, and if the clipboard is blocked it selects the command and says
so visibly. Plain prerequisites (a machine that stays on, Docker, amd64 only: the published
image has no arm64 build, so never name a Raspberry Pi) come before the command, and the
guide link says it contains the docker-compose setup.

### Compartment (website)
A flat card: a 16:10 screenshot well (`object-fit: cover`, top-left) above a title row and a
short description. The title row starts with a plain section index (`01`–`04`, Mono 500,
`haze`, no scrim): it must not look like the app's `#0001` lure plate that the screenshots
show. A ↗ cue closes the row and nudges toward the accent on hover. The whole card opens the
matching demo page in a new tab (stretched title link). One target per card: there is no
per-card docs link (docs live in the footer and /docs). Wells are 576×360 crops (about the
size a 2-column card shows them at) captured by `scripts/screenshots.mjs` (`box-*.jpg` +
`box-*-light.jpg`): two lure cards, the spot map centred on its pins, the catch log as it opens
(filter bar plus the first row of cards, framed on the cards actually shown so the well is
never half empty) and a line spool's page (type, diameter, strength and the reel it is on;
the demo has no tackle photos), cropped above its Edit action: the demo is read-only, so no
well may show a write action. On phones (640px and below) each well zooms 1.35× toward its
focus (the map toward its pins, the rest top-left) so the app's text stays near 11px. Any well with map tiles carries the translated
credit (`t.mapCredit`, "Map © OpenStreetMap contributors") at Caption size.

### Lure & Fish Animation (website)
A fixed, `aria-hidden` background on the landing page only. A thin line (`rope-line-strong`
at 45%) drops from the top right carrying a bobbing accent lure; an accent silhouette fish
chases it, bites and is reeled out. It is the site's single moment of play. It must stop
entirely under `prefers-reduced-motion`, including its JavaScript-driven movement, and never
appears in `/docs`. On wide screens (it only shows above 1200px) the lure starts far enough right that the trailing
fish clears the hero copy (`data-fish-clear`, never left of 60vw), so neither line nor fish crosses
the hero copy, and the line hangs from 48px left of the floating control stack (measured from the element)
and slants away from it, so it never touches those buttons. At rest (top of the page) lure and fish hang in the open space under
the hero screenshot (`data-fish-below`), so the scene is visible at load instead of behind
it. While content scrolls over the scene it fades to 30% so it never competes with text,
and returns to full strength for the catch at the bottom. Resize recomputes the resting
height, the start point and the lure's place along the scroll.

## Do's and Don'ts

### Do:
- **Do** take every color from an `--of-*` token, mirrored from the app.
- **Do** check every change in dark and light mode at WCAG AA (`scripts/a11y.mjs`).
- **Do** keep one solid-accent primary action per view, and make it the demo.
- **Do** use JetBrains Mono with tabular numerals for lure numbers and counts, and for literal commands; nowhere else.
- **Do** keep cards flat at rest (14px radius, 1px faint border).
- **Do** show the real product (demo screenshots) rather than illustrations.
- **Do** keep the wordmark and mark SVGs as they are, colored by `currentColor` from the accent.

### Don't:
- **Don't** reintroduce Carter One or any second display face.
- **Don't** use `fog` (`--of-text-4`) for anything a visitor needs to read.
- **Don't** introduce a second accent hue, or use semantic red/green/amber decoratively.
- **Don't** drift toward generic SaaS: no gradient blobs, purple or multi-hue gradients, or stock startup illustrations.
- **Don't** tip into cartoonish: the fish animation is the whole play allowance; no clip-art, mascots or bouncy decoration.
- **Don't** crowd the page like a bait-shop flyer: no stacked banners, loud badges or competing CTAs.
- **Don't** set text below 0.75rem, or give text-bearing controls fixed widths.
- **Don't** fork token values from the app.

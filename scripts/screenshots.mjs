// Capture screenshots from the live demo into public/screenshots/*.jpg
// (dark + `-light` pairs). Resilient by design: any capture that fails is
// skipped and the previous file stays, so the site build never depends on the
// demo being reachable. Run manually with: npm run screenshots
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'screenshots');
const HERO_CATCH = join(__dirname, '..', 'src', 'lib', 'hero-catch.json');
const BASE = process.env.DEMO_URL || 'https://demo.openfishing.org';
const VIEWPORT = { width: 1440, height: 900 };
// Compartment crop size (CSS px), 16:10 like the landing-page well.
const BOX = { width: 576, height: 360 };

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2 });
const page = await ctx.newPage();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function goto(path) {
  await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 });
  await sleep(800);
}

async function save(buf, file, maxWidth) {
  await sharp(buf)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(OUT, file));
  console.log(`  ✓ ${file}`);
}

async function shoot(name, clip, maxWidth = 1200) {
  // Capture at 2× for crispness, then downscale + compress to a web-sized JPEG.
  // `clip` crops to a region (CSS px) so close-ups stay readable at their
  // display size. Each shot is taken twice: the app's dark mode (`name.jpg`)
  // and its light mode (`name-light.jpg`), so the site can match its theme.
  await save(await page.screenshot({ clip }), `${name}.jpg`, maxWidth);
  await page.evaluate(() => { document.documentElement.dataset.mode = 'light'; });
  await sleep(400);
  await save(await page.screenshot({ clip }), `${name}-light.jpg`, maxWidth);
  await page.evaluate(() => { document.documentElement.dataset.mode = 'dark'; });
  await sleep(200);
}

// Each task returns nothing; failures are caught and logged.
const tasks = [
  [
    'hero',
    async () => {
      // A catch's detail page: the fish on its measuring mat, length, lure,
      // the Bite Index and the top of the spot map, the whole story in one frame.
      // Captured at 1000px, the narrowest width where the app keeps its two
      // columns, so the app's text is as large as possible relative to the crop.
      await page.setViewportSize({ width: 1000, height: 900 });
      try {
        await goto('/catches');
        const link = await page.$('a[href^="/catches/"]');
        if (!link) throw new Error('no catch to open');
        const catchPath = await link.getAttribute('href');
        await goto(catchPath);
        await sleep(2000); // map tiles
        const img = await page.$eval('main img', (el) => {
          const r = el.getBoundingClientRect();
          return { x: r.x, y: r.y };
        });
        // 992×600: photo + facts through Retrieve Style, map down to its pin.
        // The landing page's phone crop (Hero.astro) assumes this geometry.
        await shoot('hero', { x: Math.max(0, img.x - 12), y: Math.max(0, img.y - 12), width: 992, height: 600 }, 1400);
        // The landing page links the hero image to this exact catch in the demo.
        await writeFile(HERO_CATCH, JSON.stringify({ path: catchPath }, null, 2) + '\n');
      } finally {
        await page.setViewportSize(VIEWPORT);
      }
    },
  ],
  // Close-ups for the four "compartments" on the landing page (lures, spots,
  // catches, tackle). 576×360 CSS px (16:10), about the size a 2-column card
  // shows them at, so the app's text stays legible. Positioned from real elements.
  [
    'box-lures',
    async () => {
      await goto('/');
      // Two lure cards side by side: #plate, photo, name, brand.
      const r = await page.$eval('a[href^="/lures/"]', (el) => {
        const b = el.getBoundingClientRect();
        return { x: b.x, y: b.y };
      });
      await shoot('box-lures', { x: r.x - 12, y: r.y - 12, ...BOX }, 1000);
    },
  ],
  [
    'box-spots',
    async () => {
      await goto('/spots');
      await sleep(2500);
      const r = await page.$eval('.leaflet-container', (el) => {
        const b = el.getBoundingClientRect();
        const pins = [...el.querySelectorAll('.leaflet-marker-icon')].map((p) => p.getBoundingClientRect());
        const mid = (lo, hi) => (lo + hi) / 2;
        const cx = pins.length ? mid(Math.min(...pins.map((p) => p.left)), Math.max(...pins.map((p) => p.right))) : b.x + b.width / 2;
        const cy = pins.length ? mid(Math.min(...pins.map((p) => p.top)), Math.max(...pins.map((p) => p.bottom))) : b.y + b.height / 2;
        return { x: b.x, y: b.y, w: b.width, h: b.height, cx, cy };
      });
      // Centre on the pins, kept inside the map (credited on the landing page).
      const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
      const x = clamp(r.cx - BOX.width / 2, r.x, r.x + r.w - BOX.width);
      const y = clamp(r.cy - BOX.height / 2, r.y, r.y + r.h - BOX.height);
      await shoot('box-spots', { x, y, ...BOX }, 1000);
    },
  ],
  [
    'box-catches',
    async () => {
      // The catch log as it opens: the filter bar (one of the log's tools)
      // and the first row of catch cards. Framed on the cards actually shown,
      // so the compartment is never half empty.
      await goto('/catches');
      const r = await page.evaluate(() => {
        // The filter bar is the bordered box around the selects.
        let bar = document.querySelector('main select').parentElement;
        while (bar && (parseFloat(getComputedStyle(bar).borderTopWidth) === 0 || bar.getBoundingClientRect().width < 600)) bar = bar.parentElement;
        const cards = [...document.querySelectorAll('a[href^="/catches/"]')].map((c) => c.getBoundingClientRect());
        const row = cards.filter((c) => Math.abs(c.y - cards[0].y) < 4);
        const b = bar.getBoundingClientRect();
        return { x: row[0].x, y: b.y, right: Math.max(...row.map((c) => c.right)), bottom: Math.max(...row.map((c) => c.bottom)) };
      });
      // Filter bar down to the end of the cards; at least as wide as the row,
      // kept 16:10.
      const height = Math.round(r.bottom - r.y + 24);
      const width = Math.max(Math.round((height * 16) / 10), Math.round(r.right - r.x + 24));
      await shoot('box-catches', { x: r.x - 12, y: r.y - 12, width, height: Math.round((width * 10) / 16) }, 1000);
    },
  ],
  [
    'box-tackle',
    async () => {
      // A line spool's page: type, diameter, breaking strength and the reel it
      // is on since when (the "history of every line spool" the card promises).
      await goto('/tackle?tab=lines');
      const href = await page.$$eval('main a[href^="/tackle/lines/"]', (as) =>
        as.map((a) => a.getAttribute('href')).find((h) => !h.endsWith('/new')),
      );
      if (!href) throw new Error('no line to open');
      await goto(href);
      const r = await page.evaluate(() => {
        // The bordered card around the line's name.
        let card = document.querySelector('main h1, main h2');
        while (card && parseFloat(getComputedStyle(card).borderTopWidth) === 0) card = card.parentElement;
        const b = card.getBoundingClientRect();
        // The demo is read-only: stop above the card's Edit action.
        const actions = [...card.querySelectorAll('a, button')].filter((el) => /edit|bearbeiten/i.test(el.textContent));
        const stop = actions.length ? Math.min(...actions.map((el) => el.getBoundingClientRect().top)) : b.bottom;
        return { x: b.x, y: b.y, w: b.width, stop };
      });
      // From the card's top down to just above Edit, 16:10, so the crop never
      // shows a write action. Narrower than the card if needed (content is left-aligned).
      const height = Math.round(r.stop - r.y + 4);
      const width = Math.min(Math.round(r.w + 24), Math.round((height * 16) / 10));
      await shoot('box-tackle', { x: r.x - 12, y: r.y - 12, width, height: Math.round((width * 10) / 16) }, 1000);
    },
  ],
];

// ONLY=hero,box-spots npm run screenshots  → re-capture just those.
const only = process.env.ONLY?.split(',').map((n) => n.trim());
const selected = only ? tasks.filter(([name]) => only.includes(name)) : tasks;

console.log(`Capturing from ${BASE} …`);
let ok = 0;
for (const [name, fn] of selected) {
  try {
    await fn();
    ok++;
  } catch (e) {
    console.warn(`  ⚠ skipped ${name}: ${e.message.split('\n')[0]}`);
  }
}

await browser.close();
console.log(`Done: ${ok}/${selected.length} captured. Skipped ones keep their previous file.`);

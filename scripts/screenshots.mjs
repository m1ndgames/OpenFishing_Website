// Capture screenshots from the live demo into public/screenshots/*.png.
// Resilient by design: any capture that fails is skipped (the landing page
// shows a themed placeholder tile for missing images), so the site build never
// depends on the demo being reachable. Run manually with: npm run screenshots
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'screenshots');
const BASE = process.env.DEMO_URL || 'https://demo.openfishing.org';
const VIEWPORT = { width: 1440, height: 900 };

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2 });
const page = await ctx.newPage();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function goto(path) {
  await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 });
  await sleep(800);
}

async function shoot(name) {
  // Capture at 2× for crispness, then downscale + compress to a web-sized JPEG
  // so the gallery/hero stay light (Lighthouse-friendly).
  const buf = await page.screenshot({ clip: { x: 0, y: 0, ...VIEWPORT } });
  await sharp(buf)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(OUT, `${name}.jpg`));
  console.log(`  ✓ ${name}.jpg`);
}

// Each task returns nothing; failures are caught and logged.
const tasks = [
  ['hero', async () => { await goto('/'); await shoot('hero'); }],
  ['lure-grid', async () => { await goto('/'); await shoot('lure-grid'); }],
  ['spot-map', async () => { await goto('/spots'); await sleep(2500); await shoot('spot-map'); }],
  ['stats', async () => { await goto('/stats'); await sleep(600); await shoot('stats'); }],
  [
    'catch-detail',
    async () => {
      await goto('/catches');
      // Try to open an individual catch (map + Bite Index); fall back to the list.
      const link = await page.$('a[href^="/catches/"], a[href*="/catches/"]');
      if (link) {
        await link.click();
        await page.waitForLoadState('networkidle');
        await sleep(2500);
      }
      await shoot('catch-detail');
    },
  ],
  [
    'chatbot',
    async () => {
      await goto('/');
      // The chatbot is a floating widget; only present if CHATBOT is enabled.
      const btn = await page.$(
        '[aria-label*="chat" i], [class*="chat" i] button, button[title*="chat" i]'
      );
      if (!btn) throw new Error('chatbot widget not present on demo');
      await btn.click();
      await sleep(1200);
      await shoot('chatbot');
    },
  ],
];

console.log(`Capturing from ${BASE} …`);
let ok = 0;
for (const [name, fn] of tasks) {
  try {
    await fn();
    ok++;
  } catch (e) {
    console.warn(`  ⚠ skipped ${name}: ${e.message.split('\n')[0]}`);
  }
}

await browser.close();
console.log(`Done: ${ok}/${tasks.length} captured. Missing ones show placeholders.`);

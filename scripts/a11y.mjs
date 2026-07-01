// Accessibility gate: serve the built site, run axe-core (WCAG 2 A/AA) against
// the landing page and a docs page in BOTH dark and light modes, and exit
// non-zero if any violations are found. Assumes `npm run build` already ran.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';

const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const axeSource = require('node:fs').readFileSync(axePath, 'utf8');

const BASE = 'http://localhost:4321';
const PATHS = [
  ['/', 'Landing'],
  ['/docs/getting-started/introduction/', 'Docs'],
];

// Start `astro preview`
const server = spawn('npm', ['run', 'preview'], { stdio: 'ignore', shell: true });

async function waitForServer(timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(BASE + '/');
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('preview server did not start in time');
}

let failures = 0;
try {
  await waitForServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  for (const [path, name] of PATHS) {
    for (const mode of ['dark', 'light']) {
      await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 30000 });
      if (mode === 'light') {
        await page.evaluate(() => {
          localStorage.setItem('of-theme', 'light');
          localStorage.setItem('starlight-theme', 'light');
        });
        await page.reload({ waitUntil: 'networkidle' });
      } else {
        await page.evaluate(() => {
          localStorage.removeItem('of-theme');
          localStorage.setItem('starlight-theme', 'dark');
        });
        await page.reload({ waitUntil: 'networkidle' });
      }
      await page.waitForTimeout(300);
      await page.addScriptTag({ content: axeSource });
      const { violations } = await page.evaluate(async () =>
        window.axe.run(document, {
          runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        })
      );
      const label = `${name} (${mode})`;
      if (violations.length) {
        failures += violations.length;
        console.error(`✗ ${label}: ${violations.length} violation(s)`);
        for (const v of violations) {
          console.error(`   [${v.impact}] ${v.id} — ${v.help} (${v.nodes.length} node(s))`);
          for (const n of v.nodes.slice(0, 5)) console.error(`      ${n.target.join(' ')}`);
        }
      } else {
        console.log(`✓ ${label}: no violations`);
      }
    }
  }
  await browser.close();
} finally {
  server.kill();
}

if (failures > 0) {
  console.error(`\nAccessibility check failed with ${failures} violation(s).`);
  process.exit(1);
}
console.log('\nAll accessibility checks passed.');

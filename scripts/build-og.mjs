// Rasterize a 1200×630 Open Graph card to public/og-image.png.
// The wordmark is embedded as vector paths (no font needed); only the tagline
// relies on a generic sans-serif, which resvg/sharp resolve on any system.
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const W = 1200;
const H = 630;
const ACCENT = '#22d3ee';

// Pull the wordmark's viewBox + inner markup, recolored to the accent.
const logoRaw = await readFile(join(root, 'src/assets/openfishing-logo.svg'), 'utf8');
const viewBox = (logoRaw.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 2970.466 1202.19';
const inner = logoRaw
  .replace(/^[\s\S]*?<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')
  .replace(/currentColor/g, ACCENT);

// Scale the wordmark to ~760px wide, centered a bit above middle.
const [, , vbW, vbH] = viewBox.split(/\s+/).map(Number);
const logoW = 760;
const logoH = (logoW * vbH) / vbW;
const logoX = (W - logoW) / 2;
const logoY = H / 2 - logoH / 2 - 34;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#060d17"/>
      <stop offset="1" stop-color="#0b1a2c"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="60%">
      <stop offset="0" stop-color="${ACCENT}" stop-opacity="0.16"/>
      <stop offset="1" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="6" y="6" width="${W - 12}" height="${H - 12}" rx="24" fill="none" stroke="${ACCENT}" stroke-opacity="0.22" stroke-width="2"/>
  <svg x="${logoX}" y="${logoY}" width="${logoW}" height="${logoH}" viewBox="${viewBox}">
    ${inner}
  </svg>
  <text x="${W / 2}" y="${logoY + logoH + 78}" text-anchor="middle"
        font-family="'DM Sans', Arial, sans-serif" font-size="34" fill="#8ab8cc" letter-spacing="0.5">
    Self-hosted fishing log · lures · spots · catches · tackle
  </text>
</svg>`;

await mkdir(join(root, 'public'), { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(join(root, 'public/og-image.png'));
console.log('✓ public/og-image.png (1200×630)');

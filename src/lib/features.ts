// Links, images and icons for the landing-page features. Text lives in
// src/i18n/ui.ts; each array's order MUST match its dictionary list.
import { SITE } from '../consts';

const icon = (paths: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

/** `features.core`: the four compartments. `demo` opens the matching demo page;
 *  `map` marks a screenshot with OpenStreetMap tiles (credited with `t.mapCredit`). */
export const coreMeta = [
  { demo: SITE.demo, img: 'box-lures' },
  { demo: `${SITE.demo}/spots`, img: 'box-spots', map: true },
  { demo: `${SITE.demo}/catches`, img: 'box-catches' },
  { demo: `${SITE.demo}/tackle`, img: 'box-tackle' },
];

/** `features.fishing` */
export const fishingMeta = [
  { href: '/docs/features/stats', icon: icon('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>') },
  { href: '/docs/ai/ai-features', icon: icon('<rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 7V4M9 13h.01M15 13h.01M2 12h2M20 12h2"/>') },
  { href: '/docs/features/share-links', icon: icon('<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8 15.8 7.2M8.2 13.2l7.6 3.6"/>') },
];

/** `features.server` */
export const serverMeta = [
  { href: '/docs/multi-user/authentication', icon: icon('<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"/>') },
  { href: '/docs/backup/backup-restore', icon: icon('<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v5h-5"/>') },
  { href: '/docs/api/rest-api', icon: icon('<path d="M8 6 3 12l5 6M16 6l5 6-5 6M13 4l-2 16"/>') },
];

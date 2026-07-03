// i18n helpers for the marketing landing page.
// The docs are handled by Starlight's own i18n; this module only serves the
// custom `.astro` landing components.

import { ui, defaultLang, languageCodes, type Lang } from './ui';

/** Narrow an arbitrary string to a supported Lang, falling back to the default. */
export function toLang(value: string | undefined): Lang {
  return (value && (languageCodes as string[]).includes(value) ? value : defaultLang) as Lang;
}

/** Derive the active language from a URL pathname (e.g. `/de/` -> `de`). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return toLang(seg);
}

/** Return the dictionary for a given language (falls back to default). */
export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}

/**
 * Build a locale-prefixed URL for an internal path.
 * Default locale (English) is served without a prefix; others under `/<lang>/`.
 *   localeUrl('en')            -> '/'
 *   localeUrl('de')            -> '/de/'
 *   localeUrl('en', '/docs/x') -> '/docs/x'
 *   localeUrl('de', '/docs/x') -> '/de/docs/x'
 */
export function localeUrl(lang: Lang, path = ''): string {
  const base = lang === defaultLang ? '' : `/${lang}`;
  if (!path) return `${base}/`;
  return base + (path.startsWith('/') ? path : `/${path}`);
}

/** Fill a `{label}`-style placeholder in a template string. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
}

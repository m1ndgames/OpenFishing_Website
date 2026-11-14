// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// Sidebar label helper: English `label` with per-locale `translations`
// (keyed by the locale keys configured in Starlight `locales`).
/**
 * @param {string} label
 * @param {Record<string, string>} translations
 */
const L = (label, translations) => ({ label, translations });

// Docs entry points that have no page of their own: /docs, each section root
// and the retired Quick Start page redirect to a real page, in every locale.
const DOC_LOCALES = ['', '/de', '/fr', '/es', '/it', '/nl', '/pl', '/pt', '/uk'];
/** @type {Record<string, string>} */
const DOC_TARGETS = {
  '': 'getting-started/introduction',
  'getting-started': 'getting-started/introduction',
  'getting-started/quick-start': 'getting-started/installation',
  configuration: 'configuration/environment-variables',
  features: 'features/lures',
  'multi-user': 'multi-user/authentication',
  ai: 'ai/ai-features',
  api: 'api/rest-api',
  backup: 'backup/backup-restore',
  demo: 'demo/demo-mode',
  help: 'help/faq',
};
/** @type {Record<string, string>} */
const docRedirects = {};
for (const lang of DOC_LOCALES) {
  for (const [from, to] of Object.entries(DOC_TARGETS)) {
    docRedirects[`${lang}/docs${from ? `/${from}` : ''}`] = `${lang}/docs/${to}`;
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://openfishing.org',
  output: 'static',
  redirects: docRedirects,
  // Tailwind v4 is wired through the Vite plugin. It only applies to
  // stylesheets that `@import "tailwindcss"`, so it never touches Starlight.
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'OpenFishing',
      description:
        'Documentation for OpenFishing, the self-hosted fishing log for lures, spots, catches & tackle.',
      // Wordmark logo — explicit cyan variants per theme (currentColor can't be
      // tinted inside Starlight's <img>).
      logo: {
        light: './src/assets/openfishing-logo-light.svg',
        dark: './src/assets/openfishing-logo-dark.svg',
        alt: 'OpenFishing',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      // Docs are localized into the same 9 languages as the app. English is the
      // root locale (served at /docs/**); the rest live under /<lang>/docs/**.
      // Providing `locales` here also drives Astro's global i18n config, which is
      // what powers the custom marketing landing page's locale routing.
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        de: { label: 'Deutsch', lang: 'de' },
        fr: { label: 'Français', lang: 'fr' },
        es: { label: 'Español', lang: 'es' },
        it: { label: 'Italiano', lang: 'it' },
        nl: { label: 'Nederlands', lang: 'nl' },
        pl: { label: 'Polski', lang: 'pl' },
        pt: { label: 'Português', lang: 'pt' },
        uk: { label: 'Українська', lang: 'uk' },
      },
      customCss: ['./src/styles/fonts.css', './src/styles/starlight.css'],
      // Code panels as in DESIGN.md: Night Water surface, 1px Rope Line border,
      // 14px window radius, Raised Water title bars, JetBrains Mono 0.82rem / 1.7.
      expressiveCode: {
        // Long commands wrap on phones instead of scrolling sideways.
        defaultProps: { wrap: true, preserveIndent: true },
        // Starlight reads the locale from the file URL, which resolves to English
        // for every page here, so the copy button's tooltip stayed English. Take
        // it from the content path instead (src/content/docs/<lang>/docs/...).
        getBlockLocale: ({ file }) => {
          const m = (file.path ?? '').replace(/\\/g, '/').match(/\/content\/docs\/([a-z]{2})\/docs\//);
          return m ? m[1] : 'en';
        },
        styleOverrides: {
          borderRadius: '14px',
          borderColor: 'var(--sl-color-hairline-shade)',
          codeBackground: 'var(--sl-color-bg-nav)',
          codeFontFamily: "'JetBrains Mono', ui-monospace, monospace",
          codeFontSize: '0.82rem',
          codeLineHeight: '1.7',
          uiFontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif",
          frames: {
            editorTabBarBackground: 'var(--sl-color-gray-7)',
            editorActiveTabBackground: 'var(--sl-color-bg-nav)',
            editorActiveTabIndicatorTopColor: 'var(--sl-color-accent)',
            editorTabBarBorderBottomColor: 'var(--sl-color-hairline-shade)',
            terminalTitlebarBackground: 'var(--sl-color-gray-7)',
            terminalTitlebarBorderBottomColor: 'var(--sl-color-hairline-shade)',
            terminalBackground: 'var(--sl-color-bg-nav)',
            frameBoxShadowCssValue: 'none',
          },
        },
      },
      head: [
        // Default the docs to dark (ocean brand) when the visitor hasn't picked
        // a theme yet. Runs before Starlight's own theme script.
        {
          tag: 'script',
          content:
            "try{if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','dark');document.documentElement.dataset.theme='dark';}}catch(e){}",
        },
        // Fonts are self-hosted (src/styles/fonts.css via customCss), as in the app.
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: '/fonts/dm-sans-latin-opsz-normal.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: true,
          },
        },
        // Open Graph fallback for docs pages
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://openfishing.org/og-image.png' } },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/m1ndgames/OpenFishing',
        },
      ],
      // All docs live under src/content/docs/docs/** so they resolve to /docs/**,
      // leaving `/` free for the custom marketing landing page.
      // Four groups: start, the angler's features, the operator's server, help.
      // Angler and operator topics never share a group.
      sidebar: [
        {
          ...L('Getting Started', { de: 'Erste Schritte', fr: 'Prise en main', es: 'Primeros pasos', it: 'Per iniziare', nl: 'Aan de slag', pl: 'Pierwsze kroki', pt: 'Primeiros passos', uk: 'Початок роботи' }),
          items: [
            { slug: 'docs/getting-started/introduction', ...L('Introduction', { de: 'Einführung', fr: 'Introduction', es: 'Introducción', it: 'Introduzione', nl: 'Introductie', pl: 'Wprowadzenie', pt: 'Introdução', uk: 'Вступ' }) },
            { slug: 'docs/getting-started/installation', ...L('Installation', { de: 'Installation', fr: 'Installation', es: 'Instalación', it: 'Installazione', nl: 'Installatie', pl: 'Instalacja', pt: 'Instalação', uk: 'Встановлення' }) },
          ],
        },
        {
          ...L('Using OpenFishing', { de: 'OpenFishing nutzen', fr: 'Utiliser OpenFishing', es: 'Usar OpenFishing', it: 'Usare OpenFishing', nl: 'OpenFishing gebruiken', pl: 'Korzystanie z OpenFishing', pt: 'Usar o OpenFishing', uk: 'Користування OpenFishing' }),
          items: [
            {
              ...L('Your collection', { de: 'Deine Sammlung', fr: 'Votre collection', es: 'Tu colección', it: 'La tua collezione', nl: 'Je verzameling', pl: 'Twoja kolekcja', pt: 'A tua coleção', uk: 'Ваша колекція' }),
              items: [
                { slug: 'docs/features/lures', ...L('Lures', { de: 'Köderbox', fr: 'Leurres', es: 'Señuelos', it: 'Esche', nl: 'Aasbox', pl: 'Przynęty', pt: 'Iscas', uk: 'Приманки' }) },
                { slug: 'docs/features/spots', ...L('Spots', { de: 'Angelkarte', fr: 'Spots', es: 'Puntos', it: 'Spot', nl: 'Spots', pl: 'Łowiska', pt: 'Locais', uk: 'Місця' }) },
                { slug: 'docs/features/catches', ...L('Catches', { de: 'Fangbuch', fr: 'Prises', es: 'Capturas', it: 'Catture', nl: 'Vangsten', pl: 'Połowy', pt: 'Capturas', uk: 'Улови' }) },
                { slug: 'docs/features/tackle', ...L('Tackle', { de: 'Ausrüstung', fr: 'Matériel', es: 'Equipo', it: 'Attrezzatura', nl: 'Uitrusting', pl: 'Sprzęt', pt: 'Equipamento', uk: 'Спорядження' }) },
              ],
            },
            {
              ...L('Insights', { de: 'Auswertung', fr: 'Analyses', es: 'Análisis', it: 'Analisi', nl: 'Inzichten', pl: 'Analizy', pt: 'Análises', uk: 'Аналітика' }),
              items: [
                { slug: 'docs/features/bite-index', ...L('Bite Index', { de: 'Beissindex', fr: 'Indice de morsure', es: 'Índice de picada', it: 'Indice di abboccata', nl: 'Bijt-index', pl: 'Indeks brania', pt: 'Índice de mordida', uk: 'Індекс клювання' }) },
                { slug: 'docs/features/stats', ...L('Stats', { de: 'Statistik', fr: 'Statistiques', es: 'Estadísticas', it: 'Statistiche', nl: 'Statistieken', pl: 'Statystyki', pt: 'Estatísticas', uk: 'Статистика' }) },
              ],
            },
            {
              ...L('Sharing', { de: 'Teilen', fr: 'Partage', es: 'Compartir', it: 'Condivisione', nl: 'Delen', pl: 'Udostępnianie', pt: 'Partilha', uk: 'Поширення' }),
              items: [
                { slug: 'docs/features/qr-labels', ...L('QR labels', { de: 'QR-Etiketten', fr: 'Étiquettes QR', es: 'Etiquetas QR', it: 'Etichette QR', nl: 'QR-labels', pl: 'Etykiety QR', pt: 'Etiquetas QR', uk: 'QR-мітки' }) },
                { slug: 'docs/features/share-links', ...L('Share links', { de: 'Freigabelinks', fr: 'Liens de partage', es: 'Enlaces para compartir', it: 'Link di condivisione', nl: 'Deellinks', pl: 'Linki udostępniania', pt: 'Links de partilha', uk: 'Посилання для поширення' }) },
              ],
            },
            {
              ...L('Options', { de: 'Optionen', fr: 'Options', es: 'Opciones', it: 'Opzioni', nl: 'Opties', pl: 'Opcje', pt: 'Opções', uk: 'Опції' }),
              items: [
                { slug: 'docs/features/themes', ...L('Themes & appearance', { de: 'Themes & Darstellung', fr: 'Thèmes & apparence', es: 'Temas y apariencia', it: 'Temi e aspetto', nl: "Thema's & uiterlijk", pl: 'Motywy i wygląd', pt: 'Temas e aparência', uk: 'Теми та вигляд' }) },
                { slug: 'docs/features/languages', ...L('Languages', { de: 'Sprachen', fr: 'Langues', es: 'Idiomas', it: 'Lingue', nl: 'Talen', pl: 'Języki', pt: 'Idiomas', uk: 'Мови' }) },
              ],
            },
          ],
        },
        {
          ...L('Running your server', { de: 'Deinen Server betreiben', fr: 'Gérer votre serveur', es: 'Gestionar tu servidor', it: 'Gestire il tuo server', nl: 'Je server beheren', pl: 'Prowadzenie serwera', pt: 'Gerir o teu servidor', uk: 'Керування сервером' }),
          items: [
            { slug: 'docs/configuration/environment-variables', ...L('Environment variables', { de: 'Umgebungsvariablen', fr: "Variables d'environnement", es: 'Variables de entorno', it: "Variabili d'ambiente", nl: 'Omgevingsvariabelen', pl: 'Zmienne środowiskowe', pt: 'Variáveis de ambiente', uk: 'Змінні середовища' }) },
            { slug: 'docs/multi-user/authentication', ...L('Multi-user & authentication', { de: 'Mehrbenutzer & Authentifizierung', fr: 'Multi-utilisateur & authentification', es: 'Multiusuario y autenticación', it: 'Multiutente e autenticazione', nl: 'Multi-user & authenticatie', pl: 'Wielu użytkowników i uwierzytelnianie', pt: 'Multiutilizador e autenticação', uk: 'Багатокористувацький режим і автентифікація' }) },
            { slug: 'docs/ai/ai-features', ...L('AI features', { de: 'KI-Funktionen', fr: "Fonctions d'IA", es: 'Funciones de IA', it: 'Funzioni di IA', nl: 'AI-functies', pl: 'Funkcje AI', pt: 'Funcionalidades de IA', uk: 'Функції ШІ' }) },
            { slug: 'docs/backup/backup-restore', ...L('Backup & restore', { de: 'Sicherung & Wiederherstellung', fr: 'Sauvegarde & restauration', es: 'Copia de seguridad y restauración', it: 'Backup e ripristino', nl: 'Back-up & herstel', pl: 'Kopia zapasowa i przywracanie', pt: 'Backup e restauro', uk: 'Резервне копіювання та відновлення' }) },
            { slug: 'docs/api/rest-api', label: 'REST API' },
            { slug: 'docs/demo/demo-mode', ...L('Demo mode', { de: 'Demo-Modus', fr: 'Mode démo', es: 'Modo demo', it: 'Modalità demo', nl: 'Demomodus', pl: 'Tryb demonstracyjny', pt: 'Modo demo', uk: 'Демо-режим' }) },
          ],
        },
        {
          ...L('Help', { de: 'Hilfe', fr: 'Aide', es: 'Ayuda', it: 'Aiuto', nl: 'Help', pl: 'Pomoc', pt: 'Ajuda', uk: 'Довідка' }),
          items: [
            { slug: 'docs/help/faq', ...L('FAQ & troubleshooting', { de: 'FAQ & Fehlerbehebung', fr: 'FAQ & dépannage', es: 'FAQ y solución de problemas', it: 'FAQ e risoluzione dei problemi', nl: 'FAQ & probleemoplossing', pl: 'FAQ i rozwiązywanie problemów', pt: 'FAQ e resolução de problemas', uk: 'FAQ і усунення несправностей' }) },
          ],
        },
      ],
    }),
    // Emit <xhtml:link rel="alternate" hreflang> annotations in the sitemap so
    // search engines connect each page to its translations. Root URLs (no prefix)
    // are grouped as the `en` default locale; the rest by their /<lang>/ segment.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de',
          fr: 'fr',
          es: 'es',
          it: 'it',
          nl: 'nl',
          pl: 'pl',
          pt: 'pt',
          uk: 'uk',
        },
      },
    }),
  ],
});

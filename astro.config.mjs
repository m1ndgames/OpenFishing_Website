// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://openfishing.org',
  output: 'static',
  // Tailwind v4 is wired through the Vite plugin. It only applies to
  // stylesheets that `@import "tailwindcss"`, so it never touches Starlight.
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'OpenFishing',
      description:
        'Documentation for OpenFishing — the self-hosted fishing log for lures, spots, catches & tackle.',
      // Wordmark logo — explicit cyan variants per theme (currentColor can't be
      // tinted inside Starlight's <img>).
      logo: {
        light: './src/assets/openfishing-logo-light.svg',
        dark: './src/assets/openfishing-logo-dark.svg',
        alt: 'OpenFishing',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/starlight.css'],
      head: [
        // Default the docs to dark (ocean brand) when the visitor hasn't picked
        // a theme yet. Runs before Starlight's own theme script.
        {
          tag: 'script',
          content:
            "try{if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','dark');document.documentElement.dataset.theme='dark';}}catch(e){}",
        },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Carter+One&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap',
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
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs/getting-started/introduction' },
            { label: 'Quick Start', slug: 'docs/getting-started/quick-start' },
            { label: 'Installation (docker-compose)', slug: 'docs/getting-started/installation' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            { label: 'Environment variables', slug: 'docs/configuration/environment-variables' },
          ],
        },
        {
          label: 'Features',
          items: [
            { label: 'Lures', slug: 'docs/features/lures' },
            { label: 'Spots', slug: 'docs/features/spots' },
            { label: 'Catches', slug: 'docs/features/catches' },
            { label: 'Bite Index', slug: 'docs/features/bite-index' },
            { label: 'Tackle', slug: 'docs/features/tackle' },
            { label: 'Stats', slug: 'docs/features/stats' },
            { label: 'QR labels', slug: 'docs/features/qr-labels' },
            { label: 'Share links', slug: 'docs/features/share-links' },
            { label: 'Themes & appearance', slug: 'docs/features/themes' },
            { label: 'Languages (i18n)', slug: 'docs/features/languages' },
          ],
        },
        {
          label: 'Multi-user & Auth',
          items: [{ label: 'Multi-user & authentication', slug: 'docs/multi-user/authentication' }],
        },
        {
          label: 'AI features',
          items: [{ label: 'AI features', slug: 'docs/ai/ai-features' }],
        },
        {
          label: 'REST API',
          items: [{ label: 'REST API', slug: 'docs/api/rest-api' }],
        },
        {
          label: 'Backup & restore',
          items: [{ label: 'Backup & restore', slug: 'docs/backup/backup-restore' }],
        },
        {
          label: 'Demo mode',
          items: [{ label: 'Demo mode', slug: 'docs/demo/demo-mode' }],
        },
        {
          label: 'Help',
          items: [{ label: 'FAQ / Troubleshooting', slug: 'docs/help/faq' }],
        },
      ],
    }),
    sitemap(),
  ],
});

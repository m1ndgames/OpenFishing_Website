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
          ...L('Getting Started', { de: 'Erste Schritte', fr: 'Prise en main', es: 'Primeros pasos', it: 'Per iniziare', nl: 'Aan de slag', pl: 'Pierwsze kroki', pt: 'Primeiros passos', uk: 'Початок роботи' }),
          items: [
            { slug: 'docs/getting-started/introduction', ...L('Introduction', { de: 'Einführung', fr: 'Introduction', es: 'Introducción', it: 'Introduzione', nl: 'Introductie', pl: 'Wprowadzenie', pt: 'Introdução', uk: 'Вступ' }) },
            { slug: 'docs/getting-started/quick-start', ...L('Quick Start', { de: 'Schnellstart', fr: 'Démarrage rapide', es: 'Inicio rápido', it: 'Avvio rapido', nl: 'Snelstart', pl: 'Szybki start', pt: 'Início rápido', uk: 'Швидкий старт' }) },
            { slug: 'docs/getting-started/installation', ...L('Installation (docker-compose)', { de: 'Installation (docker-compose)', fr: 'Installation (docker-compose)', es: 'Instalación (docker-compose)', it: 'Installazione (docker-compose)', nl: 'Installatie (docker-compose)', pl: 'Instalacja (docker-compose)', pt: 'Instalação (docker-compose)', uk: 'Встановлення (docker-compose)' }) },
          ],
        },
        {
          ...L('Configuration', { de: 'Konfiguration', fr: 'Configuration', es: 'Configuración', it: 'Configurazione', nl: 'Configuratie', pl: 'Konfiguracja', pt: 'Configuração', uk: 'Налаштування' }),
          items: [
            { slug: 'docs/configuration/environment-variables', ...L('Environment variables', { de: 'Umgebungsvariablen', fr: "Variables d'environnement", es: 'Variables de entorno', it: "Variabili d'ambiente", nl: 'Omgevingsvariabelen', pl: 'Zmienne środowiskowe', pt: 'Variáveis de ambiente', uk: 'Змінні середовища' }) },
          ],
        },
        {
          ...L('Features', { de: 'Funktionen', fr: 'Fonctionnalités', es: 'Funciones', it: 'Funzionalità', nl: 'Functies', pl: 'Funkcje', pt: 'Funcionalidades', uk: 'Функції' }),
          items: [
            { slug: 'docs/features/lures', ...L('Lures', { de: 'Köder', fr: 'Leurres', es: 'Señuelos', it: 'Esche', nl: 'Kunstaas', pl: 'Przynęty', pt: 'Iscas', uk: 'Приманки' }) },
            { slug: 'docs/features/spots', ...L('Spots', { de: 'Angelstellen', fr: 'Spots', es: 'Puntos', it: 'Spot', nl: 'Stekken', pl: 'Łowiska', pt: 'Pontos', uk: 'Місця' }) },
            { slug: 'docs/features/catches', ...L('Catches', { de: 'Fänge', fr: 'Prises', es: 'Capturas', it: 'Catture', nl: 'Vangsten', pl: 'Połowy', pt: 'Capturas', uk: 'Улови' }) },
            { slug: 'docs/features/bite-index', ...L('Bite Index', { de: 'Bissindex', fr: 'Indice de touche', es: 'Índice de picada', it: 'Indice di abboccata', nl: 'Beetindex', pl: 'Indeks brań', pt: 'Índice de fisgada', uk: 'Індекс клювання' }) },
            { slug: 'docs/features/tackle', ...L('Tackle', { de: 'Ausrüstung', fr: 'Matériel', es: 'Aparejos', it: 'Attrezzatura', nl: 'Uitrusting', pl: 'Sprzęt', pt: 'Equipamento', uk: 'Спорядження' }) },
            { slug: 'docs/features/stats', ...L('Stats', { de: 'Statistiken', fr: 'Statistiques', es: 'Estadísticas', it: 'Statistiche', nl: 'Statistieken', pl: 'Statystyki', pt: 'Estatísticas', uk: 'Статистика' }) },
            { slug: 'docs/features/qr-labels', ...L('QR labels', { de: 'QR-Etiketten', fr: 'Étiquettes QR', es: 'Etiquetas QR', it: 'Etichette QR', nl: 'QR-labels', pl: 'Etykiety QR', pt: 'Etiquetas QR', uk: 'QR-мітки' }) },
            { slug: 'docs/features/share-links', ...L('Share links', { de: 'Freigabelinks', fr: 'Liens de partage', es: 'Enlaces para compartir', it: 'Link di condivisione', nl: 'Deellinks', pl: 'Linki udostępniania', pt: 'Links de partilha', uk: 'Посилання для поширення' }) },
            { slug: 'docs/features/themes', ...L('Themes & appearance', { de: 'Themes & Darstellung', fr: 'Thèmes & apparence', es: 'Temas y apariencia', it: 'Temi e aspetto', nl: "Thema's & uiterlijk", pl: 'Motywy i wygląd', pt: 'Temas e aparência', uk: 'Теми та вигляд' }) },
            { slug: 'docs/features/languages', ...L('Languages (i18n)', { de: 'Sprachen (i18n)', fr: 'Langues (i18n)', es: 'Idiomas (i18n)', it: 'Lingue (i18n)', nl: 'Talen (i18n)', pl: 'Języki (i18n)', pt: 'Idiomas (i18n)', uk: 'Мови (i18n)' }) },
          ],
        },
        {
          ...L('Multi-user & Auth', { de: 'Mehrbenutzer & Auth', fr: 'Multi-utilisateur & auth', es: 'Multiusuario y auth', it: 'Multiutente e auth', nl: 'Multi-user & auth', pl: 'Wielu użytkowników i auth', pt: 'Multiusuário e auth', uk: 'Багатокористувацький режим' }),
          items: [{ slug: 'docs/multi-user/authentication', ...L('Multi-user & authentication', { de: 'Mehrbenutzer & Authentifizierung', fr: 'Multi-utilisateur & authentification', es: 'Multiusuario y autenticación', it: 'Multiutente e autenticazione', nl: 'Multi-user & authenticatie', pl: 'Wielu użytkowników i uwierzytelnianie', pt: 'Multiusuário e autenticação', uk: 'Багатокористувацький режим і автентифікація' }) }],
        },
        {
          ...L('AI features', { de: 'KI-Funktionen', fr: "Fonctions d'IA", es: 'Funciones de IA', it: 'Funzioni di IA', nl: 'AI-functies', pl: 'Funkcje AI', pt: 'Funcionalidades de IA', uk: 'Функції ШІ' }),
          items: [{ slug: 'docs/ai/ai-features', ...L('AI features', { de: 'KI-Funktionen', fr: "Fonctions d'IA", es: 'Funciones de IA', it: 'Funzioni di IA', nl: 'AI-functies', pl: 'Funkcje AI', pt: 'Funcionalidades de IA', uk: 'Функції ШІ' }) }],
        },
        {
          label: 'REST API',
          items: [{ slug: 'docs/api/rest-api', label: 'REST API' }],
        },
        {
          ...L('Backup & restore', { de: 'Sicherung & Wiederherstellung', fr: 'Sauvegarde & restauration', es: 'Copia de seguridad y restauración', it: 'Backup e ripristino', nl: 'Back-up & herstel', pl: 'Kopia zapasowa i przywracanie', pt: 'Backup e restauração', uk: 'Резервне копіювання та відновлення' }),
          items: [{ slug: 'docs/backup/backup-restore', ...L('Backup & restore', { de: 'Sicherung & Wiederherstellung', fr: 'Sauvegarde & restauration', es: 'Copia de seguridad y restauración', it: 'Backup e ripristino', nl: 'Back-up & herstel', pl: 'Kopia zapasowa i przywracanie', pt: 'Backup e restauração', uk: 'Резервне копіювання та відновлення' }) }],
        },
        {
          ...L('Demo mode', { de: 'Demo-Modus', fr: 'Mode démo', es: 'Modo demo', it: 'Modalità demo', nl: 'Demomodus', pl: 'Tryb demonstracyjny', pt: 'Modo demo', uk: 'Демо-режим' }),
          items: [{ slug: 'docs/demo/demo-mode', ...L('Demo mode', { de: 'Demo-Modus', fr: 'Mode démo', es: 'Modo demo', it: 'Modalità demo', nl: 'Demomodus', pl: 'Tryb demonstracyjny', pt: 'Modo demo', uk: 'Демо-режим' }) }],
        },
        {
          ...L('Help', { de: 'Hilfe', fr: 'Aide', es: 'Ayuda', it: 'Aiuto', nl: 'Help', pl: 'Pomoc', pt: 'Ajuda', uk: 'Довідка' }),
          items: [{ slug: 'docs/help/faq', ...L('FAQ / Troubleshooting', { de: 'FAQ / Fehlerbehebung', fr: 'FAQ / Dépannage', es: 'FAQ / Solución de problemas', it: 'FAQ / Risoluzione dei problemi', nl: 'FAQ / Probleemoplossing', pl: 'FAQ / Rozwiązywanie problemów', pt: 'FAQ / Resolução de problemas', uk: 'FAQ / Усунення несправностей' }) }],
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

// Landing-page translation dictionaries for the 9 languages the app supports.
// English (`en`) is the source of truth and the default/root locale.
// Structured lists (features, footer columns) are stored as arrays
// and zipped by index with the icons/links kept in their components.

export const languages = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
  pt: 'Português',
  uk: 'Українська',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';
export const languageCodes = Object.keys(languages) as Lang[];

export interface FeatureText {
  title: string;
  desc: string;
  badge?: string;
}
export interface FooterCol {
  title: string;
  links: string[];
}

export interface Dict {
  meta: { title: string; description: string };
  hero: {
    titleLine1: string;
    titleAccent: string;
    sub: string;
    ctaDemo: string;
    ctaInstall: string;
    /** Shown under the demo button wherever it appears. */
    demoNote: string;
    /** The three promises, stated once, under the CTAs. */
    facts: string[];
    shotAlt: string;
  };
  /** `core` = the four compartments; `fishing` / `server` = the grouped extras; `extras` fills `{languages}`. */
  features: {
    heading: string;
    core: FeatureText[];
    fishingHeading: string;
    fishing: FeatureText[];
    serverHeading: string;
    server: FeatureText[];
    extras: string;
  };
  demo: { heading: string; text: string };
  qs: {
    heading: string;
    /** Label above the prerequisites checklist. */
    needs: string;
    /** The three prerequisites (machine, Docker, CPU architecture). */
    reqs: string[];
    /** Where the data lives, after the checklist. */
    stays: string;
    /** Reassurance line just above the installation-guide link. */
    newToDocker: string;
    /** `{url}` is replaced by the local address. */
    afterRun: string;
    /** Small label above the install heading (the second act). */
    kicker: string;
    docs: string;
    /** Link to the source repository. */
    source: string;
    terminal: string;
    copy: string;
    copied: string;
    copyAria: string;
    copyFailed: string;
  };
  github: string;
  /** Screen-reader hint appended to links that open a new tab. */
  newTab: string;
  themeToggle: string;
  /** Keyboard skip link to the main content. */
  skip: string;
  /** Credit shown on screenshots that contain OpenStreetMap tiles. */
  mapCredit: string;
  footer: { blurb: string; cols: FooterCol[]; rights: string };
  lang: { switch: string };
}

export const ui: Record<Lang, Dict> = {
  en: {
    meta: {
      title: 'OpenFishing — Your tackle box, organized.',
      description:
        'OpenFishing is a self-hosted, privacy-first fishing log for anglers — organize your lures, mark spots on a map, log catches, and track your tackle. Open source, cloud-free, one Docker image.',
    },
    hero: {
      titleLine1: 'Your tackle box,',
      titleAccent: 'organized.',
      sub: 'A fishing log for your lures, spots, catches and tackle that runs on your own server. Your spots stay yours.',
      ctaDemo: 'Try the live demo',
      ctaInstall: 'How to install',
      demoNote: 'No signup · read-only sample data',
      facts: [
        'Free & open source',
        'Runs on your NAS or home server',
        'No cloud, no account, no telemetry',
      ],
      shotAlt: 'A catch in OpenFishing: a perch on the measuring mat with its length, the lure that caught it, the Bite Index and the spot on the map',
    },
    features: {
      heading: "What's in the box",
      core: [
        { title: 'Lure library', desc: 'Every lure gets a number, a photo and a printable QR label. Mark favourites, log lost lures and see what each one caught.' },
        { title: 'Fishing spots', desc: 'Pin your spots on a map with GPS and photos. They stay on your server.' },
        { title: 'Catch log', desc: 'Species, length, weight, place and the lure that did it. Each catch gets a Bite Index: a score from 0 to 10 for how good the weather was for fishing.' },
        { title: 'Tackle box', desc: 'Rods, reels, lines and combos, with the full history of every line spool.' },
      ],
      fishingHeading: 'For your fishing',
      fishing: [
        { title: 'Stats & insights', desc: 'Personal bests, top lures and trends over time.' },
        { title: 'AI assistant', badge: 'optional', desc: 'Ask about your log or identify a fish from a photo. Uses your own AI provider; your keys stay on your server.' },
        { title: 'Share links', desc: 'A read-only page for any lure, spot or catch.' },
      ],
      serverHeading: 'For your server',
      server: [
        { title: 'Multi-user mode', badge: 'optional', desc: 'Host friends and family, each with a private log.' },
        { title: 'Backup & restore', desc: 'One-click ZIP export and import.' },
        { title: 'REST API', desc: 'Read-only JSON API for your own scripts.' },
      ],
      extras: 'Available in: {languages}. Dark, light or follows your system.',
    },
    demo: { heading: 'Take it for a cast.', text: "Open a lure, follow it to the fish it caught and the spot where it bit. It's all sample data, so click anything." },
    qs: {
      heading: 'Up and running in one command.',
      kicker: 'Ready to host it?',
      needs: 'You need:',
      reqs: [
        'A computer that stays on, such as a NAS, a mini PC or a home server',
        'Docker installed on it',
        'A 64-bit Intel or AMD processor (amd64)',
      ],
      stays: 'Everything you log stays on that machine: one SQLite database and your photos, in the two volumes the command creates. Back those up and you have it all.',
      newToDocker: 'New to Docker? The installation guide walks you through it.',
      afterRun: 'Then open {url} in your browser.',
      docs: 'Installation guide with docker-compose',
      source: 'Source code on GitHub (AGPL-3.0)',
      terminal: 'Terminal',
      copy: 'Copy',
      copied: 'Copied!',
      copyAria: 'Copy command',
      copyFailed: "Couldn't copy. The command is selected, so copy it by hand.",
    },
    footer: {
      blurb: 'A fishing log that lives on your own server. Free and open source.',
      cols: [
        { title: 'Product', links: ['Features', 'Live demo', 'Documentation'] },
        { title: 'Docs', links: ['Installation', 'Environment variables', 'REST API', 'FAQ & troubleshooting'] },
        { title: 'Project', links: ['GitHub', 'Issues', 'License (AGPL)'] },
      ],
      rights: 'Released under the AGPL-3.0 license.',
    },
    github: 'View on GitHub',
    newTab: '(opens in a new tab)',
    themeToggle: 'Switch light/dark theme',
    skip: 'Skip to content',
    mapCredit: 'Map © OpenStreetMap contributors',
    lang: { switch: 'Change language' },
  },

  de: {
    meta: {
      title: 'OpenFishing — Deine Angelbox, organisiert.',
      description:
        'OpenFishing ist ein selbst gehostetes, datenschutzfreundliches Angeltagebuch für Angler — verwalte deine Köder, markiere Angelstellen auf einer Karte, protokolliere Fänge und behalte deine Ausrüstung im Blick. Open Source, cloud-frei, ein einziges Docker-Image.',
    },
    hero: {
      titleLine1: 'Deine Angelbox,',
      titleAccent: 'organisiert.',
      sub: 'Ein Angeltagebuch für deine Köder, Angelstellen, Fänge und Ausrüstung, das auf deinem eigenen Server läuft. Deine Stellen bleiben deine.',
      ctaDemo: 'Live-Demo ausprobieren',
      ctaInstall: 'Zur Installation',
      demoNote: 'Ohne Anmeldung · nur lesbare Beispieldaten',
      facts: [
        'Kostenlos & Open Source',
        'Läuft auf deinem NAS oder Homeserver',
        'Keine Cloud, kein Konto, keine Telemetrie',
      ],
      shotAlt: 'Ein Fang in OpenFishing: ein Barsch auf der Messmatte mit Länge, dem fängigen Köder, dem Beissindex und der Stelle auf der Karte',
    },
    features: {
      heading: 'Was in der Box steckt',
      core: [
        { title: 'Köderbibliothek', desc: 'Jeder Köder bekommt eine Nummer, ein Foto und ein druckbares QR-Etikett. Markiere Favoriten, erfasse verlorene Köder und sieh, was jeder gefangen hat.' },
        { title: 'Angelstellen', desc: 'Markiere deine Stellen mit GPS und Fotos auf einer Karte. Sie bleiben auf deinem Server.' },
        { title: 'Fangbuch', desc: 'Art, Länge, Gewicht, Ort und der fängige Köder. Jeder Fang bekommt einen Beissindex: eine Wertung von 0 bis 10, wie gut das Wetter zum Angeln war.' },
        { title: 'Ausrüstung', desc: 'Ruten, Rollen, Schnüre und Combos, mit der kompletten Historie jeder Schnurspule.' },
      ],
      fishingHeading: 'Fürs Angeln',
      fishing: [
        { title: 'Statistiken & Einblicke', desc: 'Persönliche Bestleistungen, Top-Köder und Trends über die Zeit.' },
        { title: 'KI-Assistent', badge: 'optional', desc: 'Frag dein Tagebuch oder bestimme einen Fisch per Foto. Nutzt deinen eigenen KI-Anbieter; deine Schlüssel bleiben auf deinem Server.' },
        { title: 'Freigabelinks', desc: 'Eine schreibgeschützte Seite für jeden Köder, jede Stelle, jeden Fang.' },
      ],
      serverHeading: 'Für deinen Server',
      server: [
        { title: 'Mehrbenutzer-Modus', badge: 'optional', desc: 'Hoste Freunde und Familie, jeder mit eigenem privatem Tagebuch.' },
        { title: 'Sicherung & Wiederherstellung', desc: 'ZIP-Export und -Import mit einem Klick.' },
        { title: 'REST-API', desc: 'Schreibgeschützte JSON-API für deine eigenen Skripte.' },
      ],
      extras: 'Verfügbar in: {languages}. Dunkel, hell oder wie dein System.',
    },
    demo: { heading: 'Wirf die Angel aus.', text: 'Öffne einen Köder, folge ihm zum gefangenen Fisch und zur Stelle, an der er gebissen hat. Alles Beispieldaten, also klick dich ruhig durch.' },
    qs: {
      heading: 'In einem einzigen Befehl einsatzbereit.',
      kicker: 'Bereit, es selbst zu hosten?',
      needs: 'Du brauchst:',
      reqs: [
        'Einen Rechner, der dauerhaft läuft, etwa ein NAS, einen Mini-PC oder einen Homeserver',
        'Docker darauf installiert',
        'Einen 64-Bit-Prozessor von Intel oder AMD (amd64)',
      ],
      stays: 'Alles, was du einträgst, bleibt auf diesem Rechner: eine SQLite-Datenbank und deine Fotos, in den zwei Volumes, die der Befehl anlegt. Sicherst du die, hast du alles.',
      newToDocker: 'Neu bei Docker? Die Installationsanleitung führt dich Schritt für Schritt.',
      afterRun: 'Dann öffne {url} im Browser.',
      docs: 'Installationsanleitung mit docker-compose',
      source: 'Quellcode auf GitHub (AGPL-3.0)',
      terminal: 'Terminal',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      copyAria: 'Befehl kopieren',
      copyFailed: 'Kopieren fehlgeschlagen. Der Befehl ist markiert, kopiere ihn von Hand.',
    },
    footer: {
      blurb: 'Ein Angeltagebuch, das auf deinem eigenen Server lebt. Kostenlos und Open Source.',
      cols: [
        { title: 'Produkt', links: ['Funktionen', 'Live-Demo', 'Dokumentation'] },
        { title: 'Doku', links: ['Installation', 'Umgebungsvariablen', 'REST-API', 'FAQ & Fehlerbehebung'] },
        { title: 'Projekt', links: ['GitHub', 'Issues', 'Lizenz (AGPL)'] },
      ],
      rights: 'Veröffentlicht unter der AGPL-3.0-Lizenz.',
    },
    github: 'Auf GitHub ansehen',
    newTab: '(öffnet in neuem Tab)',
    themeToggle: 'Hell/Dunkel umschalten',
    skip: 'Zum Inhalt springen',
    mapCredit: 'Karte © OpenStreetMap-Mitwirkende',
    lang: { switch: 'Sprache ändern' },
  },

  fr: {
    meta: {
      title: 'OpenFishing — Votre boîte à pêche, organisée.',
      description:
        "OpenFishing est un carnet de pêche auto-hébergé et respectueux de la vie privée pour les pêcheurs — organisez vos leurres, marquez vos spots sur une carte, enregistrez vos prises et suivez votre matériel. Open source, sans cloud, une seule image Docker.",
    },
    hero: {
      titleLine1: 'Votre boîte à pêche,',
      titleAccent: 'organisée.',
      sub: 'Un carnet de pêche pour vos leurres, spots, prises et matériel, hébergé sur votre propre serveur. Vos spots restent les vôtres.',
      ctaDemo: 'Essayer la démo en ligne',
      ctaInstall: 'Comment installer',
      demoNote: "Sans inscription · données d'exemple en lecture seule",
      facts: [
        'Gratuit et open source',
        'Tourne sur votre NAS ou serveur domestique',
        'Pas de cloud, pas de compte, pas de télémétrie',
      ],
      shotAlt: "Une prise dans OpenFishing : une perche sur le tapis de mesure avec sa taille, le leurre qui l'a prise, l'indice de morsure et le coin sur la carte",
    },
    features: {
      heading: "Ce qu'il y a dans la boîte",
      core: [
        { title: 'Bibliothèque de leurres', desc: 'Chaque leurre reçoit un numéro, une photo et une étiquette QR imprimable. Marquez vos favoris, notez les leurres perdus et voyez ce que chacun a pris.' },
        { title: 'Spots de pêche', desc: 'Placez vos spots sur une carte avec GPS et photos. Ils restent sur votre serveur.' },
        { title: 'Carnet de prises', desc: 'Espèce, taille, poids, lieu et leurre utilisé. Chaque prise reçoit un indice de morsure : une note de 0 à 10 qui dit si la météo était favorable à la pêche.' },
        { title: 'Matériel', desc: "Cannes, moulinets, lignes et ensembles, avec l'historique complet de chaque bobine." },
      ],
      fishingHeading: 'Pour votre pêche',
      fishing: [
        { title: 'Statistiques et analyses', desc: 'Records personnels, meilleurs leurres et tendances dans le temps.' },
        { title: 'Assistant IA', badge: 'optionnel', desc: "Interrogez votre carnet ou identifiez un poisson sur photo. Utilise votre propre fournisseur d'IA ; vos clés restent sur votre serveur." },
        { title: 'Liens de partage', desc: "Une page en lecture seule pour n'importe quel leurre, spot ou prise." },
      ],
      serverHeading: 'Pour votre serveur',
      server: [
        { title: 'Mode multi-utilisateur', badge: 'optionnel', desc: 'Hébergez amis et famille, chacun avec son carnet privé.' },
        { title: 'Sauvegarde et restauration', desc: 'Export et import ZIP en un clic.' },
        { title: 'API REST', desc: 'API JSON en lecture seule pour vos propres scripts.' },
      ],
      extras: 'Disponible en : {languages}. Sombre, clair ou selon votre système.',
    },
    demo: { heading: 'Lancez votre ligne.', text: "Ouvrez un leurre, suivez-le jusqu'au poisson qu'il a pris et au spot où il a mordu. Ce sont des données d'exemple : cliquez partout." },
    qs: {
      heading: 'Opérationnel en une seule commande.',
      kicker: "Prêt à l'héberger ?",
      needs: 'Il vous faut :',
      reqs: [
        'Un ordinateur allumé en permanence, comme un NAS, un mini-PC ou un serveur domestique',
        'Docker installé dessus',
        'Un processeur 64 bits Intel ou AMD (amd64)',
      ],
      stays: 'Tout ce que vous enregistrez reste sur cette machine : une base SQLite et vos photos, dans les deux volumes créés par la commande. Sauvegardez-les et vous avez tout.',
      newToDocker: "Débutant avec Docker ? Le guide d'installation vous accompagne pas à pas.",
      afterRun: 'Ouvrez ensuite {url} dans votre navigateur.',
      docs: "Guide d'installation avec docker-compose",
      source: 'Code source sur GitHub (AGPL-3.0)',
      terminal: 'Terminal',
      copy: 'Copier',
      copied: 'Copié !',
      copyAria: 'Copier la commande',
      copyFailed: 'Échec de la copie. La commande est sélectionnée, copiez-la manuellement.',
    },
    footer: {
      blurb: 'Un carnet de pêche qui vit sur votre propre serveur. Gratuit et open source.',
      cols: [
        { title: 'Produit', links: ['Fonctionnalités', 'Démo en ligne', 'Documentation'] },
        { title: 'Documentation', links: ['Installation', "Variables d'environnement", 'API REST', 'FAQ & dépannage'] },
        { title: 'Projet', links: ['GitHub', 'Tickets', 'Licence (AGPL)'] },
      ],
      rights: 'Distribué sous licence AGPL-3.0.',
    },
    github: 'Voir sur GitHub',
    newTab: "(s'ouvre dans un nouvel onglet)",
    themeToggle: 'Basculer le thème clair/sombre',
    skip: 'Aller au contenu',
    mapCredit: 'Carte © contributeurs d’OpenStreetMap',
    lang: { switch: 'Changer de langue' },
  },

  es: {
    meta: {
      title: 'OpenFishing — Tu caja de pesca, organizada.',
      description:
        'OpenFishing es un diario de pesca autoalojado y centrado en la privacidad para pescadores: organiza tus señuelos, marca puntos en un mapa, registra capturas y controla tus aparejos. Código abierto, sin nube, una sola imagen de Docker.',
    },
    hero: {
      titleLine1: 'Tu caja de pesca,',
      titleAccent: 'organizada.',
      sub: 'Un diario de pesca para tus señuelos, puntos, capturas y aparejos que funciona en tu propio servidor. Tus puntos siguen siendo tuyos.',
      ctaDemo: 'Probar la demo en vivo',
      ctaInstall: 'Cómo instalarlo',
      demoNote: 'Sin registro · datos de ejemplo de solo lectura',
      facts: [
        'Gratis y de código abierto',
        'Funciona en tu NAS o servidor doméstico',
        'Sin nube, sin cuenta, sin telemetría',
      ],
      shotAlt: 'Una captura en OpenFishing: una perca sobre la regla de medir con su longitud, el señuelo que la pescó, el Índice de picada y el lugar en el mapa',
    },
    features: {
      heading: 'Qué hay en la caja',
      core: [
        { title: 'Biblioteca de señuelos', desc: 'Cada señuelo recibe un número, una foto y una etiqueta QR imprimible. Marca favoritos, registra los perdidos y mira qué ha pescado cada uno.' },
        { title: 'Puntos de pesca', desc: 'Marca tus puntos en un mapa con GPS y fotos. Se quedan en tu servidor.' },
        { title: 'Registro de capturas', desc: 'Especie, longitud, peso, lugar y señuelo usado. Cada captura recibe un Índice de picada: una nota de 0 a 10 según lo favorable que era el tiempo para pescar.' },
        { title: 'Aparejos', desc: 'Cañas, carretes, líneas y equipos, con el historial completo de cada bobina.' },
      ],
      fishingHeading: 'Para tu pesca',
      fishing: [
        { title: 'Estadísticas e información', desc: 'Récords personales, mejores señuelos y tendencias a lo largo del tiempo.' },
        { title: 'Asistente de IA', badge: 'opcional', desc: 'Pregunta por tu diario o identifica un pez con una foto. Usa tu propio proveedor de IA; tus claves se quedan en tu servidor.' },
        { title: 'Enlaces para compartir', desc: 'Una página de solo lectura para cualquier señuelo, punto o captura.' },
      ],
      serverHeading: 'Para tu servidor',
      server: [
        { title: 'Modo multiusuario', badge: 'opcional', desc: 'Aloja a amigos y familia, cada uno con su diario privado.' },
        { title: 'Copia de seguridad y restauración', desc: 'Exportación e importación ZIP con un clic.' },
        { title: 'API REST', desc: 'API JSON de solo lectura para tus propios scripts.' },
      ],
      extras: 'Disponible en: {languages}. Oscuro, claro o según tu sistema.',
    },
    demo: { heading: 'Lánzate a probarlo.', text: 'Abre un señuelo, síguelo hasta el pez que pescó y el punto donde picó. Son datos de ejemplo, así que pulsa lo que quieras.' },
    qs: {
      heading: 'En marcha con un solo comando.',
      kicker: '¿Listo para alojarlo?',
      needs: 'Necesitas:',
      reqs: [
        'Un equipo que esté siempre encendido, como un NAS, un mini PC o un servidor doméstico',
        'Docker instalado en él',
        'Un procesador de 64 bits Intel o AMD (amd64)',
      ],
      stays: 'Todo lo que registres se queda en ese equipo: una base de datos SQLite y tus fotos, en los dos volúmenes que crea el comando. Haz copia de ellos y lo tienes todo.',
      newToDocker: '¿Nuevo en Docker? La guía de instalación te acompaña paso a paso.',
      afterRun: 'Después abre {url} en tu navegador.',
      docs: 'Guía de instalación con docker-compose',
      source: 'Código fuente en GitHub (AGPL-3.0)',
      terminal: 'Terminal',
      copy: 'Copiar',
      copied: '¡Copiado!',
      copyAria: 'Copiar comando',
      copyFailed: 'No se pudo copiar. El comando está seleccionado; cópialo a mano.',
    },
    footer: {
      blurb: 'Un diario de pesca que vive en tu propio servidor. Gratis y de código abierto.',
      cols: [
        { title: 'Producto', links: ['Funciones', 'Demo en vivo', 'Documentación'] },
        { title: 'Documentación', links: ['Instalación', 'Variables de entorno', 'API REST', 'FAQ y solución de problemas'] },
        { title: 'Proyecto', links: ['GitHub', 'Incidencias', 'Licencia (AGPL)'] },
      ],
      rights: 'Publicado bajo la licencia AGPL-3.0.',
    },
    github: 'Ver en GitHub',
    newTab: '(se abre en una pestaña nueva)',
    themeToggle: 'Cambiar tema claro/oscuro',
    skip: 'Saltar al contenido',
    mapCredit: 'Mapa © colaboradores de OpenStreetMap',
    lang: { switch: 'Cambiar idioma' },
  },

  it: {
    meta: {
      title: 'OpenFishing — La tua cassetta da pesca, organizzata.',
      description:
        "OpenFishing è un diario di pesca self-hosted e attento alla privacy per i pescatori: organizza le tue esche, segna gli spot su una mappa, registra le catture e tieni traccia dell'attrezzatura. Open source, senza cloud, una sola immagine Docker.",
    },
    hero: {
      titleLine1: 'La tua cassetta da pesca,',
      titleAccent: 'organizzata.',
      sub: 'Un diario di pesca per le tue esche, spot, catture e attrezzatura che gira sul tuo server. I tuoi spot restano tuoi.',
      ctaDemo: 'Prova la demo dal vivo',
      ctaInstall: 'Come installarlo',
      demoNote: 'Senza registrazione · dati di esempio in sola lettura',
      facts: [
        'Gratuito e open source',
        'Gira sul tuo NAS o server di casa',
        'Niente cloud, niente account, niente telemetria',
      ],
      shotAlt: "Una cattura in OpenFishing: un persico sul tappetino di misura con la lunghezza, l'esca che l'ha preso, l'Indice di abboccata e il posto sulla mappa",
    },
    features: {
      heading: "Cosa c'è nella cassetta",
      core: [
        { title: 'Libreria di esche', desc: "Ogni esca ha un numero, una foto e un'etichetta QR stampabile. Segna le preferite, registra quelle perse e guarda cosa ha catturato ognuna." },
        { title: 'Spot di pesca', desc: 'Segna i tuoi spot su una mappa con GPS e foto. Restano sul tuo server.' },
        { title: 'Registro catture', desc: 'Specie, lunghezza, peso, luogo ed esca usata. Ogni cattura riceve un Indice di abboccata: un punteggio da 0 a 10 su quanto il meteo era favorevole alla pesca.' },
        { title: 'Attrezzatura', desc: 'Canne, mulinelli, fili e combo, con lo storico completo di ogni bobina.' },
      ],
      fishingHeading: 'Per la tua pesca',
      fishing: [
        { title: 'Statistiche e approfondimenti', desc: 'Record personali, esche migliori e tendenze nel tempo.' },
        { title: 'Assistente IA', badge: 'opzionale', desc: 'Fai domande sul tuo diario o identifica un pesce da una foto. Usa il tuo fornitore di IA; le chiavi restano sul tuo server.' },
        { title: 'Link di condivisione', desc: 'Una pagina in sola lettura per qualsiasi esca, spot o cattura.' },
      ],
      serverHeading: 'Per il tuo server',
      server: [
        { title: 'Modalità multiutente', badge: 'opzionale', desc: 'Ospita amici e famiglia, ognuno con il proprio diario privato.' },
        { title: 'Backup e ripristino', desc: 'Esportazione e importazione ZIP con un clic.' },
        { title: 'API REST', desc: 'API JSON in sola lettura per i tuoi script.' },
      ],
      extras: 'Disponibile in: {languages}. Scuro, chiaro o come il tuo sistema.',
    },
    demo: { heading: 'Provalo subito.', text: "Apri un'esca, seguila fino al pesce che ha catturato e allo spot dove ha abboccato. Sono dati di esempio: clicca dove vuoi." },
    qs: {
      heading: 'Operativo con un solo comando.',
      kicker: 'Pronto a ospitarlo?',
      needs: 'Ti serve:',
      reqs: [
        'Un computer sempre acceso, come un NAS, un mini PC o un server di casa',
        'Docker installato',
        'Un processore a 64 bit Intel o AMD (amd64)',
      ],
      stays: 'Tutto ciò che registri resta su quel computer: un database SQLite e le tue foto, nei due volumi creati dal comando. Fai il backup di quelli e hai tutto.',
      newToDocker: "Nuovo a Docker? La guida all'installazione ti accompagna passo passo.",
      afterRun: 'Poi apri {url} nel browser.',
      docs: "Guida all'installazione con docker-compose",
      source: 'Codice sorgente su GitHub (AGPL-3.0)',
      terminal: 'Terminale',
      copy: 'Copia',
      copied: 'Copiato!',
      copyAria: 'Copia comando',
      copyFailed: 'Copia non riuscita. Il comando è selezionato: copialo a mano.',
    },
    footer: {
      blurb: 'Un diario di pesca che vive sul tuo server. Gratuito e open source.',
      cols: [
        { title: 'Prodotto', links: ['Funzionalità', 'Demo dal vivo', 'Documentazione'] },
        { title: 'Documentazione', links: ['Installazione', "Variabili d'ambiente", 'API REST', 'FAQ e risoluzione dei problemi'] },
        { title: 'Progetto', links: ['GitHub', 'Issue', 'Licenza (AGPL)'] },
      ],
      rights: 'Distribuito sotto licenza AGPL-3.0.',
    },
    github: 'Vedi su GitHub',
    newTab: '(si apre in una nuova scheda)',
    themeToggle: 'Cambia tema chiaro/scuro',
    skip: 'Vai al contenuto',
    mapCredit: 'Mappa © collaboratori di OpenStreetMap',
    lang: { switch: 'Cambia lingua' },
  },

  nl: {
    meta: {
      title: 'OpenFishing — Jouw viskoffer, georganiseerd.',
      description:
        'OpenFishing is een zelf-gehost, privacyvriendelijk vislogboek voor vissers — organiseer je kunstaas, markeer stekken op een kaart, leg vangsten vast en houd je uitrusting bij. Open source, cloudvrij, één Docker-image.',
    },
    hero: {
      titleLine1: 'Jouw viskoffer,',
      titleAccent: 'georganiseerd.',
      sub: 'Een vislogboek voor je kunstaas, stekken, vangsten en uitrusting dat op je eigen server draait. Je stekken blijven van jou.',
      ctaDemo: 'Probeer de live demo',
      ctaInstall: 'Zo installeer je het',
      demoNote: 'Zonder aanmelding · alleen-lezen voorbeelddata',
      facts: [
        'Gratis en open source',
        'Draait op je NAS of thuisserver',
        'Geen cloud, geen account, geen telemetrie',
      ],
      shotAlt: 'Een vangst in OpenFishing: een baars op de meetmat met de lengte, het aas waarmee hij gevangen is, de Bijt-index en de plek op de kaart',
    },
    features: {
      heading: 'Wat zit er in de koffer',
      core: [
        { title: 'Kunstaasbibliotheek', desc: 'Elk kunstaas krijgt een nummer, een foto en een printbaar QR-label. Markeer favorieten, houd verloren aas bij en zie wat elk aas heeft gevangen.' },
        { title: 'Visstekken', desc: "Zet je stekken op een kaart met GPS en foto's. Ze blijven op je eigen server." },
        { title: 'Vangstlogboek', desc: 'Soort, lengte, gewicht, plek en het gebruikte aas. Elke vangst krijgt een Bijt-index: een score van 0 tot 10 voor hoe gunstig het weer was om te vissen.' },
        { title: 'Uitrusting', desc: "Hengels, molens, lijnen en combo's, met de volledige geschiedenis van elke spoel." },
      ],
      fishingHeading: 'Voor het vissen',
      fishing: [
        { title: 'Statistieken en inzichten', desc: 'Persoonlijke records, beste kunstaas en trends door de tijd.' },
        { title: 'AI-assistent', badge: 'optioneel', desc: 'Stel vragen over je logboek of herken een vis op een foto. Gebruikt je eigen AI-aanbieder; je sleutels blijven op je server.' },
        { title: 'Deellinks', desc: 'Een alleen-lezen pagina voor elk kunstaas, elke stek of vangst.' },
      ],
      serverHeading: 'Voor je server',
      server: [
        { title: 'Multi-usermodus', badge: 'optioneel', desc: 'Host vrienden en familie, elk met een eigen privélogboek.' },
        { title: 'Back-up en herstel', desc: 'ZIP-export en -import met één klik.' },
        { title: 'REST-API', desc: 'Alleen-lezen JSON-API voor je eigen scripts.' },
      ],
      extras: 'Beschikbaar in: {languages}. Donker, licht of volgens je systeem.',
    },
    demo: { heading: 'Gooi je hengel uit.', text: 'Open een kunstaas, volg het naar de vis die het ving en de stek waar hij beet. Het is allemaal voorbeelddata, dus klik gerust overal op.' },
    qs: {
      heading: 'Draaiend met één commando.',
      kicker: 'Klaar om het zelf te hosten?',
      needs: 'Je hebt nodig:',
      reqs: [
        'Een computer die altijd aan staat, zoals een NAS, een mini-pc of een thuisserver',
        'Docker daarop geïnstalleerd',
        'Een 64-bit processor van Intel of AMD (amd64)',
      ],
      stays: 'Alles wat je vastlegt, blijft op die computer: één SQLite-database en je foto’s, in de twee volumes die het commando aanmaakt. Maak daar een back-up van en je hebt alles.',
      newToDocker: 'Nieuw met Docker? De installatiegids helpt je stap voor stap.',
      afterRun: 'Open daarna {url} in je browser.',
      docs: 'Installatiegids met docker-compose',
      source: 'Broncode op GitHub (AGPL-3.0)',
      terminal: 'Terminal',
      copy: 'Kopiëren',
      copied: 'Gekopieerd!',
      copyAria: 'Commando kopiëren',
      copyFailed: 'Kopiëren mislukt. De opdracht is geselecteerd; kopieer hem handmatig.',
    },
    footer: {
      blurb: 'Een vislogboek dat op je eigen server woont. Gratis en open source.',
      cols: [
        { title: 'Product', links: ['Functies', 'Live demo', 'Documentatie'] },
        { title: 'Documentatie', links: ['Installatie', 'Omgevingsvariabelen', 'REST-API', 'FAQ & probleemoplossing'] },
        { title: 'Project', links: ['GitHub', 'Issues', 'Licentie (AGPL)'] },
      ],
      rights: 'Uitgebracht onder de AGPL-3.0-licentie.',
    },
    github: 'Bekijk op GitHub',
    newTab: '(opent in een nieuw tabblad)',
    themeToggle: 'Licht/donker thema wisselen',
    skip: 'Naar de inhoud',
    mapCredit: 'Kaart © OpenStreetMap-bijdragers',
    lang: { switch: 'Taal wijzigen' },
  },

  pl: {
    meta: {
      title: 'OpenFishing — Twoja skrzynka wędkarska, uporządkowana.',
      description:
        'OpenFishing to samodzielnie hostowany, dbający o prywatność dziennik wędkarski dla wędkarzy — organizuj przynęty, oznaczaj łowiska na mapie, zapisuj połowy i śledź swój sprzęt. Otwarte źródło, bez chmury, jeden obraz Dockera.',
    },
    hero: {
      titleLine1: 'Twoja skrzynka wędkarska,',
      titleAccent: 'uporządkowana.',
      sub: 'Dziennik wędkarski na przynęty, łowiska, połowy i sprzęt, który działa na Twoim własnym serwerze. Twoje łowiska zostają Twoje.',
      ctaDemo: 'Wypróbuj demo na żywo',
      ctaInstall: 'Jak zainstalować',
      demoNote: 'Bez rejestracji · przykładowe dane tylko do odczytu',
      facts: [
        'Darmowy i open source',
        'Działa na Twoim NAS-ie lub serwerze domowym',
        'Bez chmury, bez konta, bez telemetrii',
      ],
      shotAlt: 'Połów w OpenFishing: okoń na macie do mierzenia z długością, przynętą, na którą go złowiono, Indeksem brania i miejscem na mapie',
    },
    features: {
      heading: 'Co jest w skrzynce',
      core: [
        { title: 'Biblioteka przynęt', desc: 'Każda przynęta dostaje numer, zdjęcie i etykietę QR do druku. Oznaczaj ulubione, zapisuj zgubione i sprawdzaj, co złowiła każda z nich.' },
        { title: 'Łowiska', desc: 'Zaznaczaj łowiska na mapie z GPS i zdjęciami. Zostają na Twoim serwerze.' },
        { title: 'Dziennik połowów', desc: 'Gatunek, długość, waga, miejsce i użyta przynęta. Każdy połów dostaje Indeks brania: ocenę od 0 do 10, jak sprzyjająca wędkowaniu była pogoda.' },
        { title: 'Sprzęt', desc: 'Wędki, kołowrotki, żyłki i zestawy, z pełną historią każdej szpuli.' },
      ],
      fishingHeading: 'Do wędkowania',
      fishing: [
        { title: 'Statystyki i analizy', desc: 'Rekordy osobiste, najlepsze przynęty i trendy w czasie.' },
        { title: 'Asystent AI', badge: 'opcjonalnie', desc: 'Pytaj o swój dziennik lub rozpoznaj rybę ze zdjęcia. Korzysta z Twojego własnego dostawcy AI; klucze zostają na Twoim serwerze.' },
        { title: 'Linki udostępniania', desc: 'Strona tylko do odczytu dla dowolnej przynęty, łowiska lub połowu.' },
      ],
      serverHeading: 'Dla Twojego serwera',
      server: [
        { title: 'Tryb wielu użytkowników', badge: 'opcjonalnie', desc: 'Hostuj znajomych i rodzinę, każdy z własnym prywatnym dziennikiem.' },
        { title: 'Kopia zapasowa i przywracanie', desc: 'Eksport i import ZIP jednym kliknięciem.' },
        { title: 'API REST', desc: 'API JSON tylko do odczytu dla Twoich własnych skryptów.' },
      ],
      extras: 'Dostępny w językach: {languages}. Ciemny, jasny lub zgodny z systemem.',
    },
    demo: { heading: 'Zarzuć wędkę.', text: 'Otwórz przynętę, przejdź do ryby, którą złowiła, i do łowiska, gdzie było branie. To przykładowe dane, więc klikaj śmiało.' },
    qs: {
      heading: 'Gotowe do działania jedną komendą.',
      kicker: 'Gotowy, by hostować go u siebie?',
      needs: 'Potrzebujesz:',
      reqs: [
        'Komputera, który stale działa, np. NAS-a, mini PC lub serwera domowego',
        'Zainstalowanego na nim Dockera',
        '64-bitowego procesora Intel lub AMD (amd64)',
      ],
      stays: 'Wszystko, co zapiszesz, zostaje na tym komputerze: jedna baza SQLite i Twoje zdjęcia, w dwóch wolumenach tworzonych przez polecenie. Zrób ich kopię i masz wszystko.',
      newToDocker: 'Nie znasz Dockera? Instrukcja instalacji poprowadzi Cię krok po kroku.',
      afterRun: 'Następnie otwórz {url} w przeglądarce.',
      docs: 'Instrukcja instalacji z docker-compose',
      source: 'Kod źródłowy na GitHubie (AGPL-3.0)',
      terminal: 'Terminal',
      copy: 'Kopiuj',
      copied: 'Skopiowano!',
      copyAria: 'Kopiuj komendę',
      copyFailed: 'Nie udało się skopiować. Polecenie jest zaznaczone, skopiuj je ręcznie.',
    },
    footer: {
      blurb: 'Dziennik wędkarski, który działa na Twoim własnym serwerze. Darmowy i open source.',
      cols: [
        { title: 'Produkt', links: ['Funkcje', 'Demo na żywo', 'Dokumentacja'] },
        { title: 'Dokumentacja', links: ['Instalacja', 'Zmienne środowiskowe', 'API REST', 'FAQ i rozwiązywanie problemów'] },
        { title: 'Projekt', links: ['GitHub', 'Zgłoszenia', 'Licencja (AGPL)'] },
      ],
      rights: 'Wydane na licencji AGPL-3.0.',
    },
    github: 'Zobacz na GitHubie',
    newTab: '(otwiera się w nowej karcie)',
    themeToggle: 'Przełącz motyw jasny/ciemny',
    skip: 'Przejdź do treści',
    mapCredit: 'Mapa © współtwórcy OpenStreetMap',
    lang: { switch: 'Zmień język' },
  },

  pt: {
    meta: {
      title: 'OpenFishing — A tua caixa de pesca, organizada.',
      description:
        'O OpenFishing é um diário de pesca auto-hospedado e focado na privacidade para pescadores — organiza as tuas iscas, marca pontos num mapa, regista capturas e acompanha o teu equipamento. Código aberto, sem nuvem, uma única imagem Docker.',
    },
    hero: {
      titleLine1: 'A tua caixa de pesca,',
      titleAccent: 'organizada.',
      sub: 'Um diário de pesca para as tuas iscas, pontos, capturas e equipamento que corre no teu próprio servidor. Os teus pontos continuam teus.',
      ctaDemo: 'Experimentar a demo ao vivo',
      ctaInstall: 'Como instalar',
      demoNote: 'Sem registo · dados de exemplo só de leitura',
      facts: [
        'Gratuito e open source',
        'Corre no teu NAS ou servidor doméstico',
        'Sem nuvem, sem conta, sem telemetria',
      ],
      shotAlt: 'Uma captura no OpenFishing: uma perca no tapete de medição com o comprimento, a isca que a apanhou, o Índice de mordida e o local no mapa',
    },
    features: {
      heading: 'O que há na caixa',
      core: [
        { title: 'Biblioteca de iscas', desc: 'Cada isca recebe um número, uma foto e uma etiqueta QR imprimível. Marca favoritas, regista as perdidas e vê o que cada uma apanhou.' },
        { title: 'Pontos de pesca', desc: 'Marca os teus pontos num mapa com GPS e fotos. Ficam no teu servidor.' },
        { title: 'Registo de capturas', desc: 'Espécie, comprimento, peso, local e isca usada. Cada captura recebe um Índice de mordida: uma nota de 0 a 10 sobre quão favorável estava o tempo para pescar.' },
        { title: 'Equipamento', desc: 'Canas, carretos, linhas e conjuntos, com o histórico completo de cada bobina.' },
      ],
      fishingHeading: 'Para a tua pesca',
      fishing: [
        { title: 'Estatísticas e análises', desc: 'Recordes pessoais, melhores iscas e tendências ao longo do tempo.' },
        { title: 'Assistente de IA', badge: 'opcional', desc: 'Faz perguntas sobre o teu diário ou identifica um peixe numa foto. Usa o teu próprio fornecedor de IA; as chaves ficam no teu servidor.' },
        { title: 'Ligações de partilha', desc: 'Uma página só de leitura para qualquer isca, ponto ou captura.' },
      ],
      serverHeading: 'Para o teu servidor',
      server: [
        { title: 'Modo multiutilizador', badge: 'opcional', desc: 'Aloja amigos e família, cada um com o seu diário privado.' },
        { title: 'Backup e restauro', desc: 'Exportação e importação ZIP com um clique.' },
        { title: 'API REST', desc: 'API JSON só de leitura para os teus próprios scripts.' },
      ],
      extras: 'Disponível em: {languages}. Escuro, claro ou conforme o sistema.',
    },
    demo: { heading: 'Lança a tua linha.', text: 'Abre uma isca, segue-a até ao peixe que apanhou e ao ponto onde picou. São dados de exemplo, por isso clica à vontade.' },
    qs: {
      heading: 'A funcionar com um único comando.',
      kicker: 'Pronto para o alojar?',
      needs: 'Precisas de:',
      reqs: [
        'Um computador sempre ligado, como um NAS, um mini PC ou um servidor doméstico',
        'O Docker instalado nele',
        'Um processador de 64 bits Intel ou AMD (amd64)',
      ],
      stays: 'Tudo o que registares fica nesse computador: uma base de dados SQLite e as tuas fotos, nos dois volumes que o comando cria. Faz cópia deles e tens tudo.',
      newToDocker: 'Novo no Docker? O guia de instalação acompanha-te passo a passo.',
      afterRun: 'Depois abre {url} no navegador.',
      docs: 'Guia de instalação com docker-compose',
      source: 'Código-fonte no GitHub (AGPL-3.0)',
      terminal: 'Terminal',
      copy: 'Copiar',
      copied: 'Copiado!',
      copyAria: 'Copiar comando',
      copyFailed: 'Não foi possível copiar. O comando está selecionado; copia-o à mão.',
    },
    footer: {
      blurb: 'Um diário de pesca que vive no teu próprio servidor. Gratuito e open source.',
      cols: [
        { title: 'Produto', links: ['Funcionalidades', 'Demo ao vivo', 'Documentação'] },
        { title: 'Documentação', links: ['Instalação', 'Variáveis de ambiente', 'API REST', 'FAQ e resolução de problemas'] },
        { title: 'Projeto', links: ['GitHub', 'Problemas', 'Licença (AGPL)'] },
      ],
      rights: 'Distribuído sob a licença AGPL-3.0.',
    },
    github: 'Ver no GitHub',
    newTab: '(abre num novo separador)',
    themeToggle: 'Alternar tema claro/escuro',
    skip: 'Saltar para o conteúdo',
    mapCredit: 'Mapa © contribuidores do OpenStreetMap',
    lang: { switch: 'Mudar idioma' },
  },

  uk: {
    meta: {
      title: 'OpenFishing — Ваша скринька для снастей, впорядкована.',
      description:
        'OpenFishing — це самостійно розміщуваний журнал рибалки з пріоритетом приватності: упорядковуйте приманки, позначайте місця на карті, записуйте улови та відстежуйте своє спорядження. Відкритий код, без хмари, один образ Docker.',
    },
    hero: {
      titleLine1: 'Ваша скринька для снастей,',
      titleAccent: 'впорядкована.',
      sub: 'Журнал рибалки для ваших приманок, місць, уловів і спорядження, що працює на вашому власному сервері. Ваші місця залишаються вашими.',
      ctaDemo: 'Спробувати демо наживо',
      ctaInstall: 'Як встановити',
      demoNote: 'Без реєстрації · демодані лише для читання',
      facts: [
        'Безкоштовно й з відкритим кодом',
        'Працює на вашому NAS чи домашньому сервері',
        'Без хмари, без облікового запису, без телеметрії',
      ],
      shotAlt: 'Улов в OpenFishing: окунь на мірному килимку з довжиною, приманкою, на яку його спіймано, Індексом клювання та місцем на карті',
    },
    features: {
      heading: 'Що в скриньці',
      core: [
        { title: 'Бібліотека приманок', desc: 'Кожна приманка отримує номер, фото й QR-етикетку для друку. Позначайте улюблені, записуйте загублені й дивіться, що впіймала кожна.' },
        { title: 'Рибні місця', desc: 'Позначайте місця на карті з GPS і фото. Вони залишаються на вашому сервері.' },
        { title: 'Журнал уловів', desc: 'Вид, довжина, вага, місце й приманка. Кожен улов отримує Індекс клювання: оцінку від 0 до 10, наскільки погода сприяла риболовлі.' },
        { title: 'Спорядження', desc: 'Вудлища, котушки, волосіні й комплекти з повною історією кожної шпулі.' },
      ],
      fishingHeading: 'Для рибалки',
      fishing: [
        { title: 'Статистика й аналітика', desc: 'Особисті рекорди, найкращі приманки й тенденції з часом.' },
        { title: 'ШІ-помічник', badge: 'опційно', desc: 'Запитуйте про свій журнал або визначайте рибу за фото. Використовує вашого власного ШІ-провайдера; ключі залишаються на вашому сервері.' },
        { title: 'Посилання для поширення', desc: 'Сторінка лише для читання для будь-якої приманки, місця чи улову.' },
      ],
      serverHeading: 'Для вашого сервера',
      server: [
        { title: 'Багатокористувацький режим', badge: 'опційно', desc: 'Приймайте друзів і родину, кожен зі своїм приватним журналом.' },
        { title: 'Резервне копіювання та відновлення', desc: 'Експорт та імпорт ZIP одним кліком.' },
        { title: 'REST API', desc: 'JSON API лише для читання для ваших власних скриптів.' },
      ],
      extras: 'Доступно мовами: {languages}. Темна, світла або як у системі.',
    },
    demo: { heading: 'Закиньте вудку.', text: 'Відкрийте приманку, перейдіть до риби, яку вона впіймала, і до місця, де клюнуло. Це демодані, тож клацайте сміливо.' },
    qs: {
      heading: 'Готово до роботи однією командою.',
      kicker: 'Готові розмістити у себе?',
      needs: 'Вам потрібні:',
      reqs: [
        "Комп'ютер, що працює постійно, як-от NAS, міні-ПК чи домашній сервер",
        'Встановлений на ньому Docker',
        '64-бітний процесор Intel або AMD (amd64)',
      ],
      stays: "Усе, що ви записуєте, залишається на цьому комп'ютері: одна база даних SQLite і ваші фото, у двох томах, які створює команда. Зробіть їх резервну копію, і у вас буде все.",
      newToDocker: 'Вперше з Docker? Посібник зі встановлення проведе вас крок за кроком.',
      afterRun: 'Потім відкрийте {url} у браузері.',
      docs: 'Посібник зі встановлення з docker-compose',
      source: 'Вихідний код на GitHub (AGPL-3.0)',
      terminal: 'Термінал',
      copy: 'Копіювати',
      copied: 'Скопійовано!',
      copyAria: 'Копіювати команду',
      copyFailed: 'Не вдалося скопіювати. Команду виділено, скопіюйте її вручну.',
    },
    footer: {
      blurb: 'Журнал рибалки, що живе на вашому власному сервері. Безкоштовний і з відкритим кодом.',
      cols: [
        { title: 'Продукт', links: ['Функції', 'Демо наживо', 'Документація'] },
        { title: 'Документація', links: ['Встановлення', 'Змінні середовища', 'REST API', 'FAQ і усунення несправностей'] },
        { title: 'Проєкт', links: ['GitHub', 'Питання', 'Ліцензія (AGPL)'] },
      ],
      rights: 'Випущено за ліцензією AGPL-3.0.',
    },
    github: 'Переглянути на GitHub',
    newTab: '(відкривається в новій вкладці)',
    themeToggle: 'Перемкнути світлу/темну тему',
    skip: 'Перейти до вмісту',
    mapCredit: 'Карта © учасники OpenStreetMap',
    lang: { switch: 'Змінити мову' },
  },
};

// Landing-page translation dictionaries for the 9 languages the app supports.
// English (`en`) is the source of truth and the default/root locale.
// Structured lists (features, screenshots, footer columns) are stored as arrays
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
export interface ShotText {
  label: string;
  alt: string;
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
    ctaStart: string;
    ctaGithub: string;
    openDemo: string;
    slideAlts: string[];
  };
  features: { heading: string; items: FeatureText[] };
  demo: { heading: string; text: string; cta: string };
  qs: { heading: string; text: string; docs: string; copy: string; copied: string; copyAria: string };
  shots: {
    items: ShotText[];
    viewAria: string;
    demoLabel: string;
    demoSub: string;
    openDemoAria: string;
    close: string;
    dialogLabel: string;
  };
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
      sub: 'A self-hosted fishing log for your lures, spots, catches & tackle',
      ctaDemo: 'Try the live demo',
      ctaStart: 'Get started',
      ctaGithub: 'View on GitHub',
      openDemo: 'Open live demo',
      slideAlts: [
        'OpenFishing lure library showing a grid of photo cards with tags and catch counts',
        'A single catch with its map location and Bite Index score',
        'Interactive map with saved fishing-spot markers',
        'Statistics dashboard of catch and gear trends',
      ],
    },
    features: {
      heading: 'Everything an angler needs...',
      items: [
        { title: 'Lure library', desc: 'Photo cards with tags, favourites, lost-lure tracking, printable QR labels, and fast client-side filtering & search.' },
        { title: 'Fishing spots', desc: 'Mark your spots on an interactive map with GPS coordinates and photos.' },
        { title: 'Catch log', desc: 'Species, weight & length, GPS location, catch notes.' },
        { title: 'Tackle box', desc: 'Rods, reels, lines, and combos — with full line-spool history.' },
        { title: 'Stats & insights', desc: 'Spot trends across your catches and gear over time.' },
        { title: 'AI assistant', badge: 'optional', desc: 'A self-hosted chatbot that answers questions about your data, provides fish & lure identification from an image — via a LiteLLM sidecar. Your keys, your infra.' },
        { title: 'Multi-user mode', badge: 'optional', desc: 'Turn on login to host friends & family: per-user data isolation, storage quotas and admin panel.' },
        { title: 'Share links', desc: 'Publish a read-only page for any lure, spot, or catch.' },
        { title: 'REST API', desc: 'A read-only JSON API with Bearer tokens and a built-in Swagger UI.' },
        { title: 'Backup & restore', desc: 'One-click ZIP export/import — per-user or full-instance.' },
        { title: '9 languages', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: 'Themes', desc: 'Features several themes including a light/dark mode.' },
      ],
    },
    demo: { heading: 'Take it for a cast.', text: 'Explore a fully populated OpenFishing instance', cta: 'Open the live demo' },
    qs: {
      heading: 'Up and running in one command.',
      text: "OpenFishing ships as a single container. Point two volumes at persistent storage for the SQLite database and your uploads, and you're fishing.",
      docs: 'Full docs',
      copy: 'Copy',
      copied: 'Copied!',
      copyAria: 'Copy command',
    },
    shots: {
      items: [
        { label: 'Lure library', alt: 'Grid of lure photo cards with tags, species and catch counts' },
        { label: 'Catch detail', alt: 'A single catch with its map location and Bite Index score' },
        { label: 'Spot map', alt: 'Interactive map with saved fishing-spot markers' },
        { label: 'Stats', alt: 'Statistics dashboard of catch and gear trends' },
        { label: 'AI assistant', alt: 'The optional AI chatbot answering a question about the data' },
      ],
      viewAria: 'View {label} screenshot',
      demoLabel: 'Try the live demo',
      demoSub: 'No signup required',
      openDemoAria: 'Open live demo',
      close: 'Close',
      dialogLabel: 'Screenshot',
    },
    footer: {
      blurb: 'A self-hosted fishing log for anglers. Organize lures, mark spots, log catches, track tackle.',
      cols: [
        { title: 'Product', links: ['Features', 'Live demo', 'Documentation'] },
        { title: 'Docs', links: ['Quick start', 'Installation', 'Environment variables', 'REST API'] },
        { title: 'Project', links: ['GitHub', 'Issues', 'License (AGPL)'] },
      ],
      rights: 'Released under the AGPL-3.0 license.',
    },
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
      sub: 'Ein selbst gehostetes Angeltagebuch für deine Köder, Angelstellen, Fänge & Ausrüstung',
      ctaDemo: 'Live-Demo ausprobieren',
      ctaStart: 'Loslegen',
      ctaGithub: 'Auf GitHub ansehen',
      openDemo: 'Live-Demo öffnen',
      slideAlts: [
        'OpenFishing-Köderbibliothek mit einem Raster aus Fotokarten mit Tags und Fangzahlen',
        'Ein einzelner Fang mit Kartenstandort und Bissindex-Wert',
        'Interaktive Karte mit gespeicherten Angelstellen-Markierungen',
        'Statistik-Dashboard mit Fang- und Ausrüstungstrends',
      ],
    },
    features: {
      heading: 'Alles, was ein Angler braucht ...',
      items: [
        { title: 'Köderbibliothek', desc: 'Fotokarten mit Tags, Favoriten, Verlust-Tracking, druckbaren QR-Etiketten und schneller clientseitiger Filterung & Suche.' },
        { title: 'Angelstellen', desc: 'Markiere deine Stellen auf einer interaktiven Karte mit GPS-Koordinaten und Fotos.' },
        { title: 'Fangbuch', desc: 'Art, Gewicht & Länge, GPS-Standort, Fangnotizen.' },
        { title: 'Ausrüstung', desc: 'Ruten, Rollen, Schnüre und Combos — mit vollständiger Spulen-Historie.' },
        { title: 'Statistiken & Einblicke', desc: 'Erkenne Trends bei deinen Fängen und deiner Ausrüstung über die Zeit.' },
        { title: 'KI-Assistent', badge: 'optional', desc: 'Ein selbst gehosteter Chatbot, der Fragen zu deinen Daten beantwortet und Fische & Köder aus einem Bild erkennt — über einen LiteLLM-Sidecar. Deine Schlüssel, deine Infrastruktur.' },
        { title: 'Mehrbenutzer-Modus', badge: 'optional', desc: 'Aktiviere den Login, um Freunde & Familie zu hosten: benutzerbezogene Datentrennung, Speicherkontingente und Admin-Panel.' },
        { title: 'Freigabelinks', desc: 'Veröffentliche eine schreibgeschützte Seite für jeden Köder, jede Stelle oder jeden Fang.' },
        { title: 'REST-API', desc: 'Eine schreibgeschützte JSON-API mit Bearer-Tokens und integrierter Swagger-UI.' },
        { title: 'Sicherung & Wiederherstellung', desc: 'Ein-Klick-ZIP-Export/-Import — pro Benutzer oder für die gesamte Instanz.' },
        { title: '9 Sprachen', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: 'Themes', desc: 'Bietet mehrere Themes inklusive Hell-/Dunkelmodus.' },
      ],
    },
    demo: { heading: 'Wirf die Angel aus.', text: 'Erkunde eine vollständig befüllte OpenFishing-Instanz', cta: 'Live-Demo öffnen' },
    qs: {
      heading: 'In einem einzigen Befehl einsatzbereit.',
      text: 'OpenFishing wird als einzelner Container ausgeliefert. Richte zwei Volumes auf persistenten Speicher für die SQLite-Datenbank und deine Uploads ein — und schon kann es losgehen.',
      docs: 'Vollständige Doku',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      copyAria: 'Befehl kopieren',
    },
    shots: {
      items: [
        { label: 'Köderbibliothek', alt: 'Raster aus Köder-Fotokarten mit Tags, Arten und Fangzahlen' },
        { label: 'Fang-Detail', alt: 'Ein einzelner Fang mit Kartenstandort und Bissindex-Wert' },
        { label: 'Stellenkarte', alt: 'Interaktive Karte mit gespeicherten Angelstellen-Markierungen' },
        { label: 'Statistiken', alt: 'Statistik-Dashboard mit Fang- und Ausrüstungstrends' },
        { label: 'KI-Assistent', alt: 'Der optionale KI-Chatbot beantwortet eine Frage zu den Daten' },
      ],
      viewAria: 'Screenshot {label} ansehen',
      demoLabel: 'Live-Demo ausprobieren',
      demoSub: 'Keine Anmeldung erforderlich',
      openDemoAria: 'Live-Demo öffnen',
      close: 'Schließen',
      dialogLabel: 'Screenshot',
    },
    footer: {
      blurb: 'Ein selbst gehostetes Angeltagebuch für Angler. Köder verwalten, Stellen markieren, Fänge protokollieren, Ausrüstung im Blick behalten.',
      cols: [
        { title: 'Produkt', links: ['Funktionen', 'Live-Demo', 'Dokumentation'] },
        { title: 'Doku', links: ['Schnellstart', 'Installation', 'Umgebungsvariablen', 'REST-API'] },
        { title: 'Projekt', links: ['GitHub', 'Issues', 'Lizenz (AGPL)'] },
      ],
      rights: 'Veröffentlicht unter der AGPL-3.0-Lizenz.',
    },
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
      sub: 'Un carnet de pêche auto-hébergé pour vos leurres, spots, prises et matériel',
      ctaDemo: 'Essayer la démo en ligne',
      ctaStart: 'Commencer',
      ctaGithub: 'Voir sur GitHub',
      openDemo: 'Ouvrir la démo en ligne',
      slideAlts: [
        'Bibliothèque de leurres OpenFishing affichant une grille de fiches photo avec tags et nombre de prises',
        "Une prise unique avec son emplacement sur la carte et son score d'indice de touche",
        'Carte interactive avec des marqueurs de spots de pêche enregistrés',
        'Tableau de bord statistique des tendances de prises et de matériel',
      ],
    },
    features: {
      heading: "Tout ce dont un pêcheur a besoin...",
      items: [
        { title: 'Bibliothèque de leurres', desc: 'Fiches photo avec tags, favoris, suivi des leurres perdus, étiquettes QR imprimables et filtrage & recherche rapides côté client.' },
        { title: 'Spots de pêche', desc: 'Marquez vos spots sur une carte interactive avec coordonnées GPS et photos.' },
        { title: 'Carnet de prises', desc: 'Espèce, poids et longueur, position GPS, notes de prise.' },
        { title: 'Matériel', desc: "Cannes, moulinets, lignes et ensembles — avec l'historique complet des bobines." },
        { title: 'Statistiques et analyses', desc: 'Repérez les tendances de vos prises et de votre matériel au fil du temps.' },
        { title: 'Assistant IA', badge: 'optionnel', desc: "Un chatbot auto-hébergé qui répond aux questions sur vos données et identifie poissons & leurres à partir d'une image — via un sidecar LiteLLM. Vos clés, votre infrastructure." },
        { title: 'Mode multi-utilisateur', badge: 'optionnel', desc: "Activez la connexion pour héberger amis & famille : isolation des données par utilisateur, quotas de stockage et panneau d'administration." },
        { title: 'Liens de partage', desc: "Publiez une page en lecture seule pour n'importe quel leurre, spot ou prise." },
        { title: 'API REST', desc: 'Une API JSON en lecture seule avec jetons Bearer et une interface Swagger intégrée.' },
        { title: 'Sauvegarde et restauration', desc: "Export/import ZIP en un clic — par utilisateur ou pour toute l'instance." },
        { title: '9 langues', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: 'Thèmes', desc: 'Propose plusieurs thèmes, dont un mode clair/sombre.' },
      ],
    },
    demo: { heading: 'Lancez votre ligne.', text: 'Explorez une instance OpenFishing entièrement remplie', cta: 'Ouvrir la démo en ligne' },
    qs: {
      heading: 'Opérationnel en une seule commande.',
      text: "OpenFishing est livré sous forme d'un conteneur unique. Pointez deux volumes vers un stockage persistant pour la base de données SQLite et vos fichiers, et vous voilà prêt à pêcher.",
      docs: 'Documentation complète',
      copy: 'Copier',
      copied: 'Copié !',
      copyAria: 'Copier la commande',
    },
    shots: {
      items: [
        { label: 'Bibliothèque de leurres', alt: 'Grille de fiches photo de leurres avec tags, espèces et nombre de prises' },
        { label: 'Détail de prise', alt: "Une prise unique avec son emplacement sur la carte et son score d'indice de touche" },
        { label: 'Carte des spots', alt: 'Carte interactive avec des marqueurs de spots de pêche enregistrés' },
        { label: 'Statistiques', alt: 'Tableau de bord statistique des tendances de prises et de matériel' },
        { label: 'Assistant IA', alt: "Le chatbot IA optionnel répondant à une question sur les données" },
      ],
      viewAria: "Voir la capture d'écran {label}",
      demoLabel: 'Essayer la démo en ligne',
      demoSub: 'Aucune inscription requise',
      openDemoAria: 'Ouvrir la démo en ligne',
      close: 'Fermer',
      dialogLabel: "Capture d'écran",
    },
    footer: {
      blurb: 'Un carnet de pêche auto-hébergé pour les pêcheurs. Organisez vos leurres, marquez vos spots, enregistrez vos prises, suivez votre matériel.',
      cols: [
        { title: 'Produit', links: ['Fonctionnalités', 'Démo en ligne', 'Documentation'] },
        { title: 'Documentation', links: ['Démarrage rapide', 'Installation', "Variables d'environnement", 'API REST'] },
        { title: 'Projet', links: ['GitHub', 'Tickets', 'Licence (AGPL)'] },
      ],
      rights: 'Distribué sous licence AGPL-3.0.',
    },
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
      sub: 'Un diario de pesca autoalojado para tus señuelos, puntos, capturas y aparejos',
      ctaDemo: 'Probar la demo en vivo',
      ctaStart: 'Empezar',
      ctaGithub: 'Ver en GitHub',
      openDemo: 'Abrir la demo en vivo',
      slideAlts: [
        'Biblioteca de señuelos de OpenFishing con una cuadrícula de tarjetas con fotos, etiquetas y recuentos de capturas',
        'Una captura individual con su ubicación en el mapa y su puntuación del Índice de picada',
        'Mapa interactivo con marcadores de puntos de pesca guardados',
        'Panel de estadísticas con tendencias de capturas y equipo',
      ],
    },
    features: {
      heading: 'Todo lo que un pescador necesita...',
      items: [
        { title: 'Biblioteca de señuelos', desc: 'Tarjetas con fotos, etiquetas, favoritos, seguimiento de señuelos perdidos, etiquetas QR imprimibles y filtrado y búsqueda rápidos en el cliente.' },
        { title: 'Puntos de pesca', desc: 'Marca tus puntos en un mapa interactivo con coordenadas GPS y fotos.' },
        { title: 'Registro de capturas', desc: 'Especie, peso y longitud, ubicación GPS, notas de la captura.' },
        { title: 'Aparejos', desc: 'Cañas, carretes, líneas y equipos — con historial completo de bobinas.' },
        { title: 'Estadísticas e información', desc: 'Detecta tendencias en tus capturas y tu equipo a lo largo del tiempo.' },
        { title: 'Asistente de IA', badge: 'opcional', desc: 'Un chatbot autoalojado que responde preguntas sobre tus datos e identifica peces y señuelos a partir de una imagen — mediante un sidecar de LiteLLM. Tus claves, tu infraestructura.' },
        { title: 'Modo multiusuario', badge: 'opcional', desc: 'Activa el inicio de sesión para alojar a amigos y familia: aislamiento de datos por usuario, cuotas de almacenamiento y panel de administración.' },
        { title: 'Enlaces para compartir', desc: 'Publica una página de solo lectura para cualquier señuelo, punto o captura.' },
        { title: 'API REST', desc: 'Una API JSON de solo lectura con tokens Bearer y una interfaz Swagger integrada.' },
        { title: 'Copia de seguridad y restauración', desc: 'Exportación/importación ZIP con un clic — por usuario o de toda la instancia.' },
        { title: '9 idiomas', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: 'Temas', desc: 'Ofrece varios temas, incluido un modo claro/oscuro.' },
      ],
    },
    demo: { heading: 'Lánzate a probarlo.', text: 'Explora una instancia de OpenFishing totalmente poblada', cta: 'Abrir la demo en vivo' },
    qs: {
      heading: 'En marcha con un solo comando.',
      text: 'OpenFishing se distribuye como un único contenedor. Apunta dos volúmenes a almacenamiento persistente para la base de datos SQLite y tus archivos, y listo para pescar.',
      docs: 'Documentación completa',
      copy: 'Copiar',
      copied: '¡Copiado!',
      copyAria: 'Copiar comando',
    },
    shots: {
      items: [
        { label: 'Biblioteca de señuelos', alt: 'Cuadrícula de tarjetas con fotos de señuelos con etiquetas, especies y recuentos de capturas' },
        { label: 'Detalle de captura', alt: 'Una captura individual con su ubicación en el mapa y su puntuación del Índice de picada' },
        { label: 'Mapa de puntos', alt: 'Mapa interactivo con marcadores de puntos de pesca guardados' },
        { label: 'Estadísticas', alt: 'Panel de estadísticas con tendencias de capturas y equipo' },
        { label: 'Asistente de IA', alt: 'El chatbot de IA opcional respondiendo una pregunta sobre los datos' },
      ],
      viewAria: 'Ver la captura de pantalla {label}',
      demoLabel: 'Probar la demo en vivo',
      demoSub: 'Sin registro',
      openDemoAria: 'Abrir la demo en vivo',
      close: 'Cerrar',
      dialogLabel: 'Captura de pantalla',
    },
    footer: {
      blurb: 'Un diario de pesca autoalojado para pescadores. Organiza señuelos, marca puntos, registra capturas, controla tus aparejos.',
      cols: [
        { title: 'Producto', links: ['Funciones', 'Demo en vivo', 'Documentación'] },
        { title: 'Documentación', links: ['Inicio rápido', 'Instalación', 'Variables de entorno', 'API REST'] },
        { title: 'Proyecto', links: ['GitHub', 'Incidencias', 'Licencia (AGPL)'] },
      ],
      rights: 'Publicado bajo la licencia AGPL-3.0.',
    },
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
      sub: 'Un diario di pesca self-hosted per le tue esche, spot, catture e attrezzatura',
      ctaDemo: 'Prova la demo dal vivo',
      ctaStart: 'Inizia',
      ctaGithub: 'Vedi su GitHub',
      openDemo: 'Apri la demo dal vivo',
      slideAlts: [
        'Libreria di esche di OpenFishing con una griglia di schede fotografiche con tag e conteggi delle catture',
        "Una singola cattura con la sua posizione sulla mappa e il punteggio dell'Indice di abboccata",
        'Mappa interattiva con segnaposti degli spot di pesca salvati',
        'Dashboard statistica delle tendenze di catture e attrezzatura',
      ],
    },
    features: {
      heading: 'Tutto ciò che serve a un pescatore...',
      items: [
        { title: 'Libreria di esche', desc: 'Schede fotografiche con tag, preferiti, tracciamento delle esche perse, etichette QR stampabili e filtri e ricerca rapidi lato client.' },
        { title: 'Spot di pesca', desc: 'Segna i tuoi spot su una mappa interattiva con coordinate GPS e foto.' },
        { title: 'Registro catture', desc: 'Specie, peso e lunghezza, posizione GPS, note sulla cattura.' },
        { title: 'Attrezzatura', desc: 'Canne, mulinelli, fili e combo — con lo storico completo delle bobine.' },
        { title: 'Statistiche e approfondimenti', desc: 'Individua le tendenze delle tue catture e della tua attrezzatura nel tempo.' },
        { title: 'Assistente IA', badge: 'opzionale', desc: "Un chatbot self-hosted che risponde a domande sui tuoi dati e identifica pesci ed esche da un'immagine — tramite un sidecar LiteLLM. Le tue chiavi, la tua infrastruttura." },
        { title: 'Modalità multiutente', badge: 'opzionale', desc: 'Attiva il login per ospitare amici e famiglia: isolamento dei dati per utente, quote di archiviazione e pannello di amministrazione.' },
        { title: 'Link di condivisione', desc: 'Pubblica una pagina di sola lettura per qualsiasi esca, spot o cattura.' },
        { title: 'API REST', desc: "Un'API JSON di sola lettura con token Bearer e un'interfaccia Swagger integrata." },
        { title: 'Backup e ripristino', desc: "Esportazione/importazione ZIP con un clic — per utente o per l'intera istanza." },
        { title: '9 lingue', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: 'Temi', desc: 'Offre diversi temi, inclusa una modalità chiara/scura.' },
      ],
    },
    demo: { heading: 'Provalo subito.', text: "Esplora un'istanza di OpenFishing completamente popolata", cta: 'Apri la demo dal vivo' },
    qs: {
      heading: 'Operativo con un solo comando.',
      text: 'OpenFishing viene distribuito come un unico container. Punta due volumi verso uno storage persistente per il database SQLite e i tuoi upload, e sei pronto a pescare.',
      docs: 'Documentazione completa',
      copy: 'Copia',
      copied: 'Copiato!',
      copyAria: 'Copia comando',
    },
    shots: {
      items: [
        { label: 'Libreria di esche', alt: 'Griglia di schede fotografiche di esche con tag, specie e conteggi delle catture' },
        { label: 'Dettaglio cattura', alt: "Una singola cattura con la sua posizione sulla mappa e il punteggio dell'Indice di abboccata" },
        { label: 'Mappa degli spot', alt: 'Mappa interattiva con segnaposti degli spot di pesca salvati' },
        { label: 'Statistiche', alt: 'Dashboard statistica delle tendenze di catture e attrezzatura' },
        { label: 'Assistente IA', alt: 'Il chatbot IA opzionale che risponde a una domanda sui dati' },
      ],
      viewAria: 'Visualizza lo screenshot {label}',
      demoLabel: 'Prova la demo dal vivo',
      demoSub: 'Nessuna registrazione richiesta',
      openDemoAria: 'Apri la demo dal vivo',
      close: 'Chiudi',
      dialogLabel: 'Screenshot',
    },
    footer: {
      blurb: "Un diario di pesca self-hosted per i pescatori. Organizza le esche, segna gli spot, registra le catture, tieni traccia dell'attrezzatura.",
      cols: [
        { title: 'Prodotto', links: ['Funzionalità', 'Demo dal vivo', 'Documentazione'] },
        { title: 'Documentazione', links: ['Avvio rapido', 'Installazione', "Variabili d'ambiente", 'API REST'] },
        { title: 'Progetto', links: ['GitHub', 'Issue', 'Licenza (AGPL)'] },
      ],
      rights: 'Distribuito sotto licenza AGPL-3.0.',
    },
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
      sub: 'Een zelf-gehost vislogboek voor je kunstaas, stekken, vangsten en uitrusting',
      ctaDemo: 'Probeer de live demo',
      ctaStart: 'Aan de slag',
      ctaGithub: 'Bekijk op GitHub',
      openDemo: 'Live demo openen',
      slideAlts: [
        'OpenFishing-kunstaasbibliotheek met een raster van fotokaarten met tags en vangstaantallen',
        'Eén vangst met kaartlocatie en Beetindex-score',
        'Interactieve kaart met opgeslagen visstek-markeringen',
        'Statistiekdashboard met vangst- en uitrustingstrends',
      ],
    },
    features: {
      heading: 'Alles wat een visser nodig heeft...',
      items: [
        { title: 'Kunstaasbibliotheek', desc: 'Fotokaarten met tags, favorieten, tracking van verloren aas, printbare QR-labels en snel filteren en zoeken aan de clientzijde.' },
        { title: 'Visstekken', desc: "Markeer je stekken op een interactieve kaart met GPS-coördinaten en foto's." },
        { title: 'Vangstlogboek', desc: 'Soort, gewicht en lengte, GPS-locatie, vangstnotities.' },
        { title: 'Uitrusting', desc: "Hengels, molens, lijnen en combo's — met volledige spoelgeschiedenis." },
        { title: 'Statistieken en inzichten', desc: 'Ontdek trends in je vangsten en uitrusting door de tijd heen.' },
        { title: 'AI-assistent', badge: 'optioneel', desc: 'Een zelf-gehoste chatbot die vragen over je gegevens beantwoordt en vissen en aas herkent op basis van een afbeelding — via een LiteLLM-sidecar. Jouw sleutels, jouw infrastructuur.' },
        { title: 'Multi-usermodus', badge: 'optioneel', desc: 'Zet inloggen aan om vrienden en familie te hosten: gegevensisolatie per gebruiker, opslagquota en beheerpaneel.' },
        { title: 'Deellinks', desc: 'Publiceer een alleen-lezen pagina voor elk kunstaas, elke stek of elke vangst.' },
        { title: 'REST-API', desc: 'Een alleen-lezen JSON-API met Bearer-tokens en een ingebouwde Swagger-UI.' },
        { title: 'Back-up en herstel', desc: 'ZIP-export/-import met één klik — per gebruiker of voor de hele instantie.' },
        { title: '9 talen', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: "Thema's", desc: "Biedt meerdere thema's, waaronder een licht/donker-modus." },
      ],
    },
    demo: { heading: 'Gooi je hengel uit.', text: 'Verken een volledig gevulde OpenFishing-instantie', cta: 'Live demo openen' },
    qs: {
      heading: 'Draaiend met één commando.',
      text: 'OpenFishing wordt geleverd als één container. Richt twee volumes op persistente opslag voor de SQLite-database en je uploads, en je kunt vissen.',
      docs: 'Volledige documentatie',
      copy: 'Kopiëren',
      copied: 'Gekopieerd!',
      copyAria: 'Commando kopiëren',
    },
    shots: {
      items: [
        { label: 'Kunstaasbibliotheek', alt: 'Raster van kunstaas-fotokaarten met tags, soorten en vangstaantallen' },
        { label: 'Vangstdetail', alt: 'Eén vangst met kaartlocatie en Beetindex-score' },
        { label: 'Stekkenkaart', alt: 'Interactieve kaart met opgeslagen visstek-markeringen' },
        { label: 'Statistieken', alt: 'Statistiekdashboard met vangst- en uitrustingstrends' },
        { label: 'AI-assistent', alt: 'De optionele AI-chatbot beantwoordt een vraag over de gegevens' },
      ],
      viewAria: 'Screenshot {label} bekijken',
      demoLabel: 'Probeer de live demo',
      demoSub: 'Geen registratie nodig',
      openDemoAria: 'Live demo openen',
      close: 'Sluiten',
      dialogLabel: 'Screenshot',
    },
    footer: {
      blurb: 'Een zelf-gehost vislogboek voor vissers. Organiseer kunstaas, markeer stekken, leg vangsten vast, houd je uitrusting bij.',
      cols: [
        { title: 'Product', links: ['Functies', 'Live demo', 'Documentatie'] },
        { title: 'Documentatie', links: ['Snelstart', 'Installatie', 'Omgevingsvariabelen', 'REST-API'] },
        { title: 'Project', links: ['GitHub', 'Issues', 'Licentie (AGPL)'] },
      ],
      rights: 'Uitgebracht onder de AGPL-3.0-licentie.',
    },
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
      sub: 'Samodzielnie hostowany dziennik wędkarski na przynęty, łowiska, połowy i sprzęt',
      ctaDemo: 'Wypróbuj demo na żywo',
      ctaStart: 'Rozpocznij',
      ctaGithub: 'Zobacz na GitHubie',
      openDemo: 'Otwórz demo na żywo',
      slideAlts: [
        'Biblioteka przynęt OpenFishing z siatką kart ze zdjęciami, tagami i liczbą połowów',
        'Pojedynczy połów z lokalizacją na mapie i wynikiem Indeksu brań',
        'Interaktywna mapa z zapisanymi znacznikami łowisk',
        'Panel statystyk z trendami połowów i sprzętu',
      ],
    },
    features: {
      heading: 'Wszystko, czego potrzebuje wędkarz...',
      items: [
        { title: 'Biblioteka przynęt', desc: 'Karty ze zdjęciami, tagami, ulubionymi, śledzeniem utraconych przynęt, drukowalnymi etykietami QR oraz szybkim filtrowaniem i wyszukiwaniem po stronie klienta.' },
        { title: 'Łowiska', desc: 'Oznaczaj swoje łowiska na interaktywnej mapie ze współrzędnymi GPS i zdjęciami.' },
        { title: 'Dziennik połowów', desc: 'Gatunek, waga i długość, lokalizacja GPS, notatki o połowie.' },
        { title: 'Sprzęt', desc: 'Wędki, kołowrotki, żyłki i zestawy — z pełną historią szpul.' },
        { title: 'Statystyki i analizy', desc: 'Dostrzegaj trendy w swoich połowach i sprzęcie w czasie.' },
        { title: 'Asystent AI', badge: 'opcjonalnie', desc: 'Samodzielnie hostowany chatbot, który odpowiada na pytania o Twoje dane i rozpoznaje ryby oraz przynęty ze zdjęcia — poprzez sidecar LiteLLM. Twoje klucze, Twoja infrastruktura.' },
        { title: 'Tryb wielu użytkowników', badge: 'opcjonalnie', desc: 'Włącz logowanie, aby hostować znajomych i rodzinę: izolacja danych na użytkownika, limity pamięci i panel administracyjny.' },
        { title: 'Linki udostępniania', desc: 'Opublikuj stronę tylko do odczytu dla dowolnej przynęty, łowiska lub połowu.' },
        { title: 'API REST', desc: 'API JSON tylko do odczytu z tokenami Bearer i wbudowanym interfejsem Swagger.' },
        { title: 'Kopia zapasowa i przywracanie', desc: 'Eksport/import ZIP jednym kliknięciem — na użytkownika lub całej instancji.' },
        { title: '9 języków', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: 'Motywy', desc: 'Oferuje kilka motywów, w tym tryb jasny/ciemny.' },
      ],
    },
    demo: { heading: 'Zarzuć wędkę.', text: 'Poznaj w pełni wypełnioną instancję OpenFishing', cta: 'Otwórz demo na żywo' },
    qs: {
      heading: 'Gotowe do działania jedną komendą.',
      text: 'OpenFishing jest dostarczany jako pojedynczy kontener. Wskaż dwa wolumeny na trwałą pamięć dla bazy SQLite i przesłanych plików — i możesz łowić.',
      docs: 'Pełna dokumentacja',
      copy: 'Kopiuj',
      copied: 'Skopiowano!',
      copyAria: 'Kopiuj komendę',
    },
    shots: {
      items: [
        { label: 'Biblioteka przynęt', alt: 'Siatka kart ze zdjęciami przynęt z tagami, gatunkami i liczbą połowów' },
        { label: 'Szczegóły połowu', alt: 'Pojedynczy połów z lokalizacją na mapie i wynikiem Indeksu brań' },
        { label: 'Mapa łowisk', alt: 'Interaktywna mapa z zapisanymi znacznikami łowisk' },
        { label: 'Statystyki', alt: 'Panel statystyk z trendami połowów i sprzętu' },
        { label: 'Asystent AI', alt: 'Opcjonalny chatbot AI odpowiadający na pytanie o dane' },
      ],
      viewAria: 'Zobacz zrzut ekranu {label}',
      demoLabel: 'Wypróbuj demo na żywo',
      demoSub: 'Bez rejestracji',
      openDemoAria: 'Otwórz demo na żywo',
      close: 'Zamknij',
      dialogLabel: 'Zrzut ekranu',
    },
    footer: {
      blurb: 'Samodzielnie hostowany dziennik wędkarski dla wędkarzy. Organizuj przynęty, oznaczaj łowiska, zapisuj połowy, śledź sprzęt.',
      cols: [
        { title: 'Produkt', links: ['Funkcje', 'Demo na żywo', 'Dokumentacja'] },
        { title: 'Dokumentacja', links: ['Szybki start', 'Instalacja', 'Zmienne środowiskowe', 'API REST'] },
        { title: 'Projekt', links: ['GitHub', 'Zgłoszenia', 'Licencja (AGPL)'] },
      ],
      rights: 'Wydane na licencji AGPL-3.0.',
    },
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
      sub: 'Um diário de pesca auto-hospedado para as tuas iscas, pontos, capturas e equipamento',
      ctaDemo: 'Experimentar a demo ao vivo',
      ctaStart: 'Começar',
      ctaGithub: 'Ver no GitHub',
      openDemo: 'Abrir a demo ao vivo',
      slideAlts: [
        'Biblioteca de iscas do OpenFishing com uma grelha de cartões com fotos, etiquetas e contagem de capturas',
        'Uma captura individual com a sua localização no mapa e pontuação do Índice de fisgada',
        'Mapa interativo com marcadores de pontos de pesca guardados',
        'Painel de estatísticas com tendências de capturas e equipamento',
      ],
    },
    features: {
      heading: 'Tudo o que um pescador precisa...',
      items: [
        { title: 'Biblioteca de iscas', desc: 'Cartões com fotos, etiquetas, favoritos, registo de iscas perdidas, etiquetas QR imprimíveis e filtragem e pesquisa rápidas do lado do cliente.' },
        { title: 'Pontos de pesca', desc: 'Marca os teus pontos num mapa interativo com coordenadas GPS e fotos.' },
        { title: 'Registo de capturas', desc: 'Espécie, peso e comprimento, localização GPS, notas da captura.' },
        { title: 'Equipamento', desc: 'Canas, carretos, linhas e conjuntos — com histórico completo de bobinas.' },
        { title: 'Estatísticas e análises', desc: 'Identifica tendências nas tuas capturas e equipamento ao longo do tempo.' },
        { title: 'Assistente de IA', badge: 'opcional', desc: 'Um chatbot auto-hospedado que responde a perguntas sobre os teus dados e identifica peixes e iscas a partir de uma imagem — através de um sidecar LiteLLM. As tuas chaves, a tua infraestrutura.' },
        { title: 'Modo multiutilizador', badge: 'opcional', desc: 'Ativa o início de sessão para alojar amigos e família: isolamento de dados por utilizador, quotas de armazenamento e painel de administração.' },
        { title: 'Ligações de partilha', desc: 'Publica uma página só de leitura para qualquer isca, ponto ou captura.' },
        { title: 'API REST', desc: 'Uma API JSON só de leitura com tokens Bearer e uma interface Swagger integrada.' },
        { title: 'Backup e restauro', desc: 'Exportação/importação ZIP com um clique — por utilizador ou de toda a instância.' },
        { title: '9 idiomas', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: 'Temas', desc: 'Oferece vários temas, incluindo um modo claro/escuro.' },
      ],
    },
    demo: { heading: 'Lança a tua linha.', text: 'Explora uma instância do OpenFishing totalmente preenchida', cta: 'Abrir a demo ao vivo' },
    qs: {
      heading: 'A funcionar com um único comando.',
      text: 'O OpenFishing é distribuído como um único contentor. Aponta dois volumes para armazenamento persistente da base de dados SQLite e dos teus ficheiros, e já podes pescar.',
      docs: 'Documentação completa',
      copy: 'Copiar',
      copied: 'Copiado!',
      copyAria: 'Copiar comando',
    },
    shots: {
      items: [
        { label: 'Biblioteca de iscas', alt: 'Grelha de cartões com fotos de iscas com etiquetas, espécies e contagem de capturas' },
        { label: 'Detalhe da captura', alt: 'Uma captura individual com a sua localização no mapa e pontuação do Índice de fisgada' },
        { label: 'Mapa de pontos', alt: 'Mapa interativo com marcadores de pontos de pesca guardados' },
        { label: 'Estatísticas', alt: 'Painel de estatísticas com tendências de capturas e equipamento' },
        { label: 'Assistente de IA', alt: 'O chatbot de IA opcional a responder a uma pergunta sobre os dados' },
      ],
      viewAria: 'Ver a captura de ecrã {label}',
      demoLabel: 'Experimentar a demo ao vivo',
      demoSub: 'Sem registo',
      openDemoAria: 'Abrir a demo ao vivo',
      close: 'Fechar',
      dialogLabel: 'Captura de ecrã',
    },
    footer: {
      blurb: 'Um diário de pesca auto-hospedado para pescadores. Organiza iscas, marca pontos, regista capturas, acompanha o equipamento.',
      cols: [
        { title: 'Produto', links: ['Funcionalidades', 'Demo ao vivo', 'Documentação'] },
        { title: 'Documentação', links: ['Início rápido', 'Instalação', 'Variáveis de ambiente', 'API REST'] },
        { title: 'Projeto', links: ['GitHub', 'Problemas', 'Licença (AGPL)'] },
      ],
      rights: 'Distribuído sob a licença AGPL-3.0.',
    },
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
      sub: 'Самостійно розміщуваний журнал рибалки для ваших приманок, місць, уловів і спорядження',
      ctaDemo: 'Спробувати демо наживо',
      ctaStart: 'Почати',
      ctaGithub: 'Переглянути на GitHub',
      openDemo: 'Відкрити демо наживо',
      slideAlts: [
        'Бібліотека приманок OpenFishing із сіткою фотокарток з тегами та кількістю уловів',
        'Окремий улов із розташуванням на карті та оцінкою Індексу клювання',
        'Інтерактивна карта зі збереженими позначками рибних місць',
        'Панель статистики з тенденціями уловів і спорядження',
      ],
    },
    features: {
      heading: 'Усе, що потрібно рибалці...',
      items: [
        { title: 'Бібліотека приманок', desc: 'Фотокартки з тегами, обраним, відстеженням загублених приманок, друкованими QR-мітками та швидкою фільтрацією й пошуком на боці клієнта.' },
        { title: 'Рибні місця', desc: 'Позначайте свої місця на інтерактивній карті з GPS-координатами та фотографіями.' },
        { title: 'Журнал уловів', desc: 'Вид, вага та довжина, GPS-розташування, нотатки до улову.' },
        { title: 'Спорядження', desc: 'Вудлища, котушки, волосіні та комплекти — з повною історією шпуль.' },
        { title: 'Статистика й аналітика', desc: 'Помічайте тенденції своїх уловів і спорядження з часом.' },
        { title: 'ШІ-помічник', badge: 'опційно', desc: 'Самостійно розміщуваний чат-бот, який відповідає на запитання про ваші дані та розпізнає рибу й приманки за зображенням — через сайдкар LiteLLM. Ваші ключі, ваша інфраструктура.' },
        { title: 'Багатокористувацький режим', badge: 'опційно', desc: 'Увімкніть вхід, щоб розмістити друзів і родину: ізоляція даних для кожного користувача, квоти сховища та панель адміністратора.' },
        { title: 'Посилання для поширення', desc: 'Опублікуйте сторінку лише для читання для будь-якої приманки, місця чи улову.' },
        { title: 'REST API', desc: 'JSON API лише для читання з токенами Bearer і вбудованим інтерфейсом Swagger.' },
        { title: 'Резервне копіювання та відновлення', desc: 'Експорт/імпорт ZIP одним кліком — для окремого користувача або всієї інстанції.' },
        { title: '9 мов', desc: 'EN, DE, FR, ES, IT, NL, PL, PT, UK.' },
        { title: 'Теми', desc: 'Пропонує кілька тем, зокрема світлий/темний режим.' },
      ],
    },
    demo: { heading: 'Закиньте вудку.', text: 'Дослідіть повністю заповнену інстанцію OpenFishing', cta: 'Відкрити демо наживо' },
    qs: {
      heading: 'Готово до роботи однією командою.',
      text: 'OpenFishing постачається як один контейнер. Вкажіть два томи на постійне сховище для бази даних SQLite і ваших завантажень — і можна рибалити.',
      docs: 'Повна документація',
      copy: 'Копіювати',
      copied: 'Скопійовано!',
      copyAria: 'Копіювати команду',
    },
    shots: {
      items: [
        { label: 'Бібліотека приманок', alt: 'Сітка фотокарток приманок з тегами, видами та кількістю уловів' },
        { label: 'Деталі улову', alt: 'Окремий улов із розташуванням на карті та оцінкою Індексу клювання' },
        { label: 'Карта місць', alt: 'Інтерактивна карта зі збереженими позначками рибних місць' },
        { label: 'Статистика', alt: 'Панель статистики з тенденціями уловів і спорядження' },
        { label: 'ШІ-помічник', alt: 'Опційний ШІ-чат-бот відповідає на запитання про дані' },
      ],
      viewAria: 'Переглянути знімок екрана {label}',
      demoLabel: 'Спробувати демо наживо',
      demoSub: 'Реєстрація не потрібна',
      openDemoAria: 'Відкрити демо наживо',
      close: 'Закрити',
      dialogLabel: 'Знімок екрана',
    },
    footer: {
      blurb: 'Самостійно розміщуваний журнал рибалки для рибалок. Упорядковуйте приманки, позначайте місця, записуйте улови, відстежуйте спорядження.',
      cols: [
        { title: 'Продукт', links: ['Функції', 'Демо наживо', 'Документація'] },
        { title: 'Документація', links: ['Швидкий старт', 'Встановлення', 'Змінні середовища', 'REST API'] },
        { title: 'Проєкт', links: ['GitHub', 'Питання', 'Ліцензія (AGPL)'] },
      ],
      rights: 'Випущено за ліцензією AGPL-3.0.',
    },
    lang: { switch: 'Змінити мову' },
  },
};

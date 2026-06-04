import { createContext, useContext } from "react";

export type Language = "it" | "en";

export type ContactFormCopy = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const STORAGE_KEY = "giorgio-perez-language";

export const translations = {
  it: {
    nav: {
      about: "Chi sono",
      projects: "Progetti",
      tech: "Tecnologie",
      contact: "Contatti",
      downloadCv: "Scarica CV",
      toggleMenu: "Apri menu",
      languageLabel: "Lingua",
    },
    hero: {
      intro:
        "Creazione digitale, design e sviluppo web — gestionali, e-commerce e siti su misura, con un occhio all'AI.",
      projectsCta: "Scopri i progetti",
      contactCta: "Contattami",
      scroll: "Scroll",
    },
    about: {
      label: "Chi sono",
      titleStart: "Trasformo idee in",
      titleHighlight: "esperienze digitali",
      titleEnd: "con cura ai dettagli.",
      body1:
        "Sono Giorgio Perez, Full-Stack Web Developer con esperienza nello sviluppo di gestionali, siti web ed e-commerce. Lavoro al confine tra design e codice, con attenzione all'esperienza utente e all'ottimizzazione delle performance.",
      body2:
        "Integro strumenti di Intelligenza Artificiale per automatizzare processi e migliorare i risultati. Ho lavorato in Finital come sviluppatore web e IT support, e oggi seguo come freelance progetti che spaziano dall'arte all'e-commerce, fino al marketing digitale.",
    },
    projects: {
      label: "Selected work",
      titleStart: "Una selezione di",
      titleHighlight: "progetti recenti",
      titleEnd: ".",
      intro:
        "Ogni lavoro nasce da un dialogo: con il cliente, con il contesto, con la materia digitale.",
      items: [
        {
          title: "andreanimanola.com",
          desc: "E-commerce artistico per la vendita di quadri, con focus su UX e conversioni.",
          tech: "WordPress · WooCommerce",
          href: "https://andreanimanola.com",
        },
        {
          title: "jurgen-confrontaofferte.it",
          desc: "Sito WordPress con form avanzati per la generazione e gestione dei clienti.",
          tech: "WordPress · Form · Lead Generation",
          href: "https://jurgen-confrontaofferte.it",
        },
        {
          title: "lorenzosalvaticoach.it",
          desc: "Sito vetrina sviluppato in React con form interattivo per profilare e acquisire nuovi utenti.",
          tech: "React · UX · Form",
          href: "https://www.lorenzosalvaticoach.it/",
        },
        {
          title: "maydaymassage.it",
          desc: "Sito vetrina in React con sistema di prenotazione e acquisto gift card.",
          tech: "React · Booking · UX",
          href: "https://maydaymassage.it",
        },
        {
          title: "alfredopumilia.com",
          desc: "Sito vetrina realizzato in WordPress per artista, con gestione concerti ed eventi.",
          tech: "WordPress · Event Management · UX",
          href: "https://alfredopumilia.com",
        },
      ],
    },
    nessunoEscluso: {
      eyebrow: "Progetto personale / App",
      titleFirst: "Nessuno",
      titleSecond: "Escluso",
      subtitle: "La bacheca viva della tua città",
      description:
        '"Nessuno Escluso" è un progetto nato per aiutare le persone a scoprire eventi, incontri spontanei e attività vicino a loro. L\'idea è creare una bacheca digitale cittadina, dove chiunque può lasciare un post-it, proporre qualcosa da fare e trovare persone con interessi simili.',
      pillars: [
        "eventi locali",
        "socialità",
        "geolocalizzazione",
        "post-it interattivi",
        "mappa degli eventi",
        "sistema di affidabilità",
        "community",
      ],
      problemTitle: "Il problema",
      problemText:
        "Molte persone vogliono uscire, conoscere gente o partecipare ad attività, ma spesso non sanno cosa succede vicino a loro.",
      solutionTitle: "La soluzione",
      solutionText:
        "Una bacheca digitale semplice, immediata e accessibile, dove ogni evento appare come un post-it lasciato in città.",
      featuresTitle: "Funzionalità principali",
      features: [
        "Creazione eventi/post-it",
        "Ricerca eventi",
        "Filtri per categoria",
        "Mappa interattiva",
        "Geolocalizzazione reale",
        "Eventi spontanei/community",
        "Sistema di affidabilità",
        "Interfaccia mobile-first",
      ],
      technologiesTitle: "Tecnologie",
      technologies: [
        "React / Vue",
        "JavaScript",
        "Supabase",
        "Mappe / Geocoding",
        "CSS responsive",
        "Mobile-first design",
      ],
      primaryCta: "Scopri il progetto",
      previewLogoLabel: "Logo app",
      notes: [
        { label: "Evento vicino a te", meta: "Oggi alle 18:30" },
        { label: "Passeggiata in centro", meta: "450 m da te" },
        { label: "Aperitivo community", meta: "12 persone interessate" },
      ],
      mapTitle: "Mappa eventi",
      mapSubtitle: "Marker attivi vicino a te",
      mapBadge: "Napoli · 3 eventi",
      trustText:
        "Profili, segnalazioni e affidabilità per una community più sicura.",
    },
    tech: {
      label: "Toolkit",
      titleStart: "Tecnologie con cui",
      titleHighlight: "creo ogni giorno",
      titleEnd: ".",
    },
    contact: {
      label: "Contatti",
      titleStart: "Hai un'idea?",
      titleHighlight: "Parliamone",
      intro:
        "Scrivimi due righe sul tuo progetto. Risponderò entro 24 ore con qualche domanda e una prima impressione.",
      email: "Email",
      phone: "Telefono",
      location: "Arezzo, Italia",
      fields: {
        name: "Nome",
        email: "Email",
        subject: "Oggetto",
        message: "Messaggio",
      },
      submit: "Invia messaggio",
      sending: "Invio...",
      missingFields: "Compila tutti i campi",
      invalidEmail: "Email non valida",
      redirecting: "Reindirizzamento a WhatsApp...",
      whatsAppMessage: (form: ContactFormCopy) => `Ciao Giorgio

Ti contatto dal tuo sito web.

Oggetto: ${form.subject}

Nome: ${form.name}
Email: ${form.email}

Messaggio:
${form.message}

A presto!`,
    },
    map: {
      label: "Dove mi trovi",
      openMaps: "Apri in Google Maps",
      iframeTitle: "Giorgio Perez su Google Maps",
      reviewsLabel: "Website designer · Recensioni Google",
      leaveReview: "Lascia una recensione su Google",
      reviews: [
        {
          name: "Andrea M.",
          rating: 5,
          text: "Giorgio ha realizzato il mio e-commerce con grande professionalità. Ascolta, propone soluzioni e consegna nei tempi. Consigliatissimo.",
        },
        {
          name: "Jurgen R.",
          rating: 5,
          text: "Lavoro pulito, codice ben strutturato e attenzione ai dettagli. Il portale è veloce e i clienti lo trovano semplice da usare.",
        },
        {
          name: "Alfredo P.",
          rating: 5,
          text: "Sito vetrina elegante e perfettamente ottimizzato per la SEO. Disponibile anche dopo la consegna per ogni necessità.",
        },
      ],
    },
    footer: {
      role: "Full-Stack Web Developer",
      downloadCv: "Scarica CV",
      rights: "Tutti i diritti riservati.",
      built: "Designed & built with care.",
    },
    notFound: {
      message: "Pagina non trovata",
      home: "Torna alla Home",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      tech: "Technologies",
      contact: "Contact",
      downloadCv: "Download CV",
      toggleMenu: "Open menu",
      languageLabel: "Language",
    },
    hero: {
      intro:
        "Digital creation, design, and web development: management tools, e-commerce, and custom websites with an eye on AI.",
      projectsCta: "Explore projects",
      contactCta: "Contact me",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      titleStart: "I turn ideas into",
      titleHighlight: "digital experiences",
      titleEnd: "with care for details.",
      body1:
        "I am Giorgio Perez, a Full-Stack Web Developer experienced in building management platforms, websites, and e-commerce projects. I work where design meets code, with a sharp focus on user experience and performance optimization.",
      body2:
        "I integrate Artificial Intelligence tools to automate processes and improve outcomes. I worked at Finital as a web developer and IT support specialist, and today I follow freelance projects ranging from art to e-commerce and digital marketing.",
    },
    projects: {
      label: "Selected work",
      titleStart: "A selection of",
      titleHighlight: "recent projects",
      titleEnd: ".",
      intro:
        "Every project starts with a conversation: with the client, the context, and the digital material itself.",
      items: [
        {
          title: "andreanimanola.com",
          desc: "Art e-commerce for selling paintings, focused on UX and conversions.",
          tech: "WordPress · WooCommerce",
          href: "https://andreanimanola.com",
        },
        {
          title: "jurgen-confrontaofferte.it",
          desc: "WordPress website with advanced forms for lead generation and customer management.",
          tech: "WordPress · Forms · Lead Generation",
          href: "https://jurgen-confrontaofferte.it",
        },
        {
          title: "lorenzosalvaticoach.it",
          desc: "React showcase website with an interactive form to profile and acquire new users.",
          tech: "React · UX · Forms",
          href: "https://www.lorenzosalvaticoach.it/",
        },
        {
          title: "maydaymassage.it",
          desc: "React showcase website with booking features and gift card purchase flow.",
          tech: "React · Booking · UX",
          href: "https://maydaymassage.it",
        },
        {
          title: "alfredopumilia.com",
          desc: "WordPress showcase website for an artist, with concert and event management.",
          tech: "WordPress · Event Management · UX",
          href: "https://alfredopumilia.com",
        },
      ],
    },
    nessunoEscluso: {
      eyebrow: "Personal project / App",
      titleFirst: "Nessuno",
      titleSecond: "Escluso",
      subtitle: "The living noticeboard for your city",
      description:
        '"Nessuno Escluso" is a project designed to help people discover events, spontaneous meetups, and activities near them. The idea is to create a digital city noticeboard where anyone can leave a post-it, suggest something to do, and find people with similar interests.',
      pillars: [
        "local events",
        "social connection",
        "geolocation",
        "interactive post-its",
        "event map",
        "trust system",
        "community",
      ],
      problemTitle: "The problem",
      problemText:
        "Many people want to go out, meet others, or join activities, but often do not know what is happening nearby.",
      solutionTitle: "The solution",
      solutionText:
        "A simple, immediate, and accessible digital noticeboard where each event appears as a post-it left in the city.",
      featuresTitle: "Main features",
      features: [
        "Event/post-it creation",
        "Event search",
        "Category filters",
        "Interactive map",
        "Real geolocation",
        "Spontaneous/community events",
        "Trust system",
        "Mobile-first interface",
      ],
      technologiesTitle: "Technologies",
      technologies: [
        "React / Vue",
        "JavaScript",
        "Supabase",
        "Maps / Geocoding",
        "Responsive CSS",
        "Mobile-first design",
      ],
      primaryCta: "Explore the project",
      previewLogoLabel: "App logo",
      notes: [
        { label: "Event near you", meta: "Today at 6:30 PM" },
        { label: "Walk downtown", meta: "450 m from you" },
        { label: "Community aperitivo", meta: "12 people interested" },
      ],
      mapTitle: "Event map",
      mapSubtitle: "Active markers near you",
      mapBadge: "Naples · 3 events",
      trustText:
        "Profiles, reports, and trust signals for a safer community.",
    },
    tech: {
      label: "Toolkit",
      titleStart: "Technologies I",
      titleHighlight: "create with every day",
      titleEnd: ".",
    },
    contact: {
      label: "Contact",
      titleStart: "Have an idea?",
      titleHighlight: "Let's talk",
      intro:
        "Write me a few lines about your project. I will reply within 24 hours with a few questions and a first impression.",
      email: "Email",
      phone: "Phone",
      location: "Arezzo, Italy",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      submit: "Send message",
      sending: "Sending...",
      missingFields: "Please fill in all fields",
      invalidEmail: "Invalid email",
      redirecting: "Redirecting to WhatsApp...",
      whatsAppMessage: (form: ContactFormCopy) => `Hi Giorgio,

I am contacting you from your website.

Subject: ${form.subject}

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}

Talk soon!`,
    },
    map: {
      label: "Where to find me",
      openMaps: "Open in Google Maps",
      iframeTitle: "Giorgio Perez on Google Maps",
      reviewsLabel: "Website designer · Google reviews",
      leaveReview: "Leave a review on Google",
      reviews: [
        {
          name: "Andrea M.",
          rating: 5,
          text: "Giorgio built my e-commerce website with great professionalism. He listens, proposes solutions, and delivers on time. Highly recommended.",
        },
        {
          name: "Jurgen R.",
          rating: 5,
          text: "Clean work, well-structured code, and attention to detail. The portal is fast and customers find it easy to use.",
        },
        {
          name: "Alfredo P.",
          rating: 5,
          text: "An elegant showcase website, perfectly optimized for SEO. Available even after delivery for every need.",
        },
      ],
    },
    footer: {
      role: "Full-Stack Web Developer",
      downloadCv: "Download CV",
      rights: "All rights reserved.",
      built: "Designed & built with care.",
    },
    notFound: {
      message: "Page not found",
      home: "Return to Home",
    },
  },
} as const;

export type TranslationSet = typeof translations.it;

export type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationSet;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
};

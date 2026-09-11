import { createContext, useContext } from "react";

export type Language = "it" | "en";

export type ContactFormCopy = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export const STORAGE_KEY = "ermes-co-language";

export const translations = {
  it: {
    nav: {
      home: "Home",
      about: "Chi siamo",
      projects: "Progetti",
      team: "Team",
      contact: "Contatti",
      toggleMenu: "Apri menu",
      languageLabel: "Lingua",
    },
    hero: {
      brand: "Ermes & Co.",
      sloganFirst: "Noi ci siamo reinventati.",
      sloganSecond: "Ora reinventiamo il tuo sito.",
      intro:
        "Siamo un team di professionisti del digitale. Progettiamo e realizziamo siti web moderni, funzionali e pensati per raccontare davvero chi sei.",
      projectsCta: "Scopri chi siamo",
      contactCta: "Parliamo del tuo progetto",
      scroll: "Scroll",
    },
    about: {
      label: "Chi siamo",
      titleStart: "Nati dalla necessità.",
      titleHighlight: "Cresciuti reinventandoci",
      titleEnd: ".",
      body1:
        "Ermes & Co. nasce quando abbiamo deciso di trasformare una difficoltà in un punto di partenza. Abbiamo investito nella nostra formazione, tra università, corsi professionali e competenze digitali, poi abbiamo scelto di creare noi la nostra opportunità.",
      body2:
        "Oggi uniamo prospettive diverse per progettare siti web, e-commerce e soluzioni digitali che abbiano senso per chi li usa e per chi li commissiona. Ascoltiamo, capiamo, progettiamo e realizziamo: pochi giri di parole, molto lavoro fatto bene.",
      valuesTitle: "Etica. Professionalita. Trasparenza.",
      values:
        "Non vendiamo soluzioni inutili. Costruiamo strumenti coerenti con identita, obiettivi e budget di ogni progetto.",
    },
    projects: {
      label: "Progetti selezionati",
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
      eyebrow: "Progetto interno / App",
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
      label: "Strumenti",
      titleStart: "Tecnologie con cui",
      titleHighlight: "lavoriamo ogni giorno",
      titleEnd: ".",
    },
    team: {
      label: "Team",
      titleStart: "Tre teste,",
      titleHighlight: "una direzione",
      titleEnd: ".",
      intro:
        "Ermes & Co. e un team piccolo e affiatato: competenze diverse, confronto diretto e la giusta dose di ironia quando il sito decide di fare il misterioso.",
      discover: "Scopri il profilo",
      back: "Torna al team",
      placeholderNote:
        "Dati del profilo da completare con le informazioni ufficiali del membro.",
      emptyList: "Informazioni in arrivo.",
      sections: {
        bio: "Bio",
        skills: "Competenze",
        experience: "Esperienza",
        education: "Formazione",
        projects: "Progetti",
        cv: "CV",
      },
      members: [
        {
          slug: "giorgio-perez",
          name: "Giorgio Perez",
          role: "Co-founder / Web developer",
          description:
            "Profilo professionale da completare con bio, competenze e responsabilita ufficiali.",
          skills: ["Web development"],
          bio: "Bio da completare con i dati forniti dal team.",
          experience: ["Esperienze professionali da inserire"],
          education: ["Formazione da inserire"],
          projects: ["Progetti da inserire"],
          cvHref: "",
        },
        {
          slug: "michele-lombardo",
          name: "Michele Lombardo",
          role: "Co-founder",
          description:
            "Profilo professionale da completare con ruolo, bio, competenze e responsabilita ufficiali.",
          skills: ["Competenze da inserire"],
          bio: "Bio da completare con i dati forniti dal team.",
          experience: ["Esperienze professionali da inserire"],
          education: ["Formazione da inserire"],
          projects: ["Progetti da inserire"],
          cvHref: "",
        },
        {
          slug: "alessia-iervolino",
          name: "Alessia Iervolino",
          role: "Co-founder / Copywriter e fotografa",
          description:
            "Profilo professionale da completare con bio, competenze e responsabilita ufficiali.",
          skills: ["Copywriting", "Fotografia"],
          bio: "Bio da completare con i dati forniti dal team.",
          experience: ["Esperienze professionali da inserire"],
          education: ["Formazione da inserire"],
          projects: ["Progetti da inserire"],
          cvHref: "",
        },
      ],
    },
    contact: {
      label: "Contatti",
      titleStart: "Hai un'idea?",
      titleHighlight: "Reinventiamola insieme",
      intro:
        "Raccontaci cosa hai in mente. Partiamo dalle tue esigenze e costruiamo insieme la soluzione piu adatta.",
      email: "Email",
      phone: "Telefono",
      location: "Arezzo, Italia",
      fields: {
        name: "Nome",
        email: "Email",
        company: "Azienda / Attivita",
        subject: "Tipo di progetto",
        message: "Messaggio",
      },
      submit: "Inizia il progetto",
      sending: "Invio...",
      missingFields: "Compila tutti i campi",
      invalidEmail: "Email non valida",
      redirecting: "Reindirizzamento a WhatsApp...",
      whatsAppMessage: (form: ContactFormCopy) => `Ciao Ermes & Co.

Vi contatto dal vostro sito web.

Tipo di progetto: ${form.subject}

Nome: ${form.name}
Email: ${form.email}
Azienda / Attivita: ${form.company}

Messaggio:
${form.message}

A presto!`,
    },
    map: {
      label: "Dove ci trovi",
      openMaps: "Apri in Google Maps",
      iframeTitle: "Ermes & Co. su Google Maps",
      reviewsLabel: "Web agency · Recensioni Google",
      leaveReview: "Lascia una recensione su Google",
      reviews: [
        {
          name: "Andrea M.",
          rating: 5,
          text: "Ermes & Co. ha realizzato il nostro e-commerce con grande professionalita. Ascoltano, propongono soluzioni e consegnano nei tempi. Consigliatissimi.",
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
      role: "Web agency",
      rights: "Tutti i diritti riservati.",
    },
    notFound: {
      message: "Pagina non trovata",
      home: "Torna alla Home",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      team: "Team",
      contact: "Contact",
      toggleMenu: "Open menu",
      languageLabel: "Language",
    },
    hero: {
      brand: "Ermes & Co.",
      sloganFirst: "We reinvented ourselves.",
      sloganSecond: "Now we reinvent your website.",
      intro:
        "We are a digital team designing and building modern, functional websites that actually tell who you are.",
      projectsCta: "Discover us",
      contactCta: "Let's talk about your project",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      titleStart: "Born from necessity.",
      titleHighlight: "Built through reinvention",
      titleEnd: ".",
      body1:
        "Ermes & Co. began when we decided to turn a difficult moment into a starting point. We invested in our education, through university, professional training, and digital skills, then chose to create our own opportunity.",
      body2:
        "Today we combine different perspectives to design websites, e-commerce experiences, and digital solutions that make sense for both users and clients. We listen, understand, design, and build: fewer buzzwords, more useful work.",
      valuesTitle: "Ethics. Professionalism. Transparency.",
      values:
        "We do not sell unnecessary solutions. We build tools aligned with each project's identity, goals, and budget.",
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
      titleStart: "Technologies we",
      titleHighlight: "work with every day",
      titleEnd: ".",
    },
    team: {
      label: "Team",
      titleStart: "Three minds,",
      titleHighlight: "one direction",
      titleEnd: ".",
      intro:
        "Ermes & Co. is a small, close-knit team: different skills, direct collaboration, and just enough irony when a website decides to act mysterious.",
      discover: "Discover profile",
      back: "Back to team",
      placeholderNote:
        "Profile data to be completed with the official information for this member.",
      emptyList: "Information coming soon.",
      sections: {
        bio: "Bio",
        skills: "Skills",
        experience: "Experience",
        education: "Education",
        projects: "Projects",
        cv: "CV",
      },
      members: [
        {
          slug: "giorgio-perez",
          name: "Giorgio Perez",
          role: "Co-founder / Web developer",
          description:
            "Professional profile to complete with official bio, skills, and responsibilities.",
          skills: ["Web development"],
          bio: "Bio to complete with data provided by the team.",
          experience: ["Professional experience to add"],
          education: ["Education to add"],
          projects: ["Projects to add"],
          cvHref: "",
        },
        {
          slug: "michele-lombardo",
          name: "Michele Lombardo",
          role: "Co-founder",
          description:
            "Professional profile to complete with official role, bio, skills, and responsibilities.",
          skills: ["Skills to add"],
          bio: "Bio to complete with data provided by the team.",
          experience: ["Professional experience to add"],
          education: ["Education to add"],
          projects: ["Projects to add"],
          cvHref: "",
        },
        {
          slug: "alessia-iervolino",
          name: "Alessia Iervolino",
          role: "Co-founder / Copywriter and photographer",
          description:
            "Professional profile to complete with official bio, skills, and responsibilities.",
          skills: ["Copywriting", "Photography"],
          bio: "Bio to complete with data provided by the team.",
          experience: ["Professional experience to add"],
          education: ["Education to add"],
          projects: ["Projects to add"],
          cvHref: "",
        },
      ],
    },
    contact: {
      label: "Contact",
      titleStart: "Have an idea?",
      titleHighlight: "Let's reinvent it together",
      intro:
        "Tell us what you have in mind. We start from your needs and build the right solution together.",
      email: "Email",
      phone: "Phone",
      location: "Arezzo, Italy",
      fields: {
        name: "Name",
        email: "Email",
        company: "Company / Business",
        subject: "Project type",
        message: "Message",
      },
      submit: "Start the project",
      sending: "Sending...",
      missingFields: "Please fill in all fields",
      invalidEmail: "Invalid email",
      redirecting: "Redirecting to WhatsApp...",
      whatsAppMessage: (form: ContactFormCopy) => `Hi Ermes & Co.,

We are contacting you from your website.

Project type: ${form.subject}

Name: ${form.name}
Email: ${form.email}
Company / Business: ${form.company}

Message:
${form.message}

Talk soon!`,
    },
    map: {
      label: "Where to find us",
      openMaps: "Open in Google Maps",
      iframeTitle: "Ermes & Co. on Google Maps",
      reviewsLabel: "Web agency · Google reviews",
      leaveReview: "Leave a review on Google",
      reviews: [
        {
          name: "Andrea M.",
          rating: 5,
          text: "Ermes & Co. built our e-commerce website with great professionalism. They listen, propose solutions, and deliver on time. Highly recommended.",
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
      role: "Web agency",
      rights: "All rights reserved.",
    },
    notFound: {
      message: "Page not found",
      home: "Return to Home",
    },
  },
} as const;

export type TranslationSet = (typeof translations)[Language];

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

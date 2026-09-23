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
      brand: "Ermes Media",
      sloganFirst: "Noi ci siamo reinventati.",
      sloganSecond: "Ora reinventiamo il tuo sito.",
      intro:
        "Siamo una web agency di Napoli: progettiamo e realizziamo siti web, e-commerce e applicazioni web moderni, funzionali e pensati per raccontare davvero chi sei.",
      projectsCta: "Scopri i nostri progetti",
      contactCta: "Parliamo del tuo progetto",
      scroll: "Scroll",
    },
    about: {
      label: "Chi siamo",
      titleStart: "Nati dalla necessità.",
      titleHighlight: "Cresciuti reinventandoci",
      titleEnd: ".",

      body1: `Ermes Media nasce da un'idea semplice: Napoli ha tutto il talento, l'energia e la creatività per competere ad armi pari con le grandi città del digitale — le mancava solo qualcuno disposto a scommetterci davvero.

    Non ci siamo limitati a fondare una web agency. Oltre a progettare siti web e applicazioni, ci siamo dati un obiettivo più grande: rilanciare Napoli come polo di innovazione, dare voce e spazio a chi qui costruisce impresa, organizzare eventi che mettano in contatto professionisti, creativi e aziende del territorio, creando una rete che va oltre il singolo progetto.`,

      body2: `Mentre molti giovani lasciano Napoli per cercare altrove ciò che qui sembra mancare, noi abbiamo scelto la strada opposta: restare e reinventarci. Una scelta non nostalgica ma strategica, nata dalla convinzione che il talento napoletano meriti di essere valorizzato da qui, con standard e ambizioni internazionali.

    Questo non significa lavorare solo con realtà locali: collaboriamo con aziende e professionisti in tutta Italia e oltre, portando ovunque lo stesso approccio — competenza tecnica, cura del dettaglio e una visione che nasce da Napoli ma non si ferma qui.

    Crediamo che ogni sito che realizziamo, ogni prodotto digitale che sviluppiamo, sia anche un mattone di qualcosa di più ampio: una rete di professionisti e aziende che si connettono, collaborano e crescono insieme, partendo da Napoli per arrivare ovunque.

    Ermes Media è questo: tecnologia con radici, ambizione senza confine.`,
      valuesTitle: "Etica. Professionalita. Trasparenza.",
      values:
        "Non vendiamo soluzioni inutili. Costruiamo strumenti coerenti con identita, obiettivi e budget di ogni progetto.",
    },
    projects: {
      label: "Progetti selezionati",
      imageAlt: "Screenshot del sito",
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
        {
          title: "project-6",
          desc: "Progetto aggiuntivo con layout moderno e focus su storytelling, contenuti e conversione.",
          tech: "React · UX · Brand",
          href: "https://www.kristelpisanimassamormile.com",
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
        "Ermes Media è un team piccolo e affiatato: competenze diverse, confronto diretto e la giusta dose di ironia quando il sito decide di fare il misterioso.",
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
      location: "Napoli, Italia",
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
      whatsAppMessage: (form: ContactFormCopy) => `Ciao Ermes Media

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
      iframeTitle: "Ermes Media su Google Maps",
      reviewsLabel: "Web agency · Recensioni Google",
      leaveReview: "Lascia una recensione su Google",
      reviews: [
        {
          name: "Andrea M.",
          rating: 5,
          text: "Ermes Media ha realizzato il nostro e-commerce con grande professionalita. Ascoltano, propongono soluzioni e consegnano nei tempi. Consigliatissimi.",
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
    cookies: {
      banner: {
        title: "Rispettiamo la tua privacy",
        text: "Usiamo solo strumenti tecnici necessari al funzionamento del sito. Con il tuo consenso carichiamo anche contenuti di terze parti, come la mappa di Google Maps, che possono impostare cookie. Nessun cookie di profilazione o di statistica.",
        policyLink: "Leggi la Cookie Policy",
        accept: "Accetta tutti",
        reject: "Rifiuta",
        customize: "Personalizza",
        save: "Salva preferenze",
        close: "Chiudi e rifiuta",
        necessaryTitle: "Tecnici (sempre attivi)",
        necessaryText: "Memorizzano la lingua scelta e le tue preferenze sui cookie. Non richiedono consenso.",
        thirdPartyTitle: "Contenuti di terze parti",
        thirdPartyText: "Mappa di Google Maps nella sezione \"Dove ci trovi\". Google può impostare cookie propri.",
        alwaysOn: "Sempre attivi",
      },
      map: {
        blockedTitle: "Mappa disattivata",
        blockedText: "Per mostrare la mappa carichiamo Google Maps, che può impostare cookie di terze parti.",
        enable: "Mostra la mappa",
      },
      footer: {
        policy: "Cookie policy",
        preferences: "Preferenze cookie",
      },
      policy: {
        label: "Informativa",
        title: "Cookie Policy",
        updated: "Ultimo aggiornamento: 23 settembre 2026",
        back: "Torna alla Home",
        managePreferences: "Gestisci le preferenze cookie",
        sections: [
          {
            title: "Titolare del trattamento",
            body: [
              "Il titolare del trattamento è Ermes Media, con sede a Napoli (Italia). Per qualsiasi richiesta puoi scrivere a info@ermesmedia.com.",
            ],
          },
          {
            title: "Cosa sono i cookie",
            body: [
              "I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo dell'utente. Strumenti simili, come il localStorage del browser, svolgono funzioni analoghe e sono disciplinati allo stesso modo.",
            ],
          },
          {
            title: "Strumenti tecnici (senza consenso)",
            body: [
              "Il sito usa il localStorage del browser esclusivamente per ricordare la lingua scelta (\"ermes-co-language\") e le tue scelte sui cookie (\"ermes-media-cookie-consent\"). Questi dati restano sul tuo dispositivo, non vengono inviati a noi né a terzi e rimangono finché non li cancelli dal browser.",
              "Trattandosi di strumenti strettamente necessari, ai sensi dell'art. 122 del Codice Privacy non è richiesto il consenso.",
            ],
          },
          {
            title: "Contenuti di terze parti (con consenso)",
            body: [
              "Nella sezione \"Dove ci trovi\" è presente una mappa fornita da Google Maps (Google Ireland Limited). La mappa viene caricata solo dopo il tuo consenso: da quel momento Google può impostare e leggere cookie propri, secondo la sua informativa (policies.google.com/privacy).",
              "Se rifiuti, la mappa non viene caricata e puoi comunque aprire la nostra posizione direttamente su Google Maps tramite il link dedicato.",
            ],
          },
          {
            title: "Font",
            body: [
              "I caratteri tipografici del sito sono forniti da Google Fonts. Il servizio non imposta cookie, ma per scaricare i font il browser comunica a Google il tuo indirizzo IP.",
            ],
          },
          {
            title: "Cosa non usiamo",
            body: [
              "Il sito non utilizza cookie di profilazione, pubblicitari o di statistica (analytics).",
            ],
          },
          {
            title: "Link esterni",
            body: [
              "I link verso WhatsApp, Instagram, LinkedIn, GitHub e i siti dei nostri clienti non caricano nulla finché non ci clicchi. Una volta aperti, si applicano le informative dei rispettivi servizi.",
            ],
          },
          {
            title: "Come gestire il consenso",
            body: [
              "Puoi modificare o revocare il consenso in qualsiasi momento tramite il link \"Preferenze cookie\" nel footer di ogni pagina. Puoi inoltre cancellare cookie e dati dei siti dalle impostazioni del tuo browser.",
            ],
          },
          {
            title: "I tuoi diritti",
            body: [
              "In base agli artt. 15-22 del Regolamento UE 2016/679 (GDPR) puoi chiedere l'accesso, la rettifica, la cancellazione dei dati, la limitazione del trattamento e opporti allo stesso, scrivendo a info@ermesmedia.com. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).",
            ],
          },
        ],
      },
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
      brand: "Ermes Media",
      sloganFirst: "We reinvented ourselves.",
      sloganSecond: "Now we reinvent your website.",
      intro:
        "We are a web agency based in Naples, designing and building modern, functional websites, e-commerce stores and web applications that actually tell who you are.",
      projectsCta: "Discover our projects",
      contactCta: "Let's talk about your project",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      titleStart: "Born from necessity.",
      titleHighlight: "Built through reinvention",
      titleEnd: ".",
      body1: `Ermes Media was born from a simple idea: Naples has the talent, energy, and creativity to compete on equal terms with the major digital cities — it only lacked people willing to truly bet on it.

    We didn't limit ourselves to founding a web agency. Beyond designing websites and applications, we set ourselves a bigger goal: to relaunch Naples as a hub of innovation, to give voice and space to those who build businesses here, and to organise events that connect professionals, creatives, and local companies — creating a network that goes beyond any single project.`,
      body2: `While many young people leave Naples to look elsewhere for what seems to be missing here, we chose the opposite path: to stay and reinvent ourselves. A choice that is not nostalgic but strategic, born from the belief that Neapolitan talent deserves to be valued from here, with international standards and ambitions.

    This does not mean we work only with local organisations: we collaborate with companies and professionals across Italy and beyond, bringing the same approach everywhere — technical competence, attention to detail, and a vision born in Naples that doesn't stop there.

    We believe every site we build, every digital product we develop, is also a building block of something larger: a network of professionals and companies that connect, collaborate, and grow together, starting from Naples and reaching far beyond.

    Ermes Media is this: technology with roots, ambition without borders.`,
      valuesTitle: "Ethics. Professionalism. Transparency.",
      values:
        "We do not sell unnecessary solutions. We build tools aligned with each project's identity, goals, and budget.",
    },
    projects: {
      label: "Selected work",
      imageAlt: "Screenshot of the website",
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
        {
          title: "project-6",
          desc: "Additional project with a modern layout and a focus on storytelling, content, and conversion.",
          tech: "React · UX · Brand",
          href: "https://www.kristelpisanimassamormile.com",
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
        "Ermes Media is a small, close-knit team: different skills, direct collaboration, and just enough irony when a website decides to act mysterious.",
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
      location: "Naples, Italy",
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
      whatsAppMessage: (form: ContactFormCopy) => `Hi Ermes Media,

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
      iframeTitle: "Ermes Media on Google Maps",
      reviewsLabel: "Web agency · Google reviews",
      leaveReview: "Leave a review on Google",
      reviews: [
        {
          name: "Andrea M.",
          rating: 5,
          text: "Ermes Media built our e-commerce website with great professionalism. They listen, propose solutions, and deliver on time. Highly recommended.",
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
    cookies: {
      banner: {
        title: "We respect your privacy",
        text: "We only use technical tools required for the website to work. With your consent we also load third-party content, such as the Google Maps map, which may set cookies. No profiling or analytics cookies.",
        policyLink: "Read the Cookie Policy",
        accept: "Accept all",
        reject: "Reject",
        customize: "Customize",
        save: "Save preferences",
        close: "Close and reject",
        necessaryTitle: "Technical (always on)",
        necessaryText: "They remember your language and your cookie preferences. No consent required.",
        thirdPartyTitle: "Third-party content",
        thirdPartyText: "Google Maps map in the \"Where to find us\" section. Google may set its own cookies.",
        alwaysOn: "Always on",
      },
      map: {
        blockedTitle: "Map disabled",
        blockedText: "To show the map we load Google Maps, which may set third-party cookies.",
        enable: "Show the map",
      },
      footer: {
        policy: "Cookie policy",
        preferences: "Cookie preferences",
      },
      policy: {
        label: "Notice",
        title: "Cookie Policy",
        updated: "Last updated: 23 September 2026",
        back: "Return to Home",
        managePreferences: "Manage cookie preferences",
        sections: [
          {
            title: "Data controller",
            body: [
              "The data controller is Ermes Media, based in Naples (Italy). For any request you can write to info@ermesmedia.com.",
            ],
          },
          {
            title: "What cookies are",
            body: [
              "Cookies are small text files that websites store on the user's device. Similar tools, such as the browser's localStorage, serve comparable purposes and are regulated in the same way.",
            ],
          },
          {
            title: "Technical tools (no consent)",
            body: [
              "The website uses the browser's localStorage only to remember your language (\"ermes-co-language\") and your cookie choices (\"ermes-media-cookie-consent\"). This data stays on your device, is not sent to us or third parties, and remains until you clear it from your browser.",
              "As these tools are strictly necessary, no consent is required under art. 122 of the Italian Privacy Code.",
            ],
          },
          {
            title: "Third-party content (with consent)",
            body: [
              "The \"Where to find us\" section includes a map provided by Google Maps (Google Ireland Limited). The map is loaded only after your consent: from then on Google may set and read its own cookies, according to its privacy policy (policies.google.com/privacy).",
              "If you reject, the map is not loaded and you can still open our location directly on Google Maps through the dedicated link.",
            ],
          },
          {
            title: "Fonts",
            body: [
              "The website's typefaces are served by Google Fonts. The service does not set cookies, but to download the fonts your browser sends your IP address to Google.",
            ],
          },
          {
            title: "What we don't use",
            body: [
              "The website does not use profiling, advertising or statistics (analytics) cookies.",
            ],
          },
          {
            title: "External links",
            body: [
              "Links to WhatsApp, Instagram, LinkedIn, GitHub and our clients' websites don't load anything until you click them. Once opened, the privacy policies of those services apply.",
            ],
          },
          {
            title: "Managing your consent",
            body: [
              "You can change or withdraw your consent at any time through the \"Cookie preferences\" link in the footer of every page. You can also delete cookies and site data from your browser settings.",
            ],
          },
          {
            title: "Your rights",
            body: [
              "Under articles 15-22 of EU Regulation 2016/679 (GDPR) you can request access, rectification, erasure, restriction of processing and object to it, by writing to info@ermesmedia.com. You also have the right to lodge a complaint with the Italian Data Protection Authority (garanteprivacy.it).",
            ],
          },
        ],
      },
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

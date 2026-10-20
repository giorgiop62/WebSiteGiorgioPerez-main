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
          title: "kristelpisanimassamormile.com",
          desc: "Sito vetrina realizzato in React per fotografa, con portfolio e presentazione dei servizi.",
          tech: "React · Portfolio · UX",
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
      titleStart: "Due teste,",
      titleHighlight: "una direzione",
      titleEnd: ".",
      intro:
        "Ermes Media è un team piccolo e affiatato: competenze diverse, confronto diretto e la giusta dose di ironia quando il sito decide di fare il misterioso.",
      discover: "Scopri il profilo",
      back: "Torna al team",
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
          role: "Co-Founder & Lead Web Developer",
          description:
            "Sviluppatore full-stack: trasforma idee e requisiti di business in siti e applicazioni web performanti, curando frontend e backend.",
          bio: [
            "Sviluppatore web full-stack e Co-Founder di Ermes Media, con esperienza nello sviluppo di applicazioni web moderne, supporto IT e progettazione di soluzioni digitali orientate alle esigenze del cliente. Si occupa di trasformare requisiti e idee di business in prodotti web funzionali, performanti e responsive, curando sia il frontend che il backend.",
          ],
          skills: [
            "Web Development",
            "Frontend Development",
            "React",
            "Vue.js",
            "JavaScript",
            "HTML / CSS / SASS",
            "PHP / Laravel / Lumen",
            "Node.js",
            "MySQL",
            "Supabase",
            "WordPress / WooCommerce",
            "REST API",
            "Git / GitHub",
            "UI Implementation",
            "SEO Tecnica",
            "Web Performance",
            "IT Support",
          ],
          experience: [
            {
              title: "Co-Founder & Lead Web Developer",
              meta: "Ermes Media",
              items: [
                "Sviluppo di siti web e applicazioni digitali.",
                "Progettazione frontend e backend.",
                "Ottimizzazione delle performance.",
                "Integrazione di database e servizi esterni.",
                "Supporto tecnico ai clienti.",
              ],
            },
            {
              title: "Web Developer & IT Support",
              meta: "Finital S.p.A.",
              items: [
                "Sviluppo e manutenzione di applicazioni web interne.",
                "Sviluppo frontend con React.",
                "Backend con PHP, Lumen e Laravel.",
                "Gestione database MySQL.",
                "Supporto agli utenti.",
                "Gestione delle problematiche tecniche.",
                "Documentazione e formazione.",
              ],
            },
            {
              title: "Full-Stack Web Developer",
              meta: "Boolean",
              text: "Percorso intensivo di circa 700 ore dedicato allo sviluppo web full-stack.",
              tags: ["HTML", "CSS", "SASS", "JavaScript", "Vue", "PHP", "MySQL", "Axios", "Laravel"],
            },
          ],
          education: [
            {
              title: "Full-Stack Web Developer",
              meta: "Boolean Careers · 2022–2023",
              text: "Percorso intensivo di circa 700 ore.",
            },
            {
              title: "Diploma di maturità scientifica",
              meta: "Liceo Scientifico Vittorio Imbriani · 2009–2015",
            },
            {
              title: "Informatica",
              meta: "Università di Pisa",
              text: "Percorso universitario in Informatica, con studi in programmazione, basi di dati, architettura degli elaboratori, logica e analisi matematica.",
            },
          ],
          projects: [
            {
              title: "Ermes Media",
              text: "Co-Founder e Lead Web Developer. Progettazione e sviluppo di siti web e soluzioni digitali per aziende e professionisti.",
            },
            {
              title: "Gestionale assicurativo Finital",
              text: "Sviluppo di moduli e interfacce per applicazioni aziendali.",
            },
            {
              title: "Siti web corporate e professionali",
              text: "Realizzazione di siti responsive, ottimizzati per performance, SEO e conversione.",
            },
            {
              title: "Web Application",
              text: "Sviluppo di interfacce e funzionalità dinamiche utilizzando tecnologie moderne come React e Supabase.",
            },
          ],
          cvHref: "",
        },
        {
          slug: "michele-lombardo",
          name: "Michele Lombardo",
          role: "Co-Founder & Head of Business Strategy",
          description:
            "Guida la strategia di business, il coordinamento dei progetti e la comunicazione social, forte di un background in Cyber Security in ambito bancario.",
          bio: [
            "Co-Founder di Ermes Media e responsabile della strategia di business, della gestione dei progetti digitali e della comunicazione sui social media. Studente di Ingegneria Informatica, affianca una formazione tecnica a un forte interesse per strategia digitale, business e comunicazione.",
            "La sua esperienza professionale nel settore della Cyber Security in ambito bancario gli ha permesso di sviluppare competenze nell’analisi dei processi, nella sicurezza dei sistemi e nella gestione delle problematiche legate alla sicurezza informatica.",
            "In Ermes Media si occupa di trasformare gli obiettivi dei clienti in strategie digitali concrete, coordinando i progetti e curando anche la presenza dei brand sui social media.",
          ],
          skills: [
            "Business Strategy",
            "Social Media Management",
            "Social Media Strategy",
            "Digital Strategy",
            "Project Management",
            "Lead Generation",
            "Analisi dei Requisiti Business",
            "UX Strategy",
            "Conversion Rate Optimization (CRO)",
            "Cyber Security",
            "IT Security",
            "Risk Analysis",
            "Process Analysis",
            "Client Management",
            "Content Strategy",
          ],
          experience: [
            {
              title: "Co-Founder & Head of Business Strategy",
              meta: "Ermes Media",
              items: [
                "Gestione della strategia aziendale.",
                "Analisi delle esigenze dei clienti.",
                "Definizione degli obiettivi.",
                "Coordinamento dei progetti.",
                "Sviluppo di strategie di acquisizione e conversione.",
                "Analisi dei requisiti business.",
              ],
            },
            {
              title: "Social Media Manager",
              meta: "Ermes Media",
              items: [
                "Gestione della presenza digitale dei clienti.",
                "Pianificazione dei contenuti.",
                "Definizione della strategia editoriale.",
                "Sviluppo della comunicazione dei brand sui social media.",
                "Analisi delle performance dei contenuti.",
              ],
            },
            {
              title: "Cyber Security",
              meta: "Settore Bancario",
              text: "Esperienza professionale nell’ambito della sicurezza informatica in ambiente bancario, con attività legate alla protezione dei sistemi e dei processi digitali e all’analisi delle problematiche di sicurezza.",
            },
          ],
          education: [
            {
              title: "Ingegneria Informatica",
              meta: "Università",
              text: "Percorso universitario in Ingegneria Informatica, con formazione tecnica nell’ambito dell’informatica, dei sistemi e delle tecnologie digitali.",
            },
          ],
          projects: [
            {
              title: "Ermes Media",
              text: "Co-Founder e Head of Business Strategy. Definizione delle strategie digitali, analisi dei requisiti, gestione dei progetti e sviluppo delle strategie di acquisizione e conversione.",
            },
            {
              title: "Social Media Management",
              text: "Gestione e sviluppo della presenza digitale di brand e professionisti attraverso strategie di contenuto e comunicazione sui social media.",
            },
          ],
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
      location: "Via Santa Maria Antesaecula, 112 — 80137 Napoli",
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
    legal: {
      footer: {
        privacy: "Privacy policy",
        terms: "Termini di servizio",
      },
      back: "Torna alla Home",
      privacy: {
        label: "Informativa",
        title: "Privacy Policy",
        updated: "Ultimo aggiornamento: 20 ottobre 2026",
        sections: [
          {
            title: "Titolare del trattamento",
            body: [
              "Il titolare del trattamento è Ermes Media, Via Santa Maria Antesaecula, 112 — 80137 Napoli (Italia). Per qualsiasi richiesta sui tuoi dati puoi scrivere a info@ermesmedia.com.",
              "Questa informativa riguarda l'assistente virtuale WhatsApp di Ermes Media. Per il sito web vale la Cookie Policy.",
            ],
          },
          {
            title: "Quali dati trattiamo",
            body: [
              "Quando scrivi al nostro numero WhatsApp di assistenza trattiamo il tuo numero di telefono, il nome del profilo WhatsApp, il testo dei messaggi che ci invii, la data e l'ora dei messaggi e i dati tecnici necessari a recapitarli.",
              "Ti chiediamo di non inviare dati particolari (ad esempio sulla salute) o dati di altre persone: non servono per rispondere alle tue richieste.",
            ],
          },
          {
            title: "Perché li trattiamo",
            body: [
              "Usiamo i tuoi messaggi solo per risponderti: informazioni sui nostri servizi, richieste di preventivo e contatti con il team. Le risposte sono generate automaticamente da un sistema di intelligenza artificiale.",
              "La base giuridica è l'esecuzione di misure precontrattuali adottate su tua richiesta (art. 6.1.b GDPR) e il nostro legittimo interesse a rispondere a chi ci contatta (art. 6.1.f GDPR). Non usiamo i tuoi dati per marketing, profilazione o decisioni automatizzate con effetti giuridici su di te.",
            ],
          },
          {
            title: "Chi tratta i dati per nostro conto",
            body: [
              "WhatsApp Business Platform — Meta Platforms Ireland Limited: riceve e recapita i messaggi tra te e il nostro numero.",
              "n8n Cloud — n8n GmbH (Germania, UE): esegue l'automazione che riceve il messaggio, lo passa all'intelligenza artificiale e invia la risposta.",
              "Claude — Anthropic (Anthropic Ireland Limited / Anthropic PBC, USA): genera il testo della risposta a partire dal tuo messaggio. Anthropic non usa i dati ricevuti tramite le sue API per addestrare i propri modelli.",
              "Alcuni di questi fornitori possono trattare i dati anche fuori dall'Unione europea, in particolare negli Stati Uniti. In questi casi il trasferimento avviene sulla base del Data Privacy Framework UE-USA o delle clausole contrattuali standard approvate dalla Commissione europea.",
            ],
          },
          {
            title: "Per quanto tempo li conserviamo",
            body: [
              "Il bot non salva la cronologia delle conversazioni in un database e non ha memoria delle chat precedenti.",
              "I registri tecnici delle esecuzioni su n8n, che contengono il testo del messaggio e il numero, vengono cancellati automaticamente entro 30 giorni. Anthropic conserva i dati delle richieste per un massimo di 30 giorni a fini di sicurezza, salvo obblighi di legge. Meta conserva i messaggi secondo le condizioni della WhatsApp Business Platform.",
              "La conversazione resta visibile nella tua app WhatsApp e nell'account WhatsApp Business di Ermes Media finché non viene eliminata.",
            ],
          },
          {
            title: "I tuoi diritti",
            body: [
              "In base agli artt. 15-22 del Regolamento UE 2016/679 (GDPR) puoi chiedere in qualsiasi momento l'accesso ai tuoi dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità, e puoi opporti al trattamento.",
              "Per esercitarli, o per chiedere la cancellazione dei tuoi dati, scrivi a info@ermesmedia.com indicando il numero di telefono con cui ci hai scritto. Ti rispondiamo entro 30 giorni.",
              "Puoi anche smettere di usare il servizio in qualsiasi momento: basta non scriverci più o bloccare il nostro numero su WhatsApp.",
              "Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).",
            ],
          },
        ],
      },
      terms: {
        label: "Condizioni",
        title: "Termini di servizio",
        updated: "Ultimo aggiornamento: 20 ottobre 2026",
        sections: [
          {
            title: "Il servizio",
            body: [
              "Ermes Media (Via Santa Maria Antesaecula, 112 — 80137 Napoli) mette a disposizione un assistente virtuale su WhatsApp che risponde a domande sui nostri servizi, raccoglie richieste di preventivo e ti mette in contatto con il team.",
              "Il servizio è gratuito. Scrivendo al nostro numero WhatsApp accetti questi termini.",
            ],
          },
          {
            title: "Risposte generate da un'intelligenza artificiale",
            body: [
              "Le risposte dell'assistente sono generate automaticamente da un sistema di intelligenza artificiale (Claude, di Anthropic) e non sono scritte da una persona.",
              "Le risposte possono contenere errori, imprecisioni o informazioni non aggiornate. Hanno valore solo informativo: prezzi, tempi e condizioni sono vincolanti solo quando confermati per iscritto dal team di Ermes Media, ad esempio in un preventivo firmato.",
              "Se vuoi parlare con una persona, chiedilo nella chat oppure scrivi a info@ermesmedia.com.",
            ],
          },
          {
            title: "Uso corretto",
            body: [
              "Ti chiediamo di usare il servizio solo per comunicare con Ermes Media. Non è consentito inviare contenuti illeciti, offensivi o spam, né tentare di aggirare o manomettere il funzionamento dell'assistente.",
              "Possiamo limitare o interrompere il servizio per chi non rispetta queste regole.",
            ],
          },
          {
            title: "Disponibilità e responsabilità",
            body: [
              "Il servizio dipende da piattaforme di terze parti (WhatsApp, n8n, Anthropic) e può essere interrotto, modificato o sospeso in qualsiasi momento, anche senza preavviso.",
              "Nei limiti consentiti dalla legge, Ermes Media non risponde di danni derivanti dall'uso delle risposte automatiche o dall'indisponibilità del servizio.",
            ],
          },
          {
            title: "Dati personali",
            body: [
              "Il trattamento dei dati che ci invii tramite WhatsApp è descritto nella Privacy Policy.",
            ],
          },
          {
            title: "Modifiche e legge applicabile",
            body: [
              "Possiamo aggiornare questi termini: la data in alto indica l'ultima versione. Questi termini sono regolati dalla legge italiana; restano salvi i diritti inderogabili previsti per i consumatori.",
              "Per qualsiasi domanda scrivi a info@ermesmedia.com.",
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
          title: "kristelpisanimassamormile.com",
          desc: "React showcase website for a photographer, with portfolio and services presentation.",
          tech: "React · Portfolio · UX",
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
      titleStart: "Two minds,",
      titleHighlight: "one direction",
      titleEnd: ".",
      intro:
        "Ermes Media is a small, close-knit team: different skills, direct collaboration, and just enough irony when a website decides to act mysterious.",
      discover: "Discover profile",
      back: "Back to team",
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
          role: "Co-Founder & Lead Web Developer",
          description:
            "Full-stack developer who turns business ideas and requirements into fast, reliable websites and web applications, from frontend to backend.",
          bio: [
            "Full-stack web developer and Co-Founder of Ermes Media, with experience building modern web applications, providing IT support, and designing digital solutions around client needs. He turns business requirements and ideas into functional, high-performance, responsive web products, taking care of both frontend and backend.",
          ],
          skills: [
            "Web Development",
            "Frontend Development",
            "React",
            "Vue.js",
            "JavaScript",
            "HTML / CSS / SASS",
            "PHP / Laravel / Lumen",
            "Node.js",
            "MySQL",
            "Supabase",
            "WordPress / WooCommerce",
            "REST API",
            "Git / GitHub",
            "UI Implementation",
            "Technical SEO",
            "Web Performance",
            "IT Support",
          ],
          experience: [
            {
              title: "Co-Founder & Lead Web Developer",
              meta: "Ermes Media",
              items: [
                "Development of websites and digital applications.",
                "Frontend and backend design.",
                "Performance optimization.",
                "Integration of databases and external services.",
                "Technical support for clients.",
              ],
            },
            {
              title: "Web Developer & IT Support",
              meta: "Finital S.p.A.",
              items: [
                "Development and maintenance of internal web applications.",
                "Frontend development with React.",
                "Backend with PHP, Lumen, and Laravel.",
                "MySQL database management.",
                "User support.",
                "Troubleshooting technical issues.",
                "Documentation and training.",
              ],
            },
            {
              title: "Full-Stack Web Developer",
              meta: "Boolean",
              text: "Intensive program of about 700 hours focused on full-stack web development.",
              tags: ["HTML", "CSS", "SASS", "JavaScript", "Vue", "PHP", "MySQL", "Axios", "Laravel"],
            },
          ],
          education: [
            {
              title: "Full-Stack Web Developer",
              meta: "Boolean Careers · 2022–2023",
              text: "Intensive program of about 700 hours.",
            },
            {
              title: "Scientific high school diploma",
              meta: "Liceo Scientifico Vittorio Imbriani · 2009–2015",
            },
            {
              title: "Computer Science",
              meta: "University of Pisa",
              text: "University studies in Computer Science, covering programming, databases, computer architecture, logic, and calculus.",
            },
          ],
          projects: [
            {
              title: "Ermes Media",
              text: "Co-Founder and Lead Web Developer. Design and development of websites and digital solutions for companies and professionals.",
            },
            {
              title: "Finital insurance management system",
              text: "Development of modules and interfaces for business applications.",
            },
            {
              title: "Corporate and professional websites",
              text: "Responsive websites optimized for performance, SEO, and conversion.",
            },
            {
              title: "Web Application",
              text: "Development of dynamic interfaces and features using modern technologies such as React and Supabase.",
            },
          ],
          cvHref: "",
        },
        {
          slug: "michele-lombardo",
          name: "Michele Lombardo",
          role: "Co-Founder & Head of Business Strategy",
          description:
            "Leads business strategy, project coordination, and social media communication, backed by a Cyber Security background in banking.",
          bio: [
            "Co-Founder of Ermes Media, responsible for business strategy, digital project management, and social media communication. A Computer Engineering student, he pairs a technical background with a strong interest in digital strategy, business, and communication.",
            "His professional experience in Cyber Security in the banking sector has given him skills in process analysis, systems security, and handling IT security issues.",
            "At Ermes Media he turns client goals into concrete digital strategies, coordinating projects and managing brands’ presence on social media.",
          ],
          skills: [
            "Business Strategy",
            "Social Media Management",
            "Social Media Strategy",
            "Digital Strategy",
            "Project Management",
            "Lead Generation",
            "Business Requirements Analysis",
            "UX Strategy",
            "Conversion Rate Optimization (CRO)",
            "Cyber Security",
            "IT Security",
            "Risk Analysis",
            "Process Analysis",
            "Client Management",
            "Content Strategy",
          ],
          experience: [
            {
              title: "Co-Founder & Head of Business Strategy",
              meta: "Ermes Media",
              items: [
                "Company strategy management.",
                "Analysis of client needs.",
                "Goal setting.",
                "Project coordination.",
                "Development of acquisition and conversion strategies.",
                "Business requirements analysis.",
              ],
            },
            {
              title: "Social Media Manager",
              meta: "Ermes Media",
              items: [
                "Management of clients’ digital presence.",
                "Content planning.",
                "Editorial strategy definition.",
                "Development of brand communication on social media.",
                "Content performance analysis.",
              ],
            },
            {
              title: "Cyber Security",
              meta: "Banking sector",
              text: "Professional experience in IT security in a banking environment, working on the protection of systems and digital processes and on the analysis of security issues.",
            },
          ],
          education: [
            {
              title: "Computer Engineering",
              meta: "University",
              text: "University studies in Computer Engineering, with technical training in computer science, systems, and digital technologies.",
            },
          ],
          projects: [
            {
              title: "Ermes Media",
              text: "Co-Founder and Head of Business Strategy. Definition of digital strategies, requirements analysis, project management, and development of acquisition and conversion strategies.",
            },
            {
              title: "Social Media Management",
              text: "Management and growth of the digital presence of brands and professionals through content strategy and social media communication.",
            },
          ],
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
      location: "Via Santa Maria Antesaecula, 112 — 80137 Naples, Italy",
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
    legal: {
      footer: {
        privacy: "Privacy policy",
        terms: "Terms of service",
      },
      back: "Back to Home",
      privacy: {
        label: "Notice",
        title: "Privacy Policy",
        updated: "Last updated: 20 October 2026",
        sections: [
          {
            title: "Data controller",
            body: [
              "The data controller is Ermes Media, Via Santa Maria Antesaecula, 112 — 80137 Naples (Italy). For any request about your data you can write to info@ermesmedia.com.",
              "This policy covers the Ermes Media WhatsApp virtual assistant. For the website, see the Cookie Policy.",
            ],
          },
          {
            title: "What data we process",
            body: [
              "When you write to our WhatsApp support number we process your phone number, your WhatsApp profile name, the text of the messages you send us, the date and time of the messages and the technical data needed to deliver them.",
              "Please don't send special categories of data (for example about your health) or other people's data: we don't need them to answer your requests.",
            ],
          },
          {
            title: "Why we process it",
            body: [
              "We use your messages only to reply to you: information about our services, quote requests and putting you in touch with the team. Replies are generated automatically by an artificial intelligence system.",
              "The legal basis is taking steps at your request prior to entering into a contract (art. 6.1.b GDPR) and our legitimate interest in replying to people who contact us (art. 6.1.f GDPR). We don't use your data for marketing, profiling or automated decisions with legal effects on you.",
            ],
          },
          {
            title: "Who processes the data on our behalf",
            body: [
              "WhatsApp Business Platform — Meta Platforms Ireland Limited: receives and delivers the messages between you and our number.",
              "n8n Cloud — n8n GmbH (Germany, EU): runs the automation that receives your message, passes it to the AI and sends the reply.",
              "Claude — Anthropic (Anthropic Ireland Limited / Anthropic PBC, USA): generates the reply text from your message. Anthropic does not use data received through its API to train its models.",
              "Some of these providers may process data outside the European Union, in particular in the United States. In those cases the transfer relies on the EU-US Data Privacy Framework or on the standard contractual clauses approved by the European Commission.",
            ],
          },
          {
            title: "How long we keep it",
            body: [
              "The bot does not store conversation history in a database and has no memory of previous chats.",
              "Technical execution logs on n8n, which contain the message text and the phone number, are deleted automatically within 30 days. Anthropic keeps request data for up to 30 days for safety purposes, unless required by law. Meta keeps messages according to the WhatsApp Business Platform terms.",
              "The conversation stays visible in your WhatsApp app and in the Ermes Media WhatsApp Business account until it is deleted.",
            ],
          },
          {
            title: "Your rights",
            body: [
              "Under articles 15-22 of EU Regulation 2016/679 (GDPR) you can at any time request access to your data, rectification, erasure, restriction of processing and portability, and you can object to the processing.",
              "To exercise them, or to ask us to delete your data, write to info@ermesmedia.com stating the phone number you used to contact us. We reply within 30 days.",
              "You can also stop using the service at any time: just stop writing to us or block our number on WhatsApp.",
              "You also have the right to lodge a complaint with the Italian Data Protection Authority (garanteprivacy.it).",
            ],
          },
        ],
      },
      terms: {
        label: "Terms",
        title: "Terms of Service",
        updated: "Last updated: 20 October 2026",
        sections: [
          {
            title: "The service",
            body: [
              "Ermes Media (Via Santa Maria Antesaecula, 112 — 80137 Naples, Italy) provides a WhatsApp virtual assistant that answers questions about our services, collects quote requests and puts you in touch with the team.",
              "The service is free. By writing to our WhatsApp number you accept these terms.",
            ],
          },
          {
            title: "Replies generated by artificial intelligence",
            body: [
              "The assistant's replies are generated automatically by an artificial intelligence system (Claude, by Anthropic) and are not written by a person.",
              "Replies may contain errors, inaccuracies or outdated information. They are for information only: prices, timelines and conditions are binding only once confirmed in writing by the Ermes Media team, for example in a signed quote.",
              "If you want to talk to a person, ask in the chat or write to info@ermesmedia.com.",
            ],
          },
          {
            title: "Acceptable use",
            body: [
              "Please use the service only to communicate with Ermes Media. You may not send unlawful, offensive or spam content, or try to bypass or tamper with the assistant.",
              "We may limit or stop the service for anyone who doesn't follow these rules.",
            ],
          },
          {
            title: "Availability and liability",
            body: [
              "The service relies on third-party platforms (WhatsApp, n8n, Anthropic) and may be interrupted, changed or suspended at any time, including without notice.",
              "To the extent permitted by law, Ermes Media is not liable for damages arising from the use of automated replies or from the service being unavailable.",
            ],
          },
          {
            title: "Personal data",
            body: [
              "How we process the data you send us via WhatsApp is described in the Privacy Policy.",
            ],
          },
          {
            title: "Changes and governing law",
            body: [
              "We may update these terms: the date at the top shows the latest version. These terms are governed by Italian law, without prejudice to the mandatory rights granted to consumers.",
              "For any questions write to info@ermesmedia.com.",
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

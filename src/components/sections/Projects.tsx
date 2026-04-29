import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.png";
import p5 from "@/assets/project-5.png";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  { 
    title: "andreanimanola.com", 
    desc: "E-commerce artistico per la vendita di quadri, con focus su UX e conversioni.", 
    tech: "WordPress · WooCommerce", 
    img: p1, 
    href: "https://andreanimanola.com" 
  },
  { 
    title: "jurgen-confrontaofferte.it", 
    desc: "Sito WordPress con form avanzati per la generazione e gestione dei clienti.", 
    tech: "WordPress · Form · Lead Generation", 
    img: p3, 
    href: "https://jurgen-confrontaofferte.it" 
  },
  { 
    title: "lorenzosalvaticoach.it", 
    desc: "Sito vetrina sviluppato in React con form interattivo per profilare e acquisire nuovi utenti.", 
    tech: "React · UX · Form", 
    img: p5, 
    href: "https://www.lorenzosalvaticoach.it/" 
  },
  { 
    title: "maydaymassage.it", 
    desc: "Sito vetrina in React con sistema di prenotazione e acquisto gift card.", 
    tech: "React · Booking · UX", 
    img: p2, 
    href: "https://maydaymassage.it" 
  },
  { 
    title: "alfredopumilia.com", 
    desc: "Sito vetrina realizzato in WordPress per artista, con gestione concerti ed eventi.", 
    tech: "WordPress · Event Management · UX", 
    img: p4, 
    href: "https://alfredopumilia.com" 
  },
];

export const Projects = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="py-32 md:py-48 bg-secondary/30">
      <div className="container mx-auto">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-6">
              <span className="hairline mr-4 align-middle" /> Selected work
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Una selezione di <span className="italic text-vesuvio">progetti recenti</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Ogni lavoro nasce da un dialogo: con il cliente, con il contesto, con la materia digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, desc, tech, img, href, index }: { title: string; desc: string; tech: string; img: string; href: string; index: number }) => {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className={`reveal group cursor-pointer block ${index % 2 === 1 ? "md:translate-y-16" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-background aspect-[4/3] shadow-elegant">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          loading="lazy"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-vesuvio text-primary-foreground flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl md:text-3xl group-hover:text-vesuvio transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground mt-2 text-sm">{desc}</p>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap pt-2 hidden sm:block">
          {tech}
        </span>
      </div>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground sm:hidden block mt-2">{tech}</span>
    </a>
  );
};

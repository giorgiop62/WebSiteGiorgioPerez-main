import p1 from "@/assets/project-1.webp";
import p2 from "@/assets/project-2.webp";
import p3 from "@/assets/project-3.webp";
import p4 from "@/assets/project-4.webp";
import p5 from "@/assets/project-5.webp";
import p6 from "@/assets/project-6.webp";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";

// Dimensioni reali degli screenshot: servono per width/height (niente layout shift)
const projectImages = [
  { src: p1, width: 1200, height: 603 },
  { src: p3, width: 1200, height: 602 },
  { src: p5, width: 1200, height: 601 },
  { src: p2, width: 1200, height: 603 },
  { src: p4, width: 1200, height: 557 },
  { src: p6, width: 1200, height: 649 },
];

export const Projects = () => {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  const projects = t.projects.items.map((project, index) => ({
    ...project,
    img: projectImages[index],
  }));

  return (
    <section id="progetti" className="py-24 md:py-32 bg-secondary/30 scroll-mt-16">
      <div className="container mx-auto">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="section-label mb-6">
              <span className="hairline mr-4 align-middle" /> {t.projects.label}
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              {t.projects.titleStart} <span className="italic text-vesuvio">{t.projects.titleHighlight}</span>{t.projects.titleEnd}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            {t.projects.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} altPrefix={t.projects.imageAlt} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  desc,
  tech,
  img,
  href,
  index,
  altPrefix,
}: {
  title: string;
  desc: string;
  tech: string;
  img: { src: string; width: number; height: number };
  href: string;
  index: number;
  altPrefix: string;
}) => {
  const ref = useReveal<HTMLAnchorElement>();
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className="reveal group cursor-pointer block"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-navy-deep border border-border shadow-elegant">
        {/* Barra stile browser: lo screenshot viene mostrato intero, senza crop */}
        <div className="flex items-center gap-1.5 px-3 h-7 border-b border-border bg-background/60" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-primary/70" />
        </div>
        <div className="relative aspect-[2/1] overflow-hidden">
          <img
            src={img.src}
            alt={`${altPrefix} ${title}`}
            className="w-full h-full object-contain transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
            width={img.width}
            height={img.height}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-vesuvio text-primary-foreground flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="font-display text-xl md:text-2xl group-hover:text-vesuvio transition-colors duration-300 break-words">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm">{desc}</p>
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80 block mt-3">{tech}</span>
      </div>
    </a>
  );
};

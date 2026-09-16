import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.png";
import p5 from "@/assets/project-5.png";
import p6 from "@/assets/project-6.png";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";

const projectImages = [p1, p3, p5, p2, p4, p6];

export const Projects = () => {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  const projects = t.projects.items.map((project, index) => ({
    ...project,
    img: projectImages[index],
  }));

  return (
    <section id="projects" className="py-32 md:py-48 bg-secondary/30">
      <div className="container mx-auto">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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

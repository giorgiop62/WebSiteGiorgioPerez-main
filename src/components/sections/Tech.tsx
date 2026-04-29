import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";

const techs = [
  { name: "HTML5", svg: <path d="M12 2L3 4l1.5 17L12 23l7.5-2L21 4 12 2zm5.5 6H8.7l.2 2.4h8.4l-.6 7.1L12 19l-4.7-1.5-.3-3.2h2.3l.2 1.6 2.5.7 2.5-.7.3-3.2H7l-.6-6.7h11.4l-.3 2z" /> },
  { name: "CSS3", svg: <path d="M12 2L3 4l1.5 17L12 23l7.5-2L21 4 12 2zm5.5 4.7l-.4 4.5H8.5l.1 1.6h7.9l-.4 4.5-3.6 1-3.6-1-.2-2.6h1.7l.1 1.4 2 .6 2-.6.2-2.4H7.3l-.4-4.5h10.3l.1-1.5H6.8L6.7 6.7h10.8z" /> },
  { name: "JavaScript", svg: <><rect x="2" y="2" width="20" height="20" rx="1" /><path fill="hsl(var(--background))" d="M7.5 17.3c.4.7.7 1.2 1.6 1.2.8 0 1.3-.4 1.3-1.7v-9h2v9c0 2.3-1.3 3.4-3.2 3.4-1.7 0-2.7-.9-3.2-1.9l1.5-.9zm6.5-.2c.4.7 1 1.3 2 1.3.9 0 1.5-.5 1.5-1.1 0-.7-.6-1-1.6-1.5l-.5-.2c-1.6-.7-2.6-1.5-2.6-3.3 0-1.6 1.2-2.9 3.2-2.9 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.7-.8-.9-1.4-.9-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.5.2c1.9.8 2.9 1.6 2.9 3.4 0 2-1.6 3.1-3.7 3.1-2.1 0-3.4-1-4.1-2.3l1.7-1z" /></> },
  { name: "React", svg: <><circle cx="12" cy="12" r="2" /><g fill="none" stroke="currentColor" strokeWidth="1"><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></g></> },
  { name: "Vue", svg: <path d="M2 3l10 17L22 3h-4l-6 10.4L6 3H2z" /> },
  { name: "Node.js", svg: <path d="M12 2l-9 5v10l9 5 9-5V7l-9-5zm0 2.3L19 8v8l-7 4-7-4V8l7-3.7z" /> },
  { name: "WordPress", svg: <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.5c-4.7 0-8.5-3.8-8.5-8.5 0-1.2.3-2.4.7-3.4l4.7 12.8c-2.9-1.4-4.9-4.4-4.9-7.9 0-1.2.3-2.4.7-3.4L9 18.4l-2.5-7.2 2-.2v-.4l-1.8-.1.2-.4 5.4-.1c.9 0 1.7-.1 1.7-.1l-1 .1-.3 5.7L13 18.5l1.6-4.7-1.7-4.5h.5l1.7 4.6 1.5-5h-.5l-1 .3.4-1.3 4 1.4-1 .3 1.7 4.5h.5L19.5 9c1 1.4 1.5 3.1 1.5 4.9-.1 4.7-3.9 8.6-9 8.6z" /> },
  { name: "Figma", svg: <path d="M8 2h8v4h-4a2 2 0 010-4h-4zm0 6h4v4H8a2 2 0 010-4zm0 6h4v4a2 2 0 11-4 0v-4zm6-6h2a2 2 0 110 4h-2a2 2 0 110-4zm0-6h2a2 2 0 110 4h-2V2z" /> },
  { name: "Laravel", svg: <path d="M4 20L12 4l8 16h-4l-4-9-4 9H4z" /> },
  { name: "Claude AI", svg: <circle cx="12" cy="12" r="10" /> },
  { name: "Photoshop", svg: <rect x="3" y="3" width="18" height="18" rx="2" /> },
  { name: "Canva", svg: <circle cx="12" cy="12" r="10" /> },
];

export const Tech = () => {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  return (
    <section id="tech" className="py-32 md:py-48 container mx-auto">
      <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-16">
        <p className="section-label mb-6">{t.tech.label}</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
          {t.tech.titleStart} <span className="italic text-vesuvio">{t.tech.titleHighlight}</span>{t.tech.titleEnd}
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border max-w-5xl mx-auto border border-border">
        {techs.map((t, i) => (
          <TechItem key={t.name} {...t} index={i} />
        ))}
      </div>
    </section>
  );
};

const TechItem = ({ name, svg, index }: { name: string; svg: React.ReactNode; index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group bg-background hover:bg-secondary/60 transition-colors duration-500 aspect-square flex flex-col items-center justify-center gap-4 p-8 cursor-default"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-foreground/70 group-hover:text-vesuvio transition-all duration-500 group-hover:scale-110">
        {svg}
      </svg>
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
};

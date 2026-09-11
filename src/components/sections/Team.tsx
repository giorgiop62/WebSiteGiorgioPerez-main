import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";

export const Team = () => {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();

  return (
    <section id="team" className="py-32 md:py-48 container mx-auto">
      <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="section-label mb-6">
            <span className="hairline mr-4 align-middle" /> {t.team.label}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            {t.team.titleStart} <span className="italic text-vesuvio">{t.team.titleHighlight}</span>{t.team.titleEnd}
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          {t.team.intro}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {t.team.members.map((member, index) => (
          <TeamCard key={member.slug} member={member} index={index} discover={t.team.discover} />
        ))}
      </div>
    </section>
  );
};

const TeamCard = ({
  member,
  index,
  discover,
}: {
  member: (typeof import("@/lib/i18n").translations.it.team.members)[number];
  index: number;
  discover: string;
}) => {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className="reveal border border-border bg-secondary/20 hover:border-vesuvio/60 transition-all duration-500"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/5] bg-navy-deep flex items-center justify-center p-10 overflow-hidden">
        <div className="w-32 h-32 border border-vesuvio/70 bg-background/30 flex items-center justify-center">
          <span className="font-display text-5xl text-vesuvio">
            {getInitials(member.name)}
          </span>
        </div>
      </div>
      <div className="p-7">
        <p className="text-xs uppercase tracking-[0.25em] text-vesuvio">{member.role}</p>
        <h3 className="font-display text-3xl mt-3">{member.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">{member.description}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {member.skills.map((skill) => (
            <span key={skill} className="text-[11px] uppercase tracking-[0.18em] border border-border px-3 py-2 text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
        <Link
          to={`/team/${member.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm tracking-wider uppercase border-b border-foreground/40 hover:border-vesuvio hover:text-vesuvio pb-1 transition-colors"
        >
          {discover}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

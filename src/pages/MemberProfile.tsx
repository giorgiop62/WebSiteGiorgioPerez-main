import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useI18n } from "@/lib/i18n";

const MemberProfile = () => {
  const { slug } = useParams();
  const { t } = useI18n();
  const member = t.team.members.find((item) => item.slug === slug) ?? t.team.members[0];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 container mx-auto">
        <Link
          to="/#team"
          className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-muted-foreground hover:text-vesuvio transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.team.back}
        </Link>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mt-12 items-start">
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] bg-navy-deep border border-border flex items-center justify-center p-12 shadow-elegant">
              <div className="w-40 h-40 border border-vesuvio/70 bg-background/30 flex items-center justify-center">
                <span className="font-display text-6xl text-vesuvio">
                  {getInitials(member.name)}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="section-label mb-6">{member.role}</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              {member.name}
            </h1>
            <div className="mt-8 space-y-5 max-w-2xl">
              {member.bio.map((paragraph) => (
                <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-14">
              <ProfileBlock title={t.team.sections.skills} className="md:col-span-2">
                <Tags items={member.skills} />
              </ProfileBlock>
              <ProfileBlock title={t.team.sections.experience} className="md:col-span-2">
                <EntryList entries={member.experience} empty={t.team.emptyList} />
              </ProfileBlock>
              <ProfileBlock title={t.team.sections.education}>
                <EntryList entries={member.education} empty={t.team.emptyList} />
              </ProfileBlock>
              <ProfileBlock title={t.team.sections.projects}>
                <EntryList entries={member.projects} empty={t.team.emptyList} />
              </ProfileBlock>
            </div>

            {member.cvHref ? (
              <a
                href={member.cvHref}
                download
                className="mt-12 inline-flex items-center gap-3 border border-vesuvio/60 text-vesuvio px-6 py-3 text-sm tracking-[0.2em] uppercase hover:bg-vesuvio hover:text-primary-foreground transition-all duration-500"
              >
                <Download className="w-4 h-4" />
                {t.team.sections.cv}
              </a>
            ) : null}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

type ProfileEntry = {
  title: string;
  meta?: string;
  text?: string;
  items?: readonly string[];
  tags?: readonly string[];
};

const ProfileBlock = ({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <section className={`border border-border bg-secondary/20 p-6 ${className}`}>
    <h2 className="font-display text-2xl">{title}</h2>
    <div className="mt-5">{children}</div>
  </section>
);

const Tags = ({ items }: { items: readonly string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className="text-[11px] uppercase tracking-[0.18em] border border-border px-3 py-2 text-muted-foreground">
        {item}
      </span>
    ))}
  </div>
);

const EntryList = ({ entries, empty }: { entries: readonly ProfileEntry[]; empty: string }) => (
  <ul className="space-y-6 text-sm text-muted-foreground">
    {entries.length ? (
      entries.map((entry) => (
        <li
          key={`${entry.title}-${entry.meta ?? ""}`}
          className="border-b border-border/50 pb-6 last:border-0 last:pb-0"
        >
          <h3 className="text-base text-foreground">{entry.title}</h3>
          {entry.meta ? (
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-vesuvio">{entry.meta}</p>
          ) : null}
          {entry.text ? <p className="mt-3 leading-relaxed">{entry.text}</p> : null}
          {entry.items?.length ? (
            <ul className="mt-3 space-y-2">
              {entry.items.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="mt-[0.6em] h-px w-3 shrink-0 bg-vesuvio/70" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {entry.tags?.length ? (
            <div className="mt-4">
              <Tags items={entry.tags} />
            </div>
          ) : null}
        </li>
      ))
    ) : (
      <li>{empty}</li>
    )}
  </ul>
);

export default MemberProfile;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

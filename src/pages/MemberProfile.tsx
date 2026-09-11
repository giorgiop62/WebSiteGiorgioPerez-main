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
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {member.bio}
            </p>
            <p className="mt-4 text-sm text-vesuvio">{t.team.placeholderNote}</p>

            <div className="grid md:grid-cols-2 gap-8 mt-14">
              <ProfileBlock title={t.team.sections.skills} items={member.skills} empty={t.team.emptyList} />
              <ProfileBlock title={t.team.sections.experience} items={member.experience} empty={t.team.emptyList} />
              <ProfileBlock title={t.team.sections.education} items={member.education} empty={t.team.emptyList} />
              <ProfileBlock title={t.team.sections.projects} items={member.projects} empty={t.team.emptyList} />
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

const ProfileBlock = ({
  title,
  items,
  empty,
}: {
  title: string;
  items: readonly string[];
  empty: string;
}) => (
  <section className="border border-border bg-secondary/20 p-6">
    <h2 className="font-display text-2xl">{title}</h2>
    <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
      {(items.length ? items : [empty]).map((item) => (
        <li key={item} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export default MemberProfile;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

import { useReveal } from "@/hooks/useReveal";
import logo from "@/assets/about.jpeg";
import { useI18n } from "@/lib/i18n";

export const About = () => {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  return (
    <section id="about" className="py-32 md:py-48 container mx-auto">
      <div ref={ref} className="reveal grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden bg-navy shadow-elegant flex items-center justify-center p-12 relative">
            <img
              src={logo}
              alt="Logo Giorgio Perez — Napoli"
              className="w-full max-w-xs object-contain transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-vesuvio/0 via-transparent to-vesuvio/10" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-vesuvio text-primary-foreground px-6 py-4 hidden md:block">
            <p className="font-display text-3xl leading-none">2021</p>
            <p className="text-xs uppercase tracking-widest mt-1">Boolean Career</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="section-label mb-6">
            <span className="hairline mr-4 align-middle" /> {t.about.label}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            {t.about.titleStart} <span className="italic text-vesuvio">{t.about.titleHighlight}</span> {t.about.titleEnd}
          </h2>
          <div className="mt-10 space-y-5 text-foreground/75 max-w-xl text-[15px] leading-relaxed">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "Vue", l: "& React" },
              { n: "Laravel", l: "PHP / MySQL" },
              { n: "AI", l: "OpenAI · GA4" },
            ].map((s) => (
              <div key={s.l} className="border-t border-border pt-4">
                <p className="font-display text-2xl text-vesuvio">{s.n}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

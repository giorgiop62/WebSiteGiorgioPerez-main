import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";

export const About = () => {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  return (
    <section id="about" className="py-32 md:py-48 container mx-auto">
      <div ref={ref} className="reveal max-w-5xl">
          <p className="section-label mb-6">
            <span className="hairline mr-4 align-middle" /> {t.about.label}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            {t.about.titleStart} <span className="italic text-vesuvio">{t.about.titleHighlight}</span> {t.about.titleEnd}
          </h2>
          <div className="mt-10 space-y-5 text-foreground/75 max-w-3xl text-[15px] leading-relaxed">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
            <div className="border-l border-vesuvio/70 pl-5 pt-1">
              <p className="font-display text-2xl text-foreground">{t.about.valuesTitle}</p>
              <p className="mt-3">{t.about.values}</p>
            </div>
          </div>
      </div>
    </section>
  );
};

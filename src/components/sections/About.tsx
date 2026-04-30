import { useReveal } from "@/hooks/useReveal";
import logo from "@/assets/about.jpeg";
import { useI18n } from "@/lib/i18n";
import ermes from "@/assets/ermes1.png";
import ermes2 from "@/assets/ermes2.png";
import ermes3 from "@/assets/ermes3.png";

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
  
  <div className="aspect-square overflow-hidden rounded-xl shadow-elegant">
    <img
      src={ermes}
      alt="Giorgio 1"
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      loading="lazy"
    />
  </div>

  <div className="aspect-square overflow-hidden rounded-xl shadow-elegant">
    <img
      src={ermes2}
      alt="Ermes"
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      loading="lazy"
    />
  </div>

  <div className="aspect-square overflow-hidden rounded-xl shadow-elegant">
    <img
      src={ermes3}
      alt="Giorgio 2"
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      loading="lazy"
    />
  </div>

</div>
        </div>
      </div>
    </section>
  );
};

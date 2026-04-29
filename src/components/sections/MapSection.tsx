import { Star, MapPin, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";

const MAPS_URL = "https://maps.app.goo.gl/uw14Bbv3or3LLwXg9";
const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24166.62!2d14.247!3d40.8358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2053a5bd367823af%3A0x17bd057923e3b4a4!2sGiorgio%20Perez!5e0!3m2!1sit!2sit!4v1714000000000";

export const MapSection = () => {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  return (
    <section id="map" className="py-32 md:py-48">
      <div ref={ref} className="reveal container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-6">
              <span className="hairline mr-4 align-middle" /> {t.map.label}
            </p>
           {/* <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Italia &amp; <span className="italic text-vesuvio">online</span>.
            </h2>*/}
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase border-b border-foreground/40 hover:border-vesuvio hover:text-vesuvio pb-1 transition-colors w-fit"
          >
            {t.map.openMaps}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative overflow-hidden shadow-elegant aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-secondary">
            <iframe
              src={EMBED_URL}
              title={t.map.iframeTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0 grayscale-[0.3] contrast-[1.05]"
              allowFullScreen
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-secondary/40 border border-border p-8">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-vesuvio" />
                <span className="font-display text-2xl">Giorgio Perez</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display text-3xl text-vesuvio">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-vesuvio text-vesuvio" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t.map.reviewsLabel}</p>
            </div>

            <div className="space-y-4">
              {t.map.reviews.map((r) => (
                <article key={r.name} className="border border-border p-6 hover:border-vesuvio/60 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-lg">{r.name}</span>
                    <div className="flex gap-0.5">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-vesuvio text-vesuvio" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
                </article>
              ))}
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-vesuvio transition-colors"
            >
              {t.map.leaveReview}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

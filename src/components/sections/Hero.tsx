import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.85; // più cinematografico
    const onTime = () => {
      // loop "morbido": riavvolge poco prima della fine per evitare lo scatto
      if (v.duration && v.currentTime > v.duration - 0.15) {
        v.currentTime = 0.05;
        v.play().catch(() => {});
      }
    };
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-navy-deep">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-95"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
        poster="/video/sea-poster.jpg"
      >
        <source src="/video/sea.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-background" />

      <div className="relative h-full container mx-auto flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-balance opacity-0 animate-[fadeUp_1.2s_0.5s_forwards]">
            {t.hero.brand}<br />
            <span className="italic text-vesuvio text-4xl sm:text-6xl md:text-7xl">
              {t.hero.sloganFirst}
            </span>
          </h1>
          <p className="mt-6 font-display text-3xl md:text-5xl leading-tight opacity-0 animate-[fadeUp_1.2s_0.7s_forwards]">
            {t.hero.sloganSecond}
          </p>
          <p className="mt-8 text-lg md:text-xl text-foreground/85 max-w-xl opacity-0 animate-[fadeUp_1.2s_0.9s_forwards]">
            {t.hero.intro}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6 opacity-0 animate-[fadeUp_1.2s_1.2s_forwards]">
            <a
              href="#progetti"
              className="group inline-flex items-center gap-3 bg-vesuvio text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-vesuvio/90 transition-all duration-500"
            >
              {t.hero.projectsCta}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500" />
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wider uppercase border-b border-foreground/40 hover:border-vesuvio hover:text-vesuvio pb-1 transition-colors duration-300"
            >
              {t.hero.contactCta}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-3 text-xs tracking-[0.3em] uppercase text-foreground/60 [writing-mode:vertical-rl]">
        <span>{t.hero.scroll}</span>
        <span className="w-px h-12 bg-foreground/40 animate-pulse" />
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
};

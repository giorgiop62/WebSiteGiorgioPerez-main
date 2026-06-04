import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  Megaphone,
  Navigation,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const projectUrl = "https://nessuno-escluso.web.app";

const noteStyles = [
  { color: "bg-[#ffe45e]", rotate: "-rotate-2" },
  { color: "bg-[#94dff6]", rotate: "rotate-2" },
  { color: "bg-[#ff9fb5]", rotate: "-rotate-1" },
];

export const NessunoEscluso = () => {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  const copy = t.nessunoEscluso;

  return (
    <section
      id="nessuno-escluso"
      className="relative overflow-hidden bg-[#f7ecd8] py-24 text-[#071832] md:py-32"
    >
      <div className="absolute inset-0 opacity-[0.32] [background-image:radial-gradient(#d8bd8a_1px,transparent_1px)] [background-size:18px_18px]" />
      <div
        className="absolute inset-x-0 top-0 h-2"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #e31c25 0%, #ffba08 24%, #1f9d55 48%, #0d8bd8 72%, #7b2cbf 100%)",
        }}
      />

      <div
        ref={ref}
        className="reveal container relative mx-auto grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16"
      >
        <div>
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase text-[#6d5634]">
            <span className="h-px w-14 bg-[#e52b1e]" />
            {copy.eyebrow}
          </p>

          <h2 className="font-display text-5xl leading-[1.02] tracking-[0] text-[#071832] md:text-7xl">
            <span
              className="block bg-clip-text italic text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #d71920 0%, #ff7a00 28%, #20a34a 48%, #0d8bd8 68%, #8a2be2 100%)",
              }}
            >
              {copy.titleFirst}
            </span>
            <span
              className="block bg-clip-text italic text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #d71920 0%, #ffb703 26%, #16a34a 48%, #0ea5e9 70%, #e11d48 100%)",
              }}
            >
              {copy.titleSecond}
            </span>
          </h2>

          <p className="mt-5 text-2xl font-semibold text-[#071832] md:text-3xl">
            {copy.subtitle}
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#34425a]">
            {copy.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {copy.pillars.map((pillar) => (
              <span
                key={pillar}
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#ead3a4] bg-white/70 px-3 py-2 text-sm font-semibold text-[#27364f] shadow-[0_8px_20px_rgba(77,53,16,0.08)]"
              >
                <Sparkles className="h-4 w-4 text-[#e52b1e]" />
                {pillar}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <InfoCard
              icon={<Users className="h-5 w-5" />}
              title={copy.problemTitle}
              text={copy.problemText}
            />
            <InfoCard
              icon={<HeartHandshake className="h-5 w-5" />}
              title={copy.solutionTitle}
              text={copy.solutionText}
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.86fr]">
            <div>
              <h3 className="text-xl font-bold text-[#071832]">{copy.featuresTitle}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {copy.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-[#34425a]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1f9d55]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#071832]">{copy.technologiesTitle}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-[8px] bg-[#071832] px-3 py-2 text-sm font-semibold text-[#fff8ea]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] bg-[#e52b1e] px-6 py-3 font-bold text-white shadow-[0_14px_30px_rgba(229,43,30,0.24)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {copy.primaryCta}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <AppPreview copy={copy} />
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) => (
  <article className="relative rounded-[8px] border border-[#ecd6a8] bg-[#fff8ea] p-5 shadow-[0_16px_35px_rgba(77,53,16,0.1)]">
    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe45e] text-[#071832]">
      {icon}
    </span>
    <h3 className="text-xl font-bold text-[#071832]">{title}</h3>
    <p className="mt-3 leading-7 text-[#34425a]">{text}</p>
  </article>
);

const AppPreview = ({ copy }: { copy: ReturnType<typeof useI18n>["t"]["nessunoEscluso"] }) => (
  <div id="nessuno-escluso-preview" className="relative mx-auto w-full max-w-[560px]">
    <div className="absolute -left-5 top-10 hidden h-16 w-16 rotate-[-10deg] rounded-full bg-[#e52b1e] shadow-[0_10px_20px_rgba(110,42,20,0.18)] md:block" />
    <div className="absolute -right-4 bottom-20 hidden h-14 w-14 rounded-full bg-[#0d8bd8] shadow-[0_10px_20px_rgba(13,139,216,0.22)] md:block" />

    <div className="relative rounded-[8px] border border-[#e4c889] bg-[#fff8ea] p-5 shadow-[0_28px_70px_rgba(52,33,8,0.24)] md:p-7">
      <div className="absolute left-1/2 top-0 h-9 w-36 -translate-x-1/2 -translate-y-1/2 rotate-2 bg-[#d7a862]/60 shadow-sm" />

      <div className="rounded-[8px] border border-[#ead3a4] bg-[#fdf1d7] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-[#6d5634]">{copy.previewLogoLabel}</p>
            <p className="mt-1 font-display text-3xl italic tracking-[0]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, #d71920 0%, #ffb703 24%, #16a34a 46%, #0ea5e9 68%, #8a2be2 100%)",
                }}
              >
                Nessuno Escluso
              </span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e52b1e] text-white shadow-[0_8px_18px_rgba(229,43,30,0.24)]">
            <MapPin className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {copy.notes.map((note, index) => (
            <div
              key={note.label}
              className={`${noteStyles[index].color} ${noteStyles[index].rotate} relative rounded-[6px] p-4 text-[#071832] shadow-[0_12px_24px_rgba(52,33,8,0.15)]`}
            >
              <span className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 -translate-y-1/2 rotate-3 bg-[#c99244]/45" />
              <div className="flex items-start gap-3">
                {index === 0 ? (
                  <Megaphone className="mt-1 h-5 w-5 shrink-0" />
                ) : index === 1 ? (
                  <Navigation className="mt-1 h-5 w-5 shrink-0" />
                ) : (
                  <Users className="mt-1 h-5 w-5 shrink-0" />
                )}
                <div>
                  <p className="text-lg font-bold">{note.label}</p>
                  <p className="mt-1 text-sm font-semibold text-[#34425a]">{note.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[8px] border border-[#d8bd8a] bg-white p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#071832]">{copy.mapTitle}</p>
              <p className="mt-1 text-sm text-[#5b6678]">{copy.mapSubtitle}</p>
            </div>
            <Search className="h-5 w-5 text-[#0d8bd8]" />
          </div>
          <div className="relative mt-4 h-40 overflow-hidden rounded-[8px] bg-[#dff3e9]">
            <div className="absolute left-4 top-5 h-24 w-44 rotate-[-18deg] rounded-full border-[14px] border-[#f4c15d]/70" />
            <div className="absolute bottom-3 right-0 h-24 w-48 rotate-12 rounded-full border-[14px] border-[#93d5ff]/80" />
            <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 rotate-[-8deg] bg-white/70" />
            <MapMarker className="left-[23%] top-[34%] bg-[#e52b1e]" />
            <MapMarker className="left-[58%] top-[22%] bg-[#0d8bd8]" />
            <MapMarker className="left-[73%] top-[62%] bg-[#1f9d55]" />
            <div className="absolute bottom-4 left-4 rounded-[8px] bg-[#071832] px-3 py-2 text-sm font-bold text-white">
              {copy.mapBadge}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-[8px] bg-[#071832] p-4 text-white">
          <ShieldCheck className="h-6 w-6 text-[#ffe45e]" />
          <p className="text-sm leading-6">
            {copy.trustText}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const MapMarker = ({ className }: { className: string }) => (
  <span
    className={`absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-[0_8px_15px_rgba(7,24,50,0.25)] ${className}`}
  />
);

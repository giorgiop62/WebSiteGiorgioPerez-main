import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { useI18n, type Language } from "@/lib/i18n";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#tech", label: t.nav.tech },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img src={logo} alt="Giorgio Perez logo" className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-105" />
          <span className="font-display text-lg tracking-wide hidden sm:inline">
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <LanguageToggle language={language} setLanguage={setLanguage} label={t.nav.languageLabel} />
          <a
            href="/cv.pdf"
            download
            className="text-sm border border-vesuvio/60 text-vesuvio px-4 py-2 hover:bg-vesuvio hover:text-primary-foreground transition-all duration-300"
          >
            {t.nav.downloadCv}
          </a>
        </nav>
        <button aria-label={t.nav.toggleMenu} onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          <div className={`w-6 h-px bg-foreground transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
          <div className={`w-6 h-px bg-foreground mt-1.5 transition-opacity ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-px bg-foreground mt-1.5 transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border mt-4">
          <div className="container mx-auto py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <LanguageToggle language={language} setLanguage={setLanguage} label={t.nav.languageLabel} />
            <a href="/cv.pdf" download className="text-vesuvio border border-vesuvio/60 px-4 py-2 inline-block w-fit">
              {t.nav.downloadCv}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const LanguageToggle = ({
  language,
  setLanguage,
  label,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  label: string;
}) => (
  <div
    className="inline-flex items-center border border-border text-xs uppercase tracking-[0.2em]"
    role="group"
    aria-label={label}
  >
    {(["it", "en"] as const).map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => setLanguage(option)}
        className={`px-3 py-2 transition-all duration-300 ${
          language === option
            ? "bg-vesuvio text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={language === option}
      >
        {option}
      </button>
    ))}
  </div>
);

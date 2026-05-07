import { Instagram, Linkedin, Github, Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useI18n();
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/giorgioperezweb", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/in/giorgio-perez", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/giorgiop62", label: "GitHub" },
  ];
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <p className="font-display text-2xl">
            Giorgio Perez<span className="text-vesuvio">.</span>
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
            {t.footer.role}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-11 h-11 border border-border hover:border-vesuvio flex items-center justify-center text-muted-foreground hover:text-vesuvio transition-all duration-300 hover:-translate-y-0.5"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <a
          href="/cv.pdf"
          download
          className="group inline-flex items-center gap-3 border border-vesuvio/60 text-vesuvio px-6 py-3 text-sm tracking-[0.2em] uppercase hover:bg-vesuvio hover:text-primary-foreground transition-all duration-500"
        >
          <Download className="w-4 h-4" />
          {t.footer.downloadCv}
        </a>
      </div>
      <div className="container mx-auto mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Giorgio Perez — {t.footer.rights}</p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
};

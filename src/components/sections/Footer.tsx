import { Instagram, Linkedin, Github } from "lucide-react";
import logo from "@/assets/logo.png";
import { useI18n } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useI18n();
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/ermes.media/", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/in/giorgio-perez", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/giorgiop62", label: "GitHub" },
  ];
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ermes Media logo" className="w-10 h-10 object-contain" />
            <p className="font-display text-2xl">
              Ermes Media
            </p>
          </div>
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

      </div>
      <div className="container mx-auto mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Ermes Media — {t.footer.rights}</p>
        <address className="not-italic flex flex-wrap gap-x-4 gap-y-1">
          <span>{t.contact.location}</span>
          <a href="mailto:info@ermesmedia.com" className="hover:text-vesuvio transition-colors">info@ermesmedia.com</a>
          <a href="tel:+393926137642" className="hover:text-vesuvio transition-colors">+39 392 613 7642</a>
          <a href="tel:+393383737812" className="hover:text-vesuvio transition-colors">+39 338 373 7812</a>
        </address>
      </div>
    </footer>
  );
};

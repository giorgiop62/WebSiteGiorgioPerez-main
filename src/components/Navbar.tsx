import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "Chi sono" },
  { href: "#projects", label: "Progetti" },
  { href: "#tech", label: "Tecnologie" },
  { href: "#contact", label: "Contatti" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <a
            href="/cv.pdf"
            download
            className="text-sm border border-vesuvio/60 text-vesuvio px-4 py-2 hover:bg-vesuvio hover:text-primary-foreground transition-all duration-300"
          >
            Scarica CV
          </a>
        </nav>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-foreground">
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
            <a href="/cv.pdf" download className="text-vesuvio border border-vesuvio/60 px-4 py-2 inline-block w-fit">
              Scarica CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

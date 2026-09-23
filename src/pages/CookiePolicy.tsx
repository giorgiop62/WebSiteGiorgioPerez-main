import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { openCookiePreferences } from "@/lib/consent";
import { useI18n } from "@/lib/i18n";

const CookiePolicy = () => {
  const { t } = useI18n();
  const copy = t.cookies.policy;

  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = `${copy.title} — Ermes Media`;
    return () => {
      document.title = previousTitle;
    };
  }, [copy.title]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 container mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-muted-foreground hover:text-vesuvio transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {copy.back}
        </Link>

        <div className="mt-12 max-w-3xl">
          <p className="section-label mb-6">
            <span className="hairline mr-4 align-middle" /> {copy.label}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">{copy.title}</h1>
          <p className="mt-6 text-sm text-muted-foreground">{copy.updated}</p>

          <div className="mt-14 space-y-12">
            {copy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl md:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4 text-foreground/75 text-[15px] leading-relaxed">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <button
            type="button"
            onClick={openCookiePreferences}
            className="mt-14 inline-flex items-center gap-3 bg-vesuvio text-primary-foreground px-8 py-4 text-sm tracking-wider uppercase hover:bg-vesuvio/90 transition-all duration-500"
          >
            {copy.managePreferences}
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CookiePolicy;

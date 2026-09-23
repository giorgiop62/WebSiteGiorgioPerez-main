import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { saveConsent, useConsent } from "@/lib/consent";
import { useI18n } from "@/lib/i18n";

export const CookieBanner = () => {
  const { t } = useI18n();
  const copy = t.cookies.banner;
  const { bannerOpen, preferencesOpen, thirdPartyAllowed } = useConsent();
  const [customizing, setCustomizing] = useState(false);
  const [thirdParty, setThirdParty] = useState(thirdPartyAllowed);

  // Riaperto da "Preferenze cookie": mostra subito le categorie con la scelta attuale
  useEffect(() => {
    if (!bannerOpen) return;
    setThirdParty(thirdPartyAllowed);
    setCustomizing(preferencesOpen);
  }, [bannerOpen, preferencesOpen, thirdPartyAllowed]);

  if (!bannerOpen) return null;

  const reject = () => saveConsent({ thirdParty: false });
  const acceptAll = () => saveConsent({ thirdParty: true });

  const button =
    "px-5 py-3 text-xs tracking-wider uppercase transition-all duration-300 text-center";

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-banner-title"
      className="fixed z-[60] inset-x-4 bottom-4 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md bg-background/95 backdrop-blur-md border border-border shadow-elegant animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <button
        type="button"
        onClick={reject}
        aria-label={copy.close}
        title={copy.close}
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-vesuvio transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="p-6 max-h-[80vh] overflow-y-auto">
        <p id="cookie-banner-title" className="font-display text-xl pr-8">
          {copy.title}
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {copy.text}{" "}
          <Link to="/cookie-policy" className="text-foreground underline underline-offset-4 hover:text-vesuvio transition-colors">
            {copy.policyLink}
          </Link>
        </p>

        {customizing && (
          <div className="mt-5 space-y-3">
            <div className="border border-border p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium">{copy.necessaryTitle}</p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">{copy.alwaysOn}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{copy.necessaryText}</p>
            </div>
            <label className="block border border-border p-4 cursor-pointer">
              <span className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium">{copy.thirdPartyTitle}</span>
                <Switch checked={thirdParty} onCheckedChange={setThirdParty} aria-label={copy.thirdPartyTitle} />
              </span>
              <span className="mt-2 block text-xs text-muted-foreground leading-relaxed">{copy.thirdPartyText}</span>
            </label>
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={reject}
            className={`${button} border border-foreground/40 hover:border-vesuvio hover:text-vesuvio`}
          >
            {copy.reject}
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className={`${button} bg-vesuvio text-primary-foreground hover:bg-vesuvio/90`}
          >
            {copy.accept}
          </button>
        </div>
        <button
          type="button"
          onClick={customizing ? () => saveConsent({ thirdParty }) : () => setCustomizing(true)}
          className="mt-4 w-full text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-vesuvio transition-colors"
        >
          {customizing ? copy.save : copy.customize}
        </button>
      </div>
    </div>
  );
};

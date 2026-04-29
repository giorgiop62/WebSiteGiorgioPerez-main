import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  I18nContext,
  STORAGE_KEY,
  translations,
  type Language,
} from "@/lib/i18n";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "it";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "it" || stored === "en") return stored;

  return window.navigator.language.toLowerCase().startsWith("en") ? "en" : "it";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

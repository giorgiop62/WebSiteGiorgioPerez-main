import { useSyncExternalStore } from "react";

// Categorie soggette a consenso. I cookie/strumenti tecnici (lingua, scelta del
// consenso stesso) non richiedono consenso e non compaiono qui.
export type ConsentChoices = {
  thirdParty: boolean; // contenuti di terze parti che impostano cookie (Google Maps)
};

type StoredConsent = ConsentChoices & { version: number; date: string };

type ConsentState = {
  consent: StoredConsent | null; // null = l'utente non ha ancora scelto
  preferencesOpen: boolean;
};

// Aumentare quando cambiano le categorie: il banner verrà riproposto
const CONSENT_VERSION = 1;
const CONSENT_KEY = "ermes-media-cookie-consent";

const readStored = (): StoredConsent | null => {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
};

let state: ConsentState = {
  consent: typeof window === "undefined" ? null : readStored(),
  preferencesOpen: false,
};
const listeners = new Set<() => void>();

const setState = (next: Partial<ConsentState>) => {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
};

export const saveConsent = (choices: ConsentChoices) => {
  const consent: StoredConsent = { ...choices, version: CONSENT_VERSION, date: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // storage non disponibile: la scelta vale per la sessione corrente
  }
  setState({ consent, preferencesOpen: false });
};

export const openCookiePreferences = () => setState({ preferencesOpen: true });

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useConsent = () => {
  const snapshot = useSyncExternalStore(subscribe, () => state, () => state);
  return {
    consent: snapshot.consent,
    hasChosen: snapshot.consent !== null,
    thirdPartyAllowed: snapshot.consent?.thirdParty ?? false,
    bannerOpen: snapshot.consent === null || snapshot.preferencesOpen,
    preferencesOpen: snapshot.preferencesOpen,
  };
};

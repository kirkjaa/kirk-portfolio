import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "th" | "ko";

const STORAGE_KEY = "kirkp-language";
const SUPPORTED: Language[] = ["en", "th", "ko"];

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

interface LanguageProviderState {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageProviderState | undefined>(undefined);

function readStoredLanguage(fallback: Language): Language {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored as Language)) return stored as Language;
  } catch {
    /* storage unavailable — fall through */
  }
  return fallback;
}

export function LanguageProvider({ children, defaultLanguage = "en" }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => readStoredLanguage(defaultLanguage));

  // Keep <html lang> in step so the Thai / Korean font cuts apply.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
          /* ignore */
        }
        setLanguageState(next);
      },
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

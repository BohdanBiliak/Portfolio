"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
};

type TranslationKeys = (typeof translations)[Language];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && translations[saved]) {
      setLanguageState(saved);
      document.documentElement.setAttribute("lang", saved);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("pl")) {
        setLanguageState("pl");
        document.documentElement.setAttribute("lang", "pl");
      } else if (browserLang.startsWith("uk")) {
        setLanguageState("uk");
        document.documentElement.setAttribute("lang", "uk");
      } else {
        document.documentElement.setAttribute("lang", "en");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      document.documentElement.setAttribute("lang", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

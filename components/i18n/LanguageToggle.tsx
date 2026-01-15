"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Language } from "@/lib/translations";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "pl", label: "Polski", flag: "🇵🇱" },
    { code: "uk", label: "Українська", flag: "🇺🇦" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="fixed right-6 top-20 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-lg border-2 border-blue-500 bg-white px-4 py-2 font-semibold text-black shadow-lg transition-all hover:border-blue-600 hover:shadow-xl dark:border-blue-400 dark:bg-gray-900 dark:text-white"
          aria-label="Change language"
          aria-expanded={isOpen}
        >
          <span className="text-xl">{currentLang.flag}</span>
          <span className="text-sm">{currentLang.code.toUpperCase()}</span>
          <svg
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border-2 border-blue-500 bg-white shadow-xl dark:border-blue-400 dark:bg-gray-900">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors first:rounded-t-md last:rounded-b-md hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                    language === lang.code ? "bg-blue-100 font-bold dark:bg-blue-900/40" : ""
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm text-black dark:text-white">{lang.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

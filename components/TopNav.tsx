"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useHRMode } from "./hr/HRModeProvider";
import { useLanguage } from "./i18n/LanguageProvider";
import { Language } from "@/lib/translations";

export default function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const { isHRMode, toggleHRMode } = useHRMode();
  const { language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "pl", label: "PL" },
    { code: "uk", label: "UK" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
      <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-3">
        <div className="flex items-center gap-1.5">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Change language"
              aria-expanded={showLangMenu}
            >
              {language.toUpperCase()}
            </button>
            {showLangMenu && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowLangMenu(false)}
                  aria-hidden="true"
                />
                <div className="absolute right-0 top-full z-50 mt-1 w-16 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-3 py-2 text-center text-xs font-medium transition-colors ${
                        language === lang.code
                          ? "bg-blue-500 text-white dark:bg-blue-400 dark:text-black"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* HR Mode Toggle */}
          <button
            onClick={toggleHRMode}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              isHRMode
                ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-500"
                : "text-gray-700 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            }`}
            aria-label={isHRMode ? "Exit HR Mode" : "Enable HR Mode"}
            aria-pressed={isHRMode}
          >
            {isHRMode ? "Exit" : "HR"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-md p-1.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

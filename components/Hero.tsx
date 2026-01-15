"use client";

import { useEffect, useState } from "react";
import { useA11y } from "./a11y/A11yProvider";
import { useHRMode } from "./hr/HRModeProvider";
import { useLanguage } from "./i18n/LanguageProvider";
import ContactInfo from "./ContactInfo";
import Education from "./Education";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { settings } = useA11y();
  const { isHRMode } = useHRMode();
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <section
      id="main-content"
      className="border-b-2 border-blue-500 bg-white px-6 py-16 dark:border-blue-400 dark:bg-black"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-4xl">
        {/* Hero Content */}
        <div className="mb-16 text-center">
          <div className={mounted && !settings.reducedMotion ? "animate-typing" : ""}>
            <h1
              id="hero-title"
              className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl"
            >
              {t.hero.name}
            </h1>
          </div>
          <div
            className={
              mounted && !settings.reducedMotion ? "animate-fade-in animation-delay-200" : ""
            }
          >
            <p className="mb-4 text-lg text-gray-700 dark:text-gray-300 md:text-xl">
              {t.hero.subtitle}
            </p>
          </div>
          <p
            className={`text-base text-gray-600 dark:text-gray-400 md:text-lg ${mounted && !settings.reducedMotion ? "animate-fade-in animation-delay-400" : ""}`}
          >
            {t.hero.description}
          </p>
          {isHRMode && (
            <div className="mt-8 space-y-4">
              {/* CTA Buttons */}
              <div className="no-print flex flex-wrap gap-3">
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-blue-600 px-6 py-3 font-bold text-white transition-all hover:border-blue-700 hover:bg-blue-700 hover:shadow-lg dark:border-blue-500 dark:bg-blue-500"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {t.hero.downloadCV}
                </button>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-bold text-gray-700 transition-all hover:border-blue-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t.hero.viewExperience}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* About Content */}
        <div id="about">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            {isHRMode ? t.hero.professionalSummary : t.about.title}
          </h2>

          {isHRMode && (
            <div className="mb-8 rounded-lg border-2 border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {t.hero.keyHighlights}
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.hero.productionExperience}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.hero.technicalExpertise}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{t.hero.qualityFocus}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t.hero.securityImplementation}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{t.hero.languageSkills}</span>
                </li>
              </ul>
            </div>
          )}

          {!isHRMode && (
            <div className="mb-12 space-y-6 text-lg text-black dark:text-gray-300">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>
          )}

          <ContactInfo />
          <Education />
        </div>
      </div>
    </section>
  );
}

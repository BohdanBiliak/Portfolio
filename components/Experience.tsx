"use client";

import { useHRMode } from "./hr/HRModeProvider";
import { useLanguage } from "./i18n/LanguageProvider";
import { experiencesData } from "@/data/experiences";

export default function Experience() {
  const { isHRMode } = useHRMode();
  const { t, language } = useLanguage();

  return (
    <section
      id="experience"
      className="border-b-2 border-blue-500 bg-gray-50 px-8 py-16 dark:border-blue-400 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black dark:text-white">
            {t.experience.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {isHRMode ? t.experience.hrSubtitle : t.experience.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {experiencesData.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-blue-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400"
            >
              <div className="mb-6 flex flex-col gap-2 border-b-2 border-gray-100 pb-4 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {exp.role[language]}
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {exp.company}
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {exp.period[language]}
                </p>
              </div>

              <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {exp.summary[language]}
              </p>

              <div className="mb-6">
                <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                  {t.experience.responsibilities}
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities[language].map((resp, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-900">
                <span className="font-bold text-black dark:text-white">
                  {t.experience.techStack}{" "}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{exp.techStack}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

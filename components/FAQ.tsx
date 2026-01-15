"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { useLanguage } from "./i18n/LanguageProvider";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-b-2 border-blue-500 bg-white px-8 py-16 dark:border-blue-400 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-4xl font-bold text-black dark:text-white">
          {t.faq?.title || "FAQ"}
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md border-2 border-gray-200 bg-white transition-all dark:border-gray-700 dark:bg-gray-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-black dark:text-white">{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-blue-500 transition-transform dark:text-blue-400 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t-2 border-gray-200 px-6 py-4 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

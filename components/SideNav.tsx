"use client";

import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "./i18n/LanguageProvider";

export default function SideNav() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = useMemo(
    () => [
      { id: "main-content", label: t.nav?.home || "Home" },
      { id: "experience", label: t.nav?.experience || "Experience" },
      { id: "skills", label: t.nav?.skills || "Skills" },
      { id: "languages", label: t.nav?.languages || "Languages" },
      { id: "courses", label: t.nav?.courses || "Courses" },
    ],
    [t.nav]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);
              setActiveIndex(i);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="relative flex flex-col gap-3">
        {/* Animated blur circle indicator */}
        <div
          className="pointer-events-none absolute -left-0.5 h-3 w-3 rounded-full bg-blue-500 opacity-20 blur-[8px] transition-transform duration-700 ease-in-out dark:bg-blue-400"
          style={{
            transform: `translateY(${activeIndex * 20}px)`,
          }}
        />

        {sections.map((section, _index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative z-10"
            aria-label={`Navigate to ${section.label}`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "scale-125 bg-blue-500 shadow-lg dark:bg-blue-400"
                  : "scale-100 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            />
            <span className="pointer-events-none absolute right-5 top-1/2 w-auto -translate-y-1/2 whitespace-nowrap rounded bg-black/90 px-3 py-1.5 text-xs font-medium leading-tight text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/90 dark:text-black">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

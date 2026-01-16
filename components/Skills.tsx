"use client";

import { useState, useMemo } from "react";
import { skills, SkillCategory } from "@/data/skills";
import { useLanguage } from "./i18n/LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");

  const categories: Array<{ id: SkillCategory | "all"; label: string }> = [
    { id: "all", label: t.skills?.all || "All" },
    { id: "backend", label: t.skills?.backend || "Backend" },
    { id: "frontend", label: t.skills?.frontend || "Frontend" },
    { id: "devops", label: t.skills?.devops || "DevOps" },
    { id: "other", label: t.skills?.other || "Other" },
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      return matchesCategory;
    });
  }, [activeCategory]);

  const getSkillsByCategory = (category: SkillCategory) => {
    return filteredSkills.filter((skill) => skill.category === category);
  };

  return (
    <section
      id="skills"
      className="border-b-2 border-blue-500 bg-white px-8 py-16 dark:border-blue-400 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-black dark:text-white">
          {t.skills?.title || "Skills & Expertise"}
        </h2>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-md border-2 px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === category.id
                  ? "border-blue-500 bg-blue-500 text-white dark:border-blue-400 dark:bg-blue-400 dark:text-black"
                  : "border-gray-200 bg-white text-black hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-blue-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        {activeCategory === "all" ? (
          <div className="space-y-10">
            {(["backend", "frontend", "devops", "other"] as SkillCategory[]).map((category) => {
              const categorySkills = getSkillsByCategory(category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {categories.find((c) => c.id === category)?.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-blue-400"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {filteredSkills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-blue-400"
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

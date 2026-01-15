"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./ui/SectionContainer";
import SectionHeading from "./ui/SectionHeading";
import { useHRMode } from "./hr/HRModeProvider";
import { useLanguage } from "./i18n/LanguageProvider";
import SearchBar from "./search/SearchBar";
import { searchProjects } from "@/lib/searchUtils";

export default function Projects() {
  const { isHRMode } = useHRMode();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = searchProjects(projectsData as Project[], searchQuery) as Project[];
  const displayProjects = isHRMode ? filteredProjects.slice(0, 3) : filteredProjects;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SectionContainer id="projects" className="bg-white dark:bg-black">
      <div className="mb-8 text-center">
        <SectionHeading>{isHRMode ? t.projects.topProjects : t.projects.title}</SectionHeading>
        {isHRMode && !searchQuery && (
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-blue-500 bg-blue-100 px-4 py-2 dark:border-blue-400 dark:bg-blue-950">
              <svg
                className="h-5 w-5 text-blue-600 dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                Top 3 Highlighted Projects
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              These projects demonstrate full-stack capabilities, production experience, and
              technical problem-solving. Full portfolio available on request.
            </p>
          </div>
        )}
      </div>

      <SearchBar onSearch={handleSearch} placeholder={t.projects.search} />

      {displayProjects.length > 0 ? (
        <>
          {searchQuery && (
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              {t.projects.found} {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? t.projects.project : t.projects.projects}{" "}
              {t.projects.matching} "{searchQuery}"
            </p>
          )}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} searchQuery={searchQuery} />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-lg border-2 border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {t.projects.noResults} "{searchQuery}"
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{t.projects.tryDifferent}</p>
        </div>
      )}
    </SectionContainer>
  );
}

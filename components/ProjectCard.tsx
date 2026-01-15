"use client";

import Tag from "./ui/Tag";
import { highlightText } from "@/lib/searchUtils";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  project,
  searchQuery = "",
}: {
  project: Project;
  searchQuery?: string;
}) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && project.link) {
      e.preventDefault();
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      className="rounded-lg border-2 border-blue-500 bg-white p-6 transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-blue-600 hover:shadow-lg dark:border-blue-400 dark:bg-gray-900 dark:hover:border-blue-300"
      role="listitem"
      tabIndex={project.link ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-label={`${project.title} project card`}
    >
      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
        {searchQuery ? highlightText(project.title, searchQuery) : project.title}
      </h3>
      <p className="mb-4 text-black dark:text-gray-400">
        {searchQuery ? highlightText(project.description, searchQuery) : project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2" role="list" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <Tag
            key={tech}
            highlight={searchQuery ? tech.toLowerCase().includes(searchQuery.toLowerCase()) : false}
          >
            {tech}
          </Tag>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
          aria-label={`View ${project.title} project`}
        >
          View Project →
        </a>
      )}
    </article>
  );
}

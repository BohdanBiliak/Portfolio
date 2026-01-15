export function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) {
    return text;
  }

  // Escape special regex characters
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={index}
        className="bg-yellow-200 font-semibold text-black dark:bg-yellow-500 dark:text-black"
      >
        {part}
      </mark>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

interface SearchableProject {
  id?: string;
  name?: string;
  title?: string;
  description: string;
  technologies: string[];
}

export function searchProjects(projects: SearchableProject[], query: string) {
  if (!query.trim()) {
    return projects;
  }

  const lowerQuery = query.toLowerCase().trim();

  return projects.filter((project) => {
    // Search in title or name
    const projectTitle = (project.title || project.name || "") as string;
    if (projectTitle.toLowerCase().includes(lowerQuery)) {
      return true;
    }

    // Search in description
    if (project.description.toLowerCase().includes(lowerQuery)) {
      return true;
    }

    // Search in technologies
    if (project.technologies.some((tech: string) => tech.toLowerCase().includes(lowerQuery))) {
      return true;
    }

    return false;
  });
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Built a high-performance e-commerce platform handling 10K+ daily users. Implemented Redis caching for 40% faster page loads and optimized checkout flow, increasing conversion by 25%.",
    technologies: ["React", "TypeScript", "Tailwind", "Redis", "PostgreSQL"],
    link: "https://github.com/yourusername/project-one",
  },
  {
    id: "2",
    title: "Real-time Analytics Dashboard",
    description:
      "Developed real-time analytics dashboard for monitoring user behavior. Integrated WebSocket connections and implemented data aggregation reducing API calls by 60%.",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebSocket", "Chart.js"],
    link: "https://github.com/yourusername/project-two",
  },
  {
    id: "3",
    title: "Task Management System",
    description:
      "Created collaborative task management system with drag-and-drop interface. Implemented role-based access control and automated email notifications, serving 500+ active teams.",
    technologies: ["Vue", "Express", "PostgreSQL", "Docker", "AWS"],
    link: "https://github.com/yourusername/project-three",
  },
  {
    id: "4",
    title: "URL Shortener Microservice",
    description:
      "Mini project: Built a URL shortening service with custom aliases. Features Redis caching for instant redirects, analytics tracking, and QR code generation. Handles 1K+ requests/day.",
    technologies: ["Node.js", "Redis", "Express", "MongoDB"],
    link: "https://github.com/yourusername/url-shortener",
  },
];

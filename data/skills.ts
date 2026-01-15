export type SkillCategory = "frontend" | "backend" | "devops" | "other";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: "expert" | "advanced" | "intermediate";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "advanced" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "expert" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "JavaScript", category: "frontend", level: "expert" },
  { name: "HTML5", category: "frontend", level: "advanced" },
  { name: "CSS3", category: "frontend", level: "advanced" },
  { name: "Responsive UI Development", category: "frontend", level: "advanced" },

  // Backend
  { name: "Node.js", category: "backend", level: "expert" },
  { name: "NestJS", category: "backend", level: "expert" },
  { name: "Express.js", category: "backend", level: "expert" },
  { name: "RESTful APIs", category: "backend", level: "expert" },
  { name: "GraphQL APIs", category: "backend", level: "advanced" },
  { name: "PostgreSQL", category: "backend", level: "advanced" },
  { name: "MongoDB", category: "backend", level: "advanced" },
  { name: "MySQL", category: "backend", level: "advanced" },
  { name: "Redis", category: "backend", level: "advanced" },
  { name: "JWT Authentication", category: "backend", level: "expert" },
  { name: "Passport.js", category: "backend", level: "advanced" },
  { name: "Python", category: "backend", level: "intermediate" },
  { name: "Bash", category: "backend", level: "advanced" },

  // DevOps
  { name: "Docker", category: "devops", level: "advanced" },
  { name: "Docker Compose", category: "devops", level: "advanced" },
  { name: "Git", category: "devops", level: "expert" },
  { name: "GitHub Actions", category: "devops", level: "advanced" },
  { name: "GitLab CI/CD", category: "devops", level: "advanced" },
  { name: "AWS", category: "devops", level: "intermediate" },
  { name: "Linux", category: "devops", level: "advanced" },
  { name: "Podman", category: "devops", level: "intermediate" },

  // Other
  { name: "Jest", category: "other", level: "advanced" },
  { name: "Supertest", category: "other", level: "advanced" },
  { name: "React Testing Library", category: "other", level: "advanced" },
  { name: "API Testing", category: "other", level: "advanced" },
  { name: "OpenAPI", category: "other", level: "advanced" },
  { name: "Swagger", category: "other", level: "advanced" },
  { name: "Clerk Authentication", category: "other", level: "advanced" },
  { name: "Figma", category: "other", level: "intermediate" },
  { name: "Third-party API Integration", category: "other", level: "advanced" },
  { name: "IoT Integration", category: "other", level: "advanced" },
  { name: "Webhooks", category: "other", level: "advanced" },
  { name: "Stripe Integration", category: "other", level: "advanced" },
];

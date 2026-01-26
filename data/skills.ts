export type SkillCategory = "frontend" | "backend" | "devops" | "other";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: "expert" | "advanced" | "intermediate";
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "TypeScript", category: "backend", level: "expert" },
  { name: "JavaScript", category: "backend", level: "expert" },
  { name: "Bash", category: "backend", level: "advanced" },
  { name: "Python", category: "backend", level: "intermediate" },

  // Backend Development
  { name: "Node.js", category: "backend", level: "expert" },
  { name: "NestJS", category: "backend", level: "expert" },
  { name: "Express.js", category: "backend", level: "expert" },
  { name: "RESTful APIs", category: "backend", level: "expert" },
  { name: "GraphQL APIs", category: "backend", level: "advanced" },

  // Frontend Development
  { name: "React", category: "frontend", level: "advanced" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "Responsive UI Development", category: "frontend", level: "advanced" },

  // Databases & Caching
  { name: "PostgreSQL", category: "backend", level: "advanced" },
  { name: "MongoDB", category: "backend", level: "advanced" },
  { name: "MySQL", category: "backend", level: "advanced" },
  { name: "Redis", category: "backend", level: "advanced" },

  // Cloud & Deployment
  { name: "AWS", category: "devops", level: "intermediate" },

  // Testing
  { name: "Jest", category: "other", level: "advanced" },
  { name: "Supertest", category: "other", level: "advanced" },
  { name: "React Testing Library", category: "other", level: "advanced" },
  { name: "API Testing", category: "other", level: "advanced" },

  // API Documentation
  { name: "OpenAPI", category: "other", level: "advanced" },
  { name: "Swagger", category: "other", level: "advanced" },

  // Tools & Collaboration
  { name: "Clerk Authentication", category: "other", level: "advanced" },
  { name: "Figma", category: "other", level: "intermediate" },
  { name: "Third-party API Integration", category: "other", level: "advanced" },
  { name: "Docker", category: "devops", level: "advanced" },
  { name: "Docker Compose", category: "devops", level: "advanced" },
  { name: "Git", category: "devops", level: "expert" },
  { name: "GitHub Actions", category: "devops", level: "advanced" },
  { name: "GitLab CI/CD", category: "devops", level: "advanced" },
  { name: "Linux", category: "devops", level: "advanced" },
  { name: "JWT Authentication", category: "backend", level: "expert" },
  { name: "Passport.js", category: "backend", level: "advanced" },
  { name: "IoT Integration", category: "other", level: "advanced" },
  { name: "Webhooks", category: "other", level: "advanced" },
  { name: "Stripe Integration", category: "other", level: "advanced" },
];

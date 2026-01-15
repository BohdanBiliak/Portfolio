"use client";

import SectionHeading from "./ui/SectionHeading";
import Bio from "./Bio";
import ContactInfo from "./ContactInfo";
import { useHRMode } from "./hr/HRModeProvider";

export default function About() {
  const { isHRMode } = useHRMode();

  return (
    <section
      id="about"
      className="border-b-2 border-blue-500 bg-white px-6 py-20 dark:border-blue-400 dark:bg-black"
      aria-label="About and Contact Information"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading>{isHRMode ? "Contact & Stack" : "About Me"}</SectionHeading>
        {!isHRMode && <Bio />}
        <ContactInfo />
        {isHRMode && (
          <div className="mt-8 rounded-lg border-2 border-blue-500 bg-blue-50 p-6 dark:border-blue-400 dark:bg-blue-950">
            <h3 className="mb-3 text-lg font-bold text-black dark:text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border-2 border-blue-600 bg-white px-3 py-1 text-sm font-semibold text-blue-600 dark:border-blue-400 dark:bg-gray-900 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

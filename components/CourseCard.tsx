"use client";

interface Course {
  id: string;
  title: string;
  platform: string;
  description: string;
  completedDate: string;
  certificate?: string;
}

export default function CourseCard({ course }: { course: Course }) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && course.certificate) {
      e.preventDefault();
      window.open(course.certificate, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      className="rounded-lg border-2 border-blue-500 bg-white p-6 transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-blue-600 hover:shadow-lg dark:border-blue-400 dark:bg-gray-900 dark:hover:border-blue-300"
      role="listitem"
      tabIndex={course.certificate ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-label={`${course.title} course card`}
    >
      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">{course.title}</h3>
      <p className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
        {course.platform}
      </p>
      <p className="mb-3 text-black dark:text-gray-400">{course.description}</p>
      <time className="mb-3 block text-sm text-gray-600 dark:text-gray-500">
        Completed: {course.completedDate}
      </time>
      {course.certificate && (
        <a
          href={course.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
          aria-label={`View certificate for ${course.title}`}
        >
          View Certificate →
        </a>
      )}
    </article>
  );
}

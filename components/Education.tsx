export default function Education() {
  return (
    <div className="mt-8 rounded-lg border-2 border-blue-500 bg-blue-50 p-6 transition-all hover:border-blue-600 hover:shadow-md dark:border-blue-400 dark:bg-blue-950">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <svg
            className="h-8 w-8 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-6.16-3.422"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-xl font-bold text-black dark:text-white">
            Engineer's Degree in Computer Science
          </h3>
          <a
            href="https://pollub.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 inline-flex items-center gap-1 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span className="font-semibold">Lublin University of Technology</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-400">Oct 2022 – Feb 2026</p>
        </div>
      </div>
    </div>
  );
}

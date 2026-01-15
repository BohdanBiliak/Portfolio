"use client";

import { useHRMode } from "./HRModeProvider";

export default function HRModeToggle() {
  const { isHRMode, toggleHRMode } = useHRMode();

  return (
    <button
      onClick={toggleHRMode}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-lg border-2 border-blue-500 bg-white px-6 py-3 font-bold text-black shadow-lg transition-all hover:border-blue-600 hover:shadow-xl dark:border-blue-400 dark:bg-gray-900 dark:text-white"
      aria-label={isHRMode ? "Disable HR View Mode" : "Enable HR View Mode"}
      aria-pressed={isHRMode}
    >
      <span className="flex items-center gap-2">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        {isHRMode ? "Exit HR Mode" : "HR View"}
      </span>
    </button>
  );
}

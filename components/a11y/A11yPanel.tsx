"use client";

import { useState, useEffect, useCallback } from "react";
import { useA11y } from "./A11yProvider";

export default function A11yPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 24, y: 24 }); // left-6, top-6
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const {
    settings,
    updateFontSize,
    updateLineHeight,
    updateLetterSpacing,
    toggleReducedMotion,
    toggleHighContrast,
    resetSettings,
  } = useA11y();

  useEffect(() => {
    // Load saved position
    const saved = localStorage.getItem("a11y-panel-position");
    if (saved) {
      setPosition(JSON.parse(saved));
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        const newPosition = {
          x: Math.max(0, Math.min(window.innerWidth - 64, e.clientX - dragStart.x)),
          y: Math.max(0, Math.min(window.innerHeight - 64, e.clientY - dragStart.y)),
        };
        setPosition(newPosition);
        localStorage.setItem("a11y-panel-position", JSON.stringify(newPosition));
      }
    },
    [isDragging, dragStart]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragStart, handleMouseMove]);

  return (
    <>
      <div
        className="fixed z-50 cursor-move select-none"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        onMouseDown={handleMouseDown}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="rounded-full border-2 border-blue-500 bg-white p-3 shadow-lg transition-all hover:border-blue-600 hover:shadow-xl dark:border-blue-400 dark:bg-gray-900"
          aria-label="Open accessibility settings"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>

        {showTooltip && !isOpen && (
          <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-lg border-2 border-blue-500 bg-white px-3 py-2 text-sm font-semibold text-black shadow-xl dark:border-blue-400 dark:bg-gray-900 dark:text-white">
            Accessibility Settings
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-blue-500 dark:border-r-blue-400" />
          </div>
        )}
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            className="fixed z-50 w-80 rounded-xl border-2 border-blue-500 bg-white p-5 shadow-2xl dark:border-blue-400 dark:bg-gray-900"
            style={{
              left: `${Math.min(position.x, window.innerWidth - 340)}px`,
              top: `${position.y + 72}px`,
              maxHeight: `${window.innerHeight - position.y - 90}px`,
              overflowY: "auto",
            }}
            role="dialog"
            aria-labelledby="a11y-title"
            aria-describedby="a11y-description"
            onKeyDown={handleKeyDown}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 id="a11y-title" className="text-xl font-bold text-black dark:text-white">
                  Accessibility
                </h2>
                <p id="a11y-description" className="text-xs text-gray-600 dark:text-gray-400">
                  Customize your experience
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close accessibility panel"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              {/* Font Size Slider */}
              <div>
                <label
                  htmlFor="font-size"
                  className="mb-1 flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300"
                >
                  <span>Text Size</span>
                  <span className="text-blue-600 dark:text-blue-400">{settings.fontSize}px</span>
                </label>
                <input
                  id="font-size"
                  type="range"
                  min="6"
                  max="25"
                  value={settings.fontSize}
                  onChange={(e) => updateFontSize(Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-gray-700 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:dark:bg-blue-400 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:dark:bg-blue-400"
                />
              </div>

              {/* Line Height Slider */}
              <div>
                <label
                  htmlFor="line-height"
                  className="mb-1 flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300"
                >
                  <span>Line Height</span>
                  <span className="text-blue-600 dark:text-blue-400">{settings.lineHeight}%</span>
                </label>
                <input
                  id="line-height"
                  type="range"
                  min="100"
                  max="200"
                  value={settings.lineHeight}
                  onChange={(e) => updateLineHeight(Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-gray-700 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:dark:bg-blue-400 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:dark:bg-blue-400"
                />
              </div>

              {/* Letter Spacing Slider */}
              <div>
                <label
                  htmlFor="letter-spacing"
                  className="mb-1 flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300"
                >
                  <span>Letter Spacing</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    {settings.letterSpacing}px
                  </span>
                </label>
                <input
                  id="letter-spacing"
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={settings.letterSpacing}
                  onChange={(e) => updateLetterSpacing(Number(e.target.value))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-300 dark:bg-gray-700 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:dark:bg-blue-400 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:dark:bg-blue-400"
                />
              </div>

              <div className="rounded-lg border border-gray-200 p-2 dark:border-gray-700">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1">
                    <label
                      htmlFor="reduced-motion"
                      className="block text-xs font-semibold text-black dark:text-white"
                    >
                      Reduce Motion
                    </label>
                  </div>
                  <button
                    id="reduced-motion"
                    role="switch"
                    aria-checked={settings.reducedMotion}
                    onClick={toggleReducedMotion}
                    className={`relative h-5 w-10 flex-shrink-0 rounded-full transition-all ${
                      settings.reducedMotion ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
                    }`}
                  >
                    <span className="sr-only">
                      {settings.reducedMotion ? "Disable" : "Enable"} reduced motion
                    </span>
                    <span
                      className={`absolute top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] font-bold transition-transform ${
                        settings.reducedMotion
                          ? "translate-x-5 text-blue-600"
                          : "translate-x-0.5 text-gray-400"
                      }`}
                    >
                      {settings.reducedMotion ? "ON" : ""}
                    </span>
                  </button>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-2 dark:border-gray-700">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1">
                    <label
                      htmlFor="high-contrast"
                      className="block text-xs font-semibold text-black dark:text-white"
                    >
                      High Contrast
                    </label>
                  </div>
                  <button
                    id="high-contrast"
                    role="switch"
                    aria-checked={settings.highContrast}
                    onClick={toggleHighContrast}
                    className={`relative h-5 w-10 flex-shrink-0 rounded-full transition-all ${
                      settings.highContrast ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
                    }`}
                  >
                    <span className="sr-only">
                      {settings.highContrast ? "Disable" : "Enable"} high contrast
                    </span>
                    <span
                      className={`absolute top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] font-bold transition-transform ${
                        settings.highContrast
                          ? "translate-x-5 text-blue-600"
                          : "translate-x-0.5 text-gray-400"
                      }`}
                    >
                      {settings.highContrast ? "ON" : ""}
                    </span>
                  </button>
                </div>
              </div>

              <button
                onClick={resetSettings}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-black transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-blue-400 dark:hover:bg-blue-900/20"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

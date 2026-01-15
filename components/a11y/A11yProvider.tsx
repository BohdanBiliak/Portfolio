"use client";

import { createContext, useContext, useEffect, useState } from "react";

type A11ySettings = {
  fontSize: number; // 6-25 px
  lineHeight: number; // 100-200 %
  letterSpacing: number; // 0-5 px
  reducedMotion: boolean;
  highContrast: boolean;
};

type A11yContextType = {
  settings: A11ySettings;
  updateFontSize: (size: number) => void;
  updateLineHeight: (height: number) => void;
  updateLetterSpacing: (spacing: number) => void;
  toggleReducedMotion: () => void;
  toggleHighContrast: () => void;
  resetSettings: () => void;
};

const defaultSettings: A11ySettings = {
  fontSize: 16,
  lineHeight: 150,
  letterSpacing: 0,
  reducedMotion: false,
  highContrast: false,
};

const A11yContext = createContext<A11yContextType | undefined>(undefined);

export function A11yProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);

  useEffect(() => {
    const saved = localStorage.getItem("a11y-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      applySettings(parsed);
    }

    // Check system preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && !saved) {
      setSettings((prev) => ({ ...prev, reducedMotion: true }));
      document.documentElement.classList.add("reduce-motion");
    }
  }, []);

  const applySettings = (newSettings: A11ySettings) => {
    // Font size
    document.documentElement.style.setProperty("--custom-font-size", `${newSettings.fontSize}px`);

    // Line height
    document.documentElement.style.setProperty(
      "--custom-line-height",
      `${newSettings.lineHeight}%`
    );

    // Letter spacing
    document.documentElement.style.setProperty(
      "--custom-letter-spacing",
      `${newSettings.letterSpacing}px`
    );

    // Reduced motion
    if (newSettings.reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }

    // High contrast
    if (newSettings.highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  const updateSettings = (newSettings: A11ySettings) => {
    setSettings(newSettings);
    localStorage.setItem("a11y-settings", JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const updateFontSize = (size: number) => {
    updateSettings({ ...settings, fontSize: size });
  };

  const updateLineHeight = (height: number) => {
    updateSettings({ ...settings, lineHeight: height });
  };

  const updateLetterSpacing = (spacing: number) => {
    updateSettings({ ...settings, letterSpacing: spacing });
  };

  const toggleReducedMotion = () => {
    updateSettings({ ...settings, reducedMotion: !settings.reducedMotion });
  };

  const toggleHighContrast = () => {
    updateSettings({ ...settings, highContrast: !settings.highContrast });
  };

  const resetSettings = () => {
    updateSettings(defaultSettings);
  };

  return (
    <A11yContext.Provider
      value={{
        settings,
        updateFontSize,
        updateLineHeight,
        updateLetterSpacing,
        toggleReducedMotion,
        toggleHighContrast,
        resetSettings,
      }}
    >
      {children}
    </A11yContext.Provider>
  );
}

export function useA11y() {
  const context = useContext(A11yContext);
  if (!context) {
    throw new Error("useA11y must be used within A11yProvider");
  }
  return context;
}

"use client";

import { createContext, useContext, useEffect, useState } from "react";

type HRModeContextType = {
  isHRMode: boolean;
  toggleHRMode: () => void;
};

const HRModeContext = createContext<HRModeContextType | undefined>(undefined);

export function HRModeProvider({ children }: { children: React.ReactNode }) {
  const [isHRMode, setIsHRMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hr-mode");
    if (saved) {
      const newValue = JSON.parse(saved);
      setIsHRMode(newValue);
      if (newValue) {
        document.documentElement.classList.add("hr-mode");
      }
    }
  }, []);

  const toggleHRMode = () => {
    const newValue = !isHRMode;
    setIsHRMode(newValue);
    localStorage.setItem("hr-mode", JSON.stringify(newValue));

    if (newValue) {
      document.documentElement.classList.add("hr-mode");
    } else {
      document.documentElement.classList.remove("hr-mode");
    }
  };

  return (
    <HRModeContext.Provider value={{ isHRMode, toggleHRMode }}>{children}</HRModeContext.Provider>
  );
}

export function useHRMode() {
  const context = useContext(HRModeContext);
  if (!context) {
    throw new Error("useHRMode must be used within HRModeProvider");
  }
  return context;
}

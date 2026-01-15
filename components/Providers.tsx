"use client";

import { ThemeProvider } from "./ThemeProvider";
import { A11yProvider } from "./a11y/A11yProvider";
import A11yPanel from "./a11y/A11yPanel";
import SkipToContent from "./a11y/SkipToContent";
import { HRModeProvider } from "./hr/HRModeProvider";
import { LanguageProvider } from "./i18n/LanguageProvider";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <A11yProvider>
        <HRModeProvider>
          <LanguageProvider>
            <>
              <SkipToContent />
              <TopNav />
              <SideNav />
              <A11yPanel />
              {children}
            </>
          </LanguageProvider>
        </HRModeProvider>
      </A11yProvider>
    </ThemeProvider>
  );
}

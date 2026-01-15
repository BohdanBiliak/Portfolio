import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Bohdan Biliak",
    template: "%s | Bohdan Biliak Portfolio",
  },
  description:
    "Professional portfolio showcasing projects, courses, and skills in web development. Explore my work in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["portfolio", "web developer", "React", "Next.js", "TypeScript", "projects", "courses"],
  authors: [{ name: "Bohdan Biliak" }],
  creator: "Bohdan Biliak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Portfolio - Bohdan Biliak",
    description: "Professional portfolio showcasing projects and courses",
    siteName: "Bohdan Biliak Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

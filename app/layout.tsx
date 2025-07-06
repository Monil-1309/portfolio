import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Monil Desai - Frontend Developer",
  description:
    "Professional portfolio of Monil Desai, a Frontend Developer from Ahmedabad, India. Specializing in React, Next.js, Vue.js, and modern web technologies.",
  keywords:
    "Frontend Developer, React, Next.js, Vue.js, JavaScript, TypeScript, Web Development, Ahmedabad",
  authors: [{ name: "Monil Desai" }],
  openGraph: {
    title: "Monil Desai - Frontend Developer",
    description:
      "Professional portfolio showcasing modern web development projects and skills.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monil Desai - Frontend Developer",
    description:
      "Professional portfolio showcasing modern web development projects and skills.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

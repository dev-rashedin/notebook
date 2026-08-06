import type { Metadata } from "next";
import React, { JSX } from "react";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Notebook | Personal Dev Journal",
    template: "%s | Notebook",
  },

  description:
    "A personal development journal for tracking my learning and growth as a developer.",

  metadataBase: new URL("https://notebook.rashedin.dev"),

  authors: [{ name: "Rashedin Islam" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://notebook.rashedin.dev",
  },

  openGraph: {
    title: "Notebook | Personal Dev Journal",
    description:
      "A personal development journal for tracking my learning and growth as a developer.",
    url: "https://notebook.rashedin.dev",
    siteName: "Notebook",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Notebook | Personal Dev Journal",
    description:
      "A personal development journal for tracking my learning and growth as a developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.className} ${inter.className} font-body text-body antialiased [scrollbar-gutter:stable]`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Blog",
                  "@id": "https://notebook.rashedin.dev/#blog",
                  name: "Notebook",
                  url: "https://notebook.rashedin.dev",
                  description:
                    "A personal development journal for tracking my learning and growth as a developer.",
                  author: {
                    "@id": "https://notebook.rashedin.dev/#person",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://notebook.rashedin.dev/#person",
                  name: "Rashedin Islam",
                  url: "https://rashedin.dev",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://notebook.rashedin.dev/#website",
                  url: "https://notebook.rashedin.dev",
                  name: "Notebook",
                },
              ],
            }),
          }}
        />
        <meta
          name="google-site-verification"
          content="rXuGd6piozPg3OsqUwmEgfymqQDbG9b16yMJDwqOGl8"
        />
      </head>
      <body className="relative overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

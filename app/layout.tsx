import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/constants";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.name} — ${site.role}`,
  },
  description: site.description,
  keywords: [
    "Mayo",
    "IT Support",
    "troubleshooting",
    "user support",
    "system maintenance",
    "application support",
    "infrastructure support",
    "documentation",
    "MySQL",
    "Riau",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  // TODO: replace site.url with production domain before deploy
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.title,
    type: "website",
    images: [
      {
        // TODO: replace /og.svg with raster OG image (1200x630 png/jpg) for broader social-media compatibility
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Mayo — IT Support, Troubleshooting and Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
    { media: "(prefers-color-scheme: light)", color: "#f8f8f6" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-background font-sans text-foreground">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface-0 focus:px-4 focus:py-2 focus:text-sm focus:ring-2 focus:ring-accent"
          >
            Skip to content
          </a>
          <Navbar />
          <div id="top" className="flex flex-1 flex-col">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

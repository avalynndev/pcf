import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GoogleAnalytics } from '@next/third-parties/google';

import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "avalynndev", url: siteConfig.authorUrl }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  metadataBase: new URL(siteConfig.url),
  creator: "avalynndev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId="G-YQNCXQZ7DV" />
      <meta name="apple-mobile-web-app-title" content="PCF" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextThemesProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
          <SiteFooter />
        </NextThemesProvider>
      </body>
    </html>
  );
}

// "relative size-full min-h-dvh font-sans antialiased scroll-smooth flex flex-col"

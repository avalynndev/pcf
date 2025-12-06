import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Geist, Geist_Mono, Indie_Flower, Gaegu } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/footer";
import { siteConfig } from "@/config/site";

const breakfastNoodles = localFont({
  src: "/bn.woff2",
  variable: "--font-breakfast",
  weight: "200",
  style: "normal",
});

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-indie-flower",
});

const gaegu = Gaegu({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-gaegu",
});

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="apple-mobile-web-app-title" content="PCF" />
      <body
        className={`
          ${breakfastNoodles.variable}
          ${indieFlower.variable}
          ${gaegu.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          font-custom
        `}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
          <SiteFooter />
        </NextThemesProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PostHogProvider } from "./providers";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "./site-data.mjs";

// Self-hosted fonts. next/font/google fetches from Google Fonts at BUILD
// time, which fails the whole build on any transient network hiccup
// ("npm run build exited 1" on Vercel). Bundling the woff2 files removes
// that dependency entirely. Archivo is the variable font (400-900 in one
// file); Archivo Black is the single-weight display face. latin subset
// covers all glyphs on the site (incl. ·, ©, em dash).
const archivo = localFont({
  src: "./fonts/Archivo-latin.woff2",
  variable: "--font-archivo",
  weight: "400 900",
  display: "swap",
});

const archivoBlack = localFont({
  src: "./fonts/ArchivoBlack-latin.woff2",
  variable: "--font-archivo-black",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  keywords: [
    "Wonderhall",
    "live music",
    "Network School",
    "concert",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: "Wonderhall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@adamtpang",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Match the mobile browser chrome to the canvas.
export const viewport: Viewport = {
  themeColor: "#131011",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://luma.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}

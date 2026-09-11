import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PostHogProvider } from "./providers";
import Script from "next/script";

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
  metadataBase: new URL("https://wonderhall.live"),
  title: "Wonderhall",
  description:
    "A live music night at Network School. Next show: Wonderhall III, Sunday 23 August 2026.",
  keywords: [
    "Wonderhall",
    "live music",
    "Network School",
    "concert",
  ],
  openGraph: {
    title: "Wonderhall",
    description:
      "A live music night at Network School. Next show: Wonderhall III, Sunday 23 August 2026.",
    url: "https://wonderhall.live",
    siteName: "Wonderhall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonderhall",
    description:
      "A live music night at Network School. Next show: Wonderhall III, Sunday 23 August 2026.",
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
        <Script id="posthog-fleet" strategy="afterInteractive">{`(function(){if(window.__posthogFleet)return;window.__posthogFleet=1;var s=document.createElement('script');s.async=true;s.src='https://us-assets.i.posthog.com/static/array.js';s.onload=function(){if(!window.posthog||!window.posthog.init)return;window.posthog.init('phc_FCpCP9mIsb9IcxpX0Qqi6FmJ48sVvscAYIrZmtRHIq4',{api_host:'https://us.i.posthog.com',person_profiles:'identified_only',capture_pageview:'history_change',capture_pageleave:true,autocapture:false,disable_session_recording:true,disable_surveys:true,loaded:function(p){p.register({site:location.hostname})}});};document.head.appendChild(s);})();`}</Script>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}

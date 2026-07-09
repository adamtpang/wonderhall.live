import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";
import SiteFooter from "./site-footer";

// Archivo (multi-weight) for text; Archivo Black (single weight) for display.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wonderhall.live"),
  title: "Wonderhall",
  description:
    "A live music night at Network School in Forest City, Malaysia. Next show: Wonderhall III, Sunday 23 August 2026.",
  keywords: [
    "Wonderhall",
    "live music",
    "Network School",
    "Forest City",
    "Malaysia",
    "concert",
  ],
  openGraph: {
    title: "Wonderhall",
    description:
      "A live music night at Network School in Forest City, Malaysia. Next show: Wonderhall III, Sunday 23 August 2026.",
    url: "https://wonderhall.live",
    siteName: "Wonderhall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonderhall",
    description:
      "A live music night at Network School in Forest City, Malaysia. Next show: Wonderhall III, Sunday 23 August 2026.",
    creator: "@adamtpang",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body className="min-h-full flex flex-col">
        <PostHogProvider>{children}</PostHogProvider>
        <SiteFooter />
      </body>
    </html>
  );
}

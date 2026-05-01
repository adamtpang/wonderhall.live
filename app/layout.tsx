import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wonderhall.live"),
  title: "Wonderhall",
  description:
    "A live music night at Network School in Forest City, Malaysia. Every even month.",
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
      "A live music night at Network School in Forest City, Malaysia. Every even month.",
    url: "https://wonderhall.live",
    siteName: "Wonderhall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonderhall",
    description:
      "A live music night at Network School in Forest City, Malaysia. Every even month.",
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://luma.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

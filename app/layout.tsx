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
  title: "Wonderhall — live music at Network School",
  description:
    "Bimonthly live music series. Adam Pangelinan & Maanasa. Network School, Langkawi.",
  keywords: [
    "Wonderhall",
    "live music",
    "Network School",
    "Langkawi",
    "Adam Pangelinan",
    "Maanasa",
    "concert",
    "indie",
  ],
  openGraph: {
    title: "Wonderhall — live music at Network School",
    description:
      "Bimonthly live music series. Adam Pangelinan & Maanasa. Network School, Langkawi.",
    url: "https://wonderhall.live",
    siteName: "Wonderhall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonderhall — live music at Network School",
    description:
      "Bimonthly live music series. Adam Pangelinan & Maanasa. Network School, Langkawi.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}

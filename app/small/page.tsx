import type { Metadata } from "next";
import { Reveal, RevealNow } from "../reveal";

export const metadata: Metadata = {
  title: "wondersmall",
  description: "A tiny desk concert. Invite only.",
  openGraph: {
    title: "wondersmall",
    description: "A tiny desk concert. Invite only.",
    url: "https://wonderhall.live/small",
    siteName: "Wonderhall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wondersmall",
    description: "A tiny desk concert. Invite only.",
    creator: "@adamtpang",
  },
  robots: { index: true, follow: true },
};

export default function Small() {
  return (
    <main className="relative z-10 flex-1 w-full flex flex-col items-center justify-center min-h-[80vh] px-6 py-16">
      <RevealNow>
        <h1
          className="text-center leading-none lowercase"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 10vw, 11rem)",
            letterSpacing: "var(--track-hero)",
            color: "var(--text)",
          }}
        >
          wondersmall
        </h1>
      </RevealNow>

      <RevealNow delay={0.15}>
        <p
          className="wh-eyebrow mt-6 text-center"
          style={{ color: "var(--accent)" }}
        >
          A Tiny Desk Concert
        </p>
      </RevealNow>

      <Reveal>
        <p
          className="wh-eyebrow mt-16 sm:mt-24 text-center"
          style={{ color: "var(--text-3)" }}
        >
          July 2026 · Invite Only
        </p>
      </Reveal>
    </main>
  );
}

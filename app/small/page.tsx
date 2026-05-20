import type { Metadata } from "next";
import { Reveal, RevealNow } from "../reveal";
import Stars from "../stars";

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
    <>
      <Stars />

      <main className="relative z-10 flex-1 w-full flex flex-col items-center justify-center min-h-[80vh] px-6 py-16">
        <RevealNow>
          <h1
            className="font-light lowercase bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 bg-clip-text text-transparent leading-none text-center whitespace-nowrap"
            style={{
              fontSize: "clamp(2rem, 10vw, 12rem)",
              letterSpacing: "-0.04em",
            }}
          >
            wondersmall
          </h1>
        </RevealNow>

        <RevealNow delay={0.15}>
          <p className="mt-6 text-center text-sm sm:text-base uppercase tracking-[0.4em] text-white/60">
            A Tiny Desk Concert
          </p>
        </RevealNow>

        <Reveal>
          <div className="mt-16 sm:mt-24 text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-white/55">
              July 2026
            </p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white/35">
              Invite Only
            </p>
          </div>
        </Reveal>
      </main>
    </>
  );
}

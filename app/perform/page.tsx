import type { Metadata } from "next";
import { RevealNow } from "../reveal";
import Wordmark from "../wordmark";
import PerformForm from "./perform-form";

export const metadata: Metadata = {
  title: "Play Wonderhall",
  description:
    "The door's always open. Tell us what you'd play. We run auditions before every show.",
  openGraph: {
    title: "Play Wonderhall",
    description:
      "The door's always open. Tell us what you'd play. We run auditions before every show.",
    url: "https://wonderhall.live/perform",
    siteName: "Wonderhall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Play Wonderhall",
    description: "The door's always open. Tell us what you'd play.",
    creator: "@adamtpang",
  },
  robots: { index: true, follow: true },
};

export default function Perform() {
  return (
    <main className="relative z-10 flex-1 w-full px-6 py-16 sm:py-24">
      <div className="w-full max-w-lg mx-auto">
        <RevealNow>
          <div className="flex flex-col items-center text-center">
            <span className="wh-h2">Play</span>
            <Wordmark className="text-[clamp(1.75rem,8vw,4rem)] mt-1" />
          </div>
        </RevealNow>

        <RevealNow delay={0.15}>
          <p className="wh-lead text-center mt-8">
            The door&apos;s always open. Wonderhall is a meritocracy: if it&apos;s
            worth ten minutes of prep, it&apos;s worth the stage. Tell us what
            you&apos;d play. We run auditions before every show and we&apos;ll
            reach out.
          </p>
        </RevealNow>

        <RevealNow delay={0.3}>
          <div className="mt-12">
            <PerformForm />
          </div>
        </RevealNow>

        <RevealNow delay={0.45}>
          <div className="mt-12 text-center">
            <a
              href="/"
              className="wh-eyebrow inline-block transition-colors hover:text-[var(--orange)]"
              style={{ color: "var(--mute)" }}
            >
              ← Wonderhall
            </a>
          </div>
        </RevealNow>
      </div>
    </main>
  );
}

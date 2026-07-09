import Countdown from "./countdown";
import Gallery from "./gallery";
import gallery from "./gallery-data.json";
import { Reveal, RevealNow } from "./reveal";
import Wordmark from "./wordmark";

// ---- Show config ----
const YOUTUBE_WONDERHALL_I = "My6bShyEurI"; // Wonderhall I — 18 April 2026
const YOUTUBE_WONDERHALL_II = "YoY8NJs-ytY"; // Wonderhall II — 20 June 2026
const SHOW_III_DATE = "Sun 23 August 2026";

export default function Home() {
  return (
    <main className="relative z-10 flex-1 w-full">
      {/* TITLE — CSS-only entrance so the page is never blank without JS */}
      <section className="w-full px-4 sm:px-6 pt-12 pb-4 sm:pt-16 sm:pb-6">
        <h1 className="wh-rise flex justify-center">
          <Wordmark className="text-[clamp(2.25rem,12vw,13rem)]" />
        </h1>
        <p className="wh-rise wh-rise--late wh-eyebrow text-center mt-6">
          We came to bring beauty back
        </p>
      </section>

      {/* ABOUT */}
      <section className="w-full px-6 pt-8 pb-14 sm:pb-20">
        <RevealNow delay={0.15}>
          <div className="w-full max-w-2xl mx-auto text-center">
            <p className="wh-lead">
              Wonderhall is a live music night at Network School in Forest City,
              Malaysia. Every even month, performers from across the campus take
              the Level 2 ballroom for one ninety-minute set.
            </p>
          </div>
        </RevealNow>
      </section>

      {/* PHOTOS, auto-scrolling, shuffled per refresh, under the 3-stripe accent rule */}
      <section className="w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="wh-rule mb-3">
            <span />
            <span />
            <span />
          </div>
        </div>
        <Gallery photos={gallery} />
      </section>

      {/* EVOLUTION INTRO */}
      <section className="w-full px-4 sm:px-6 pt-6 pb-12 sm:pb-16">
        <Reveal>
          <div className="w-full max-w-5xl mx-auto text-center">
            <p className="wh-eyebrow mb-3" style={{ color: "var(--orange)" }}>
              The Evolution
            </p>
            <h2 className="wh-h2">From one night to a tradition</h2>
          </div>
        </Reveal>
      </section>

      {/* WONDERHALL I — where it started (compact, the humble origin) */}
      <section className="w-full px-4 sm:px-6 pb-16 sm:pb-24">
        <Reveal>
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="wh-chip"
                style={{ background: "var(--amber)", color: "var(--ink)" }}
              >
                I
              </span>
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="wh-h3">Wonderhall I</h3>
                <span className="wh-eyebrow">18 April 2026</span>
              </div>
            </div>
            <p className="wh-body mb-5 max-w-2xl">
              The first night. One ballroom, a handful of acts, and a room that
              stayed until the lights came up.
            </p>
            <div
              className="w-full aspect-video overflow-hidden bg-black"
              style={{
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_WONDERHALL_I}?playsinline=1&rel=0`}
                title="Wonderhall I — 18 April 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* WONDERHALL II — the featured film (full-bleed cinema band) */}
      <section
        className="w-full"
        style={{ background: "var(--espresso)" }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <Reveal>
            <p className="wh-eyebrow mb-4" style={{ color: "var(--amber)" }}>
              Now Showing
            </p>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
              <h2 aria-label="Wonderhall II" className="leading-none">
                <span
                  className="wh-numeral"
                  style={{ color: "var(--orange)" }}
                  aria-hidden="true"
                >
                  II
                </span>
                <span
                  className="wh-h3 block mt-3"
                  style={{ color: "var(--paper)" }}
                  aria-hidden="true"
                >
                  Wonderhall II
                </span>
              </h2>
              <p
                className="wh-eyebrow pb-2"
                style={{ color: "var(--mute)" }}
              >
                20 June 2026 · Network School
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div
              className="w-full aspect-video overflow-hidden bg-black"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_WONDERHALL_II}?autoplay=1&mute=1&playsinline=1&rel=0`}
                title="Wonderhall II — 20 June 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </Reveal>

          <Reveal>
            <p
              className="wh-lead mt-8 max-w-2xl"
              style={{ color: "var(--paper)" }}
            >
              The sound grew. A full production — staging, visuals, a bigger bill
              — and a campus that showed up for it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WONDERHALL III — coming (anticipation poster, no CTA yet) */}
      <section className="w-full px-4 sm:px-6 py-16 sm:py-24">
        <div className="w-full max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="wh-eyebrow mb-4" style={{ color: "var(--pink)" }}>
              Save the Date
            </p>
            <h2 aria-label="Wonderhall III" className="leading-none">
              <span
                className="wh-numeral mx-auto"
                style={{ color: "var(--pink)" }}
                aria-hidden="true"
              >
                III
              </span>
              <span className="wh-h3 block mt-3" aria-hidden="true">
                Wonderhall III
              </span>
            </h2>
            <p
              className="wh-eyebrow mt-4 mb-12"
              style={{ color: "var(--slate)" }}
            >
              {SHOW_III_DATE} · Network School
            </p>
          </Reveal>

          <Reveal>
            <Countdown />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="w-full px-6 py-8"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <p className="wh-eyebrow">© 2026 Wonderhall</p>
          <p className="wh-eyebrow">Forest City, Malaysia</p>
        </div>
      </footer>
    </main>
  );
}

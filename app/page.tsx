import Countdown from "./countdown";
import Gallery from "./gallery";
import gallery from "./gallery-data.json";
import Qr from "./qr";
import { Reveal, RevealNow } from "./reveal";
import Wordmark from "./wordmark";

// ---- Show config: update these as Wonderhall III assets go live ----
const YOUTUBE_WONDERHALL_I = "My6bShyEurI"; // Wonderhall I — 18 April 2026
const YOUTUBE_WONDERHALL_II = "YoY8NJs-ytY"; // Wonderhall II — 20 June 2026

// PLACEHOLDER: still the Wonderhall II event — swap in the Wonderhall III
// Luma event ID the moment it's created.
const LUMA_EVENT_ID = "47q03ybr";
const LUMA_EVENT_URL = `https://luma.com/${LUMA_EVENT_ID}`;

// PLACEHOLDER: paste the real 🥁 Music at NS invite link here (WhatsApp →
// Group info → Invite via link). The QR code and button both read from this.
// Note: chat.whatsapp.com/B8OvTKZMlYa4OMZR6Pxn1T is the *Electronic* Music
// at NS group — a different group; don't use it here.
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/REPLACE-WITH-MUSIC-AT-NS-INVITE";

const SHOW_III_DATE = "Sun 23 August 2026";

// The story so far: each show, in order.
const CHAPTERS = [
  {
    numeral: "I",
    date: "18 April 2026",
    bg: "var(--amber)",
    fg: "var(--ink)",
    blurb:
      "The first night. One ballroom, a handful of acts, and a room that stayed until the lights came up.",
    videoId: YOUTUBE_WONDERHALL_I,
  },
  {
    numeral: "II",
    date: "20 June 2026",
    bg: "var(--orange)",
    fg: "var(--paper)",
    blurb:
      "The sound grew. A full production — staging, visuals, a bigger bill — and a campus that showed up for it.",
    videoId: YOUTUBE_WONDERHALL_II,
  },
] as const;

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

      {/* THE EVOLUTION — one chapter per show, growing as it goes */}
      <section className="w-full px-4 sm:px-6 pb-16 sm:pb-20">
        <Reveal>
          <div className="w-full max-w-5xl mx-auto text-center mb-12 sm:mb-16">
            <p className="wh-eyebrow mb-3" style={{ color: "var(--orange)" }}>
              The Evolution
            </p>
            <h2 className="wh-h2">From one night to a tradition</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16 sm:gap-20">
          {CHAPTERS.map((chapter, i) => (
            <Reveal key={chapter.numeral}>
              <div
                className={`w-full mx-auto ${i === 0 ? "max-w-3xl" : "max-w-5xl"}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="wh-chip"
                    style={{ background: chapter.bg, color: chapter.fg }}
                  >
                    {chapter.numeral}
                  </span>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="wh-h3">Wonderhall {chapter.numeral}</h3>
                    <span className="wh-eyebrow">{chapter.date}</span>
                  </div>
                </div>
                <p className="wh-body mb-5 max-w-2xl">{chapter.blurb}</p>
                <div
                  className="w-full aspect-video overflow-hidden bg-black"
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${chapter.videoId}?${
                      i === CHAPTERS.length - 1
                        ? "autoplay=1&mute=1&playsinline=1&rel=0"
                        : "playsinline=1&rel=0"
                    }`}
                    title={`Wonderhall ${chapter.numeral} — ${chapter.date}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}

          {/* Chapter III — the one you can still be part of */}
          <Reveal>
            <div className="w-full max-w-5xl mx-auto">
              <a href="#next" className="block group">
                <div
                  className="px-6 py-12 sm:py-16 text-center transition-opacity group-hover:opacity-90"
                  style={{
                    background: "var(--pink)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <p className="wh-eyebrow" style={{ color: "var(--ink)" }}>
                    Wonderhall III · {SHOW_III_DATE}
                  </p>
                  <p className="wh-h2 mt-4">You&apos;re in this one ↓</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEXT EVENT — no JS-dependent reveal: the RSVP path must always render */}
      <section id="next" className="w-full px-6 pb-20 sm:pb-24 scroll-mt-8">
        <div className="w-full max-w-md mx-auto text-center">
          <p className="wh-eyebrow mb-4" style={{ color: "var(--orange)" }}>
            Next Show
          </p>

          <h2
            aria-label="Wonderhall III"
            className="flex items-baseline justify-center gap-2 mb-3"
          >
            <Wordmark className="text-[clamp(1.5rem,6vw,2.5rem)]" />
            <span
              className="wh-h2"
              style={{ fontSize: "clamp(1.5rem, 6vw, 2.5rem)" }}
            >
              III
            </span>
          </h2>

          <p className="wh-eyebrow mb-8">
            {SHOW_III_DATE} · Network School
          </p>

          <div className="mb-10">
            <Countdown />
          </div>

          <div
            className="overflow-hidden"
            style={{
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <iframe
              src={`https://luma.com/embed/event/${LUMA_EVENT_ID}/simple`}
              width="100%"
              height="600"
              title="Wonderhall III RSVP"
              loading="lazy"
              allowFullScreen
              className="w-full bg-white"
            />
          </div>

            {/* Scan from a poster / projector / friend's screen */}
            <div
              className="mt-4 flex items-center justify-between gap-5 p-5 text-left"
              style={{
                background: "var(--field)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div>
                <p className="wh-eyebrow mb-2">Scan to RSVP</p>
                <p className="wh-body">
                  Point your camera here, or open{" "}
                  <a
                    href={LUMA_EVENT_URL}
                    className="underline transition-colors hover:text-[var(--orange)]"
                    style={{ color: "var(--slate)" }}
                  >
                    the Luma event
                  </a>
                  .
                </p>
              </div>
              <Qr
                value={LUMA_EVENT_URL}
                label="QR code for the Wonderhall III RSVP page on Luma"
                className="w-24 sm:w-28 shrink-0"
              />
          </div>
        </div>
      </section>

      {/* THE BAND ROOM — the WhatsApp group where the show gets built.
          No JS-dependent reveal: the join path must always render. */}
      <section className="w-full px-4 sm:px-6 pb-20 sm:pb-24">
          <div
            className="w-full max-w-5xl mx-auto px-6 py-14 sm:py-16"
            style={{
              background: "var(--espresso)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-14">
              <div className="text-center sm:text-left max-w-sm">
                <p className="wh-eyebrow mb-3" style={{ color: "var(--amber)" }}>
                  The Band Room
                </p>
                <h2 className="wh-h3" style={{ color: "var(--paper)" }}>
                  Every show starts in the group chat
                </h2>
                <p
                  className="wh-body mt-4"
                  style={{ color: "var(--mute)" }}
                >
                  Sets, jams, rehearsals, and the next bill all get built in
                  🥁 Music at NS. If you play, sing, or produce — this is the
                  door.
                </p>
                <a
                  href={WHATSAPP_GROUP_URL}
                  className="wh-btn wh-btn--amber inline-block mt-6"
                >
                  Join on WhatsApp
                </a>
              </div>
              <div
                className="p-4 shrink-0"
                style={{
                  background: "var(--paper)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <Qr
                  value={WHATSAPP_GROUP_URL}
                  label="QR code to join the Music at NS WhatsApp group"
                  className="w-36 sm:w-40"
                />
              </div>
            </div>
          </div>
      </section>

      {/* PERFORM, the door's always open */}
      <section className="w-full px-6 pb-20 sm:pb-24">
        <Reveal>
          <div className="text-center">
            <a
              href="/perform"
              className="wh-eyebrow inline-block transition-colors hover:text-[var(--orange)]"
            >
              Want to play Wonderhall? →
            </a>
          </div>
        </Reveal>
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

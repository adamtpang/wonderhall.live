import Countdown from "./countdown";
import Gallery from "./gallery";
import gallery from "./gallery-data.json";
import { Reveal, RevealNow } from "./reveal";
import Stars from "./stars";

const YOUTUBE_VIDEO_ID = "My6bShyEurI";
const LUMA_EVENT_ID = "47q03ybr";

export default function Home() {
  return (
    <>
      <Stars />

      <main className="relative z-10 flex-1 w-full">
        {/* TITLE */}
        <section className="w-full px-4 sm:px-6 pt-10 pb-6 sm:pt-14 sm:pb-8">
          <RevealNow>
            <h1
              className="font-black uppercase bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 bg-clip-text text-transparent leading-none text-center whitespace-nowrap"
              style={{
                fontSize: "clamp(2.5rem, 13.5vw, 18rem)",
                letterSpacing: "-0.06em",
              }}
            >
              Wonderhall
            </h1>
          </RevealNow>
        </section>

        {/* ABOUT */}
        <section className="w-full px-6 pb-12 sm:pb-16">
          <RevealNow delay={0.15}>
            <div className="w-full max-w-2xl mx-auto text-center">
              <p className="text-lg sm:text-xl leading-relaxed text-white/80">
                Wonderhall is a live music night at Network School in Forest
                City, Malaysia. Every even month, performers from across the
                campus take the Level 2 ballroom for one ninety-minute set.
              </p>
            </div>
          </RevealNow>
        </section>

        {/* PHOTOS — auto-scrolling, shuffled per refresh */}
        <Gallery photos={gallery} />

        {/* VIDEO */}
        <section className="w-full px-4 sm:px-6 pb-16 sm:pb-20">
          <Reveal>
            <div className="w-full max-w-5xl mx-auto">
              <div
                className="w-full aspect-video overflow-hidden border border-white/10 bg-black rounded-md"
                style={{
                  boxShadow:
                    "0 20px 80px -20px rgba(249,115,22,0.5), 0 0 120px -40px rgba(251,191,36,0.3)",
                }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&playsinline=1&rel=0`}
                  title="Wonderhall I"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* NEXT EVENT */}
        <section className="w-full px-6 pb-20 sm:pb-24">
          <Reveal>
            <div className="w-full max-w-md mx-auto text-center">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-yellow-400 font-semibold mb-3">
                Next Show
              </p>
              <h2
                className="font-black uppercase tracking-tight leading-none bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-4"
                style={{
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                Wonderhall II
              </h2>
              <p className="text-sm uppercase tracking-[0.25em] text-white/60 mb-8">
                June 2026 · Network School
              </p>

              <div className="mb-10">
                <Countdown />
              </div>

              <div
                className="overflow-hidden rounded-lg"
                style={{
                  boxShadow:
                    "0 20px 80px -20px rgba(249,115,22,0.5), 0 0 120px -40px rgba(251,191,36,0.3)",
                }}
              >
                <iframe
                  src={`https://luma.com/embed/event/${LUMA_EVENT_ID}/simple`}
                  width="100%"
                  height="600"
                  title="Wonderhall II RSVP"
                  loading="lazy"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  className="w-full bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="w-full px-6 py-8 border-t border-white/5">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40">
            <p>© 2026 Wonderhall</p>
            <p>Forest City, Malaysia</p>
          </div>
        </footer>
      </main>
    </>
  );
}

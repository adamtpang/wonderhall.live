// Wonderhall single-page landing.

const YOUTUBE_VIDEO_ID = "My6bShyEurI";
const NS_URL = "https://ns.com";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      {/* ============================ HERO ============================ */}
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 bg-black overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 30%, rgba(251,191,36,0.18) 0%, rgba(249,115,22,0.08) 40%, rgba(0,0,0,0) 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          <div className="fade-in-up flex items-baseline gap-3 mb-6 sm:mb-8">
            <h1
              className="font-black uppercase tracking-tight text-white"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Wonderhall
            </h1>
            <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-yellow-400">
              I
            </span>
          </div>

          <div
            className="fade-in-up delay-1 w-full aspect-video overflow-hidden border border-white/10 bg-black"
            style={{
              boxShadow:
                "0 0 80px rgba(251,191,36,0.12), 0 0 200px rgba(249,115,22,0.05)",
            }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
              title="Wonderhall I · Network School, April 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <p className="fade-in-up delay-2 mt-6 text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.35em]">
            Vol. I · April 2026 ·{" "}
            <a
              href={NS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              Network School
            </a>
          </p>
        </div>

        <a
          href="#story"
          aria-label="Scroll to story"
          className="fade-in delay-3 absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-yellow-400 text-[10px] uppercase tracking-[0.4em] transition-colors"
        >
          ↓ Story
        </a>
      </section>

      {/* ============================ STORY ============================ */}
      <section
        id="story"
        className="relative w-full bg-black border-t border-white/10 px-6 py-32 sm:py-48 overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(45% 50% at 75% 35%, rgba(249,115,22,0.22) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto space-y-10 text-lg sm:text-xl text-white/80 leading-relaxed">
          <p>
            <a
              href={NS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Network School
            </a>{" "}
            is brilliant. Forest City is beautiful. Both, at certain hours,
            can also feel a little sterile. Glass towers, empty walkways, the
            hum of work, work, work.
          </p>
          <p>
            So we made a place to remember what the body already knows: that we
            were built for the kind of awe you feel at a great show, in a quiet
            church, or under a full sky. The kind that resets you.
          </p>
          <p
            className="font-black uppercase tracking-tight leading-[0.9] pt-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500 bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            We came to bring beauty back.
          </p>
        </div>
      </section>

      {/* ============================ NEXT ============================ */}
      <section
        id="next"
        className="relative w-full bg-black border-t border-white/10 px-6 py-32 sm:py-40 overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(45% 40% at 25% 50%, rgba(251,191,36,0.18) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 uppercase tracking-[0.4em] text-[10px] sm:text-xs font-semibold">
            Next
          </p>
          <h2
            className="mt-5 font-black uppercase tracking-tight text-white"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 6.5rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Wonderhall II
          </h2>
          <p className="mt-6 text-white/60 text-sm sm:text-base uppercase tracking-[0.3em]">
            June 2026 ·{" "}
            <a
              href={NS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              Network School
            </a>
          </p>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="w-full bg-black border-t border-white/10 px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40">
          <p>© 2026 Wonderhall</p>
          <p>Forest City, Malaysia</p>
        </div>
      </footer>
    </main>
  );
}

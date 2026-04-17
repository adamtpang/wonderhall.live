// Wonderhall — single-page landing.
// Keep this file the source of truth for section structure. Replace placeholders
// marked with UPPERCASE comments (LUMA_EMBED, LIVESTREAM_EMBED, SPOTIFY_EMBED,
// REPLACE WITH REAL PHOTOS) as real content lands.

const LUMA_URL = "https://lu.ma/wonderhall"; // placeholder — swap for real Luma event
const YOUTUBE_URL = "#"; // placeholder — channel URL
const INSTAGRAM_URL = "#";
const X_URL = "#";
const SPOTIFY_URL = "#";

const pastShows = [
  {
    date: "Feb 2026",
    venue: "NS Campus · Langkawi",
    gradient: "from-red-500/60 via-orange-500/30 to-black",
  },
  {
    date: "Dec 2025",
    venue: "NS Campus · Langkawi",
    gradient: "from-fuchsia-500/60 via-purple-700/30 to-black",
  },
  {
    date: "Oct 2025",
    venue: "NS Campus · Langkawi",
    gradient: "from-yellow-400/60 via-red-500/30 to-black",
  },
];

const galleryGradients = [
  "from-red-600/70 via-black to-black",
  "from-yellow-400/60 via-red-600/40 to-black",
  "from-purple-600/60 via-pink-500/30 to-black",
  "from-emerald-400/50 via-cyan-600/30 to-black",
  "from-orange-500/70 via-red-700/40 to-black",
  "from-pink-500/60 via-fuchsia-700/30 to-black",
  "from-blue-500/60 via-indigo-700/30 to-black",
  "from-rose-500/70 via-black to-black",
];

export default function Home() {
  return (
    <main className="flex-1 w-full">
      {/* ============================ HERO ============================ */}
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 bg-black overflow-hidden"
      >
        {/* subtle glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 40%, rgba(255,51,51,0.18) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-6xl">
          <p className="fade-in-up text-xs sm:text-sm tracking-[0.4em] uppercase text-white/60 mb-8">
            Network School · Langkawi
          </p>
          <h1
            className="fade-in-up delay-1 font-black uppercase leading-[0.85] tracking-tight text-white"
            style={{
              fontSize: "clamp(4rem, 18vw, 16rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Wonderhall
          </h1>
          <p className="fade-in-up delay-2 mt-8 text-lg sm:text-xl text-white/70 max-w-xl">
            Live music at Network School · bimonthly.
          </p>
          <a
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in-up delay-3 mt-12 inline-flex items-center gap-3 bg-[#ff3333] hover:bg-white hover:text-black text-white font-semibold px-8 py-4 text-base sm:text-lg transition-colors duration-200 uppercase tracking-widest"
          >
            <span>Next show · April 18</span>
            <span aria-hidden>→</span>
          </a>
        </div>

        <div
          aria-hidden
          className="fade-in delay-3 absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-[0.3em]"
        >
          Scroll
        </div>
      </section>

      {/* ============================ UPCOMING ============================ */}
      <section
        id="upcoming"
        className="w-full bg-black border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="01" title="Next Show" />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start border border-white/10 hover:border-[#ff3333]/60 transition-colors p-8 sm:p-12">
            <div>
              <p className="text-[#ff3333] uppercase tracking-[0.3em] text-xs font-semibold">
                Friday · April 18, 2026
              </p>
              <h3 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight">
                Wonderhall Vol. 04
              </h3>
              <p className="mt-4 text-white/60 text-lg">
                Network School Campus · Langkawi, Malaysia
              </p>
              <p className="mt-6 text-white/80 max-w-xl leading-relaxed">
                One night. One room. Loud guitars, soft songs, and everyone in
                between. Doors open at sunset. Come early, stay late.
              </p>
            </div>

            <a
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-[#ff3333] hover:text-white font-semibold px-8 py-4 uppercase tracking-widest text-sm transition-colors whitespace-nowrap"
            >
              RSVP on Luma
            </a>
          </div>

          {/* LUMA_EMBED */}
          <div className="mt-10 border border-dashed border-white/10 p-10 text-center text-white/40 text-sm uppercase tracking-widest">
            {/* LUMA_EMBED */}
            Luma embed goes here
          </div>
        </div>
      </section>

      {/* ============================ PAST SHOWS ============================ */}
      <section
        id="past-shows"
        className="w-full bg-black border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="02" title="Past Shows" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastShows.map((show) => (
              <a
                key={show.date}
                href="#"
                className="group block border border-white/10 hover:border-[#ff3333]/60 transition-colors"
              >
                <div
                  className={`aspect-[4/5] bg-gradient-to-br ${show.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/70 uppercase tracking-widest text-xs font-semibold">
                      {show.date}
                    </p>
                    <p className="text-white font-semibold mt-1">
                      {show.venue}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5 bg-black">
                  <span className="text-white/80 group-hover:text-[#ff3333] transition-colors uppercase tracking-widest text-xs font-semibold">
                    Watch replay
                  </span>
                  <span
                    aria-hidden
                    className="text-white/50 group-hover:text-[#ff3333] group-hover:translate-x-1 transition-all"
                  >
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ GALLERY ============================ */}
      <section
        id="gallery"
        className="w-full bg-black border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="03" title="Gallery" />

          {/* REPLACE WITH REAL PHOTOS */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
            {galleryGradients.map((gradient, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${gradient} ${
                  i === 0 || i === 5 ? "row-span-2" : ""
                } ${i === 3 ? "col-span-2" : ""} relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ LIVESTREAM ============================ */}
      <section
        id="live"
        className="w-full bg-black border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="04" title="Watch Live" />

          <div className="mt-16">
            {/* LIVESTREAM_EMBED */}
            <div className="aspect-video w-full bg-black border border-white/10 flex items-center justify-center group hover:border-[#ff3333]/60 transition-colors">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full border-2 border-white/40 group-hover:border-[#ff3333] flex items-center justify-center transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-white/60 group-hover:text-[#ff3333] translate-x-0.5 transition-colors"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
                  Stream goes live april 18
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-white/70 max-w-md">
                Every Wonderhall is livestreamed. Subscribe to get notified when
                we go live.
              </p>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-[#ff3333] hover:text-[#ff3333] text-white font-semibold px-6 py-3 uppercase tracking-widest text-sm transition-colors"
              >
                Subscribe on YouTube
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ THE BAND ============================ */}
      <section
        id="band"
        className="w-full bg-black border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="05" title="The Band" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <BandCard
              name="Adam Pangelinan"
              role="vocals · guitar"
              bio="Builder by day, frontman on show nights. Runs Anchor Marianas and the Wonderhall series."
              href="https://adampang.com"
              gradient="from-red-600/60 via-black to-black"
            />
            <BandCard
              name="Maanasa"
              role="vocals"
              bio="Voice you hear first, song you remember last."
              href="#"
              gradient="from-fuchsia-600/60 via-black to-black"
            />
          </div>
        </div>
      </section>

      {/* ============================ MUSIC ============================ */}
      <section
        id="listen"
        className="w-full bg-black border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader kicker="06" title="Listen" />

          <div className="mt-16">
            {/* SPOTIFY_EMBED */}
            <div className="w-full border border-dashed border-white/10 p-16 text-center">
              <div className="flex flex-col items-center gap-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-white/40"
                >
                  <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.5 17.3a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.15a.75.75 0 0 1-.33-1.46c4.57-1.05 8.5-.6 11.66 1.33.36.22.47.69.25 1.03zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.14-2.56-11.95-1.4a.94.94 0 0 1-.55-1.8c4.37-1.33 9.78-.67 13.48 1.6.44.27.58.85.31 1.29zm.13-3.4c-3.87-2.3-10.27-2.51-13.97-1.39a1.12 1.12 0 1 1-.66-2.15c4.25-1.3 11.3-1.05 15.78 1.6a1.12 1.12 0 1 1-1.15 1.94z" />
                </svg>
                <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
                  Spotify embed coming soon
                </p>
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/20 hover:border-[#ff3333] hover:text-[#ff3333] text-white font-semibold px-6 py-3 uppercase tracking-widest text-sm transition-colors"
                >
                  Open on Spotify
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="w-full bg-black border-t border-white/10 px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-black uppercase tracking-tighter text-2xl">
              Wonderhall
            </p>
            <p className="text-white/40 text-sm mt-2">
              © 2026 Wonderhall. All shows held at Network School, Langkawi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-widest">
            <a
              href={INSTAGRAM_URL}
              className="text-white/60 hover:text-[#ff3333] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={X_URL}
              className="text-white/60 hover:text-[#ff3333] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              href={YOUTUBE_URL}
              className="text-white/60 hover:text-[#ff3333] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href={SPOTIFY_URL}
              className="text-white/60 hover:text-[#ff3333] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-white/10 text-white/40 text-xs uppercase tracking-widest">
          Built by{" "}
          <a
            href="https://adampang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff3333] transition-colors"
          >
            @adamtpang
          </a>
        </div>
      </footer>
    </main>
  );
}

/* ---------------- helpers ---------------- */

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
      <div>
        <p className="text-[#ff3333] uppercase tracking-[0.4em] text-xs font-semibold">
          {kicker}
        </p>
        <h2
          className="mt-3 font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 7vw, 5.5rem)" }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function BandCard({
  name,
  role,
  bio,
  href,
  gradient,
}: {
  name: string;
  role: string;
  bio: string;
  href: string;
  gradient: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group block border border-white/10 hover:border-[#ff3333]/60 transition-colors"
    >
      <div
        className={`aspect-[4/3] bg-gradient-to-br ${gradient} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-[#ff3333] uppercase tracking-[0.3em] text-xs font-semibold">
          {role}
        </p>
        <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight lowercase">
          {name.toLowerCase()}
        </h3>
        <p className="mt-4 text-white/70 leading-relaxed">{bio}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-white/80 group-hover:text-[#ff3333] uppercase tracking-widest text-xs font-semibold transition-colors">
          Visit site
          <span aria-hidden className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </span>
      </div>
    </a>
  );
}

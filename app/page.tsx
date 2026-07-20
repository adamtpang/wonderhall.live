import Countdown from "./countdown";
import Gallery from "./gallery";
import gallery from "./gallery-data.json";
import { Reveal } from "./reveal";
import Wordmark from "./wordmark";

// Shows in chronological order; rendered reverse-chronological (II, then I).
const SHOWS = [
  { numeral: "I", title: "Wonderhall I", date: "18 April 2026", videoId: "My6bShyEurI" },
  { numeral: "II", title: "Wonderhall II", date: "20 June 2026", videoId: "YoY8NJs-ytY" },
];
const SHOW_III_DATE = "23 August 2026";

// Numbered index header: big quiet numeral, title, date.
function ShowHead({
  numeral,
  title,
  date,
}: {
  numeral: string;
  title: string;
  date: string;
}) {
  return (
    <div className="flex items-baseline gap-4 sm:gap-6 mb-6">
      <span className="wh-numeral shrink-0" aria-hidden="true">
        {numeral}
      </span>
      <div className="flex-1 min-w-0 flex items-baseline justify-between gap-3 flex-wrap">
        <h2 className="wh-h2">{title}</h2>
        <span className="wh-eyebrow" style={{ color: "var(--text-3)" }}>
          {date}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative z-10 flex-1 w-full">
      {/* HEADLINE — the wordmark, CSS-only entrance (never blank without JS) */}
      <section className="w-full px-4 sm:px-6 pt-16 pb-10 sm:pt-24 sm:pb-14">
        <h1 className="wh-rise flex justify-center">
          <Wordmark className="text-[clamp(2.5rem,13vw,11rem)]" />
        </h1>
        <p className="wh-rise wh-rise--late wh-eyebrow text-center mt-6">
          Live music at Network School · Forest City
        </p>
      </section>

      {/* PHOTO CAROUSEL */}
      <section className="w-full">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="wh-rule mb-3" />
        </div>
        <Gallery photos={gallery} />
      </section>

      {/* SHOWS — reverse chronological: II, then I */}
      {[...SHOWS].reverse().map((show) => (
        <section
          key={show.title}
          className="w-full px-4 sm:px-6 pb-16 sm:pb-24"
        >
          <Reveal>
            <div className="w-full max-w-5xl mx-auto">
              <ShowHead
                numeral={show.numeral}
                title={show.title}
                date={show.date}
              />
              <div className="w-full aspect-video overflow-hidden bg-black wh-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${show.videoId}?playsinline=1&rel=0`}
                  title={`${show.title} — ${show.date}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      {/* WONDERHALL III — the next one, countdown, last */}
      <section className="w-full px-4 sm:px-6 pb-20 sm:pb-28">
        <Reveal>
          <div className="w-full max-w-5xl mx-auto">
            <p className="wh-eyebrow wh-eyebrow--accent mb-4">Next Show</p>
            <ShowHead numeral="III" title="Wonderhall III" date={SHOW_III_DATE} />
            <Countdown />
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer
        className="w-full px-6 py-8"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <p
          className="wh-eyebrow max-w-5xl mx-auto"
          style={{ color: "var(--text-3)" }}
        >
          © 2026 Wonderhall
        </p>
      </footer>
    </main>
  );
}

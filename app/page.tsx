import Image from "next/image";
import Countdown from "./countdown";
import Gallery from "./gallery";
import gallery from "./gallery-data.json";
import { Reveal } from "./reveal";
import Wordmark from "./wordmark";

// Full-bleed hero still. Swap for any /gallery/NN.jpg (05 = crowd, 45 = fire).
const HERO_PHOTO = "/gallery/45.jpg";

// Shows in chronological order; rendered latest-first (III, II, I).
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
      {/* HERO — a real photograph, full-bleed, wordmark over a soft scrim */}
      <section className="relative w-full h-[88vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={HERO_PHOTO}
          alt="Wonderhall live at Network School"
          fill
          priority
          sizes="100vw"
          className="object-cover wh-graded"
          style={{ objectPosition: "center 28%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(19,16,17,0.45) 0%, rgba(19,16,17,0.12) 34%, rgba(19,16,17,0.82) 100%)",
          }}
        />
        <div className="relative z-10 w-full px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="wh-rise flex">
              <Wordmark className="text-[clamp(2.25rem,11vw,8.5rem)]" />
            </h1>
            <p
              className="wh-rise wh-rise--late wh-eyebrow mt-4"
              style={{ color: "var(--text)" }}
            >
              Live music at Network School · Forest City
            </p>
          </div>
        </div>
      </section>

      {/* WONDERHALL III — next up, countdown */}
      <section className="w-full px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <Reveal>
          <div className="w-full max-w-5xl mx-auto">
            <p className="wh-eyebrow wh-eyebrow--accent mb-4">Next Show</p>
            <ShowHead numeral="III" title="Wonderhall III" date={SHOW_III_DATE} />
            <Countdown />
          </div>
        </Reveal>
      </section>

      {/* SHOWS — latest first (II, then I), same format */}
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

      {/* MORE PHOTOS — the slow marquee, edge to edge */}
      <section className="w-full pb-6">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-4">
          <div className="wh-rule" />
        </div>
        <Gallery photos={gallery} />
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

import Image from "next/image";
import Countdown from "./countdown";
import Gallery from "./gallery";
import gallery from "./gallery-data.json";
import { Reveal } from "./reveal";
import Wordmark from "./wordmark";

// ---- Shows (chronological; rendered latest-first) ----
const SHOWS = [
  { title: "Wonderhall I", date: "18 April 2026", videoId: "My6bShyEurI" },
  { title: "Wonderhall II", date: "20 June 2026", videoId: "YoY8NJs-ytY" },
];
const SHOW_III_DATE = "23 August 2026";

// A dozen stills for the bottom grid.
const GRID = gallery.slice(0, 12);

// One standardized header row: title on the left, date on the right.
function ShowHead({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 flex-wrap mb-5">
      <h2 className="wh-h2">{title}</h2>
      <span className="wh-eyebrow" style={{ color: "var(--text-3)" }}>
        {date}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative z-10 flex-1 w-full">
      {/* TITLE — CSS-only entrance so the page is never blank without JS */}
      <section className="w-full px-4 sm:px-6 pt-12 pb-14 sm:pt-16 sm:pb-20">
        <h1 className="wh-rise flex justify-center">
          <Wordmark className="text-[clamp(2.25rem,12vw,13rem)]" />
        </h1>
        <p className="wh-rise wh-rise--late wh-eyebrow text-center mt-6">
          Live music at Network School · Forest City
        </p>
      </section>

      {/* PHOTOS, auto-scrolling, under the aurora beam */}
      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="wh-rule mb-3" />
        </div>
        <Gallery photos={gallery} />
      </section>

      {/* WONDERHALL III — next up, countdown in place of the film */}
      <section className="w-full px-4 sm:px-6 pb-16 sm:pb-20">
        <Reveal>
          <div className="w-full max-w-4xl mx-auto">
            <ShowHead title="Wonderhall III" date={SHOW_III_DATE} />
            <Countdown />
          </div>
        </Reveal>
      </section>

      {/* SHOWS — latest first (II, then I), identical format */}
      {[...SHOWS].reverse().map((show) => (
        <section
          key={show.title}
          className="w-full px-4 sm:px-6 pb-16 sm:pb-20"
        >
          <Reveal>
            <div className="w-full max-w-4xl mx-auto">
              <ShowHead title={show.title} date={show.date} />
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

      {/* MORE PHOTOS — a still grid at the bottom */}
      <section className="w-full px-4 sm:px-6 pb-20 sm:pb-24">
        <Reveal>
          <div className="w-full max-w-4xl mx-auto">
            <div className="wh-rule mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {GRID.map((photo, i) => (
                <div
                  key={photo.src}
                  className="overflow-hidden rounded-md"
                  style={{ boxShadow: "inset 0 0 0 1px var(--line)" }}
                >
                  <Image
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    alt=""
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="w-full h-full object-cover aspect-square block"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer
        className="w-full px-6 py-8"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <p
          className="wh-eyebrow max-w-4xl mx-auto"
          style={{ color: "var(--text-3)" }}
        >
          © 2026 Wonderhall
        </p>
      </footer>
    </main>
  );
}

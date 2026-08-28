import Gallery from "./gallery";
import gallery from "./gallery-data.json";
import PhotoGrid from "./photo-grid";
import { Reveal } from "./reveal";
import { HOME_JSON_LD, HOME_PASSAGES } from "./site-data.mjs";
import Wordmark from "./wordmark";

// Shows in chronological order; rendered reverse-chronological (II, then I).
// Videos are trimmed to the event on YouTube, so no start offset is needed.
const SHOWS = [
  { numeral: "I", title: "Wonderhall I", date: "18 April 2026", videoId: "My6bShyEurI" },
  { numeral: "II", title: "Wonderhall II", date: "20 June 2026", videoId: "YoY8NJs-ytY" },
];
const SHOW_III_DATE = "23 August 2026";

// One recurring Luma event, recycled for each show (intentional).
const LUMA_EVENT_ID = "47q03ybr";

// Featured Instagram post, embedded under the headline.
const IG_POST = "DajcoZdPQc4";

// Credits — order matches the posters. Leave url empty for plain text.
const CREDITS = [
  { name: "Maanasa", url: "https://diaryofmaanasa.com" },
  { name: "Adam", url: "https://adampang.com" },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(HOME_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />

      {/* HEADLINE — the wordmark, CSS-only entrance (never blank without JS) */}
      <section className="w-full px-4 sm:px-6 pt-16 pb-8 sm:pt-24 sm:pb-10">
        <div className="w-full max-w-5xl mx-auto">
          <nav
            aria-label="Primary navigation"
            className="wh-rise mb-12 flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            <a href="/about" className="wh-nav-link">About</a>
            <a href="/contact" className="wh-nav-link">Contact</a>
            <a href="/privacy" className="wh-nav-link">Privacy</a>
          </nav>
          <h1 className="wh-rise flex justify-center">
            <Wordmark className="text-[clamp(2.5rem,13vw,11rem)]" />
          </h1>
          <div className="wh-rise wh-rise--late wh-eyebrow text-center mt-6">
            Live music at Network School
          </div>
        </div>
      </section>

      {/* PRIMARY ACTIONS — keep the homepage invitation deliberately concise. */}
      <section className="w-full px-4 sm:px-6 pb-16 sm:pb-24" aria-label="Wonderhall actions">
        <div className="w-full max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href="/perform" className="wh-btn">Apply to perform</a>
            <a href="#archive" className="wh-btn wh-btn--ghost">Watch past shows</a>
          </div>
        </div>
      </section>

      {/* PHOTO CAROUSEL */}
      <section className="w-full">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="wh-rule mb-3" />
        </div>
        <Gallery photos={gallery} />
      </section>

      {/* Full context stays in the HTML and is available to people on demand. */}
      <section className="w-full px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="w-full max-w-5xl mx-auto">
          <details className="wh-details">
            <summary>Wonderhall details</summary>
            <div className="wh-details-content">
              <h2 className="wh-h2">About Wonderhall</h2>
              <div className="mt-6 max-w-3xl space-y-5">
                {HOME_PASSAGES.introduction.map((passage) => (
                  <p key={passage} className="wh-body">{passage}</p>
                ))}
              </div>

              <div className="mt-12 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="wh-h3">For performers</h3>
                  <div className="mt-5 space-y-5">
                    {HOME_PASSAGES.performers.map((passage) => (
                      <p key={passage} className="wh-body">{passage}</p>
                    ))}
                  </div>
                  <a href="/perform" className="wh-link mt-6 inline-block">Apply through the performer form</a>
                </div>
                <div>
                  <h3 className="wh-h3">For the audience</h3>
                  <div className="mt-5 space-y-5">
                    {HOME_PASSAGES.audience.map((passage) => (
                      <p key={passage} className="wh-body">{passage}</p>
                    ))}
                  </div>
                  <a
                    href={`https://luma.com/${LUMA_EVENT_ID}`}
                    className="wh-link mt-6 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the official Luma event page
                  </a>
                </div>
              </div>

              <div className="mt-12 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="wh-h3">Archive notes</h3>
                  <div className="mt-5 space-y-5">
                    {HOME_PASSAGES.archive.map((passage) => (
                      <p key={passage} className="wh-body">{passage}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="wh-h3">Practical information</h3>
                  <div className="mt-5 space-y-5">
                    {HOME_PASSAGES.practical.map((passage) => (
                      <p key={passage} className="wh-body">{passage}</p>
                    ))}
                  </div>
                  <nav aria-label="Wonderhall information" className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                    <a href="/about" className="wh-link">About Wonderhall</a>
                    <a href="/contact" className="wh-link">Contact Wonderhall</a>
                    <a href="/privacy" className="wh-link">Privacy policy</a>
                  </nav>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* SHOWS — complete recordings. */}
      <section id="archive" className="scroll-mt-8" aria-labelledby="archive-title">
        <div className="w-full px-4 sm:px-6 pb-12">
          <Reveal>
            <div className="w-full max-w-5xl mx-auto">
              <div className="wh-rule mb-10" />
              <h2 id="archive-title" className="wh-h2">Full show archive</h2>
            </div>
          </Reveal>
        </div>
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
      </section>

      {/* WONDERHALL III — the latest published event and its source pages. */}
      <section className="w-full px-4 sm:px-6 pb-16 sm:pb-24">
        <Reveal>
          <div className="w-full max-w-5xl mx-auto">
            <div className="wh-eyebrow wh-eyebrow--accent mb-4">Latest published event</div>
            <ShowHead numeral="III" title="Wonderhall III" date={SHOW_III_DATE} />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {/* Instagram, left of the event page */}
              <div
                className="w-full overflow-hidden rounded-sm bg-white"
                style={{ boxShadow: "inset 0 0 0 1px var(--line)" }}
              >
                <iframe
                  src={`https://www.instagram.com/p/${IG_POST}/embed`}
                  title="Wonderhall on Instagram"
                  className="w-full block"
                  style={{ height: 640, border: "none" }}
                  scrolling="no"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {/* Luma event page, right */}
              <div className="w-full overflow-hidden rounded-sm bg-white wh-frame">
                <iframe
                  src={`https://luma.com/embed/event/${LUMA_EVENT_ID}/simple`}
                  title="Wonderhall III event page"
                  width="100%"
                  height={640}
                  loading="lazy"
                  allowFullScreen
                  className="w-full block"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MORE PHOTOS — the full set, static, reshuffled each load */}
      <section className="w-full px-4 sm:px-6 pb-20 sm:pb-28">
        <Reveal>
          <div className="w-full max-w-5xl mx-auto">
            <div className="wh-rule mb-6" />
            <PhotoGrid photos={gallery} />
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer
        className="w-full px-6 py-8"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <div className="wh-eyebrow" style={{ color: "var(--text-3)" }}>
            © 2026 Wonderhall
          </div>
          <div className="wh-eyebrow" style={{ color: "var(--text-3)" }}>
            Created by{" "}
            {CREDITS.map((c, i) => (
              <span key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    className="wh-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
                {i < CREDITS.length - 1 ? " & " : ""}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

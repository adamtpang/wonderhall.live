import type { Metadata } from "next";
import InfoPage from "../info-page";

export const metadata: Metadata = {
  title: "About Wonderhall Live Music",
  description:
    "Learn what Wonderhall is, how the recurring Network School live music night works, and who creates and maintains its public website.",
  alternates: { canonical: "https://wonderhall.live/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="About Wonderhall"
      introduction="Wonderhall is a recurring live music night at Network School. Every even month, performers from across campus share one ninety-minute show in the Level 2 ballroom."
    >
      <section>
        <h2>What Wonderhall publishes</h2>
        <p>
          Wonderhall uses this website as the durable public record for the series. The home page carries complete show films, photographs, the latest published event source, and a performer interest path so visitors can understand the night without relying on a social feed.
        </p>
        <p>
          Wonderhall I took place on 18 April 2026, Wonderhall II took place on 20 June 2026, and Wonderhall III took place on 23 August 2026. Future dates appear only after the organizers publish them.
        </p>
      </section>
      <section>
        <h2>Who maintains the site</h2>
        <p>
          Wonderhall is created by Maanasa and Adam. Adam Pangelinan built and maintains the public website through Anchor Marianas LLC. Those credits are also visible on the home page; no anonymous company, invented team, or paid endorsement is presented as the operator.
        </p>
      </section>
      <section>
        <h2>How to take part</h2>
        <p>
          Network School performers can use the public performer interest form to describe an act and provide a contact method. Audience details are published through the linked Luma event page when registration is available.
        </p>
        <a href="/perform" className="wh-btn inline-block">Apply to perform</a>
      </section>
    </InfoPage>
  );
}

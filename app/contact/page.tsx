import type { Metadata } from "next";
import InfoPage from "../info-page";

export const metadata: Metadata = {
  title: "Contact Wonderhall",
  description:
    "Use the public Wonderhall paths for performer interest, current event details, site questions, or privacy questions without exposing private contact data.",
  alternates: { canonical: "https://wonderhall.live/contact" },
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="Contact Wonderhall"
      introduction="Wonderhall keeps participation and site questions on explicit public paths. Choose the path that matches what you need, and do not place private information in a public link or social post."
    >
      <section>
        <h2>Perform at a future show</h2>
        <p>
          Singers, instrumentalists, bands, dancers, DJs, and other live acts from the Network School community can submit performer interest on this site. The form asks for a name, a contact method, the kind of act, and optional links or notes.
        </p>
        <a href="/perform" className="wh-btn inline-block">Apply through the performer form</a>
      </section>
      <section>
        <h2>Find audience details</h2>
        <p>
          The official Wonderhall Luma page is the public source for audience registration and current event details when a new date is available. An old poster or archived film should not be treated as an announcement for a future show.
        </p>
        <a href="https://luma.com/47q03ybr" className="wh-link" target="_blank" rel="noopener noreferrer">View the official Luma event page</a>
      </section>
      <section>
        <h2>Site and privacy questions</h2>
        <p>
          Adam Pangelinan maintains wonderhall.live through Anchor Marianas LLC. Use Adam&apos;s public website for a site, correction, or privacy question; this page intentionally does not expose a private email address or telephone number.
        </p>
        <a href="https://adampang.com" className="wh-link" target="_blank" rel="noopener noreferrer">Contact Adam through adampang.com</a>
      </section>
    </InfoPage>
  );
}

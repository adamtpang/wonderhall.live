import type { Metadata } from "next";
import InfoPage from "../info-page";

export const metadata: Metadata = {
  title: "Wonderhall Privacy Policy",
  description:
    "Read what wonderhall.live receives through public visits and performer submissions, which third parties are embedded, and how to ask a privacy question.",
  alternates: { canonical: "https://wonderhall.live/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Privacy"
      title="Wonderhall Privacy Policy"
      introduction="This policy describes the data handled by wonderhall.live, the public website for Wonderhall at Network School. The policy was last updated on 28 August 2026."
    >
      <section>
        <h2>Ordinary site visits</h2>
        <p>
          Wonderhall does not include an advertising or product-analytics tracker in the current application code, and the initial home-page response does not set an application cookie. Vercel hosts the site and may process ordinary request metadata such as an IP address, user agent, requested path, and timestamp in infrastructure logs.
        </p>
        <p>
          Show photographs and fonts are served from wonderhall.live. The site embeds YouTube in privacy-enhanced mode, Instagram, and Luma. Loading those frames sends standard request information to the relevant provider, and a provider may use its own cookies or local storage under its own policy.
        </p>
      </section>
      <section>
        <h2>Performer submissions</h2>
        <p>
          The performer form receives the name, contact method, and act description that a person submits, plus optional media links and notes. The server forwards those fields to a configured Discord webhook used for Wonderhall coordination. If delivery is not configured, the current application may record the submitted fields in restricted hosting logs for operational recovery.
        </p>
        <p>
          Wonderhall uses performer submission data only to review the proposed act and make contact about a show. The site does not sell performer submissions. No fixed deletion schedule is published, so a person who wants a correction or removal should use the public contact path below and identify the relevant submission without posting more private data publicly.
        </p>
      </section>
      <section>
        <h2>Third-party services</h2>
        <p>
          Vercel provides hosting, Discord can receive performer submissions, YouTube provides show films, Instagram provides the published social post, and Luma provides event details. Following an external link or interacting with an embedded service is also subject to that provider&apos;s own terms and privacy policy.
        </p>
      </section>
      <section>
        <h2>Privacy questions</h2>
        <p>
          Adam Pangelinan maintains wonderhall.live through Anchor Marianas LLC. Use the Wonderhall contact page for the current public route to ask a privacy question, request a correction, or request removal of a performer submission.
        </p>
        <a href="/contact" className="wh-btn inline-block">Contact Wonderhall</a>
      </section>
    </InfoPage>
  );
}

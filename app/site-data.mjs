export const SITE_URL = "https://wonderhall.live";

export const SITE_TITLE = "Wonderhall Live Music at Network School";

export const SITE_DESCRIPTION =
  "Wonderhall is a recurring live music night at Network School, with full show films, photo archives, and an open performer interest form.";

export const HOME_PASSAGES = {
  introduction: [
    "Wonderhall is a recurring live music night at Network School. Every even month, performers from across campus take the Level 2 ballroom for one ninety-minute show, with full-set films and photographs published here after each event.",
    "Wonderhall gives the campus a single place to find the event format, watch complete recordings, browse the photo archive, and take the next relevant step. Audience members can revisit past nights, while performers can propose an act for a future show.",
  ],
  performers: [
    "Wonderhall welcomes singers, instrumentalists, bands, dancers, DJs, and other live acts from the Network School community. The performer interest form asks what you do, how the team can reach you, and what you would like to play.",
    "Performer interest is free to submit and does not guarantee a place in a show. Wonderhall reviews responses before each event and may invite applicants to an audition, so the specific next step is to complete the public performer form.",
  ],
  audience: [
    "Wonderhall does not publish paid plans or ticket pricing on this website. When audience registration is available, the official Luma event page carries the current event details; visitors should rely on that page rather than infer a date or price from an old poster.",
  ],
  archive: [
    "The Wonderhall archive currently includes full recordings from Wonderhall I on 18 April 2026 and Wonderhall II on 20 June 2026. Each recording preserves the complete night rather than a promotional excerpt, and the photo archive documents the performers and room.",
    "Wonderhall III took place on 23 August 2026. The event section below keeps the published Instagram post and Luma event page available as source material, while future dates will be announced only after the organizers publish them.",
  ],
  practical: [
    "Wonderhall keeps its practical information in public, linked pages so visitors do not have to infer who maintains the site or how participation works. The About page explains the project, the Contact page lists public paths for questions and participation, and the Privacy page documents the data handled by the site.",
  ],
};

export const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Wonderhall",
      url: `${SITE_URL}/`,
      description:
        "A recurring live music night at Network School with full show recordings, a photo archive, and performer interest submissions.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Wonderhall",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

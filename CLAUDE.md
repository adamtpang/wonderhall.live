@AGENTS.md

# Current handoff — 2026-08-28

The Lightmark production remediation is complete.

- Production: https://wonderhall.live/
- Production deployment: `dpl_AxHsp16eiih1KKP1DHfCXgqWWWuG`
- Deployment URL: `https://wonderhalllive-1zxhx6zcc-adamtpangs-projects.vercel.app` (Vercel deployment protection applies to this hostname; the production aliases are public)
- Application commit: `f82d55e` (`Raise production Lightmark readiness to 100`)
- Final saved Lightmark scan: ID `14`, 100/100, grade A, zero findings, fetched `2026-08-28T04:52:46.157Z`
- All 11 Lightmark scorecards are 100.
- Verification passed: 5 focused tests, TypeScript, ESLint, Next.js 16.3.3 production build, zero production dependency audit findings, browser/GPTBot raw HTML parity, required metadata/headers/trust pages, and isolated headless Helium keyboard/focus checks with zero CSP violations.
- No owner-only action is required for the deployed remediation. Git-to-Vercel automatic production deployment remains disconnected as documented in README; this release used `vercel --prod`.

## Minimal-copy follow-up — 2026-08-28

Maanasa's minimal homepage treatment is restored without crawler-only cloaking. The eight substantive passages now live in one native `details` disclosure labeled "Wonderhall details," collapsed by default and available to any visitor on demand. The hero actions, gallery, archive, and event media remain immediately visible.

- Production: https://wonderhall.live/
- Production deployment: `dpl_3PV8Nz2zWEWYXhkPnoXkLwnKP4qz`
- Deployment URL: `https://wonderhalllive-achsv0otv-adamtpangs-projects.vercel.app`
- Application commit: `abaacf6` (`Keep homepage copy visually minimal`)
- Fresh Lightmark production scan: 100/100, grade A, zero material findings, fetched `2026-08-28T05:10:18.794Z` (the diagnose response did not expose a scan ID)
- All 11 Lightmark scorecards remain 100. The scan found 366 useful words, eight substantive paragraphs, 100% self-contained passage coverage, and 2,488 GPTBot text characters with full browser parity.
- Verification passed: six focused tests, TypeScript, ESLint, Next.js 16.3.3 production build, local and production raw-HTML contracts, and isolated headless Helium keyboard/focus checks against both the production build and public production URL.
- Browser verification confirmed zero rendered height while collapsed, 2,216 machine-readable disclosure characters, a visible 2px focus ring in natural Tab order, and Enter-key expansion to all eight paragraphs.
- No owner-only action is required. Git-to-Vercel automatic production deployment remains disconnected; this release used `vercel --prod`.

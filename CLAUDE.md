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

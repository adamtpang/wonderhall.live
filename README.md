# wonderhall.live

The site for **Wonderhall** — a live music night at Network School. Every even month, performers from across the campus take the Level 2 ballroom for one ninety-minute set.

Live at [wonderhall.live](https://wonderhall.live).

## Stack

- **Next.js 16** (App Router) · **React 19** · **Tailwind CSS v4**
- **framer-motion** for reveals and the photo marquee
- **next/font/local** — Archivo + Archivo Black are self-hosted in `app/fonts/` (never revert to `next/font/google`; its build-time fetch fails Vercel builds)

## Design system

The "COSMIC DREAM" system — a deep purple night canvas, four luminous accents (flame / rose / aurora / spark), glows instead of flat fills, painterly grain, and a glowing starfield. Source of truth: the claude.ai/design project **wonderhall.live** (`app/globals.css` is a port of its `colors_and_type.css`).

## Routes

- `/` — home: shows (I / II / III), countdown to the next night, photo galleries
- `/perform` — performer sign-up form (posts to a Discord webhook via `PERFORM_WEBHOOK_URL`)
- `/small` — "wondersmall", the invite-only tiny-desk sessions

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Hosted on Vercel. Ship a production build with:

```bash
vercel --prod
```

> Note: the GitHub → Vercel auto-deploy is currently disconnected, so merges to `master` do **not** deploy automatically. Reconnect it in the Vercel project's **Settings → Git**, or deploy manually with the command above.

## Config

- `PERFORM_WEBHOOK_URL` — Discord webhook for `/perform` submissions. Unset locally; submissions are logged server-side and still accepted.

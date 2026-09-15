# NOMAD Software — nomadsoftware.cz

Marketing website for NOMAD Software: senior expert squads assembled per project from a global network, with AI-augmented delivery.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Geist fonts · Vercel

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # type check
```

## Deploy to Vercel

1. Push this folder to a GitHub/GitLab repository.
2. In Vercel: **Add New → Project → Import** the repository. Framework preset is detected automatically (Next.js), no build settings needed.
3. (Optional) Add environment variables for the contact form — see `.env.example`:
   - `RESEND_API_KEY` – API key from resend.com
   - `CONTACT_TO_EMAIL` – where enquiries go (default `office@nomadsoftware.com`)
   - `CONTACT_FROM_EMAIL` – verified sender, e.g. `NOMAD Website <web@nomadsoftware.cz>`
   Without these, submissions still succeed and are written to Vercel function logs.
4. **Settings → Domains**: add `nomadsoftware.cz` and `www.nomadsoftware.cz`, then set DNS at your registrar
   (A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`, or as Vercel shows).

Or via CLI: `npx vercel` (preview) and `npx vercel --prod`.

## Editing content

All copy is in **`content/site.ts`** — hero, services, squad phases, AI pipeline, engagement models, sprints, network hubs, FAQ, contact details. Components in `components/` only render it.

Lines marked `// VERIFY` are delivery commitments or indicative figures (72h squad proposal, week-1 prototype, MVP timeline comparison) — confirm or adjust before launch.

## Structure

```
app/
  layout.tsx            metadata, JSON-LD (Organization + FAQ), fonts
  page.tsx              section order
  api/contact/route.ts  contact form handler (Resend optional, honeypot, validation)
  opengraph-image.tsx   generated social preview image
  sitemap.ts, robots.ts, icon.svg
components/             one file per section (Hero, SquadModel, AIDelivery, Network, …)
content/site.ts         all texts
content/world-dots.json pre-computed dot-matrix world map (Natural Earth 110m land)
```

## Page sections

1. Hero — animated "squad composer" (experts matched from the network into your product)
2. Industries marquee
3. The delivery gap (problem framing)
4. The NOMAD model — Scope → Match → Assemble → Deliver + interactive phase composer (Discover / Build / Scale)
5. Services — AI & agentic, product design, web, mobile, backend & cloud, modernization
6. AI-augmented delivery — AI vs expert responsibilities, timeline comparison, responsible-AI guarantees
7. Principles — partnership mentality
8. Engagement models — Outcome Squad, Embedded Squad, Expert On-Demand + starter sprints
9. Network — world map of hubs, vetting process, join CTA
10. FAQ (also emitted as FAQPage structured data)
11. Contact form

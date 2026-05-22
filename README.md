# Harvest International Market

Official website for **Harvest International Market** — an authentic Middle Eastern market and Mediterranean kitchen at 733 E Main St, El Cajon, CA 92020.

Built with **Next.js 15** (App Router) + **React 19** + **Tailwind CSS v4** + **GSAP** + **Framer Motion** + **Lenis smooth scroll**.

## Local development

```bash
npm install      # uses legacy-peer-deps for React 19 compat (see .npmrc)
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Routes

| Route          | Purpose                                                              |
|----------------|----------------------------------------------------------------------|
| `/`            | Hero, departments, story, ordering, testimonials, catering, map     |
| `/menu`        | Kitchen menu + market department guide                              |
| `/order`       | DoorDash, Uber Eats, Grubhub, in-store pickup                       |
| `/catering`    | Tray packages + native fetch quote form                             |
| `/weekly-ad`   | Weekly deals + countdown to next Monday refresh                     |
| `/about`       | Story, values, two-location model, halal commitment                 |
| `/contact`     | Contact form + map embed + hours                                    |

## Deploy

1. Push to GitHub.
2. At [vercel.com/new](https://vercel.com/new) → import the repository.
3. Vercel auto-detects Next.js. No additional config required.
4. Deploy. Production URL available within ~90 seconds.

## Tech notes

- **React 19 compatibility:** `.npmrc` sets `legacy-peer-deps=true` and `shamefully-hoist=true`.
- **All forms use native `fetch` POST** to `/api/contact` and `/api/catering` (no `@formspree/react`, no `mailto:`).
- **All scroll-triggered animations** use `toggleActions: "play none none reverse"` — bidirectional, never `once: true`.
- **Hero uses `100dvh`** for true iOS Safari compatibility.
- **All images** use `next/image` with explicit `alt`, `sizes`, and `priority` only on above-the-fold hero.
- **JSON-LD** for `FoodEstablishment` + `Restaurant` schemas attached site-wide via root layout.
- **Security headers** (`X-Frame-Options`, CSP-lite, HSTS, etc.) configured in `next.config.ts`.
- **OG image** generated dynamically via `app/opengraph-image.tsx` at the `/opengraph-image` route.

## Content sources

- Business name, address, phone, hours: verified against official website + Google Business.
- Menu items and pricing: verified against live DoorDash / Uber Eats / Grubhub listings.
- Catering pricing: verified against in-store displayed packages.
- Testimonials: verified TripAdvisor, Yelp, Facebook and Google reviews — quoted exactly with attribution.

## Maintenance

Designed for monthly updates. The `lib/menu.ts`, `lib/site.ts`, and `app/weekly-ad/page.tsx` files are the primary content sources for ongoing edits.

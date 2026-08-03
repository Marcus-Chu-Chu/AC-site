# Ashley Chiang — personal site

Portfolio and career site for Ashley Chiang, Marketing Coordinator (Greater Chicago Area).
Content is sourced from `Profile.pdf` and lives in one typed file: [`lib/content.ts`](lib/content.ts).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. If port 3000 is busy, the dev server picks a free port
(`autoPort` is enabled in `.claude/launch.json`) — check the terminal output for the URL.

```bash
npm run build && npm run start   # production build
```

## Stack

- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Hand-written CSS design system in [`app/globals.css`](app/globals.css) — no Tailwind
- Fonts via `next/font`: Bricolage Grotesque (display), Instrument Sans (body), JetBrains Mono (data)

## Design

The visual identity is the **ink control bar** — the strip of solid patches printers run along
every press sheet to check quality. Ashley reviewed print proofs and packaging with a Creative
Director while also building Tableau dashboards and benchmarking reports, so the device is a
colourful artifact that is simultaneously a measuring instrument. Each patch in the hero carries
one of her real results; the career timeline is the same bar stood on end, one ink per role.

Palette is deliberately light and full-colour (never dark mode): cool paper `#FAF8FF`, deep
indigo ink `#16123A`, with process magenta, electric violet, teal-cyan and citrus.

Every `--*-deep` token is the text-safe variant of its fill colour. All body text meets
WCAG AA (verified across 206 rendered text nodes on both pages); the bright fills are for
backgrounds and decoration only.

## Structure

| Path | What it is |
| --- | --- |
| `app/page.tsx` | Home: hero, marquee, about, journey, expertise, education, portfolio teaser |
| `app/portfolio/page.tsx` | Portfolio placeholder — six planned case studies, ready to fill in |
| `lib/content.ts` | All copy and career data. Edit here, not in components. |
| `components/` | Section components; only `Nav` and `RevealController` are client components |

## Adding portfolio work

Replace the `PLANNED` array in [`app/portfolio/page.tsx`](app/portfolio/page.tsx) with real case
studies. The teaser cards on the home page come from `PLATES` in
[`components/PortfolioTeaser.tsx`](components/PortfolioTeaser.tsx).

## Accessibility notes

- Scroll reveals are progressive enhancement: the hidden state is gated behind a `reveal-ready`
  class that only JavaScript adds, so content is visible if scripts fail.
- `prefers-reduced-motion` disables the marquee and all reveal animation.
- Skip link, visible focus rings, and keyboard-dismissable (Escape) mobile menu.

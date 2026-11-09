# CLAUDE.md

Personal resume site for Joan Ignasi Torrents. Next.js (App Router, strict TypeScript) static export, deployed to GitHub Pages. It must be fast, accessible and responsive, all CV content lives in one typed data file, and it deploys automatically on every push to `main`.

@AGENTS.md

## Commands

pnpm is not installed globally and there is no corepack. Run it through npx, at the version pinned in `package.json`:

```bash
npx pnpm@12.18.0 dev          # http://localhost:3000
npx pnpm@12.18.0 lint
npx pnpm@12.18.0 typecheck
npx pnpm@12.18.0 build        # static export to out/ (runs scripts/write-cname.mjs first)
npx pnpm@12.18.0 start        # serve out/ (stop the dev server first, both use port 3000)
npx pnpm@12.18.0 format
NEXT_PUBLIC_BASE_PATH=/ji-cv-personal npx pnpm@12.18.0 build   # project-site build
```

Before calling work done, `lint`, `typecheck` and `build` must pass. Also serve `out/` under `/ji-cv-personal` and check links, assets, the theme toggle and the 404 page. Report the real results, including failures.

## Content sources

| Source                                                      | Notes                                                                                                                                                    |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resume.pdf` (repo root)                                    | Old CV, gitignored. Extract with `pdftotext -layout`. Delete it only after the user has reviewed the extracted data.                                     |
| LinkedIn `https://www.linkedin.com/in/jitorrents`           | More recent than the PDF; **LinkedIn wins conflicts**. If it blocks automated reading, ask the user to paste the profile text or a LinkedIn data export. |
| Reference site `https://mtablado.github.io/mt-resume-site/` | Model for **structure and section order only**. Never copy its text, branding, images, colors, fonts or code.                                            |

- Keep every role, date, company, location, achievement, skill, language, certification and education entry.
- Rewrite highlights as short, action-first bullet points. **Never invent** facts, dates, numbers, employers or skills. Mark anything unclear with `// TODO(verify):`.
- Order experience newest first. Group several roles at the same company.
- Report every PDF/LinkedIn conflict you resolved and every `TODO(verify)` to the user.

## Site structure

Multiple routes, modelled on the reference site (separate pages, not anchors). Routes are listed in `src/lib/routes.ts`. A page with no content is left out of the nav and the sitemap.

| Route          | File                          | Content                                                                                                                                                                                                                            |
| -------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`            | `src/app/page.tsx`            | Hero (location, name, headline, View CV / Contact / LinkedIn, monogram instead of a photo) → key facts → About → Focus areas (skills by category, **no progress bars or percentages**) → Explore cards → Contact (no contact form) |
| `/experience/` | `src/app/experience/page.tsx` | Timeline grouped by company (`groupByCompany`), with dates, duration, highlights and tech tags                                                                                                                                     |
| `/teaching/`   | `src/app/teaching/page.tsx`   | `collaborations` (La Salle teaching and mentoring)                                                                                                                                                                                 |
| `/education/`  | `src/app/education/page.tsx`  | Degrees, certifications grouped by issuer, languages                                                                                                                                                                               |
| `/cv/`         | `src/app/cv/page.tsx`         | The whole CV as an A4 document (`CvDocument`) plus a Download PDF button (`window.print()`)                                                                                                                                        |

The header (sticky, active-link nav, theme toggle, mobile menu) and footer (copyright, build-time "last updated", route links, repository link) live in `src/components/layout/`. Page sections live in `src/components/sections/` and shared pieces in `src/components/ui/`. Page eyebrows, titles and intros are UI text in `labels.ts`.

## Rules

- **Static export only** (`output: 'export'`): no API routes, no middleware, no ISR, no `headers()`/`cookies()`. Metadata routes like `robots.ts` and `sitemap.ts` need `export const dynamic = "force-static"`.
- **Base path**: the site must work at `/` and at `/ji-cv-personal`. Use `next/link` for routes. Prefix raw `/public` paths with `asset()` from `src/lib/site.ts`.
- **Content**: all CV text lives in `src/content/resume.ts` (typed by `types.ts`). All UI strings live in `src/content/labels.ts`, so Spanish and Catalan can be added later (no i18n routing unless asked). Components never hard-code either.
- **Dates** are stored as `YYYY-MM` and formatted only through `src/lib/dates.ts`.
- **Privacy**: show city and country only. No phone number, address or birth date. The email is passed encoded (`encodeEmail`) and only decoded in the browser by `ObfuscatedEmail`, on click or on `beforeprint`. It must never appear in the static HTML or the React payload: check with `grep -r ji.torrents out/`. Ask before adding a photo.
- **Theme**: original, minimal, plenty of whitespace, one accent color. Colors are defined only as CSS variables in `src/app/globals.css`, which Tailwind maps through `@theme inline`. Dark mode is the `data-theme` attribute on `<html>`, set by the inline script in `layout.tsx`, and the `dark:` variant depends on it. Keep motion subtle and respect `prefers-reduced-motion`.
- **Print**: `@page` is A4. Ctrl+P on `/cv/` must give a clean one- or two-page resume in light colors (it is 2 pages at the moment). Hide the nav, toggle and decorative elements (class `no-print`) and avoid page breaks inside roles. "Download CV" opens the print dialog or links to a PDF generated from the site at build time. It must **never** link to `resume.pdf`.
- **Accessibility**: semantic landmarks, skip link, visible focus states, WCAG AA contrast in both themes, alt text, keyboard-usable controls with `aria-label`.
- **SEO**: root `metadata` (title, description, canonical, Open Graph, Twitter card), a static OG image, `robots.txt`, `sitemap.xml`, and JSON-LD `Person` built from `resume.ts`.
- **Performance**: Lighthouse ≥ 95 on mobile in all four categories. Server Components by default. Use `"use client"` only for interactive pieces (`ThemeToggle`, `NavLinks`, `MobileMenu`, `ObfuscatedEmail`, `PrintButton`).
- **Dependencies**: keep runtime dependencies to `next`, `react` and `react-dom`, and justify any new one. TypeScript stays on 6.x until typescript-eslint supports 7.
- **Git**: make small commits and do not push unless asked.

## Still to build

- `.github/workflows/deploy.yml`: on push to `main` and `workflow_dispatch`. Build job: checkout → pnpm and Node LTS with cache → `install --frozen-lockfile` → lint → typecheck → build → `actions/upload-pages-artifact` with `./out`. Use `actions/configure-pages` for the base path. Deploy job: `actions/deploy-pages`, environment `github-pages`, permissions `pages: write` and `id-token: write`. Add a `concurrency` group.
- A pull-request workflow that runs lint, typecheck and build without deploying.
- `README.md`: local development, building and previewing the static export, editing the CV content, deploying (`Settings → Pages → Source: GitHub Actions`), and setting the base path (`NEXT_PUBLIC_BASE_PATH`) or a custom domain (`CUSTOM_DOMAIN`).

## Testing in a browser

Playwright MCP is configured locally (headless Chromium in `~/.cache/ms-playwright`). Its output goes to `.playwright-mcp/`, which is gitignored, and screenshots can only be saved inside the repo. Check at 360, 768 and 1280px widths.

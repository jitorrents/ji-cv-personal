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

| Source                                                      | Notes                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resume.pdf` (repo root)                                    | Old CV, gitignored. Extract with `pdftotext -layout`. Delete it only after the user has reviewed the extracted data.                                                                                                                                                            |
| LinkedIn `https://www.linkedin.com/in/jitorrents`           | More recent than the PDF; **LinkedIn wins conflicts**. The site blocks automated reading (HTTP 999). Its profile export `linkedin-extract.pdf` (Spanish, gitignored, merged Nov 2026) lists only the top 3 skills and certifications, so the full lists come from `resume.pdf`. |
| Reference site `https://mtablado.github.io/mt-resume-site/` | Model for **structure and section order only**. Never copy its text, branding, images, colors, fonts or code.                                                                                                                                                                   |

- Keep every role, date, company, location, achievement, skill, language, certification and education entry.
- Rewrite highlights as short, action-first bullet points. **Never invent** facts, dates, numbers, employers or skills. Mark anything unclear with `// TODO(verify):`.
- Order experience newest first. Group several roles at the same company.
- Report every PDF/LinkedIn conflict you resolved and every `TODO(verify)` to the user.

## Site structure

A single home page of full-width colored bands (layout inspired by stockagile.com: logo strip under the hero, step strip, colored CTA band; never copy its content) with anchor navigation and scroll spy, plus a separate `/cv/` print page. The section order is in `src/lib/routes.ts` (`sections`), and sections without content are skipped.

| Section (`src/components/sections/`) | Tone  | Notes                                                                                                                                                                                                           |
| ------------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HeroSection`                        | stone | Photo (`basics.photo`) or initials, name, headline, View CV / Contact / LinkedIn, drifting color shapes; `companyWordmark` of the current company (role without `end`) inline after the headline, no background |
| `LogoStripSection`                   | cloud | "Certified by" marquee of issuer logos (decorative, `aria-hidden`)                                                                                                                                              |
| `AboutSection`                       | plain | Summary plus `CareerPath` (roles oldest to newest as connected steps)                                                                                                                                           |
| `ExperienceSection`                  | cloud | Timeline grouped by company (`groupByCompany`)                                                                                                                                                                  |
| `EducationSection`                   | skye  | Academic timeline (years, line and dots, logo cards; newest in red), then languages as a row of cards with the level as written in `resume.ts`                                                                  |
| `SkillsSection`                      | earth | Skills & certifications merged: skill cards by category (**no progress bars or percentages**), then certification cards by issuer with logos (`CertificationGrid`)                                              |
| `TeachingSection`                    | cloud | `collaborations`                                                                                                                                                                                                |
| `PublicPresenceSection`              | plain | `publicPresence` items (talks, panels, articles, press); shown even when empty, with a "coming soon" note                                                                                                       |
| `ContactSection`                     | red   | Encoded email, profiles (no contact form)                                                                                                                                                                       |

`/cv/` (`src/app/cv/page.tsx`) shows the whole CV as an A4 document (`CvDocument`) with a Download PDF button (`window.print()`). The header (sticky, scroll-spy nav, CV button, theme toggle, mobile menu) and the footer (stone) live in `src/components/layout/`. Section eyebrows and titles are UI text in `labels.ts`. `Band` wraps each section, and `Reveal` fades content in on scroll. Section headers can show KPIs (`src/lib/kpis.ts`, always computed from `resume.ts`) that count up with `CountUp`.

**Logos**: `components/logos/simple-icons.ts` holds Simple Icons paths (CC0). Microsoft and AWS are not in Simple Icons: Microsoft is drawn as its four squares, and AWS and others get text badges. Never copy logos from other sites. Education logos live in `public/logos/` (set with `education[].logo`), with sources listed in `public/logos/SOURCES.md`. La Salle has no logo yet, so it shows a cap icon. Company logos use `experience[].companyLogo` and appear on the experience cards and in the career path via `CompanyLogo` (initials when there is no logo). `certifications[].featured: false` keeps an issuer out of the "Certified by" strip (used for Cambridge FCE).

## Rules

- **Static export only** (`output: 'export'`): no API routes, no middleware, no ISR, no `headers()`/`cookies()`. Metadata routes like `robots.ts` and `sitemap.ts` need `export const dynamic = "force-static"`.
- **Base path**: the site must work at `/` and at `/ji-cv-personal`. Use `next/link` for routes. Prefix raw `/public` paths with `asset()` from `src/lib/site.ts`.
- **Content**: all CV text lives in `src/content/resume.ts` (typed by `types.ts`). All UI strings live in `src/content/labels.ts`, so Spanish and Catalan can be added later (no i18n routing unless asked). Components never hard-code either.
- **Dates** are stored as `YYYY-MM` and formatted only through `src/lib/dates.ts`.
- **Privacy**: show city and country only. No phone number, address or birth date. The email is passed encoded (`encodeEmail`) and only decoded in the browser by `ObfuscatedEmail`, on click or on `beforeprint`. It must never appear in the static HTML or the React payload: check with `grep -r ji.torrents out/`. The user's photo is `public/photo.webp` (640px, metadata stripped). The original `Foto personal1.jpg` is gitignored.
- **Theme**: original, minimal, plenty of whitespace. Use only the brand palette: Warm Red `#FF462D`, White, Spruce `#29707A`, Earth `#9E9287`, Cloud `#F2F1EE`, Skye `#E4F4F1`, Dark Stone `#3D3C3C` and Digital Dark Earth `#565049`. **No greens**: the user dislikes them, so Spring Green, Deep Forest and Digital Dark Spring Green are excluded. Each band is a `tone-*` class in `src/app/globals.css` that sets `--band/--fg/--muted/--title/--link/--card/--line`. Components only use `bg-band`, `text-fg`, `text-muted`, `text-title`, `text-link`, `bg-card` and `border-line`, plus the fixed brand colors (`bg-warm`, `bg-spruce`, and so on). Section titles are colored per band, with no decorative underline. Warm red is only used as text at large sizes, following the palette's AA chart. Dark mode is the `data-theme` attribute on `<html>`, set by the inline script in `layout.tsx`, which also adds the `js` class used by `Reveal`. Keep motion subtle and respect `prefers-reduced-motion`.
- **Print**: `@page` is A4. Ctrl+P on `/cv/` must give a clean one- or two-page resume in light colors (it is 2 pages at the moment). Hide the nav, toggle and decorative elements (class `no-print`) and avoid page breaks inside roles. "Download CV" opens the print dialog or links to a PDF generated from the site at build time. It must **never** link to `resume.pdf`.
- **Accessibility**: semantic landmarks, skip link, visible focus states, WCAG AA contrast in both themes, alt text, keyboard-usable controls with `aria-label`.
- **SEO**: root `metadata` (title, description, canonical, Open Graph, Twitter card), a static OG image, `robots.txt`, `sitemap.xml`, and JSON-LD `Person` built from `resume.ts`.
- **Performance**: Lighthouse ≥ 95 on mobile in all four categories. Server Components by default. Use `"use client"` only for interactive pieces (`ThemeToggle`, `NavLinks`, `MobileMenu`, `ObfuscatedEmail`, `PrintButton`, `Reveal`, `CountUp`).
- **Dependencies**: keep runtime dependencies to `next`, `react` and `react-dom`, and justify any new one. TypeScript stays on 6.x until typescript-eslint supports 7.
- **Git**: make small commits and do not push unless asked.

## Still to build

- `.github/workflows/deploy.yml`: on push to `main` and `workflow_dispatch`. Build job: checkout → pnpm and Node LTS with cache → `install --frozen-lockfile` → lint → typecheck → build → `actions/upload-pages-artifact` with `./out`. Use `actions/configure-pages` for the base path. Deploy job: `actions/deploy-pages`, environment `github-pages`, permissions `pages: write` and `id-token: write`. Add a `concurrency` group.
- A pull-request workflow that runs lint, typecheck and build without deploying.
- `README.md`: local development, building and previewing the static export, editing the CV content, deploying (`Settings → Pages → Source: GitHub Actions`), and setting the base path (`NEXT_PUBLIC_BASE_PATH`) or a custom domain (`CUSTOM_DOMAIN`).

## Testing in a browser

Playwright MCP is configured locally (headless Chromium in `~/.cache/ms-playwright`). Its output goes to `.playwright-mcp/`, which is gitignored, and screenshots can only be saved inside the repo. Check at 360, 768 and 1280px widths.

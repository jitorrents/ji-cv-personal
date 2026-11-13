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

A single home page of full-width colored bands (layout inspired by stockagile.com: step strip, colored CTA band; never copy its content) with anchor navigation and scroll spy, plus a separate `/cv/` print page. The section order is in `src/lib/routes.ts` (`sections`), and sections without content are skipped.

| Section (`src/components/sections/`) | Tone  | Notes                                                                                                                                                                                                                                                                             |
| ------------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HeroSection`                        | stone | Photo (`basics.photo`) or initials, name, headline, optional `basics.tagline` (heading font, accent bar, max 2 lines on desktop), View CV / Contact / LinkedIn, drifting color shapes. No company logo in the hero                                                                |
| `AboutSection`                       | plain | Summary plus `CareerPath` (roles oldest to newest as connected steps)                                                                                                                                                                                                             |
| `ExperienceSection`                  | cloud | Timeline grouped by company (`groupByCompany`); each role's achievements and highlights are one plain bullet list, achievements last (`bullets()` in `lib/experience.ts`, also in the CV); `experience[].todo` notes show only in `next dev` (private reminders, never published) |
| `EducationSection`                   | skye  | Academic timeline (years, line and dots, logo cards; newest in red), then languages as a row of cards with the level as written in `resume.ts`                                                                                                                                    |
| `SkillsSection`                      | earth | Skills & certifications merged: skill cards by category (**no progress bars or percentages**), then the "Certified by" logo marquee (`CertifiedByStrip`, white pills on the dark band) and certification cards by issuer (`CertificationGrid`)                                    |
| `TeachingSection`                    | cloud | `collaborations`                                                                                                                                                                                                                                                                  |
| `PublicPresenceSection`              | plain | Photo cards (16:9 image, event tag, type, title, venue · date, description, "View →" link), newest first; "coming soon" note when empty. Photos in `public/presence/` (sources in its SOURCES.md), raw files go to `photos-inbox/`                                                |
| `ContactSection`                     | red   | LinkedIn only (no email, no contact form)                                                                                                                                                                                                                                         |

`/cv/` (`src/app/cv/page.tsx`) shows the whole CV as an A4 document (`CvDocument`) with a Download PDF button (`window.print()`). The header (Stockagile-style, not mtablado-style: brand left; a few centered links from `navTree()` in `routes.ts` with a "Career ▾" dropdown for Experience/Education/Teaching, shown from 1280px; quiet EN / ES and theme controls, a Contact text link and a solid rectangular View CV button on the right; mobile menu below 1280px) and the footer (stone: copyright and build date only, no repository link) live in `src/components/layout/`. Section eyebrows and titles are UI text in `content.ts` (`ui.sections`). `Band` wraps each section, and `Reveal` fades content in on scroll. Section headers can show KPIs (`src/lib/kpis.ts`, always computed from `resume.ts`) that count up with `CountUp`.

**Logos**: `components/logos/simple-icons.ts` holds Simple Icons paths (CC0). Microsoft and AWS are not in Simple Icons: Microsoft is drawn as its four squares, and AWS and others get text badges. Never copy logos from other sites. Education logos live in `public/logos/` (set with `education[].logo`), with sources listed in `public/logos/SOURCES.md`. The cap icon is the fallback for an institution without a logo. Company logos use `cv.experience[].companyLogo` and appear on the experience cards and in the career path via `CompanyLogo` (initials when there is no logo). Logo files from the user go in `logos-inbox/` (gitignored); processed copies go to `public/logos/`. In `IssuerLogo.tsx`, `imageByIssuer` holds official square icons (Google Cloud, AWS) and `wordmarkByIssuer` holds wordmarks that replace the icon and the name (Cloudera). `certifications[].featured: false` keeps an issuer out of the "Certified by" strip (used for Cambridge FCE).

## Rules

- **Static export only** (`output: 'export'`): no API routes, no middleware, no ISR, no `headers()`/`cookies()`. Metadata routes like `robots.ts` and `sitemap.ts` need `export const dynamic = "force-static"`.
- **Base path**: the site must work at `/` and at `/ji-cv-personal`. Use `next/link` for routes. Prefix raw `/public` paths with `asset()` from `src/lib/site.ts`.
- **Content and languages**: the site is in English (`/`, `/cv/`) and Spanish (`/es/`, `/es/cv/`). **All text lives in one file, `src/content/content.ts`**, which the user edits directly: `ui` (menus, section titles, buttons, month names) and `cv` (CV content). A text that differs per language is an `{ en, es }` pair; anything shared (names, dates, URLs, logos, certification names) is written once. Its type is `Content` (`Localized<Labels>` and `Localized<Resume>` in `types.ts`), so typos in the structure fail `typecheck`. `getContent(locale)` in `src/content/i18n.ts` resolves it into plain `{ t: Labels, r: Resume }` for one language: an object whose only keys are the locales is a translation pair, so never give a non-translation object exactly the keys `en`/`es` (the language switch uses `english`/`spanish` for that reason). Components never hard-code text: server components take a `locale` prop and call `getContent`, and client components get their strings as props (they import only `src/content/locale.ts`, so CV text stays out of the browser bundle). Dates, durations and KPIs take the language's labels (`t.dates`, `kpis(t, r)`). When asked to change content, edit both `en` and `es` of a pair.
- **Routing**: two root layouts, `src/app/(en)/layout.tsx` and `src/app/(es)/layout.tsx`, both render `RootDocument` (`<html lang>`, fonts, theme script, header, footer). Page bodies live in `src/components/pages/`. Unmatched URLs use the bilingual `src/app/global-not-found.tsx` (`experimental.globalNotFound` in `next.config.ts`). Every page has `hreflang` alternates (absolute URLs, `src/lib/metadata.ts`). The header's `LanguageSwitch` links to the same page in the other language.
- **Dates** are stored as `YYYY-MM` and formatted only through `src/lib/dates.ts`.
- **Privacy**: show city and country only. No phone number, address, birth date **or email**: the user wants to be contacted only through LinkedIn, so the email is not published anywhere (not even encoded). The user's photo is `public/photo.webp` (640px, metadata stripped). The original `Foto personal1.jpg` is gitignored.
- **Theme**: original, minimal, plenty of whitespace. Palette **Navy & Terracotta** (user's choice, Nov 2026): deep navy `#16243B` (hero, footer), navy `#1F4E79` (titles, links), terracotta `#C2502E` (accent: buttons, dots, contact band), sand `#F5F1EA` and pale blue `#EAF0F6` (light bands), slate `#2E3A4F` (skills band), warm grey `#A89F91` (decoration). **No greens**: the user dislikes them. Colors are defined only as `--p-*` variables in `src/app/globals.css`. Section tones (`tone-plain`, `tone-cloud`, `tone-skye`, `tone-stone`, `tone-earth`, `tone-red` = contact band) derive `--band/--fg/--muted/--title/--link/--card/--line` from them. Components only use those semantic classes plus the role colors `bg-warm` (accent), `bg-spruce` (primary), `bg-stone`, `bg-cloud`, `bg-skye`, `bg-earth`, `bg-dark-earth`, `text-ink` (names kept from the first palette). Logos sit on white in both themes. Every text pair must pass WCAG AA. Dark mode is the `data-theme` attribute on `<html>`, set by the inline script in `RootDocument.tsx`, which also adds the `js` class used by `Reveal`. Keep motion subtle and respect `prefers-reduced-motion`.
- **Print**: `@page` is A4. Ctrl+P on `/cv/` must give a clean one- or two-page resume in light colors (it is 2 pages at the moment). Hide the nav, toggle and decorative elements (class `no-print`) and avoid page breaks inside roles. "Download CV" opens the print dialog or links to a PDF generated from the site at build time. It must **never** link to `resume.pdf`.
- **Accessibility**: semantic landmarks, skip link, visible focus states, WCAG AA contrast in both themes, alt text, keyboard-usable controls with `aria-label`.
- **SEO**: root `metadata` (title, description, canonical, Open Graph, Twitter card), a static OG image, `robots.txt`, `sitemap.xml`, and JSON-LD `Person` built from `resume.ts`.
- **Performance**: Lighthouse ≥ 95 on mobile in all four categories. Server Components by default. Use `"use client"` only for interactive pieces (`ThemeToggle`, `NavLinks`, `MobileMenu`, `LanguageSwitch`, `PrintButton`, `Reveal`, `CountUp`).
- **Analytics**: GoatCounter (cookieless, no consent banner), site code `goatcounterCode` in `src/lib/site.ts` (`jitorrents` → https://jitorrents.goatcounter.com). The script is added by `RootDocument` on production builds only. Don't add cookie-based trackers without a consent banner.
- **Dependencies**: keep runtime dependencies to `next`, `react` and `react-dom`, and justify any new one. TypeScript stays on 6.x until typescript-eslint supports 7.
- **Git**: make small commits and do not push unless asked.

## Still to build

- `.github/workflows/deploy.yml`: on push to `main` and `workflow_dispatch`. Build job: checkout → pnpm and Node LTS with cache → `install --frozen-lockfile` → lint → typecheck → build → `actions/upload-pages-artifact` with `./out`. Use `actions/configure-pages` for the base path. Deploy job: `actions/deploy-pages`, environment `github-pages`, permissions `pages: write` and `id-token: write`. Add a `concurrency` group.
- A pull-request workflow that runs lint, typecheck and build without deploying.
- `README.md`: local development, building and previewing the static export, editing the CV content, deploying (`Settings → Pages → Source: GitHub Actions`), and setting the base path (`NEXT_PUBLIC_BASE_PATH`) or a custom domain (`CUSTOM_DOMAIN`).

## Testing in a browser

Playwright MCP is configured locally (headless Chromium in `~/.cache/ms-playwright`). Its output goes to `.playwright-mcp/`, which is gitignored, and screenshots can only be saved inside the repo. Check at 360, 768 and 1280px widths.

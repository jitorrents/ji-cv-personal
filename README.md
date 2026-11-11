# ji-cv-personal

Personal resume site of Joan Ignasi Torrents: Next.js (App Router, static export), Tailwind CSS, deployed to GitHub Pages.

**Live site:** https://jitorrents.github.io/ji-cv-personal/

## Local development

pnpm is pinned in `package.json` (`packageManager`). If you don't have it installed, prefix commands with `npx pnpm@12.18.0` or run `npm i -g pnpm`.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm format
```

## Build and preview the static site

```bash
pnpm build        # writes the static site to out/
pnpm start        # serves out/ on http://localhost:3000
```

To preview exactly as GitHub Pages serves a project site (under `/ji-cv-personal`):

```bash
NEXT_PUBLIC_BASE_PATH=/ji-cv-personal pnpm build
mkdir -p /tmp/pages && rm -rf /tmp/pages/ji-cv-personal && cp -r out /tmp/pages/ji-cv-personal
npx serve /tmp/pages   # open http://localhost:3000/ji-cv-personal/
```

## Editing the CV and the site texts

**Every text on the site is in one file: [`src/content/content.ts`](src/content/content.ts).** The site has two languages, English at `/` and Spanish at `/es/`, and each text sits next to its translation:

```ts
title: { en: "About", es: "Sobre mí" },        // different per language
company: "Kyndryl",                             // shared by both languages
start: "2025-01",                               // dates: "YYYY-MM", or "YYYY" if the month is unknown
```

- `ui` holds the interface: menus, section titles, buttons, month names.
- `cv` holds the CV: profile, experience (newest first), education, skills, certifications, teaching and public presence.
- After editing, `pnpm typecheck` points out any mistake in the structure (a missing comma, a misspelled field…).
- Consecutive roles at the same company are grouped automatically.
- The photo is `public/photo.webp` (`cv.basics.photo`). Logos are in `public/logos/`, with sources in `public/logos/SOURCES.md`.

## Deploying to GitHub Pages

Every push to `main` runs `.github/workflows/deploy.yml`: install → lint → typecheck → build → publish. Pull requests run the same checks without deploying (`ci.yml`).

One-time setup on GitHub:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`, or run the workflow by hand from the **Actions** tab. The site appears at `https://<user>.github.io/ji-cv-personal/`.

### Base path

The workflow takes the base path from `actions/configure-pages`, so there is nothing to set:

| Site type                                 | URL                                        | `NEXT_PUBLIC_BASE_PATH`       |
| ----------------------------------------- | ------------------------------------------ | ----------------------------- |
| Project site (this repo)                  | `https://<user>.github.io/ji-cv-personal/` | `/ji-cv-personal` (automatic) |
| User site (repo named `<user>.github.io`) | `https://<user>.github.io/`                | empty (automatic)             |
| Custom domain                             | `https://cv.example.com/`                  | empty (automatic)             |

For local builds, set `NEXT_PUBLIC_BASE_PATH` yourself, as shown above.

### Custom domain (optional)

1. Add a repository variable **`CUSTOM_DOMAIN`** (Settings → Secrets and variables → Actions → Variables), for example `cv.example.com`. The build then writes `public/CNAME`.
2. Point the DNS at GitHub Pages: a `CNAME` record to `<user>.github.io`.
3. In Settings → Pages, enter the domain and turn on **Enforce HTTPS**.

## Printing the CV

Open `/cv/` and click **Download PDF**, or press Ctrl+P. It is laid out for A4.

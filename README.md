# Bhargava Suryadevara — Portfolio

Personal portfolio for Bhargava Phaneendra Kumar Suryadevara, an **AI/ML Engineer & Software Developer**.

Built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. The Soft Slate Blue design uses Manrope headings and Inter body text, with fonts bundled locally.

## Pages and features

- **Homepage:** Hero & About Me, Professional Experience, Featured Projects, Technical Skills, Education, and Contact.
- **All Projects:** Eight approved projects with category filters and interactive project-detail popups.
- Shared sticky navigation, responsive mobile menu, résumé download, and Footer.
- Accessible centered dialogs with keyboard support and reduced-motion handling.
- Static application with GitHub Pages-compatible hash routing; no backend required.

## Local development

Use Node.js 22.12+ (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite, normally `http://127.0.0.1:5173/`.

The Homepage is `/#/`; All Projects is `/#/projects`.

## Production build and preview

```sh
npm run build
npm run preview
```

Production preview normally runs at `http://127.0.0.1:4173/`. The build writes generated files to `dist/` and excludes macOS metadata from that output. Stop a local server with Ctrl+C.

## Project structure

- `src/components/` — Homepage sections, shared layout, cards, and dialogs.
- `src/pages/` — Homepage and All Projects page.
- `src/data/` — Approved experience, project, skill, and education content.
- `src/lib/` — Asset paths, navigation, scrolling, and contact helpers.
- `src/styles/` — Global theme and shared spacing.
- `public/images/` — Eight approved project images.
- `public/resume/resume.pdf` — Approved résumé.
- `deployment/GITHUB-PAGES.md` — Deployment preparation notes.
- `DEVELOPMENT.md` — Additional development notes, including historical phase information.

`node_modules/`, `dist/`, TypeScript build caches, local environment files, and macOS metadata are ignored by Git. Local planning folders and content-recovery notes are also excluded from the public repository.

## Intended hosting: GitHub Pages

The site is prepared for GitHub Pages but has not been published. Hash routes support direct links and browser refreshes without server rewrites.

Vite defaults to a relative base (`./`). An explicit repository path can be supplied through `VITE_BASE_PATH=/repository-name/`; use `/` for a root site. See `.env.example`. Public asset links use Vite's base path, including the résumé.

A deployment workflow and GitHub Pages configuration remain a separate, approved step. No automated deployment workflow is enabled in this project.

# Phase 1 development

The existing specification package, prompts, provenance, deployment guidance, and public assets are preserved. README.md remains the original package guide.

## Run locally

Use Node.js 22.12+ (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite (normally http://127.0.0.1:5173/).
Home is `/#/`; All Projects is `/#/projects`. Both support refresh and copied URLs on static hosting.

```sh
npm run build
npm run preview
```

Production preview normally runs at http://127.0.0.1:4173/. Stop a server with Ctrl+C.

## Structure

- `src/main.tsx`: React entry, self-hosted Manrope and Inter variable fonts, hash router.
- `src/App.tsx`: two page routes, title updates and scroll reset.
- `src/components/layout/`: shared header, main container and temporary review footer.
- `src/pages/`: minimal Homepage and All Projects page shells.
- `src/styles/index.css`: Tailwind integration and approved theme tokens.
- `src/lib/assets.ts`: base-aware helper for future approved public assets.
- `public/`: original asset directories, unchanged.

The header currently exposes only the two implemented pages. Experience, Projects section navigation, Contact, résumé actions, full mobile menu, final footer, gallery, filters and dialogs belong to later phases. No invented portfolio content or dummy assets have been added.

## GitHub Pages preparation

Vite defaults to relative output (`base: './'`), so bundled JS, CSS and fonts work at both a root site and repository subpath. Hash routes do not require server rewrites. Public assets should use `publicAsset('images/actual-filename.png')`, never an absolute `/images/...` URL.

Once the destination is known, optionally copy `.env.example` to `.env.local` and set `VITE_BASE_PATH=/actual-repository-name/` (or `/` for a root site). Rebuild after changing it. The deployment build must use the same value.

For future GitHub Actions: use Node 24, `npm ci`, `npm run build`, and upload `dist` as the Pages artifact, following deployment/GITHUB-PAGES.md. No workflow is enabled and nothing is deployed in Phase 1.

## Outstanding content

See CONTENT-GAPS.md and specifications/assets.md. All eight project images and the approved résumé PDF are absent; public directories contain README files only. The image-deblurring and event-correlation filenames still require verification. The original full master, experience/project details, skills, education, contact destinations and footer copy remain partially or entirely unavailable. Existing gap records are not full approved specifications.

## Phase boundary

This is a local foundation preview only. Review Phase 1 before implementing Homepage sections or project content.

# GitHub Pages deployment guidance

Preparation guidance, checked November 1, 2026. No repository or site has been created or deployed.

## Set the destination
Confirm the real GitHub owner and repository name. A repository named `<username>.github.io` serves the root site; other repository sites normally use `/repository-name/`.

Set Vite `base` to `/` for a root site or custom domain, and `/repository-name/` for a project site. In repository Settings → Pages, select GitHub Actions as the build source. See the current [official Vite GitHub Pages guide](https://vite.dev/guide/static-deploy#github-pages).

## Routing and assets — package implementation recommendation
Use hash routing for the two-page React app unless another tested static-compatible strategy is selected. Example paths are `/#/` and `/#/projects`; scroll to homepage sections after route changes rather than putting a second hash in the URL. Test copied project URLs and refreshes. GitHub Pages has no application-server rewrite fallback.

For public assets, use `${import.meta.env.BASE_URL}images/<actual-filename>` and the same approach for résumé paths. Avoid unadjusted `/images/...` paths on a repository site. Keep the base path in one configuration.

## Prepare the build
After the application exists and dependencies are installed, commit the lockfile. Run `npm run build` and `npm run preview`. Check both pages, filters, dialogs, header anchors, all images, contact links and the approved PDF at the intended base path.

## Workflow and publication
Use the maintained workflow in the official guide above when implementing `.github/workflows/deploy.yml`. It installs dependencies with `npm ci`, builds the app and uploads `dist` for Pages deployment. Confirm the actual default branch, Node compatibility, Pages permissions and deployment environment. Keep workflow preparation separate from publication: pushing to a branch that triggers the workflow can publish immediately.

After the owner requests publication, push the reviewed app and workflow, check the Actions result and open the Pages URL shown by GitHub. Test the live site on desktop and mobile, including refreshed project routes and résumé downloads. Resolve all required CONTENT-GAPS.md entries before launch. Do not commit credentials or private files.


<<<<<<< HEAD
# Personal portfolio — static site

Three files, no build step, no dependencies. Deploys to GitHub Pages as-is.

## Deploy

1. Create a repo named `<your-username>.github.io` (or any repo, for a `/<repo>/` URL).
2. Copy the contents of this `site/` folder into the repo root — `index.html` must sit at the top level.
3. Push, then **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.
4. Live in about a minute at `https://<your-username>.github.io`.

## Fill in

**`index.html`**
- Replace every `Your Name`, `Company`, `you@email.com`, `yourhandle`.
- `<title>`, `<meta name="description">` and the two `og:` tags.
- Project titles, copy, tags; the four stat cards; three timeline rows; the Currently line.

**`assets/`** — create this folder and drop in:
- `portrait.jpg` — 2:3, ~840×1260. The only photo on the page.
- `project-1.jpg`, `project-2.jpg` — 16:9, ~1200×675.
- `tools/tool-1.svg` … `tool-7.svg` — square logos. Duplicated once in the markup so the marquee loops seamlessly; keep both copies in sync.
- `resume.pdf`.

Missing images degrade to empty gray blocks — nothing breaks, so ship early and add art later.

## Contact form

GitHub Pages is static, so the form needs an external endpoint.
- Free option: create a form at formspree.io and replace `YOUR_FORM_ID` in the `<form action>`.
- Until you do, submitting opens the visitor's email client pre-filled (`script.js`).

## Motion

Enter/exit motion uses CSS scroll-driven animations (`animation-timeline: view()`), so it tracks the scrollbar exactly and reverses on scroll up. Safari and Firefox get a fade-up-on-entry fallback via IntersectionObserver. `prefers-reduced-motion` disables all of it.

Tune the feel in `styles.css`:
- `@keyframes rise-fall` — `translateY(60px)` is the rise, `translateY(110px) scale(.88)` is the drop.
- `animation-range` on `.rv` / `.rvi` — when in the scroll each element starts and ends.
- `--space-section` (120px) — the spacing between blocks; it is the only divider the design uses.
=======
# Personal Portfolio-
I am making a Website to showcase my portfolio.
>>>>>>> origin/main

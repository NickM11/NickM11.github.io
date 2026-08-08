# Portfolio Website

A personal portfolio website built with plain HTML, CSS, and JavaScript — no frameworks, no build step. Showcases projects, publications, and contact information with a terminal/blueprint-inspired design.

## Features

- Responsive single-page layout with tab-based navigation (Home, Projects, Publications, About, Contact)
- Projects displayed as a connected trace/timeline
- Publications section with in-browser PDF preview (modal) and direct download
- Mobile-friendly navigation with collapsible menu
- No dependencies beyond Google Fonts — loads fast, deploys anywhere

## Tech Stack

- HTML5
- CSS3 (custom properties, no framework)
- Vanilla JavaScript (no libraries)

## Running Locally

No build tools or server required for basic use.

**Option 1 — Open directly**
Open `index.html` in your browser.

**Option 2 — Local server (recommended for development)**
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

**Option 3 — VS Code Live Server**
Install the *Live Server* extension, right-click `index.html`, and select **Open with Live Server** for auto-reload on save.

## Customizing

- **Content**: edit `index.html` directly — projects, publications, and contact links are plain HTML blocks you can copy/edit/remove.
- **Colors and fonts**: edit the CSS custom properties at the top of `styles.css` (`:root { ... }`).
- **Publications**: add PDF files to `papers/`, then point each entry's `data-preview` and `href`/`download` attributes at the file.

## Deployment

This is a static site, so it can be hosted for free on:
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com/)

For GitHub Pages: push these files to a repo named `yourusername.github.io`, then enable Pages under **Settings → Pages** with source set to the `main` branch, root folder.

## License

Personal project — feel free to fork and adapt the structure for your own portfolio.

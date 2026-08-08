# Portfolio Site

A static portfolio site — plain HTML/CSS/JS, no build step required.

## Before you deploy — personalize it

Search the files for these placeholders and replace them:

- `index.html`:
  - `your.email@example.com` — your real email
  - `github.com/yourusername` and the three `href="#" data-placeholder="github"` links — your actual repo URLs (CosmicRaidProject, TC_Toolset, algorithms study)
  - `linkedin.com/in/yourusername` — your LinkedIn, if you want it listed
- `<title>` and meta description at the top of `index.html` if you want a different framing

## Preview locally

Just open `index.html` in a browser — no server needed. Or, for a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages (free)

1. Create a new GitHub repository named exactly `yourusername.github.io` (replace with your actual GitHub username).
2. Push these three files (`index.html`, `styles.css`, `script.js`) to the repo's root on the `main` branch:
   ```bash
   git init
   git add index.html styles.css script.js
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, and under "Build and deployment" make sure the source is set to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://yourusername.github.io` within a minute or two.

## Optional: custom domain

If you buy a domain (e.g. via Cloudflare Registrar, ~£8–15/year at cost):

1. In the repo, add a file named `CNAME` containing just your domain, e.g. `nickdev.com`.
2. At your domain registrar, add a `CNAME` record pointing to `yourusername.github.io`.
3. In **Settings → Pages**, enter the custom domain and enable "Enforce HTTPS" once it's verified.

## Adding more projects later

Copy one `<article class="node">...</article>` block inside `#projects` in `index.html` and edit the content — the trace line and marker styling apply automatically.

# Bince Visuals

Portfolio website for **Bince Visuals Photography** (Taytay, Rizal).
Plain HTML, CSS and JavaScript. No build step, no frameworks, free to host on GitHub Pages.

## Folder layout

```
index.html          the page
css/style.css       all styling (colours and fonts at the top, in :root)
js/photos.js        the gallery photo list and captions  <- edit this to add photos
js/main.js          gallery filters, photo viewer, copy buttons
images/             photos go here (see images/PUT-PHOTOS-HERE.txt)
.nojekyll           tells GitHub Pages to serve files as-is
```

## Put it online (GitHub Pages)

1. Sign in at github.com and click **New repository**. Name it e.g. `bincevisuals`, set it to **Public**, and create it.
2. On the empty repo page, click **uploading an existing file**.
3. Drag in **everything inside** this folder (index.html, css, js, images, .nojekyll), not the folder itself. Click **Commit changes**.
   - `.nojekyll` is hidden on Mac/Windows. It's optional; the site works without it.
4. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch **main**, folder **/(root)**, then **Save**.
5. Wait 1–2 minutes. The site will be at `https://YOUR-USERNAME.github.io/bincevisuals/`.

## Use your own domain

1. In **Settings → Pages → Custom domain**, type the domain (e.g. `bincevisuals.com`) and save. GitHub adds a `CNAME` file to the repo.
2. At your domain registrar, add these DNS records:
   - Four **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`
3. Once GitHub shows the domain as verified, tick **Enforce HTTPS**. DNS can take a few hours.

## Adding or changing photos

1. Upload the photo into `images/gallery/` (Add file → Upload files, inside that folder).
2. Open `js/photos.js`, click the pencil icon, and add a line like:
   ```js
   { t:"Caption here", src:"images/gallery/denim-05.jpg", c:"denim", s:"denim", r:"4/5", x:"" },
   ```
3. Commit. The live site updates in about a minute.

## Preview on your computer

Double-click `index.html` to open it in a browser. To test phone layout, resize the window narrow, or use your browser's device toolbar (F12 → phone icon).

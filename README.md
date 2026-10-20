# Sachin: portfolio
Static site (no build step). Open `index.html`, or push the folder to GitHub Pages / Vercel / Netlify.
- Photo: drop a square `photo.jpg` into `assets/` (falls back to the monogram until then).
- Résumé: replace `resume.pdf` to update the download.
- Content lives in `js/main.js` (projects, LeetCode skills, stack) and `index.html` (copy).
- Project screenshots: save PNGs as `assets/shots/quickfolio.png`, `path-lab.png`, `proofpay.png`, `studyos.png` (16:10 works best). They replace the generated covers automatically.
- Logos are bundled in `js/icons.js` (brand icons from simple-icons, CC0), so the site needs no CDN. To show a new skill logo, add its name to `ICON_MAP`.
- QuickFolio uses a real screenshot (`assets/shots/quickfolio.webp`). The Path-Lab, ProofPay and StudyOS covers are stylised illustrations; replace them with real screenshots under the same names (any of .svg/.png/.webp: update the filename in `js/main.js`).

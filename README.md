# Ahmed Nageh Ali — Portfolio

A complete, responsive React/Vite portfolio with live Codeforces statistics, coding profiles, competition milestones, YouTube, projects, certificates, and contact sections.

## Run locally

1. Install Node.js 18+.
2. Run `npm install`.
3. Run `npm run dev` and open the local address printed in your terminal.
4. Run `npm run build` to build the production site.

## Edit content

- **Contact email / CV link:** `src/data/contact.js`.
- **CV file:** replace `public/Ahmed-Nageh-CV.pdf` with the new PDF (keep the same file name).
- **Coding platforms:** `src/data/platforms.js`.
- **Achievements and certificates:** `src/components/Achievements.jsx` (images in `public/images/certificates/`).
- **Profile photo:** `public/images/profile.webp`.
- **Social links:** `src/components/Contact.jsx`.

## Codeforces

`src/hooks/useCodeforces.js` uses Codeforces public API to fetch current rating, maximum rating and count unique accepted problems. Network access, API rate limits, or browser CORS may temporarily prevent results from appearing; the site handles this gracefully.

## Deployment

The site is deployed to GitHub Pages at `https://arwayaser.github.io/Ahmed-Nage7-Portofolio/` using the workflow in `.github/workflows/deploy.yml`. In the repository go to Settings → Pages and set Source to **GitHub Actions**. If the repository is renamed, update `base` in `vite.config.js`.

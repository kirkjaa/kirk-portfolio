# kirkp.com — Kirk Pathumanun

Personal site of Kirk Pathumanun, venture builder and technical founder. Live at **https://kirkp.com**.

React 18 · TypeScript · Vite 6 · Tailwind CSS 4 · wouter · react-markdown. Trilingual (EN / TH / KO) with light and dark themes.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
```

## Structure

```
index.html                 head metadata, fonts, JSON-LD
public/favicon.svg         KP monogram
public/images/             kirk-pathumanun-portrait.jpg · events/ · logos/ · mentees/  (all ≤ 1600 px)
src/index.css              design tokens (navy / off-white / amber; Archivo + IBM Plex) and components
src/content/strings.ts     every UI string in EN / TH / KO
src/content/homeContent.ts roles, track record, articles, mentorship, gallery captions
src/content/links.ts       the only public contact points
src/content/profile.*.md   long-form profile rendered on /about, /ventures, /publications, /profile
src/pages/                 Home · About · Ventures · Publications · Profile · NotFound
src/components/            Header · Footer · AppLayout · PageHeader · SectionHeading · MarkdownContent
```

The visual system is shared with the QUEST EDTECH corporate deck: deep navy `#0B1F3A` and off-white `#F7F6F2` grounds, amber `#F2A93B` as the single accent, electric blue `#2F6FED` for links only; Archivo for display, IBM Plex Sans (with the Thai and KR cuts) for body, IBM Plex Mono for labels.

## Content rules

- Facts on the site come from the knowledge base; do not add awards, clients, funding or dates that are not verified there.
- The company website is **questedtech.com** (quest.ac is retired).
- Public contact is `quest@edknovate.com` only.

## Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md). Production runs the `kirk-portfolio` container (`serve -s dist`) behind Nginx Proxy Manager.

© 2026 Kirk Pathumanun. All rights reserved.

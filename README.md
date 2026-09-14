# NexTech — React + GSAP

A frontend-only NexTech ecosystem site.

## Stack
- React
- Vite
- GSAP + ScrollTrigger
- @gsap/react
- Lucide React

GSAP's React integration uses `useGSAP()` for animation setup and cleanup.

## Run in VS Code

1. Open this folder in VS Code.
2. Open Terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL Vite gives you.

## Build
```bash
npm run build
npm run preview
```

## Where to edit content
Most site content is in `src/App.jsx`.
Visual styling and responsive behavior is in `src/styles.css`.

## Notes
- No backend.
- No authentication.
- Project cards open an interactive detail modal.
- Navigation scrolls to sections.
- GSAP powers the intro, scroll reveals, marquee and ambient motion.
- Replace the placeholder people initials with real photos when you have the six member images.
- Replace placeholder project descriptions/links with verified venture URLs as they become available.

## Suggested next assets
Create:
- `/public/images/nextech-logo.svg`
- `/public/images/people/*.jpg`
- `/public/images/projects/*.webp`

Then update the relevant React data/components to use those assets.

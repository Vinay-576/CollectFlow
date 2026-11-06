# CollectFlow Dashboard — React + Tailwind CSS

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code / terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Project structure

- `index.html` — browser entry document.
- `src/main.jsx` — React entry point; mounts the app and imports global CSS.
- `src/App.jsx` — dashboard UI, illustrations, charts, state, and interactions. Converted from the supplied TSX file to JSX (the source contained no TypeScript type annotations).
- `src/index.css` — Tailwind directives, font import, and minimal global styles.
- `tailwind.config.js` — Tailwind content paths.
- `postcss.config.js` — Tailwind/PostCSS setup.

## Notes

The dashboard uses `lucide-react` for interface icons. Tailwind utility classes are kept in the JSX so the original layout and theme styling remain intact.

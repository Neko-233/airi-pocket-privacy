# Airi Pocket Legal

Static, multilingual legal pages for the Airi Pocket iOS app.

## Published pages

- Privacy Policy
- Terms of Service
- Account Deletion
- Simplified Chinese, Traditional Chinese, English, and Japanese

The site is generated into `docs/` and published with GitHub Pages.

## Build

```sh
npm run build
npm run check
```

The build uses only Node.js and has no third-party dependencies.

## Source layout

- `src/content.mjs` — localized legal content
- `src/template.mjs` — semantic HTML renderer
- `static/` — shared CSS and JavaScript
- `scripts/build.mjs` — static-site generator and integrity checks
- `docs/` — generated GitHub Pages output

## Privacy contact

Account deletion is available inside Airi Pocket. For documentation corrections,
open an issue in this repository without including personal information.

# mark.honeychurch.org

The personal website of Mark Honeychurch, built with [Astro](https://astro.build/), interactive [Vue 3](https://vuejs.org/) islands, and managed with [Sveltia CMS](https://github.com/sveltia/sveltia-cms).

Blog posts live as flat Markdown files in `src/content/blog/`. Standalone pages retain a structured hierarchy in `src/content/pages/`. Astro reads both through content collections, while static assets live in `public/`.

## Development

```bash
npm install
npm run dev
```

The development site runs at `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview
```

The build performs an Astro type/content check and generates the static site in `dist/`.

Interactive and historical code examples live under `src/examples/`, grouped by topic. They use Vue 3's supported Options API for continuity with the existing component structure. Astro hydrates only the demos used by each page, and each page renders the component's current source beneath the running example.

Files intended for direct download live under `public/downloads/`, grouped by project.

## Content management

Sveltia CMS is available at `/admin/`. Its configuration is in `public/admin/config.yml` and exposes separate Blog Posts and Pages collections.

GitHub Actions builds `master` and publishes `dist/` through GitHub Pages.

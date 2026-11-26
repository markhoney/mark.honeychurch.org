# mark.honeychurch.org

The personal website of Mark Honeychurch, built with [Astro](https://astro.build/), interactive [Vue 3](https://vuejs.org/) islands, and managed with [Sveltia CMS](https://github.com/sveltia/sveltia-cms).

The retained blog, CV, contact, and media content lives in `docs/` as Markdown with YAML frontmatter. Astro reads it through a content collection, while static assets live in `public/`.

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

Interactive examples retain the site's original behavior and presentation in Vue 3 components under `components/`. They use Vue 3's supported Options API for continuity with the existing component structure. Astro hydrates only the demos used by each page, and each page renders the component's current source beneath the running example.

## Content management

Sveltia CMS is available at `/admin/`. Its configuration is in `public/admin/config.yml` and edits the Markdown collections in `docs/`.

GitHub Actions builds `master` and publishes `dist/` through GitHub Pages.

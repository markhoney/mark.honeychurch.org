# mark.honeychurch.org

The personal website of Mark Honeychurch, built with [Astro](https://astro.build/) and managed with [Sveltia CMS](https://github.com/sveltia/sveltia-cms).

The retained blog, CV, contact, and media content lives in `docs/` as Markdown with YAML frontmatter. Astro reads it through a content collection, while static assets live in `public/`.

## Development

```bash
yarn install
yarn dev
```

The development site runs at `http://localhost:4321`.

## Production build

```bash
yarn build
yarn preview
```

The build performs an Astro type/content check and generates the static site in `dist/`.

## Content management

Sveltia CMS is available at `/admin/`. Its configuration is in `public/admin/config.yml` and edits the Markdown collections in `docs/`.

GitHub Actions builds `master` and publishes `dist/` to the `gh-pages` branch.

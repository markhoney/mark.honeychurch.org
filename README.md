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

## Code examples

Runnable Vue examples and historical source files live together under `src/examples/`, grouped by topic. For example, `src/examples/coin/` contains the coin demos and their supporting assets, while `src/examples/evp/` contains the EVP UI and data-generation sources.

Use topic-relative paths in content:

```mdx
<AppEmbed app="coin/flip" client="load" showSource />
<CodeFile file="divider/ConsoleApplication1.cpp" />
```

`AppEmbed` renders and optionally displays a Vue component from `src/examples/`. It hydrates `client:visible` by default; use `client="load"` for examples that must start immediately. `sourceOnly` displays the source without mounting the component.

`CodeFile` displays other source formats. Language highlighting is inferred from the file extension, but the optional `lang`, `name`, and `open` props can override the default display.

Files intended for direct download live under `public/downloads/`, grouped by project. For example, the divider download is stored at `public/downloads/divider/` and linked publicly through `/downloads/divider/`.

## Content management

Sveltia CMS is available at `/admin/`. Its configuration is in `public/admin/config.yml` and exposes separate Blog Posts and Pages collections. Example paths are documented in the CMS editor hints so new content follows the same topic-relative convention.

GitHub Actions builds `master` and publishes `dist/` through GitHub Pages.

# mark.honeychurch.org

## Content

This is the personal website of Mark Honeychurch, and hosts my CV, contact details and some of my writing - such as details of tech projects I've worked on, code that I've written, my thoughts on random topics and notes from my Skeptical Thoughts radio segment on RadioLive.

## Technical

The site is built using [Vuepress](https://vuepress.vuejs.org/), markdown files for content and a little bit of Vue magic. I've added some components to display a header and footer, list categories and tags, and display lists of pages. The Vuepress config.js file has been configured to build the site to the /docs folder. This repository on GitHub has been set to publish the site found in the /docs folder via HTTPS, and has been given a custom domain name - [mark.honeychurch.org](https://mark.honeychurch.org).

This solution allows me to have both the source and build for the website in the one GitHub repo, which is clean and simple. All that's needed is for Vuepress to be installed globally, along with the markdown-it extensions I use (video, fontawesome, abbr, sup, sub and attrs), and then for the NODE_PATH environment variable to point to the global node_modules folder.

### Commands

Before committing to GitHub, Large File Support (LFS) is needed. This can be installed with:

```bash
git lfs install
```

A development version of the site, with hot reloading, can be launched by running:

```bash
vuepress dev
```

To build the static files for the production website, all you need to run is:

```bash
vuepress build
```

For more details about how this website is built, check out [this blog post](/blog/code/website/).

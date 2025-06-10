# Developer notes

This project is built with [Astro](https://astro.build) and uses [PNPM](https://pnpm.io) for package management.

## Runtimes

Requires [Node.js](https://nodejs.org/) (v18+), [PNPM](https://pnpm.io/installation), [Ruby](https://www.ruby-lang.org/en/documentation/installation/), and [Bundler](https://bundler.io/).

See `.ruby-version` and `package.json` (`engines` field) for supported versions.

## Starting a local instance

To start a local development server, follow these steps.

```bash
# 1. Install dependencies
pnpm install
bundle install

# 2. Start the dev server
pnpm run dev
```

The server will be available at `http://localhost:4321`.

## Adding a new cheatsheet

To add a new cheatsheet, simply create a new `.md` file in the root of the project. Follow the format of existing cheatsheets like `tailwind.md` or `css.md`.

## Testing

Run the automated tests with:

```
pnpm run test
```

## Tech Stack

*   **Framework**: [Astro](https://astro.build)
*   **Languages**: TypeScript, Ruby
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Package Manager**: [PNPM](https://pnpm.io/)
*   **Deployment**: [Netlify](https://www.netlify.com/)

## Frontmatter

Each sheet supports these metadata:

```yml
---
title: React.js
# Optional:
category: React
updated: 2020-06-14
ads: false # Add this to disable ads
weight: -5 # lower number = higher in related posts list
deprecated: true # Don't show in related posts
deprecated_by: /enzyme # Point to latest version
prism_languages: [vim] # Extra syntax highlighting
intro: |
  This is some *Markdown* at the beginning of the article.
tags:
  - WIP
  - Featured

# Special pages:
# (don't set these for cheatsheets)
type: home # home | article | error
og_type: website # opengraph type
---
```

## Prism languages

For a list of supported languages for syntax highlighting, see: <https://github.com/PrismJS/prism/tree/gh-pages/components>

## CSS classes

See <https://capu.dev/cheatsheet-styles> for a reference on styling.

## Setting up redirects

This example sets up a redirect from `es2015` to `es6`:

```yml
# /es2015.md
---
title: ES2015
category: Hidden
redirect_to: /es6
---
```

## SEO description

There are multiple ways to set meta description.

### Keywords (and intro)

Set `keywords` (and optionally `intro`). This is the easiest and the preferred
way for now.

### Description (and intro)

Set `description` (and optionally `intro`)

### Intro only

If you left out `description` or `keywords`, a default description will be added.

```
React cheatsheet - devhints.io
------------------------------
https://devhints.io/react ▼
React.Component · render() · componentDidMount() · props/state · React is a
JavaScript library for building web...
```

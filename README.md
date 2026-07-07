# Fieldwork Agency Template

A responsive, editorial agency portfolio built with Astro, TypeScript, and plain CSS. Project content is shared across the home, work, project detail, and archive pages.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:4321`. Run `npm run build` to create a production build in `dist/`.

## Project data

All portfolio content lives in `src/data/projects.ts`. Each project defines its title, slug, client, year, category, descriptions, cover, gallery, and services. Set `featured: true` to include a project on the home page.

## Add a project

1. Add a new object to the `projects` array in `src/data/projects.ts`.
2. Give it a unique URL-safe `slug` and complete every field in the `Project` interface.
3. Add a descriptive `alt` value for every image.

Astro automatically generates `/work/[slug]`; the new project also appears on `/work` and `/archive` without additional page files.

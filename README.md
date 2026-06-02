# Stella-rium

A free, premade website design built with [Astro](https://astro.build). Features a responsive layout, fluid typography, and a purple/charcoal colour palette. Designed to be easy to customise with minimal code changes.

### Installation and Commands

| Command                                                | Action                                                  |
| :----------------------------------------------------- | :------------------------------------------------------ |
| `git clone https://github.com/tkyodft/stella-rium.git` | Download or clone this repository                       |
| `npm install`                                          | Install dependencies                                    |
| `npm run dev`                                          | Start the development server at `http://localhost:4321` |
| `npm run build`                                        | Build your production site to `./dist/`                 |
| `npm run preview`                                      | Preview your build locally, before deploying            |
| `npm run astro ...`                                    | Run CLI commands like `astro add`, `astro check`        |
| `npm run astro -- --help`                              | Get help using the Astro CLI                            |

## Customization

Almost everything you need to change lives in one file: `src/consts.ts`

Open it and update:

- `SITE_TITLE` — your site name, appears in the nav, page title, and footer
- `SITE_DESCRIPTION` — used in meta tags for SEO
- `SITE_EST` — the year your site was established, used in the footer copyright
- `NAV_LINKS` — your navigation links, updates the header and info strip automatically
- `INFO_STRIP_LINKS` - a set of links that can be anything you want, shown in the info strip
- `AFFILIATES` — your affiliate sites, also shown in the info strip
- `CREDITS` — resources you want to credit in the footer

### Images

Any static assets, like images, can be placed in the `public/` directory.

| File                        | Used for         |
| --------------------------- | ---------------- |
| `src/assets/header.webp`    | Hero banner      |
| `src/assets/background.png` | Background image |

### Adding pages

Create a new file in `src/pages/`. As an example, `src/pages/About.astro`:

```astro
---
import Layout from "../layouts/Layout.astro";
import ContentBlock from "../components/ContentBlock.astro";
---

<Layout title="about" showHero={true}>
    <ContentBlock heading="about" divider={true}>
        <p>Write your content here.</p>
    </ContentBlock>
</Layout>
```

`<Layout title="about" showHero={true}>` - wraps the entire page in the base layout, you always need this.
`title="about"` - sets the `<title>` tag
`<ContentBlock heading="about" divider={true}>` - renders the content wrapper with the plum heading pill and star divider at the end.

Then add/edit it into `NAV_LINKS` in `consts.ts`:

```ts
export const NAV_LINKS = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "#",
    },
    {
        label: "Contact",
        href: "#",
    },
    {
        label: "Downloads",
        href: "#",
    },
] as const;
```

### Adding a contact form

Create `src/pages/contact.astro`, then

```astro
---
import Layout from "../layouts/Layout.astro";
import ContentBlock from "../components/ContentBlock.astro";
import Button from "../components/Button.astro";
---

<Layout title="contact" showHero={true}>
    <ContentBlock heading="contact"> Take the contact form from `pages/index.astro` and put it here. </ContentBlock>
</Layout>

<style lang="scss">
    /* Take the contents of `styles/_forms.scss` and put it here. */
</style>
```

Then edit `styles/global.scss` and remove `@use "./forms";`. This removes it from the global styles and scopes the SCSS to your Contact page.

## Deployment

After editing the `constants.ts` file to your liking, you're ready to deploy (create a production ready version). There are plenty options for you to choose from.

### Netlify

1. Push your project to GitHub
2. Go to Go to [netlify.com](https://netlify.com) and click on the "Add new project" button.
3. Under "Import a Git repository", choose GitHub and choose the repository we just committed. I do recommend choosing "Only select repositories".
4. If you ever need to change anything, it's as simple as editing what you want to change, and pushing the commit to GitHub, Netlify handles the rest.

You would do something similar as above for [vercel.com](https://vercel.com).

### Static hosting

1. Build the project locally:
   Run

```bash
npm run build
```

2. Upload the contents of the `dist/` folder to your server

## License

This premade is free to use and modify for personal and non-commercial fan sites.
Please credit **[Heart Station](https://heart-statiion.net)** and link back to the original if you use it.

Not for redistribution or resale.

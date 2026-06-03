// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
    site: "https://example.com",
    integrations: [mdx(), sitemap()],
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Raleway",
            cssVariable: "--font-raleway",
            fallbacks: ["sans-serif"],
            weights: [200, 300, 400, 500, 600],
            styles: ["normal"],
            display: "swap",
        },
    ],
});

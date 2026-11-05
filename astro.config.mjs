// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { starlightSidebar } from "./src/navigation/starlight";

import mdx from "@astrojs/mdx";

export default defineConfig({
    site: "https://dotlaboratory.xyz",
    integrations: [starlight({
        title: "YakkoWorks - StarMap",
        favicon: "/favicon.ico",
        locales: {
            root: {
                label: "日本語",
                lang: "ja",
            },
        },
        pagination: false,
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 6,
        },
        components: {
            Head: "./src/components/Head.astro",
            PageTitle: "./src/components/PageTitle.astro",
            Sidebar: "./src/components/StarlightSidebar.astro",
        },
        logo: {
            src: "./src/assets/dotlaboratory.png",
            replacesTitle: true,
        },
        customCss: ["./src/styles/starmap.css"],
        sidebar: starlightSidebar,
        head: [
            {
                tag: 'meta',
                attrs: {
                    property: 'og:title',
                    content: 'YakkoWorks StarMap | dotlaboratory',
                },
            },
            {
                tag: 'meta',
                attrs: {
                    property: 'og:description',
                    content: 'やっこワークスのポートフォリオ 兼 作業記録',
                },
            },
            {
                tag: 'meta',
                attrs: {
                    property: 'og:type',
                    content: 'website',
                },
            },
            {
                tag: 'meta',
                attrs: {
                    property: 'og:image',
                    content: 'https://dotlaboratory.xyz/public/ogpImage.png',
                },
            },
            {
                tag: 'meta',
                attrs: {
                    property: 'twitter:card',
                    content: 'https://dotlaboratory.xyz/public/ogpImage.png',
                },
            },
        ],
    }), mdx()],
    
});
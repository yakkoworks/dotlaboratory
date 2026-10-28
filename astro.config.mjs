// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { starlightSidebar } from "./src/navigation/starlight";

export default defineConfig({
	site: "https://dotlaboratory.xyz",
	integrations: [
		starlight({
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
			customCss: ["./src/styles/custom.css"],
			sidebar: starlightSidebar,
		}),
	],
});

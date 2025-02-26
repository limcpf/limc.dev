import type { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
	configuration: {
		pageTitle: "📚 개발자 서고",
		pageTitleSuffix: " - 개발자 서고",
		enableSPA: true,
		enablePopovers: true,
		analytics: {
			provider: "plausible",
		},
		locale: "ko-KR",
		baseUrl: "limc.dev",
		ignorePatterns: ["private", "templates", ".obsidian"],
		defaultDateType: "created",
		generateSocialImages: false,
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				header: "Hahmlet",
				body: "Hahmlet",
				code: "Nanum Gothic Coding",
			},
			colors: {
				lightMode: {
					light: "#EDE0D4",
					lightgray: "#DDB892",
					gray: "gray",
					darkgray: "#4e4e4e",
					dark: "#2b2b2b",
					secondary: "#284b63",
					tertiary: "#84a59d",
					highlight: "rgba(143, 159, 169, 0.15)",
					textHighlight: "#fff23688",
				},
				darkMode: {
					light: "#E6CCB2",
					lightgray: "#B4846C",
					gray: "#7D5A50",
					darkgray: "#5C4033",
					dark: "#2C1810",
					secondary: "#B4846C",
					tertiary: "#967969",
					highlight: "rgba(180, 132, 108, 0.15)",
					textHighlight: "#3A2419",
				},
			},
		},
	},
	plugins: {
		transformers: [
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({
				priority: ["frontmatter", "filesystem"],
			}),
			Plugin.SyntaxHighlighting({
				theme: {
					light: "github-light",
					dark: "github-dark-dimmed",
				},
				keepBackground: true,
			}),
			Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			Plugin.Description(),
			Plugin.Latex({ renderEngine: "katex" }),
		],
		filters: [Plugin.RemoveDrafts(), Plugin.ExplicitPublish()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.ComponentResources(),
			Plugin.ContentPage(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.ContentIndex({
				enableSiteMap: true,
				enableRSS: true,
			}),
			Plugin.Assets(),
			Plugin.Static(),
			Plugin.NotFoundPage(),
		],
	},
};

export default config;

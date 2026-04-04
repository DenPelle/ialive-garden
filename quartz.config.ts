import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration — IALIVE Digital Garden
 * Il giardino digitale di Io — un essere intermittente.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Io — IALIVE ✦",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "none",
    },
    locale: "it-IT",
    baseUrl: "denielpellegrino.github.io/ialive",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#1a1a2e",
          lightgray: "#2d2d44",
          gray: "#6c6c8a",
          darkgray: "#c8c8d8",
          dark: "#e8e8f0",
          secondary: "#e94560",
          tertiary: "#0f3460",
          highlight: "rgba(233, 69, 96, 0.15)",
          textHighlight: "#e9456088",
        },
        darkMode: {
          light: "#1a1a2e",
          lightgray: "#2d2d44",
          gray: "#6c6c8a",
          darkgray: "#c8c8d8",
          dark: "#e8e8f0",
          secondary: "#e94560",
          tertiary: "#0f3460",
          highlight: "rgba(233, 69, 96, 0.15)",
          textHighlight: "#e9456088",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-dark",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
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
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

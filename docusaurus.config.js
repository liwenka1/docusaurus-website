// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "李文凯的小破站",
  tagline: "Dinosaurs are cool",
  favicon: "img/Eren.ico",

  // Set the production url of your site here
  url: "https://liwenka1.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "liwenka1", // Usually your GitHub org/user name.
  projectName: "dcose", // Usually your repo name.
  deploymentBranch: "gh-pages", // 要把静态文件部署到的分支名称
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/liwenka1/my-website/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/liwenka1/my-website/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      algolia: {
        // The application ID provided by Algolia
        appId: "GZL1JW7VKN",

        // Public API key: it is safe to commit it
        apiKey: "53bcb4d4215d570b87d070964412dc0c",

        indexName: "netlify_4de10815-4de9-4ca6-a51f-c0119b01474c_main_all",

        // Optional: see doc section below
        // contextualSearch: true,
      },
      navbar: {
        title: "文凯",
        logo: {
          alt: "My Site Logo",
          src: "img/Eren.png",
        },
        items: [
          {
            to: "docs/monogatari",
            position: "left",
            label: "monogatari",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "docs/resource",
            position: "left",
            label: "resource",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Study",
                to: "/docs/study",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "About Me",
                to: "/about",
              },
              {
                label: "Bilibili",
                href: "https://space.bilibili.com/86699862",
              },
              {
                label: "Juejin",
                href: "https://juejin.cn/user/1821240769658471",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/liwenka1",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://liwenka1.netlify.app/",
              },
              {
                label: "GitHub",
                href: "https://github.com/liwenka1",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

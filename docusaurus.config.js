docusaurusConfig = {
  title: "OVIX",
  tagline: "The amazing GTA 5 menu.",
  url: "https://docs.ovix.one",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://ovix.one/logo.png",
  organizationName: "BarikiPW",
  projectName: "OVIX",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: false,
      title: "OVIX Docs",
      logo: {
        alt: "OVIX",
        src: "https://ovix.one/logo.png",
        srcDark: "https://ovix.one/logo.png",
        href: "https://ovix.one",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "ovix-intro",
          label: "Docs",
        },
        {
          position: "right",
          label: "Dashboard",
          href: "https://dash.ovix.one",
          className: "dashboard__link",
        },
      ],
    },
    footer: {
      logo: {
        alt: "OVIX",
        src: "/img/logo.png",
        srcDark: "/img/logo.png",
      },
      links: [
        {
          title: "Company",
          items: [
            {
              label: "Homepage",
              to: "https://ovix.one",
            },
            {
              label: "Docs",
              to: "https://docs.ovix.one",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Bariki GmBH. Built with 💖.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  scripts: [{src: 'https://metrica.cyn.gg/js/plausible.js', defer: true},],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/",
            from: ["/docs"],
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "default", // this allows us to set home page to docs
        path: "docs",
        routeBasePath: "/",
        include: ["**/*.md", "**/*.mdx"],
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
};

module.exports = docusaurusConfig;

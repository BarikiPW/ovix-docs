/**
 * Contains sidebar definition for OVIX's docs page.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "docs": [
    {
      type: "doc",
      label: "Overview",
      id: "ovix-intro",
      className: "top-level-doc",
    },
    {
      type: "category",
      label: "Info",
      items: [
        "resellers",
        "resellership"
      ],
      collapsible: false,
    }, {
      type: "category",
      label: "Getting Started",
      items: [
        "setup",
      ],
      collapsible: false,
    },
  ],
};

module.exports = sidebars;

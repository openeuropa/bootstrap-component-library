const { DrupalAttribute } = require("drupal-attribute");
module.exports = {
  id: "mega-menu",
  trigger: {
    label: "Top-level item with megamenu",
  },
  content_link: {
    label: "Discover more",
    path: "/example.html",
    icon: {
      name: "arrow-right",
    },
  },
  content_block:
    "<h4>About the European Commission</h4><p>Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
  items: [
    {
      trigger: {
        id: "custom-trigger-mm-1",
        label:
          "Submenu item 1 with very long text that wraps to multiple lines",
      },
      see_all: {
        label:
          "More of submenu item 1, where even the see all text is very long.",
        path: "/example.html",
        attributes: new DrupalAttribute().setAttribute(
          "aria-label",
          "See all in Submenu item 1",
        ),
      },
      items: [
        {
          label: "Sub-submenu item 1.1",
          path: "/example.html",
        },
        {
          label:
            "Sub-submenu item 1.2 with longer link text that spans multiple lines",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 1.3",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Submenu item 2",
      path: "/example.html",
    },
    {
      trigger: {
        id: "custom-trigger-mm-2",
        label: "Submenu item 3 (many children)",
      },
      see_all: {
        label: "More of submenu item 3",
        path: "/example.html",
      },
      items: [
        {
          label: "Sub-submenu item 2.1",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.2",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.3",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.4",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.5",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.6",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.7",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.8",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.9",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.10",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.11",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.13",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 2.14",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Submenu item 3 with very long text that needs multiple lines.",
      path: "/example.html",
    },
    {
      label: "Submenu item 4 (nolink)",
    },
    {
      label: "Submenu item 5 (nolink parent)",
      path: "/example.html",
      trigger: {
        id: "custom-trigger-mm-3",
        label: "Submenu item 5 (nolink parent)",
      },
      items: [
        {
          label: "Sub-submenu item 5.1 (nolink)",
        },
        {
          label: "Sub-submenu item 5.2",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Submenu item 6.",
      path: "/example.html",
    },
    {
      label: "Submenu item 7.",
      path: "/example.html",
    },
    {
      label: "Submenu item 8.",
      path: "/example.html",
    },
  ],
};

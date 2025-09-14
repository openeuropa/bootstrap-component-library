module.exports = {
  trigger: {
    label: "Top-level item with megamenu",
    path: "/example.html",
  },
  id: "dropdown-megamenu",
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
      id: "dropdown-megamenu-inner-1",
      trigger: {
        label: "Submenu item 1",
        path: "/example.html",
      },
      see_all: {
        label: "More of submenu item 1",
        path: "/example.html",
      },
      items: [
        {
          label: "Sub-submenu item 1.1",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 1.2 with longer link text that spans multiple lines",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 1.3",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 1.4",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 1.5",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Submenu item 2",
      path: "/example.html",
    },
    {
      id: "dropdown-megamenu-inner-3",
      trigger: {
        label: "Submenu item 3",
        path: "/example.html",
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
      ],
    },
    {
      label: "Submenu item 3 with very long text that needs multiple lines.",
      path: "/example.html",
    },
    {
      label: "Submenu item 4.",
      path: "/example.html",
    },
    {
      label: "Submenu item 5.",
      path: "/example.html",
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

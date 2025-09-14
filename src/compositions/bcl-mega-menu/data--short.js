module.exports = {
  trigger: {
    label: "Top-level item (few children)",
    path: "/top-level.html",
  },
  id: "dropdown-megamenu",
  content_link: {
    label: "Discover more",
    path: "/top-level.html",
    icon: {
      name: "arrow-right",
    },
  },
  content_block:
    "<h4>About us</h4><p>Description text.</p>",
  items: [
    {
      id: "dropdown-megamenu-inner",
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
          label: "Sub-submenu item 1.2",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Submenu item 2",
      path: "/example.html",
    },
    {
      id: "dropdown-megamenu-inner",
      trigger: {
        label: "Submenu item 3 (nolink)",
      },
      items: [
        {
          label: "Sub-submenu item 3.1",
          path: "/example.html",
        },
        {
          label: "Sub-submenu item 3.2",
          path: "/example.html",
        },
      ],
    },
  ],
};

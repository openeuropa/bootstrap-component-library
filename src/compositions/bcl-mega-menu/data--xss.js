module.exports = {
  trigger: {
    label: "Top-level <hr>item",
    path: "/top-level<hr>.html",
  },
  id: "dropdown-megamenu",
  content_link: {
    label: "Discover <hr>more",
    path: "/top-level<hr>.html",
    icon: {
      name: "arrow-right",
    },
  },
  content_block: "<h4>About us</h4><hr><p>Description text.</p>",
  items: [
    {
      id: "dropdown-megamenu-inner",
      trigger: {
        label: "Submenu item <hr>1",
        path: "/example<hr>.html",
      },
      see_all: {
        label: "More of submenu<hr> item 1",
        path: "/example<hr>.html",
      },
      items: [
        {
          label: "Sub-submenu item<hr> 1.1",
          path: "/example<hr>.html",
        },
        {
          label: "Sub-submenu item 1.2",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Submenu item<hr> 2",
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

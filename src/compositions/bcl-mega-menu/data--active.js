module.exports = {
  trigger: {
    label: "Item with megamenu (active)",
    attributes: {
      class: ["active"],
    },
  },
  content_link: {
    label: "Discover more",
    path: "/example.html",
    icon: {
      name: "arrow-right",
    },
    attributes: {
      class: ["active"],
    }
  },
  content_block:
    "<h4>About the European Commission</h4><p>Drupal will add an 'active' class when a link is in the active trail.</p>",
  items: [
    {
      trigger: {
        label: "Submenu item 1 (active)",
        attributes: {
          class: ["active"],
        },
      },
      see_all: {
        label: "More of submenu item 1",
        path: "/example.html",
      },
      items: [
        {
          label: "Sub-submenu item 1.1 (active)",
          path: "/example.html",
          attributes: {
            class: ["active"],
          },
        },
        {
          label: "Sub-submenu item 1.2",
          path: "/example.html",
        },
      ],
    },
    {
      trigger: {
        label: "Submenu item 3",
      },
      see_all: {
        label: "More of submenu item 2",
        path: "/example.html",
      },
      items: [
        {
          label: "Sub-submenu item 2.1",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Submenu item 3",
      path: "/example.html",
    },
  ],
};

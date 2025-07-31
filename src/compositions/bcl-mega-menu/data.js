module.exports = {
  trigger: {
    label: "A link with dropdown",
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
      id: "dropdown-megamenu-inner",
      trigger: {
        label: "Base Category Item",
        path: "/example.html",
      },
      items: [
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Base Category Item",
      path: "/example.html",
    },
    {
      id: "dropdown-megamenu-inner-2",
      trigger: {
        label: "Base Category Item",
        path: "/example.html",
      },
      items: [
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
        {
          label: "Base Sub Category Item",
          path: "/example.html",
        },
      ],
    },
    {
      label: "Base Category Item",
      path: "/example.html",
    },
    {
      label: "Base Category Item",
      path: "/example.html",
    },
    {
      label: "Base Category Item",
      path: "/example.html",
    },
  ],
};

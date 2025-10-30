const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  collapse_id: "navbar",
  brand: {
    label: "Navbar",
    link: "/example.html",
  },
  navigation: {
    navbar: true,
    attributes: new DrupalAttribute().addClass("me-auto"),
    items: [
      {
        mega_menu: true,
        icon_path: "/icons.svg",
        id: "dropdown-megamenu",
        trigger: {
          label: "A link with dropdown",
        },
        id: "dropdown-megamenu",
        content_link: {
          label: "Discover more",
          path: "/example.html",
          icon: {
            name: "arrow-right",
          },
        },
        see_all: {
          label: "See all",
          path: "/example.html",
        },
        content_block:
          "<h4>About the European Commission</h4><p>Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
        items: [
          {
            id: "dropdown-megamenu-inner",
            trigger: {
              id: "custom-trigger-mm-1",
              label: "Base Category Item",
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
              id: "custom-trigger-mm-2",
              label: "Base Category Item",
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
      },
      {
        label: "I'm a link",
        path: "#first",
      },
      {
        label: "I'm a link 2",
        path: "/example.html",
      },
      {
        label: "I'm a link 3",
        path: "/example.html",
      },
      {
        id: "dropdown-1",
        dropdown: true,
        trigger: {
          label: "Dropdown Toggle",
        },
        items: [
          {
            label: "I'm a link",
            path: "/example.html",
          },
          {
            label: "I'm a button",
            button: true,
          },
          {
            divider: true,
          },
          {
            label: "I'm a disabled button",
            button: true,
            disabled: true,
          },
          {
            label: "I'm a active button",
            button: true,
            active: true,
          },
        ],
      },
    ],
  },
};

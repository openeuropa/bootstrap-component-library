const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  navbar_id: "header-navbar",
  color_set: "dark",
  collapse_id: "navbarNavDropdown",
  attributes: new DrupalAttribute()
    .setAttribute("aria-label", "Main Navigation")
    .addClass("bcl-header__navbar"),
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
              id: "custom-trigger-mm-1",
              label: "Base Category Item",
              attributes: new DrupalAttribute().addClass("active"),
            },
            see_all: {
              label: "See all",
              path: "/example.html",
            },
            items: [
              {
                label: "Base Sub Category Item",
                path: "/example.html",
                attributes: new DrupalAttribute().addClass("active"),
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
          },
          {
            id: "dropdown-megamenu-inner-2",
            trigger: {
              label: "Base Category Item",
              path: "/example.html",
              id: "custom-trigger-mm-2",
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
        label: "Home",
        path: "/example.html",
        active: true,
        attributes: new DrupalAttribute().setAttribute("aria-current", "page"),
      },
      {
        label: "Item 01",
        path: "/example.html",
      },
      {
        label: "Item 02",
        path: "/example.html",
      },
      {
        id: "navbarDropdownMenuLink",
        dropdown: true,
        trigger: {
          label: "Dropdown link",
        },
        items: [
          {
            label: "Action",
            path: "/example.html",
          },
          {
            label: "Another action",
            path: "/example.html",
          },
          {
            label: "Something else here",
            path: "/example.html",
          },
          {
            label:
              "Very long label with custom text and custom link as an example",
            path: "/example.html",
          },
        ],
      },
    ],
  },
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  color_set: "dark",
  collapse_id: "navbarNavDropdown",
  attributes: new drupalAttribute()
    .addClass("bcl-header__navbar")
    .setAttribute("aria-label", "Main Navigation"),
  navigation: {
    navbar: true,
    attributes: new drupalAttribute().addClass("me-auto"),
    items: [
      {
        mega_menu: true,
        link: true,
        icon_path: "/icons.svg",
        id: "dropdown-megamenu",
        trigger: {
          label: "A link with dropdown",
          path: "/example.html",
          attributes: new drupalAttribute().addClass("nav-link"),
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
          "<h4>Mega Menu Content Title</h4><p>Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
        items: [
          {
            id: "dropdown-megamenu-inner",
            trigger: {
              label: "Base Category Item",
              path: "/example.html",
            },
            see_all: {
              label: "See all",
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
            collapse:
              "<a href='#' class='mb-3 d-block'> Example link</a><img src='https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' alt='image'>",
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
        label: "Home",
        path: "/example.html",
        active: true,
        attributes: new drupalAttribute().setAttribute("aria-current", "page"),
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
        link: true,
        dropdown: true,
        trigger: {
          label: "Dropdown link",
          path: "#",
          attributes: new drupalAttribute().addClass("nav-link"),
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

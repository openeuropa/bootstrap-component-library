const drupalAttribute = require("drupal-attribute");

module.exports = {
  color_set: "dark",
  collapse_id: "navbarNavDropdown",
  attributes: new drupalAttribute()
    .addClass("bcl-header__navbar")
    .setAttribute("aria-label", "Main Navigation"),
  form: {
    attributes: new drupalAttribute().addClass(["d-flex", "mt-3", "mt-lg-0"]),
    submit: {
      variant: "light",
      assistive_text: "search",
      icon: {
        name: "search",
        size: "xs",
        path: "/icons.svg",
      },
      attributes: new drupalAttribute().addClass([
        "border-start-0",
        "rounded-0",
        "rounded-end",
      ]),
    },
    items: [
      [
        {
          type: "text",
          required: true,
          label: "Search",
          hidden_label: true,
          placeholder: "Search",
          id: "inlineFormInputGroupSearch",
          attributes: new drupalAttribute().addClass([
            "border-start-0",
            "rounded-0",
            "rounded-start",
          ]),
        },
      ],
    ],
  },
  navigation: {
    navbar: true,
    attributes: new drupalAttribute().addClass("me-auto"),
    items: [
      {
        mega_menu: true,
        link: true,
        id: "dropdown-megamenu",
        trigger: {
          label: "A link with mega menu",
          path: "/example.html",
          attributes: new drupalAttribute().addClass("nav-link"),
        },
        content_block:
          "<h4>Mega Menu Content Title</h4><p>Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
        items: [
          {
            id: "dropdown-inner-megamenu",
            trigger: {
              label: "A link with dropdown",
              path: "/example.html",
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
            ],
          },
          {
            label: "A simple link!",
            path: "/example.html",
          },
          {
            id: "dropdown-inner-megamenu-2",
            trigger: {
              label: "A link with dropdown and column",
              path: "/example.html",
            },
            collapse:
              "<a href='#' class='mb-3 d-block'> Example link</a><img src='https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' alt='image'>",
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
                label: "I'm a disabled button",
                button: true,
                disabled: true,
              },
              {
                label: "I'm a active button",
                button: true,
              },
            ],
          },
          {
            label: "A simple link!",
            path: "/example.html",
          },
          {
            label: "A simple link!",
            path: "/example.html",
          },
          {
            label: "A simple link!",
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

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

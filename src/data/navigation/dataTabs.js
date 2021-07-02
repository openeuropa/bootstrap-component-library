const drupalAttribute = require("drupal-attribute");

module.exports = {
  tabs: true,
  tabs_content: true,
  items: [
    {
      label: "I'm a link",
      path: "#first",
      content:
        "This is a demo content for the First Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "first-tab",
      target: "first",
      extra_attributes: [
        {
          name: "data-bs-toggle",
          value: "tab",
        },
        {
          name: "role",
          value: "button",
        },
        {
          name: "aria-controls",
          value: "first",
        },
      ],
    },
    {
      label: "I'm a button",
      button: true,
      content:
        "This is a demo content for the Second Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "second-tab",
      target: "second",
      attributes: new drupalAttribute()
        .setAttribute("data-bs-toggle", "tab")
        .setAttribute("autocomplete", "off")
        .setAttribute("data-bs-target", "#second")
        .setAttribute("aria-controls", "second")
        .addClass(["nav-link"]),
    },
    {
      label: "I'm a disabled button",
      button: true,
      disabled: true,
      content:
        "This is a demo content for the Third Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "third-tab",
      target: "third",
      attributes: new drupalAttribute()
        .setAttribute("data-bs-toggle", "tab")
        .setAttribute("autocomplete", "off")
        .setAttribute("data-bs-target", "#third")
        .setAttribute("aria-controls", "third")
        .addClass(["nav-link"]),
    },
    {
      id: "dropdown-1",
      link: true,
      dropdown: true,
      trigger: {
        label: "Dropdown Toggle",
        extra_classes: "nav-link",
        path: "#",
        extra_attributes: [
          {
            name: "aria-expanded",
            value: "false",
          },
          {
            name: "autocomplete",
            value: "off",
          },
          {
            name: "data-bs-toggle",
            value: "dropdown",
          },
        ],
      },
      items: [
        {
          label: "I'm a link",
          path: "/example.html",
        },
        {
          label: "I'm a button",
          button: true,
          attributes: new drupalAttribute().addClass(["dropdown-item"]),
        },
        {
          divider: true,
        },
        {
          label: "I'm a disabled button",
          button: true,
          disabled: true,
          attributes: new drupalAttribute().addClass(["dropdown-item"]),
        },
        {
          label: "I'm a active button",
          button: true,
          active: true,
          attributes: new drupalAttribute().addClass([
            "dropdown-item",
            "active",
          ]),
        },
      ],
    },
    {
      label: "I'm a active button",
      button: true,
      active: true,
      content:
        "This is a demo content for the Fourth Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "fourth-tab",
      target: "fourth",
      attributes: new drupalAttribute()
        .setAttribute("aria-controls", "fourth")
        .setAttribute("data-bs-toggle", "tab")
        .setAttribute("autocomplete", "off")
        .setAttribute("data-bs-target", "#fourth")
        .setAttribute("aria-controls", "fourth")
        .addClass(["nav-link", "active"]),
    },
  ],
};

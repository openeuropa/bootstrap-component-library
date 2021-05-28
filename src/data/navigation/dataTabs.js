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
      extra_attributes: [
        {
          name: "data-bs-toggle",
          value: "tab",
        },
        {
          name: "autocomplete",
          value: "off",
        },
        {
          name: "data-bs-target",
          value: "#second",
        },
        {
          name: "aria-controls",
          value: "second",
        },
      ],
    },
    {
      label: "I'm a disabled button",
      button: true,
      disabled: true,
      content:
        "This is a demo content for the Third Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "third-tab",
      target: "third",
      extra_attributes: [
        {
          name: "data-bs-toggle",
          value: "tab",
        },
        {
          name: "autocomplete",
          value: "off",
        },
        {
          name: "data-bs-target",
          value: "#third",
        },
        {
          name: "aria-controls",
          value: "third",
        },
      ],
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
    {
      label: "I'm a active button",
      button: true,
      active: true,
      content:
        "This is a demo content for the Fourth Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "fourth-tab",
      target: "fourth",
      extra_attributes: [
        {
          name: "data-bs-toggle",
          value: "tab",
        },
        {
          name: "autocomplete",
          value: "off",
        },
        {
          name: "data-bs-target",
          value: "#fourth",
        },
        {
          name: "aria-controls",
          value: "fourth",
        },
      ],
    },
  ],
};

module.exports = {
  tabs: true,
  tabs_content: true,
  items: [
    {
      label: "I'm a link",
      toggle_type: "tab",
      toggle: true,
      path: "#",
      content:
        "This is a demo content for the First Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "first-tab",
      target: "first",
    },
    {
      label: "I'm a button",
      button: true,
      toggle_type: "tab",
      toggle: true,
      content:
        "This is a demo content for the Second Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "second-tab",
      target: "second",
    },
    {
      label: "I'm a disabled button",
      button: true,
      toggle_type: "tab",
      toggle: true,
      disabled: true,
      content:
        "This is a demo content for the Third Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "third-tab",
      target: "third",
    },
    {
      id: "dropdown-1",
      link: true,
      dropdown: true,
      trigger: {
        label: "Dropdown Toggle",
        extra_classes: "nav-link",
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
      toggle_type: "tab",
      toggle: true,
      content:
        "This is a demo content for the Fourth Tab. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "fourth-tab",
      target: "fourth",
    },
  ],
};

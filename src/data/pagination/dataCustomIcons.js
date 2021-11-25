const drupalAttribute = require("drupal-attribute");

module.exports = {
  aria_label: "Test aria label",
  enable_icon: true,
  attributes: new drupalAttribute(),
  prev: {
    label: "Previous",
    path: "#",
    icon: {
      name: "arrow-left-short",
      path: "/icons.svg",
    },
  },
  next: {
    label: "Next",
    path: "#",
    icon: {
      name: "arrow-right-short",
      path: "/icons.svg",
    },
  },
  items: [
    {
      label: "1",
      path: "#",
      disabled: true,
    },
    {
      label: "2",
      path: "#",
      active: true,
    },
    {
      label: "3",
      path: "#",
    },
  ],
};

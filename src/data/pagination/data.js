const drupalAttribute = require("drupal-attribute");

module.exports = {
  aria_label: "Test aria label",
  attributes: new drupalAttribute(),
  prev: {
    label: "Previous",
    path: "#",
  },
  next: {
    label: "Next",
    path: "#",
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

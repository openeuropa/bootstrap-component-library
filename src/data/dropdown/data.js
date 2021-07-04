const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "dropdown-1",
  trigger: {
    label: "Dropdown Toggle",
    path: "#",
  },
  items: [
    {
      label: "I'm a link",
      path: "#",
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
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "dropdown-1",
  trigger: {
    label: "Dropdown Toggle",
    path: "#",
    attributes: new drupalAttribute(),
  },
  items: [
    {
      label: "I'm a link",
      path: "#",
    },
    {
      label: "I'm a button",
      button: true,
      attributes: new drupalAttribute(),
    },
    {
      divider: true,
    },
    {
      label: "I'm a disabled button",
      button: true,
      disabled: true,
      attributes: new drupalAttribute(),
    },
    {
      label: "I'm a active button",
      button: true,
      active: true,
      attributes: new drupalAttribute(),
    },
  ],
};

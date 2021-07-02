const drupalAttribute = require("drupal-attribute");

module.exports = {
  items: [
    {
      label: "Button 1",
      disabled: true,
      button: true,
      attributes: new drupalAttribute(),
    },
    {
      path: "/test-path",
      label: "Link 1",
      target: "_blank",
    },
    {
      label: "Button 2",
      button: true,
      attributes: new drupalAttribute(),
    },
    {
      path: "/test-path-2",
      label: "Link 2",
      target: "_blank",
      extra_classes: "list-group-item-success",
    },
  ],
};

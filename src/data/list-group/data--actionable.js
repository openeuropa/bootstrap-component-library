const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  type: "actionable",
  items: [
    {
      label: "Button 1",
      disabled: true,
      button: true,
    },
    {
      path: "/test-path",
      label: "Link 1",
      target: "_blank",
    },
    {
      label: "Button 2",
      button: true,
    },
    {
      path: "/test-path-2",
      label: "Link 2",
      target: "_blank",
      attributes: new DrupalAttribute().addClass(["list-group-item-success"]),
    },
  ],
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  action_button: {
    label: "Action button",
    variant: "secondary",
    attributes: new drupalAttribute().addClass("mb-3"),
  },
};

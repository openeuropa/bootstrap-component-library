const drupalAttribute = require("drupal-attribute");

module.exports = {
  label: "Label",
  show_spinner: true,
  attributes: new drupalAttribute(),
  spinner: {
    variant: "info",
    small: true,
    assistive_text: "Loading...",
    attributes: new drupalAttribute().addClass("me-1"),
  },
};

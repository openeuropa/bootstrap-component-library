const drupalAttribute = require("drupal-attribute");

module.exports = {
  label: "Label",
  show_spinner: true,
  spinner: {
    size: "sm",
    assistive_text: "Loading...",
    attributes: new drupalAttribute().addClass("me-1"),
  },
};

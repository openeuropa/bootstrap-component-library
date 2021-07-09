const drupalAttribute = require("drupal-attribute");

module.exports = {
  required: false,
  label: "Example textarea",
  readonly: false,
  placeholder: "Text here",
  id: "example-textarea-1",
  size: "sm",
  helper_text: "An helper text",
  attributes: new drupalAttribute(),
};

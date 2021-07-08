const drupalAttribute = require("drupal-attribute");

module.exports = {
  required: false,
  label: "Example form input",
  readonly: false,
  invalid: false,
  id: "example-form-input-1",
  size: "sm",
  helper_text: "Helper text for the form input",
  helper_text_id: "helperText",
  attributes: new drupalAttribute(),
};

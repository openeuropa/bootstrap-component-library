const drupalAttribute = require("drupal-attribute");

module.exports = {
  label: "Button with tooltip",
  attributes: new drupalAttribute()
    .setAttribute("autocomplete", "off")
    .setAttribute("data-bs-toggle", "tooltip")
    .setAttribute("title", "This is a tooltip"),
};

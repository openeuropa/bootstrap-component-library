const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  label: "Button with tooltip",
  attributes: new DrupalAttribute()
    .setAttribute("autocomplete", "off")
    .setAttribute("data-bs-toggle", "tooltip")
    .setAttribute("title", "This is a tooltip"),
};

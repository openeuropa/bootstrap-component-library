const drupalAttribute = require("drupal-attribute");

module.exports = {
  label: "A link with tooltip",
  path: "/example.html",
  attributes: new drupalAttribute()
    .setAttribute("title", "This is a tooltip")
    .setAttribute("data-bs-placement", "bottom")
    .setAttribute("data-bs-toggle", "tooltip")
    .setAttribute("role", "button"),
};

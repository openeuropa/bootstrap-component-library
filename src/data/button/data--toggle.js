const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  label: "Button with collapse",
  attributes: new drupalAttribute()
    .setAttribute("data-bs-toggle", "collapse")
    .setAttribute("autocomplete", "off")
    .setAttribute("aria-expanded", "false")
    .setAttribute("aria-controls", "collapseExample")
    .setAttribute("data-bs-target", "#collapseExample"),
  collapse_text: getDummyText(3),
};

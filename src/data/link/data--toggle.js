const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  label: "I am a link",
  path: "#collapseExample",
  attributes: new drupalAttribute()
    .setAttribute("aria-controls", "collapseExample")
    .setAttribute("aria-expanded", "false")
    .setAttribute("data-bs-toggle", "collapse")
    .setAttribute("role", "button"),
  collapse_text: getDummyText(4),
};

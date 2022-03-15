const drupalAttribute = require("drupal-attribute");

module.exports = {
  label: "I am a link",
  path: "#collapseExample",
  attributes: new drupalAttribute()
    .setAttribute("aria-controls", "collapseExample")
    .setAttribute("aria-expanded", "false")
    .setAttribute("data-bs-toggle", "collapse")
    .setAttribute("role", "button"),
  collapse_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  label: "Button with collapse",
  attributes: new drupalAttribute()
              .setAttribute('data-bs-toggle', 'collapse')
              .setAttribute('autocomplete', 'off')
              .setAttribute('aria-expanded', 'false')
              .setAttribute('aria-controls', 'collapseExample')
              .setAttribute('data-bs-target', '#collapseExample')
              .setAttribute('type', 'button'),
  collapse_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

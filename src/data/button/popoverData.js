const drupalAttribute = require("drupal-attribute");

module.exports = {
  label: "Button with popover",
  attributes: new drupalAttribute()
              .setAttribute('data-bs-toggle', 'popover')
              .setAttribute('autocomplete', 'off')
              .setAttribute('data-bs-trigger', 'focus')
              .setAttribute('data-bs-placement', 'top')
              .setAttribute('data-bs-content', 'This is a popover')
              .setAttribute('title', 'This is a title of popover')
              .setAttribute('type', 'button'),
};

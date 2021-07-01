const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "dropdown-1",
  trigger: {
    label: "Dropdown Toggle",
    path: "#",
    attributes: new drupalAttribute()
                .addClass('dropdown-toggle')
                .setAttribute('aria-expanded', 'false')
                .setAttribute('autocomplete', 'off')
                .setAttribute('data-bs-toggle', 'dropdown')
                .setAttribute('id', 'dropdown-1')
                .setAttribute('type', 'button'),
  },
  items: [
    {
      label: "I'm a link",
      path: "#",
    },
    {
      label: "I'm a button",
      button: true,
      attributes: new drupalAttribute()
                  .addClass('dropdown-item')
                  .setAttribute('type', 'button'),
    },
    {
      divider: true,
    },
    {
      label: "I'm a disabled button",
      button: true,
      disabled: true,
      attributes: new drupalAttribute()
                  .addClass('dropdown-item')
                  .setAttribute('aria-disabled', 'true')
                  .setAttribute('type', 'button')
                  .setAttribute('disabled', 'true'),
    },
    {
      label: "I'm a active button",
      button: true,
      active: true,
      attributes: new drupalAttribute()
                  .addClass('dropdown-item active')
                  .setAttribute('type', 'button'),
    },
  ],
};

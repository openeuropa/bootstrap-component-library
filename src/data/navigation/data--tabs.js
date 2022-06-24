const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  tabs: true,
  nav: true,
  tabs_content: true,
  items: [
    {
      label: "I'm a link",
      path: "#first",
      content: `<p class="mt-4">This is a demo content for the First Tab. ${getDummyText()}</p>`,
      id: "first-tab",
      target: "first",
      attributes: new drupalAttribute()
        .setAttribute("data-bs-toggle", "tab")
        .setAttribute("role", "button")
        .setAttribute("aria-controls", "first"),
    },
    {
      label: "I'm a button",
      button: true,
      content: `<p class="mt-4">This is a demo content for the Second Tab. ${getDummyText()}</p>`,
      id: "second-tab",
      target: "second",
      attributes: new drupalAttribute()
        .setAttribute("data-bs-toggle", "tab")
        .setAttribute("autocomplete", "off")
        .setAttribute("data-bs-target", "#second")
        .setAttribute("aria-controls", "second"),
    },
    {
      label: "I'm a disabled button",
      button: true,
      disabled: true,
      content: `<p class="mt-4">This is a demo content for the Third Tab.</p>${getDummyText()}</p>`,
      id: "third-tab",
      target: "third",
      attributes: new drupalAttribute()
        .setAttribute("data-bs-toggle", "tab")
        .setAttribute("autocomplete", "off")
        .setAttribute("data-bs-target", "#third")
        .setAttribute("aria-controls", "third"),
    },
    {
      label: "I'm a active button",
      button: true,
      active: true,
      content: `<p class="mt-4">This is a demo content for the Fourth Tab. ${getDummyText()}</p>`,
      id: "fourth-tab",
      target: "fourth",
      attributes: new drupalAttribute()
        .setAttribute("aria-controls", "fourth")
        .setAttribute("data-bs-toggle", "tab")
        .setAttribute("autocomplete", "off")
        .setAttribute("data-bs-target", "#fourth")
        .setAttribute("aria-controls", "fourth")
        .addClass(["nav-link", "active"]),
    },
  ],
};

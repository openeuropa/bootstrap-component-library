const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  label: "Filter options",
  type: "button",
  size: "lg",
  variant: "light",
  attributes: new DrupalAttribute()
    .addClass(["d-lg-none", "w-100", "mb-4"])
    .setAttribute("data-bs-toggle", "offcanvas")
    .setAttribute("data-bs-target", "#bcl-offcanvas")
    .setAttribute("aria-controls", "bcl-offcanvas"),
  icon_position: "before",
  icon: {
    name: "filter",
    path: "/icons.svg",
    attributes: new DrupalAttribute().addClass(["me-2"]),
  },
};

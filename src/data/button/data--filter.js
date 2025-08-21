import drupalAttribute from "drupal-attribute";

const data = {
  label: "Filter options",
  type: "button",
  size: "lg",
  variant: "light",
  attributes: new drupalAttribute()
    .addClass(["d-lg-none", "w-100", "mb-4"])
    .setAttribute("data-bs-toggle", "offcanvas")
    .setAttribute("data-bs-target", "#bcl-offcanvas")
    .setAttribute("aria-controls", "bcl-offcanvas"),
  icon_position: "before",
  icon: {
    name: "filter",
    path: "/icons.svg",
    attributes: new drupalAttribute().addClass(["me-2"]),
  },
};

export default data;

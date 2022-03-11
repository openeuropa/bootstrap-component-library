const drupalAttribute = require("drupal-attribute");

module.exports = {
  pagination: {
    attributes: new drupalAttribute().addClass(["mt-4-5", "mb-5"]),
    alignment: "center",
    prev: {
      label: "Previous",
      path: "#",
    },
    next: {
      label: "Next",
      path: "#",
    },
    items: [
      {
        label: "1",
        path: "#",
        active: true,
      },
      {
        label: "2",
        path: "#",
      },
      {
        label: "3",
        path: "#",
      },
      {
        label: "4",
        path: "#",
      },
      {
        label: "5",
        path: "#",
      },
    ],
  },
  filter_button: {
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
  },
  sort_select: {
    label: "Sort&nbsp;by",
    attributes: new drupalAttribute().addClass("mb-4 mb-md-0 ms-md-4"),
    aria_label: "sort-select",
    label_extra_classes: "mb-0",
    options: [
      { value: 1, label: "a select option" },
      { value: 2, label: "another select option" },
      { value: 3, label: "another option" },
      { value: 4, label: "last option" },
      { label: "A-Z", selected: true },
    ],
  },
};

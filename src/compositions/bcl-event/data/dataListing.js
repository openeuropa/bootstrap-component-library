const drupalAttribute = require("drupal-attribute");

module.exports = {
  page_title: "Event",
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("bcl-offcanvas offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "p-lg-0",
    with_body_scroll: true,
    title: {
      label: "Filter options",
      heading: 4,
      extra_classes: "mb-lg-4",
      id: "offcanvasExampleLabel",
    },
    search_form: {
      attributes: new drupalAttribute()
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      items: [
        [
          {
            classes: "mb-4",
            label: "Type",
            type: "select",
            attributes: new drupalAttribute(),
            options: [
              { value: 1, label: "a select option" },
              { value: 2, label: "another select option" },
              { value: 3, label: "another option" },
              { value: 4, label: "last option" },
              { label: "Culture", selected: true },
            ],
          },
        ],
        [
          {
            classes: "mb-4",
            label: "Location",
            type: "select",
            attributes: new drupalAttribute(),
            options: [
              { value: 1, label: "a select option" },
              { value: 2, label: "another select option" },
              { value: 3, label: "another option" },
              { value: 4, label: "last option" },
              { label: "Placeholder", selected: true },
            ],
          },
        ],
        [
          {
            type: "fieldset",
            legend: "Start date",
            legend_classes: "col-form-label",
          },
          {
            input_type: "date",
            attributes: new drupalAttribute().addClass("mb-4"),
          },
        ],
        [
          {
            type: "fieldset",
            legend: "End date",
            fieldset_classes: "mb-4",
            legend_classes: "col-form-label",
          },
          {
            input_type: "date",
          },
        ],
      ],
      submit: {
        multiple: true,
        wrapper: "mt-4 d-grid gap-4 d-md-block",
        items: [
          {
            label: "Refine",
            type: "submit",
            variant: "primary",
            attributes: new drupalAttribute().addClass("me-md-3"),
          },
          {
            label: "Clear",
            type: "submit",
            variant: "light",
          },
        ],
      },
    },
  },
  pagination: {
    attributes: new drupalAttribute().addClass(["mt-4"]),
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
        disabled: true,
      },
      {
        label: "2",
        path: "#",
        active: true,
      },
      {
        label: "3",
        path: "#",
      },
    ],
  },
  filter_button: {
    label: "Filter options",
    type: "button",
    variant: "light",
    size: "lg",
    attributes: new drupalAttribute()
      .addClass(["d-md-none", "w-100", "mb-4"])
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
  badges: [
    {
      label: "Culture",
      background: "light",
      icons_path: "/icons.svg",
      dismissible: true,
      attributes: new drupalAttribute().addClass(["me-2"]),
    },
    {
      label: "Barcelona",
      background: "light",
      icons_path: "/icons.svg",
      dismissible: true,
      attributes: new drupalAttribute().addClass(["me-2"]),
    },
  ],
  sort_select: {
    label: "Sort&nbsp;by",
    attributes: new drupalAttribute().addClass("mb-4 mb-md-0"),
    options: [
      { value: 1, label: "a select option" },
      { value: 2, label: "another select option" },
      { value: 3, label: "another option" },
      { value: 4, label: "last option" },
      { label: "Name", selected: true },
    ],
  },
};

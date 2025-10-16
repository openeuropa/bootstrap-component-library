const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new DrupalAttribute().addClass("offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "p-lg-0",
    close_aria_label: "Close button",
    with_body_scroll: true,
    title: "Filter options",
    title_attributes: new DrupalAttribute().addClass("mb-lg-4"),
    search_form: {
      attributes: new DrupalAttribute()
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      items: [
        [
          {
            label: "Keyword",
            id: "keyword",
            input_type: "text",
            placeholder: "Type a keyword",
            attributes: new DrupalAttribute().addClass("mb-3"),
          },
        ],
        [
          {
            classes: "mb-3",
            label: "Type",
            type: "select",
            id: "type",
            multiple: true,
            options: [
              { value: 1, label: "a select option" },
              { value: 2, label: "another select option" },
              { value: 3, label: "another option" },
              { value: 4, label: "last option" },
              { label: "Culture", selected: true },
            ],
            attributes: new DrupalAttribute().addClass("multiselect"),
          },
        ],
        [
          {
            classes: "mb-3",
            label: "Location",
            type: "select",
            id: "location",
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
            label: "Start date",
            input_type: "date",
            attributes: new DrupalAttribute().addClass("mb-2"),
            id: "creation-date-from",
            wrapper_classes: "mb-3",
          },
        ],
        [
          {
            input_type: "date",
            label: "End date",
            wrapper_classes: "mb-3",
            attributes: new DrupalAttribute().addClass("mb-4-5"),
            id: "creation-date-to",
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
            attributes: new DrupalAttribute().addClass("me-md-3"),
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
  badges: [
    {
      label: "Culture",
      background: "light",
      icon_path: "/icons.svg",
      dismissible: true,
      attributes: new DrupalAttribute().addClass(["me-2"]),
    },
    {
      label: "Barcelona",
      background: "light",
      icon_path: "/icons.svg",
      dismissible: true,
      attributes: new DrupalAttribute().addClass(["me-2"]),
    },
  ],
};

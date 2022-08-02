const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "p-lg-0",
    with_body_scroll: true,
    responsiveness: "lg",
    title: "Filter options",
    title_attributes: new drupalAttribute().addClass("mb-lg-4"),
    search_form: {
      attributes: new drupalAttribute()
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      items: [
        [
          {
            classes: "mb-3",
            label: "Name",
            input_type: "text",
            placeholder: "Placeholder",
          },
        ],
        [
          {
            classes: "mb-3",
            label: "Organisation",
            input_type: "text",
            placeholder: "Placeholder",
          },
        ],
      ],
      submit: {
        multiple: true,
        wrapper: "mt-4",
        items: [
          {
            label: "Refine",
            type: "submit",
            variant: "primary",
            attributes: new drupalAttribute().addClass("me-2"),
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
      label: "Name",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2"]),
    },
    {
      label: "Organisation",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2"]),
    },
  ],
};

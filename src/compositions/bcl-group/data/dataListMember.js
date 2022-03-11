const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("bcl-offcanvas offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "pb-2-5 p-lg-0",
    with_body_scroll: true,
    title: {
      label: "Filter options",
      heading: 4,
      extra_classes: "mb-lg-4",
    },
    search_form: {
      attributes: new drupalAttribute()
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      items: [
        [
          {
            type: "fieldset",
            classes: "col-sm-10",
            legend: "Search by name",
            fieldset_classes: "mb-3",
            legend_classes: "col-form-label",
          },
          {
            classes: "mb-3",
            input_type: "text",
            placeholder: "Name",
          },
        ],
        [
          {
            type: "fieldset",
            classes: "col-sm-10",
            legend: "Search by email",
            fieldset_classes: "mb-3",
            legend_classes: "col-form-label",
          },
          {
            classes: "mb-3",
            input_type: "text",
            placeholder: "Email",
          },
        ],
      ],
      submit: {
        multiple: true,
        wrapper: "mt-4 d-grid d-md-block",
        items: [
          {
            label: "Refine",
            type: "submit",
            variant: "primary",
            attributes: new drupalAttribute().addClass([
              "me-md-3",
              "mb-3-5",
              "mb-md-0",
            ]),
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
};

import drupalAttribute from "drupal-attribute";

const data = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "p-lg-0",
    close_aria_label: "Close button",
    with_body_scroll: true,
    title: "Filter options",
    title_attributes: new drupalAttribute().addClass("mb-lg-4"),
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
        [
          {
            classes: "mt-4",
            input_type: "checkbox",
            label: "Group Contacts",
            id: "group-filter",
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

export default data;

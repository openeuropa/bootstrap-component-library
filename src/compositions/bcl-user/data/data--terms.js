import drupalAttribute from "drupal-attribute";

const data = {
  terms_form: {
    attributes: new drupalAttribute()
      .setAttribute("novalidate", true)
      .setAttribute("onsubmit", "return false;"),
    submit: {
      label: "Save",
      type: "submit",
      variant: "primary",
      wrapper: "mt-4-5 d-grid d-sm-block",
    },
    items: [
      [
        {
          input_type: "checkbox",
          wrapper_classes: "mb-3",
          required: true,
          label: "Accept terms and conditions of use",
          id: "terms",
        },
      ],
    ],
  },
};

export default data;

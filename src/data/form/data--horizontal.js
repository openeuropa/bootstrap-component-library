const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().setAttribute("onsubmit", "return false;"),
  submit: {
    wrapper: "col-12",
    label: "Sign in",
    type: "submit",
    variant: "primary",
  },
  items: [
    [
      {
        classes: "row mb-3",
        horizontal: true,
        horizontal_class: "col-sm-10",
        horizontal_label_class: "col-sm-2",
        input_type: "email",
        required: true,
        label: "Email address",
        id: "exampleInputEmail1",
      },
    ],
    [
      {
        classes: "row mb-3",
        horizontal: true,
        horizontal_class: "col-sm-10",
        horizontal_label_class: "col-sm-2",
        input_type: "password",
        required: true,
        label: "Password",
        id: "exampleInputPassword1",
      },
    ],
    [
      {
        type: "fieldset",
        classes: "col-sm-10",
        legend: "Radios",
        fieldset_classes: "row mb-3",
        legend_classes: "col-form-label col-sm-2 pt-0",
      },
      {
        input_type: "radio",
        label: "First radio",
        id: "exampleInputRadios1",
        value: "option1",
      },
      {
        input_type: "radio",
        label: "Second radio",
        id: "exampleInputRadios2",
        value: "option2",
      },
      {
        input_type: "radio",
        label: "Third radio",
        id: "exampleInputRadios3",
        disabled: true,
        value: "option3",
        end_fieldset: true,
      },
    ],
    [
      {
        input_type: "checkbox",
        wrapper_classes: "col-sm-10 offset-sm-2",
        classes: "row mb-3",
        required: true,
        label: "Example checkbox",
        id: "exampleInputCheck1",
      },
    ],
  ],
};

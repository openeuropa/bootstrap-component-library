const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass([
    "row",
    "row-cols-lg-auto",
    "g-3",
    "align-items-center",
  ])
  .addClass("needs-validation")
  .setAttribute("novalidate", true),
  submit: {
    wrapper: "col-12",
    label: "Submit",
    type: "submit",
    variant: "primary",
  },
  items: [
    [
      {
        wrapper_classes: "col-12",
        input_type: "text",
        required: true,
        label: "Username",
        hidden_label: true,
        placeholder: "Username",
        id: "inlineFormInputGroupUsername",
      },
      {
        wrapper_classes: "col-12",
        type: "select",
        required: true,
        label: "Preference",
        hidden_label: true,
        options: [
          { selected: true, label: "Choose" },
          { value: 1, label: "One" },
          { value: 2, label: "Two" },
          { value: 3, label: "Three" },
        ],
        id: "inlineFormSelectPref",
      },
      {
        input_type: "checkbox",
        wrapper_classes: "col-12",
        required: true,
        label: "Remember me *",
        id: "exampleInputCheck1",
      },
    ],
  ],
};

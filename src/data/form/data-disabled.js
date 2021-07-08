const drupalAttribute = require("drupal-attribute");

module.exports = {
  submit: {
    label: "Submit",
    type: "submit",
    variant: "primary",
    attributes: new drupalAttribute(),
  },
  items: [
    [
      {
        type: "fieldset",
        legend: "Disabled fieldset example",
        disabled: true,
      },
      {
        wrapper_classes: "mb-3",
        required: true,
        label: "Disabled input",
        id: "disabledTextInput",
        placeholder: "Disabled input",
        helper_text: "Helper text for the form input",
        helper_text_id: "helperText",
        attributes: new drupalAttribute(),
      },
      {
        wrapper_classes: "mb-3",
        type: "select",
        id: "disabledSelect",
        size: "md",
        helper_text: "Helper text for the select element",
        helper_text_id: "helperText",
        options: [
          { value: 1, label: "a select option" },
          { value: 2, label: "another select option" },
          { value: 3, label: "another option" },
          { value: 4, label: "last option" },
          { label: "the selected option", selected: true },
        ],
        attributes: new drupalAttribute(),
      },
      {
        type: "checkbox",
        wrapper_classes: "mb-3",
        label: "Can't check this",
        id: "disabledFieldsetCheck",
        attributes: new drupalAttribute(),
      },
    ],
  ],
};

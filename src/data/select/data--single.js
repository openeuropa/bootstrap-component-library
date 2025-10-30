const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  id: "singleselect-1",
  clean_class: true,
  required: true,
  size: "md",
  label: "A single select form element",
  helper_text: "Helper text for the select element",
  helper_text_id: "helperText",
  invalid_feedback: "Invalid feedback example",
  valid_feedback: "Valid feedback example",
  placeholder: "Please select a value",
  options: [
    {
      optgroup: true,
      label: "Group 1",
      options: [
        { value: 1, label: "Option group 1" },
        { value: 2, label: "Option group 2" },
        { value: 3, label: "Option group 3" },
      ],
    },
    { value: 5, label: "a select option" },
    { value: 6, label: "another select option" },
    { value: 7, label: "another option" },
    { value: 8, label: "last option" },
  ],
  attributes: new DrupalAttribute().addClass("single-select form-select"),
};

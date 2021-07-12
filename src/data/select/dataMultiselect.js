const drupalAttribute = require("drupal-attribute");

module.exports = {
  multiple: true,
  clean_class: true,
  required: true,
  helper_text: "Helper text for the select element",
  helper_text_id: "helperText",
  selectByGroup: true,
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
    { value: 1, label: "a select option" },
    { value: 2, label: "another select option" },
    { value: 3, label: "another option" },
    { value: 4, label: "last option" },
    { label: "the selected option", selected: true },
  ],
  attributes: new drupalAttribute().addClass("multi-select"),
};

module.exports = {
  id: "select-1",
  label: "A select form element",
  required: true,
  helper_text: "Helper text for the select element",
  helper_text_id: "helperText",
  invalid_feedback: "Invalid feedback example",
  valid_feedback: "Valid feedback example",
  options: [
    { value: 1, label: "a select option" },
    { value: 2, label: "another select option" },
    { value: 3, label: "another option" },
    { value: 4, label: "last option" },
    { label: "the selected option", selected: true },
  ],
};

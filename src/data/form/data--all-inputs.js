const { DrupalAttribute } = require("drupal-attribute");

const singleSelectOptions = [
  { value: "", label: "Choose an option", hidden: true },
  { value: "option-1", label: "First option" },
  { value: "option-2", label: "Second option", selected: true },
  { value: "option-3", label: "Third option" },
];

const multiSelectOptions = [
  { value: "alpha", label: "Alpha" },
  { value: "beta", label: "Beta", selected: true },
  { value: "gamma", label: "Gamma", selected: true },
  { value: "delta", label: "Delta" },
];

const buildRadioAttributes = () =>
  new DrupalAttribute().setAttribute("name", "validRadios");

module.exports = {
  attributes: new DrupalAttribute()
    .addClass(["needs-validation", "row", "gy-4"])
    .setAttribute("novalidate", true)
    .setAttribute("onsubmit", "return false;"),
  items: [
    [
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "text",
        label: "Text input",
        id: "validTextInput",
        placeholder: "Type something",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "text",
        label: "Text input",
        id: "validTextInput",
        valid: true,
        placeholder: "Type something",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "email",
        label: "Email input",
        id: "validEmailInput",
        invalid: true,
        placeholder: "name@example.com",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "password",
        label: "Password input",
        id: "validPasswordInput",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "search",
        label: "Search input",
        id: "validSearchInput",
        placeholder: "Search term",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "tel",
        label: "Telephone input",
        id: "validTelInput",
        placeholder: "+32 123 45 67",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "number",
        label: "Number input",
        id: "validNumberInput",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "url",
        label: "URL input",
        id: "validUrlInput",
        placeholder: "https://example.com",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "date",
        label: "Date input",
        id: "validDateInput",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "time",
        label: "Time input",
        id: "validTimeInput",
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "file",
        label: "File input",
        id: "validFileInput",
      },
      {
        wrapper_classes: "col-12",
        input_type: "range",
        label: "Range input",
        id: "validRangeInput",
        attributes: new DrupalAttribute()
          .setAttribute("min", 0)
          .setAttribute("max", 100)
          .setAttribute("value", 42),
      },
      {
        wrapper_classes: "col-12",
        type: "textarea",
        label: "Textarea",
        id: "validTextarea",
        text: "Multiline content",
        rows: 4,
      },
      {
        wrapper_classes: "col-12 col-md-6",
        type: "select",
        label: "Select",
        id: "validSelect",
        options: singleSelectOptions,
      },
      {
        wrapper_classes: "col-12 col-md-6",
        type: "select",
        label: "Multiple select",
        id: "validMultiSelect",
        multiple: true,
        options: multiSelectOptions,
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "checkbox",
        label: "Checkbox",
        id: "validCheckbox",
        checked: true,
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "checkbox",
        label: "Switch",
        id: "validSwitch",
        checked: true,
        switch: true,
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "radio",
        label: "Radio option A",
        id: "validRadioA",
        checked: true,
        attributes: buildRadioAttributes(),
      },
      {
        wrapper_classes: "col-12 col-md-6",
        input_type: "radio",
        label: "Radio option B",
        id: "validRadioB",
        attributes: buildRadioAttributes(),
      },
    ],
  ],
  submit: {
    wrapper: "col-12",
    label: "Submit",
    type: "submit",
    variant: "primary",
  },
};

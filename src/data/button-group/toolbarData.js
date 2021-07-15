const drupalAttribute = require("drupal-attribute");

module.exports = {
  toolbar: true,
  toolbar_aria_label: "Text here",
  attributes: new drupalAttribute().addClass("me-2"),
  items: [
    [
      {
        input: true,
        label: "I am a input field",
        toggle_variant: "outline-primary",
        id: "submit-1",
        type: "checkbox",
        toggle: true,
      },
      {
        label: "I am a button",
        outline: false,
        variant: "primary",
      },
      {
        input: true,
        label: "I am a input field",
        toggle_variant: "warning",
        id: "submit-3",
        type: "checkbox",
        toggle: true,
      },
      {
        label: "I am a button",
        outline: true,
        variant: "dark",
      },
    ],
    [
      {
        input: true,
        label: "I am a input field",
        toggle_variant: "secondary",
        id: "submit-2",
        type: "checkbox",
        toggle: true,
      },
      {
        label: "I am a button",
        outline: false,
        variant: "danger",
      },
      {
        label: "I am a button",
        outline: false,
        variant: "warning",
      },
      {
        input: true,
        label: "I am a input field",
        toggle_variant: "info",
        id: "submit-4",
        type: "checkbox",
        toggle: true,
      },
    ],
  ],
};

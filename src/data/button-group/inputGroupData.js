const drupalAttribute = require("drupal-attribute");

module.exports = {
  items: [
    [
      {
        input: true,
        label: "I am a input field",
        toggle_variant: "outline-primary",
        id: "submit-1",
        type: "checkbox",
        toggle: true,
        attributes: new drupalAttribute(),
      },
      {
        input: true,
        label: "I am a input field",
        toggle_variant: "secondary",
        id: "submit-2",
        type: "checkbox",
        toggle: true,
        attributes: new drupalAttribute(),
      },
      {
        input: true,
        label: "I am a input field",
        toggle_variant: "primary",
        id: "submit-3",
        type: "checkbox",
        toggle: true,
        attributes: new drupalAttribute(),
      },
      {
        input: true,
        label: "I am a input field",
        toggle_variant: "info",
        id: "submit-4",
        type: "checkbox",
        toggle: true,
        attributes: new drupalAttribute(),
      },
    ],
  ],
};

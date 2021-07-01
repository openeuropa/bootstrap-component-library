const drupalAttribute = require("drupal-attribute");

module.exports = {
  toolbar: true,
  toolbar_aria_label: "Text here",
  extra_classes: "me-2",
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
        attributes: new drupalAttribute()
                    .setAttribute('type', 'button'),
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
        attributes: new drupalAttribute()
                    .setAttribute('type', 'button'),
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
        attributes: new drupalAttribute()
                    .setAttribute('type', 'button'),
      },
      {
        label: "I am a button",
        outline: false,
        variant: "warning",
        attributes: new drupalAttribute()
                    .setAttribute('type', 'button'),
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

const drupalAttribute = require("drupal-attribute");

module.exports = {
  items: [
    {
      variant: "danger",
      html: "Label 1",
    },
    {
      variant: "secondary",
      html: "Label 2",
    },
    {
      variant: "primary",
      html: "Label 3",
    },
    {
      variant: "info",
      html: "Label 4",
    },
    {
      required: false,
      label: "Example form input",
      readonly: false,
      id: "example-form-input-1",
      input: true,
      input_type: "checkbox",
    },
    {
      variant: "warning",
      html: "Label 5",
      extra_classes: "d-flex justify-content-between align-items-center",
      badge: {
        label: "10",
        rounded_pill: true,
        attributes: new drupalAttribute().addClass("ms-2"),
      },
    },
  ],
};

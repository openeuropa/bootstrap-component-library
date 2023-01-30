const drupalAttribute = require("drupal-attribute");

module.exports = {
  form: {
    attributes: new drupalAttribute().addClass("needs-validation"),
    submit: {
      wrapper: "col-12",
      label: "Enter",
      type: "submit",
      variant: "primary",
    },
    items: [
      [
        {
          classes: "mb-4-5",
          input_type: "email",
          required: true,
          label: "Your email",
          invalid_feedback: "Please enter a valid e-mail address",
          placeholder: "Type in your e-mail address",
        },
      ],
    ],
  },
};

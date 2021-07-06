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
        classes: "mb-3",
        type: "email",
        required: true,
        label: "Email address",
        id: "exampleInputEmail1",
        helper_text: "We'll never share your email with anyone else.",
        helper_text_id: "emailHelp",
      },
    ],
    [
      {
        type: "password",
        classes: "mb-3",
        required: true,
        label: "Password",
        id: "exampleInputPassword1",
      },
    ],
    [
      {
        type: "checkbox",
        classes: "mb-3",
        required: true,
        label: "Check me out",
        id: "exampleInputPassword1",
      },
    ],
  ],
};

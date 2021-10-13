const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute()
    .addClass("needs-validation")
    .setAttribute("novalidate", true)
    .setAttribute("onsubmit", "return false;"),
  submit: {
    label: "Submit",
    type: "submit",
    variant: "primary",
  },
  items: [
    [
      {
        classes: "mb-3",
        input_type: "email",
        required: true,
        label: "Email address *",
        id: "exampleInputEmail1",
        helper_text: "We'll never share your email with anyone else.",
        helper_text_id: "emailHelp",
        valid_feedback: "Valid feedback regarding email.",
        invalid_feedback: "Please provide an email.",
      },
    ],
    [
      {
        input_type: "password",
        classes: "mb-3",
        required: true,
        label: "Password *",
        id: "exampleInputPassword1",
        valid_feedback: "Valid feedback regarding password.",
        invalid_feedback: "Please provide a password.",
      },
    ],
    [
      {
        input_type: "checkbox",
        classes: "mb-3",
        required: true,
        label: "Check me out *",
        id: "exampleInputCheck1",
        valid_feedback: "Valid feedback regarding check.",
        invalid_feedback: "Please check the required checkbox.",
      },
    ],
  ],
};

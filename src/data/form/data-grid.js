const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass(["row", "g-3"])
  .addClass("needs-validation")
  .setAttribute("novalidate", true),
  submit: {
    wrapper: "col-12",
    label: "Submit",
    type: "submit",
    variant: "primary",
  },
  items: [
    [
      {
        wrapper_classes: "col-md-6",
        input_type: "email",
        required: true,
        label: "Email address *",
        id: "exampleInputEmail1",
        helper_text: "We'll never share your email with anyone else.",
        helper_text_id: "emailHelp",
        invalid_feedback: "Please provide an email.",
      },
      {
        wrapper_classes: "col-md-6",
        input_type: "password",
        required: true,
        label: "Password *",
        id: "exampleInputPassword1",
        invalid_feedback: "Please provide a password.",
      },
      {
        wrapper_classes: "col-12",
        input_type: "text",
        label: "Address",
        id: "exampleInputAddress1",
        valid_feedback: "This is not required so it has a success state.",
      },
      {
        wrapper_classes: "col-12",
        input_type: "text",
        label: "Address 2",
        id: "exampleInputAddress2",
        valid_feedback: "This is not required so it has a success state.",
      },
      {
        wrapper_classes: "col-md-6",
        input_type: "text",
        required: true,
        label: "City *",
        id: "exampleInputCity1",
        invalid_feedback: "Please provide a City.",
      },
      {
        wrapper_classes: "col-md-4",
        input_type: "text",
        required: true,
        label: "State *",
        id: "exampleInputState1",
        invalid_feedback: "Please provide a state.",
      },
      {
        wrapper_classes: "col-md-2",
        input_type: "text",
        required: true,
        label: "Zip *",
        id: "exampleInputZip1",
        invalid_feedback: "Please provide a zip code.",
      },
      {
        input_type: "checkbox",
        wrapper_classes: "col-12",
        required: true,
        label: "Check me out *",
        id: "exampleInputCheck1",
        invalid_feedback: "Please check me.",
      },
    ],
  ],
};

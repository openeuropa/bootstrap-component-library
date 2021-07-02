const drupalAttribute = require("drupal-attribute");

module.exports = {
  extra_classes: "row g-3",
  submit: {
    wrapper: "col-12",
    label: "Submit",
    type: "submit",
    variant: "primary",
    attributes: new drupalAttribute(),
  },
  items: [
    [
      {
        wrapper_classes: "col-md-6",
        type: "email",
        required: true,
        label: "Email address",
        id: "exampleInputEmail1",
        helper_text: "We'll never share your email with anyone else.",
        helper_text_id: "emailHelp",
      },
      {
        wrapper_classes: "col-md-6",
        type: "password",
        required: true,
        label: "Password",
        id: "exampleInputPassword1",
      },
      {
        wrapper_classes: "col-12",
        type: "text",
        required: true,
        label: "Address",
        id: "exampleInputAddress1",
      },
      {
        wrapper_classes: "col-12",
        type: "text",
        label: "Address 2",
        id: "exampleInputAddress2",
      },
      {
        wrapper_classes: "col-md-6",
        type: "text",
        required: true,
        label: "City",
        id: "exampleInputCity1",
      },
      {
        wrapper_classes: "col-md-4",
        type: "text",
        required: true,
        label: "State",
        id: "exampleInputState1",
      },
      {
        wrapper_classes: "col-md-2",
        type: "text",
        required: true,
        label: "Zip",
        id: "exampleInputZip1",
      },
      {
        type: "checkbox",
        wrapper_classes: "col-12",
        required: true,
        label: "Check me out",
        id: "exampleInputCheck1",
      },
    ],
  ],
};

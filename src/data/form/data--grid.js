import drupalAttribute from "drupal-attribute";

const data = {
  attributes: new drupalAttribute()
    .addClass(["row", "g-3"])
    .setAttribute("novalidate", true)
    .setAttribute("onsubmit", "return false;"),
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
      },
      {
        wrapper_classes: "col-md-6",
        input_type: "password",
        required: true,
        label: "Password *",
        id: "exampleInputPassword1",
      },
      {
        wrapper_classes: "col-12",
        input_type: "text",
        label: "Address",
        id: "exampleInputAddress1",
      },
      {
        wrapper_classes: "col-12",
        input_type: "text",
        label: "Address 2",
        id: "exampleInputAddress2",
      },
      {
        wrapper_classes: "col-md-6",
        input_type: "text",
        required: true,
        label: "City *",
        id: "exampleInputCity1",
      },
      {
        wrapper_classes: "col-md-4",
        input_type: "text",
        required: true,
        label: "State *",
        id: "exampleInputState1",
      },
      {
        wrapper_classes: "col-md-2",
        input_type: "text",
        required: true,
        label: "Zip *",
        id: "exampleInputZip1",
      },
      {
        input_type: "checkbox",
        wrapper_classes: "col-12",
        required: true,
        label: "Check me out *",
        id: "exampleInputCheck1",
      },
    ],
  ],
};

export default data;

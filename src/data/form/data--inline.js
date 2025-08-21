import drupalAttribute from "drupal-attribute";

const data = {
  attributes: new drupalAttribute()
    .addClass(["row", "row-cols-lg-auto", "g-3", "align-items-center"])
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
        wrapper_classes: "col-12",
        input_type: "text",
        required: true,
        label: "Username",
        hidden_label: true,
        placeholder: "Username",
        id: "inlineFormInputGroupUsername",
      },
      {
        wrapper_classes: "col-12",
        input_type: "text",
        required: true,
        label: "Password",
        hidden_label: true,
        placeholder: "Password",
        id: "inlineFormInputGroupPassword",
      },
      {
        input_type: "checkbox",
        wrapper_classes: "col-12",
        required: true,
        label: "Remember me *",
        id: "exampleInputCheck1",
      },
    ],
  ],
};

export default data;

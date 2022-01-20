const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute()
    .addClass(["needs-validation", "row", "g-3"])
    .setAttribute("novalidate", true)
    .setAttribute("onsubmit", "return false;"),
  submit: {
    label: "Send",
    type: "submit",
    variant: "primary",
    wrapper: "contact-form-submit",
    attributes: new drupalAttribute().addClass("w-auto mb-4"),
  },
  title: "Enter your message",
  title_tag: "h3",
  helper_text: "*Please fill in all required fields.",
  antispam: `<h4 class="p-4 mt-0">Antispam</h4>`,
  items: [
    [
      {
        wrapper_classes: "gy-4",
        input_type: "text",
        required: true,
        label: "Your name*",
        id: "exampleInputText1",
        placeholder: "Placeholder",
      },
    ],
    [
      {
        wrapper_classes: "gy-4",
        input_type: "email",
        required: true,
        label: "Your email address*",
        invalid: true,
        id: "exampleInputEmail1",
        placeholder: "Placeholder",
        invalid_feedback: "Please verify your email address.",
      },
    ],
    [
      {
        wrapper_classes: "gy-4",
        input_type: "text",
        required: true,
        label: "Subject*",
        id: "exampleInputText2",
        placeholder: "Placeholder",
      },
    ],
    [
      {
        wrapper_classes: "gy-4",
        type: "textarea",
        required: true,
        label: "Message*",
        id: "exampleInputText3",
        placeholder: "Placeholder",
      },
    ],
    [
      {
        wrapper_classes: "gy-4",
        type: "select",
        required: true,
        label: "Topic*",
        id: "exampleInputSelect1",
        options: [
          {
            label: "Other topic",
            value: 1,
            selected: true,
          },
        ],
      },
    ],
    [
      {
        wrapper_classes: "gy-4",
        type: "select",
        required: true,
        label: "Country of residence*",
        id: "exampleInputSelect2",
        options: [
          {
            label: "Belgium",
            selected: true,
            value: 1,
          },
        ],
      },
    ],
    [
      {
        wrapper_classes: "gy-4",
        input_type: "telephone",
        required: true,
        label: "Phone*",
        id: "exampleInputPhone",
        placeholder: "Placeholder",
      },
    ],
    [
      {
        type: "fieldset",
        classes: "border-top pt-5 mt-4-5",
      },
      {
        input_type: "checkbox",
        required: true,
        label: "Send yourself a copy",
        id: "exampleInputCheck1",
      },
      {
        input_type: "checkbox",
        required: true,
        label: `I have read and agree with the <a href="#/example">data protection terms</a>`,
        id: "exampleInputCheck1",
        wrapper_classes: "mt-4",
      },
    ],
  ],
};

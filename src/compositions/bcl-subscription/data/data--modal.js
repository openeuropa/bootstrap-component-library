const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "subscribeModal",
  size: "lg",
  header:
    '<div class="modal-title fs-5 fw-medium">Subscribe to [the title of the page/content]</div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
  footer:
    '<button class="btn btn-light" data-bs-dismiss="modal">No, thanks</button>' +
    '<div class="text-align-end">' +
    '<button class="btn btn-primary form-submit">Subscribe me</button>' +
    "</div>",
  form: {
    attributes: new drupalAttribute()
      .addClass("needs-validation")
      .setAttribute("novalidate", true)
      .setAttribute("onsubmit", "return false;"),
    items: [
      [
        {
          classes: "mb-3",
          input_type: "email",
          required: true,
          label: "Your email",
          placeholder: "Placeholder",
        },
      ],
      [
        {
          classes: "mb-3",
          type: "select",
          label: "Languages",
          required: true,
          invalid_feedback: "Notification frequency",
          id: "language-select",
          options: [
            { value: 1, label: "Daily", selected: true },
            { value: 2, label: "another select option" },
            { value: 3, label: "another option" },
            { value: 4, label: "last option" },
          ],
        },
      ],
      [
        {
          input_type: "checkbox",
          classes: "mb-3",
          required: true,
          label:
            "I have read and agree with the <a href='/example.html'>data protection terms</a>",
          id: "exampleInputCheck1",
          invalid_feedback: "Please check the required checkbox.",
        },
      ],
    ],
  },
};

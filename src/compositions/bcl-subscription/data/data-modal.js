const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "subscribeModal",
  header:
    '<h5 class="modal-title">Subscribe</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
  footer:
    '<div class="text-align-end">' +
    '<button class="btn btn-light me-4" data-bs-dismiss="modal">Close</button>' +
    '<button class="btn btn-primary form-submit">Subscribe now</button>' +
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
          label: "E-mail",
          invalid_feedback: "Please enter a valid e-mail address",
          placeholder: "Type in your e-mail address",
        },
      ],
      [
        {
          classes: "mb-3",
          type: "select",
          label: "Languages",
          required: true,
          invalid_feedback: "Please select a language",
          options: [
            { value: 1, label: "a select option" },
            { value: 2, label: "another select option" },
            { value: 3, label: "another option" },
            { value: 4, label: "last option" },
            {
              label: "Please select a language",
              selected: true,
              disabled: true,
              value: "null",
              hidden: true,
            },
          ],
        },
      ],
      [
        {
          input_type: "checkbox",
          classes: "mb-3",
          required: true,
          label:
            "By checking this box, I confirm that I want to register for this service, and I agree with the <a href='/example.html'>privacy statement</a>",
          id: "exampleInputCheck1",
          invalid_feedback: "Please check the required checkbox.",
        },
      ],
    ],
  },
};

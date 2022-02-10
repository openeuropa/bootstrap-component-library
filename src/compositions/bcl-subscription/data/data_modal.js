const drupalAttribute = require("drupal-attribute");

module.exports = {
  id: "subscribeModal",
  header:
    '<h5 class="modal-title">Subscribe</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
  footer:
    '<div class="text-align-end">' +
    '<button class="btn btn-light" data-bs-dismiss="modal">Close</button>' +
    '<button class="btn btn-primary form-submit ms-4">Subscribe now</button>' +
    "</div>",
  form: {
    attributes: new drupalAttribute()
      .addClass("needs-validation")
      .setAttribute("novalidate", true)
      .setAttribute("onsubmit", "return false;"),
    items: [
      [
        {
          legend_classes: "h6 fw-normal mb-0",
          type: "fieldset",
          legend:
            "<p>Please enter your information & preference to receive the wished information in your mailbox. Your email will not be shared with anyone.</p>",
        },
      ],
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
          id: "language-select",
          options: [
            {
              label: "Please select a language",
              selected: true,
              disabled: true,
              value: "",
              hidden: true,
            },
            { value: 1, label: "a select option" },
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
            "By checking this box, I confirm that I want to register for this service, and I agree with the <a href='/example.html'>privacy statement</a>",
          id: "exampleInputCheck1",
          invalid_feedback: "Please check the required checkbox.",
        },
      ],
    ],
  },
  success_alert: {
    message:
      "Your subscription has been successfully registered. You can now close this dialog.",
    heading: "Thank you!",
    icons_path: "/icons.svg",
    variant: "success",
    attributes: new drupalAttribute().addClass([
      "success-alert",
      "d-none",
      "mb-0",
    ]),
    dismissible: false,
  },
  error_alert: {
    message:
      "There was an error!<hr class='d-none d-md-block' /><p class='d-none d-md-block mb-0'>Please verify your e-mail address and agree with the privacy statement.</p>",
    heading: "Sorry!",
    icons_path: "/icons.svg",
    variant: "danger",
    dismissible: false,
    attributes: new drupalAttribute().addClass([
      "error-alert",
      "d-none",
      "mb-0",
    ]),
  },
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  data: {
    navbar: {
      collapse_id: "navbar",
      attributes: new drupalAttribute(),
      background: "light",
      brand: {
        label: "Navbar",
        link: "/example.html",
      },
      navigation: {
        navbar: true,
        attributes: new drupalAttribute().addClass("me-auto"),
        items: [
          {
            label: "I'm a link",
            path: "#first",
          },
          {
            label: "I'm a link 2",
            path: "#first",
          },
          {
            label: "I'm a link 3",
            path: "#first",
          },
          {
            id: "dropdown-1",
            link: true,
            dropdown: true,
            trigger: {
              label: "Dropdown Toggle",
              attributes: new drupalAttribute()
                .addClass("nav-link")
                .setAttribute("autocomplete", "off"),
              path: "#",
            },
            items: [
              {
                label: "I'm a link",
                path: "/example.html",
              },
              {
                label: "I'm a button",
                button: true,
              },
              {
                divider: true,
              },
              {
                label: "I'm a disabled button",
                button: true,
                disabled: true,
              },
              {
                label: "I'm a active button",
                button: true,
                active: true,
              },
            ],
          },
        ],
      },
      form: {
        attributes: new drupalAttribute().addClass("d-flex"),
        submit: {
          wrapper: "ms-2",
          label: "Search",
          type: "Search",
          variant: "primary",
          attributes: new drupalAttribute(),
        },
        items: [
          [
            {
              input_type: "text",
              required: true,
              label: "Search",
              hidden_label: true,
              placeholder: "Search",
              id: "inlineFormInputGroupSearch",
              attributes: new drupalAttribute(),
            },
          ],
        ],
      },
    },
    navigation: {
      tabs: true,
      tabs_content: true,
      attributes: new drupalAttribute(),
      items: [
        {
          label: "Profile information",
          path: "#profile",
          id: "profile-tab",
          target: "profile",
          active: true,
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "tab")
            .setAttribute("autocomplete", "off")
            .setAttribute("data-bs-target", "#profile")
            .setAttribute("aria-controls", "profile"),
        },
        {
          label: "Privacy settings",
          id: "privacy-tab",
          target: "privacy",
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "tab")
            .setAttribute("autocomplete", "off")
            .setAttribute("data-bs-target", "#privacy")
            .setAttribute("aria-controls", "privacy"),
        },
      ],
      profileBack: {
        label: "Back to my profile",
        icon_position: "before",
        icon: {
          name: "arrow-left",
        },
      },
      imageUploadInput: {
        wrapper_classes: "mb-3",
        input_type: "file",
        label: "Change picture",
        id: "image-profile",
        toggle: true,
        toggle_variant: "secondary",
        attributes: new drupalAttribute().addClass("d-none"),
      },
      removeImageButton: {
        label: "Remove picture",
        variant: "link",
      },
      profileInformation: {
        attributes: new drupalAttribute()
          .addClass(["mb-3", "row"])
          .setAttribute("novalidate", true)
          .setAttribute("onsubmit", "return false;"),
        submit: {
          label: "Save",
          type: "submit",
          variant: "primary",
          wrapper: "mt-4 d-grid d-sm-block",
        },
        items: [
          [
            {
              type: "fieldset",
              legend: "Personal information",
              fieldset_classes: "col-12 mb-3",
              legend_classes: "fw-bold mb-0",
            },
          ],
          [
            {
              type: "fieldset",
              fieldset_classes: "col-12 col-lg-6",
            },
            {
              wrapper_classes: "mb-3",
              input_type: "text",
              required: true,
              label: "First name",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute("value", "Stefan"),
            },
            {
              wrapper_classes: "mb-3",
              input_type: "text",
              required: true,
              label: "Last name",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute("value", "Mayer"),
            },
            {
              wrapper_classes: "mb-3",
              type: "select",
              required: true,
              label: "Gender",
              helper_text: "Helper text",
              options: [
                { value: 2, label: "Male" },
                { value: 3, label: "Female" },
              ],
            },
            {
              wrapper_classes: "mb-3",
              input_type: "text",
              required: true,
              label: "Nationality",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute("value", "German"),
            },
            {
              wrapper_classes: "mb-3",
              input_type: "date",
              required: true,
              label: "Birth date",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute(
                "value",
                "1972-01-22"
              ),
            },
          ],
          [
            {
              type: "fieldset",
              fieldset_classes: "col-12 col-lg-6",
            },
            {
              wrapper_classes: "mb-3",
              type: "textarea",
              required: true,
              label: "Bio",
              helper_text: "Helper text",
            },
            {
              wrapper_classes: "mb-3",
              input_type: "text",
              required: true,
              label: "Country",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute(
                "value",
                "Germany"
              ),
            },
            {
              wrapper_classes: "mb-3",
              input_type: "text",
              required: true,
              label: "City",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute(
                "value",
                "Düsseldorf"
              ),
            },
          ],
          [
            {
              type: "fieldset",
              legend: "Professional information",
              fieldset_classes: "col-md-12 mb-3",
              legend_classes: "fw-bold mb-0",
            },
          ],
          [
            {
              type: "fieldset",
              fieldset_classes: "col-md-6",
            },
            {
              wrapper_classes: "mb-3",
              input_type: "text",
              required: true,
              label: "Organisation",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute(
                "value",
                "DG digit"
              ),
            },
            {
              wrapper_classes: "mb-3",
              input_type: "text",
              required: true,
              label: "Position",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute(
                "value",
                "Officer"
              ),
            },
          ],
          [
            {
              type: "fieldset",
              fieldset_classes: "col-md-6",
            },
            {
              wrapper_classes: "mb-3",
              input_type: "text",
              required: true,
              label: "Working languages",
              helper_text: "Helper text",
              attributes: new drupalAttribute().setAttribute(
                "value",
                "English, German"
              ),
            },
          ],
        ],
      },
      privacySettings: {
        attributes: new drupalAttribute()
          .addClass("mb-3")
          .setAttribute("novalidate", true)
          .setAttribute("onsubmit", "return false;"),
        submit: {
          label: "Save",
          type: "submit",
          variant: "primary",
          wrapper: "mt-2 d-grid d-sm-block",
        },
        items: [
          [
            {
              label: "Who can consult my data",
              wrapper_classes: "col-sm-6 col-lg-3",
              type: "select",
              size: "md",
              helper_text: "Helper text",
              helper_text_id: "helperText",
              options: [
                { value: 1, label: "Anonymous users" },
                { value: 2, label: "Nobody" },
                { label: "Authenticated users only", selected: true },
              ],
            },
          ],
        ],
      },
      publicProfileContent: {
        attributes: new drupalAttribute()
          .addClass(["row", "mb-3"])
          .setAttribute("novalidate", true)
          .setAttribute("onsubmit", "return false;"),
        submit: {
          label: "Save",
          type: "submit",
          variant: "primary",
          wrapper: "mt-4 d-grid d-sm-block",
        },
        items: [
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "Picture",
              id: "picture",
              checked: true,
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "Position",
              id: "position",
              checked: true,
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "City",
              id: "city",
              checked: true,
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "First name",
              id: "firstName",
              checked: true,
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "Gender",
              id: "gender",
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "Nationality",
              id: "nationality",
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "Last name",
              id: "lastName",
              checked: true,
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "Working languages",
              id: "workingLanguages",
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "mb-3 col-sm-6 col-md-4",
              required: true,
              label: "Date of birth",
              id: "dateOfBirth",
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "col-sm-6 col-md-4",
              required: true,
              label: "Organisation",
              id: "organisation",
              checked: true,
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "col-sm-6 col-md-4",
              required: true,
              label: "Country",
              id: "country",
              checked: true,
            },
          ],
          [
            {
              input_type: "checkbox",
              classes: "col-sm-6 col-md-4",
              required: true,
              label: "Bio",
              id: "bio",
              checked: true,
            },
          ],
        ],
      },
      deleteAccount: {
        attributes: new drupalAttribute()
          .setAttribute("novalidate", true)
          .setAttribute("onsubmit", "return false;"),
        submit: {
          label: "Delete my account",
          type: "submit",
          variant: "danger",
          wrapper: "mt-4 d-grid d-sm-block",
        },
      },
    },
  },
};

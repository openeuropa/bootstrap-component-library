const drupalAttribute = require("drupal-attribute");

module.exports = {
  landing: true,
  navigation: {
    tabs: true,
    tabs_content: true,
    items: [
      {
        label: "View",
        path: "#view",
        id: "view-tab",
        target: "view",
        active: true,
        attributes: new drupalAttribute()
          .setAttribute("data-bs-toggle", "tab")
          .setAttribute("autocomplete", "off")
          .setAttribute("data-bs-target", "#view")
          .setAttribute("role", "tab")
          .setAttribute("aria-controls", "view"),
      },
      {
        label: "Edit",
        path: "#edit",
        id: "edit-tab",
        target: "edit",
        attributes: new drupalAttribute()
          .setAttribute("data-bs-toggle", "tab")
          .setAttribute("autocomplete", "off")
          .setAttribute("data-bs-target", "#edit")
          .setAttribute("role", "tab")
          .setAttribute("aria-controls", "edit"),
      },
      {
        label: "Privacy settings",
        path: "#privacy",
        id: "privacy-tab",
        target: "privacy",
        attributes: new drupalAttribute()
          .setAttribute("data-bs-toggle", "tab")
          .setAttribute("autocomplete", "off")
          .setAttribute("data-bs-target", "#privacy")
          .setAttribute("role", "tab")
          .setAttribute("aria-controls", "privacy"),
      },
      {
        label: "Visibility settings",
        path: "#visibility",
        id: "visibility-tab",
        target: "visibility",
        attributes: new drupalAttribute()
          .setAttribute("data-bs-toggle", "tab")
          .setAttribute("autocomplete", "off")
          .setAttribute("data-bs-target", "#visibility")
          .setAttribute("role", "tab")
          .setAttribute("aria-controls", "visibility"),
      },
    ],
  },
  view: {
    banner: {
      title: "Stefan Mayer",
      title_tag: "h1",
      title_attributes: new drupalAttribute().addClass("fw-bold"),
      image: {
        path: "https://picsum.photos/200/200?random=6",
        alt: "alt img",
        position: "top",
      },
      content: `<div class="mb-4 mt-4">
        <span class="text-muted me-3">DG Test</span><span class="text-muted">Director</span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.</p>`,
      attributes: new drupalAttribute().addClass("negative-container"),
    },
  },
  edit: {
    landing: true,
    navigation: {
      tabs: true,
      tabs_content: true,
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
            .setAttribute("role", "tab")
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
            .setAttribute("role", "tab")
            .setAttribute("aria-controls", "privacy"),
        },
      ],
    },
    profile_back: {
      label: "Back to my profile",
      icon_position: "before",
      icon: {
        path: "/icons.svg",
        name: "arrow-left",
      },
    },
    image_upload_input: {
      input_type: "file",
      id: "image-profile",
      label: "My_picture.jpg (3.52 Mb)",
      toggle: true,
      toggle_variant: "link",
      attributes: new drupalAttribute().addClass(["d-none"]),
    },
    remove_image_button: {
      label: "Remove",
      variant: "danger",
      attributes: new drupalAttribute().addClass([
        "mt-2",
        "ms-0",
        "ms-md-2",
        "mt-md-0",
      ]),
    },
    profile_information: {
      attributes: new drupalAttribute()
        .addClass(["row"])
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      submit: {
        wrapper: "mt-4 d-grid d-sm-block",
        items: [
          {
            label: "Save",
            type: "submit",
            variant: "primary",
            attributes: new drupalAttribute().addClass(["d-inline-block"]),
          },
          {
            label: "Cancel account",
            variant: "danger",
            attributes: new drupalAttribute().addClass([
              "d-inline-block",
              "ms-3",
            ]),
          },
        ],
      },
      items: [
        [
          {
            type: "fieldset",
            legend: "Personal information",
            fieldset_classes: "col-12 mb-3",
            legend_classes: "fw-bold mb-0 fs-2 mt-4-5",
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
            id: "first-name",
            attributes: new drupalAttribute().setAttribute("value", "Stefan"),
          },
          {
            wrapper_classes: "mb-3",
            input_type: "text",
            required: true,
            label: "Last name",
            helper_text: "Helper text",
            id: "last-name",
            attributes: new drupalAttribute().setAttribute("value", "Mayer"),
          },
          {
            wrapper_classes: "mb-3",
            type: "select",
            required: true,
            label: "Gender",
            aria_label: "gender-select",
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
            id: "nationality-input",
            helper_text: "Helper text",
            attributes: new drupalAttribute().setAttribute("value", "German"),
          },
          {
            wrapper_classes: "mb-3",
            input_type: "date",
            required: true,
            label: "Birth date",
            id: "birth-date",
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
            id: "bio-description",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non. ",
          },
          {
            wrapper_classes: "mb-3",
            input_type: "text",
            required: true,
            label: "Country",
            id: "country-input",
            helper_text: "Helper text",
            attributes: new drupalAttribute().setAttribute("value", "Germany"),
          },
          {
            wrapper_classes: "mb-3",
            input_type: "text",
            required: true,
            label: "City",
            id: "city-input",
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
            legend_classes: "fw-bold my-3 fs-2",
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
            id: "organisation-input",
            helper_text: "Helper text",
            attributes: new drupalAttribute().setAttribute("value", "DG digit"),
          },
          {
            wrapper_classes: "mb-3",
            input_type: "text",
            required: true,
            label: "Position",
            id: "position-input",
            helper_text: "Helper text",
            attributes: new drupalAttribute().setAttribute("value", "Officer"),
          },
        ],
        [
          {
            type: "fieldset",
            fieldset_classes: "col-md-6",
          },
          {
            type: "select",
            id: "multiselect-1",
            multiple: true,
            clean_class: true,
            required: true,
            size: "md",
            label: "Working languages",
            helper_text: "Helper text for the select element",
            invalid_feedback: "Invalid feedback example",
            valid_feedback: "Valid feedback example",
            selectByGroup: true,
            placeholder: "Please select a value",
            options: [
              {
                optgroup: true,
                label: "Group 1",
                options: [
                  { value: 1, label: "Option group 1" },
                  { value: 2, label: "Option group 2" },
                  { value: 3, label: "Option group 3" },
                ],
              },
              { value: 5, label: "a select option" },
              { value: 6, label: "another select option" },
              { value: 7, label: "another option" },
              { value: 8, label: "last option" },
              { value: 9, label: "the selected option", selected: true },
            ],
            attributes: new drupalAttribute().addClass("multi-select"),
          },
        ],
      ],
    },
  },
  privacy: {
    settings: {
      attributes: new drupalAttribute()
        .addClass("mb-3")
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
            label: "Who can consult my data",
            wrapper_classes: "col-sm-6 col-lg-3",
            type: "select",
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
    public_profile_content: {
      attributes: new drupalAttribute()
        .addClass(["row", "mb-3"])
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      submit: {
        label: "Save",
        type: "submit",
        variant: "primary",
        wrapper: "mt-4 mt-md-2 d-grid d-sm-block",
      },
      items: [
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Picture",
            id: "picture",
            checked: true,
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Position",
            id: "position",
            checked: true,
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "City",
            id: "city",
            checked: true,
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "First name",
            id: "firstName",
            checked: true,
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Gender",
            id: "gender",
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Nationality",
            id: "nationality",
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Last name",
            id: "lastName",
            checked: true,
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Working languages",
            id: "workingLanguages",
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Date of birth",
            id: "dateOfBirth",
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Organisation",
            id: "organisation",
            checked: true,
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Country",
            id: "country",
            checked: true,
          },
        ],
        [
          {
            input_type: "checkbox",
            classes: "mb-1 mb-md-3 col-sm-6 col-md-4",
            required: true,
            label: "Bio",
            id: "bio",
            checked: true,
          },
        ],
      ],
    },
    delete_account: {
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
};

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
    }
  },
};

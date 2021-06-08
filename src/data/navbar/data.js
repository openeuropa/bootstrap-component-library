module.exports = {
  collapse_id: "navbar",
  brand: {
    label: "Navbar",
    link: "/example.html",
  },
  navigation: {
    navbar: true,
    extra_classes: "me-auto",
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
          extra_classes: "nav-link",
          path: "#",
          extra_attributes: [
            {
              name: "aria-expanded",
              value: "false",
            },
            {
              name: "autocomplete",
              value: "off",
            },
            {
              name: "data-bs-toggle",
              value: "dropdown",
            },
          ],
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
    extra_classes: "d-flex",
    submit: {
      wrapper: "ms-2",
      label: "Search",
      type: "Search",
      variant: "primary",
    },
    items: [
      [
        {
          type: "text",
          required: true,
          label: "Search",
          hidden_label: true,
          placeholder: "Search",
          id: "inlineFormInputGroupSearch",
        },
      ],
    ],
  },
};

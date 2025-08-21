import drupalAttribute from "drupal-attribute";

const data = {
  collapse_id: "navbar",
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
        path: "/example.html",
      },
      {
        label: "I'm a link 3",
        path: "/example.html",
      },
      {
        id: "dropdown-1",
        link: true,
        dropdown: true,
        trigger: {
          label: "Dropdown Toggle",
          path: "#",
          attributes: new drupalAttribute().addClass("nav-link"),
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
      variant: "light",
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

export default data;

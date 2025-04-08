const drupalAttribute = require("drupal-attribute");

module.exports = {
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
        mega_menu: true,
        link: true,
        icon_path: "/icons.svg",
        id: "dropdown-megamenu",
        trigger: {
          label: "A link with dropdown",
          path: "/example.html",
          attributes: new drupalAttribute().addClass("nav-link"),
        },
        id: "dropdown-megamenu",
        content_link: {
          label: "Discover more",
          path: "/example.html",
          icon: {
            name: "arrow-right",
          },
        },
        see_all: {
          label: "See all",
          path: "/example.html",
        },
        content_block:
          "<h4>Mega Menu Content Title</h4><p>Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
        items: [
          {
            id: "dropdown-megamenu-inner",
            trigger: {
              label: "Base Category Item",
              path: "/example.html",
            },
            items: [
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
            ],
          },
          {
            label: "Base Category Item",
            path: "/example.html",
          },
          {
            id: "dropdown-megamenu-inner-2",
            trigger: {
              label: "Base Category Item",
              path: "/example.html",
            },
            collapse:
              "<a href='#' class='mb-3 d-block'> Example link</a><img src='https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' alt='image'>",
            items: [
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
              {
                label: "Base Sub Category Item",
                path: "/example.html",
              },
            ],
          },
          {
            label: "Base Category Item",
            path: "/example.html",
          },
          {
            label: "Base Category Item",
            path: "/example.html",
          },
          {
            label: "Base Category Item",
            path: "/example.html",
          },
        ],
      },
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

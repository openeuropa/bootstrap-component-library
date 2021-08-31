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
    user: {
      horizontal: true,
      horizontal_grid: {
        left_col: 3,
        left_col_responsive: "md",
        right_col: 9,
        right_col_responsive: "md",
        gutter: 2,
      },
      extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
      extra_classes_body: "pt-0",
      title: {
        content: "Stefan Mayer",
        tag: "h2",
      },
      content:
        "<div class='mb-4 mt-4'><span class='text-muted me-2'>DG Test</span><span class='text-muted me-2'>Director</span></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non. </p>",
      attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
      image: {
        path: "https://picsum.photos/200/200?random=6",
        alt: "alt img",
        position: "top",
      },
    },
    editButton: {
      label: "Manage profile",
      variant: "secondary",
    },
    personalInfoBasic: {
      borderless: true,
      attributes: new drupalAttribute().addClass("w-100"),
      rows: [
        {
          cells: [
            {
              content: "Gender :",
            },
            {
              content: "Male",
            },
          ],
        },
        {
          cells: [
            {
              content: "Nationality :",
            },
            {
              content: "German",
            },
          ],
        },
        {
          cells: [
            {
              content: "Date of birth :",
            },
            {
              content: "22/01/1972",
            },
          ],
        },
      ],
    },
    personalInfoLocation: {
      borderless: true,
      attributes: new drupalAttribute().addClass("w-100"),
      rows: [
        {
          cells: [
            {
              content: "Country :",
            },
            {
              content: "Germany",
            },
          ],
        },
        {
          cells: [
            {
              content: "City :",
            },
            {
              content: "Düsseldorf",
            },
          ],
        },
      ],
    },
    professionalInfo: {
      borderless: true,
      attributes: new drupalAttribute().addClass("w-100"),
      rows: [
        {
          cells: [
            {
              content: "Organisation :",
            },
            {
              content: "DG Test",
            },
          ],
        },
        {
          cells: [
            {
              content: "Position :",
            },
            {
              content: "Director",
            },
          ],
        },
      ],
    },
    professionalLanguages: {
      borderless: true,
      attributes: new drupalAttribute().addClass("w-100"),
      rows: [
        {
          cells: [
            {
              content: "Working languages :",
            },
            {
              content: "English, German",
            },
          ],
        },
      ],
    },
  },
};

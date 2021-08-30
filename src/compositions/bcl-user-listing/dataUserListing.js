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
    offcanvas: {
      id: "bcl-offcanvas",
      attributes: new drupalAttribute().addClass(
        "bcl-offcanvas offcanvas-start"
      ),
      extra_classes_close: "d-lg-none",
      extra_classes_header: "p-lg-0",
      with_body_scroll: true,
      title: {
        label: "Filter options",
        heading: 4,
        extra_classes: "mb-lg-4",
        id: "offcanvasExampleLabel",
      },
      search_input: {
        placeholder: "Search by name or surname",
        size: "sm",
        attributes: new drupalAttribute(),
      },
      text_input: {
        placeholder: "Placeholder",
        size: "sm",
        attributes: new drupalAttribute(),
      },
      single_select: {
        size: "sm",
        attributes: new drupalAttribute(),
        options: [
          { value: 1, label: "a select option" },
          { value: 2, label: "another select option" },
          { value: 3, label: "another option" },
          { value: 4, label: "last option" },
        ],
      },
      button_primary: {
        label: "Refine",
        type: "submit",
        variant: "primary",
        attributes: new drupalAttribute().addClass("me-2"),
      },
      button_secondary: {
        label: "Clear",
        type: "submit",
        variant: "secondary",
        attributes: new drupalAttribute(),
      },
    },
    cards: [
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 2,
          left_col_responsive: "md",
          right_col: 10,
          right_col_responsive: "md",
          gutter: 2,
        },
        badges: [
          {
            label: "Profile Type",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0",
        title: {
          content: "Stefan Mayer",
          classes: "mb-3",
        },
        card_tags: [
          {
            label: "Organisation",
            classes: "text-muted me-2",
          },
          {
            label: "Position",
            classes: "text-muted me-2",
          },
        ],
        content:
          "<div><span class='text-muted me-2'>Organisation</span><span class='text-muted me-2'>Position</span></div>",
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=1",
          alt: "alt img",
          position: "top",
        },
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 2,
          left_col_responsive: "md",
          right_col: 10,
          right_col_responsive: "md",
          gutter: 2,
        },
        badges: [
          {
            label: "Profile Type",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0",
        title: {
          content: "Adjur Tichar",
          classes: "mb-3",
        },
        card_tags: [
          {
            label: "Organisation",
            classes: "text-muted me-2",
          },
          {
            label: "Position",
            classes: "text-muted me-2",
          },
        ],
        content:
          "<div><span class='text-muted me-2'>Organisation</span><span class='text-muted me-2'>Position</span></div>",
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=2",
          alt: "alt img",
          position: "top",
        },
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 2,
          left_col_responsive: "md",
          right_col: 10,
          right_col_responsive: "md",
          gutter: 2,
        },
        badges: [
          {
            label: "Profile Type",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0",
        title: {
          content: "Szép Mara",
          classes: "mb-3",
        },
        content:
          "<div><span class='text-muted me-2'>Organisation</span><span class='text-muted me-2'>Position</span></div>",
        card_tags: [
          {
            label: "Organisation",
            classes: "text-muted me-2",
          },
          {
            label: "Position",
            classes: "text-muted me-2",
          },
        ],
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=3",
          alt: "alt img",
          position: "top",
        },
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 2,
          left_col_responsive: "md",
          right_col: 10,
          right_col_responsive: "md",
          gutter: 2,
        },
        badges: [
          {
            label: "Profile Type",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0",
        title: {
          content: "Daniel Cardoso Rocha",
          classes: "mb-3",
        },
        card_tags: [
          {
            label: "Organisation",
            classes: "text-muted me-2",
          },
          {
            label: "Position",
            classes: "text-muted me-2",
          },
        ],
        content:
          "<div><span class='text-muted me-2'>Organisation</span><span class='text-muted me-2'>Position</span></div>",
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=4",
          alt: "alt img",
          position: "top",
        },
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 2,
          left_col_responsive: "md",
          right_col: 10,
          right_col_responsive: "md",
          gutter: 2,
        },
        badges: [
          {
            label: "Profile Type",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0",
        title: {
          content: "Aurelia Panicucci",
          classes: "mb-3",
        },
        card_tags: [
          {
            label: "Organisation",
            classes: "text-muted me-2",
          },
          {
            label: "Position",
            classes: "text-muted me-2",
          },
        ],
        content:
          "<div><span class='text-muted me-2'>Organisation</span><span class='text-muted me-2'>Position</span></div>",
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=5",
          alt: "alt img",
          position: "top",
        },
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 2,
          left_col_responsive: "md",
          right_col: 10,
          right_col_responsive: "md",
          gutter: 2,
        },
        badges: [
          {
            label: "Profile Type",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0",
        title: {
          content: "Felicyta Kowalska",
          classes: "mb-3",
        },
        content:
          "<div><span class='text-muted me-2'>Organisation</span><span class='text-muted me-2'>Position</span></div>",
        card_tags: [
          {
            label: "Organisation",
            classes: "text-muted me-2",
          },
          {
            label: "Position",
            classes: "text-muted me-2",
          },
        ],
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=6",
          alt: "alt img",
          position: "top",
        },
      },
    ],
    pagination: {
      attributes: new drupalAttribute().addClass(["mt-5"]),
      alignment: "center",
      prev: {
        label: "Previous",
        path: "#",
      },
      next: {
        label: "Next",
        path: "#",
      },
      items: [
        {
          label: "1",
          path: "#",
          active: true,
        },
        {
          label: "2",
          path: "#",
        },
        {
          label: "3",
          path: "#",
        },
        {
          label: "4",
          path: "#",
        },
        {
          label: "5",
          path: "#",
        },
      ],
    },
    filter_button: {
      label: "Filter options",
      type: "button",
      variant: "primary",
      attributes: new drupalAttribute()
        .addClass(["d-lg-none", "w-100", "mb-4"])
        .setAttribute("data-bs-toggle", "offcanvas")
        .setAttribute("data-bs-target", "#bcl-offcanvas")
        .setAttribute("aria-controls", "bcl-offcanvas"),
      icon: {
        name: "sliders",
        size: "xs",
        attributes: new drupalAttribute().addClass(["ms-2"]),
      },
    },
    badges: [
      {
        label: "Name",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
      {
        label: "Organisation",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
    ],
    sort_select: {
      label: "Sort by",
      size: "sm",
      attributes: new drupalAttribute().addClass("mb-4"),
      options: [
        { value: 1, label: "a select option" },
        { value: 2, label: "another select option" },
        { value: 3, label: "another option" },
        { value: 4, label: "last option" },
        { label: "A-Z", selected: true },
      ],
    },
  },
};

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
      mobile_only: true,
      id: "offcanvas-mobile",
      with_close: true,
      title: {
        heading: 4,
        label: "Filter options",
      },
      attributes: new drupalAttribute(),
      body: {
        items: [
          {
            placeholder: "Keyword",
            size: "sm",
            attributes: new drupalAttribute(),
            element_type: "input",
          },
          {
            element_type: "html",
            content: '<p class="mt-4 mb-3">Content types</p>',
          },
          {
            element_type: "select",
            size: "sm",
            attributes: new drupalAttribute(),
            options: [
              { value: 1, label: "a select option" },
              { value: 2, label: "another select option" },
              { value: 3, label: "another option" },
              { value: 4, label: "last option" },
              { label: "the selected option", selected: true },
            ],
          },
          {
            element_type: "html",
            content: '<p class="mt-4 mb-3">Filter A</p>',
          },
          {
            element_type: "select",
            size: "sm",
            attributes: new drupalAttribute().addClass("multi-select"),
            multiple: true,
            clean_class: true,
            options: [
              { value: 1, label: "a select option" },
              { value: 2, label: "another select option" },
              { value: 3, label: "another option" },
              { value: 4, label: "last option" },
              { label: "the selected option", selected: true },
            ],
          },
          {
            element_type: "html",
            content: '<p class="mt-4 mb-3">Filter B</p>',
          },
          {
            element_type: "input",
            input_type: "checkbox",
            label: "Checked checkbox",
            size: "sm",
            checked: true,
            id: "first-check",
            attributes: new drupalAttribute(),
          },
          {
            element_type: "input",
            input_type: "checkbox",
            label: "Default checkbox",
            size: "sm",
            id: "second-check",
            attributes: new drupalAttribute(),
          },
          {
            element_type: "html",
            content: '<p class="mt-4 mb-3">Filter C</p>',
          },
          {
            element_type: "input",
            input_type: "date",
            size: "sm",
            attributes: new drupalAttribute().addClass("mb-2"),
          },
          {
            element_type: "input",
            size: "sm",
            input_type: "date",
            attributes: new drupalAttribute(),
          },
          {
            element_type: "button",
            label: "Refine",
            type: "submit",
            variant: "primary",
            attributes: new drupalAttribute().addClass(["me-2", "mt-4"]),
          },
          {
            element_type: "button",
            label: "Clear",
            type: "submit",
            variant: "secondary",
            attributes: new drupalAttribute().addClass("mt-4"),
          },
        ],
      },
    },
    cards: [
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 3,
          left_col_responsive: "md",
          right_col: 9,
          right_col_responsive: "md",
          gutter: 0,
        },
        title: {
          content: "Lorem ipsum dolor sit amet",
          classes: "mb-4",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          classes: "mb-4",
        },
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=1",
          alt: "alt img",
          position: "top",
        },
        content: "<span class='badge bg-primary'>Item 01</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 3,
          left_col_responsive: "md",
          right_col: 9,
          right_col_responsive: "md",
          gutter: 0,
        },
        title: {
          content: "Incididunt ut labore et dolore",
          classes: "mb-4",
        },
        text: {
          content:
            "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          classes: "mb-4",
        },
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=2",
          alt: "alt img",
          position: "top",
        },
        content:
          "<span class='badge bg-primary me-2'>Item 01</span><span class='badge bg-primary'>Item 02</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 3,
          left_col_responsive: "md",
          right_col: 9,
          right_col_responsive: "md",
          gutter: 0,
        },
        title: {
          content: "Quis nostrud exercitation ullamco",
          classes: "mb-4",
        },
        text: {
          content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          classes: "mb-4",
        },
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=3",
          alt: "alt img",
          position: "top",
        },
        content:
          "<span class='badge bg-primary me-2'>Item 01</span><span class='badge bg-primary'>Item 02</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 3,
          left_col_responsive: "md",
          right_col: 9,
          right_col_responsive: "md",
          gutter: 0,
        },
        title: {
          content: "Quis nostrud exercitation ullamco",
          classes: "mb-4",
        },
        text: {
          content:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          classes: "mb-4",
        },
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=4",
          alt: "alt img",
          position: "top",
        },
        content: "<span class='badge bg-primary'>Item 01</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 3,
          left_col_responsive: "md",
          right_col: 9,
          right_col_responsive: "md",
          gutter: 0,
        },
        title: {
          content: "Duis aute irure dolor in Excepteur",
          classes: "mb-4",
        },
        text: {
          content:
            "Duis aute irure dolor in Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          classes: "mb-4",
        },
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=5",
          alt: "alt img",
          position: "top",
        },
        content:
          "<span class='badge bg-primary me-2'>Item 01</span><span class='badge bg-primary'>Item 02</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col: 3,
          left_col_responsive: "md",
          right_col: 9,
          right_col_responsive: "md",
          gutter: 0,
        },
        title: {
          content: "Excepteur sint occaecat cupidatat non",
          classes: "mb-4",
        },
        text: {
          content:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          classes: "mb-4",
        },
        attributes: new drupalAttribute().addClass(["border-0", "mb-5"]),
        image: {
          path: "https://picsum.photos/200/200?random=6",
          alt: "alt img",
          position: "top",
        },
        content: "<span class='badge bg-primary'>Item 02</span>",
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
          disabled: true,
        },
        {
          label: "2",
          path: "#",
          active: true,
        },
        {
          label: "3",
          path: "#",
        },
      ],
    },
    filterButton: {
      label: "Filter options",
      type: "button",
      variant: "primary",
      attributes: new drupalAttribute()
        .addClass(["d-lg-none", "w-100", "mb-4"])
        .setAttribute("data-bs-toggle", "offcanvas")
        .setAttribute("data-bs-target", "#offcanvas-mobile")
        .setAttribute("aria-controls", "offcanvas-mobile"),
      icon: {
        name: "sliders",
        size: "xs",
        attributes: new drupalAttribute().addClass(["ms-2", "mt-1"]),
      },
    },
    badges: [
      {
        label: "News",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
      {
        label: "Item 01",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
      {
        label: "Item 02",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
    ],
    sortSelect: {
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

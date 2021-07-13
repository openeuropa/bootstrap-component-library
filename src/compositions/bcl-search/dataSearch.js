module.exports = {
  data: {
    navbar: {
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
    },
    searchInput: {
      placeholder: "Keyword",
      size: "sm",
    },
    singleSelect: {
      size: "sm",
      options: [
        { value: 1, label: "a select option" },
        { value: 2, label: "another select option" },
        { value: 3, label: "another option" },
        { value: 4, label: "last option" },
        { label: "the selected option", selected: true },
      ],
    },
    firstInputFilter: {
      type: "checkbox",
      label: "Checked checkbox",
      size: "sm",
      checked: true,
      id: "first-check",
    },
    secondInputFilter: {
      type: "checkbox",
      label: "Default checkbox",
      size: "sm",
      id: "second-check",
    },
    firstDatepickerFilter: {
      type: "date",
      size: "sm",
      extra_classes: "mb-2",
    },
    secondDatepickerFilter: {
      size: "sm",
      type: "date",
    },
    buttonPrimary: {
      extra_classes: "me-2",
      label: "Refine",
      type: "submit",
      variant: "primary",
    },
    buttonSecondary: {
      label: "Clear",
      type: "submit",
      variant: "secondary",
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
        extra_classes: "border-0 mb-5",
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
        extra_classes: "border-0 mb-5",
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
        extra_classes: "border-0 mb-5",
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
        extra_classes: "border-0 mb-5",
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
        extra_classes: "border-0 mb-5",
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
        extra_classes: "border-0 mb-5",
        image: {
          path: "https://picsum.photos/200/200?random=6",
          alt: "alt img",
          position: "top",
        },
        content: "<span class='badge bg-primary'>Item 02</span>",
      },
    ],
    pagination: {
      extra_classes: "mt-5",
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
      extra_classes: "d-lg-none w-100 mb-4",
      label: "Filter options",
      type: "button",
      variant: "primary",
      extra_attributes: [
        {
          name: "data-bs-toggle",
          value: "offcanvas",
        },
        {
          name: "data-bs-target",
          value: "#offcanvas-mobile",
        },
        {
          name: "aria-controls",
          value: "offcanvas-mobile",
        },
      ],
      icon: {
        name: "sliders",
        size: "xs",
        extra_classes: "ms-2 mt-1",
      },
    },
    badges: [
      {
        label: "News",
        dismissible: true,
        extra_classes: "me-2",
      },
      {
        label: "Item 01",
        dismissible: true,
        extra_classes: "me-2",
      },
      {
        label: "Item 02",
        dismissible: true,
        extra_classes: "me-2",
      },
    ],
    sortSelect: {
      label: "Sort by",
      size: "sm",
      extra_classes: "",
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

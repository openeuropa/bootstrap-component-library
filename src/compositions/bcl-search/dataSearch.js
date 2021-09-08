const drupalAttribute = require("drupal-attribute");

module.exports = {
  data: {
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
      search_form: {
        attributes: new drupalAttribute()
          .setAttribute("novalidate", true)
          .setAttribute("onsubmit", "return false;"),
        items: [
          [
            {
              classes: "mb-3",
              input_type: "text",
              placeholder: "Keyword",
              size: "sm",
            },
          ],
          [
            {
              classes: "mb-3",
              label: "Content types",
              type: "select",
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
          ],
          [
            {
              classes: "mb-3",
              label: "Filter A",
              type: "select",
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
          ],
          [
            {
              type: "fieldset",
              classes: "col-sm-10",
              legend: "Filter B",
              fieldset_classes: "mb-3",
              legend_classes: "col-form-label",
            },
            {
              input_type: "checkbox",
              label: "Checked checkbox",
              checked: true,
            },
            {
              input_type: "checkbox",
              label: "Default checkbox",
            },
          ],
          [
            {
              type: "fieldset",
              legend: "Filter C",
              fieldset_classes: "mb-3",
              legend_classes: "col-form-label",
            },
            {
              input_type: "date",
              size: "sm",
              attributes: new drupalAttribute().addClass("mb-2"),
            },
            {
              input_type: "date",
              size: "sm",
            },
          ],
        ],
        submit: {
          multiple: true,
          wrapper: "mt-4",
          items: [
            {
              label: "Refine",
              type: "submit",
              variant: "primary",
              attributes: new drupalAttribute().addClass("me-2"),
            },
            {
              label: "Clear",
              type: "submit",
              variant: "secondary",
            },
          ],
        },
      },
    },
    cards: [
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
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
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
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
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
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
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
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
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
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
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
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

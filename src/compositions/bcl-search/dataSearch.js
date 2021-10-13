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
              label: "Content types",
              type: "select",
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
              wrapper_classes: "mb-3",
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
              legend: "Creation date (from)",
              legend_classes: "col-form-label",
            },
            {
              input_type: "date",
              attributes: new drupalAttribute().addClass("mb-2"),
            },
          ],
          [
            {
              type: "fieldset",
              legend: "Creation date (to)",
              fieldset_classes: "mb-3",
              legend_classes: "col-form-label",
            },
            {
              input_type: "date",
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
              variant: "light",
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
        extra_classes_body: "p-0 p-md-3",
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Category 2",
            background: "primary",
          },
        ],
        title: {
          tag: "a",
          classes: "fs-5 text-decoration-none mb-2",
          attributes: [
            {
              name: "href",
              value: "/example.html",
            },
            {
              name: "target",
              value: "_blank",
            },
          ],
          content: "Lorem ipsum dolor sit amet",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          classes: "mb-3",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "p-0",
          "mb-4-5",
          "mb-md-4-75",
        ]),
        image: {
          path: "https://picsum.photos/175/200?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
          gutter: 0,
        },
        extra_classes_body: "p-0 p-md-3",
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: {
          tag: "a",
          classes: "fs-5 text-decoration-none mb-2",
          attributes: [
            {
              name: "href",
              value: "/example.html",
            },
          ],
          content: "Incididunt ut labore et dolore",
        },
        text: {
          content:
            "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          classes: "mb-3",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "p-0",
          "mb-4-5",
          "mb-md-4-75",
        ]),
        image: {
          path: "https://picsum.photos/175/200?random=2",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
          gutter: 0,
        },
        extra_classes_body: "p-0 p-md-3",
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Category 2",
            background: "primary",
          },
        ],
        title: {
          tag: "a",
          classes: "fs-5 text-decoration-none mb-2",
          attributes: [
            {
              name: "href",
              value: "/example.html",
            },
          ],
          content: "Quis nostrud exercitation ullamco",
        },
        text: {
          content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          classes: "mb-3",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "p-0",
          "mb-4-5",
          "mb-md-4-75",
        ]),
        image: {
          path: "https://picsum.photos/175/200?random=3",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
          gutter: 0,
        },
        extra_classes_body: "p-0 p-md-3",
        badges: [
          {
            label: "Category 1",
            background: "primary",
          },
        ],
        title: {
          tag: "a",
          classes: "fs-5 text-decoration-none mb-2",
          attributes: [
            {
              name: "href",
              value: "/example.html",
            },
          ],
          content: "Quis nostrud exercitation ullamco",
        },
        text: {
          content:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          classes: "mb-3",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "p-0",
          "mb-4-5",
          "mb-md-4-75",
        ]),
        image: {
          path: "https://picsum.photos/175/200?random=4",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
          gutter: 0,
        },
        extra_classes_body: "p-0 p-md-3",
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Category 2",
            background: "primary",
          },
        ],
        title: {
          tag: "a",
          classes: "fs-5 text-decoration-none mb-2",
          attributes: [
            {
              name: "href",
              value: "/example.html",
            },
          ],
          content: "Duis aute irure dolor in Excepteur",
        },
        text: {
          content:
            "Duis aute irure dolor in Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          classes: "mb-3",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "p-0",
          "mb-4-5",
          "mb-md-4-75",
        ]),
        image: {
          path: "https://picsum.photos/175/200?random=5",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-3",
          right_col_classes: "col-md-9",
          gutter: 0,
        },
        extra_classes_body: "p-0 p-md-3",
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Category 2",
            background: "primary",
          },
        ],
        title: {
          tag: "a",
          classes: "fs-5 text-decoration-none mb-2",
          attributes: [
            {
              name: "href",
              value: "/example.html",
            },
          ],
          content: "Excepteur sint occaecat cupidatat non",
        },
        text: {
          content:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          classes: "mb-3",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "p-0",
          "mb-4-5",
          "mb-md-4-75",
        ]),
        image: {
          path: "https://picsum.photos/175/200?random=6",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
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
      variant: "light",
      attributes: new drupalAttribute()
        .addClass(["d-lg-none", "w-100", "mb-4"])
        .setAttribute("data-bs-toggle", "offcanvas")
        .setAttribute("data-bs-target", "#bcl-offcanvas")
        .setAttribute("aria-controls", "bcl-offcanvas"),
      icon_position: "before",
      icon: {
        name: "filter",
        size: "xs",
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
    },
    badges: [
      {
        label: "News",
        background: "light",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
      {
        label: "Item 01",
        background: "light",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
      {
        label: "Item 02",
        background: "light",
        dismissible: true,
        attributes: new drupalAttribute().addClass(["me-2"]),
      },
    ],
    sort_select: {
      label: "Sort&nbsp;by",
      attributes: new drupalAttribute().addClass("mb-4 mb-md-0 ms-md-4"),
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

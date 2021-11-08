const drupalAttribute = require("drupal-attribute");

module.exports = {
  data: {
    main_title: "Groups (38)",
    offcanvas: {
      id: "bcl-offcanvas",
      attributes: new drupalAttribute().addClass(
        "bcl-offcanvas offcanvas-start"
      ),
      extra_classes_close: "d-lg-none",
      extra_classes_header: "pb-2-5 p-lg-0",
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
              type: "fieldset",
              classes: "col-sm-10",
              legend: "Group type",
              fieldset_classes: "mb-3",
              legend_classes: "col-form-label mb-2",
            },
            {
              input_type: "checkbox",
              label: "Public groups",
              wrapper_classes: "mb-3",
              checked: true,
            },
            {
              input_type: "checkbox",
              label: "Restricted groups",
              wrapper_classes: "mb-3",
              checked: true,
            },
            {
              input_type: "checkbox",
              label: "Private groups",
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
              attributes: new drupalAttribute().addClass("mb-2"),
            },
          ],
        ],
        submit: {
          multiple: true,
          wrapper: "mt-4 d-grid d-md-block",
          items: [
            {
              label: "Refine",
              type: "submit",
              variant: "primary",
              attributes: new drupalAttribute().addClass([
                "me-md-3",
                "mb-3-5",
                "mb-md-0",
              ]),
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
          left_col_classes: "col-md-2",
          right_col_classes: "col-md-10",
          gutter: 2,
        },
        badges: [
          {
            label: "Public",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0 px-0 px-md-2-5",
        title: {
          content: "Group name",
          classes: "mb-3 h5 text-underline-hover d-block",
          tag: "a",
          attributes: [
            {
              name: "href",
              value: "example.html",
            },
          ],
        },
        text: {
          content:
            "Some quick example text to build on the card and title and make up the bulk of the cards content.",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-4",
          "mb-md-5",
        ]),
        image: {
          path: "https://picsum.photos/200/200?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        border_bottom: true,
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-2",
          right_col_classes: "col-md-10",
          gutter: 2,
        },
        badges: [
          {
            label: "Public",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0 px-0 px-md-2-5",
        title: {
          content: "Group name",
          classes: "mb-3 h5 text-underline-hover d-block",
          tag: "a",
          attributes: [
            {
              name: "href",
              value: "example.html",
            },
          ],
        },
        text: {
          content:
            "Some quick example text to build on the card and title and make up the bulk of the cards content.",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-4",
          "mb-md-5",
        ]),
        image: {
          path: "https://picsum.photos/200/200?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        border_bottom: true,
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-2",
          right_col_classes: "col-md-10",
          gutter: 2,
        },
        badges: [
          {
            label: "Public",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0 px-0 px-md-2-5",
        title: {
          content: "Group name",
          classes: "mb-3 h5 text-underline-hover d-block",
          tag: "a",
          attributes: [
            {
              name: "href",
              value: "example.html",
            },
          ],
        },
        text: {
          content:
            "Some quick example text to build on the card and title and make up the bulk of the cards content.",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-4",
          "mb-md-5",
        ]),
        image: {
          path: "https://picsum.photos/200/200?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        border_bottom: true,
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-2",
          right_col_classes: "col-md-10",
          gutter: 2,
        },
        badges: [
          {
            label: "Public",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0 px-0 px-md-2-5",
        title: {
          content: "Group name",
          classes: "mb-3 h5 text-underline-hover d-block",
          tag: "a",
          attributes: [
            {
              name: "href",
              value: "example.html",
            },
          ],
        },
        text: {
          content:
            "Some quick example text to build on the card and title and make up the bulk of the cards content.",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-4",
          "mb-md-5",
        ]),
        image: {
          path: "https://picsum.photos/200/200?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        border_bottom: true,
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-2",
          right_col_classes: "col-md-10",
          gutter: 2,
        },
        badges: [
          {
            label: "Public",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0 px-0 px-md-2-5",
        title: {
          content: "Group name",
          classes: "mb-3 h5 text-underline-hover d-block",
          tag: "a",
          attributes: [
            {
              name: "href",
              value: "example.html",
            },
          ],
        },
        text: {
          content:
            "Some quick example text to build on the card and title and make up the bulk of the cards content.",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-4",
          "mb-md-5",
        ]),
        image: {
          path: "https://picsum.photos/200/200?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        border_bottom: true,
      },
      {
        horizontal: true,
        horizontal_grid: {
          left_col_classes: "col-md-2",
          right_col_classes: "col-md-10",
          gutter: 2,
        },
        badges: [
          {
            label: "Public",
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        extra_classes_body: "pt-0 px-0 px-md-2-5",
        title: {
          content: "Group name",
          classes: "mb-3 h5 text-underline-hover d-block",
          tag: "a",
          attributes: [
            {
              name: "href",
              value: "example.html",
            },
          ],
        },
        text: {
          content:
            "Some quick example text to build on the card and title and make up the bulk of the cards content.",
        },
        attributes: new drupalAttribute().addClass([
          "border-0",
          "mb-4",
          "mb-md-5",
        ]),
        image: {
          path: "https://picsum.photos/200/200?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
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
      ],
    },
    filter_button: {
      label: "Filter options",
      type: "button",
      variant: "light",
      attributes: new drupalAttribute()
        .addClass(["d-lg-none", "w-100", "mb-3-5"])
        .setAttribute("data-bs-toggle", "offcanvas")
        .setAttribute("data-bs-target", "#bcl-offcanvas")
        .setAttribute("aria-controls", "bcl-offcanvas"),
      icon_position: "before",
      icon: {
        name: "filter",
        size: "xs",
        attributes: new drupalAttribute().addClass(["ms-2"]),
      },
    },
    badges: [
      {
        label: "Public",
        background: "light",
        dismissible: true,
        attributes: new drupalAttribute().addClass([
          "me-2",
          "text-dark",
          "mb-2",
        ]),
      },
      {
        label: "Restricted",
        background: "light",
        dismissible: true,
        attributes: new drupalAttribute().addClass([
          "me-2",
          "text-dark",
          "mb-2",
        ]),
      },
      {
        label: "Private",
        background: "light",
        dismissible: true,
        attributes: new drupalAttribute().addClass([
          "me-2",
          "text-dark",
          "mb-2",
        ]),
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
        { label: "Name", selected: true },
      ],
    },
  },
};

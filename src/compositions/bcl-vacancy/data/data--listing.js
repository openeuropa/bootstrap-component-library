const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("bcl-offcanvas offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "p-lg-0",
    with_body_scroll: true,
    title: "Filter options",
    title_attributes: new drupalAttribute().addClass("mb-lg-4"),
    search_form: {
      attributes: new drupalAttribute()
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      items: [
        [
          {
            type: "fieldset",
            classes: "col-sm-10",
            legend: "Status",
            fieldset_classes: "mb-2",
            legend_classes: "col-form-label",
          },
          {
            input_type: "checkbox",
            label: "Opened",
            wrapper_classes: "mb-2",
            checked: true,
            id: "opened",
          },
          {
            input_type: "checkbox",
            label: "Closed",
            wrapper_classes: "mb-2",
            checked: true,
            id: "closed",
          },
        ],
        [
          {
            classes: "mb-3",
            label: "Type",
            type: "select",
            id: "type",
            options: [
              { value: 1, label: "a select option" },
              { value: 2, label: "another select option" },
              { value: 3, label: "another option" },
              { value: 4, label: "last option" },
              { label: "All", selected: true },
            ],
          },
        ],
        [
          {
            label: "Opening date",
            id: "opening-date",
            input_type: "date",
            attributes: new drupalAttribute().addClass("mb-2"),
          },
        ],
        [
          {
            label: "Closing date",
            id: "closing-date",
            input_type: "date",
            attributes: new drupalAttribute().addClass("mb-3"),
          },
        ],
      ],
      submit: {
        multiple: true,
        wrapper: "mt-4 d-grid gap-4 d-md-block",
        items: [
          {
            label: "Refine",
            type: "submit",
            variant: "primary",
            attributes: new drupalAttribute().addClass("me-md-3"),
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
  badges: [
    {
      label: "Opened",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "mb-2"]),
    },
  ],
  listing: {
    variant: "default-1-col",
    remove_horizontal_spacer: true,
    responsive_vertical_spacer: "md",
    items: [
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 2",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Senior Expert on Internal Models",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Opened",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Vacancy exemple title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
    ],
  },
};

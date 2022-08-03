const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  banner: {
    title: "Procurements",
    title_tag: "h1",
    content: getDummyText(5),
    image: {
      path: "https://picsum.photos/255/255?random=6",
      alt: "alt img",
    },
  },
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("offcanvas-start"),
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
            label: "Keyword",
            id: "keyword",
            input_type: "text",
            placeholder: "Type a keyword",
            attributes: new drupalAttribute().addClass("mb-3"),
          },
        ],
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
            id: "opened",
          },
          {
            input_type: "checkbox",
            label: "Closed",
            wrapper_classes: "mb-2",
            checked: true,
            id: "closed",
          },
          {
            input_type: "checkbox",
            label: "Canceled",
            wrapper_classes: "mb-2",
            checked: true,
            id: "canceled",
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
            attributes: new drupalAttribute().addClass("mb-3"),
          },
        ],
        [
          {
            label: "Closing date",
            id: "closing-date",
            input_type: "date",
            attributes: new drupalAttribute().addClass("mb-4-5"),
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
      label: "Closed",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "mb-2"]),
    },
    {
      label: "Canceled",
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
            label: "Closed",
            background: "dark",
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
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Canceled",
            background: "danger",
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
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(3),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Canceled",
            background: "danger",
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 3",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(2),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Closed",
            background: "dark",
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Type 3",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(4),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Closed",
            background: "dark",
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
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(2),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Canceled",
            background: "danger",
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
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(5),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Canceled",
            background: "danger",
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
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Closed",
            background: "dark",
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
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(2),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Closed",
            background: "dark",
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
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(3),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
      {
        badges: [
          {
            label: "Canceled",
            background: "danger",
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
        title: "Procurement title example",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(5),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Opening date : 19 April 2022</span><span class='ms-4 text-muted text-nowrap'>Closing date : 21 December 2022</span>",
      },
    ],
  },
};

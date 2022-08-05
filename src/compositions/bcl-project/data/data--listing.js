const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "p-lg-0",
    close_aria_label: "Close button",
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
            classes: "mb-3",
            label: "Project type",
            type: "select",
            id: "project-type",
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
            type: "fieldset",
            classes: "col-sm-10",
            legend: "Status",
            fieldset_classes: "mb-3",
            legend_classes: "col-form-label",
          },
          {
            input_type: "checkbox",
            label: "Ongoing",
            wrapper_classes: "mb-3",
            checked: true,
            id: "ongoing",
          },
          {
            input_type: "checkbox",
            label: "Closed",
            checked: true,
            id: "closed",
          },
        ],
        [
          {
            classes: "mb-3",
            label: "Total budget",
            type: "select",
            id: "total-budget",
            options: [
              { value: 1, label: "a select option" },
              { value: 2, label: "another select option" },
              { value: 3, label: "another option" },
              { value: 4, label: "last option" },
              { label: "0-100", selected: true },
            ],
          },
        ],
        [
          {
            label: "Start date",
            id: "start-date",
            input_type: "date",
            attributes: new drupalAttribute().addClass("mb-2"),
          },
        ],
        [
          {
            label: "End date",
            id: "end-date",
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
      label: "Ongoing",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "mb-2"]),
    },
    {
      label: "Closed",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "mb-2"]),
    },
    {
      label: "Start date: 22/01/2019",
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
            label: "Ongoing",
            background: "info",
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "LIFE 2018",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "LIFE IP ARTISAN",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(2),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap'>December 2020 - 19 December 2027</span>",
      },
      {
        badges: [
          {
            label: "Ongoing",
            background: "info",
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "LIFE 2018",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "SMILE",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(3),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=2",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap'>December 2020 - 19 December 2027</span>",
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
            label: "Type",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Project title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=3",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap'>December 2020 - 19 December 2027</span>",
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
            label: "LIFE 2018",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "LIFE IP ARTISAN",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(5),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>December 2020 - 19 December 2027</span>",
      },
      {
        badges: [
          {
            label: "Ongoing",
            background: "info",
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "LIFE 2018",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "SMILE",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>December 2020 - 19 December 2027</span>",
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
            label: "Type",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "Project title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>December 2020 - 19 December 2027</span>",
      },
    ],
  },
};

const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
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
            label: "Creation date (from)",
            id: "creation-date-from",
            input_type: "date",
            attributes: new drupalAttribute().addClass("mb-2"),
          },
        ],
        [
          {
            label: "Creation date (to)",
            id: "creation-date-to",
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
      label: "News",
      background: "light",
      icon_path: "/icons.svg",
      dismissible: true,
      attributes: new drupalAttribute().addClass(["me-2"]),
    },
    {
      label: "Item 01",
      background: "light",
      icon_path: "/icons.svg",
      dismissible: true,
      attributes: new drupalAttribute().addClass(["me-2"]),
    },
    {
      label: "Item 02",
      background: "light",
      icon_path: "/icons.svg",
      dismissible: true,
      attributes: new drupalAttribute().addClass(["me-2"]),
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
            label: "Category 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Category 2",
            background: "primary",
            outline: true,
            rounded_pill: true,
          },
        ],
        title: "News title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content: "<span class='text-muted text-nowrap'>17 October 2019</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "News title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=2",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content: "<span class='text-muted text-nowrap'>17 October 2019</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Category 2",
            background: "primary",
            outline: true,
            rounded_pill: true,
          },
          {
            label: "Category 3",
            background: "primary",
            outline: true,
            rounded_pill: true,
          },
        ],
        title: "News title",
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
        content: "<span class='text-muted text-nowrap'>17 October 2019</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "News title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=4",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content: "<span class='text-muted text-nowrap'>17 October 2019</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
          {
            label: "Category 2",
            background: "primary",
            outline: true,
            rounded_pill: true,
          },
        ],
        title: "News title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=5",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content: "<span class='text-muted text-nowrap'>17 October 2019</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: "News title",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=6",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content: "<span class='text-muted text-nowrap'>17 October 2019</span>",
      },
    ],
  },
};

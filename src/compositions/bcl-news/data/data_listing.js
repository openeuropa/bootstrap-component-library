const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("bcl-offcanvas offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "p-lg-0",
    with_body_scroll: true,
    title: {
      label: "Filter options",
      heading: 4,
      extra_classes: "mb-lg-4",
    },
    search_form: {
      attributes: new drupalAttribute()
        .setAttribute("novalidate", true)
        .setAttribute("onsubmit", "return false;"),
      items: [
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
  pagination: {
    attributes: new drupalAttribute().addClass(["mt-4"]),
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
    size: "lg",
    attributes: new drupalAttribute()
      .addClass(["d-lg-none", "w-100", "mb-4"])
      .setAttribute("data-bs-toggle", "offcanvas")
      .setAttribute("data-bs-target", "#bcl-offcanvas")
      .setAttribute("aria-controls", "bcl-offcanvas"),
    icon_position: "before",
    icon: {
      name: "filter",
      path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2"]),
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
  sort_select: {
    label: "Sort&nbsp;by",
    aria_label: "sort-by-select",
    label_extra_classes: "mb-0",
    attributes: new drupalAttribute().addClass("mb-4 mb-md-0"),
    options: [
      { value: 1, label: "a select option" },
      { value: 2, label: "another select option" },
      { value: 3, label: "another option" },
      { value: 4, label: "last option" },
      { label: "publication date", selected: true },
    ],
  },
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
        title: {
          content: "<a href='/example.html' class='standalone'>News title</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
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
        title: {
          content: "<a href='/example.html' class='standalone'>News title</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
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
        title: {
          content: "<a href='/example.html' class='standalone'>News title</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
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
        title: {
          content: "<a href='/example.html' class='standalone'>News title</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
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
        title: {
          content: "<a href='/example.html' class='standalone'>News title</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
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
        title: {
          content: "<a href='/example.html' class='standalone'>News title</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
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

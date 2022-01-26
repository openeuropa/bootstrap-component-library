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
            wrapper_classes: "mb-2",
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
  sort_select: {
    label: "Sort&nbsp;by",
    aria_label: "sort-by-select",
    attributes: new drupalAttribute().addClass("mb-4 mb-md-0"),
    options: [
      { value: 1, label: "a select option" },
      { value: 2, label: "another select option" },
      { value: 3, label: "another option" },
      { value: 4, label: "last option" },
      { label: "Title", selected: true },
    ],
  },
  badges: [
    {
      label: "Ongoing",
      background: "light",
      dismissible: true,
      icons_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "mb-2"]),
    },
    {
      label: "Closed",
      background: "light",
      dismissible: true,
      icons_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2", "mb-2"]),
    },
    {
      label: "Start date: 22/01/2019",
      background: "light",
      dismissible: true,
      icons_path: "/icons.svg",
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
            label: "LIFE 2018",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>LIFE IP ARTISAN</a>",
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
        content:
          "<span class='text-muted text-nowrap'>Ongoing ( 2019 - 2015 )</span>",
      },
      {
        badges: [
          {
            label: "LIFE 2018",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>SMILE</a>",
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
        content:
          "<span class='text-muted text-nowrap'>Ongoing ( 2011 - 2023 )</span>",
      },
      {
        badges: [
          {
            label: "Type",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Project title</a>",
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
        content:
          "<span class='text-muted text-nowrap'>Closed ( 2011 - 2013 )</span>",
      },
      {
        badges: [
          {
            label: "LIFE 2018",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>LIFE IP ARTISAN</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Ongoing ( 2019 - 2015 )</span>",
      },
      {
        badges: [
          {
            label: "LIFE 2018",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>SMILE</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Ongoing ( 2011 - 2023 )</span>",
      },
      {
        badges: [
          {
            label: "Type",
            background: "primary",
            outline: true,
            rounded_pill: true,
            attributes: new drupalAttribute().addClass(["me-2"]),
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Project title</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
          classes: "mb-2-5",
        },
        content:
          "<span class='text-muted text-nowrap'>Closed ( 2011 - 2013 )</span>",
      },
    ],
  },
};

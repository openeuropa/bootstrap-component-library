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
            label: "Name",
            input_type: "text",
            placeholder: "Placeholder",
          },
        ],
        [
          {
            classes: "mb-3",
            label: "Organisation",
            input_type: "text",
            placeholder: "Placeholder",
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
  listing: {
    variant: "default-1-col",
    remove_horizontal_spacer: true,
    alignment: "center",
    items: [
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Stefan Mayer</a>",
        },
        content:
          "<span class='text-muted me-4-5'>Organisation</span><span class='text-muted me-2'>Position</span>",
        image: {
          path: "https://picsum.photos/160?random=1",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Adjur Tichar</a>",
        },
        content:
          "<span class='text-muted me-4-5'>Organisation</span><span class='text-muted me-2'>Position</span>",
        image: {
          path: "https://picsum.photos/160?random=2",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content: "<a href='/example.html' class='standalone'>Szép Mara</a>",
        },
        content:
          "<span class='text-muted me-4-5'>Organisation</span><span class='text-muted me-2'>Position</span>",
        image: {
          path: "https://picsum.photos/160?random=3",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Daniel Cardoso Rocha</a>",
        },
        content:
          "<span class='text-muted me-4-5'>Organisation</span><span class='text-muted me-2'>Position</span>",
        image: {
          path: "https://picsum.photos/160?random=4",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Aurelia Panicucci</a>",
        },
        content:
          "<span class='text-muted me-4-5'>Organisation</span><span class='text-muted me-2'>Position</span>",
        image: {
          path: "https://picsum.photos/160?random=5",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='standalone'>Felicyta Kowalska</a>",
        },
        content:
          "<span class='text-muted me-4-5'>Organisation</span><span class='text-muted me-2'>Position</span>",
        image: {
          path: "https://picsum.photos/160?random=6",
          alt: "alt img",
          position: "top",
        },
      },
    ],
  },
  pagination: {
    attributes: new drupalAttribute().addClass(["mt-4-5"]),
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
      {
        label: "4",
        path: "#",
      },
      {
        label: "5",
        path: "#",
      },
    ],
  },
  filter_button: {
    label: "Filter options",
    type: "button",
    size: "lg",
    variant: "light",
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
      label: "Name",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2"]),
    },
    {
      label: "Organisation",
      background: "light",
      dismissible: true,
      icon_path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2"]),
    },
  ],
  sort_select: {
    label: "Sort&nbsp;by",
    attributes: new drupalAttribute().addClass("mb-4 mb-md-0 ms-md-4"),
    aria_label: "sort-select",
    label_extra_classes: "mb-0",
    options: [
      { value: 1, label: "a select option" },
      { value: 2, label: "another select option" },
      { value: 3, label: "another option" },
      { value: 4, label: "last option" },
      { label: "A-Z", selected: true },
    ],
  },
};

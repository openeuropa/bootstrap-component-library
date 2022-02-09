const drupalAttribute = require("drupal-attribute");

module.exports = {
  banner: {
    search_bar: {
      submit: {
        attributes: new drupalAttribute().addClass([
          "bcl-search-form__submit",
          "px-3",
        ]),
        label: "<span class='d-none d-lg-inline-block'>Search</span>",
        icon_position: "before",
        icon_spacing: "lg",
        icon: {
          name: "search",
          size: "xs",
          path: "/icons.svg",
          attributes: new drupalAttribute().addClass(["d-inline-block"]),
        },
      },
      input: {
        placeholder: "Search",
        attributes: new drupalAttribute().addClass(["bcl-search-form__input"]),
        label: "Search bar label",
        input_type: "search",
      },
    },
  },
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
            label: "Content types",
            type: "select",
            id: "content-types",
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
            id: "filter-select-a",
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
            id: "checked-input",
          },
          {
            input_type: "checkbox",
            label: "Default checkbox",
            id: "default-input",
          },
        ],
        [
          {
            label: "Creation date (from)",
            input_type: "date",
            attributes: new drupalAttribute().addClass("mb-2"),
            id: "creation-date-from",
            wrapper_classes: "mb-3",
          },
        ],
        [
          {
            input_type: "date",
            label: "Creation date (to)",
            wrapper_classes: "mb-3",
            attributes: new drupalAttribute().addClass("mb-2"),
            id: "creation-date-to",
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
          content:
            "<a href='/example.html' class='text-underline-hover'>Lorem ipsum dolor sit amet</a>",
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
            outline: true,
            rounded_pill: true,
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Incididunt ut labore et dolore</a>",
        },
        text: {
          content:
            "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=2",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
            outline: true,
            rounded_pill: true,
          },
          {
            label: "Category 2",
            background: "primary",
            outline: true,
            rounded_pill: true,
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Quis nostrud exercitation ullamco</a>",
        },
        text: {
          content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=3",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            outline: true,
            rounded_pill: true,
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Quis nostrud exercitation ullamco</a>",
        },
        text: {
          content:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=4",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
            outline: true,
            rounded_pill: true,
          },
          {
            label: "Category 2",
            background: "primary",
            outline: true,
            rounded_pill: true,
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Duis aute irure dolor in Excepteur</a>",
        },
        text: {
          content:
            "Duis aute irure dolor in Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=5",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
      {
        badges: [
          {
            label: "Category 1",
            background: "primary",
            attributes: new drupalAttribute().addClass(["me-2"]),
            outline: true,
            rounded_pill: true,
          },
          {
            label: "Category 2",
            background: "primary",
            outline: true,
            rounded_pill: true,
          },
        ],
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Excepteur sint occaecat cupidatat non</a>",
        },
        text: {
          content:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=6",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
        content:
          "<span class='text-muted text-nowrap me-4-5'>8 hours ago</span><span class='text-muted text-nowrap'>1 comment</span>",
      },
    ],
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
    attributes: new drupalAttribute().addClass("mb-4 mb-md-0 ms-md-4"),
    aria_label: "sort-by-select",
    options: [
      { value: 1, label: "a select option" },
      { value: 2, label: "another select option" },
      { value: 3, label: "another option" },
      { value: 4, label: "last option" },
      { label: "A-Z", selected: true },
    ],
  },
};

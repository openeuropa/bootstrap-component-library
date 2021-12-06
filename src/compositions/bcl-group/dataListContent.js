const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("bcl-offcanvas offcanvas-start"),
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
  listing: {
    attributes: new drupalAttribute(),
    variant: "default-1-col",
    remove_horizontal_spacer: true,
    items: [
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Article title</a>",
        },
        text: {
          classes: "mb-2-5",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
        content:
          "<span class='text-muted me-4'>Brussels, Belgium</span><span class='text-muted me-4'>17 October 2019</span>",
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
            "<a href='/example.html' class='text-underline-hover'>Group name</a>",
        },
        text: {
          classes: "mb-2-5",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
        content:
          "<span class='text-muted me-4'>Brussels, Belgium</span><span class='text-muted me-4'>17 October 2019</span>",
        image: {
          path: "https://picsum.photos/160?random=2",
          alt: "alt img",
          position: "top",
        },
      },
      {
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: {
          content:
            "<a href='/example.html' class='text-underline-hover'>Group name</a>",
        },
        text: {
          classes: "mb-2-5",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
        content:
          "<span class='text-muted me-4'>Brussels, Belgium</span><span class='text-muted me-4'>17 October 2019</span>",
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
            "<a href='/example.html' class='text-underline-hover'>Group name</a>",
        },
        text: {
          classes: "mb-2-5",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
        content:
          "<span class='text-muted me-4'>Brussels, Belgium</span><span class='text-muted me-4'>17 October 2019</span>",
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
            "<a href='/example.html' class='text-underline-hover'>Group name</a>",
        },
        text: {
          classes: "mb-2-5",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
        content:
          "<span class='text-muted me-4'>Brussels, Belgium</span><span class='text-muted me-4'>17 October 2019</span>",
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
            "<a href='/example.html' class='text-underline-hover'>Group name</a>",
        },
        text: {
          classes: "mb-2-5",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
        content:
          "<span class='text-muted me-4'>Brussels, Belgium</span><span class='text-muted me-4'>17 October 2019</span>",
        image: {
          path: "https://picsum.photos/160?random=6",
          alt: "alt img",
          position: "top",
        },
      },
    ],
  },
};

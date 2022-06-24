const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  sidebar: {
    id: "bcl-offcanvas",
    attributes: new drupalAttribute().addClass("bcl-offcanvas offcanvas-start"),
    extra_classes_close: "d-lg-none",
    extra_classes_header: "pb-2-5 p-lg-0",
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
            legend: "Group type",
            fieldset_classes: "mb-3",
            legend_classes: "col-form-label mb-2",
          },
          {
            input_type: "checkbox",
            label: "Public groups",
            wrapper_classes: "mb-3",
            checked: true,
            id: "public-groups",
          },
          {
            input_type: "checkbox",
            label: "Restricted groups",
            wrapper_classes: "mb-3",
            checked: true,
            id: "restricted-groups",
          },
          {
            input_type: "checkbox",
            label: "Private groups",
            id: "private-groups",
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
    variant: "default-1-col",
    remove_horizontal_spacer: true,
    responsive_vertical_spacer: "md",
    items: [
      {
        badges: [
          {
            label: "Public",
            outline: true,
            rounded_pill: true,
          },
        ],
        title: "Group name",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(3),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=1",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
      },
      {
        badges: [
          {
            label: "Public",
            outline: true,
            rounded_pill: true,
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: "Group name",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(2),
        },
        image: {
          path: "https://picsum.photos/160?random=2",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
      },
      {
        badges: [
          {
            label: "Public",
            outline: true,
            rounded_pill: true,
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: "Group name",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(5),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=3",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
      },
      {
        badges: [
          {
            label: "Public",
            outline: true,
            rounded_pill: true,
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: "Group name",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(6),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=4",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
      },
      {
        badges: [
          {
            label: "Public",
            outline: true,
            rounded_pill: true,
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: "Group name",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(5),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=5",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
      },
      {
        badges: [
          {
            label: "Public",
            outline: true,
            rounded_pill: true,
          },
        ],
        extra_classes_header: "bg-transparent pt-0 pb-0 border-0",
        title: "Group name",
        title_link: {
          path: "/example.html",
        },
        text: {
          content: getDummyText(4),
          classes: "mb-2-5",
        },
        image: {
          path: "https://picsum.photos/160?random=6",
          alt: "alt img",
          position: "top",
          classes: "d-none d-md-block",
        },
      },
    ],
  },
};

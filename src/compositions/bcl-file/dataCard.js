const drupalAttribute = require("drupal-attribute");

module.exports = {
  file: {
    extension: "PDF",
    language: "English",
    size: "16.2 MB",
  },
  download: {
    label: "Download",
    url: "/example.html",
    icon_position: "after",
    icon: {
      name: "download",
      size: "fluid",
    },
  },
  other_dropdown: {
    id: "language-dropdown",
    alignment: "center",
    dropdown_label: {
      label: "Other languages (3)",
      icon_position: "after",
      icon: {
        name: "caret-down-fill",
        size: "2xs",
      },
    },
    items: [
      {
        title: "File title FR",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est.",
        extension: "PDF",
        language: "Français",
        size: "16.2 MB",
        inline_download: true,
        download: {
          label: "Download",
          url: "/example.html",
          icon_position: "after",
          icon: {
            name: "download",
            size: "fluid",
          },
        },
      },
      {
        title: "File title ES",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est.",
        extension: "PDF",
        language: "Español",
        size: "16.2 MB",
        inline_download: true,
        download: {
          label: "Download",
          url: "/example.html",
          icon_position: "after",
          icon: {
            name: "download",
            size: "fluid",
          },
        },
      },
      {
        title: "File title BG",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est.",
        extension: "PDF",
        language: "български",
        size: "16.2 MB",
        inline_download: true,
        download: {
          label: "Download",
          url: "/example.html",
          icon_position: "after",
          icon: {
            name: "download",
            size: "fluid",
          },
        },
      },
      {
        type: "content",
        content:
          "<p class='mb-2 d-inline-block me-2'>Looking for another language which is not on the list? </p><a href='/example.html' class='text-underline-hover'>Find out why.</a>",
      },
    ],
  },
  card: {
    horizontal: true,
    horizontal_grid: {
      left_col_classes: "col-4 order-2",
      right_col_classes: "col-8",
    },
    title: {
      content: "Title card",
    },
    text: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
      classes: "mb-2",
    },
    content:
      "<span class='text-muted me-3 text-nowrap'>Resource type</span><span class='text-muted me-3 text-nowrap'>17 October 2019</span>",
    image: {
      path: "https://picsum.photos/seed/1002/600/400",
      alt: "alt img",
      position: "top",
    },
    badges: [
      {
        label: "Label",
      },
      {
        label: "Label",
      },
    ],
  },
  attributes: new drupalAttribute(),
};

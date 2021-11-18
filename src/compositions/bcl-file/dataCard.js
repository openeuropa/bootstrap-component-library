const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "<a href='#' class='text-underline-hover'>Article title</a>",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
  content:
    "<span class='text-muted d-block d-md-inline-block me-3 mb-3 mb-md-0 text-nowrap'>Article</span><span class='text-muted d-block d-md-inline-block me-3 mb-3 mb-md-0 text-nowrap'>Brussels, Belgium</span><span class='text-muted d-block d-md-inline-block me-3 text-nowrap'>17 October 2019</span>",
  image: {
    path: "https://picsum.photos/seed/1002/600/400",
    alt: "alt img",
  },
  badges: [
    {
      label: "Label",
    },
    {
      label: "Label",
    },
  ],
  language: "English",
  meta: "(16.2 MB - PDF)",
  download: {
    label: "Download",
    url: "/example.html",
  },
  variant: "card",
  translation: {
    id: "language-dropdown",
    alignment: "center",
    label: {
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
        language: "Français",
        meta: "(16.2 MB - PDF)",
        download: {
          label: "Download",
          url: "/example.html",
        },
      },
      {
        title: "File title ES",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est.",
        language: "Español",
        meta: "(16.2 MB - PDF)",
        download: {
          label: "Download",
          url: "/example.html",
        },
      },
      {
        title: "File title BG",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est.",
        language: "български",
        meta: "(16.2 MB - PDF)",
        download: {
          label: "Download",
          url: "/example.html",
        },
      },
      {
        type: "content",
        content:
          "<p class='mb-2 d-inline-block me-2'>Looking for another language which is not on the list? </p><a href='/example.html' class='text-underline-hover'>Find out why.</a>",
      },
    ],
  },
  attributes: new drupalAttribute(),
};

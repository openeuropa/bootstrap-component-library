module.exports = {
  variant: "card",
  item_title: "Article title",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
  content:
    "<span class='text-muted d-inline-block me-3 mb-3 mb-md-0 text-nowrap'>Article</span><span class='text-muted d-inline-block me-3 mb-3 mb-md-0 text-nowrap'>Published : 3 September 2022</span>",
  icon_path: "/icons.svg",
  icon: {
    name: "file-pdf-fill",
    size: "xl",
  },
  badges: [
    {
      label: "Label",
      outline: true,
      rounded_pill: true,
    },
    {
      label: "Label",
      outline: true,
      rounded_pill: true,
    },
  ],
  language: "English",
  meta: "(16.2 MB - PDF)",
  download: {
    label: "Download",
    path: "/example.html",
  },
  translation: {
    alignment: "center",
    id: "language-dropdown",
    label: {
      label: "Other languages (3)",
      icon_position: "after",
      icon: {
        name: "caret-down-fill",
        size: "2xs",
        path: "/icons.svg",
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
          path: "/example.html",
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
          path: "/example.html",
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
          path: "/example.html",
        },
      },
      {
        type: "content",
        content:
          "<p class='mb-2 d-inline-block me-2'>Looking for another language which is not on the list? </p><a href='/example.html'>Find out why.</a>",
      },
    ],
  },
};

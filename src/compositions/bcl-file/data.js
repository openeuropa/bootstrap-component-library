module.exports = {
  item_title: "File title",
  language: "English",
  meta: "(16.2 MB - PDF)",
  icon_path: "/icons.svg",
  download: {
    label: "Download",
    url: "/example.html",
  },
  icon: {
    name: "file-pdf-fill",
    size: "xl",
  },
  translation: {
    alignment: "center",
    label: {
      label: "Other languages (3)",
      icon_position: "after",
      icon: {
        name: "caret-down-fill",
        path: "/icons.svg",
        size: "2xs",
      },
    },
    items: [
      {
        language: "български",
        meta: "(16.2 MB - PDF)",
        download: {
          label: "Download",
          url: "/example.html",
        },
      },
      {
        language: "Español",
        meta: "(16.2 MB - PDF)",
        download: {
          label: "Download",
          url: "/example.html",
        },
      },
      {
        language: "Français",
        meta: "(16.2 MB - PDF)",
        download: {
          label: "Download",
          url: "/example.html",
        },
      },
      {
        type: "content",
        content:
          "<p class='mb-2'>Looking for another language which is not on the list? </p><a href='/example.html' class='d-block text-underline-hover'>Find out why.</a>",
      },
    ],
  },
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "File title",
  language: "English",
  meta: "(16.2 MB - PDF)",
  download: {
    label: "Download",
    url: "/example.html",
    icon_position: "after",
    icon: {
      name: "download",
      size: "fluid",
    },
  },
  icon: {
    name: "file-pdf-fill",
    size: "xl",
  },
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
        language: "български",
        meta: "(16.2 MB - PDF)",
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
        language: "Español",
        meta: "(16.2 MB - PDF)",
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
        language: "Français",
        meta: "(16.2 MB - PDF)",
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
          "<p class='mb-2'>Looking for another language which is not on the list? </p><a href='/example.html' class='d-block text-underline-hover'>Find out why.</a>",
      },
    ],
  },
  attributes: new drupalAttribute(),
};

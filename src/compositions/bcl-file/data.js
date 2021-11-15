const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "File title",
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
  icon: {
    name: "file-pdf-fill",
    size: "xl"
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
        extension: "PDF",
        language: "български",
        size: "16.2 MB",
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
        extension: "PDF",
        language: "Español",
        size: "16.2 MB",
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
        extension: "PDF",
        language: "Français",
        size: "16.2 MB",
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
        content: "<p class='mb-2'>Looking for another language which is not on the list? </p><a href='/example.html' class='d-block text-underline-hover'>Find out why.</a>",
      }
    ]
  },
  attributes: new drupalAttribute(),
};

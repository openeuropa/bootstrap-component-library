import { getDummyText } from "@openeuropa/bcl-data-utils";
import drupalAttribute from "drupal-attribute";

const data = [
  {
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
      id: "language-dropdown-first",
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
          description: getDummyText(),
          language: "Français",
          meta: "(16.2 MB - PDF)",
          download: {
            label: "Download",
            url: "/example.html",
          },
        },
        {
          title: "File title ES",
          description: getDummyText(),
          language: "Español",
          meta: "(16.2 MB - PDF)",
          download: {
            label: "Download",
            url: "/example.html",
          },
        },
        {
          title: "File title BG",
          description: getDummyText(),
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
            "<p class='mb-2 d-inline-block me-2'>Looking for another language which is not on the list? </p><a href='/example.html'>Find out why.</a>",
        },
      ],
    },
    attributes: new drupalAttribute().addClass("mb-3"),
  },
  {
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
      id: "language-dropdown-second",
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
          description: getDummyText(),
          language: "Français",
          meta: "(16.2 MB - PDF)",
          download: {
            label: "Download",
            url: "/example.html",
          },
        },
        {
          title: "File title ES",
          description: getDummyText(),
          language: "Español",
          meta: "(16.2 MB - PDF)",
          download: {
            label: "Download",
            url: "/example.html",
          },
        },
        {
          title: "File title BG",
          description: getDummyText(),
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
            "<p class='mb-2 d-inline-block me-2'>Looking for another language which is not on the list? </p><a href='/example.html'>Find out why.</a>",
        },
      ],
    },
    attributes: new drupalAttribute().addClass("mb-3"),
  },
];

export default data;

import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  banner: {
    background: "gray",
    title: "Senior Expert on Internal Models",
    badges: [
      {
        label: "Opened",
        outline: true,
        rounded_pill: true,
      },
      {
        label: "Type 2",
        outline: true,
        rounded_pill: true,
      },
    ],
    content: getDummyText(5),
    action_bar: `<div class="d-grid d-md-block mt-3-5"><button class="btn btn-primary btn-md" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#pencil-fill"></use></svg>Apply now</button></div>`,
  },
  files: [
    {
      title: "File download",
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
    },
  ],
  description: {
    title: "Procurement description",
    paragraphs: [getDummyText(8), getDummyText(8), getDummyText(8)],
  },
};

export default data;

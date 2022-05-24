const drupalAttribute = require("drupal-attribute");

module.exports = {
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
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non. </p>",
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
              "<p class='mb-2 d-inline-block me-2'>Looking for another language which is not on the list? </p><a href='/example.html'>Find out why.</a>",
          },
        ],
      },
      icon_path: "/icons.svg",
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
              "<p class='mb-2 d-inline-block me-2'>Looking for another language which is not on the list? </p><a href='/example.html'>Find out why.</a>",
          },
        ],
      },
      icon_path: "/icons.svg",
    },
  ],
  description: {
    title: "Procurement description",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non. ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non. ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.",
    ],
  },
};

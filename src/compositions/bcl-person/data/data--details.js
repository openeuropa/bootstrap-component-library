const drupalAttribute = require("drupal-attribute");

module.exports = {
  banner: {
    title: {
      content: "Stefan Mayer",
      tag: "h2",
      attributes: new drupalAttribute().addClass("fw-bold"),
    },
    image: {
      path: "https://picsum.photos/200/200?random=6",
      alt: "alt img",
      position: "top",
    },
    content: `<div class="mb-4 mt-4">
      <span class="text-muted me-3">DG Test</span><span class="text-muted">Director</span>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.</p>`,
  },
  social_media: {
    main_title: "Social media",
    links: [
      {
        label: "Linkedin",
        icon_position: "before",
        standalone: true,
        path: "/example.html",
        icon: {
          name: "linkedin",
          path: "/icons.svg",
        },
        attributes: new drupalAttribute().addClass([
          "d-block",
          "d-md-inline-block",
          "mb-3",
          "mb-md-0",
          "me-md-3",
        ]),
      },
      {
        label: "Twitter",
        icon_position: "before",
        standalone: true,
        path: "/example.html",
        icon: {
          name: "twitter",
          path: "/icons.svg",
        },
        attributes: new drupalAttribute().addClass([
          "d-block",
          "d-md-inline-block",
          "mb-3",
          "mb-md-0",
          "mx-md-3",
        ]),
      },
      {
        label: "Facebook",
        icon_position: "before",
        standalone: true,
        path: "/example.html",
        icon: {
          name: "facebook",
          path: "/icons.svg",
        },
        attributes: new drupalAttribute().addClass([
          "d-block",
          "d-md-inline-block",
          "mb-3",
          "mb-md-0",
          "mx-md-3",
        ]),
      },
      {
        label: "Youtube",
        icon_position: "before",
        standalone: true,
        path: "/example.html",
        icon: {
          name: "youtube",
          path: "/icons.svg",
        },
        attributes: new drupalAttribute().addClass([
          "d-block",
          "d-md-inline-block",
          "mb-3",
          "mb-md-0",
          "mx-md-3",
        ]),
      },
    ],
  },
  information: {
    main_title: "Additional information",
    content: `
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae velit facilisis, ornare sem efficitur, euismod diam. Curabitur quis odio in nisl scelerisque rhoncus nec id nulla. Mauris ultrices a augue in finibus.</p>
    <ul>
      <li>Etiam sagittis dictum turpis, eu lacinia tellus pharetra ac</li>
      <li>Sed auctor purus at tellus cursus dignissim. Sed sit amet ligula nisl</li>
    </ul>
    `,
  },
  files: {
    main_title: "Related documents",
    listing: [
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
        attributes: new drupalAttribute().addClass(["mb-3"]),
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
        attributes: new drupalAttribute().addClass(["mb-3"]),
      },
    ],
  },
};

const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  banner: {
    title: "Stefan Mayer",
    image: {
      path: "https://picsum.photos/200/200?random=6",
      alt: "alt img",
      position: "top",
    },
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
        ]),
      },
    ],
    content: `<div class="my-3">
      <span class="text-muted me-3">DG TEST</span><span class="text-muted me-3">Director</span><span class="text-muted">Germany</span>
    </div>
    ${getDummyText(6, true, false, "mb-3")}`,
  },
  information: {
    main_title: "Additional information",
    content: `${getDummyText(6, true, false, "mb-0")}
      <ul>
        <li>Etiam sagittis dictum turpis, eu lacinia tellus pharetra ac</li>
        <li>Sed auctor purus at tellus cursus dignissim. Sed sit amet ligula nisl</li>
      </ul>`,
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

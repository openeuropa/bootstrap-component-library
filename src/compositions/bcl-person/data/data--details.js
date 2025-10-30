const { DrupalAttribute } = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  banner: {
    title: "Stefan Mayer",
    content: `<div class="my-3">
      <span class="text-muted me-3">DG TEST</span><span class="text-muted me-3">Director</span><span class="text-muted">Germany</span>
    </div>
    ${getDummyText(6, true, false, "mb-3")}`,
    image: {
      path: "https://picsum.photos/200/200?random=6",
      alt: "alt img",
      position: "top",
    },
    image_size: "lg",
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
        attributes: new DrupalAttribute().addClass([
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
        attributes: new DrupalAttribute().addClass([
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
        attributes: new DrupalAttribute().addClass([
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
        attributes: new DrupalAttribute().addClass([
          "d-block",
          "d-md-inline-block",
          "mb-3",
          "mb-md-0",
        ]),
      },
    ],
  },
  information: {
    main_title: "Additional information",
    content: `${getDummyText(6, false, false, "mb-0")}
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
        attributes: new DrupalAttribute().addClass(["mb-4-5"]),
      },
      {
        title: "Drupal articles",
        title_tag: "h3",
        title_attributes: new DrupalAttribute().addClass(["mb-3"]),
        item_title: "Drupal article 1",
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
        attributes: new DrupalAttribute().addClass(["mb-3"]),
      },
      {
        item_title: "Drupal article 2",
        language: "English",
        meta: "(16.2 MB - DOC)",
        icon_path: "/icons.svg",
        download: {
          label: "Download",
          url: "/example.html",
        },
        icon: {
          name: "file-text-fill",
          size: "xl",
        },
      },
    ],
  },
};

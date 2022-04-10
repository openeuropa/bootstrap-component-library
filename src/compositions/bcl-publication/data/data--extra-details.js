const drupalAttribute = require("drupal-attribute");

module.exports = {
  sidebar: {
    title: "Page content",
    id: "bcl-inpage-navigation",
    attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
    links: [
      {
        label: "Description",
        path: "#description",
      },
      {
        label: "File download",
        path: "#file-download",
      },
      {
        label: "Share this page",
        path: "#share",
      },
    ],
  },
};

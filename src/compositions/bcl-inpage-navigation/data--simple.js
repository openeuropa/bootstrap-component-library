const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
  title: "Page content",
  id: "bcl-inpage-navigation",
  links: [
    {
      label: "Content",
      path: "#content",
    },
    {
      label: "Subheading",
      path: "#subheading",
    },
  ],
};

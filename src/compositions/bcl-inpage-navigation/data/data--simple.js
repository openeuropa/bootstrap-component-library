const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
  title: "Page content",
  id: "bcl-inpage-navigation",
  title_attributes: new drupalAttribute().addClass("mb-0"),
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

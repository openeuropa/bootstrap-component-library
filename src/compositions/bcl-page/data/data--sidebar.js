const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
  title_attributes: new drupalAttribute().addClass("mb-0"),
  title: "Page content",
  id: "bcl-inpage-navigation",
  links: [
    {
      label: "Content",
      path: "#content",
    },
    {
      label: "Section 1",
      path: "#item-1",
    },
    {
      label: "Section 2",
      path: "#item-2",
    },
    {
      label: "Section 3",
      path: "#item-3",
    },
  ],
};

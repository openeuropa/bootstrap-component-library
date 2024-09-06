const drupalAttribute = require("drupal-attribute");

module.exports = {
  title_attributes: new drupalAttribute().addClass("mb-0"),
  title: "Page content",
  id: "bcl-inpage-navigation",
  icon_path: "/icons.svg",
  dropdown_id: "bcl-inpage-navigation-dropdown",
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

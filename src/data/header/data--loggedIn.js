const drupalAttribute = require("drupal-attribute");

module.exports = [
  {
    label: "My account",
    path: "/example.html",
    icon_position: "before",
    remove_icon_spacers: true,
    attributes: new drupalAttribute().addClass(["py-lg-2", "pb-3"]),
    icon: {
      name: "person-fill",
      size: "xs",
      path: "/icons.svg",
      attributes: new drupalAttribute().addClass(["me-2-5"]),
    },
  },
  {
    label: "Log out",
    path: "/example.html",
    icon_position: "before",
    remove_icon_spacers: true,
    attributes: new drupalAttribute().addClass([
      "border-top-lg-0",
      "border-top",
      "mx-n3",
      "px-4",
      "py-lg-2",
      "pt-3",
    ]),
    icon: {
      name: "lock-fill",
      size: "xs",
      path: "/icons.svg",
      attributes: new drupalAttribute().addClass("me-2-5"),
    },
  },
];

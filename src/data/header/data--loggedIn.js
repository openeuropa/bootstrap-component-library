const { DrupalAttribute } = require("drupal-attribute");

module.exports = [
  {
    label: "My account",
    path: "/example.html",
    icon_position: "before",
    attributes: new DrupalAttribute().addClass(["py-lg-2", "pb-3"]),
    icon: {
      name: "person-fill",
      size: "xs",
      path: "/icons.svg",
    },
  },
  {
    label: "Log out",
    path: "/example.html",
    icon_position: "before",
    attributes: new DrupalAttribute().addClass([
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
    },
  },
];

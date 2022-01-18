const drupalAttribute = require("drupal-attribute");

module.exports = {
  nav: true,
  tabs: true,
  attributes: new drupalAttribute().addClass("bcl__nav"),
  items: [
    {
      label: "I'm a link 1",
      path: "/example.html",
    },
    {
      label: "I'm a link 2",
      path: "/example.html",
    },
    {
      label: "I'm a link 3",
      path: "/example.html",
    },
    {
      label: "I'm a link active",
      path: "/example.html",
      active: true,
    },
    {
      label: "I'm a link disabled",
      path: "/example.html",
      disabled: true,
    },
  ],
};

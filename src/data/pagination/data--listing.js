const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass(["mt-4-5", "mb-5"]),
  alignment: "center",
  prev: {
    label: "Previous",
    path: "#",
  },
  next: {
    label: "Next",
    path: "#",
  },
  items: [
    {
      label: "1",
      path: "#",
      active: true,
    },
    {
      label: "2",
      path: "#",
    },
    {
      label: "3",
      path: "#",
    },
    {
      label: "4",
      path: "#",
    },
    {
      label: "5",
      path: "#",
    },
  ],
};

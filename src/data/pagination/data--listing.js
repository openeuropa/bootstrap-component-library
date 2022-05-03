const drupalAttribute = require("drupal-attribute");

module.exports = {
  aria_label: "Pagination aria label",
  attributes: new drupalAttribute().addClass(["mt-4-5"]),
  alignment: "center",
  icon_path: "/icons.svg",
  first: {
    label: "First",
    path: "#",
  },
  prev: {
    label: "Previous",
    path: "#",
  },
  next: {
    label: "Next",
    path: "#",
  },
  last: {
    label: "Last",
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

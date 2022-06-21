const drupalAttribute = require("drupal-attribute");

module.exports = {
  aria_label: "Pagination aria label",
  attributes: new drupalAttribute().addClass(["mt-4-5"]),
  alignment: "center",
  icon_path: "/icons.svg",
  first: {
    label: "First",
    path: "/example.html",
    aria_label: "First page",
  },
  prev: {
    label: "Previous",
    path: "/example.html",
    aria_label: "Previous page",
  },
  next: {
    label: "Next",
    path: "/example.html",
    aria_label: "Next page",
  },
  last: {
    label: "Last",
    path: "/example.html",
    aria_label: "Last page",
  },
  items: [
    {
      label: "1",
      path: "/example.html",
      active: true,
    },
    {
      label: "2",
      path: "/example.html",
    },
    {
      label: "3",
      path: "/example.html",
    },
    {
      label: "4",
      path: "/example.html",
    },
    {
      label: "5",
      path: "/example.html",
    },
  ],
};

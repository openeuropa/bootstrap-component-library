const drupalAttribute = require("drupal-attribute");

module.exports = {
  alignment: "center",
  icon_path: "/icons.svg",
  first: {
    label: "First",
    path: "/example.html",
    attributes: new drupalAttribute().setAttribute("aria-label", "First page"),
  },
  prev: {
    label: "Previous",
    path: "/example.html",
    attributes: new drupalAttribute().setAttribute(
      "aria-label",
      "Previous page"
    ),
  },
  next: {
    label: "Next",
    path: "/example.html",
    attributes: new drupalAttribute().setAttribute("aria-label", "Next page"),
  },
  last: {
    label: "Last",
    path: "/example.html",
    attributes: new drupalAttribute().setAttribute("aria-label", "Last page"),
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
  attributes: new drupalAttribute()
    .addClass(["mt-4-5"])
    .setAttribute("aria-label", "Pagination aria label"),
};

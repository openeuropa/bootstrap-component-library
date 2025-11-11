const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  icon_path: "/icons.svg",
  first: {
    label: "First",
    path: "/example.html",
    attributes: new DrupalAttribute().setAttribute("aria-label", "First page"),
  },
  prev: {
    label: "Previous",
    path: "/example.html",
    attributes: new DrupalAttribute().setAttribute(
      "aria-label",
      "Previous page",
    ),
  },
  next: {
    label: "Next",
    path: "/example.html",
    attributes: new DrupalAttribute().setAttribute("aria-label", "Next page"),
  },
  last: {
    label: "Last",
    path: "/example.html",
    attributes: new DrupalAttribute().setAttribute("aria-label", "Last page"),
  },
  items: [
    {
      label: "1",
      path: "/example.html",
      disabled: true,
    },
    {
      label: "2",
      path: "/example.html",
      active: true,
    },
    {
      label: "3",
      path: "/example.html",
    },
  ],
  attributes: new DrupalAttribute().setAttribute(
    "aria-label",
    "Test aria label",
  ),
};

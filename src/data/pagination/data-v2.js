const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  icon_path: "/icons.svg",
  ellipsis_after: true,
  ellipsis_before: true,
  current_mobile_label: "Page 11 of 55",
  first: {
    label: "1",
    path: "/example.html",
    attributes: new DrupalAttribute().setAttribute("aria-label", "First page"),
  },
  prev: {
    path: "/example.html",
    attributes: new DrupalAttribute().setAttribute(
      "aria-label",
      "Previous page",
    ),
  },
  next: {
    path: "/example.html",
    attributes: new DrupalAttribute().setAttribute("aria-label", "Next page"),
  },
  last: {
    label: "55",
    path: "/example.html",
    attributes: new DrupalAttribute().setAttribute("aria-label", "Last page"),
  },
  items: [
    {
      label: "10",
      path: "/example.html",
    },
    {
      label: "11",
      path: "/example.html",
      active: true,
    },
    {
      label: "12",
      path: "/example.html",
    },
  ],
};

const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  title: "EU Budget for the future",
  description: "Innovation, economy, environment and geopolitics",
  link: {
    label: "Subscribe",
    path: "/example.html",
    icon: {
      name: "chevron-right",
      path: "/icons.svg",
      size: "fluid",
    },
    attributes: new DrupalAttribute().addClass(["btn", "btn-primary"]),
  },
  attributes: new DrupalAttribute().addClass([
    "bg-lighter",
    "text-dark",
    "text-center",
  ]),
};

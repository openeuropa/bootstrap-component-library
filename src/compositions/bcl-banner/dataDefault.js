const drupalAttribute = require("drupal-attribute");

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
    attributes: new drupalAttribute().addClass(["btn", "btn-primary"]),
  },
  attributes: new drupalAttribute().addClass([
    "bg-lighter",
    "text-dark",
    "text-center",
  ]),
};

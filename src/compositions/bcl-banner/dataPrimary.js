const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "EU Budget for the future",
  description: "Innovation, economy, environment and geopolitics",
  link: {
    label: "Subscribe",
    path: "/example.html",
    icon: {
      name: "chevron-right",
      path: "boostrap-icons.svg",
    },
    attributes: new drupalAttribute().addClass(["btn", "btn-light"]),
  },
  attributes: new drupalAttribute().addClass([
    "bg-primary",
    "text-white",
    "text-center",
  ]),
};

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
  image: "https://picsum.photos/id/154/1200/800",
  attributes: new DrupalAttribute().addClass([
    "bg-lighter",
    "text-dark",
    "text-center",
  ]),
};

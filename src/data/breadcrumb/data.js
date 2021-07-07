const drupalAttribute = require("drupal-attribute");

module.exports = {
  links: [
    { label: "Home", path: "/example", attributes: new drupalAttribute() },
    { label: "About the European Commission", path: "/example", attributes: new drupalAttribute() },
    { label: "News" },
  ],
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  icon: {
    name: "geo-alt-fill",
    size: "xs",
  },
  label:
    "<p class='fw-bold mb-0'>Exemple of very long label that can wrap on 2 lines</p>",
  content: "<p>Description text goes here.</p>",
  attributes: new drupalAttribute(),
};

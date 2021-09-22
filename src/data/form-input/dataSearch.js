const drupalAttribute = require("drupal-attribute");

module.exports = {
  placeholder: "Search",
  size: "sm",
  icon: {
    wrapper_classes: "d-flex border border-end-0 rounded-start px-3",
    name: "search",
    size: "xs",
    attributes: new drupalAttribute().addClass(["align-self-center"]),
  },
  attributes: new drupalAttribute().addClass([
    "border-start-0",
    "rounded-0",
    "rounded-end",
    "ps-0",
  ]),
};

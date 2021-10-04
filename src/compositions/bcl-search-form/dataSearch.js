const drupalAttribute = require("drupal-attribute");

module.exports = {
  icon: {
    name: "search",
    size: "xs",
    attributes: new drupalAttribute().addClass(["bcl-search-form__icon"]),
  },
  input: {
    placeholder: "Search",
    attributes: new drupalAttribute().addClass(["bcl-search-form__input"]),
    label: "Search bar label",
    input_type: "search",
  },
  attributes: new drupalAttribute(),
};

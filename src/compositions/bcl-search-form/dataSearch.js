const drupalAttribute = require("drupal-attribute");

module.exports = {
  placeholder: "Search",
  input_attributes: new drupalAttribute().addClass(["bcl-search-form__input"]),
  label: "Search bar label",
  input_type: "search",
  icon: {
    name: "search",
    size: "xs",
    attributes: new drupalAttribute().addClass(["bcl-search-form__icon"]),
  },
  attributes: new drupalAttribute(),
};

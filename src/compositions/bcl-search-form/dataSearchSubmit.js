const drupalAttribute = require("drupal-attribute");

module.exports = {
  submit: {
    attributes: new drupalAttribute().addClass(["bcl-search-form__submit"]),
    icon: {
      name: "search",
      size: "xs",
    },
  },
  input: {
    placeholder: "Search",
    attributes: new drupalAttribute().addClass(["bcl-search-form__input"]),
    label: "Search bar label",
    input_type: "search",
  },
  attributes: new drupalAttribute(),
};

const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  icon: {
    name: "search",
    size: "xs",
    path: "/icons.svg",
    attributes: new DrupalAttribute().addClass(["bcl-search-form__icon"]),
  },
  input: {
    placeholder: "Search",
    attributes: new DrupalAttribute().addClass(["bcl-search-form__input"]),
    label: "Search bar label",
    input_type: "search",
  },
};

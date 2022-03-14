const drupalAttribute = require("drupal-attribute");

module.exports = {
  submit: {
    attributes: new drupalAttribute().addClass(["bcl-search-form__submit"]),
    assistive_text: "Search",
    icon: {
      name: "search",
      size: "xs",
      path: "/icons.svg",
    },
  },
  input: {
    placeholder: "Search",
    attributes: new drupalAttribute().addClass(["bcl-search-form__input"]),
    label: "Search bar label",
    input_type: "search",
  },
};

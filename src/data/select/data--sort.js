const { DrupalAttribute } = require("drupal-attribute");

module.exports = {
  label: "Sort&nbsp;by",
  attributes: new DrupalAttribute().addClass("mb-4 mb-md-0 ms-md-4"),
  aria_label: "sort-select",
  label_extra_classes: "mb-0",
  options: [
    { value: 1, label: "a select option" },
    { value: 2, label: "another select option" },
    { value: 3, label: "another option" },
    { value: 4, label: "last option" },
    { label: "A-Z", selected: true },
  ],
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute(),
  items: [
    [
      {
        label: "I am a button",
        outline: false,
        variant: "danger",
        attributes: new drupalAttribute(),
      },
      {
        label: "I am a button",
        outline: false,
        variant: "primary",
        attributes: new drupalAttribute(),
      },
      {
        label: "I am a button",
        outline: true,
        variant: "dark",
        attributes: new drupalAttribute(),
      },
      {
        label: "I am a button",
        outline: false,
        variant: "warning",
        attributes: new drupalAttribute(),
      },
    ],
  ],
};

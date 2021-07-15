const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute(),
  items: [
    [
      {
        label: "I am a button",
        outline: false,
        variant: "danger",
      },
      {
        label: "I am a button",
        outline: false,
        variant: "primary",
      },
      {
        label: "I am a button",
        outline: true,
        variant: "dark",
      },
      {
        label: "I am a button",
        outline: false,
        variant: "warning",
      },
    ],
  ],
};

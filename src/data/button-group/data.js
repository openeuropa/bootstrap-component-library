const drupalAttribute = require("drupal-attribute");

module.exports = {
  items: [
    [
      {
        label: "I am a button",
        outline: false,
        variant: "danger",
        attributes: new drupalAttribute()
                    .setAttribute('type', 'button'),
      },
      {
        label: "I am a button",
        outline: false,
        variant: "primary",
        attributes: new drupalAttribute()
                    .setAttribute('type', 'button'),
      },
      {
        label: "I am a button",
        outline: true,
        variant: "dark",
        attributes: new drupalAttribute()
                    .setAttribute('type', 'button'),
      },
      {
        label: "I am a button",
        outline: false,
        variant: "warning",
        attributes: new drupalAttribute()
                    .setAttribute('type', 'button'),
      },
    ],
  ],
};

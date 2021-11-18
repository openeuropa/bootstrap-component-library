const drupalAttribute = require("drupal-attribute");

module.exports = {
  variant: "horizontal",
  items: [
    {
      term: {
        label: '<p class="mb-0 d-inline-block">Only title label with icon</p>',
        icon: {
          name: "geo-alt-fill",
          size: "xs",
        },
      },
      definition: '<p class="mb-5">Description text goes here.</p>',
    },
    {
      term: [
        {
          label: '<p class="mb-0">First title label</p>',
        },
        {
          label: '<p class="mb-0 d-inline-block">Second title label</p>',
          icon: {
            name: "geo-alt-fill",
            size: "xs",
          },
        },
      ],
      definition: '<p class="mb-5">Description text goes here.</p>',
    },
    {
      term: {
        label: "Only title label",
      },
      definition: [
        "Description text goes here.",
        '<p class="mb-5">Description text goes here.</p>',
      ],
    },
  ],
  attributes: new drupalAttribute(),
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  badges: [
    {
      rounded_pill: true,
      label: "Culture",
      attributes: new drupalAttribute().addClass(["me-2 mb-2"]),
    },
    {
      rounded_pill: true,
      label: "Technology",
      attributes: new drupalAttribute().addClass(["me-2 mb-2"]),
    },
  ],
  items: [
    {
      term: {
        label: "<p class='d-inline-block mb-1'>Date</p>",
        icon: {
          name: "calendar-fill",
          size: "xs",
          path: "/icons.svg",
        },
      },
      definition: ["From: 19/122/2021", "To: 21/12/2021"],
    },
    {
      term: {
        label: '<p class="mb-1 mt-4 d-inline-block">Location</p>',
        icon: {
          name: "geo-alt-fill",
          size: "xs",
          path: "/icons.svg",
        },
      },
      definition: "<p class='mb-2'>Barcelona, Spain.</p>",
    },
  ],
  attributes: new drupalAttribute(),
};

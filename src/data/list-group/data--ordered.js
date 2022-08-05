const drupalAttribute = require("drupal-attribute");

module.exports = {
  type: "ordered",
  items: [
    {
      variant: "info",
      html: "Ordered Label",
    },
    {
      variant: "light",
      html: "Ordered Label",
    },
    {
      variant: "dark",
      html: "Ordered Label",
    },
    {
      variant: "success",
      html: "Ordered Label",
    },
    {
      variant: "warning",
      html: '<div class="ms-2 me-auto">Cras justo odio</div>',
      extra_classes: "d-flex justify-content-between align-items-center",
      badge: {
        label: "10",
        rounded_pill: true,
        attributes: new drupalAttribute().addClass("ms-2"),
      },
    },
  ],
};

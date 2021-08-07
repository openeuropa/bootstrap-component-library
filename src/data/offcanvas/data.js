const drupalAttribute = require("drupal-attribute");

module.exports = {
  placement: "bottom",
  with_close: true,
  id: "offcanvasExample",
  title: {
    label: "An offcanvas title",
    id: "offCanvasBottomLabel",
    heading: "5",
  },
  body: {
    items: [
      {
        element_type: "html",
        content: "<p>Interesting content</p>",
      },
    ],
  },
  attributes: new drupalAttribute(),
};

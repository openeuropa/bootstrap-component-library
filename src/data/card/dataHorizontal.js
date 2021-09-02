const drupalAttribute = require("drupal-attribute");

module.exports = {
  horizontal: true,
  title: {
    content: "Title card",
  },
  subtitle: {
    content: "Subtitle card",
    classes: "mb-2",
  },
  text: {
    content: "Text card with longer text which is supported",
    classes: "mb-2",
  },
  image: {
    path: "https://picsum.photos/seed/1019/400/600",
    alt: "alt img",
    position: "top",
  },
  content: "<button class='btn btn-primary'>Custom action</button>",
  attributes: new drupalAttribute().addClass("w-50"),
};

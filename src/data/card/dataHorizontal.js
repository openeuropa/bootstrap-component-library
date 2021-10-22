const drupalAttribute = require("drupal-attribute");

module.exports = {
  horizontal: true,
  horizontal_grid: {
    left_col_classes: "col-4",
    right_col_classes: "col-8",
    gutter: "0",
  },
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
  image:
    '<img alt="alt img" class="card-img-top" src="https://picsum.photos/seed/1019/400/600" />',
  content: "<button class='btn btn-primary'>Custom action</button>",
  attributes: new drupalAttribute().addClass("w-50"),
};

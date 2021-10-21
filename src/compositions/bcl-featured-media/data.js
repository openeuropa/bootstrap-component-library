const drupalAttribute = require("drupal-attribute");

module.exports = {
  content: "Media description text goes here.",
  content_classes: "bg-light p-3",
  type: "video",
  image:
    "<img class='img-fluid' src='https://picsum.photos/1000/400?random=1'>",
  attributes: new drupalAttribute().setAttribute(
    "src",
    "https://www.youtube.com/embed/VFYlYeFAEH4"
  ),
};

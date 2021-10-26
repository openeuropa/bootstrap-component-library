const drupalAttribute = require("drupal-attribute");

module.exports = {
  content: "Media description text goes here.",
  content_classes: "bg-light p-3",
  embedded_media:
    '<iframe title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>',
  attributes: new drupalAttribute().setAttribute(
    "src",
    "https://www.youtube.com/embed/VFYlYeFAEH4"
  ),
};

const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  with_text: true,
  wrapper_classes: "pb-4",
  description: getDummyText(8),
  read_more: {
    path: "/example.html",
    label: "Read more",
  },
  content: "Media description text goes here.",
  content_classes: "bg-lighter p-3",
  embedded_media:
    '<iframe title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>',
  attributes: new drupalAttribute().setAttribute(
    "src",
    "https://www.youtube.com/embed/VFYlYeFAEH4"
  ),
  title: "A title for a featured item",
};

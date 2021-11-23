const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "A title for a featured item",
  with_text: true,
  wrapper_classes: "pb-4",
  text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.</p>`,
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
};

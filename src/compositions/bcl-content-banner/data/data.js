const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  background: "gray",
  title: "This is the title of this page",
  badges: [
    {
      label: "Category 1",
      outline: true,
      rounded_pill: true,
    },
    {
      label: "Category 2",
      outline: true,
      rounded_pill: true,
    },
  ],
  content: `<div class="my-3"><span class="text-muted me-3">17 October 2019</span></div>${getDummyText(
    5,
    true,
  )}`,
  image: {
    path: "https://picsum.photos/255/255?random=6",
    alt: "alt img",
  },
  image_size: "lg",
  action_button: {
    label: "Action button",
    variant: "secondary",
  },
};

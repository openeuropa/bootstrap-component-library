const drupalAttribute = require("drupal-attribute");

module.exports = {
  type: "group",
  attributes: new drupalAttribute(),
  items: [
    {
      title: {
        content: "Title card 1",
      },
      subtitle: {
        content: "Subtitle card 1",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 1",
        classes: "mb-2",
      },
      image:
        '<img alt="alt img" class="card-img-top" src="https://picsum.photos/seed/1008/600/400" />',
      image_position: "top",
      card_header: "Header of card 1",
      card_footer: "Footer of card 1",
      wrapper_class: "col",
      content: "<button class='btn btn-primary'>Custom action</button>",
    },
    {
      title: {
        content: "Title card 2",
      },
      subtitle: {
        content: "Subtitle card 2",
        classes: "mb-2",
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        classes: "mb-2",
      },
      image:
        '<img alt="alt img" class="card-img-top" src="https://picsum.photos/seed/1009/600/400" />',
      image_position: "top",
      card_header: "Header of card 2",
      card_footer: "Footer of card 2",
      wrapper_class: "col",
      content: "<p>Custom text</p>",
    },
    {
      title: {
        content: "Title card 3",
      },
      subtitle: {
        content: "Subtitle card 3",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 3",
        classes: "mb-2",
      },
      image:
        '<img alt="alt img" class="card-img-bottom" src="https://picsum.photos/seed/1010/600/400" />',
      image_position: "bottom",
      card_header: "Header of card 3",
      card_footer: "Footer of card 3",
      wrapper_class: "col",
      content:
        "<p>Some representative placeholder content for the first card.</p>",
    },
  ],
};

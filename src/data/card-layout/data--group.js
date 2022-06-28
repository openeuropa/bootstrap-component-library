const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  type: "group",
  items: [
    {
      title: "Title card 1",
      subtitle: {
        content: "Subtitle card 1",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 1",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1008/600/400",
        alt: "alt img",
        position: "top",
      },
      card_header: "Header of card 1",
      card_footer: "Footer of card 1",
      wrapper_class: "col",
      content: "<button class='btn btn-primary'>Custom action</button>",
    },
    {
      title: "Title card 2",
      subtitle: {
        content: "Subtitle card 2",
        classes: "mb-2",
      },
      text: {
        content: getDummyText(1),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1009/600/400",
        alt: "alt img",
        position: "top",
      },
      card_header: "Header of card 2",
      card_footer: "Footer of card 2",
      wrapper_class: "col",
      content: "<p>Custom text</p>",
    },
    {
      title: "Title card 3",
      subtitle: {
        content: "Subtitle card 3",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 3",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1010/600/400",
        alt: "alt img",
        position: "bottom",
      },
      card_header: "Header of card 3",
      card_footer: "Footer of card 3",
      wrapper_class: "col",
      content:
        "<p>Some representative placeholder content for the first card.</p>",
    },
  ],
};

const { DrupalAttribute } = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  type: "grid",
  responsive_columns: 3,
  responsiveness: "md",
  gutter: 2,
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
        path: "https://picsum.photos/seed/1002/600/400",
        alt: "alt img",
        position: "top",
      },
      card_header: "Header of card 1",
      card_footer: "Footer of card 1",
      wrapper_class: "col",
      content: "<button class='btn btn-primary'>Custom action</button>",
      attributes: new DrupalAttribute().addClass("mb-3"),
    },
    {
      title: "Title card 2",
      subtitle: {
        content: "Subtitle card 2",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 2",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1003/600/400",
        alt: "alt img",
        position: "top",
      },
      card_header: "Header of card 2",
      card_footer: "Footer of card 2",
      wrapper_class: "col",
      attributes: new DrupalAttribute().addClass("mb-3"),
      content: getDummyText(3),
    },
    {
      title: "Title card 3",
      subtitle: {
        content: "Subtitle card 3",
        classes: "mb-2",
      },
      text: {
        content: getDummyText(5),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1004/600/400",
        alt: "alt img",
        position: "top",
      },
      card_header: "Header of card 3",
      card_footer: "Footer of card 3",
      wrapper_class: "col",
      content: "<p>Custom text</p>",
      attributes: new DrupalAttribute().addClass("mb-3"),
    },
    {
      title: "Title card 4",
      subtitle: {
        content: "Subtitle card 4",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 4",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1005/600/400",
        alt: "alt img",
        position: "top",
      },
      card_header: "Header of card 4",
      card_footer: "Footer of card 4",
      wrapper_class: "col",
      attributes: new DrupalAttribute().addClass("mb-3"),
      content: getDummyText(4),
    },
    {
      title: "Title card 5",
      subtitle: {
        content: "Subtitle card 5",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 5",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1006/600/400",
        alt: "alt img",
        position: "top",
      },
      card_header: "Header of card 5",
      card_footer: "Footer of card 5",
      wrapper_class: "col",
      attributes: new DrupalAttribute().addClass("mb-3"),
    },
    {
      title: "Title card 6",
      subtitle: {
        content: "Subtitle card 6",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 6",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1007/600/400",
        alt: "alt img",
        position: "bottom",
      },
      card_header: "Header of card 6",
      card_footer: "Footer of card 6",
      wrapper_class: "col",
      attributes: new DrupalAttribute().addClass("mb-3"),
      content:
        "<p>Some representative placeholder content for the first card.</p>",
    },
  ],
};

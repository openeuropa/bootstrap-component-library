const drupalAttribute = require("drupal-attribute");

module.exports = {
  type: "grid",
  responsive_colums: 3,
  responsiveness: "md",
  gutters: 2,
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
      image: {
        path: "https://picsum.photos/seed/1002/600/400",
        alt: "alt img",
        position: "top",
      },
      card_header: "Header of card 1",
      card_footer: "Footer of card 1",
      wrapper_class: "col",
      content: "<button class='btn btn-primary'>Custom action</button>",
      attributes: new drupalAttribute().addClass("mb-3"),
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
      attributes: new drupalAttribute().addClass("mb-3"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      attributes: new drupalAttribute().addClass("mb-3"),
    },
    {
      title: {
        content: "Title card 4",
      },
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
      attributes: new drupalAttribute().addClass("mb-3"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: {
        content: "Title card 5",
      },
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
      attributes: new drupalAttribute().addClass("mb-3"),
    },
    {
      title: {
        content: "Title card 6",
      },
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
      attributes: new drupalAttribute().addClass("mb-3"),
      content:
        "<p>Some representative placeholder content for the first card.</p>",
    },
  ],
};

const drupalAttribute = require("drupal-attribute");

module.exports = {
  type: "masonry",
  responsive_columns: "3",
  responsiveness: "md",
  gutters: "2",
  items: [
    {
      title: "Title card 1",
      text: {
        content: "Text card with longer text which is supported 1",
        classes: "mb-2",
      },
      wrapper_class: "col",
      content: "<button class='btn btn-primary'>Custom action</button>",
      attributes: new drupalAttribute().addClass("mb-3"),
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
        path: "https://picsum.photos/seed/1011/600/400",
        alt: "alt img",
        position: "bottom",
      },
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("mb-3"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Title card 3",
      text: {
        content: "Text card with longer text which is supported 3",
        classes: "mb-2",
      },
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("mb-3"),
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("mb-3"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Title card 5",
      subtitle: {
        content: "Subtitle card 5",
        classes: "mb-2",
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1012/600/400",
        alt: "alt img",
        position: "top",
      },
      wrapper_class: "col",
      content: "<button class='btn btn-success'>Custom action</button>",
      attributes: new drupalAttribute().addClass("mb-3"),
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
        path: "https://picsum.photos/seed/1008/600/400",
        alt: "alt img",
        position: "background",
      },
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass(["mb-3", "text-center"]),
    },
    {
      title: "Title card 7",
      text: {
        content: "Text card with longer text which is supported 6",
        classes: "mb-2",
      },
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("mb-3"),
      content:
        "<p>Some representative placeholder content for the first card.</p>",
    },
  ],
};

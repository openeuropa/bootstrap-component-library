const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "Listing item block title",
  attributes: new drupalAttribute(),
  type: "grid",
  gutter: 4,
  cols_extra_classes: "mt-4-5",
  link: {
    path: "/example",
    label: "Listing item block CTA",
    icon: {
      path: "/icons.svg",
      name: "chevron-right",
    },
  },
  items: [
    {
      title: {
        content: '<a href="/example">Card title</a>',
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
      body_classes: "pb-4",
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("border-0 bg-light"),
    },
    {
      title: {
        content: '<a href="/example">Card title</a>',
      },
      text: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1003/600/400",
        alt: "alt img",
        position: "top",
      },
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("border-0 bg-light"),
    },
    {
      title: {
        content: '<a href="/example">Card title</a>',
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
      wrapper_class: "col",
      content: "<p>Custom text</p>",
      attributes: new drupalAttribute().addClass("border-0 bg-light"),
    },
    {
      title: {
        content: '<a href="/example">Card title</a>',
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("border-0 bg-light"),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: {
        content: '<a href="/example">Card title</a>',
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("border-0 bg-light"),
    },
    {
      title: {
        content: "Title card 6",
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("border-0 bg-light"),
      content:
        "<p>Some representative placeholder content for the first card.</p>",
    },
  ],
};

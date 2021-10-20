const drupalAttribute = require("drupal-attribute");

module.exports = {
  title: "Listing item block title",
  type: "grid",
  responsive_columns: 3,
  responsiveness: "md",
  gutter: 4,
  cols_extra_classes: "mt-4-5",
  attributes: new drupalAttribute(),
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass(
        "mb-3 border-0 bg-light h-100"
      ),
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass(
        "mb-3 border-0 bg-light h-100"
      ),
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
      wrapper_class: "col",
      content: "<p>Custom text</p>",
      attributes: new drupalAttribute().addClass(
        "mb-3 border-0 bg-light h-100"
      ),
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass(
        "mb-3 border-0 bg-light h-100"
      ),
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass(
        "mb-3 border-0 bg-light h-100"
      ),
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
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass(
        "mb-3 border-0 bg-light h-100"
      ),
      content:
        "<p>Some representative placeholder content for the first card.</p>",
    },
  ],
};

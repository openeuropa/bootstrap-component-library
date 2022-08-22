const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  variant: "highlight-3-col",
  link: {
    path: "/example.html",
    label: "Listing item block CTA",
    icon: {
      path: "/icons.svg",
    },
  },
  items: [
    {
      title: "Card title",
      title_link: {
        path: "/example.html",
      },
      text: {
        content: getDummyText(2),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1002/600/400",
        alt: "alt img",
        position: "top",
      },
    },
    {
      title: "Card title",
      title_link: {
        path: "/example.html",
      },
      text: {
        content: getDummyText(),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1003/600/400",
        alt: "alt img",
        position: "top",
      },
    },
    {
      title: "Card title",
      title_link: {
        path: "/example.html",
      },
      text: {
        content: getDummyText(),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1004/600/400",
        alt: "alt img",
        position: "top",
      },
    },
  ],
};

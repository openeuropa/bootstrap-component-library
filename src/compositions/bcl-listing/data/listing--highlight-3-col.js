const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  variant: "highlight-3-col",
  title: "Listing item block title",
  link: {
    path: "/example.html",
    label: "Listing item block CTA",
    icon: {
      path: "/icons.svg",
    },
  },
  items: [
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(4),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1002/600/400",
        alt: "alt img",
        position: "top",
      },
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(3),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1003/600/400",
        alt: "alt img",
        position: "top",
      },
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(6),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1004/600/400",
        alt: "alt img",
        position: "top",
      },
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: getDummyText(2),
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1005/600/400",
        alt: "alt img",
        position: "top",
      },
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: "Text card with longer text which is supported 5",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1006/600/400",
        alt: "alt img",
        position: "top",
      },
    },
    {
      title: '<a href="/example.html" class="standalone">Card title</a>',
      text: {
        content: "Text card with longer text which is supported 6",
        classes: "mb-2",
      },
      image: {
        path: "https://picsum.photos/seed/1007/600/400",
        alt: "alt img",
      },
    },
  ],
};

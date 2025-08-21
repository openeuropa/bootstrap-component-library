import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
  variant: "highlight-2-col",
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
        classes: "mb-3",
      },
    },
    {
      title: "Card title",
      title_link: {
        path: "/example.html",
      },
      text: {
        content: getDummyText(),
        classes: "mb-3",
      },
    },
    {
      title: "Title card",
      text: {
        content: getDummyText(3),
        classes: "mb-3",
      },
    },
    {
      title: "Card title",
      title_link: {
        path: "/example.html",
      },
      text: {
        content: getDummyText(),
        classes: "mb-3",
      },
    },
  ],
};

export default data;

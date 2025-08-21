import drupalAttribute from "drupal-attribute";
import { getDummyText } from "@openeuropa/bcl-data-utils";

const data = {
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
      content: getDummyText(2),
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
      title: "Title card 5",
      subtitle: {
        content: "Subtitle card 5",
        classes: "mb-2",
      },
      text: {
        content: "Text card with longer text which is supported 5",
        classes: "mb-2",
      },
      wrapper_class: "col",
      attributes: new drupalAttribute().addClass("mb-3"),
      content: getDummyText(4),
    },
    {
      title: "Title card 4",
      subtitle: {
        content: "Subtitle card 4",
        classes: "mb-2",
      },
      text: {
        content: getDummyText(3),
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
      title: "Title card 7",
      subtitle: {
        content: "Subtitle card 7",
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
      title: "Title card 6",
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

export default data;

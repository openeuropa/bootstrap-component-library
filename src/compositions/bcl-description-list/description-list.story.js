import demoData from "@openeuropa/bcl-description-list/data.js";
import demoDataHorizontal from "@openeuropa/bcl-description-list/dataHorizontal";
import descriptionList from "@openeuropa/bcl-description-list/description-list.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const correctPath = (data) => {
  data.items.forEach((item) => {
    if (item.term) {
      if (Array.isArray(item.term)) {
        item.term.forEach((term) => {
          if (term.icon) {
            term.icon.path = defaultSprite;
          }
        });
      } else {
        if (item.term.icon) {
          item.term.icon.path = defaultSprite;
        }
      }
    }
  });
  return data;
};

export default {
  title: "Paragraphs/Description List",
  parameters: {
    controls: {
      disable: true,
    },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5976%3A68483",
      },
    ],
  },
};

export const Default = () => descriptionList(correctPath(demoData));

export const Horizontal = () =>
  descriptionList(correctPath(demoDataHorizontal));

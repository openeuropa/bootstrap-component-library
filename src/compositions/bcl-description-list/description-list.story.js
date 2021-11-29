import demoData from "@openeuropa/bcl-description-list/data.js";
import demoDataHorizontal from "@openeuropa/bcl-description-list/dataHorizontal";
import descriptionList from "@openeuropa/bcl-description-list/description-list.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

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

export const Default = () => descriptionList(correctPaths(demoData));

export const Horizontal = () =>
  descriptionList(correctPaths(demoDataHorizontal));

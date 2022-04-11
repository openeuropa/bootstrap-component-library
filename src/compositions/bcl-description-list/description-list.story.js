import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";

import demoData from "@openeuropa/bcl-description-list/data/data.js";
import demoDataHorizontal from "@openeuropa/bcl-description-list/data/data--horizontal";
import descriptionList from "@openeuropa/bcl-description-list/description-list.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

export default {
  title: "Paragraphs/Description List",
  decorators: [withCode, withDesign],
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

Horizontal.storyName = "Horizontal Description List";

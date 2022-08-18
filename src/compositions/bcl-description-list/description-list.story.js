import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-description-list/data/data.js";
import demoDataHorizontal from "@openeuropa/bcl-description-list/data/data--horizontal";
import descriptionList from "@openeuropa/bcl-description-list/description-list.html.twig";

const getArgs = () => ({
  title: "",
  title_tag: "h2",
  bordered: false,
});

const getArgTypes = () => ({
  ...getTitleControls(),
  bordered: {
    type: { name: "boolean" },
    description: "Border between description items",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
});

const applyArgs = (data, args) => Object.assign(data, args);

export default {
  title: "Paragraphs/Description List",
  decorators: [withCode, withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5976%3A68483",
      },
    ],
  },
};

export const Default = (args) =>
  descriptionList(applyArgs(correctPaths(demoData), args));
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

export const Horizontal = (args) =>
  descriptionList(applyArgs(correctPaths(demoDataHorizontal), args));

Horizontal.storyName = "Horizontal Description List";
Horizontal.args = getArgs(demoDataHorizontal);
Horizontal.argTypes = getArgTypes(demoDataHorizontal);

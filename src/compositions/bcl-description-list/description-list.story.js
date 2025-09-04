import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-description-list/data/data.js";
import demoDataHorizontal from "@openeuropa/bcl-description-list/data/data--horizontal";
import descriptionList from "@openeuropa/bcl-description-list/description-list.html.twig";

const getArgs = () => ({
  title: "",
  title_tag: "h2",
  bordered: false,
  col_classes: "col-md-3",
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
  col_classes: {
    name: "col classes",
    type: { name: "string" },
    description: "Classes of the column in horizontal variant",
    table: {
      defaultValue: { summary: "col-md-3" },
      type: { summary: "int" },
      category: "Style",
    },
  },
});

const applyArgs = (data, args) => Object.assign(data, args);

export default {
  title: "Paragraphs/Description List",
  parameters: {
    badges: ["deprecated"],
  },
};

export const Default = (args) =>
  descriptionList(applyArgs(correctPaths(demoData), args));
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.argTypes.col_classes.table = { disable: true };

export const Horizontal = (args) =>
  descriptionList(applyArgs(correctPaths(demoDataHorizontal), args));

Horizontal.storyName = "Horizontal";
Horizontal.args = getArgs(demoDataHorizontal);
Horizontal.argTypes = getArgTypes(demoDataHorizontal);

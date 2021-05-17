import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-list-group/data";
import actionableDemoData from "@oe/data-list-group/actionableData";
import orderedData from "@oe/data-list-group/orderedData";
import listGroup from "./list-group.html.twig";

const getArgTypes = () => {
  return {
    flush: {
      type: { name: "boolean" },
      description: "Remove borders",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    horizontal: {
      type: { name: "select" },
      description: "Horizontal style for each media query",
      defaultValue: "",
      control: {
        type: "select",
        options: {
          none: "",
          horizontal: "horizontal",
          "horizontal small": "horizontal-sm",
          "horizontal medium": "horizontal-md",
          "horizontal large": "horizontal-lg",
          "horizontal extra large": "horizontal-xl",
          "horizontal extra extra large": "horizontal-xxl",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/List Group",
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2737%3A45",
    },
  },
};

export const Unordered = (args) => listGroup(applyArgs(demoData, args));

Unordered.storyName = "Unordered";
Unordered.argTypes = getArgTypes(demoData);

export const Ordered = (args) =>
  listGroup(applyArgs({ ...orderedData, type: "ordered" }, args));

Ordered.storyName = "Ordered";
Ordered.argTypes = getArgTypes(orderedData);

export const Actionable = (args) =>
  listGroup(applyArgs({ ...actionableDemoData, type: "actionable" }, args));

Actionable.storyName = "Actionable";
Actionable.argTypes = getArgTypes(actionableDemoData);

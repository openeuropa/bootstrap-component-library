import demoData from "@openeuropa/bcl-links-block/dataLinksBlock.js";
import linksBlock from "@openeuropa/bcl-links-block/links-block.html.twig";

const getArgs = (data) => {
  return {
    variant: data.variant || "gray",
    direction: data.direction || "vertical",
  };
};

const getArgTypes = (data) => {
  return {
    variant: {
      type: { name: "select" },
      description: "Variant of the background",
      options: ["gray", "white"],
      control: {
        type: "inline-radio",
      },
      table: {
        defaultValue: { summary: "gray" },
        category: "Style",
      },
    },
    direction: {
      type: { name: "select" },
      description: "Direction in which the links are displayed",
      options: ["vertical", "horizontal"],
      control: {
        type: "inline-radio",
      },
      table: {
        defaultValue: { summary: "vertical" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Links Block",
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Mockup-kit?node-id=4195%3A41188",
      },
    ],
  },
};

export const LinksBlock = (args) => linksBlock(applyArgs(demoData, args));

LinksBlock.args = getArgs(demoData);
LinksBlock.argTypes = getArgTypes(demoData);

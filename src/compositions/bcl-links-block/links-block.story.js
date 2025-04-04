import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-links-block/data/data.js";
import linksBlock from "@openeuropa/bcl-links-block/links-block.html.twig";

const getArgs = (data) => ({
  title: data.title,
  title_tag: "h2",
  background: data.background,
  variant: data.variant,
});

const getArgTypes = () => ({
  ...getTitleControls(),
  background: {
    description: "Color of the background",
    options: ["gray", "transparent"],
    control: {
      type: "inline-radio",
    },
    table: {
      defaultValue: { summary: "gray" },
      category: "Style",
      type: { summary: "string" },
    },
  },
  variant: {
    description: "Direction in which the links are displayed",
    options: ["vertical", "horizontal"],
    control: {
      type: "inline-radio",
    },
    table: {
      defaultValue: { summary: "vertical" },
      category: "Style",
      type: { summary: "string" },
    },
  },
});

const applyArgs = (data, args) => {
  if (data.links && data.links.length) {
    data.links.forEach((link) => {
      if ("icon" in link) {
        link.icon.path = "/icons.svg";
        link.icon_position = "before";
      }
    });
  }
  return Object.assign(correctPaths(data), args);
};

export default {
  title: "Paragraphs/Links block",
  parameters: {
    badges: ["deprecated"],
    viewport: {
      defaultViewport: "tablet",
    },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4195%3A41188",
      },
    ],
  },
};

export const Default = (args) => linksBlock(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

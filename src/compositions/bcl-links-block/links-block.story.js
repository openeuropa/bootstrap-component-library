import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

import demoData from "@openeuropa/bcl-links-block/data/data.js";
import linksBlock from "@openeuropa/bcl-links-block/links-block.html.twig";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";

const getArgs = (data) => ({
  background: data.background,
  variant: data.variant,
  title: data.title,
  title_tag: "h2",
});

const getArgTypes = () => ({
  title: {
    type: { name: "string" },
    description: "Title of the block",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  title_tag: {
    name: "title tag",
    type: { name: "string" },
    description: "Html tag of the title",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "h2" },
      category: "Content",
    },
  },
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
  data.links.forEach((link) => {
    if ("icon" in link) {
      link.icon.path = defaultSprite;
      link.icon_position = "before";
    }
  });
  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Links block",
  decorators: [withCode, withDesign],
  parameters: {
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

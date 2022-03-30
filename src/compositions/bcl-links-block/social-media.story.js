import { withDesign } from "storybook-addon-designs";
import defaultSprite from "@openeuropa/bcl-theme-default/icons/bcl-default-icons.svg";

import socialMediaData from "@openeuropa/bcl-links-block/data/data--social-media.js";
import linksBlock from "@openeuropa/bcl-links-block/links-block.html.twig";

const getArgs = (data) => {
  return {
    background: data.background,
    variant: data.variant,
    title: data.title,
    title_tag: "h2",
  };
};

const getArgTypes = (data) => {
  return {
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
  };
};

const applyArgs = (data, args) => {
  data.links.forEach(function (link) {
    if ("icon" in link) {
      link.icon.path = defaultSprite;
      link.icon_position = "before";
    }
  });
  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Social Media Follow",
  decorators: [withDesign],
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

export const Default = (args) => linksBlock(applyArgs(socialMediaData, args));

Default.args = getArgs(socialMediaData);
Default.argTypes = getArgTypes(socialMediaData);

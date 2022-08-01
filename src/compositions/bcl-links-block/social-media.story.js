import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import socialMediaData from "@openeuropa/bcl-links-block/data/data--social-media.js";
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
  data.links.forEach((link) => {
    if ("icon" in link) {
      link.icon_position = "before";
    }
  });

  return Object.assign(correctPaths(data), args);
};

export default {
  title: "Paragraphs/Social Media Follow",
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

export const Default = (args) => linksBlock(applyArgs(socialMediaData, args));

Default.args = getArgs(socialMediaData);
Default.argTypes = getArgTypes(socialMediaData);

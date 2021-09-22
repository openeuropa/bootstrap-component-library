import demoData from "@openeuropa/bcl-social-media-follow/dataSocialMediaFollow.js";
import linksBlock from "@openeuropa/bcl-links-block/links-block.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  return {
    background: data.background,
    variant: data.variant,
  };
};

const getArgTypes = (data) => {
  return {
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
  for (let i = 0; i < data.links.length; i++) {
    if ("icon" in data.links[i]) {
      data.links[i].icon.path = defaultSprite;
      data.links[i].icon_position = "before";
    }
  }
  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Social Media Follow",
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Mockup-kit?node-id=4195%3A41188",
      },
    ],
  },
};

export const SocialMediaFollow = (args) =>
  linksBlock(applyArgs(demoData, args));

SocialMediaFollow.args = getArgs(demoData);
SocialMediaFollow.argTypes = getArgTypes(demoData);

import demoData from "@openeuropa/bcl-links-block/dataLinksBlock.js";
import socialMediaData from "@openeuropa/bcl-links-block/dataSocialMedia";
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
      type: { name: "string" },
      description: "Tag of the title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h5" },
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
  title: "Paragraphs/Links Block",
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

export const LinksBlock = (args) => linksBlock(applyArgs(demoData, args));

LinksBlock.args = getArgs(demoData);
LinksBlock.argTypes = getArgTypes(demoData);

export const SocialMedia = (args) =>
  linksBlock(applyArgs(socialMediaData, args));

SocialMedia.args = getArgs(socialMediaData);
SocialMedia.argTypes = getArgTypes(socialMediaData);

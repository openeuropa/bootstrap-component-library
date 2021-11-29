import dataDefault from "@openeuropa/bcl-banner/dataDefault.js";
import dataPrimary from "@openeuropa/bcl-banner/dataPrimary.js";
import dataImage from "@openeuropa/bcl-banner/dataImage.js";
import dataShade from "@openeuropa/bcl-banner/dataShade.js";
import banner from "@openeuropa/bcl-banner/banner.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  const args = {
    title: data.title,
    description: data.description,
    label: data.link.label,
    centered: true,
    hero: false,
    full_width: false,
  };
  if (data.image) {
    args.image = data.image || "";
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    title: {
      type: { name: "string", required: true },
      description: "Heading of the banner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    title_tag: {
      type: { name: "string", required: false },
      description: "Tag of the heading",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "div" },
        category: "Content",
      },
    },
    description: {
      type: "string",
      description: "Sub-heading of the banner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    label: {
      type: "string",
      description: "Label of the call to action link",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    centered: {
      type: "boolean",
      description: "Whether the content of the banner is centered or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
        category: "Display",
      },
    },
    hero: {
      type: "boolean",
      description: "Display banner as hero banner",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Display",
      },
    },
    full_width: {
      name: "full-width",
      type: "boolean",
      description:
        "Possibility of having a full-width banner within a bootstrap container",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Display",
      },
    },
  };
  if (data.image) {
    argTypes.image = {
      type: "string",
      description: "Path or Url of the background image",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    };
  }

  return argTypes;
};

const resetAttrs = (data, args) => {
  data.attributes.removeClass(["text-center", "hero", "full-width"]);
  if (args.centered) {
    data.attributes.addClass("text-center");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  if (data.link.icon) {
    data.link.icon.path = defaultSprite;
  }
  resetAttrs(data, args);

  return Object.assign(data, args);
};

const renderStory = (data, args) => {
  let story = banner(applyArgs(data, args));
  if (args.full_width) {
    story = `<div class="container">${story}</div>`;
    story +=
      '<div class="container"><p class="my-3">Content inside the grid</p></div>';
  }

  return story;
};

export default {
  title: "Paragraphs/Banners",
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=6194%3A73261",
      },
    ],
  },
};

export const Default = (args) => renderStory(dataDefault, args);

Default.storyName = "Simple - default";
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);

export const Primary = (args) => renderStory(dataPrimary, args);

Primary.storyName = "Simple - primary";
Primary.args = getArgs(dataPrimary);
Primary.argTypes = getArgTypes(dataPrimary);

export const Image = (args) => renderStory(dataImage, args);

Image.storyName = "Image - text-block";
Image.args = getArgs(dataImage);
Image.argTypes = getArgTypes(dataImage);

export const Shade = (args) => renderStory(dataShade, args);

Shade.storyName = "Image - shade";
Shade.args = getArgs(dataShade);
Shade.argTypes = getArgTypes(dataShade);

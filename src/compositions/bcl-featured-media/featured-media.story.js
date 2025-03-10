import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-featured-media/data/data.js";
import demoDataVideo from "@openeuropa/bcl-featured-media/data/data--video";
import demoDataImage from "@openeuropa/bcl-featured-media/data/data--image";
import demoFeaturedItem from "@openeuropa/bcl-featured-media/data/data--featured-item";
import featuredMedia from "@openeuropa/bcl-featured-media/featured-media.html.twig";

const getArgs = (data, type) => {
  const args = {
    title: data.title || "",
    title_tag: "h2",
    content: data.content || "",
    content_classes: data.content_classes || "",
  };
  if (type === "iframe") {
    args.ratio = data.ratio || "16x9";
  }
  if (type === "text") {
    args.alignment = "right";
    args.description_title = data.description_title || "";
  }

  return args;
};

const getArgTypes = (data, type) => {
  const argTypes = {
    ...getTitleControls(),
    content: {
      description: "Content under featured media",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    content_classes: {
      name: "classes content",
      description: "Classes for content under featured media",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
  };

  if (type === "iframe") {
    argTypes.ratio = {
      type: { name: "select" },
      description: "Ratio for iframe",
      options: ["1x1", "4x3", "16x9", "21x9"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "16x9" },
        category: "Style",
      },
    };
  }

  if (type === "text") {
    argTypes.title = {
      type: { name: "string" },
      description: "Title of the block",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Title",
      },
    };
    argTypes.title_tag = {
      name: "title tag",
      type: { name: "string" },
      description: "Html tag of the title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h2" },
        category: "Title",
      },
    };
    argTypes.description_title = {
      name: "description title",
      type: { name: "string" },
      description: "Title of description text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Title",
      },
    };
    argTypes.alignment = {
      type: { name: "select" },
      description: "Alignment inside featured item",
      options: ["left", "right"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Layout",
      },
    };
  }

  return argTypes;
};

const adjustWidth = (story) => {
  const demo = story();
  return `
  <div class="row">
    <div class="col-12 col-md-4">
      ${demo}
    </div>
  </div>`;
};

export default {
  title: "Paragraphs/Featured media",
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3973%3A35941",
      },
    ],
  },
};

const applyArgs = (data, args) => Object.assign(correctPaths(data), args);

export const Iframe = (args) => featuredMedia(applyArgs(demoData, args));

Iframe.args = getArgs(demoData, "iframe");
Iframe.argTypes = getArgTypes(demoData, "iframe");
Iframe.decorators = [adjustWidth];
Iframe.parameters = {
  a11y: {
    config: {
      rules: [{ id: "frame-tested", enabled: false }],
    },
  },
};

export const Video = (args) => featuredMedia(applyArgs(demoDataVideo, args));

Video.args = getArgs(demoData);
Video.argTypes = getArgTypes(demoData);
Video.decorators = [adjustWidth];

export const Image = (args) => featuredMedia(applyArgs(demoDataImage, args));
Image.args = getArgs(demoDataImage);
Image.argTypes = getArgTypes(demoDataImage);
Image.decorators = [adjustWidth];

export const FeaturedItem = (args) =>
  featuredMedia(applyArgs(demoFeaturedItem, args));

FeaturedItem.storyName = "Text with Featured Media";
FeaturedItem.args = getArgs(demoFeaturedItem, "text");
FeaturedItem.argTypes = getArgTypes(demoFeaturedItem, "text");
FeaturedItem.parameters = {
  a11y: {
    config: {
      rules: [{ id: "frame-tested", enabled: false }],
    },
  },
};

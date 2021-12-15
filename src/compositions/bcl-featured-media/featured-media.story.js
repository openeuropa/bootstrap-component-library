import demoData from "@openeuropa/bcl-featured-media/data";
import demoDataVideo from "@openeuropa/bcl-featured-media/dataVideo";
import demoDataImage from "@openeuropa/bcl-featured-media/dataImage";
import demoFeaturedItem from "@openeuropa/bcl-featured-media/dataFeaturedItem";
import featuredMedia from "@openeuropa/bcl-featured-media/featured-media.html.twig";

const getArgs = (data, type) => {
  const args = {
    content: data.content || "",
    content_classes: data.content_classes || "",
  };
  if (type === "iframe") {
    args.ratio = data.ratio || "16x9";
  }
  if (type === "text") {
    args.alignment = "right";
    args.title = data.title;
    args.title_tag = "h2";
  }

  return args;
};

const getArgTypes = (data, type) => {
  const argTypes = {
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
        category: "Content",
      },
    };
    argTypes.title_tag = {
      name: "title tag",
      type: { name: "string" },
      description: "Html tag of the title",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h2" },
        category: "Content",
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
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3973%3A35941",
      },
    ],
  },
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export const Iframe = (args) => featuredMedia(applyArgs(demoData, args));

Iframe.args = getArgs(demoData, "iframe");
Iframe.argTypes = getArgTypes(demoData, "iframe");
Iframe.decorators = [adjustWidth];

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

FeaturedItem.storyName = "Featured Item";
FeaturedItem.args = getArgs(demoFeaturedItem, "text");
FeaturedItem.argTypes = getArgTypes(demoFeaturedItem, "text");

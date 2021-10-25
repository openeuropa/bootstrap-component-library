import demoData from "@openeuropa/bcl-featured-media/data";
import demoDataVideo from "@openeuropa/bcl-featured-media/dataVideo";
import demoDataImage from "@openeuropa/bcl-featured-media/dataImage";
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
    args.alignment = "left";
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
    argTypes.alignment = {
      name: "alignment",
      type: { name: "select" },
      description: "Alignment inside text containter",
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

const withText = (story, params) => {
  const demo = story();
  const alignment = params.args.alignment;
  return `
  <h3 class="mb-4">Lorem ipsum dolor sit amet.</h3>
  <div class="row">
    <div class="col-12 col-md-6 ${
      alignment == "right" ? "order-md-1" : "order-md-2"
    }">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" class="mb-5 d-block">Read More</a>
    </div>
    <div class="col-12 col-md-6 ${
      alignment == "right" ? "order-md-2" : "order-md-1"
    }">
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

export const insideTextContainer = (args) =>
  featuredMedia(applyArgs(demoData, args));
insideTextContainer.args = getArgs(demoData, "text");
insideTextContainer.argTypes = getArgTypes(demoData, "text");
insideTextContainer.decorators = [withText];

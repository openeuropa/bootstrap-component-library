import demoData from "@openeuropa/bcl-featured-media/data";
import featuredMedia from "@openeuropa/bcl-featured-media/featured-media.html.twig";

const getArgs = (data) => {
  return {
    content: data.content || "",
    content_classes: data.content_classes || "",
    image: data.image || "",
    type: data.type || "",
    ratio: data.ratio || "16x9",
  };
};

const getArgTypes = () => {
  return {
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
    image: {
      name: "Image",
      description: "Tag image of the featured media",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    type: {
      type: { name: "select" },
      description: "Type of featured media",
      options: ["image", "video"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "image" },
        category: "Content",
      },
    },
    ratio: {
      type: { name: "select" },
      description: "Ratio for iframe",
      options: ["1x1", "4x3", "16x9", "21x9"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "16x9" },
        category: "Style",
      },
    },
  };
};

const adjustWidth = (story) => {
  const demo = story();
  return `
  <div class="row">
    <div class="col-12 col-md-6">
      ${demo}
    </div>
  </div>`;
};

const withText = (story) => {
  const demo = story();
  return `
  <div class="row">
    <div class="col-12 col-md-6">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" class="mb-5 d-block">Read More</a>
    </div>
    <div class="col-12 col-md-6">
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

export const Default = (args) => featuredMedia(applyArgs(demoData, args));
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.decorators = [adjustWidth];

export const insideTextContainer = (args) =>
  featuredMedia(applyArgs(demoData, args));
insideTextContainer.args = getArgs(demoData);
insideTextContainer.argTypes = getArgTypes(demoData);
insideTextContainer.decorators = [withText];

import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-progress/data.js";
import progress from "./progress.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";

const getArgTypes = (data) => {
  return {
    striped: {
      type: { name: "boolean" },
      description: "Striped bar",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    animated: {
      type: { name: "boolean" },
      description: "Animated bar",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the progress",
      defaultValue: "",
      control: {
        type: "select",
        options: getVariants(false),
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    progress: {
      type: { name: "number" },
      description: "Progress of the bar",
      defaultValue: data.progress,
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "" },
        category: "Content",
      },
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  };
};

const applyArgs = (data, args) => {
  args.label = `${args.progress}%`;
  return Object.assign(data, args);
};

export default {
  title: "Components/Progress",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=3140%3A10773",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=53%3A86",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/progress/",
      },
    ],
  },
};

export const Default = (args) => progress(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);

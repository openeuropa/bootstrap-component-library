import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-progress/data.js";
import progress from "./progress.html.twig";
import { getVariants } from "@oe/story-utils";

const getArgTypes = () => {
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
    label: {
      type: { name: "string" },
      description: "Label of the bar",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    label: {
      type: { name: "string" },
      description: "Label of the bar",
      defaultValue: data.label,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
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
        url: "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=3140%3A10773",
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

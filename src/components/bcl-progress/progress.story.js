import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { getVariants } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-data-progress/data.js";
import progress from "@openeuropa/bcl-progress/progress.html.twig";

const getArgs = (data) => ({
  striped: false,
  animated: false,
  variant: "primary",
  progress: data.progress,
  label: data.label,
  bar_label: "",
});

const getArgTypes = () => ({
  striped: {
    type: { name: "boolean" },
    description: "Striped bar",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
  animated: {
    type: { name: "boolean" },
    description: "Animated bar",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
  variant: {
    type: { name: "select" },
    description: "Variant of the progress",
    options: getVariants(false),
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Style",
    },
  },
  progress: {
    type: { name: "number" },
    description: "Progress of the bar",
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
  label: {
    type: { name: "string" },
    name: "label",
    description: "Text before the progress bar",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  bar_label: {
    type: { name: "string" },
    name: "bar label",
    description: "Text inside the progress bar",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
});

const applyArgs = (data, args) => {
  if (args.variant === "primary") {
    args.variant = "";
  }

  return Object.assign(data, args);
};

export default {
  title: "Components/Progress",
  decorators: [withCode, withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=53%3A86",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/components/progress/",
      },
    ],
  },
};

export const Default = (args) => progress(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

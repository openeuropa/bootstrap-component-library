import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import demoData from "@openeuropa/bcl-data-placeholder/data.js";
import { getVariants } from "@openeuropa/bcl-story-utils";
import placeholder from "@openeuropa/bcl-placeholder/placeholder.html.twig";

const getArgs = (data) => {
  return {
    width: data.width || 50,
    variant: data.variant || "",
    size: data.size || "s",
    animation: data.animation || "",
  };
};

const getArgTypes = (data) => {
  return {
    variant: {
      type: { name: "select" },
      options: getVariants(false, ["link"]),
      description: "Variant of the placeholder",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    width: {
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
    size: {
      type: { name: "select" },
      description: "Size of the placeholder",
      options: { default: "", "extra small": "xs", small: "sm", large: "lg" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    animation: {
      type: { name: "select" },
      description: "Animation of the placeholder",
      options: ["glow", "wave"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Placeholder",
  decorators: [withCode, withDesign],
  parameters: {
    design: [
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/placeholders/",
      },
    ],
  },
};

export const Default = (args) => placeholder(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

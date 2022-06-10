import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import demoData from "@openeuropa/bcl-data-spinner/data.js";
import spinner from "@openeuropa/bcl-spinner/spinner.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";

const getArgs = (data) => ({
  size: data.size || "",
  variant: data.variant,
  type: "border",
  assistive_text: data.assistive_text,
});

const getArgTypes = () => ({
  size: {
    type: { name: "select" },
    description: "Size spinner",
    options: {
      large: "lg",
      medium: "",
      small: "sm",
    },
    table: {
      type: { summary: "select" },
      defaultValue: { summary: "" },
      category: "Style",
    },
  },
  variant: {
    type: { name: "select" },
    description: "Variant of the spinner",
    options: getVariants(false),
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Style",
    },
  },
  type: {
    type: { name: "select" },
    description: "Type of spinner",
    options: ["border", "grow"],
    control: {
      type: "inline-radio",
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "border" },
      category: "Style",
    },
  },
  assistive_text: {
    type: { name: "string" },
    name: "assistive text",
    description:
      "Text inside the spinner to be visible on assistive technologies",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
});

const applyArgs = (data, args) => Object.assign(data, args);

export default {
  title: "Components/Spinner",
  decorators: [withCode, withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=3142%3A10872",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/spinners/",
      },
    ],
  },
};

export const Default = (args) => spinner(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

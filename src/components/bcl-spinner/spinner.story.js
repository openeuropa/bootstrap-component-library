import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-spinner/data.js";
import spinner from "./spinner.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";

const getArgs = (data) => {
  return {
    small: false,
    variant: data.variant,
    type: "border",
    assistive_text: data.assistive_text,
  };
};

const getArgTypes = (data) => {
  return {
    small: {
      type: { name: "boolean" },
      description: "Small spinner",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Spinner",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=3142%3A10921",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=3142%3A10872",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/spinners/",
      },
    ],
  },
};

export const Default = (args) => spinner(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

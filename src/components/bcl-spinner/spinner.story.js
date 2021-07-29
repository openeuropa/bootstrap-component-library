import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-spinner/data.js";
import spinner from "@openeuropa/bcl-spinner/spinner.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";

const getArgTypes = (data) => {
  return {
    small: {
      type: { name: "boolean" },
      description: "Small spinner",
      defaultValue: data.small,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the spinner",
      defaultValue: data.variant,
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
    type: {
      type: { name: "select" },
      description: "Type of spinner",
      defaultValue: "border",
      control: {
        type: "inline-radio",
        options: ["border", "grow"],
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
      defaultValue: data.assistive_text,
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

Default.argTypes = getArgTypes(demoData);

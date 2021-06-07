import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-table/data.js";
import table from "./table.html.twig";
import { getVariants } from "@oe/story-utils";

const getArgTypes = () => {
  return {
    striped: {
      type: { name: "boolean" },
      description: "Striped table",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    hoverable: {
      type: { name: "boolean" },
      description: "Hoverable rows",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the table",
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
    border: {
      type: { name: "select" },
      description: "Variant of the border of table",
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
    borderless: {
      type: { name: "boolean" },
      description: "Borderless table",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    small: {
      type: { name: "boolean" },
      description: "Small table",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Table",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2738%3A489",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=75%3A95",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/content/tables/",
      },
    ],
  },
};

export const Default = (args) => table(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);

import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-table/data.js";
import table from "@openeuropa/bcl-table/table.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

const getArgs = (data) => {
  return {
    striped: false,
    hoverable: false,
    borderless: false,
    small: false,
  };
};

const getArgTypes = () => {
  return {
    striped: {
      type: { name: "boolean" },
      description: "Striped table",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    hoverable: {
      type: { name: "boolean" },
      description: "Hoverable rows",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    variant: {
      type: { name: "select" },
      description: "Variant of the table",
      options: getVariants(false),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    border: {
      type: { name: "select" },
      description: "Variant of the border of table",
      options: getVariants(false),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    borderless: {
      type: { name: "boolean" },
      description: "Borderless table",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    small: {
      type: { name: "boolean" },
      description: "Small table",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
  };
};

const resetAttrs = (data, args) => {
  data.attributes.removeClass("table-" + data.variant);
  data.attributes
    .removeClass("table-bordered")
    .removeClass("border-" + data.border);
  if (!args.striped) {
    data.attributes.removeClass("table-striped");
  }
  if (!args.hoverable) {
    data.attributes.removeClass("table-hover");
  }
  if (!args.small) {
    data.attributes.removeClass("table-sm");
  }
  if (!args.borderless) {
    data.attributes.removeClass("table-borderless");
  }
};

const applyArgs = (data, args) => {
  resetAttrs(data, args);
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

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

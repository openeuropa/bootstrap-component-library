import { getVariants } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-table/data.js";
import table from "@openeuropa/bcl-table/table.html.twig";

const getArgs = () => ({
  striped: false,
  hoverable: false,
  borderless: false,
  small: false,
  table_responsive: "",
});

const getArgTypes = () => ({
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
  table_responsive: {
    name: "table responsive",
    type: { name: "select" },
    options: ["all", "sm", "md", "lg", "xl", "xxl"],
    description: "Responsive breakpoints",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Style",
    },
  },
});

const resetAttrs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  data.attributes.removeClass(`table-${data.variant}`);
  data.attributes
    .removeClass("table-bordered")
    .removeClass(`border-${data.border}`);
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
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=75%3A95",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/content/tables/",
      },
    ],
  },
};

export const Default = (args) => table(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

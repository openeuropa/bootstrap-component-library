import drupalAttribute from "drupal-attribute";
import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-fact-figures/data.js";
import factFigures from "@openeuropa/bcl-fact-figures/fact-figures.html.twig";

const linkMore = { ...demoData.link_more };
const getArgs = () => ({
  title: "",
  title_tag: "h2",
  variant: "default",
  responsive_columns: 3,
  more: true,
  display_icons: true,
});

const getArgTypes = () => ({
  ...getTitleControls(),
  variant: {
    type: { name: "select" },
    options: ["default", "block"],
    description: "Variant of the composition",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "default" },
      category: "Content",
    },
  },
  display_icons: {
    name: "icons visibility",
    type: { name: "boolean" },
    description: "Toggle icon visibility",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "true" },
      category: "Content",
    },
  },
  more: {
    name: "link in the footer",
    type: { name: "boolean" },
    description: "Toggle visibility of the more link",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: true },
      category: "Content",
    },
  },
  responsive_columns: {
    name: "columns number",
    type: { name: "range" },
    control: {
      type: "range",
      steps: 1,
      min: 1,
      max: 3,
    },
    description: "One two or three columns layout",
    table: {
      type: { summary: "integer" },
      defaultValue: { summary: 3 },
      category: "Layout",
    },
  },
});

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  data.attributes.removeClass([
    `bcl-fact-figures--${data.variant}`,
    "text-primary",
  ]);

  if (!args.more) {
    delete data.link_more;
    delete args.more;
  } else if (!data.link_more) {
    data.link_more = linkMore;
  }

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Fact and Figures",
  parameters: {
    badges: ["deprecated"],
  },
};

export const Default = (args) =>
  factFigures(applyArgs(correctPaths(demoData), args));

Default.args = getArgs();
Default.argTypes = getArgTypes();

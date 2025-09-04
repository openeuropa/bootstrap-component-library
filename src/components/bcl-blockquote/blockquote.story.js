import { getTitleControls } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-blockquote/data.js";
import blockquote from "@openeuropa/bcl-blockquote/blockquote.html.twig";

const getArgs = (data) => ({
  title: "",
  title_tag: "h2",
  quote: data.quote,
  attribution: data.attribution,
  cite: data.cite,
  alignment: "left",
});

const getArgTypes = () => ({
  ...getTitleControls(),
  quote: {
    type: { name: "string" },
    description: "Text of blockquote",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  attribution: {
    type: { name: "string" },
    description: "Attribution of blockquote",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  cite: {
    type: { name: "string" },
    description: "Cite of attribution",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  alignment: {
    type: { name: "select" },
    options: { left: "left", center: "center", right: "end" },
    description: "Text alignment",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "left" },
      category: "Style",
    },
  },
});

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  data.attributes.removeClass(`text-${data.alignment}`);

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Blockquote",
};

export const Default = (args) => blockquote(applyArgs(demoData, args));

Default.storyName = "Default";
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);

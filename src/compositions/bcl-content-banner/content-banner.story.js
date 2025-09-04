import { correctPaths } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

import dataDefault from "@openeuropa/bcl-content-banner/data/data.js";
import dataDate from "@openeuropa/bcl-date-block/data/data";
import dataLinks from "@openeuropa/bcl-content-banner/data/data--links";
import contentBanner from "@openeuropa/bcl-content-banner/content-banner.html.twig";

const links = [...dataLinks.links];
const badges = [...dataDefault.badges];
const image = { ...dataDefault.image };

const getArgs = () => ({
  background: "gray",
  image_size: "md",
  date: false,
  badges: true,
  links: false,
});

const getArgTypes = () => ({
  background: {
    type: { name: "select" },
    options: ["white", "gray"],
    description: "White or gray background",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "white" },
    },
  },
  links: {
    type: { name: "boolean" },
    description: "Toggle links",
    table: {
      type: { summary: "array" },
      defaultValue: { summary: "[]" },
    },
  },
  date: {
    type: { name: "boolean" },
    description: "Replace image with a date block",
    table: {
      type: { summary: "object" },
      defaultValue: { summary: "{}" },
    },
  },
  badges: {
    type: { name: "boolean" },
    description: "Toggle badges",
    table: {
      type: { summary: "array" },
      defaultValue: { summary: "[]" },
    },
  },
  image_size: {
    name: "image size",
    type: { name: "select" },
    options: ["md", "lg", "xl"],
    description: "Size of the image",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "md" },
    },
  },
});

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  if (args.date) {
    data.image = {};
    data.date = dataDate;
  } else {
    data.image = image;
    delete data.date;
  }
  if (args.links) {
    data.links = links;
  } else {
    delete data.links;
  }
  if (!args.badges) {
    delete data.badges;
  } else if (!data.badges) {
    data.badges = badges;
  }

  data.background = args.background;
  data.image_size = args.image_size;
  correctPaths(data);

  return data;
};

export default {
  title: "Compositions/Content banner",
  parameters: {
    layout: "fullscreen",
    badges: ["stable", "deprecated"],
  },
};

export const Default = (args) => contentBanner(applyArgs(dataDefault, args));
Default.args = getArgs();
Default.argTypes = getArgTypes();

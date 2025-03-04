import { correctPaths, getTitleControls } from "@openeuropa/bcl-story-utils";

import demoDefaultData from "@openeuropa/bcl-listing/data/listing--default-1-col.js";
import demoDateData from "@openeuropa/bcl-listing/data/listing--date";
import demoDefault2ColData from "@openeuropa/bcl-listing/data/listing--default-2-col";
import demoDefault3ColData from "@openeuropa/bcl-listing/data/listing--default-3-col";
import demoHighlightData from "@openeuropa/bcl-listing/data/listing--highlight-1-col";
import demoHighlight3ColData from "@openeuropa/bcl-listing/data/listing--highlight-3-col";
import demoHighlight2ColData from "@openeuropa/bcl-listing/data/listing--highlight-2-col";

import listing from "@openeuropa/bcl-listing/listing.html.twig";

const getArgs = (data) => {
  const args = {
    title: data.title || "",
    title_tag: "h2",
    variant: data.variant,
    alignment: "default",
  };

  return args;
};

const getArgTypes = (data) => ({
  ...getTitleControls(),
  variant: {
    type: { name: "select" },
    options: [data.variant],
    description: "Variant used in the example",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "default-1-col" },
      category: "Style",
    },
  },
  alignment: {
    type: { name: "select" },
    description: "Alignment of the elements inside the items",
    options: ["default", "start", "end", "center", "baseline", "stretch"],
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
});

const applyArgs = (data, args) => {
  if (args.alignment === "default") {
    args.alignment = "";
  }

  return Object.assign(data, args);
};

export default {
  title: "Paragraphs/Listings",
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5903%3A69651",
      },
    ],
  },
};

export const Horizontal = (args) =>
  listing(applyArgs(correctPaths(demoDefaultData), args));
Horizontal.storyName = "Default, 1 col";
Horizontal.args = getArgs(demoDefaultData);
Horizontal.argTypes = getArgTypes(demoDefaultData);

export const Vertical = (args) =>
  listing(applyArgs(correctPaths(demoDefault2ColData), args));

Vertical.storyName = "Default, 2 col";
Vertical.args = getArgs(demoDefault2ColData);
Vertical.argTypes = getArgTypes(demoDefault2ColData);

export const Vertical3Cols = (args) =>
  listing(applyArgs(correctPaths(demoDefault3ColData), args));

Vertical3Cols.storyName = "Default, 3 col";
Vertical3Cols.args = getArgs(demoDefault3ColData);
Vertical3Cols.argTypes = getArgTypes(demoDefault3ColData);

export const Cards = (args) =>
  listing(applyArgs(correctPaths(demoHighlightData), args));

Cards.storyName = "Highlight, 1 col";
Cards.args = getArgs(demoHighlightData);
Cards.argTypes = getArgTypes(demoHighlightData);
Cards.argTypes.alignment.table = { disable: true };
Cards.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const CardsTwoCols = (args) =>
  listing(applyArgs(correctPaths(demoHighlight2ColData), args));

CardsTwoCols.storyName = "Highlight, 2 col";
CardsTwoCols.args = getArgs(demoHighlight2ColData);
CardsTwoCols.argTypes = getArgTypes(demoHighlight2ColData);
CardsTwoCols.argTypes.alignment.table = { disable: true };

export const VerticalCards = (args) =>
  listing(applyArgs(correctPaths(demoHighlight3ColData), args));

VerticalCards.storyName = "Highlight, 3 col";
VerticalCards.args = getArgs(demoHighlight3ColData);
VerticalCards.argTypes = getArgTypes(demoHighlight3ColData);
VerticalCards.argTypes.alignment.table = { disable: true };

export const Date = (args) =>
  listing(applyArgs(correctPaths(demoDateData), args));

Date.storyName = "Date listing";
Date.args = getArgs(demoDateData);
Date.argTypes = getArgTypes(demoDateData);

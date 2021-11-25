import demoDefaultData from "@openeuropa/bcl-listing/data/listing--default-1-col.js";
import demoDateData from "@openeuropa/bcl-listing/data/listing--date.js";
import demoDefault2ColData from "@openeuropa/bcl-listing/data/listing--default-2-col.js";
import demoDefault3ColData from "@openeuropa/bcl-listing/data/listing--default-3-col.js";
import demoHighlightData from "@openeuropa/bcl-listing/data/listing--highlight-1-col.js";
import demoHighlight3ColData from "@openeuropa/bcl-listing/data/listing--highlight-3-col.js";
import demoHighlight2ColData from "@openeuropa/bcl-listing/data/listing--highlight-2-col.js";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import listing from "@openeuropa/bcl-listing/listing.html.twig";

const getArgs = (data) => {
  return {
    variant: data.variant,
  };
};

const getArgTypes = (data) => {
  return {
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
  };
};

export default {
  title: "Paragraphs/Listings",
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5903%3A69651",
      },
    ],
  },
};

export const Horizontal = (args) => listing(correctPaths(demoDefaultData));

Horizontal.storyName = "Default, 1 col";
Horizontal.args = getArgs(demoDefaultData);
Horizontal.argTypes = getArgs(demoDefaultData);

export const Vertical = (args) => listing(adapter(demoDefault2ColData));

Vertical.storyName = "Default, 2 col";
Vertical.args = getArgs(demoDefault2ColData);
Vertical.argTypes = getArgTypes(demoDefault2ColData);

export const Vertical3Cols = (args) => listing(adapter(demoDefault3ColData));

Vertical3Cols.storyName = "Default, 3 col";
Vertical3Cols.args = getArgs(demoDefault3ColData);
Vertical3Cols.artTypes = getArgTypes(demoDefault3ColData);

export const Cards = (args) => listing(adapter(demoHighlightData));

Cards.storyName = "Highlight, 1 col";
Cards.args = getArgs(demoHighlightData);
Cards.argTypes = getArgTypes(demoHighlightData);
Cards.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const CardsTwoCols = (args) => listing(adapter(demoHighlight2ColData));

CardsTwoCols.storyName = "Highlight, 2 col";
CardsTwoCols.args = getArgs(demoHighlight2ColData);
CardsTwoCols.argTypes = getArgTypes(demoHighlight2ColData);

export const VerticalCards = (args) => listing(adapter(demoHighlight3ColData));

VerticalCards.storyName = "Highlight, 3 col";
VerticalCards.args = getArgs(demoHighlight3ColData);
VerticalCards.argTypes = getArgTypes(demoHighlight3ColData);

export const Date = (args) => listing(adapter(demoDateData));

Date.storyName = "Date listing";
Date.args = getArgs(demoDateData);
Date.argTypes = getArgTypes(demoDateData);

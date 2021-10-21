import demoSimpleData from "@openeuropa/bcl-listing/data/listing--horizontal.js";
import demoVerticalData from "@openeuropa/bcl-listing/data/listing--vertical.js";
import demoVertical3ColsData from "@openeuropa/bcl-listing/data/listing--vertical3cols.js";
import demoCardsData from "@openeuropa/bcl-listing/data/listing--cards-horizontal.js";
import demoCardsVerticalData from "@openeuropa/bcl-listing/data/listing--cards-vertical-3cols.js";
import demoCardsVertical2ColsData from "@openeuropa/bcl-listing/data/listing--cards-vertical.js";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

import listing from "@openeuropa/bcl-listing/listing.html.twig";

const adapter = (data) => {
  data.link.icon.path = defaultSprite;

  return data;
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
    controls: {
      disable: true,
    },
  },
};

export const Horizontal = (args) => listing(adapter(demoSimpleData));

Horizontal.storyName = "Content item (horizontal)";
Horizontal.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const Vertical = (args) => listing(adapter(demoVerticalData));

Vertical.storyName = "Content item ( vertical, 2cols)";
Vertical.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const Vertical3Cols = () => listing(adapter(demoVertical3ColsData));

Vertical3Cols.storyName = "Content item (vertical, 3cols)";
Vertical3Cols.parameters = {
  viewport: {
    defaultViewport: "1366x768",
  },
};

export const Cards = () => listing(adapter(demoCardsData));

Cards.storyName = "Horizontal with cards";
Cards.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};

export const CardsTwoCols = (args) =>
  listing(adapter(demoCardsVertical2ColsData));

CardsTwoCols.storyName = "With cards (vertical, 2 cols)";
CardsTwoCols.parameters = {
  viewport: {
    defaultViewport: "1366x768",
  },
};

export const VerticalCards = () => listing(adapter(demoCardsVerticalData));

VerticalCards.storyName = "With cards (vertical, 3 cols)";

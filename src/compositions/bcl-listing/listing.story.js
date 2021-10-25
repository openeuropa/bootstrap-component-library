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

export const Horizontal = () => listing(adapter(demoSimpleData));

export const Vertical = () => listing(adapter(demoVerticalData));

Vertical.storyName = "Vertical, 2cols";

export const Vertical3Cols = () => listing(adapter(demoVertical3ColsData));

Vertical3Cols.storyName = "Vertical, 3cols";

export const Cards = () => listing(adapter(demoCardsData));

Cards.storyName = "Horizontal highlights";
Cards.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const CardsTwoCols = () => listing(adapter(demoCardsVertical2ColsData));

CardsTwoCols.storyName = "Vertical highlights, 2 cols";

export const VerticalCards = () => listing(adapter(demoCardsVerticalData));

VerticalCards.storyName = "Vertical highlights, 3 cols";

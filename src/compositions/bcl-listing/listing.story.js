import demoSimpleData from "@openeuropa/bcl-listing/data/listing--simple.js";
import demoVerticalData from "@openeuropa/bcl-listing/data/listing--vertical.js";
import demoCardsData from "@openeuropa/bcl-listing/data/listing--cards.js";
import demoCardsVerticalData from "@openeuropa/bcl-listing/data/listing--vertical-cards.js";
import demoCardsVertical2ColsData from "@openeuropa/bcl-listing/data/listing--vertical-2cols.js";
import listing from "@openeuropa/bcl-card-layout/card-layout.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  return {};
};

const getArgTypes = (data) => {
  return {};
};

const applyArgs = (data, args) => {
  data.link.icon.path = defaultSprite;

  return Object.assign(data, args);
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

export const Horizontal = (args) => listing(applyArgs(demoSimpleData, args));

Horizontal.args = getArgs(demoSimpleData);
Horizontal.argTypes = getArgTypes(demoSimpleData);
Horizontal.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const Vertical = (args) => listing(applyArgs(demoVerticalData, args));

Vertical.args = getArgs(demoVerticalData);
Vertical.argTypes = getArgTypes(demoVerticalData);

export const Cards = (args) => listing(applyArgs(demoCardsData, args));

Cards.storyName = "Horizontal with cards";
Cards.args = getArgs(demoCardsData);
Cards.argTypes = getArgTypes(demoCardsData);
Cards.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};

export const CardsTwoCols = (args) =>
  listing(applyArgs(demoCardsVertical2ColsData, args));

CardsTwoCols.storyName = "Vertical with cards (2 cols)";
CardsTwoCols.args = getArgs(demoCardsVertical2ColsData);
CardsTwoCols.argTypes = getArgTypes(demoCardsVertical2ColsData);

export const VerticalCards = (args) =>
  listing(applyArgs(demoCardsVerticalData, args));

VerticalCards.storyName = "Vertical with cards (3 cols)";
VerticalCards.args = getArgs(demoCardsVerticalData);
VerticalCards.argTypes = getArgTypes(demoCardsVerticalData);

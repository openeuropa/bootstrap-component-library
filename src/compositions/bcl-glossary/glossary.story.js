import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoDataListing from "@openeuropa/bcl-glossary/data/data--listing";
import demoDataDetail from "@openeuropa/bcl-glossary/data/data--detail";

import pageTemplate from "@openeuropa/bcl-glossary/glossary-detail.html.twig";
import listingPage from "@openeuropa/bcl-glossary/glossary-listing.html.twig";

export default {
  title: "Features/Glossary",
  decorators: [withCode, withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    badgesConfig: {
      stable: {
        title: "v1",
      },
    },
    design: [
      {
        name: "Mockup - Glossary (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=11192%3A278869",
      },
      {
        name: "Mockup - Glossary (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=11180%3A280032",
      },
    ],
  },
};

export const Listing = () => listingPage(correctPaths(demoDataListing));

Listing.storyName = "listing";

export const Detail = () => pageTemplate(correctPaths(demoDataDetail));

Detail.storyName = "detail";

import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import demoDataListing from "@openeuropa/bcl-glossary/data/data--listing";
import demoDataDetails from "@openeuropa/bcl-glossary/data/data--detail";

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
    badges: ["stable", "deprecated"],
    badgesConfig: {
      stable: {
        title: "v1",
      },
    },
  },
};

export const Listing = () => listingPage(correctPaths(demoDataListing));
Listing.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=11134%3A297073",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=11180%3A280032",
    },
  ],
};

export const Details = () => pageTemplate(correctPaths(demoDataDetails));
Details.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10977%3A245279",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=11180%3A281780",
    },
  ],
};

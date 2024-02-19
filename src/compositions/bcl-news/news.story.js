import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";

import { demoData, demoListing } from "@openeuropa/bcl-news/data/data";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import news from "@openeuropa/bcl-base-templates/content-type.html.twig";

export default {
  title: "Features/News",
  decorators: [withCode, withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable", "deprecated"],
  },
};

export const FullPage = () => news(correctPaths(demoData));

FullPage.storyName = "News page";
FullPage.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A243152",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A243122",
    },
  ],
};

export const Listing = () => listingPage(correctPaths(demoListing));

Listing.storyName = "News listing";
Listing.decorators = [initBadges];
Listing.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A242951",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A243053",
    },
  ],
};

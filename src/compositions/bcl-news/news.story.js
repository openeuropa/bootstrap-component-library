import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";

import { demoData, demoListing } from "@openeuropa/bcl-news/data/data";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import news from "@openeuropa/bcl-base-templates/content-type.html.twig";

export default {
  title: "Features/News",
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

export const Listing = () => listingPage(correctPaths(demoListing));

Listing.storyName = "News listing";
Listing.decorators = [initBadges];

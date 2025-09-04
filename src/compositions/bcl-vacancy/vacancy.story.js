import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import {
  demoListing,
  demoDetails,
  demoDetailsClosed,
} from "@openeuropa/bcl-vacancy/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import detailsPage from "@openeuropa/bcl-vacancy/vacancy.html.twig";

export default {
  title: "Features/Vacancy",
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable", "deprecated"],
  },
};

export const Listing = () => listingPage(correctPaths(demoListing));
Listing.decorators = [initBadges];

export const Opened = () => detailsPage(correctPaths(demoDetails));
Opened.storyName = "Details (opened)";

export const Closed = () => detailsPage(correctPaths(demoDetailsClosed));
Closed.storyName = "Details (closed)";

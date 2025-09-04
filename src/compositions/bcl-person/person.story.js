import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import { demoListing, demoDetails } from "@openeuropa/bcl-person/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import detailsPage from "@openeuropa/bcl-person/person.html.twig";

export default {
  title: "Features/Person",
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

export const Details = () => detailsPage(correctPaths(demoDetails));

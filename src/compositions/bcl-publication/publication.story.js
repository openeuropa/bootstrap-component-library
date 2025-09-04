import {
  initBadges,
  correctPaths,
  initScrollspy,
} from "@openeuropa/bcl-story-utils";
import {
  demoDetails,
  demoDetailsMultiple,
  demoListing,
} from "@openeuropa/bcl-publication/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import detailsPage from "@openeuropa/bcl-publication/publication.html.twig";

export default {
  title: "Features/Publication",
  decorators: [initScrollspy],
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

export const DetailsMultiple = () =>
  detailsPage(correctPaths(demoDetailsMultiple));
DetailsMultiple.storyName = "Details (multiple authors)";

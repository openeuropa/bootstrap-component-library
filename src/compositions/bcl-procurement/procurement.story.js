import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import {
  demoDetails,
  demoDetailsClosed,
  demoListing,
} from "@openeuropa/bcl-procurement/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import detailsPage from "@openeuropa/bcl-procurement/procurement.html.twig";

export default {
  title: "Features/Procurement",
  decorators: [withDesign, withCode],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A187235",
      },
    ],
  },
};

export const Listing = () => listingPage(correctPaths(demoListing));
Listing.decorators = [initBadges];

export const Opened = () => detailsPage(correctPaths(demoDetails));
Opened.storyName = "Details (opened)";

export const Closed = () => detailsPage(correctPaths(demoDetailsClosed));
Closed.storyName = "Details (closed)";

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
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable", "deprecated"],
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
Listing.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A180591",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A180747",
    },
  ],
};

export const Opened = () => detailsPage(correctPaths(demoDetails));
Opened.storyName = "Details (opened)";
Opened.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A180671",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A180847",
    },
  ],
};

export const Closed = () => detailsPage(correctPaths(demoDetailsClosed));
Closed.storyName = "Details (closed)";
Closed.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A180688",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A180863",
    },
  ],
};

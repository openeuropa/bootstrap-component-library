import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
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
  decorators: [withCode, withDesign],
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
      name: "Mockup - Vacancy listing (desktop)",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A187317",
    },
    {
      name: "Mockup - Vacancy listing (mobile)",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A187472",
    },
  ],
};

export const Opened = () => detailsPage(correctPaths(demoDetails));
Opened.storyName = "Details (opened)";
Opened.parameters = {
  design: [
    {
      name: "Mockup - Vacancy Opened (desktop)",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A187357",
    },
    {
      name: "Mockup - Vacancy Opened (mobile)",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A187527",
    },
  ],
};

export const Closed = () => detailsPage(correctPaths(demoDetailsClosed));
Closed.storyName = "Details (closed)";
Closed.parameters = {
  design: [
    {
      name: "Mockup - Vacancy Closed (desktop)",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A187374",
    },
    {
      name: "Mockup - Vacancy Closed (mobile)",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A187543",
    },
  ],
};

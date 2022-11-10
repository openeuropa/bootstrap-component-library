import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import {
  initBadges,
  correctPaths,
  initScrollspyLegacy,
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
  decorators: [withCode, withDesign, initScrollspyLegacy],
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
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=4298%3A144965",
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
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A200430",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A200242",
    },
  ],
};

export const Details = () => detailsPage(correctPaths(demoDetails));
Details.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A200319",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A200295",
    },
  ],
};

export const DetailsMultiple = () =>
  detailsPage(correctPaths(demoDetailsMultiple));
DetailsMultiple.storyName = "Details (multiple authors)";
Details.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A200336",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A200307",
    },
  ],
};

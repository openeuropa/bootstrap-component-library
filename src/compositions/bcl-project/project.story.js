import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import {
  initBadges,
  correctPaths,
  initScrollspy,
} from "@openeuropa/bcl-story-utils";
import {
  demoListing,
  ongoingDemo,
  closedDemo,
  plannedDemo,
} from "@openeuropa/bcl-project/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

import detailsPage from "@openeuropa/bcl-project/project.html.twig";

export default {
  title: "Features/Project",
  decorators: [withCode, withDesign, initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    badgesConfig: {
      stable: {
        title: "v1.2",
      },
    },
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
Listing.storyName = "Listing";
Listing.decorators = [initBadges];

export const Ongoing = () => detailsPage(correctPaths(ongoingDemo));
Ongoing.storyName = "Project page (ongoing)";

export const Closed = () => detailsPage(correctPaths(closedDemo));
Closed.storyName = "Project page (closed)";

export const Planned = () => detailsPage(correctPaths(plannedDemo));
Planned.storyName = "Project page (planned)";

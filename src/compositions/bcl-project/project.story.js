import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import {
  initBadges,
  correctPaths,
  initScrollspy,
  scrollspyTitles,
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
  decorators: [withCode, withDesign, initScrollspy, scrollspyTitles],
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
Listing.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A227687",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A227969",
    },
  ],
};

export const Ongoing = () => detailsPage(correctPaths(ongoingDemo));
Ongoing.storyName = "Project page (ongoing)";
Ongoing.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A227763",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A228021",
    },
  ],
};

export const Closed = () => detailsPage(correctPaths(closedDemo));
Closed.storyName = "Project page (closed)";
Closed.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A227809",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A228021",
    },
  ],
};

export const Planned = () => detailsPage(correctPaths(plannedDemo));
Planned.storyName = "Project page (planned)";
Planned.parameters = {
  design: [
    {
      name: "Mockup - Desktop",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A227855",
    },
    {
      name: "Mockup - Mobile",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10377%3A228021",
    },
  ],
};

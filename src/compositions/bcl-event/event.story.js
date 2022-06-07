import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import {
  initScrollspy,
  initBadges,
  correctPaths,
} from "@openeuropa/bcl-story-utils";

import {
  demoData,
  demoDateData,
  demoListing,
} from "@openeuropa/bcl-event/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import event from "@openeuropa/bcl-event/event.html.twig";

export default {
  title: "Features/Event",
  decorators: [withCode, withDesign],
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
        name: "Mockup - Event (desktop)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5343%3A242940",
      },
      {
        name: "Mockup - Event (mobile)",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5343%3A243030",
      },
    ],
  },
};

export const FullPage = () => event(correctPaths(demoData));

FullPage.storyName = "Event page";
FullPage.decorators = [initScrollspy];

export const FullPage1 = () => event(correctPaths(demoDateData));

FullPage1.storyName = "Event page with date";
FullPage1.decorators = [initScrollspy];

export const Listing = () => listingPage(correctPaths(demoListing));

Listing.storyName = "Event listing";
Listing.decorators = [initBadges];

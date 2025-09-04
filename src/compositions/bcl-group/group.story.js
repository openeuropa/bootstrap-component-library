import {
  correctPaths,
  initBadges,
  initMultiselects,
} from "@openeuropa/bcl-story-utils";

import {
  dataLanding,
  dataListing,
  dataListingMember,
  dataListingContent,
} from "@openeuropa/bcl-group/data/data";

import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

import groupListing from "@openeuropa/bcl-group/group.html.twig";
import groupLanding from "@openeuropa/bcl-group/group-landing.html.twig";

export default {
  title: "Features/Group",
  decorators: [initBadges, initMultiselects],
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [{ id: "aria-input-field-name", enabled: false }],
      },
    },
    badges: ["stable", "deprecated"],
    controls: {
      disable: true,
    },
  },
};

export const List = () => listingPage(correctPaths(dataListing));

export const MemberList = () => groupListing(correctPaths(dataListingMember));

export const ContentList = () => groupListing(correctPaths(dataListingContent));

export const Landing = () => groupLanding(correctPaths(dataLanding));

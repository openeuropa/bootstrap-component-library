import {
  correctPaths,
  initBadges,
  initListings,
} from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
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
  decorators: [withCode, withDesign, initBadges, initListings],
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [{ id: "aria-input-field-name", enabled: false }],
      },
    },
    design: [
      {
        name: "Mockup - Group",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=482%3A2559",
      },
    ],
    badges: ["stable"],
    controls: {
      disable: true,
    },
  },
};

export const List = () => listingPage(correctPaths(dataListing));

export const MemberList = () => groupListing(correctPaths(dataListingMember));

export const ContentList = () => groupListing(correctPaths(dataListingContent));

export const Landing = () => groupLanding(correctPaths(dataLanding));
Landing.parameters = {
  design: [
    {
      name: "Mockup - Group",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=482%3A2559",
    },
  ],
};

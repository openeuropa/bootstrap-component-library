import { withDesign } from "storybook-addon-designs";
import { initListings } from "@openeuropa/bcl-story-utils";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import groupLandingListing from "@openeuropa/bcl-group-landing-listing/group-landing-listing.html.twig";
import demoDataList from "@openeuropa/bcl-group-landing-listing/dataList";
import demoDataListContent from "@openeuropa/bcl-group-landing-listing/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group-landing-listing/dataListMember";
import { correctPaths } from "@openeuropa/bcl-story-utils";

export default {
  title: "Compositions/Group/Listing",
  decorators: [withDesign, initListings],
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Mockup - Group",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=482%3A2559",
      },
    ],
    controls: {
      disable: true,
    },
  },
};

export const List = () => groupLandingListing(correctPaths(demoDataList));

export const MemberList = () =>
  groupLandingListing(correctPaths(demoDataListMember));

export const ContentList = () =>
  groupLandingListing(correctPaths(demoDataListContent));

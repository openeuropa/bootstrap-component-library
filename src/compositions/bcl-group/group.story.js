import {
  correctPaths,
  initBadges,
  initListings,
} from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import groupListing from "@openeuropa/bcl-group/group.html.twig";
import groupLanding from "@openeuropa/bcl-group/group-landing.html.twig";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import demoData from "@openeuropa/bcl-group/data";
import demoDataList from "@openeuropa/bcl-group/dataList";
import demoDataListContent from "@openeuropa/bcl-group/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group/dataListMember";
import demoDataLanding from "@openeuropa/bcl-group/dataLanding";
import drupalAttribute from "drupal-attribute";

let baseData = {
  content_type: "group",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...demoData,
};

const dataListingContent = {
  page_title: "Content in the group",
  ...baseData,
  ...demoDataListContent,
};

const dataListingMember = {
  page_title: "Group members",
  ...baseData,
  ...demoDataListMember,
};

delete baseData.banner;
const dataListing = {
  page_title: "Groups",
  ...baseData,
  ...demoDataList,
};

const dataLanding = {
  page_title: "Group members",
  content_type: "group",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoDataLanding,
};

export default {
  title: "Pages/Group",
  decorators: [withDesign, initBadges, initListings],
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [
          { id: "heading-order", enabled: false },
          { id: "aria-input-field-name", enabled: false },
        ],
      },
    },
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

import { withDesign } from "storybook-addon-designs";
import { initListings, initBadges } from "@openeuropa/bcl-story-utils";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import groupLandingListing from "@openeuropa/bcl-group-landing-listing/group-landing-listing.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import demoDataList from "@openeuropa/bcl-group-landing-listing/dataList";
import demoDataListContent from "@openeuropa/bcl-group-landing-listing/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group-landing-listing/dataListMember";

export default {
  title: "Compositions/Group/Listing",
  decorators: [withDesign, initListings, initBadges],
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

const correctPaths = (data) => {
  data.data.header = headerData;
  data.data.footer = footerData;
  data.data.header.head.navigation.items.forEach((item) => {
    if (item.icon) {
      item.icon.path = defaultSprite;
    }
  });
  data.data.header.navbar.form.submit.icon.path = defaultSprite;
  data.data.header.breadcrumbs.icons_path = defaultSprite;
  data.data.footer.rows.forEach((row) => {
    row.cols.forEach((col) => {
      if (col.items) {
        col.items.forEach((item) => {
          if (item.type == "links") {
            item.links.forEach((link) => {
              if (link.icon) {
                link.icon.path = defaultSprite;
              }
            });
          }
        });
      }
    });
  });
  data.data.badges.forEach((badge) => {
    badge.icons_path = defaultSprite;
  });
  data.data.filter_button.icon.path = defaultSprite;
  return data;
};

export const List = () => groupLandingListing(correctPaths(demoDataList));

export const MemberList = () =>
  groupLandingListing(correctPaths(demoDataListMember));

export const ContentList = () =>
  groupLandingListing(correctPaths(demoDataListContent));

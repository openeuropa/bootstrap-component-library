import layout from "@openeuropa/bcl-base-templates/data/layout";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import demoDataExtra from "@openeuropa/bcl-group/data/data--extra";
import demoDataList from "@openeuropa/bcl-group/data/data--list";
import demoDataListContent from "@openeuropa/bcl-group/data/data--list-content";
import demoDataListMember from "@openeuropa/bcl-group/data/data--list-member";
import demoDataLanding from "@openeuropa/bcl-group/data/data--landing";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

const baseData = {
  content_type: "group",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...demoDataExtra,
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

const dataListingContent = {
  title: "Content in the group",
  ...baseData,
  ...demoDataListContent,
};

const dataListingMember = {
  title: "Group members",
  ...baseData,
  ...demoDataListMember,
  listing: listingProfiles,
};

const dataListing = {
  title: "Results",
  ...baseData,
  ...demoDataList,
  banner: {
    ...pageTitleBanner,
    title: "Groups",
    title_tag: "h1",
  },
};

const dataLanding = {
  title: "Group members",
  content_type: "group",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoDataLanding,
};

export { dataLanding, dataListing, dataListingMember, dataListingContent };

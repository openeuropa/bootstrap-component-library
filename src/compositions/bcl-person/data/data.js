import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
  listingProfiles,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";

import dataListing from "@openeuropa/bcl-person/data/data--listing";
import dataDetails from "@openeuropa/bcl-person/data/data--details";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

const baseData = {
  content_type: "listing",
  header,
  footer: layout.footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataDetails,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  listing: listingProfiles,
  banner: {
    ...pageTitleBanner,
    title: "Persons",
    title_tag: "h1",
  },
};

export { demoDetails, demoListing };

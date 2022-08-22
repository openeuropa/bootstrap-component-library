import isChromatic from "chromatic/isChromatic";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import dataListing from "@openeuropa/bcl-vacancy/data/data--listing";
import dataDetails from "@openeuropa/bcl-vacancy/data/data--details";
import dataSidebarDetails from "@openeuropa/bcl-vacancy/data/data--sidebar-details";
import dataOpenBanner from "@openeuropa/bcl-vacancy/data/data--open-banner";
import dataClosedBanner from "@openeuropa/bcl-vacancy/data/data--closed-banner";

const chromatic = process.env.STORYBOOK_ENV;

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic() || chromatic) {
  pageTitleBanner.image.classes = "chromatic-ignore";
}

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
  sidebar: dataSidebarDetails,
  banner: dataOpenBanner,
  social_block: true,
};

const demoDetailsClosed = {
  ...baseData,
  ...dataDetails,
  sidebar: dataSidebarDetails,
  banner: dataClosedBanner,
  social_block: true,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  banner: {
    ...pageTitleBanner,
    title: "Vacancy",
    title_tag: "h1",
  },
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

export { demoListing, demoDetails, demoDetailsClosed };

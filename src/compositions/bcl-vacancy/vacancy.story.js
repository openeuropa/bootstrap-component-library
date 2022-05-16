import { withDesign } from "storybook-addon-designs";
import isChromatic from "chromatic/isChromatic";
import withCode from "@openeuropa/storybook-addon-code";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

import dataListing from "@openeuropa/bcl-vacancy/data/data--listing";
import dataContent from "@openeuropa/bcl-vacancy/data/data";
import dataSidebarDetails from "@openeuropa/bcl-vacancy/data/data--sidebar-details";
import detailsPage from "@openeuropa/bcl-vacancy/vacancy.html.twig";
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
  header: header,
  footer: layout.footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataContent,
  sidebar: dataSidebarDetails,
  banner: dataOpenBanner,
  social_block: true,
};

const demoDetailsClosed = {
  ...baseData,
  ...dataContent,
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
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

export default {
  title: "Features/Vacancy",
  decorators: [withDesign, withCode],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10373%3A187235",
      },
    ],
  },
};

export const Listing = () => listingPage(correctPaths(demoListing));
Listing.decorators = [initBadges];

export const Opened = () => detailsPage(correctPaths(demoDetails));
Opened.storyName = "Details (opened)";

export const Closed = () => detailsPage(correctPaths(demoDetailsClosed));
Closed.storyName = "Details (closed)";

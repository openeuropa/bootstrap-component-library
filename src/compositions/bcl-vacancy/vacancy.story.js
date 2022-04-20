import { withDesign } from "storybook-addon-designs";
import isChromatic from "chromatic/isChromatic";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import drupalAttribute from "drupal-attribute";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import {
  simpleBanner,
  pageTitleBanner,
} from "@openeuropa/bcl-base-templates/data/content-page";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";

import dataListing from "@openeuropa/bcl-vacancy/data/data--listing";
import dataContent from "@openeuropa/bcl-vacancy/data/data";
import dataSidebarDetails from "@openeuropa/bcl-vacancy/data/data--sidebar-details";
import detailsPage from "@openeuropa/bcl-vacancy/vacancy.html.twig";

const chromatic = process.env.STORYBOOK_ENV;

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic() || chromatic) {
  pageTitleBanner.image.classes = "chromatic-ignore";
}

const sidebarOpen = {
  ...dataSidebarDetails,
  button: {
    label: "Apply now",
  },
};

const sidebarClosed = {
  ...dataSidebarDetails,
  button: {
    label: "Vacancy closed",
    disabled: true,
  },
};

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: header,
  footer: {
    ...layout.footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataContent,
  sidebar: sidebarOpen,
  banner: { ...simpleBanner, background: "gray" },
  social_block: true,
};

const demoDetailsClosed = {
  ...baseData,
  ...dataContent,
  sidebar: sidebarClosed,
  banner: { ...simpleBanner, background: "gray" },
  social_block: true,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  banner: {
    ...pageTitleBanner,
    title: {
      content: "Vacancy",
      tag: "h1",
    },
  },
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

export default {
  title: "Features/Vacancy",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    badges: ["stable"],
    badgesConfig: {
      stable: {
        title: "v1.1",
      },
    },
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

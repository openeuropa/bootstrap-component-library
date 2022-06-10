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

import dataListing from "@openeuropa/bcl-procurement/data/data--listing";
import dataContent from "@openeuropa/bcl-procurement/data/data";
import dataSidebarDetails from "@openeuropa/bcl-procurement/data/data--sidebar-details";
import detailsPage from "@openeuropa/bcl-procurement/procurement.html.twig";
import dataDetailsBanner from "@openeuropa/bcl-procurement/data/data--details-banner";

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
  ...dataContent,
  sidebar: dataSidebarDetails,
  banner: {
    ...dataDetailsBanner,
    badges: [
      {
        label: "Opened",
        rounded_pill: true,
        background: "info",
      },
      {
        label: "Type 2",
        outline: true,
        rounded_pill: true,
      },
    ],
    action_bar: `<div class="d-grid d-md-block mt-3-5"><button class="btn btn-primary btn-md" type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#pencil-fill"></use></svg>Apply now</button></div>`,
  },
};

const demoDetailsClosed = {
  ...baseData,
  ...dataContent,
  sidebar: dataSidebarDetails,
  banner: {
    ...dataDetailsBanner,
    badges: [
      {
        label: "Closed",
        rounded_pill: true,
        background: "dark",
      },
      {
        label: "Type 2",
        outline: true,
        rounded_pill: true,
      },
    ],
    action_bar: `<div class="d-grid d-md-block mt-3-5"><button class="btn btn-primary btn-md" disabled type="button"><svg class="me-2-5 bi icon--fluid"><use xlink:href="/icons.svg#pencil-fill"></use></svg>Apply now</button></div>`,
  },
};

const demoListing = {
  ...baseData,
  ...dataListing,
  title: "Results",
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

export default {
  title: "Features/Procurement",
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

import isChromatic from "chromatic/isChromatic";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";

import dataListing from "@openeuropa/bcl-procurement/data/data--listing";
import dataContent from "@openeuropa/bcl-procurement/data/data--content";
import dataSidebarDetails from "@openeuropa/bcl-procurement/data/data--sidebar-details";
import dataDetailsBanner from "@openeuropa/bcl-procurement/data/data--details-banner";

const chromatic = process.env.STORYBOOK_ENV;

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic() || chromatic) {
  dataListing.banner.image.classes = "chromatic-ignore";
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

export { demoDetails, demoDetailsClosed, demoListing };

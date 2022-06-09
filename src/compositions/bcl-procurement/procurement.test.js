import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";

import dataListing from "@openeuropa/bcl-procurement/data/data--listing";
import dataContent from "@openeuropa/bcl-procurement/data/data";
import dataSidebarDetails from "@openeuropa/bcl-procurement/data/data--sidebar-details";
import dataDetailsBanner from "@openeuropa/bcl-procurement/data/data--details-banner";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-procurement/procurement.html.twig";

const baseData = {
  content_type: "listing",
  header: layout.headerSimple,
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
  banner: {
    ...pageTitleBanner,
    title: "Procurement",
    title_tag: "h1",
  },
  pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
};

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

const renderDetails = (params) =>
  renderTwigFileAsNode(detailsTemplate, params, true);

describe("OE - Procurement", () => {
  test("listing renders correctly", () => {
    expect.assertions(1);
    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });

  test("details (opened) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(demoDetails)).resolves.toMatchSnapshot();
  });

  test("details (closed) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(demoDetailsClosed)).resolves.toMatchSnapshot();
  });
});

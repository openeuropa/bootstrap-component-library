import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import { pageTitleBanner } from "@openeuropa/bcl-base-templates/data/content-page";

import dataListing from "@openeuropa/bcl-vacancy/data/data--listing";
import dataContent from "@openeuropa/bcl-vacancy/data/data";
import dataSidebarDetails from "@openeuropa/bcl-vacancy/data/data--sidebar-details";
import dataOpenBanner from "@openeuropa/bcl-vacancy/data/data--open-banner";
import dataClosedBanner from "@openeuropa/bcl-vacancy/data/data--closed-banner";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-vacancy/vacancy.html.twig";

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

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

const renderDetails = (params) =>
  renderTwigFileAsNode(detailsTemplate, params, true);

describe("OE - Vacancy", () => {
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

import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

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

import dataListing from "@openeuropa/bcl-publication/data/data--listing";
import dataContent from "@openeuropa/bcl-publication/data/data";
import dataSidebarDetails from "@openeuropa/bcl-vacancy/data/data--sidebar-details";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-vacancy/vacancy.html.twig";

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
  header: layout.headerSimple,
  footer: layout.footer,
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

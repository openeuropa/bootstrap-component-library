import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import {
  headerSimple,
  footer,
} from "@openeuropa/bcl-base-templates/data/layout";
import {
  filterButton,
  pagination,
  sortSelect,
} from "@openeuropa/bcl-base-templates/data/listing-page";
import {
  banner,
  pageTitleBanner,
} from "@openeuropa/bcl-base-templates/data/content-page";

import dataListing from "@openeuropa/bcl-publication/data/data--listing";
import dataContent from "@openeuropa/bcl-publication/data/data";
import dataExtraDetails from "@openeuropa/bcl-publication/data/data--extra-details";

const share = `<div class="bg-gray-200 py-4 mt-4"><div class="container">Share module here</div></div>`;
const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-publication/publication.html.twig";

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: headerSimple,
  footer: footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataContent,
  ...dataExtraDetails,
  banner: banner,
  social_block: true,
  share: share,
  authors: {
    title: "Authors",
    listing: ["José Luis Pabón Barrios", "Adjur Tichar"],
  },
};

const demoDetailsMultiple = {
  ...baseData,
  ...dataContent,
  ...dataExtraDetails,
  banner: banner,
  social_block: true,
  share: share,
  authors: {
    title: "Authors",
    listing: [
      "José Luis Pabón Barrios",
      "Adjur Tichar",
      "Szép Mara",
      "Aurelia Panicucci",
      "José Luis Pabón Barrios",
      "Adjur Tichar",
      "Szép Mara",
      "Aurelia Panicucci",
      "José Luis Pabón Barrios",
      "Adjur Tichar",
      "Szép Mara",
      "Aurelia Panicucci",
    ],
  },
};

const demoListing = {
  ...baseData,
  ...dataListing,
  pagination: pagination,
  filter_button: filterButton,
  sort_select: sortSelect,
  banner: {
    ...pageTitleBanner,
    title: {
      content: "Publications",
    },
  },
};

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

const renderDetails = (params) =>
  renderTwigFileAsNode(detailsTemplate, params, true);

describe("OE - Publication", () => {
  test("listing renders correctly", () => {
    expect.assertions(1);
    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });

  test("details renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(demoDetails)).resolves.toMatchSnapshot();
  });

  test("details (multiple authors) renders correctly", () => {
    expect.assertions(1);
    return expect(
      renderDetails(demoDetailsMultiple)
    ).resolves.toMatchSnapshot();
  });
});

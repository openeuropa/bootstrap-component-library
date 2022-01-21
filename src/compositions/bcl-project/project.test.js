import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import dataDetails from "@openeuropa/bcl-project/data/data_details.js";
import dataListing from "@openeuropa/bcl-project/data/data_listing.js";
import header from "@openeuropa/bcl-data-header/data";
import footer from "@openeuropa/bcl-data-footer/data";
import drupalAttribute from "drupal-attribute";

const share = `<div class="bg-gray-200 py-4 mt-4"><div class="container">Share module here</div></div>`;

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-project/details.html.twig";

const baseData = {
  content_type: "listing",
  page_title: "Projects",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_header: true,
  with_footer: true,
};

const demoListing = {
  ...baseData,
  ...dataListing,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataDetails,
  share: share,
};

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

const renderDetails = (params) =>
  renderTwigFileAsNode(detailsTemplate, params, true);

describe("OE - Project", () => {
  test("listing renders correctly", () => {
    expect.assertions(1);
    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });
  test("details renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(demoDetails)).resolves.toMatchSnapshot();
  });
});

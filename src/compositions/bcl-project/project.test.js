import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import dataListing from "@openeuropa/bcl-project/data/data_listing.js";
import header from "@openeuropa/bcl-data-header/data";
import footer from "@openeuropa/bcl-data-footer/data";
import drupalAttribute from "drupal-attribute";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";

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

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

describe("OE - Project", () => {
  test("horizontal renders correctly", () => {
    expect.assertions(1);
    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });
});

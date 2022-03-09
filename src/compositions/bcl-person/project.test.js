import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import header from "@openeuropa/bcl-data-header/data--simple";
import dataListing from "@openeuropa/bcl-person/data/data--listing";
import dataDetails from "@openeuropa/bcl-person/data/data--details";
import footer from "@openeuropa/bcl-data-footer/data";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-person/person.html.twig";

const baseData = {
  content_type: "listing",
  page_title: "People",
  header: header,
  footer: footer,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
};

const demoDetails = {
  ...baseData,
  ...dataDetails,
};

const demoListing = {
  ...baseData,
  ...dataListing,
};

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

const renderDetails = (params) =>
  renderTwigFileAsNode(detailsTemplate, params, true);

describe("OE - Person", () => {
  test("listing renders correctly", () => {
    expect.assertions(1);
    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });

  test("details renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(demoDetails)).resolves.toMatchSnapshot();
  });
});

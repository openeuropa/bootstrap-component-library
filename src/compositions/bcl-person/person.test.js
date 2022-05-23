import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import { demoListing, demoDetails } from "@openeuropa/bcl-person/data/data";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-person/person.html.twig";

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

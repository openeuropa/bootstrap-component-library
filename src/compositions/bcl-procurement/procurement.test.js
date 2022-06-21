import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import {
  demoDetails,
  demoDetailsClosed,
  demoListing,
} from "@openeuropa/bcl-procurement/data/data";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-procurement/procurement.html.twig";

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

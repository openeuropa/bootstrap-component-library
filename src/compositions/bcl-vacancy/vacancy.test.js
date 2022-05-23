import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import {
  demoListing,
  demoDetails,
  demoDetailsClosed,
} from "@openeuropa/bcl-vacancy/data/data";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-vacancy/vacancy.html.twig";

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

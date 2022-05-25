import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import {
  demoDetails,
  demoDetailsMultiple,
  demoListing,
} from "@openeuropa/bcl-publication/data/data";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-publication/publication.html.twig";

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

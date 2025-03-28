import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
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

expect.extend(toHaveNoViolations);

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
      renderDetails(demoDetailsMultiple),
    ).resolves.toMatchSnapshot();
  });
  jest.setTimeout(10000);
  test(`listing passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(listingTemplate, demoListing)),
    ).toHaveNoViolations();
  });

  test(`details passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(detailsTemplate, demoDetails)),
    ).toHaveNoViolations();
  });
});

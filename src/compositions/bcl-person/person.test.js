import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import { demoListing, demoDetails } from "@openeuropa/bcl-person/data/data";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-person/person.html.twig";

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

const renderDetails = (params) =>
  renderTwigFileAsNode(detailsTemplate, params, true);

expect.extend(toHaveNoViolations);

describe("OE - Person", () => {
  test("listing renders correctly", () => {
    expect.assertions(1);
    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });

  test("details renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(demoDetails)).resolves.toMatchSnapshot();
  });

  test(`listing passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(listingTemplate, demoListing)),
    ).toHaveNoViolations();
  });

  test(`details passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(detailsTemplate, demoDetails)),
    ).toHaveNoViolations();
  });
});

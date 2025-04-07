import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import { demoData, demoListing } from "@openeuropa/bcl-event/data/data";

const detailsTemplate = "@oe-bcl/bcl-event/event.html.twig";
const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";

expect.extend(toHaveNoViolations);

const render = (params) => renderTwigFileAsNode(detailsTemplate, params, true);
const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

describe("OE - event", () => {
  test("page renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("listing renders correctly", () => {
    expect.assertions(1);

    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });
  jest.setTimeout(10000);
  test(`listing passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(listingTemplate, demoListing)),
    ).toHaveNoViolations();
  });

  test(`details passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(detailsTemplate, demoData)),
    ).toHaveNoViolations();
  });
});

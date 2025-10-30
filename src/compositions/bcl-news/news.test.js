import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import { demoData, demoListing } from "@openeuropa/bcl-news/data/data";

const template = "@oe-bcl/bcl-base-templates/content-type.html.twig";
const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);
const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

expect.extend(toHaveNoViolations);

describe("OE - News", () => {
  test("full page renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`full page passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData)),
    ).toHaveNoViolations();
  });

  test("listing renders correctly", () => {
    expect.assertions(1);

    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });

  test(`listing passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(listingTemplate, demoListing)),
    ).toHaveNoViolations();
  });
});

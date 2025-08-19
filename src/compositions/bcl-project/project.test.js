import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  demoListing,
  ongoingDemo,
  closedDemo,
  plannedDemo,
} from "@openeuropa/bcl-project/data/data";
import { ongoingDemo as ongoingDemoUCPKN } from "@openeuropa/bcl-project/data/ucpkn/data";

const listingTemplate = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const detailsTemplate = "@oe-bcl/bcl-project/project.html.twig";

const renderListing = (params) =>
  renderTwigFileAsNode(listingTemplate, params, true);

const renderDetails = (params) =>
  renderTwigFileAsNode(detailsTemplate, params, true);

expect.extend(toHaveNoViolations);

describe("OE - Project", () => {
  test("listing renders correctly", () => {
    expect.assertions(1);
    return expect(renderListing(demoListing)).resolves.toMatchSnapshot();
  });

  test("page (ongoing) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(ongoingDemo)).resolves.toMatchSnapshot();
  });

  test("page (planned) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(plannedDemo)).resolves.toMatchSnapshot();
  });

  test("page (closed) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(closedDemo)).resolves.toMatchSnapshot();
  });

  test("UCPKN page (ongoing) renders correctly", () => {
    expect.assertions(1);
    return expect(renderDetails(ongoingDemoUCPKN)).resolves.toMatchSnapshot();
  });

  test(`listing passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(listingTemplate, demoListing)),
    ).toHaveNoViolations();
  });
  jest.setTimeout(10000);
  test(`details passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(detailsTemplate, ongoingDemo)),
    ).toHaveNoViolations();
  }, 30000);
});

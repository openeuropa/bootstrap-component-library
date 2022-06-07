import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
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
});

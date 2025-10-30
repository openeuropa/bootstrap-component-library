import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import demoDataListing from "@openeuropa/bcl-glossary/data/data--listing";
import demoDataDetail from "@openeuropa/bcl-glossary/data/data--detail";

const pageTemplate = "@oe-bcl/bcl-glossary/glossary-detail.html.twig";
const listingPage = "@oe-bcl/bcl-glossary/glossary-listing.html.twig";

const render = (params) => renderTwigFileAsNode(pageTemplate, params);
const renderListing = (params) => renderTwigFileAsNode(listingPage, params);

expect.extend(toHaveNoViolations);
jest.setTimeout(10000);
describe("OE - Glossary listing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderListing(demoDataListing)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(listingPage, demoDataListing)),
    ).toHaveNoViolations();
  });
});

describe("OE - Glossary detail", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataDetail)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(pageTemplate, demoDataDetail)),
    ).toHaveNoViolations();
  });
});

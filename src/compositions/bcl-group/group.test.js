import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  dataLanding,
  dataListing,
  dataListingMember,
  dataListingContent,
} from "@openeuropa/bcl-group/data/data";

const template = "@oe-bcl/bcl-group/group.html.twig";
const templateListing = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const templateLanding = "@oe-bcl/bcl-group/group-landing.html.twig";

const render = (params) => renderTwigFileAsNode(template, params);
const renderListing = (params) => renderTwigFileAsNode(templateListing, params);
const renderLanding = (params) => renderTwigFileAsNode(templateLanding, params);

expect.extend(toHaveNoViolations);

describe("OE - Group listing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderListing(dataListing)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(templateListing, dataListing)),
    ).toHaveNoViolations();
  });
});

describe("OE - Group listing Content", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListingContent)).resolves.toMatchSnapshot();
  });
});

describe("OE - Group listing Member", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListingMember)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, dataListingMember)),
    ).toHaveNoViolations();
  });
});

describe("OE - Group landing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderLanding(dataLanding)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(templateLanding, dataLanding)),
    ).toHaveNoViolations();
  });
});

import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
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

describe("OE - Group listing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderListing(dataListing)).resolves.toMatchSnapshot();
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
});

describe("OE - Group landing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(renderLanding(dataLanding)).resolves.toMatchSnapshot();
  });
});
